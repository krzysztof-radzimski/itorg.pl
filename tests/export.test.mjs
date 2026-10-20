import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const languages = ["pl", "en", "de", "es", "fr", "ru", "cs", "sk"];
const root = resolve("out");
const home = (language) => language === "pl" ? "/" : `/${language}/`;
const privacy = (language) => language === "pl" ? "/polityka-prywatnosci/" : `/${language}/privacy/`;
const products = (language) => language === "pl" ? "/produkty/" : `/${language}/products/`;
const productIds = ["eap-legislator", "orion-ai", "baza-aktow-wlasnych", "abc-anon", "abc-kancelaria"];
const pageTypes = [["home", home], ["privacy", privacy], ["products", products],
  ...productIds.map((id) => [id, (language) => `${products(language)}${id}/`])];
const file = (path) => resolve(root, `.${path}`, "index.html");
const clean = (html) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((match) => match[0]);
const attr = (tag, name) => tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`, "i"))?.[1];

for (const language of languages) {
  for (const [kind, pathFor] of pageTypes) {
    const path = pathFor(language);
    test(`${language}: ${kind} — język, SEO, dostępność struktury i kompletność linków`, () => {
      assert.ok(existsSync(file(path)), `Brak eksportu ${path}; uruchom npm run build`);
      const html = clean(readFileSync(file(path), "utf8"));
      assert.equal(attr(tags(html, "html")[0], "lang"), language);
      assert.equal(tags(html, "h1").length, 1, "Dokładnie jeden nagłówek h1");
      assert.match(html, /<title>[^<]+<\/title>/);
      assert.ok(tags(html, "main").some((tag) => attr(tag, "id") === "main" && attr(tag, "tabindex") === "-1"));
      assert.ok(tags(html, "a").some((tag) => attr(tag, "href") === "#main" && attr(tag, "class") === "skip-link"));

      const links = tags(html, "link");
      assert.ok(links.some((tag) => attr(tag, "rel") === "canonical" && attr(tag, "href") === `https://itorg.pl${path}`));
      for (const alternate of [...languages, "x-default"]) {
        assert.ok(links.some((tag) => attr(tag, "hreflang") === alternate && attr(tag, "href") === `https://itorg.pl${pathFor(alternate === "x-default" ? "pl" : alternate)}`), `Brak hreflang: ${alternate}`);
      }

      const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
      assert.equal(new Set(ids).size, ids.length, "Identyfikatory muszą być unikalne");
      for (const match of html.matchAll(/\s(?:aria-labelledby|aria-controls)="([^"]+)"/g)) {
        for (const id of match[1].split(/\s+/)) assert.ok(ids.includes(id), `Brak celu ARIA: ${id}`);
      }
      for (const image of tags(html, "img")) {
        assert.notEqual(attr(image, "alt"), undefined, "Obraz wymaga alt");
        const src = attr(image, "src");
        assert.ok(src?.startsWith("/"), "Grafiki są hostowane lokalnie");
        assert.ok(existsSync(resolve(root, `.${src}`)), `Brak grafiki w eksporcie: ${src}`);
      }

      const anchors = tags(html, "a");
      const nav = html.match(/<nav\b[^>]*class="nav__links"[\s\S]*?<\/nav>/i)?.[0];
      assert.ok(nav, "Każda strona ma wspólne menu");
      const sectionHref = (hash) => kind === "home" ? hash : `${home(language)}${hash}`;
      assert.deepEqual(tags(nav, "a").map((tag) => attr(tag, "href")), [
        sectionHref("#uslugi"), products(language), sectionHref("#o-firmie"), sectionHref("#partner"), sectionHref("#kontakt"),
      ], "Menu prowadzi od usług i produktów do informacji o firmie oraz kontaktu");
      if (kind !== "home") {
        const brand = anchors.find((tag) => attr(tag, "class") === "nav__brand");
        assert.equal(attr(brand, "href"), home(language), "Logo podstrony prowadzi do strony głównej we właściwym języku");
      }
      for (const alternate of languages) {
        assert.ok(anchors.some((tag) => attr(tag, "hreflang") === alternate && attr(tag, "lang") === alternate && attr(tag, "href") === pathFor(alternate)), `Przełącznik nie zachowuje rodzaju strony: ${alternate}`);
      }
      for (const anchor of anchors) {
        const href = attr(anchor, "href");
        assert.ok(href, "Link musi mieć cel");
        if (!href.startsWith("/") && !href.startsWith("#")) continue;
        const target = new URL(href, `https://itorg.pl${path}`);
        const targetFile = file(target.pathname);
        assert.ok(existsSync(targetFile), `Nieistniejący link: ${href}`);
        if (target.hash) {
          const destination = clean(readFileSync(targetFile, "utf8"));
          assert.ok(destination.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `Nieistniejąca kotwica: ${href}`);
        }
      }
      if (kind === "home") {
        assert.ok(ids.includes("produkty"), "Brak zapowiedzi produktów");
        assert.ok(!/<section\b[^>]*id="(?:legislator|orion)"/.test(html), "Szczegóły produktów są na podstronach");
        assert.ok(anchors.some((tag) => attr(tag, "href") === products(language)));
        assert.equal((html.match(/class="service-card"/g) || []).length, 5);
        assert.ok(!html.includes("{years}"), "Lata muszą być wyliczone podczas eksportu");
      } else if (kind === "products") {
        for (const id of productIds) assert.ok(anchors.some((tag) => attr(tag, "href") === `${products(language)}${id}/`), `Brak linku do produktu: ${id}`);
      } else if (kind === "eap-legislator") {
        const product = html.match(/<section\b[^>]*id="legislator"[\s\S]*?<\/section>/i)?.[0];
        assert.ok(product, "Opis EAP Legislator musi być w statycznym HTML");
        assert.ok(product.includes("ITORG") && product.includes("ABC PRO"), "Brak informacji o rozwoju produktu dla ABC PRO");
        for (const url of ["https://abcpro.pl/eap-legislator", "https://abcpro.pl/legislator-gov", "https://abcpro.pl/dodatek-bestia"]) {
          assert.ok(tags(product, "a").some((tag) => attr(tag, "href") === url), `Brak odnośnika do produktu: ${url}`);
        }
      } else if (kind === "orion-ai") {
        assert.ok(ids.includes("orion"));
        assert.ok(anchors.some((tag) => attr(tag, "href") === "https://orion.abcpro.pl/"));
      } else if (kind === "privacy") {
        assert.equal((html.match(/id="legal-[^"]+"/g) || []).length, 10);
        assert.equal(tags(html, "caption").length, 1);
        assert.ok(tags(html, "th").every((tag) => ["col", "row"].includes(attr(tag, "scope"))));
      }
      const switches = tags(html, "input").filter((tag) => attr(tag, "role") === "switch");
      assert.equal(switches.length, 4, "Pełny panel cookie w każdym języku");
      if (language !== "pl") {
        for (const polish of ["Przejdź do treści", "Ustawienia plików cookie", "Szanujemy Twoją prywatność", "Wszystkie prawa zastrzeżone", "Główny produkt", "Uporządkowana treść w XML"]) assert.ok(!html.includes(polish), `Nieprzetłumaczony tekst: ${polish}`);
      }
    });
  }
}

test("Mapa witryny zawiera wszystkie 64 strony i poprawny robots.txt", () => {
  const sitemap = readFileSync(resolve(root, "sitemap.xml"), "utf8");
  assert.equal((sitemap.match(/<loc>/g) || []).length, languages.length * pageTypes.length);
  for (const language of languages) {
    for (const [, pathFor] of pageTypes) assert.ok(sitemap.includes(`<loc>https://itorg.pl${pathFor(language)}</loc>`));
  }
  assert.match(readFileSync(resolve(root, "robots.txt"), "utf8"), /Sitemap: https:\/\/itorg\.pl\/sitemap\.xml/);
});

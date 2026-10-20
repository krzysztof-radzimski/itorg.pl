import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const languages = ["pl", "en", "de", "es", "fr", "ru", "cs", "sk"];
const root = resolve("out");
const home = (language) => language === "pl" ? "/" : `/${language}/`;
const privacy = (language) => language === "pl" ? "/polityka-prywatnosci/" : `/${language}/privacy/`;
const file = (path) => resolve(root, `.${path}`, "index.html");
const clean = (html) => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((match) => match[0]);
const attr = (tag, name) => tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`, "i"))?.[1];

for (const language of languages) {
  for (const [kind, pathFor] of [["home", home], ["privacy", privacy]]) {
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
      for (const image of tags(html, "img")) assert.notEqual(attr(image, "alt"), undefined, "Obraz wymaga alt");

      const anchors = tags(html, "a");
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
        assert.ok(ids.includes("legislator"), "Brak sekcji edytora aktów prawnych");
        const product = html.match(/<section\b[^>]*id="legislator"[\s\S]*?<\/section>/i)?.[0];
        assert.ok(product, "Opis EAP Legislator musi być w statycznym HTML");
        assert.ok(product.includes("ITORG") && product.includes("ABC PRO"), "Brak informacji o rozwoju produktu dla ABC PRO");
        for (const url of ["https://abcpro.pl/eap-legislator", "https://abcpro.pl/legislator-gov", "https://abcpro.pl/dodatek-bestia"]) {
          assert.ok(tags(product, "a").some((tag) => attr(tag, "href") === url), `Brak odnośnika do produktu: ${url}`);
        }
        assert.ok(anchors.some((tag) => attr(tag, "href") === "https://orion.abcpro.pl/"));
        assert.ok(ids.includes("orion"));
        assert.equal((html.match(/class="service-card"/g) || []).length, 5);
        assert.ok(!html.includes("{years}"), "Lata muszą być wyliczone podczas eksportu");
      } else {
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

test("Mapa witryny zawiera wszystkie 16 stron i poprawny robots.txt", () => {
  const sitemap = readFileSync(resolve(root, "sitemap.xml"), "utf8");
  assert.equal((sitemap.match(/<loc>/g) || []).length, 16);
  for (const language of languages) {
    for (const pathFor of [home, privacy]) assert.ok(sitemap.includes(`<loc>https://itorg.pl${pathFor(language)}</loc>`));
  }
  assert.match(readFileSync(resolve(root, "robots.txt"), "utf8"), /Sitemap: https:\/\/itorg\.pl\/sitemap\.xml/);
});

import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { preferredLanguage, browserLanguages, savedLanguage, languageCodes, countryLanguages, languageDestination, preferenceCookie } from "../lib/language-preference.mjs";
import { onRequest as autoLanguage } from "../functions/_middleware.js";
import { onRequest as selectLanguage } from "../functions/language.js";

const eu = "bg cs da de el en es et fi fr ga hr hu it lt lv mt nl pl pt ro sk sl sv".split(" ");

test("Wszystkie 24 języki urzędowe UE oraz trzy dotychczasowe języki są dostępne", () => {
  assert.deepEqual([...languageCodes].sort(), [...eu, "be", "ru", "uk"].sort());
  assert.equal(Object.keys(countryLanguages).filter((country) => ["AT","BE","BG","CY","CZ","DE","DK","EE","ES","FI","FR","GR","HR","HU","IE","IT","LT","LU","LV","MT","NL","PL","PT","RO","SE","SI","SK"].includes(country)).length, 27);
});

test("Preferencje przeglądarki uwzględniają warianty regionalne, wagi i wykluczenia", () => {
  assert.deepEqual(browserLanguages("pt-BR;q=0.7,fi-FI;q=0.9,en;q=0,*;q=0.5,xx;q=1,nl;q=oops,de;q=2"), ["fi", "pt"]);
  assert.equal(preferredLanguage({ acceptLanguage: "xx,sv-SE;q=0.8,en;q=0.6" }), "sv");
  assert.equal(preferredLanguage({ country: "XX", acceptLanguage: "xx" }), "en");
  assert.equal(preferredLanguage({}), "en");
});

test("Kraj wybiera język, a państwa wielojęzyczne uwzględniają preferencje przeglądarki", () => {
  assert.equal(preferredLanguage({ country: "it", acceptLanguage: "en" }), "it");
  assert.equal(preferredLanguage({ country: "PL", acceptLanguage: "en" }), "pl");
  assert.equal(preferredLanguage({ country: "BE", acceptLanguage: "en,fr-BE;q=0.8,nl;q=0.5" }), "fr");
  assert.equal(preferredLanguage({ country: "FI", acceptLanguage: "sv-FI" }), "sv");
  assert.equal(preferredLanguage({ country: "IE", acceptLanguage: "ga-IE,en;q=0.5" }), "ga");
  assert.equal(preferredLanguage({ country: "MT", acceptLanguage: "en-GB,mt;q=0.9" }), "en");
});

test("Ręczny wybór ma pierwszeństwo, błędne cookies nie wpływają na wynik", () => {
  assert.equal(preferredLanguage({ cookie: "other=1; itorg-language=pl", country: "DE", acceptLanguage: "de" }), "pl");
  assert.equal(preferredLanguage({ cookie: "itorg-language=ja", country: "IT" }), "it");
  for (const value of ["__proto__", "constructor", "toString", "%70l", "//evil.example"]) assert.equal(savedLanguage(`itorg-language=${value}`), undefined);
});

function context(path, { country, cookie, acceptLanguage, userAgent, method = "GET" } = {}) {
  const request = new Request(`https://itorg.pl${path}`, { method, headers: {
    Cookie: cookie ?? "", "Accept-Language": acceptLanguage ?? "", "User-Agent": userAgent ?? "Test browser",
  } });
  Object.defineProperty(request, "cf", { value: { country } });
  let calls = 0;
  return { request, next: async () => { calls++; return new Response("statyczna strona", { headers: { "Content-Type": "text/html", "Content-Security-Policy": "default-src 'self'" } }); }, get calls() { return calls; } };
}

test("Automatyczne przekierowanie zachowuje podstronę i parametry, nie zapisuje automatycznego wyboru", async () => {
  for (const [source, destination] of [["/?ref=entry", "/it/?ref=entry"], ["/NetUnstick/", "/it/NetUnstick/"], ["/produkty/abc-anon/", "/it/products/abc-anon/"], ["/polityka-prywatnosci/", "/it/privacy/"]]) {
    const ctx = context(source, { country: "IT" });
    const response = await autoLanguage(ctx);
    assert.equal(response.status, 302);
    assert.equal(response.headers.get("Location"), `https://itorg.pl${destination}`);
    assert.equal(response.headers.get("Cache-Control"), "private, no-store");
    assert.equal(response.headers.get("Set-Cookie"), null);
    assert.equal(ctx.calls, 0);
  }
});

test("Jawne wersje językowe, grafiki i dokumenty App Store pozostają bez zmian", async () => {
  for (const path of ["/fr/", "/ga/products/", "/NetUnstick/en/privacy.html", "/NetUnstick/screenshots/it.png", "/flags/it.svg", "/not-found/"]) {
    const ctx = context(path, { country: "IT", cookie: "itorg-language=pl" });
    const response = await autoLanguage(ctx);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("Location"), null);
    assert.equal(ctx.calls, 1);
  }
});

test("Polski wybór i robot wyszukiwarki otrzymują statyczny polski dokument bez pętli", async () => {
  for (const options of [{ country: "PL" }, { country: "IT", cookie: "itorg-language=pl" }, { country: "IT", userAgent: "Googlebot" }]) {
    const response = await autoLanguage(context("/", options));
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("Location"), null);
    assert.match(response.headers.get("Content-Security-Policy"), /default-src/);
    assert.equal(response.headers.get("Cache-Control"), "private, no-store");
  }
});

test("Ręczny wybór działa dla każdego języka i produktu, także bez JavaScriptu", async () => {
  for (const language of languageCodes) {
    for (const page of ["home", "privacy", "products", "netunstick", "eap-legislator", "orion-ai", "baza-aktow-wlasnych", "abc-anon", "abc-kancelaria"]) {
      const response = selectLanguage(context(`/language?locale=${language}&page=${page}`));
      assert.equal(response.status, 302);
      assert.equal(response.headers.get("Location"), `https://itorg.pl${languageDestination(language, page)}`);
      assert.match(response.headers.get("Set-Cookie"), new RegExp(`^itorg-language=${language};`));
      assert.match(response.headers.get("Set-Cookie"), /Max-Age=31536000; SameSite=Lax; HttpOnly; Secure/);
      assert.equal(response.headers.get("Cache-Control"), "private, no-store");
      assert.equal(response.headers.get("X-Robots-Tag"), "noindex, nofollow");
    }
  }
  const polish = selectLanguage(context("/language?locale=pl&page=home"));
  const after = await autoLanguage(context("/", { country: "IT", cookie: polish.headers.get("Set-Cookie") }));
  assert.equal(after.status, 200, "Powrót na polską stronę po ręcznym wyborze nie przekierowuje ponownie");
});

test("Nieprawidłowe wybory i próby zewnętrznego przekierowania są odrzucane", () => {
  for (const query of ["locale=xx", "locale=__proto__", "locale=it&page=//evil.example", "locale=pl&page=constructor", "locale=it&page=../../"]) {
    const response = selectLanguage(context(`/language?${query}`));
    assert.equal(response.status, 400);
    assert.equal(response.headers.get("Location"), null);
    assert.equal(response.headers.get("Set-Cookie"), null);
  }
  assert.ok(!preferenceCookie("it", false).includes("Secure"), "Lokalny Podgląd HTTP może zapisać wybór");
});

test("Automatyka obsługuje HEAD i odrzuca metody zmieniające dane", async () => {
  assert.equal((await autoLanguage(context("/", { country: "IT", method: "HEAD" }))).status, 302);
  assert.equal((await autoLanguage(context("/", { method: "POST" }))).status, 405);
  assert.equal(selectLanguage(context("/language?locale=it", { method: "POST" })).status, 405);
});

test("Funkcje Cloudflare obejmują wyłącznie wejścia bez prefiksu i wybór języka", () => {
  const config = JSON.parse(readFileSync("public/_routes.json", "utf8"));
  assert.ok(config.include.includes("/language"));
  for (const page of ["home", "privacy", "products", "netunstick", "eap-legislator", "orion-ai", "baza-aktow-wlasnych", "abc-anon", "abc-kancelaria"]) {
    const path = languageDestination("pl", page);
    assert.ok(config.include.includes(path));
    if (path !== "/") assert.ok(config.include.includes(path.slice(0, -1)));
  }
  assert.ok(config.include.every((route) => !route.includes("*")), "Grafiki i strony językowe pozostają zasobami statycznymi");
});

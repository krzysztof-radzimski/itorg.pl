import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import { netunstickStoreUrls, isNetunstickStorePath } from "../lib/netunstick-store.mjs";
import { onRequest } from "../functions/_middleware.js";

// Niezależny kontrakt z metadanymi App Store, nie lista generowana z routingu witryny.
const expected = [
  ["pl", "marketing", "https://itorg.pl/NetUnstick/"],
  ["pl", "support", "https://itorg.pl/NetUnstick/pl/support"],
  ["pl", "privacy", "https://itorg.pl/NetUnstick/pl/privacy"],
  ["en", "marketing", "https://itorg.pl/en/NetUnstick/"],
  ["en", "support", "https://itorg.pl/NetUnstick/en/support"],
  ["en", "privacy", "https://itorg.pl/NetUnstick/en/privacy"],
  ["es", "marketing", "https://itorg.pl/es/NetUnstick/"],
  ["es", "support", "https://itorg.pl/NetUnstick/es/support"],
  ["es", "privacy", "https://itorg.pl/NetUnstick/es/privacy"],
];
const config = JSON.parse(readFileSync("public/_routes.json", "utf8"));

for (const [language, kind, address] of expected) {
  test(`App Store: ${language} ${kind}, stały adres, język i brak przekierowania geograficznego`, async () => {
    assert.equal(netunstickStoreUrls[language][kind], address);
    const path = new URL(address).pathname;
    const asset = kind === "marketing" ? resolve("out", `.${path}`, "index.html") : resolve("out", `.${path}.html`);
    const html = readFileSync(asset, "utf8");
    assert.match(html, new RegExp(`<html\\b[^>]*lang="${language}"`));
    assert.match(html, /<h1\b[^>]*>NetUnstick/);
    if (kind !== "marketing") {
      assert.match(html, /href="mailto:kr@itorg\.pl"/);
      assert.ok(!/<script\b/i.test(html), "Dokument dostępny bez wykonywania JavaScriptu");
    }
    assert.ok(config.exclude.some((rule) => rule.endsWith("*") ? path.startsWith(rule.slice(0, -1)) : path === rule), "Stały adres sklepu omija funkcje Cloudflare");

    const aliases = kind === "marketing" ? [path, path.slice(0, -1), `${path}index.html`] : [path, `${path}/`, `${path}.html`];
    for (const alias of aliases) {
      assert.ok(isNetunstickStorePath(alias), `Zachowanie aliasu ${alias}`);
      for (const method of ["GET", "HEAD"]) {
        for (const cookie of ["", "itorg-language=it", "itorg-language=pl"]) {
          const request = new Request(`https://itorg.pl${alias}?source=appstore`, { method, headers: { Cookie: cookie, "Accept-Language": "de-DE,en;q=0.8" } });
          Object.defineProperty(request, "cf", { value: { country: "IT" } });
          let calls = 0;
          const original = new Response(method === "HEAD" ? null : html, { headers: { "Content-Type": "text/html", "Content-Security-Policy": "default-src 'self'" } });
          const response = await onRequest({ request, next: async () => { calls++; return original; } });
          assert.equal(calls, 1);
          assert.equal(response, original, "Middleware przekazuje niezmienioną odpowiedź hostingu");
          assert.equal(response.status, 200);
          assert.equal(response.headers.get("Location"), null);
          assert.equal(response.headers.get("Set-Cookie"), null);
          assert.equal(response.headers.get("Content-Security-Policy"), "default-src 'self'");
        }
      }
    }
  });
}

test("Wyjątek sklepu nie obejmuje głównej strony, katalogu ani podobnych nazw", () => {
  for (const path of ["/", "/produkty/", "/NetUnstick-extra/", "/other/NetUnstick/", "/NetUnstick/pl/privacy-other"]) assert.equal(isNetunstickStorePath(path), false);
});

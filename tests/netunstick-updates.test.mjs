import assert from "node:assert/strict";
import { createHash, createPublicKey, verify } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import languages from "../lib/language-data.mjs";
import { onRequest } from "../functions/_middleware.js";

const updatePath = "/NetUnstick/updates/";
const source = resolve("public", `.${updatePath}`);
const exported = resolve("out", `.${updatePath}`);
const manifestBytes = readFileSync(resolve(source, "latest.json"));
const manifest = JSON.parse(manifestBytes);
const release = manifest.release;
const packageURL = new URL(release.packageURL);
const packageName = packageURL.pathname.slice(updatePath.length);
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

// Publiczny klucz AppUpdatePolicy.signingPublicKey z klienta NetUnstick.
const publicKey = createPublicKey({
  key: Buffer.concat([
    Buffer.from("302a300506032b6570032100", "hex"),
    Buffer.from("lzrrUsSJkYIWAsQFIEj4pNJjv7EINiM2VBESKZTjIIw=", "base64"),
  ]),
  format: "der",
  type: "spki",
});
const signingData = (value) => Buffer.from(JSON.stringify(Object.fromEntries(
  Object.keys(value).sort().map((key) => [key, value[key]])
)));

test("NetUnstick: autentyczny podpis manifestu i zgodność z kontraktem klienta", () => {
  assert.ok(manifestBytes.length <= 16 * 1024);
  assert.equal(release.schemaVersion, 1);
  assert.equal(release.bundleIdentifier, "org.netunstick.NetUnstick");
  assert.equal(release.architecture, "arm64");
  assert.match(release.version, /^\d+\.\d+\.\d+$/);
  assert.match(release.minimumSystemVersion, /^\d+\.\d+(?:\.\d+)?$/);
  assert.ok(Number.isSafeInteger(release.build) && release.build > 0);
  assert.ok(Number.isSafeInteger(release.byteCount) && release.byteCount > 0 && release.byteCount <= 25 * 1024 * 1024);
  assert.match(release.sha256, /^[a-f0-9]{64}$/);
  assert.equal(packageURL.origin, "https://itorg.pl");
  assert.equal(packageURL.search + packageURL.hash + packageURL.username + packageURL.password, "");
  assert.equal(packageURL.pathname, `${updatePath}NetUnstick-${release.version}-${release.build}-arm64.pkg`);
  const signature = Buffer.from(manifest.signature, "base64");
  assert.equal(signature.length, 64);
  assert.ok(verify(null, signingData(release), publicKey, signature), "Podpis Ed25519 musi pasować do klucza klienta");
  assert.ok(!verify(null, signingData({ ...release, build: release.build + 1 }), publicKey, signature), "Zmiana wydania unieważnia podpis");
  const bytes = readFileSync(resolve(source, packageName));
  assert.equal(bytes.length, release.byteCount);
  assert.equal(sha256(bytes), release.sha256);
});

test("NetUnstick: eksport zachowuje dokładne bajty manifestu, wszystkich PKG i sum SHA-256", () => {
  assert.deepEqual(readFileSync(resolve(exported, "latest.json")), manifestBytes);
  const packages = readdirSync(source).filter((name) => name.endsWith(".pkg"));
  assert.ok(packages.length > 0);
  for (const name of packages) {
    const bytes = readFileSync(resolve(source, name));
    assert.equal(bytes.subarray(0, 4).toString(), "xar!", "Rzeczywisty PKG zamiast wskaźnika Git LFS");
    assert.ok(bytes.length <= 25 * 1024 * 1024);
    assert.deepEqual(readFileSync(resolve(exported, name)), bytes, name);
    const checksum = readFileSync(resolve(source, `${name}.sha256`));
    const [hash, filename] = checksum.toString().trim().split(/\s+/);
    assert.equal(filename, name);
    assert.equal(hash, sha256(bytes));
    assert.deepEqual(readFileSync(resolve(exported, `${name}.sha256`)), checksum);
  }
});

test("NetUnstick: nagłówki manifestu i niezmiennych instalatorów zachowują reguły bezpieczeństwa", () => {
  const headers = readFileSync("public/_headers", "utf8");
  assert.equal(readFileSync("out/_headers", "utf8"), headers);
  const rules = (route) => headers.split("\n").slice(headers.split("\n").indexOf(route) + 1)
    .filter((line, index, lines) => lines.slice(0, index + 1).every((entry) => /^\s/.test(entry)))
    .join("\n");
  assert.ok(headers.includes(`${updatePath}latest.json\n`));
  assert.match(rules(`${updatePath}latest.json`), /Cache-Control: no-cache, max-age=0, must-revalidate/);
  assert.match(rules(`${updatePath}latest.json`), /Content-Type: application\/json; charset=utf-8/);
  assert.match(rules(`${updatePath}*.pkg`), /Cache-Control: public, max-age=31536000, immutable/);
  assert.match(rules(`${updatePath}*.pkg`), /Content-Type: application\/octet-stream/);
  assert.match(rules(`${updatePath}*.sha256`), /Content-Type: text\/plain; charset=utf-8/);
  assert.match(headers, /X-Content-Type-Options: nosniff/);
  assert.match(headers, /Content-Security-Policy: default-src 'self'/);
});

test("NetUnstick: manifest i PKG omijają dobór języka bez cookies i przekierowań", async () => {
  const routes = JSON.parse(readFileSync("public/_routes.json", "utf8"));
  assert.ok(routes.exclude.includes("/NetUnstick/*"));
  for (const path of [`${updatePath}latest.json`, packageURL.pathname]) {
    for (const method of ["GET", "HEAD"]) {
      for (const [country, cookie] of [["DE", ""], ["ES", "itorg-language=es"], ["PL", "itorg-language=uk"]]) {
        const request = new Request(`https://itorg.pl${path}`, { method, headers: { Cookie: cookie, "Accept-Language": "de-DE" } });
        Object.defineProperty(request, "cf", { value: { country } });
        const original = new Response(method === "HEAD" ? null : "zasób");
        const response = await onRequest({ request, next: async () => original });
        assert.equal(response, original);
        assert.equal(response.status, 200);
        assert.equal(response.headers.get("Location"), null);
        assert.equal(response.headers.get("Set-Cookie"), null);
      }
    }
  }
});

test("NetUnstick: wszystkie języki prowadzą do aktualnego PKG, a prywatność wyjaśnia sprawdzanie wersji", () => {
  for (const language of Object.keys(languages)) {
    const path = language === "pl" ? "NetUnstick/index.html" : `${language}/NetUnstick/index.html`;
    const html = readFileSync(resolve("out", path), "utf8");
    const download = html.match(new RegExp(`<a\\b[^>]*href="${packageURL.pathname.replaceAll(".", "\\.")}"[^>]*>`));
    assert.ok(download, language);
    assert.match(download[0], /\sdownload(?:=|\s|>)/);
    assert.match(html, /Apple silicon/);
    assert.ok(html.includes(release.version));
  }
  const disclosures = { pl: "Przy włączonym sprawdzaniu aktualizacji", en: "When update checks are enabled", es: "Con la comprobación activada" };
  for (const [language, text] of Object.entries(disclosures)) {
    const html = readFileSync(resolve("out/NetUnstick", language, "privacy.html"), "utf8");
    assert.ok(html.includes(text), language);
    assert.match(html, /itorg\.pl/);
    assert.match(html, /PKG/);
    assert.match(html, /HTTP/);
  }
});

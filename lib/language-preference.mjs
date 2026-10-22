import languages from "./language-data.mjs";

export const languageCookie = "itorg-language";
export const languageCookieMaxAge = 60 * 60 * 24 * 365;
export const languageCodes = Object.keys(languages);

export const countryLanguages = {
  AT: ["de"], BE: ["nl", "fr", "de"], BG: ["bg"], CY: ["el"], CZ: ["cs"],
  DE: ["de"], DK: ["da"], EE: ["et"], ES: ["es"], FI: ["fi", "sv"],
  FR: ["fr"], GR: ["el"], HR: ["hr"], HU: ["hu"], IE: ["en", "ga"],
  IT: ["it"], LT: ["lt"], LU: ["fr", "de"], LV: ["lv"], MT: ["mt", "en"],
  NL: ["nl"], PL: ["pl"], PT: ["pt"], RO: ["ro"], SE: ["sv"], SI: ["sl"], SK: ["sk"],
  GB: ["en"], US: ["en"], AU: ["en"], NZ: ["en"], CA: ["en", "fr"],
  CH: ["de", "fr", "it"], UA: ["uk"], BY: ["be", "ru"], RU: ["ru"],
};

export function isLanguage(value) {
  return typeof value === "string" && Object.hasOwn(languages, value);
}

export function savedLanguage(cookie = "") {
  for (const part of cookie.split(";")) {
    const [name, value] = part.trim().split("=");
    if (name === languageCookie && isLanguage(value)) return value;
  }
}

export function browserLanguages(header = "") {
  return header.split(",").map((entry, index) => {
    const [tag, ...parameters] = entry.trim().toLowerCase().split(";");
    const parameter = parameters.find((value) => value.trim().startsWith("q="));
    const quality = parameter === undefined ? 1 : Number(parameter.trim().slice(2));
    return { language: tag.split("-")[0], quality, index };
  }).filter(({ language, quality }) => isLanguage(language) && Number.isFinite(quality) && quality > 0 && quality <= 1)
    .sort((a, b) => b.quality - a.quality || a.index - b.index)
    .map(({ language }) => language);
}

export function preferredLanguage({ cookie = "", country, acceptLanguage = "" } = {}) {
  const saved = savedLanguage(cookie);
  if (saved) return saved;
  const browser = browserLanguages(acceptLanguage);
  const regional = countryLanguages[String(country ?? "").toUpperCase()];
  if (regional) return browser.find((language) => regional.includes(language)) ?? regional[0];
  return browser[0] ?? "en";
}

const routes = {
  home: ["/", "/"], privacy: ["/polityka-prywatnosci/", "/privacy/"],
  products: ["/produkty/", "/products/"], netunstick: ["/NetUnstick/", "/NetUnstick/"],
  "eap-legislator": ["/produkty/eap-legislator/", "/products/eap-legislator/"],
  "orion-ai": ["/produkty/orion-ai/", "/products/orion-ai/"],
  "baza-aktow-wlasnych": ["/produkty/baza-aktow-wlasnych/", "/products/baza-aktow-wlasnych/"],
  "abc-anon": ["/produkty/abc-anon/", "/products/abc-anon/"],
  "abc-kancelaria": ["/produkty/abc-kancelaria/", "/products/abc-kancelaria/"],
};

export function languageDestination(language, page = "home") {
  if (!isLanguage(language) || !Object.hasOwn(routes, page)) return undefined;
  return language === "pl" ? routes[page][0] : `/${language}${routes[page][1]}`;
}

export function defaultPage(pathname) {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return Object.keys(routes).find((page) => routes[page][0] === path);
}

export function languageSelectionPath(language, page = "home") {
  return `/language?locale=${encodeURIComponent(language)}&page=${encodeURIComponent(page)}`;
}

export function preferenceCookie(language, secure = true) {
  return `${languageCookie}=${language}; Path=/; Max-Age=${languageCookieMaxAge}; SameSite=Lax; HttpOnly${secure ? "; Secure" : ""}`;
}

export function languageResponseHeaders() {
  return {
    "Cache-Control": "private, no-store", Vary: "Cookie, Accept-Language",
    "X-Content-Type-Options": "nosniff", "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Frame-Options": "SAMEORIGIN", "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
  };
}

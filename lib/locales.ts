export const locales = ["pl", "en", "de", "es", "fr", "ru", "cs", "sk", "be", "uk"] as const;
export type Locale = (typeof locales)[number];

export const productIds = ["eap-legislator", "orion-ai", "baza-aktow-wlasnych", "abc-anon", "abc-kancelaria"] as const;
export type ProductId = (typeof productIds)[number];
export const pages = ["home", "privacy", "products", "netunstick", ...productIds] as const;
export type PageId = (typeof pages)[number];

export const localeNames: Record<Locale, string> = {
  pl: "Polski", en: "English", de: "Deutsch", es: "Español",
  fr: "Français", ru: "Русский", cs: "Čeština", sk: "Slovenčina",
  be: "Беларуская", uk: "Українська",
};

export const openGraphLocales: Record<Locale, string> = {
  pl: "pl_PL", en: "en_GB", de: "de_DE", es: "es_ES",
  fr: "fr_FR", ru: "ru_RU", cs: "cs_CZ", sk: "sk_SK",
  be: "be_BY", uk: "uk_UA",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function homePath(locale: Locale): string {
  return locale === "pl" ? "/" : `/${locale}/`;
}

export function privacyPath(locale: Locale): string {
  return locale === "pl" ? "/polityka-prywatnosci/" : `/${locale}/privacy/`;
}

export function productsPath(locale: Locale): string {
  return locale === "pl" ? "/produkty/" : `/${locale}/products/`;
}

export function productPath(locale: Locale, product: ProductId): string {
  return `${productsPath(locale)}${product}/`;
}

export function isProductId(value: string): value is ProductId {
  return productIds.includes(value as ProductId);
}

export function pagePath(locale: Locale, page: PageId = "home"): string {
  if (page === "home") return homePath(locale);
  if (page === "privacy") return privacyPath(locale);
  if (page === "products") return productsPath(locale);
  if (page === "netunstick") return locale === "pl" ? "/NetUnstick/" : `/${locale}/NetUnstick/`;
  return productPath(locale, page);
}

export function navigationHref(href: string, locale: Locale, onHome = false): string {
  return href.startsWith("#") && !onHome ? `${homePath(locale)}${href}` : href;
}

import languages from "./language-data.mjs";
import { languageDestination } from "./language-preference.mjs";

export type Locale = keyof typeof languages;
export const locales = Object.keys(languages) as Locale[];
export const euLocales = locales.filter((locale) => !["be", "ru", "uk"].includes(locale));

export const productIds = ["eap-legislator", "orion-ai", "baza-aktow-wlasnych", "abc-anon", "abc-kancelaria"] as const;
export type ProductId = (typeof productIds)[number];
export const pages = ["home", "privacy", "products", "netunstick", ...productIds] as const;
export type PageId = (typeof pages)[number];

export const localeNames = Object.fromEntries(locales.map((locale) => [locale, languages[locale].name])) as Record<Locale, string>;
export const openGraphLocales = Object.fromEntries(locales.map((locale) => [locale, languages[locale].og])) as Record<Locale, string>;
export const localeFlags = Object.fromEntries(locales.map((locale) => [locale, languages[locale].flag])) as Record<Locale, string>;

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
  return languageDestination(locale, page)!;
}

export function navigationHref(href: string, locale: Locale, onHome = false): string {
  return href.startsWith("#") && !onHome ? `${homePath(locale)}${href}` : href;
}

export const locales = ["pl", "en", "de", "es", "fr", "ru", "cs", "sk"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  pl: "Polski", en: "English", de: "Deutsch", es: "Español",
  fr: "Français", ru: "Русский", cs: "Čeština", sk: "Slovenčina",
};

export const openGraphLocales: Record<Locale, string> = {
  pl: "pl_PL", en: "en_GB", de: "de_DE", es: "es_ES",
  fr: "fr_FR", ru: "ru_RU", cs: "cs_CZ", sk: "sk_SK",
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

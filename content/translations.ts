import { site, type Site } from "./site";
import { en } from "./locales/en";
import { de } from "./locales/de";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import { ru } from "./locales/ru";
import { cs } from "./locales/cs";
import { sk } from "./locales/sk";
import { be } from "./locales/be";
import { uk } from "./locales/uk";
import type { Locale } from "@/lib/locales";
import { euCopies } from "./eu";
import { createEuSite } from "./eu/schema";
import { languageNotices } from "./legal/language-notices";

const euSites = Object.fromEntries(Object.entries(euCopies).map(([locale, copy]) => [locale, createEuSite(locale as Locale, copy)])) as Record<keyof typeof euCopies, Site>;
const translations: Record<Locale, Site> = { pl: site, en, de, es, fr, ru, cs, sk, be, uk, ...euSites };

export function getSite(locale: Locale): Site {
  const copy = translations[locale];
  const notice = locale in euCopies ? euCopies[locale as keyof typeof euCopies].languageNotice : languageNotices[locale as keyof typeof languageNotices];
  return { ...copy, legal: { ...copy.legal, updated: "2026-10-22" }, privacy: {
    ...copy.privacy,
    sections: copy.privacy.sections.map((section) => section.id === "cookies"
      ? { ...section, paragraphs: [notice.description, ...section.paragraphs.slice(1)] }
      : section.id === "retention" ? { ...section, paragraphs: [...section.paragraphs, notice.retention] } : section),
    tableRows: [copy.privacy.tableRows[0], { name: "itorg-language (cookie)", purpose: notice.purpose, basis: copy.privacy.tableRows[0].basis }, ...copy.privacy.tableRows.slice(1)],
  } };
}

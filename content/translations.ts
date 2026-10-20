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

const translations: Record<Locale, Site> = { pl: site, en, de, es, fr, ru, cs, sk, be, uk };
export function getSite(locale: Locale): Site { return translations[locale]; }

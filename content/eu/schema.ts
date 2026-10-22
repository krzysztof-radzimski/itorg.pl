import { site, legislatorUrls, type Site, type ServiceItem } from "../site";
import type { CookieCopy, PrivacyCopy } from "../legal/types";
import type { Locale } from "@/lib/locales";
import type { NetUnstickCopy } from "../netunstick";

type Pair = [string, string];
export interface EuCopy {
  country: string;
  brand: Pair;
  hero: [string, string, string, string, string, string, string];
  stats: [string, string, string];
  about: [string, string, string, string, string, string];
  services: { title: string; subtitle: string; items: [Pair, Pair, Pair, Pair, Pair] };
  values: { eyebrow: string; title: string; items: [Pair, Pair, Pair, Pair] };
  legislator: { eyebrow: string; lead: string; description: string; features: [Pair, Pair, Pair]; editions: [[string, string, string], [string, string, string], [string, string, string]] };
  partner: { eyebrow: string; title: string; intro: string; note: string; products: [string, string, string, string] };
  orion: { eyebrow: string; lead: string; description: string; cta: string };
  products: Site["products"];
  contact: [string, string, string];
  footer: Site["footer"];
  seo: Pair;
  ui: Site["ui"];
  cookies: CookieCopy;
  privacy: PrivacyCopy;
  netunstick: NetUnstickCopy;
  languageNotice: { description: string; purpose: string; retention: string };
}

// Każdy słownik jest kompletny: brak zastępczych tekstów w innym języku.
export function createEuSite(locale: Locale, copy: EuCopy): Site {
  const icons: ServiceItem["icon"][] = ["legislation", "automation", "integration", "digitization", "ai"];
  return {
    brand: { ...site.brand, eyebrow: copy.brand[0], tagline: copy.brand[1] },
    company: { ...site.company, country: copy.country },
    hero: { eyebrow: copy.hero[0], titleLead: copy.hero[1], titleAccent: copy.hero[2], subtitle: copy.hero[3], primaryCta: copy.hero[4], secondaryCta: copy.hero[5], scrollLabel: copy.hero[6] },
    stats: copy.stats.map((label, index) => ({ kind: index ? "static" : "years", number: ["", "XML", "AI"][index], suffix: "", label })),
    about: { eyebrow: copy.about[0], title: copy.about[1], lead: copy.about[2], paragraphs: copy.about.slice(3) },
    services: { eyebrow: copy.ui.platform, title: copy.services.title, subtitle: copy.services.subtitle, items: copy.services.items.map(([title, desc], index) => ({ icon: icons[index], title, desc })) },
    values: { ...copy.values, items: copy.values.items.map(([title, desc], index) => ({ num: `0${index + 1}`, title, desc })) },
    legislator: { ...copy.legislator, title: "EAP Legislator", features: copy.legislator.features.map(([title, desc]) => ({ title, desc })), editions: copy.legislator.editions.map(([name, desc, cta], index) => ({ name, desc, cta, href: [legislatorUrls.editor, legislatorUrls.government, legislatorUrls.finance][index] })) },
    partner: { ...copy.partner, products: copy.partner.products.map((desc, index) => ({ name: ["EAP Legislator", "Baza Aktów Własnych", "ABC ANON", "ABC Kancelaria"][index], desc })) },
    orion: { ...copy.orion, title: "Orion AI" },
    products: copy.products,
    contact: { eyebrow: copy.contact[0], title: copy.contact[1], subtitle: copy.contact[2] },
    footer: copy.footer,
    legal: { ...site.legal, privacyUrl: `/${locale}/privacy/` },
    nav: [
      { label: copy.ui.platform, href: "#uslugi" }, { label: copy.products.title, href: `/${locale}/products/` },
      { label: copy.about[0], href: "#o-firmie" }, { label: copy.partner.eyebrow, href: "#partner" }, { label: copy.contact[0], href: "#kontakt" },
    ],
    seo: { ...site.seo, title: copy.seo[0], description: copy.seo[1] },
    ui: copy.ui, cookies: copy.cookies, privacy: copy.privacy,
  };
}

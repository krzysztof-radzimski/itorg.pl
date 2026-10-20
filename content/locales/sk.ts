import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/sk";

export const sk: Site = {
  brand: { ...site.brand, eyebrow: "Digitalizácia verejnej správy", tagline: "Softvér pre verejnú správu." },
  company: { ...site.company, country: "Poľsko" },
  hero: {
    eyebrow: "Legislatíva · dokumenty · AI", titleLead: "Softvér", titleAccent: "pre úrady",
    subtitle: "Už {years} rokov vyvíjame softvér na prípravu právnych aktov, správu dokumentov a automatizáciu práce poľských úradov.",
    primaryCta: "Kontaktujte nás", secondaryCta: "Naše služby", scrollLabel: "Posunúť nižšie",
  },
  stats: [
    { kind: "years", number: "", suffix: "", label: "Rokov činnosti" },
    { kind: "static", number: "XML", suffix: "", label: "Právne dokumenty" },
    { kind: "static", number: "AI", suffix: "", label: "Práca s dokumentmi" },
  ],
  about: {
    eyebrow: "O spoločnosti", title: "Vyvíjame a zavádzame softvér",
    lead: "ITORG od roku 2009 navrhuje, vyvíja a zavádza softvér pre úrady a verejné inštitúcie v Poľsku.",
    paragraphs: [
      "Pomáhame s prípravou právnych aktov, spracovaním agendy a elektronickým obehom dokumentov.",
      "Pre ABC PRO vyvíjame EAP Legislator, editor uznesení, nariadení a ďalších právnych aktov. Podieľame sa aj na zavádzaní systémov ABC PRO.",
      "Vytvárame nástroje umelej inteligencie na prácu s dokumentmi a analýzu informácií. Spolupracujeme na vývoji platformy Orion spoločnosti ABC PRO.",
    ],
  },
  services: {
    eyebrow: "Služby", title: "S čím vám môžeme pomôcť", subtitle: "Navrhujeme, vyvíjame a prepájame systémy pre verejnú správu.",
    items: [
      { icon: "legislation", title: "Legislatívne systémy", desc: "Vyvíjame nástroje na prípravu, podpisovanie a odovzdávanie právnych aktov." },
      { icon: "automation", title: "Automatizácia procesov", desc: "Automatizujeme opakujúce sa úkony pri spracovaní agendy a obehu dokumentov." },
      { icon: "integration", title: "Systémové integrácie", desc: "Prepájame systémy, aby si mohli vymieňať údaje a zdieľať informácie." },
      { icon: "digitization", title: "Softvér pre úrady", desc: "Navrhujeme a zavádzame aplikácie na spracovanie agendy, správu dokumentov a verejné služby." },
      { icon: "ai", title: "Vývoj nástrojov AI", desc: "Vytvárame nástroje umelej inteligencie na prácu s dokumentmi, analýzu informácií a automatizáciu úloh." },
    ],
  },
  values: {
    eyebrow: "Spolupráca", title: "Ako pracujeme",
    items: [
      { num: "01", title: "Skúsenosti s verejnou správou", desc: "Vyvíjame systémy pre legislatívu a správu dokumentov. V projektoch zohľadňujeme postupy a spôsob práce úradov." },
      { num: "02", title: "Vývoj a údržba", desc: "Softvér ďalej rozvíjame a podporujeme jeho prevádzku po zavedení." },
      { num: "03", title: "Ochrana údajov", desc: "Pri návrhu systémov zohľadňujeme bezpečnosť údajov a pravidlá prístupu k informáciám." },
      { num: "04", title: "Podľa potrieb úradu", desc: "Zmeny navrhujeme s ohľadom na potreby používateľov a systémy, ktoré už používajú." },
    ],
  },
  legislator: {
    eyebrow: "Editor právnych aktov",
    title: "EAP Legislator",
    lead: "Editor pre úrady, ktoré pripravujú uznesenia, nariadenia a ďalšie právne akty.",
    description: "ITORG vyvíja EAP Legislator pre ABC PRO. Program podporuje prípravu návrhov v XML, pripomienkovanie, elektronický podpis a odovzdanie na zverejnenie alebo právny dohľad.",
    features: [
      {
        title: "Návrhy vo formáte XML",
        desc: "Šablóny a prevod do XML pomáhajú pripraviť právne akty so zachovaním ich štruktúry."
      },
      {
        title: "Pripomienky a história zmien",
        desc: "Komentáre, záznamy zmien a prehľady umožňujú overiť predložené návrhy aj spôsob ich vyhodnotenia."
      },
      {
        title: "Podpisovanie a odosielanie",
        desc: "Podpisujte dokumenty v editore a odovzdávajte ich na zverejnenie alebo právny dohľad."
      }
    ],
    editions: [
      {
        name: "EAP Legislator",
        desc: "Edície Standard, Premium a Legalis pre úrady a inštitúcie pripravujúce právne akty. Dostupné funkcie závisia od zvolenej edície.",
        cta: "Spoznajte EAP Legislator",
        href: legislatorUrls.editor
      },
      {
        name: "Legislator pre štátnu správu",
        desc: "Verzia pre ministerstvá a ústredné úrady, založená na šablóne poľského Vládneho legislatívneho centra (RCL), pre akty odovzdávané do Dziennik Ustaw a Monitor Polski.",
        cta: "Spoznajte Legislator GOV",
        href: legislatorUrls.government
      },
      {
        name: "Verejné financie — doplnok Besti@",
        desc: "Importuje údaje XML z Besti@ pre rozpočtové uznesenia, ich zmeny, viacročné finančné prognózy a správy o plnení rozpočtu. Vytvára prehľadné tabuľky na zverejnenie a dohľad poľských regionálnych účtovných komôr (RIO).",
        cta: "Spoznajte doplnok Besti@",
        href: legislatorUrls.finance
      }
    ]
  },
  partner: {
    eyebrow: "Partnerstvo", title: "Spolupráca s ABC PRO",
    intro: "S ABC PRO Sp. z o.o. spolupracujeme na vývoji a zavádzaní softvéru pre legislatívu a správu dokumentov vo verejnej správe.",
    note: "Príklady systémov ABC PRO:",
    products: [
      { name: "EAP Legislator", desc: "Editor právnych aktov v XML so sledovaním zmien, elektronickým podpisom a odovzdaním na zverejnenie." },
      { name: "Baza Aktów Własnych", desc: "Systém na vlastné zbierky právnych aktov organizácie s vyhľadávaním, registrami a integráciou s legislatívnou databázou." },
      { name: "ABC ANON", desc: "Nástroj na skrytie vybraných údajov v súboroch PDF, DOCX a skenoch pred ich zdieľaním." },
      { name: "ABC Kancelaria", desc: "Systém elektronickej správy dokumentov na korešpondenciu, evidencie a prichádzajúce aj odchádzajúce dokumenty v papierovej a elektronickej podobe." },
    ],
  },
  orion: {
    eyebrow: "Nástroje AI", title: "Orion AI",
    lead: "Platforma umelej inteligencie spoločnosti ABC PRO pre verejnú správu a podniky.",
    description: "ITORG spolupracuje na vývoji Orionu a vytvára nástroje AI na prácu s dokumentmi, analýzu informácií a automatizáciu úloh.",
    cta: "Spoznajte platformu Orion AI",
  },
  contact: { eyebrow: "Kontakt", title: "Porozprávajme sa o vašom projekte", subtitle: "Potrebujete softvér na správu dokumentov, prepojenie systémov alebo nástroj AI? Napíšte nám alebo zavolajte a opíšte, čo chcete zlepšiť." },
  footer: { tagline: "Legislatívne systémy, obeh dokumentov a nástroje AI.", privacy: "Zásady ochrany osobných údajov", cookieSettings: "Nastavenia cookies" },
  legal: { ...site.legal, privacyUrl: "/sk/privacy/" },
  nav: [
    { label: "O spoločnosti", href: "#o-firmie" }, { label: "Služby", href: "#uslugi" },
    { label: "Legislator", href: "#legislator" }, { label: "Prístup", href: "#wartosci" },
    { label: "ABC PRO", href: "#partner" }, { label: "Orion AI", href: "#orion" }, { label: "Kontakt", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG — Softvér pre verejnú správu", description: "Vyvíjame a zavádzame softvér pre úrady: legislatívne systémy, obeh dokumentov, integrácie a nástroje AI. Pre ABC PRO vyvíjame EAP Legislator." },
  ui: {
    skip: "Prejsť na obsah", home: "Úvodná stránka", mainNav: "Hlavná navigácia", footerNav: "Navigácia v päte", navigation: "Navigácia", menu: "Menu",
    languages: "Vybrať jazyk", language: "Jazyk", facts: "Spoločnosť v skratke", inBrief: "V skratke", founded: "Založené", owner: "Majiteľ",
    headquarters: "Sídlo", specialization: "Špecializácia", specializationValue: "Legislatíva · správa dokumentov · integrácie · AI", partner: "Partner", platform: "Služby",
    partnerCta: "Spoznajte riešenia ABC PRO", writeEmail: "Napísať e-mail", address: "Adresa", phone: "Telefón", email: "E-mail", eDelivery: "Poľské elektronické doručovanie",
    registration: "Registračné údaje", bank: "Bankový účet", rights: "Všetky práva vyhradené.", close: "Zavrieť",
  },
  cookies, privacy,
};

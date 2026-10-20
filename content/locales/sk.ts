import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/sk";

export const sk: Site = {
  brand: { ...site.brand, eyebrow: "Digitalizácia verejnej správy", tagline: "Softvér pre verejnú správu." },
  company: { ...site.company, country: "Poľsko" },
  hero: {
    eyebrow: "Legislatíva · správa dokumentov · AI", titleLead: "Premyslené riešenia", titleAccent: "pre verejnú správu a firmy",
    subtitle: "Už {years} rokov vyvíjame softvér prispôsobený potrebám samospráv, štátnej správy a ďalších inštitúcií. Zefektívňujeme prácu s dokumentmi, integrujeme systémy a automatizujeme procesy.",
    primaryCta: "Kontaktujte nás", secondaryCta: "Naše služby", scrollLabel: "Posunúť nižšie",
  },
  stats: [
    { kind: "years", number: "", suffix: "", label: "Rokov činnosti" },
    { kind: "static", number: "XML", suffix: "", label: "Právne dokumenty" },
    { kind: "static", number: "AI", suffix: "", label: "Práca s dokumentmi" },
  ],
  about: {
    eyebrow: "O spoločnosti", title: "Vyvíjame a zavádzame softvér",
    lead: "ITORG od roku 2009 navrhuje, vyvíja a zavádza softvér pre územné samosprávne celky, štátnu správu a ďalšie inštitúcie v Poľsku.",
    paragraphs: [
      "Podporujeme legislatívne procesy, vedenie spisov a elektronickú správu dokumentov.",
      "Pre ABC PRO vyvíjame EAP Legislator, editor uznesení, nariadení a ďalších právnych aktov. Podieľame sa aj na zavádzaní systémov ABC PRO.",
      "Vyvíjame nástroje využívajúce umelú inteligenciu na spracovanie dokumentov a analýzu informácií. Podieľame sa na vývoji platformy Orion spoločnosti ABC PRO.",
    ],
  },
  services: {
    eyebrow: "Služby", title: "Naše služby", subtitle: "Navrhujeme, vyvíjame a integrujeme informačné systémy podporujúce plnenie verejných úloh.",
    items: [
      { icon: "legislation", title: "Legislatívne systémy", desc: "Vyvíjame nástroje na prípravu a podpisovanie právnych aktov a ich odovzdávanie na úradné vyhlásenie a orgánom dozoru." },
      { icon: "automation", title: "Automatizácia procesov", desc: "Automatizujeme opakujúce sa úkony pri vedení spisov a správe dokumentov." },
      { icon: "integration", title: "Integrácia systémov", desc: "Integrujeme informačné systémy a umožňujeme výmenu údajov medzi aplikáciami." },
      { icon: "digitization", title: "Softvér pre úrady", desc: "Navrhujeme a zavádzame aplikácie na vedenie spisov, správu dokumentov a poskytovanie verejných služieb." },
      { icon: "ai", title: "Vývoj nástrojov AI", desc: "Vyvíjame riešenia využívajúce umelú inteligenciu na spracovanie dokumentov, analýzu informácií a automatizáciu procesov." },
    ],
  },
  values: {
    eyebrow: "Spolupráca", title: "Ako realizujeme projekty",
    items: [
      { num: "01", title: "Znalosť administratívnych procesov", desc: "Pri návrhu riešení zohľadňujeme legislatívne postupy, pravidlá vedenia spisov a správy dokumentov." },
      { num: "02", title: "Vývoj a údržba", desc: "Softvér po zavedení ďalej vyvíjame a udržiavame s ohľadom na meniace sa potreby používateľov." },
      { num: "03", title: "Ochrana údajov", desc: "Pri návrhu systémov zohľadňujeme bezpečnosť údajov a pravidlá prístupu k informáciám." },
      { num: "04", title: "Prispôsobenie procesom inštitúcie", desc: "Riešenia prispôsobujeme organizácii práce inštitúcie, potrebám používateľov a existujúcemu IT prostrediu." },
    ],
  },
  legislator: {
    eyebrow: "Editor právnych aktov",
    title: "EAP Legislator",
    lead: "Editor pre územné samosprávne celky a štátnu správu, ktorý podporuje prípravu uznesení, nariadení a ďalších právnych aktov.",
    description: "ITORG vyvíja EAP Legislator pre ABC PRO. Systém podporuje prípravu návrhov právnych aktov v XML, pripomienkovanie, elektronické podpisovanie a odovzdávanie dokumentov na úradné vyhlásenie a orgánom dozoru.",
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
        title: "Podpisovanie a odovzdávanie právnych aktov",
        desc: "Elektronické podpisovanie v editore a odovzdávanie právnych aktov na úradné vyhlásenie a orgánom dozoru."
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
        desc: "Importuje údaje XML z Besti@ pre rozpočtové uznesenia a ich zmeny, viacročné finančné výhľady a správy. Vytvára tabuľky pre dokumenty odovzdávané do úradných vestníkov vojvodstiev a regionálnym účtovným komorám (RIO) v Poľsku.",
        cta: "Spoznajte doplnok Besti@",
        href: legislatorUrls.finance
      }
    ]
  },
  partner: {
    eyebrow: "Partnerstvo", title: "Spolupráca s ABC PRO",
    intro: "S ABC PRO Sp. z o.o. spolupracujeme na vývoji a zavádzaní softvéru pre legislatívne procesy a elektronickú správu dokumentov vo verejnej správe.",
    note: "Príklady systémov ABC PRO:",
    products: [
      { name: "EAP Legislator", desc: "Editor právnych aktov v XML so sledovaním zmien, elektronickým podpisom a odovzdaním na zverejnenie." },
      { name: "Baza Aktów Własnych", desc: "Systém na vedenie a sprístupňovanie inštitucionálnych zbierok uznesení, nariadení a vnútorných predpisov s vyhľadávaním, registrami a integráciou s databázou právnych predpisov." },
      { name: "ABC ANON", desc: "Nástroj na anonymizáciu dokumentov a odstránenie vybraného obsahu zo sprístupňovanej verzie. Podporuje súbory PDF, DOCX a naskenované dokumenty." },
      { name: "ABC Kancelaria", desc: "Systém elektronickej správy dokumentov na korešpondenciu, evidencie a prichádzajúce aj odchádzajúce dokumenty v papierovej a elektronickej podobe." },
    ],
  },
  orion: {
    eyebrow: "Nástroje AI", title: "Orion AI",
    lead: "Platforma umelej inteligencie spoločnosti ABC PRO pre verejnú správu a podniky.",
    description: "ITORG sa podieľa na vývoji platformy Orion a vytvára nástroje AI na spracovanie dokumentov, analýzu informácií a automatizáciu procesov.",
    cta: "Spoznajte platformu Orion AI",
  },
  products: {
    title: "Produkty",
    intro: "EAP Legislator, Orion AI a ďalšie riešenia ABC PRO podporujú legislatívne procesy, správu dokumentov a analýzu informácií.",
    cta: "Zobraziť produkty",
    details: "Zobraziť podrobnosti",
    back: "Všetky produkty",
    developmentTitle: "Legislatíva a AI",
    partnerTitle: "Ďalšie systémy ABC PRO",
    breadcrumb: "Drobčeková navigácia",
  },

  contact: { eyebrow: "Kontakt", title: "Porozprávajme sa o vašom projekte", subtitle: "Kontaktujte nás a prediskutujme požiadavky vašej inštitúcie na softvér, integráciu systémov a využitie umelej inteligencie." },
  footer: { tagline: "Elektronická legislatíva, správa dokumentov a riešenia AI.", privacy: "Zásady ochrany osobných údajov", cookieSettings: "Nastavenia cookies" },
  legal: { ...site.legal, privacyUrl: "/sk/privacy/" },
  nav: [
    { label: "Služby", href: "#uslugi" },
    { label: "Produkty", href: "/sk/products/" },
    { label: "O spoločnosti", href: "#o-firmie" },
    { label: "Spolupráca", href: "#partner" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG — Softvér pre verejnú správu", description: "Softvér pre samosprávy, štátnu správu a ďalšie inštitúcie: legislatívne procesy, správa dokumentov, integrácia systémov a umelá inteligencia." },
  ui: {
    skip: "Prejsť na obsah", home: "Úvodná stránka", mainNav: "Hlavná navigácia", footerNav: "Navigácia v päte", navigation: "Navigácia", menu: "Menu",
    languages: "Vybrať jazyk", language: "Jazyk", facts: "Spoločnosť v skratke", inBrief: "V skratke", founded: "Založené", owner: "Majiteľ",
    headquarters: "Sídlo", specialization: "Špecializácia", specializationValue: "Legislatíva · správa dokumentov · integrácia systémov · AI", partner: "Partner", platform: "Služby",
    partnerCta: "Spoznajte riešenia ABC PRO", writeEmail: "Napísať e-mail", address: "Adresa", phone: "Telefón", email: "E-mail", eDelivery: "Poľské elektronické doručovanie",
    registration: "Registračné údaje", bank: "Bankový účet", rights: "Všetky práva vyhradené.", close: "Zavrieť",
  },
  cookies, privacy,
};

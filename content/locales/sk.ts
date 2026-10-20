import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/sk";

export const sk: Site = {
  brand: { ...site.brand, eyebrow: "Digitalizácia verejnej správy", tagline: "Inovatívne IT riešenia pre verejný sektor." },
  company: { ...site.company, country: "Poľsko" },
  hero: {
    eyebrow: "Digitalizácia verejnej správy", titleLead: "Digitalizujeme", titleAccent: "verejnú správu",
    subtitle: "Už {years} rokov vyvíjame pokročilé riešenia na elektronizáciu legislatívy a automatizáciu procesov vo verejnom sektore v Poľsku.",
    primaryCta: "Kontaktujte nás", secondaryCta: "Naše kompetencie", scrollLabel: "Posunúť nižšie",
  },
  stats: [
    { kind: "years", number: "", suffix: "+", label: "Rokov skúseností" },
    { kind: "static", number: "100%", suffix: "", label: "Verejný sektor" },
    { kind: "static", number: "24/7", suffix: "", label: "Technická podpora" },
  ],
  about: {
    eyebrow: "O spoločnosti", title: "Technológia v službách spoločnosti",
    lead: "ITORG je spoločnosť Krzysztofa Radzimského. Od roku 2009 navrhujeme a zavádzame softvér pre úrady a verejné inštitúcie.",
    paragraphs: [
      "Špecializujeme sa na elektronizáciu legislatívneho procesu a automatizáciu obehu dokumentov — oblasti, v ktorých majú presnosť, súlad s právom a spoľahlivosť zásadný význam.",
      "Spájame dlhoročné skúsenosti vo verejnom sektore s moderným softvérovým inžinierstvom. Vďaka partnerstvu s ABC PRO Sp. z o.o. dodávame overené právne nástroje a komplexné implementácie akéhokoľvek rozsahu.",
      "Vytvárame aj nástroje umelej inteligencie. Spoločnosť ITORG spolupracuje na vývoji platformy Orion spoločnosti ABC PRO a riešení na každodennú prácu s dokumentmi a informáciami.",
    ],
  },
  services: {
    eyebrow: "Čo robíme", title: "Naše kompetencie", subtitle: "Komplexná podpora digitalizácie úradov — od legislatívy a integrácií po nástroje AI.",
    items: [
      { icon: "legislation", title: "Legislatívne systémy", desc: "Komplexné platformy na správu právnych aktov a automatizáciu obehu legislatívnych dokumentov vo verejnej správe." },
      { icon: "automation", title: "Automatizácia procesov", desc: "Optimalizácia administratívnych postupov pomocou inteligentných nástrojov na spracovanie agendy a dokumentov." },
      { icon: "integration", title: "Systémové integrácie", desc: "Prepojenie IT riešení s existujúcou infraštruktúrou pre koordinované fungovanie verejných systémov." },
      { icon: "digitization", title: "Digitálne verejné služby", desc: "Zavádzanie inovatívnych technológií, ktoré zvyšujú dostupnosť služieb občanom a efektívnosť úradov." },
      { icon: "ai", title: "Vývoj nástrojov AI", desc: "Návrh a vývoj nástrojov umelej inteligencie na prácu s dokumentmi, analýzu informácií a automatizáciu každodenných úloh." },
    ],
  },
  values: {
    eyebrow: "Prečo ITORG", title: "Čo nás odlišuje",
    items: [
      { num: "01", title: "Inovácie", desc: "Neustále hľadanie technologických riešení zodpovedajúcich výzvam modernej verejnej správy." },
      { num: "02", title: "Spoľahlivosť", desc: "Stabilné a výkonné systémy podporujúce nepretržitú prevádzku inštitúcií." },
      { num: "03", title: "Bezpečnosť", desc: "Vysoké štandardy ochrany údajov v súlade s právnymi požiadavkami a osvedčenými postupmi odvetvia." },
      { num: "04", title: "Partnerstvo", desc: "Dlhodobá spolupráca založená na porozumení verejnému sektoru a jeho skutočným potrebám." },
    ],
  },
  legislator: {
    eyebrow: "Hlavný produkt",
    title: "EAP Legislator",
    lead: "Hlavný produkt, ktorý Krzysztof Radzimski vyvíja pre ABC PRO.",
    description: "Editor na prácu s uzneseniami, nariadeniami a ďalšími právnymi aktmi — od štruktúrovaného návrhu v XML cez pripomienkovanie a elektronický podpis až po odovzdanie na zverejnenie alebo právny dohľad.",
    features: [
      {
        title: "Štruktúrované právne akty v XML",
        desc: "Šablóny a prevod obsahu do štruktúrovanej podoby pomáhajú pri príprave aktov a zachovaní jednotného rozvrhnutia dokumentu."
      },
      {
        title: "Spolupráca a sledovanie zmien",
        desc: "Komentáre, zaznamenané zmeny a správy o práci umožňujú sledovať návrhy aj spôsob ich vyhodnotenia."
      },
      {
        title: "Podpisovanie a odovzdávanie aktov",
        desc: "Podpisovanie priamo v editore a odosielanie na zverejnenie alebo právny dohľad podporujú elektronický obeh dokumentov."
      }
    ],
    editions: [
      {
        name: "EAP Legislator",
        desc: "Edície Standard, Premium a Legalis pre úrady a inštitúcie pripravujúce právne akty. Rozsah funkcií možno zvoliť podľa potrieb organizácie.",
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
    intro: "Vďaka partnerstvu s ABC PRO Sp. z o.o. ponúkame prístup k profesionálnym právnym nástrojom a komplexné implementácie systémov pre verejnú správu.",
    note: "ABC PRO ponúka riešenia najmä verejnej správe a veľkým spoločnostiam. Medzi kľúčové produkty patria:",
    products: [
      { name: "EAP Legislator", desc: "Editor na tvorbu právnych aktov vo formáte XML, sledovanie zmien, bezpečný elektronický podpis a odovzdanie aktu na zverejnenie." },
      { name: "Baza Aktów Własnych", desc: "Systém na vlastné zbierky právnych aktov organizácie s vyhľadávaním, registrami a integráciou s legislatívnou databázou." },
      { name: "ABC ANON", desc: "Nástroj na anonymizáciu dokumentov PDF, DOCX a skenov skrytím vybraných údajov v súlade s právnymi požiadavkami." },
      { name: "ABC Kancelaria", desc: "Systém elektronickej správy dokumentov na korešpondenciu, evidencie a prichádzajúce aj odchádzajúce dokumenty v papierovej a elektronickej podobe." },
    ],
  },
  orion: {
    eyebrow: "Nástroje AI", title: "Tvoríme budúcnosť s Orion AI",
    lead: "Spoločnosť ITORG spolupracuje na vývoji platformy Orion spoločnosti ABC PRO — platformy AI pre verejnú správu a podniky.",
    description: "Vytvárame nástroje AI na prácu s dokumentmi, analýzu informácií a automatizáciu úloh. Spolupráca na Orione spája tieto kompetencie s našimi skúsenosťami so softvérom pre verejný sektor.",
    cta: "Spoznajte platformu Orion AI",
  },
  contact: { eyebrow: "Kontakt", title: "Porozprávajme sa o vašom projekte", subtitle: "Zavádzate nový systém alebo modernizujete úrad? Napíšte nám alebo zavolajte — preberieme, ako vám môžeme pomôcť." },
  footer: { tagline: "Inovatívne IT riešenia a nástroje AI pre verejnú správu.", privacy: "Zásady ochrany osobných údajov", cookieSettings: "Nastavenia cookies" },
  legal: { ...site.legal, privacyUrl: "/sk/privacy/" },
  nav: [
    { label: "O spoločnosti", href: "#o-firmie" }, { label: "Služby", href: "#uslugi" },
    { label: "Legislator", href: "#legislator" }, { label: "Hodnoty", href: "#wartosci" },
    { label: "Partner", href: "#partner" }, { label: "Orion AI", href: "#orion" }, { label: "Kontakt", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG — IT riešenia a AI pre verejnú správu", description: "ITORG Krzysztof Radzimski — vývoj EAP Legislator pre ABC PRO, legislatívne systémy, automatizácia a nástroje AI. Spolupráca na platforme Orion AI." },
  ui: {
    skip: "Prejsť na obsah", home: "Úvodná stránka", mainNav: "Hlavná navigácia", footerNav: "Navigácia v päte", navigation: "Navigácia", menu: "Menu",
    languages: "Vybrať jazyk", language: "Jazyk", facts: "Spoločnosť v skratke", inBrief: "V skratke", founded: "Založené", owner: "Majiteľ",
    headquarters: "Sídlo", specialization: "Špecializácia", specializationValue: "Legislatíva · správa dokumentov · integrácie · AI", partner: "Partner", platform: "Platforma",
    partnerCta: "Spoznajte riešenia ABC PRO", writeEmail: "Napísať e-mail", address: "Adresa", phone: "Telefón", email: "E-mail", eDelivery: "Poľské elektronické doručovanie",
    registration: "Registračné údaje", bank: "Bankový účet", rights: "Všetky práva vyhradené.", close: "Zavrieť",
  },
  cookies, privacy,
};

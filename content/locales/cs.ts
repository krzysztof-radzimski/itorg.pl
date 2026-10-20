import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/cs";

export const cs: Site = {
  brand: { ...site.brand, eyebrow: "Digitalizace veřejné správy", tagline: "Software pro veřejnou správu." },
  company: { ...site.company, country: "Polsko" },
  hero: {
    eyebrow: "Legislativa · správa dokumentů · AI", titleLead: "Promyšlená řešení", titleAccent: "pro veřejnou správu a firmy",
    subtitle: "Již {years} let vytváříme software přizpůsobený potřebám veřejné správy a firem — usnadňujeme práci s dokumenty, propojujeme systémy a automatizujeme procesy.",
    primaryCta: "Kontaktujte nás", secondaryCta: "Naše služby", scrollLabel: "Posunout níže",
  },
  stats: [
    { kind: "years", number: "", suffix: "", label: "Let činnosti" },
    { kind: "static", number: "XML", suffix: "", label: "Právní dokumenty" },
    { kind: "static", number: "AI", suffix: "", label: "Práce s dokumenty" },
  ],
  about: {
    eyebrow: "O společnosti", title: "Vyvíjíme a zavádíme software",
    lead: "ITORG od roku 2009 navrhuje, vyvíjí a zavádí software pro úřady a veřejné instituce v Polsku.",
    paragraphs: [
      "Pomáháme s přípravou právních aktů, zpracováním agend a elektronickým oběhem dokumentů.",
      "Pro ABC PRO vyvíjíme EAP Legislator, editor usnesení, nařízení a dalších právních aktů. Podílíme se také na zavádění systémů ABC PRO.",
      "Vytváříme nástroje umělé inteligence pro práci s dokumenty a analýzu informací. Spolupracujeme na vývoji platformy Orion společnosti ABC PRO.",
    ],
  },
  services: {
    eyebrow: "Služby", title: "S čím vám můžeme pomoci", subtitle: "Navrhujeme, vyvíjíme a propojujeme systémy pro veřejnou správu.",
    items: [
      { icon: "legislation", title: "Legislativní systémy", desc: "Vyvíjíme nástroje pro přípravu, podepisování a předávání právních aktů." },
      { icon: "automation", title: "Automatizace procesů", desc: "Automatizujeme opakující se úkony při zpracování agend a oběhu dokumentů." },
      { icon: "integration", title: "Systémové integrace", desc: "Propojujeme systémy, aby si mohly vyměňovat data a sdílet informace." },
      { icon: "digitization", title: "Software pro úřady", desc: "Navrhujeme a zavádíme aplikace pro zpracování agend, správu dokumentů a veřejné služby." },
      { icon: "ai", title: "Vývoj nástrojů AI", desc: "Vytváříme nástroje umělé inteligence pro práci s dokumenty, analýzu informací a automatizaci úkolů." },
    ],
  },
  values: {
    eyebrow: "Spolupráce", title: "Jak pracujeme",
    items: [
      { num: "01", title: "Zkušenosti s veřejnou správou", desc: "Vyvíjíme systémy pro legislativu a správu dokumentů. V projektech zohledňujeme postupy a způsob práce úřadů." },
      { num: "02", title: "Vývoj a údržba", desc: "Software dále rozvíjíme a podporujeme jeho provoz po zavedení." },
      { num: "03", title: "Ochrana dat", desc: "Při návrhu systémů zohledňujeme zabezpečení dat a pravidla přístupu k informacím." },
      { num: "04", title: "Podle potřeb úřadu", desc: "Změny navrhujeme s ohledem na potřeby uživatelů a systémy, které již používají." },
    ],
  },
  legislator: {
    eyebrow: "Editor právních aktů",
    title: "EAP Legislator",
    lead: "Editor pro úřady, které připravují usnesení, nařízení a další právní akty.",
    description: "ITORG vyvíjí EAP Legislator pro ABC PRO. Program podporuje přípravu návrhů v XML, připomínkování, elektronický podpis a předání ke zveřejnění nebo právnímu dohledu.",
    features: [
      {
        title: "Návrhy ve formátu XML",
        desc: "Šablony a převod do XML pomáhají připravit právní akty se zachováním jejich struktury."
      },
      {
        title: "Připomínky a historie změn",
        desc: "Komentáře, záznamy změn a přehledy umožňují ověřit předložené návrhy i způsob jejich vypořádání."
      },
      {
        title: "Podepisování a odesílání",
        desc: "Podepisujte dokumenty v editoru a předávejte je ke zveřejnění nebo právnímu dohledu."
      }
    ],
    editions: [
      {
        name: "EAP Legislator",
        desc: "Edice Standard, Premium a Legalis pro úřady a instituce připravující právní akty. Dostupné funkce závisejí na zvolené edici.",
        cta: "Poznejte EAP Legislator",
        href: legislatorUrls.editor
      },
      {
        name: "Legislator pro státní správu",
        desc: "Verze pro ministerstva a ústřední úřady, založená na šabloně polského Vládního legislativního centra (RCL), pro akty předávané do Dziennik Ustaw a Monitor Polski.",
        cta: "Poznejte Legislator GOV",
        href: legislatorUrls.government
      },
      {
        name: "Veřejné finance — doplněk Besti@",
        desc: "Importuje data XML z Besti@ pro rozpočtová usnesení, jejich změny, víceleté finanční prognózy a zprávy o plnění rozpočtu. Vytváří přehledné tabulky pro zveřejnění a dohled polských regionálních účetních komor (RIO).",
        cta: "Poznejte doplněk Besti@",
        href: legislatorUrls.finance
      }
    ]
  },
  partner: {
    eyebrow: "Partnerství", title: "Spolupráce s ABC PRO",
    intro: "S ABC PRO Sp. z o.o. spolupracujeme na vývoji a zavádění softwaru pro legislativu a správu dokumentů ve veřejné správě.",
    note: "Příklady systémů ABC PRO:",
    products: [
      { name: "EAP Legislator", desc: "Editor právních aktů v XML se sledováním změn, elektronickým podpisem a předáním ke zveřejnění." },
      { name: "Baza Aktów Własnych", desc: "Systém pro vlastní sbírky právních aktů organizace s vyhledáváním, rejstříky a integrací s legislativní databází." },
      { name: "ABC ANON", desc: "Nástroj pro skrytí vybraných údajů v souborech PDF, DOCX a skenech před jejich sdílením." },
      { name: "ABC Kancelaria", desc: "Systém elektronické správy dokumentů pro korespondenci, evidence a příchozí i odchozí dokumenty v papírové i elektronické podobě." },
    ],
  },
  orion: {
    eyebrow: "Nástroje AI", title: "Orion AI",
    lead: "Platforma umělé inteligence společnosti ABC PRO pro veřejnou správu a podniky.",
    description: "ITORG spolupracuje na vývoji Orionu a vytváří nástroje AI pro práci s dokumenty, analýzu informací a automatizaci úkolů.",
    cta: "Poznejte platformu Orion AI",
  },
  products: {
    title: "Produkty",
    intro: "Poznejte EAP Legislator, Orion AI a další systémy ABC PRO pro legislativu a správu dokumentů.",
    cta: "Zobrazit produkty",
    details: "Zobrazit podrobnosti",
    back: "Všechny produkty",
    developmentTitle: "Legislativa a AI",
    partnerTitle: "Další systémy ABC PRO",
    breadcrumb: "Drobečková navigace",
  },

  contact: { eyebrow: "Kontakt", title: "Promluvme si o vašem projektu", subtitle: "Potřebujete software pro správu dokumentů, propojení systémů nebo nástroj AI? Napište nám nebo zavolejte a popište, co chcete zlepšit." },
  footer: { tagline: "Legislativní systémy, oběh dokumentů a nástroje AI.", privacy: "Zásady ochrany osobních údajů", cookieSettings: "Nastavení cookies" },
  legal: { ...site.legal, privacyUrl: "/cs/privacy/" },
  nav: [
    { label: "Služby", href: "#uslugi" },
    { label: "Produkty", href: "/cs/products/" },
    { label: "O společnosti", href: "#o-firmie" },
    { label: "Spolupráce", href: "#partner" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG — Software pro veřejnou správu", description: "Vyvíjíme a zavádíme software pro úřady: legislativní systémy, oběh dokumentů, integrace a nástroje AI. Pro ABC PRO vyvíjíme EAP Legislator." },
  ui: {
    skip: "Přejít k obsahu", home: "Úvodní stránka", mainNav: "Hlavní navigace", footerNav: "Navigace v zápatí", navigation: "Navigace", menu: "Menu",
    languages: "Vybrat jazyk", language: "Jazyk", facts: "Společnost v kostce", inBrief: "V kostce", founded: "Založeno", owner: "Majitel",
    headquarters: "Sídlo", specialization: "Specializace", specializationValue: "Legislativa · správa dokumentů · integrace · AI", partner: "Partner", platform: "Služby",
    partnerCta: "Poznejte řešení ABC PRO", writeEmail: "Napsat e-mail", address: "Adresa", phone: "Telefon", email: "E-mail", eDelivery: "Polské elektronické doručování",
    registration: "Registrační údaje", bank: "Bankovní účet", rights: "Všechna práva vyhrazena.", close: "Zavřít",
  },
  cookies, privacy,
};

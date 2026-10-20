import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/cs";

export const cs: Site = {
  brand: { ...site.brand, eyebrow: "Digitalizace veřejné správy", tagline: "Software pro veřejnou správu." },
  company: { ...site.company, country: "Polsko" },
  hero: {
    eyebrow: "Legislativa · správa dokumentů · AI", titleLead: "Promyšlená řešení", titleAccent: "pro veřejnou správu a firmy",
    subtitle: "Již {years} let vyvíjíme software přizpůsobený potřebám samospráv, státní správy a dalších institucí. Zefektivňujeme práci s dokumenty, integrujeme systémy a automatizujeme procesy.",
    primaryCta: "Kontaktujte nás", secondaryCta: "Naše služby", scrollLabel: "Posunout níže",
  },
  stats: [
    { kind: "years", number: "", suffix: "", label: "Let činnosti" },
    { kind: "static", number: "XML", suffix: "", label: "Právní dokumenty" },
    { kind: "static", number: "AI", suffix: "", label: "Práce s dokumenty" },
  ],
  about: {
    eyebrow: "O společnosti", title: "Vyvíjíme a zavádíme software",
    lead: "ITORG od roku 2009 navrhuje, vyvíjí a zavádí software pro územní samosprávné celky, státní správu a další instituce v Polsku.",
    paragraphs: [
      "Podporujeme legislativní procesy, vedení spisů a elektronickou správu dokumentů.",
      "Pro ABC PRO vyvíjíme EAP Legislator, editor usnesení, nařízení a dalších právních aktů. Podílíme se také na zavádění systémů ABC PRO.",
      "Vyvíjíme nástroje využívající umělou inteligenci ke zpracování dokumentů a analýze informací. Podílíme se na vývoji platformy Orion společnosti ABC PRO.",
    ],
  },
  services: {
    eyebrow: "Služby", title: "Naše služby", subtitle: "Navrhujeme, vyvíjíme a integrujeme informační systémy podporující plnění veřejných úkolů.",
    items: [
      { icon: "legislation", title: "Legislativní systémy", desc: "Vyvíjíme nástroje pro přípravu a podepisování právních aktů a jejich předávání k úřednímu vyhlášení a orgánům dozoru." },
      { icon: "automation", title: "Automatizace procesů", desc: "Automatizujeme opakující se úkony při vedení spisů a správě dokumentů." },
      { icon: "integration", title: "Integrace systémů", desc: "Integrujeme informační systémy a umožňujeme výměnu dat mezi aplikacemi." },
      { icon: "digitization", title: "Software pro úřady", desc: "Navrhujeme a zavádíme aplikace pro vedení spisů, správu dokumentů a poskytování veřejných služeb." },
      { icon: "ai", title: "Vývoj nástrojů AI", desc: "Vyvíjíme řešení využívající umělou inteligenci ke zpracování dokumentů, analýze informací a automatizaci procesů." },
    ],
  },
  values: {
    eyebrow: "Spolupráce", title: "Jak realizujeme projekty",
    items: [
      { num: "01", title: "Znalost správních procesů", desc: "Při návrhu řešení zohledňujeme legislativní postupy, pravidla vedení spisů a správy dokumentů." },
      { num: "02", title: "Vývoj a údržba", desc: "Software po zavedení dále vyvíjíme a udržujeme s ohledem na měnící se potřeby uživatelů." },
      { num: "03", title: "Ochrana dat", desc: "Při návrhu systémů zohledňujeme zabezpečení dat a pravidla přístupu k informacím." },
      { num: "04", title: "Přizpůsobení procesům instituce", desc: "Řešení přizpůsobujeme organizaci práce instituce, potřebám uživatelů a stávajícímu IT prostředí." },
    ],
  },
  legislator: {
    eyebrow: "Editor právních aktů",
    title: "EAP Legislator",
    lead: "Editor pro územní samosprávné celky a státní správu, který podporuje přípravu usnesení, nařízení a dalších právních aktů.",
    description: "ITORG vyvíjí EAP Legislator pro ABC PRO. Systém podporuje přípravu návrhů právních aktů v XML, připomínkování, elektronické podepisování a předávání dokumentů k úřednímu vyhlášení a orgánům dozoru.",
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
        title: "Podepisování a předávání právních aktů",
        desc: "Elektronické podepisování v editoru a předávání právních aktů k úřednímu vyhlášení a orgánům dozoru."
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
        name: "Veřejné finance (doplněk Besti@)",
        desc: "Importuje data XML z Besti@ pro rozpočtová usnesení a jejich změny, víceleté finanční výhledy a zprávy. Vytváří tabulky pro dokumenty předávané do úředních věstníků vojvodství a regionálním účetním komorám (RIO) v Polsku.",
        cta: "Poznejte doplněk Besti@",
        href: legislatorUrls.finance
      }
    ]
  },
  partner: {
    eyebrow: "Partnerství", title: "Spolupráce s ABC PRO",
    intro: "S ABC PRO Sp. z o.o. spolupracujeme na vývoji a zavádění softwaru pro legislativní procesy a elektronickou správu dokumentů ve veřejné správě.",
    note: "Příklady systémů ABC PRO:",
    products: [
      { name: "EAP Legislator", desc: "Editor právních aktů v XML se sledováním změn, elektronickým podpisem a předáním ke zveřejnění." },
      { name: "Baza Aktów Własnych", desc: "Systém pro vedení a zpřístupňování institucionálních sbírek usnesení, nařízení a vnitřních předpisů s vyhledáváním, rejstříky a integrací s databází právních předpisů." },
      { name: "ABC ANON", desc: "Nástroj pro anonymizaci dokumentů a odstranění vybraného obsahu ze zpřístupňované verze. Podporuje soubory PDF, DOCX a naskenované dokumenty." },
      { name: "ABC Kancelaria", desc: "Systém elektronické správy dokumentů pro korespondenci, evidence a příchozí i odchozí dokumenty v papírové i elektronické podobě." },
    ],
  },
  orion: {
    eyebrow: "Nástroje AI", title: "Orion AI",
    lead: "Platforma umělé inteligence společnosti ABC PRO pro veřejnou správu a podniky.",
    description: "ITORG se podílí na vývoji platformy Orion a vytváří nástroje AI pro zpracování dokumentů, analýzu informací a automatizaci procesů.",
    cta: "Poznejte platformu Orion AI",
  },
  products: {
    title: "Produkty",
    intro: "EAP Legislator, Orion AI a další řešení ABC PRO podporují legislativní procesy, správu dokumentů a analýzu informací.",
    cta: "Zobrazit produkty",
    details: "Zobrazit podrobnosti",
    back: "Všechny produkty",
    developmentTitle: "Legislativa a AI",
    partnerTitle: "Další systémy ABC PRO",
    breadcrumb: "Drobečková navigace",
  },

  contact: { eyebrow: "Kontakt", title: "Promluvme si o vašem projektu", subtitle: "Kontaktujte nás a projednejme požadavky vaší instituce na software, integraci systémů a využití umělé inteligence." },
  footer: { tagline: "Elektronická legislativa, správa dokumentů a řešení AI.", privacy: "Zásady ochrany osobních údajů", cookieSettings: "Nastavení cookies" },
  legal: { ...site.legal, privacyUrl: "/cs/privacy/" },
  nav: [
    { label: "Služby", href: "#uslugi" },
    { label: "Produkty", href: "/cs/products/" },
    { label: "O společnosti", href: "#o-firmie" },
    { label: "Spolupráce", href: "#partner" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG: Software pro veřejnou správu", description: "Software pro samosprávy, státní správu a další instituce: legislativní procesy, správa dokumentů, integrace systémů a umělá inteligence." },
  ui: {
    skip: "Přejít k obsahu", home: "Úvodní stránka", mainNav: "Hlavní navigace", footerNav: "Navigace v zápatí", navigation: "Navigace", menu: "Menu",
    languages: "Vybrat jazyk", language: "Jazyk", facts: "Společnost v kostce", inBrief: "V kostce", founded: "Založeno", owner: "Majitel",
    headquarters: "Sídlo", specialization: "Specializace", specializationValue: "Legislativa · správa dokumentů · integrace systémů · AI", partner: "Partner", platform: "Služby",
    partnerCta: "Poznejte řešení ABC PRO", writeEmail: "Napsat e-mail", address: "Adresa", phone: "Telefon", email: "E-mail", eDelivery: "Polské elektronické doručování",
    registration: "Registrační údaje", bank: "Bankovní účet", rights: "Všechna práva vyhrazena.", close: "Zavřít",
  },
  cookies, privacy,
};

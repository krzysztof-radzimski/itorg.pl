import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/cs";

export const cs: Site = {
  brand: { ...site.brand, eyebrow: "Digitalizace veřejné správy", tagline: "Inovativní IT řešení pro veřejný sektor." },
  company: { ...site.company, country: "Polsko" },
  hero: {
    eyebrow: "Digitalizace veřejné správy", titleLead: "Digitalizujeme", titleAccent: "veřejnou správu",
    subtitle: "Již {years} let vyvíjíme pokročilá řešení pro elektronizaci legislativy a automatizaci procesů ve veřejném sektoru v Polsku.",
    primaryCta: "Kontaktujte nás", secondaryCta: "Naše kompetence", scrollLabel: "Posunout níže",
  },
  stats: [
    { kind: "years", number: "", suffix: "+", label: "Let zkušeností" },
    { kind: "static", number: "100%", suffix: "", label: "Veřejný sektor" },
    { kind: "static", number: "24/7", suffix: "", label: "Technická podpora" },
  ],
  about: {
    eyebrow: "O společnosti", title: "Technologie ve službách společnosti",
    lead: "ITORG je společnost Krzysztofa Radzimského. Od roku 2009 navrhujeme a zavádíme software pro úřady a veřejné instituce.",
    paragraphs: [
      "Specializujeme se na elektronizaci legislativního procesu a automatizaci oběhu dokumentů — oblasti, v nichž mají přesnost, soulad s právem a spolehlivost zásadní význam.",
      "Spojujeme dlouholeté zkušenosti ve veřejném sektoru s moderním softwarovým inženýrstvím. Díky partnerství s ABC PRO Sp. z o.o. dodáváme osvědčené právní nástroje a komplexní implementace jakéhokoli rozsahu.",
      "Vytváříme také nástroje umělé inteligence. Společnost ITORG spolupracuje na vývoji platformy Orion společnosti ABC PRO a řešení pro každodenní práci s dokumenty a informacemi.",
    ],
  },
  services: {
    eyebrow: "Co děláme", title: "Naše kompetence", subtitle: "Komplexní podpora digitalizace úřadů — od legislativy a integrací po nástroje AI.",
    items: [
      { icon: "legislation", title: "Legislativní systémy", desc: "Komplexní platformy pro správu právních aktů a automatizaci oběhu legislativních dokumentů ve veřejné správě." },
      { icon: "automation", title: "Automatizace procesů", desc: "Optimalizace správních postupů pomocí inteligentních nástrojů pro zpracování agend a dokumentů." },
      { icon: "integration", title: "Systémové integrace", desc: "Propojení IT řešení se stávající infrastrukturou pro koordinované fungování veřejných systémů." },
      { icon: "digitization", title: "Digitální veřejné služby", desc: "Zavádění inovativních technologií, které zvyšují dostupnost služeb občanům a efektivitu úřadů." },
      { icon: "ai", title: "Vývoj nástrojů AI", desc: "Návrh a vývoj nástrojů umělé inteligence pro práci s dokumenty, analýzu informací a automatizaci každodenních úkolů." },
    ],
  },
  values: {
    eyebrow: "Proč ITORG", title: "Co nás odlišuje",
    items: [
      { num: "01", title: "Inovace", desc: "Neustálé hledání technologických řešení odpovídajících výzvám moderní veřejné správy." },
      { num: "02", title: "Spolehlivost", desc: "Stabilní a výkonné systémy podporující nepřetržitý provoz institucí." },
      { num: "03", title: "Bezpečnost", desc: "Vysoké standardy ochrany dat v souladu s právními požadavky a osvědčenými postupy oboru." },
      { num: "04", title: "Partnerství", desc: "Dlouhodobá spolupráce založená na porozumění veřejnému sektoru a jeho skutečným potřebám." },
    ],
  },
  legislator: {
    eyebrow: "Hlavní produkt",
    title: "EAP Legislator",
    lead: "Hlavní produkt, který Krzysztof Radzimski vyvíjí pro ABC PRO.",
    description: "Editor pro usnesení, nařízení a další právní akty — od strukturovaného návrhu v XML přes připomínkování a elektronický podpis až po předání ke zveřejnění nebo právnímu dohledu.",
    features: [
      {
        title: "Strukturované právní akty v XML",
        desc: "Šablony a převod obsahu do strukturované podoby pomáhají při přípravě aktů a zachování jednotného rozvržení dokumentu."
      },
      {
        title: "Spolupráce a sledování změn",
        desc: "Komentáře, zaznamenané změny a zprávy o práci umožňují sledovat návrhy i způsob jejich vypořádání."
      },
      {
        title: "Podepisování a předávání aktů",
        desc: "Podepisování přímo v editoru a odesílání ke zveřejnění či právnímu dohledu podporují elektronický oběh dokumentů."
      }
    ],
    editions: [
      {
        name: "EAP Legislator",
        desc: "Edice Standard, Premium a Legalis pro úřady a instituce připravující právní akty. Rozsah funkcí lze zvolit podle potřeb organizace.",
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
    intro: "Díky partnerství s ABC PRO Sp. z o.o. nabízíme přístup k profesionálním právním nástrojům a komplexní implementace systémů pro veřejnou správu.",
    note: "ABC PRO nabízí řešení především veřejné správě a velkým společnostem. Mezi klíčové produkty patří:",
    products: [
      { name: "EAP Legislator", desc: "Editor pro tvorbu právních aktů ve formátu XML, sledování změn, bezpečný elektronický podpis a předání aktu ke zveřejnění." },
      { name: "Baza Aktów Własnych", desc: "Systém pro vlastní sbírky právních aktů organizace s vyhledáváním, rejstříky a integrací s legislativní databází." },
      { name: "ABC ANON", desc: "Nástroj pro anonymizaci dokumentů PDF, DOCX a skenů prostřednictvím skrytí vybraných údajů v souladu s právními požadavky." },
      { name: "ABC Kancelaria", desc: "Systém elektronické správy dokumentů pro korespondenci, evidence a příchozí i odchozí dokumenty v papírové i elektronické podobě." },
    ],
  },
  orion: {
    eyebrow: "Nástroje AI", title: "Tvoříme budoucnost s Orion AI",
    lead: "Společnost ITORG spolupracuje na vývoji platformy Orion společnosti ABC PRO — platformy AI pro veřejnou správu a podniky.",
    description: "Vytváříme nástroje AI pro práci s dokumenty, analýzu informací a automatizaci úkolů. Spolupráce na Orionu spojuje tyto kompetence s našimi zkušenostmi se softwarem pro veřejný sektor.",
    cta: "Poznejte platformu Orion AI",
  },
  contact: { eyebrow: "Kontakt", title: "Promluvme si o vašem projektu", subtitle: "Zavádíte nový systém nebo modernizujete úřad? Napište nám nebo zavolejte — probereme, jak vám můžeme pomoci." },
  footer: { tagline: "Inovativní IT řešení a nástroje AI pro veřejnou správu.", privacy: "Zásady ochrany osobních údajů", cookieSettings: "Nastavení cookies" },
  legal: { ...site.legal, privacyUrl: "/cs/privacy/" },
  nav: [
    { label: "O společnosti", href: "#o-firmie" }, { label: "Služby", href: "#uslugi" },
    { label: "Legislator", href: "#legislator" }, { label: "Hodnoty", href: "#wartosci" },
    { label: "Partner", href: "#partner" }, { label: "Orion AI", href: "#orion" }, { label: "Kontakt", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG — IT řešení a AI pro veřejnou správu", description: "ITORG Krzysztof Radzimski — vývoj EAP Legislator pro ABC PRO, legislativní systémy, automatizace a nástroje AI. Spolupráce na platformě Orion AI." },
  ui: {
    skip: "Přejít k obsahu", home: "Úvodní stránka", mainNav: "Hlavní navigace", footerNav: "Navigace v zápatí", navigation: "Navigace", menu: "Menu",
    languages: "Vybrat jazyk", language: "Jazyk", facts: "Společnost v kostce", inBrief: "V kostce", founded: "Založeno", owner: "Majitel",
    headquarters: "Sídlo", specialization: "Specializace", specializationValue: "Legislativa · správa dokumentů · integrace · AI", partner: "Partner", platform: "Platforma",
    partnerCta: "Poznejte řešení ABC PRO", writeEmail: "Napsat e-mail", address: "Adresa", phone: "Telefon", email: "E-mail", eDelivery: "Polské elektronické doručování",
    registration: "Registrační údaje", bank: "Bankovní účet", rights: "Všechna práva vyhrazena.", close: "Zavřít",
  },
  cookies, privacy,
};

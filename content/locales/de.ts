import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/de";

export const de: Site = {
  brand: { ...site.brand, eyebrow: "Digitalisierung der öffentlichen Verwaltung", tagline: "Innovative IT-Lösungen für den öffentlichen Sektor." },
  company: { ...site.company, country: "Polen" },
  hero: {
    eyebrow: "Digitalisierung der öffentlichen Verwaltung", titleLead: "Wir digitalisieren", titleAccent: "die öffentliche Verwaltung",
    subtitle: "Seit {years} Jahren entwickeln wir moderne Lösungen für digitale Gesetzgebung und Prozessautomatisierung im öffentlichen Sektor in Polen.",
    primaryCta: "Kontakt aufnehmen", secondaryCta: "Unsere Kompetenzen", scrollLabel: "Nach unten scrollen",
  },
  stats: [
    { kind: "years", number: "", suffix: "+", label: "Jahre Erfahrung" },
    { kind: "static", number: "100%", suffix: "", label: "Fokus auf den öffentlichen Sektor" },
    { kind: "static", number: "24/7", suffix: "", label: "Technischer Support" },
  ],
  about: {
    eyebrow: "Über uns", title: "Technologie im Dienst der Gesellschaft",
    lead: "ITORG ist das Unternehmen von Krzysztof Radzimski. Seit 2009 entwickeln und implementieren wir Software für Behörden und öffentliche Einrichtungen.",
    paragraphs: [
      "Wir sind auf digitale Gesetzgebungsverfahren und die Automatisierung von Dokumentenabläufen spezialisiert — Bereiche, in denen Präzision, Rechtskonformität und Zuverlässigkeit entscheidend sind.",
      "Wir verbinden langjährige Erfahrung im öffentlichen Sektor mit moderner Softwareentwicklung. Gemeinsam mit ABC PRO Sp. z o.o. bieten wir bewährte Fachanwendungen und umfassende Implementierungen jeder Größenordnung.",
      "Wir entwickeln auch Werkzeuge mit künstlicher Intelligenz. Krzysztof Radzimski wirkt an der Entwicklung der Orion-Plattform von ABC PRO mit und unterstützt Lösungen für die tägliche Arbeit mit Dokumenten und Informationen.",
    ],
  },
  services: {
    eyebrow: "Unsere Leistungen", title: "Unsere Kompetenzen", subtitle: "Umfassende Unterstützung bei der Digitalisierung — von Gesetzgebung und Integration bis zu KI-Werkzeugen.",
    items: [
      { icon: "legislation", title: "Gesetzgebungssysteme", desc: "Umfassende Plattformen zur Verwaltung von Rechtsakten und zur Automatisierung legislativer Dokumentenabläufe." },
      { icon: "automation", title: "Prozessautomatisierung", desc: "Optimierung von Verwaltungsabläufen durch intelligente Werkzeuge für die Bearbeitung von Vorgängen und Dokumenten." },
      { icon: "integration", title: "Systemintegration", desc: "Anbindung von IT-Lösungen an bestehende Infrastrukturen für ein reibungsloses Zusammenspiel öffentlicher Systeme." },
      { icon: "digitization", title: "Digitale Verwaltung", desc: "Einführung innovativer Technologien für besser zugängliche Bürgerdienste und effizientere Behörden." },
      { icon: "ai", title: "Entwicklung von KI-Werkzeugen", desc: "Konzeption und Entwicklung von KI-Werkzeugen für Dokumentenarbeit, Informationsanalyse und die Automatisierung alltäglicher Aufgaben." },
    ],
  },
  values: {
    eyebrow: "Warum ITORG", title: "Was uns auszeichnet",
    items: [
      { num: "01", title: "Innovation", desc: "Kontinuierliche Suche nach technologischen Lösungen für die Herausforderungen einer modernen Verwaltung." },
      { num: "02", title: "Zuverlässigkeit", desc: "Stabile, leistungsfähige Systeme, die den kontinuierlichen Betrieb öffentlicher Einrichtungen unterstützen." },
      { num: "03", title: "Sicherheit", desc: "Hohe Datenschutzstandards im Einklang mit gesetzlichen Vorgaben und bewährten Branchenpraktiken." },
      { num: "04", title: "Partnerschaft", desc: "Langfristige Zusammenarbeit auf Grundlage eines Verständnisses für die Besonderheiten und Bedürfnisse des öffentlichen Sektors." },
    ],
  },
  legislator: {
    eyebrow: "Unser Hauptprodukt",
    title: "EAP Legislator",
    lead: "Das Hauptprodukt, das Krzysztof Radzimski für ABC PRO entwickelt.",
    description: "Ein Editor für Beschlüsse, Anordnungen und weitere Rechtsakte — vom strukturierten Entwurf in XML über die Abstimmung und elektronische Signatur bis zur Übermittlung zur Veröffentlichung oder Rechtsaufsicht.",
    features: [
      {
        title: "Strukturierte Rechtsakte in XML",
        desc: "Vorlagen und die Konvertierung in strukturierte Inhalte unterstützen die Erstellung von Rechtsakten mit einheitlichem Dokumentenaufbau."
      },
      {
        title: "Zusammenarbeit und Änderungsverfolgung",
        desc: "Kommentare, protokollierte Änderungen und Berichte machen Vorschläge und deren Bearbeitung nachvollziehbar."
      },
      {
        title: "Signieren und Übermitteln",
        desc: "Die elektronische Signatur direkt im Editor und die Übermittlung zur Veröffentlichung oder Rechtsaufsicht unterstützen den digitalen Dokumentenablauf."
      }
    ],
    editions: [
      {
        name: "EAP Legislator",
        desc: "Die Editionen Standard, Premium und Legalis für Behörden und Einrichtungen, die Rechtsakte erstellen. Der Funktionsumfang lässt sich an die Bedürfnisse der Organisation anpassen.",
        cta: "EAP Legislator entdecken",
        href: legislatorUrls.editor
      },
      {
        name: "Legislator für die Regierungsverwaltung",
        desc: "Eine Version für Ministerien und Zentralbehörden auf Basis der Vorlage des polnischen Gesetzgebungszentrums RCL, für Rechtsakte zur Veröffentlichung im Dziennik Ustaw und Monitor Polski.",
        cta: "Legislator GOV entdecken",
        href: legislatorUrls.government
      },
      {
        name: "Öffentliche Finanzen — Besti@-Erweiterung",
        desc: "Importiert XML-Daten aus Besti@ für Haushaltsbeschlüsse, Änderungen, mehrjährige Finanzprognosen und Haushaltsberichte. Daraus entstehen übersichtliche Tabellen für Veröffentlichung und Aufsicht durch die regionalen Rechnungskammern (RIO).",
        cta: "Die Besti@-Erweiterung entdecken",
        href: legislatorUrls.finance
      }
    ]
  },
  partner: {
    eyebrow: "Partnerschaft", title: "Zusammenarbeit mit ABC PRO",
    intro: "Durch unsere Partnerschaft mit ABC PRO Sp. z o.o. bieten wir Zugang zu professionellen Rechtsanwendungen und umfassenden Systemimplementierungen für die öffentliche Verwaltung.",
    note: "ABC PRO entwickelt Lösungen vor allem für die öffentliche Verwaltung und größere Unternehmen. Zu den wichtigsten Produkten gehören:",
    products: [
      { name: "EAP Legislator", desc: "Ein Editor zum Erstellen von Rechtsakten in XML, zur Änderungsverfolgung, zur elektronischen Signatur und zur Übermittlung zur Veröffentlichung." },
      { name: "Baza Aktów Własnych", desc: "Ein System für eigene Sammlungen von Rechtsakten einer Organisation mit Suchfunktionen, Verzeichnissen und Anbindung an eine Rechtsdatenbank." },
      { name: "ABC ANON", desc: "Ein Werkzeug zur Anonymisierung von PDF- und DOCX-Dokumenten sowie Scans durch rechtskonformes Schwärzen ausgewählter Informationen." },
      { name: "ABC Kancelaria", desc: "Ein Dokumentenmanagementsystem für Korrespondenz, Register sowie ein- und ausgehende Dokumente in Papierform und elektronischer Form." },
    ],
  },
  orion: {
    eyebrow: "KI-Werkzeuge", title: "Die Zukunft mit Orion AI gestalten",
    lead: "Krzysztof Radzimski wirkt an der Entwicklung der Orion-Plattform von ABC PRO mit — einer KI-Plattform für Verwaltung und Unternehmen.",
    description: "Wir entwickeln KI-Werkzeuge für die Arbeit mit Dokumenten, die Analyse von Informationen und die Automatisierung von Aufgaben. Unsere Mitarbeit an Orion verbindet diese Kompetenzen mit unserer Erfahrung in Verwaltungssoftware.",
    cta: "Die Plattform Orion AI entdecken",
  },
  contact: { eyebrow: "Kontakt", title: "Sprechen wir über Ihr Projekt", subtitle: "Planen Sie ein neues System oder die Modernisierung Ihrer Behörde? Schreiben Sie uns oder rufen Sie an — wir besprechen, wie wir helfen können." },
  footer: { tagline: "Innovative IT-Lösungen und KI-Werkzeuge für die öffentliche Verwaltung.", privacy: "Datenschutzerklärung", cookieSettings: "Cookie-Einstellungen" },
  legal: { ...site.legal, privacyUrl: "/de/privacy/" },
  nav: [
    { label: "Über uns", href: "#o-firmie" }, { label: "Leistungen", href: "#uslugi" },
    { label: "Legislator", href: "#legislator" }, { label: "Werte", href: "#wartosci" },
    { label: "Partner", href: "#partner" }, { label: "Orion AI", href: "#orion" }, { label: "Kontakt", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG — IT-Lösungen und KI für die öffentliche Verwaltung", description: "ITORG Krzysztof Radzimski — Entwicklung von EAP Legislator für ABC PRO, Gesetzgebungssysteme, Automatisierung und KI-Werkzeuge. Mitwirkung an Orion AI." },
  ui: {
    skip: "Zum Inhalt springen", home: "Startseite", mainNav: "Hauptnavigation", footerNav: "Fußzeilennavigation", navigation: "Navigation", menu: "Menü",
    languages: "Sprache auswählen", language: "Sprache", facts: "Unternehmen im Überblick", inBrief: "Im Überblick", founded: "Gegründet", owner: "Inhaber",
    headquarters: "Sitz", specialization: "Schwerpunkte", specializationValue: "Gesetzgebung · Dokumentenmanagement · Integration · KI", partner: "Partner", platform: "Plattform",
    partnerCta: "Die Lösungen von ABC PRO entdecken", writeEmail: "E-Mail schreiben", address: "Anschrift", phone: "Telefon", email: "E-Mail", eDelivery: "Polnische e-Zustellung",
    registration: "Registrierungsdaten", bank: "Bankkonto", rights: "Alle Rechte vorbehalten.", close: "Schließen",
  },
  cookies, privacy,
};

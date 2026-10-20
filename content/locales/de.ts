import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/de";

export const de: Site = {
  brand: { ...site.brand, eyebrow: "Digitalisierung der öffentlichen Verwaltung", tagline: "Software für die öffentliche Verwaltung." },
  company: { ...site.company, country: "Polen" },
  hero: {
    eyebrow: "Rechtsetzung · Dokumentenabläufe · KI", titleLead: "Software", titleAccent: "für Behörden",
    subtitle: "Seit {years} Jahren entwickeln wir Software für die Erstellung von Rechtsakten, die Dokumentenverwaltung und die Automatisierung von Arbeitsabläufen in polnischen Behörden.",
    primaryCta: "Kontakt aufnehmen", secondaryCta: "Unsere Leistungen", scrollLabel: "Nach unten scrollen",
  },
  stats: [
    { kind: "years", number: "", suffix: "", label: "Jahre am Markt" },
    { kind: "static", number: "XML", suffix: "", label: "Rechtsdokumente" },
    { kind: "static", number: "KI", suffix: "", label: "Arbeit mit Dokumenten" },
  ],
  about: {
    eyebrow: "Über uns", title: "Software entwickeln und einführen",
    lead: "Seit 2009 konzipiert, entwickelt und implementiert ITORG Software für Behörden und öffentliche Einrichtungen in Polen.",
    paragraphs: [
      "Wir unterstützen die Erstellung von Rechtsakten, die Vorgangsbearbeitung und elektronische Dokumentenabläufe.",
      "Für ABC PRO entwickeln wir EAP Legislator, einen Editor für Beschlüsse, Anordnungen und andere Rechtsakte. Wir wirken auch an der Einführung von ABC-PRO-Systemen mit.",
      "Wir entwickeln KI-Werkzeuge für die Arbeit mit Dokumenten und die Analyse von Informationen. Außerdem wirken wir an der Entwicklung der Orion-Plattform von ABC PRO mit.",
    ],
  },
  services: {
    eyebrow: "Leistungen", title: "Wie wir Sie unterstützen", subtitle: "Wir konzipieren, entwickeln und verbinden Systeme für die öffentliche Verwaltung.",
    items: [
      { icon: "legislation", title: "Rechtsetzungssoftware", desc: "Wir entwickeln Werkzeuge zur Erstellung, Signierung und Übermittlung von Rechtsakten." },
      { icon: "automation", title: "Prozessautomatisierung", desc: "Wir automatisieren wiederkehrende Aufgaben in der Vorgangsbearbeitung und in Dokumentenabläufen." },
      { icon: "integration", title: "Systemintegration", desc: "Wir verbinden Systeme, damit sie Daten austauschen und Informationen gemeinsam nutzen können." },
      { icon: "digitization", title: "Software für Behörden", desc: "Wir entwickeln und implementieren Anwendungen für Vorgänge, Dokumente und öffentliche Dienstleistungen." },
      { icon: "ai", title: "Entwicklung von KI-Werkzeugen", desc: "Wir entwickeln KI-Werkzeuge für die Arbeit mit Dokumenten, die Analyse von Informationen und die Automatisierung von Aufgaben." },
    ],
  },
  values: {
    eyebrow: "Zusammenarbeit", title: "So arbeiten wir",
    items: [
      { num: "01", title: "Erfahrung mit Behörden", desc: "Wir entwickeln Systeme für Rechtsetzung und Dokumentenabläufe. Dabei berücksichtigen wir die Verfahren und Arbeitsweisen der Verwaltung." },
      { num: "02", title: "Entwicklung und Wartung", desc: "Wir entwickeln Software weiter und unterstützen ihren Betrieb nach der Einführung." },
      { num: "03", title: "Datenschutz", desc: "Bei der Systementwicklung berücksichtigen wir Datensicherheit und den Zugang zu Informationen." },
      { num: "04", title: "Passend zu Ihrer Behörde", desc: "Wir richten Änderungen an den Bedürfnissen der Nutzer und den bereits eingesetzten Systemen aus." },
    ],
  },
  legislator: {
    eyebrow: "Editor für Rechtsakte",
    title: "EAP Legislator",
    lead: "Ein Editor für Behörden, die Beschlüsse, Anordnungen und andere Rechtsakte erstellen.",
    description: "ITORG entwickelt EAP Legislator für ABC PRO. Die Software unterstützt Entwürfe in XML, die Abstimmung, elektronische Signaturen und die Übermittlung zur Veröffentlichung oder Rechtsaufsicht.",
    features: [
      {
        title: "Entwürfe in XML",
        desc: "Vorlagen und die Konvertierung in XML helfen bei der Erstellung von Rechtsakten mit einheitlicher Struktur."
      },
      {
        title: "Kommentare und Änderungshistorie",
        desc: "Kommentare, protokollierte Änderungen und Berichte zeigen, welche Vorschläge eingereicht und wie sie bearbeitet wurden."
      },
      {
        title: "Signieren und übermitteln",
        desc: "Signieren Sie Dokumente im Editor und übermitteln Sie sie zur Veröffentlichung oder Rechtsaufsicht."
      }
    ],
    editions: [
      {
        name: "EAP Legislator",
        desc: "Die Editionen Standard, Premium und Legalis richten sich an Behörden und Einrichtungen, die Rechtsakte erstellen. Die verfügbaren Funktionen hängen von der gewählten Edition ab.",
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
    intro: "Mit ABC PRO Sp. z o.o. arbeiten wir an der Entwicklung und Einführung von Software für Rechtsetzung und Dokumentenverwaltung in Behörden.",
    note: "Beispiele für Systeme von ABC PRO:",
    products: [
      { name: "EAP Legislator", desc: "Ein XML-Editor für Rechtsakte mit Änderungsverfolgung, elektronischer Signatur und Übermittlung zur Veröffentlichung." },
      { name: "Baza Aktów Własnych", desc: "Ein System für eigene Sammlungen von Rechtsakten einer Organisation mit Suchfunktionen, Verzeichnissen und Anbindung an eine Rechtsdatenbank." },
      { name: "ABC ANON", desc: "Ein Werkzeug, um ausgewählte Angaben in PDF- und DOCX-Dateien sowie Scans vor der Weitergabe zu schwärzen." },
      { name: "ABC Kancelaria", desc: "Ein Dokumentenmanagementsystem für Korrespondenz, Register sowie ein- und ausgehende Dokumente in Papierform und elektronischer Form." },
    ],
  },
  orion: {
    eyebrow: "KI-Werkzeuge", title: "Orion AI",
    lead: "Die KI-Plattform von ABC PRO für Verwaltung und Unternehmen.",
    description: "ITORG wirkt an der Entwicklung von Orion mit und entwickelt KI-Werkzeuge für die Arbeit mit Dokumenten, die Analyse von Informationen und die Automatisierung von Aufgaben.",
    cta: "Die Plattform Orion AI entdecken",
  },
  products: {
    title: "Produkte",
    intro: "Entdecken Sie EAP Legislator, Orion AI und weitere Systeme von ABC PRO für Rechtsetzung und Dokumentenverwaltung.",
    cta: "Produkte ansehen",
    details: "Details ansehen",
    back: "Alle Produkte",
    developmentTitle: "Rechtsetzung und KI",
    partnerTitle: "Weitere Systeme von ABC PRO",
    breadcrumb: "Brotkrumennavigation",
  },

  contact: { eyebrow: "Kontakt", title: "Sprechen wir über Ihr Projekt", subtitle: "Benötigen Sie Software zur Dokumentenverwaltung, eine Systemintegration oder ein KI-Werkzeug? Schreiben Sie uns oder rufen Sie an und beschreiben Sie, was Sie verbessern möchten." },
  footer: { tagline: "Rechtsetzungssoftware, Dokumentenabläufe und KI-Werkzeuge.", privacy: "Datenschutzerklärung", cookieSettings: "Cookie-Einstellungen" },
  legal: { ...site.legal, privacyUrl: "/de/privacy/" },
  nav: [
    { label: "Leistungen", href: "#uslugi" },
    { label: "Produkte", href: "/de/products/" },
    { label: "Über uns", href: "#o-firmie" },
    { label: "Zusammenarbeit", href: "#partner" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG — Software für die öffentliche Verwaltung", description: "Software für Behörden: Rechtsetzung, Dokumentenabläufe, Integrationen und KI-Werkzeuge. Wir entwickeln EAP Legislator für ABC PRO." },
  ui: {
    skip: "Zum Inhalt springen", home: "Startseite", mainNav: "Hauptnavigation", footerNav: "Fußzeilennavigation", navigation: "Navigation", menu: "Menü",
    languages: "Sprache auswählen", language: "Sprache", facts: "Unternehmen im Überblick", inBrief: "Im Überblick", founded: "Gegründet", owner: "Inhaber",
    headquarters: "Sitz", specialization: "Schwerpunkte", specializationValue: "Rechtsetzung · Dokumentenabläufe · Integration · KI", partner: "Partner", platform: "Leistungen",
    partnerCta: "Die Lösungen von ABC PRO entdecken", writeEmail: "E-Mail schreiben", address: "Anschrift", phone: "Telefon", email: "E-Mail", eDelivery: "Polnische e-Zustellung",
    registration: "Registrierungsdaten", bank: "Bankkonto", rights: "Alle Rechte vorbehalten.", close: "Schließen",
  },
  cookies, privacy,
};

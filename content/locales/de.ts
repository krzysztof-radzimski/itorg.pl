import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/de";

export const de: Site = {
  brand: { ...site.brand, eyebrow: "Digitalisierung der öffentlichen Verwaltung", tagline: "Software für die öffentliche Verwaltung." },
  company: { ...site.company, country: "Polen" },
  hero: {
    eyebrow: "Rechtsetzung · Dokumentenabläufe · KI", titleLead: "Durchdachte Lösungen", titleAccent: "für öffentliche Verwaltung und Unternehmen",
    subtitle: "Seit {years} Jahren entwickeln wir Software für die Bedürfnisse von Kommunalverwaltung, staatlicher Verwaltung und anderen Institutionen. Wir optimieren die Arbeit mit Dokumenten, integrieren Systeme und automatisieren Prozesse.",
    primaryCta: "Kontakt aufnehmen", secondaryCta: "Unsere Leistungen", scrollLabel: "Nach unten scrollen",
  },
  stats: [
    { kind: "years", number: "", suffix: "", label: "Jahre am Markt" },
    { kind: "static", number: "XML", suffix: "", label: "Rechtsdokumente" },
    { kind: "static", number: "KI", suffix: "", label: "Arbeit mit Dokumenten" },
  ],
  about: {
    eyebrow: "Über uns", title: "Software entwickeln und einführen",
    lead: "Seit 2009 konzipiert, entwickelt und implementiert ITORG Software für kommunale Selbstverwaltung, staatliche Verwaltung und andere Institutionen in Polen.",
    paragraphs: [
      "Wir unterstützen Rechtsetzungsverfahren, die Vorgangsbearbeitung und die elektronische Schriftgutverwaltung.",
      "Für ABC PRO entwickeln wir EAP Legislator, einen Editor für Beschlüsse, Anordnungen und andere Rechtsakte. Wir wirken auch an der Einführung von ABC-PRO-Systemen mit.",
      "Wir entwickeln Werkzeuge, die künstliche Intelligenz zur Dokumentenverarbeitung und Informationsanalyse nutzen. Wir wirken an der Entwicklung der Orion-Plattform von ABC PRO mit.",
    ],
  },
  services: {
    eyebrow: "Leistungen", title: "Unsere Leistungen", subtitle: "Wir konzipieren, entwickeln und integrieren IT-Systeme zur Unterstützung öffentlicher Aufgaben.",
    items: [
      { icon: "legislation", title: "Rechtsetzungssoftware", desc: "Wir entwickeln Werkzeuge zur Erstellung und Unterzeichnung von Rechtsakten sowie zur Übermittlung zur amtlichen Verkündung und an Aufsichtsbehörden." },
      { icon: "automation", title: "Prozessautomatisierung", desc: "Wir automatisieren wiederkehrende Tätigkeiten in der Vorgangsbearbeitung und Schriftgutverwaltung." },
      { icon: "integration", title: "Systemintegration", desc: "Wir integrieren IT-Systeme und ermöglichen den Datenaustausch zwischen Anwendungen." },
      { icon: "digitization", title: "Software für Behörden", desc: "Wir konzipieren und implementieren Anwendungen für die Vorgangsbearbeitung, Schriftgutverwaltung und Erbringung öffentlicher Dienstleistungen." },
      { icon: "ai", title: "Entwicklung von KI-Werkzeugen", desc: "Wir entwickeln Lösungen, die künstliche Intelligenz zur Dokumentenverarbeitung, Informationsanalyse und Prozessautomatisierung nutzen." },
    ],
  },
  values: {
    eyebrow: "Zusammenarbeit", title: "So setzen wir Projekte um",
    items: [
      { num: "01", title: "Verständnis für Verwaltungsprozesse", desc: "Wir berücksichtigen Rechtsetzungsverfahren, Anforderungen der Vorgangsbearbeitung und Grundsätze der Schriftgutverwaltung." },
      { num: "02", title: "Entwicklung und Wartung", desc: "Wir entwickeln und pflegen Software nach der Einführung und berücksichtigen veränderte Anforderungen der Nutzer." },
      { num: "03", title: "Datenschutz", desc: "Bei der Systementwicklung berücksichtigen wir Datensicherheit und den Zugang zu Informationen." },
      { num: "04", title: "Anpassung an institutionelle Abläufe", desc: "Wir passen Lösungen an die Arbeitsorganisation der Institution, die Anforderungen der Nutzer und die bestehende IT-Umgebung an." },
    ],
  },
  legislator: {
    eyebrow: "Editor für Rechtsakte",
    title: "EAP Legislator",
    lead: "Ein Editor für kommunale Selbstverwaltung und staatliche Verwaltung zur Erstellung von Beschlüssen, Anordnungen und anderen Rechtsakten.",
    description: "ITORG entwickelt EAP Legislator für ABC PRO. Das System unterstützt die Erstellung von Rechtsaktentwürfen in XML, die Abstimmung, elektronische Unterzeichnung und Übermittlung zur amtlichen Verkündung sowie an Aufsichtsbehörden.",
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
        title: "Rechtsakte unterzeichnen und übermitteln",
        desc: "Elektronische Unterzeichnung im Editor und Übermittlung der Rechtsakte zur amtlichen Verkündung sowie an Aufsichtsbehörden."
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
        name: "Öffentliche Finanzen (Besti@-Erweiterung)",
        desc: "Importiert XML-Daten aus Besti@ für Haushaltsbeschlüsse und deren Änderungen, mehrjährige Finanzprognosen und Berichte. Erstellt Tabellen für Dokumente zur Veröffentlichung in den Amtsblättern der Woiwodschaften und zur Vorlage bei den regionalen Rechnungskammern (RIO) in Polen.",
        cta: "Die Besti@-Erweiterung entdecken",
        href: legislatorUrls.finance
      }
    ]
  },
  partner: {
    eyebrow: "Partnerschaft", title: "Zusammenarbeit mit ABC PRO",
    intro: "Gemeinsam mit ABC PRO Sp. z o.o. entwickeln und implementieren wir Software für Rechtsetzungsverfahren und die elektronische Schriftgutverwaltung in der öffentlichen Verwaltung.",
    note: "Beispiele für Systeme von ABC PRO:",
    products: [
      { name: "EAP Legislator", desc: "Ein XML-Editor für Rechtsakte mit Änderungsverfolgung, elektronischer Signatur und Übermittlung zur Veröffentlichung." },
      { name: "Baza Aktów Własnych", desc: "Ein System zur Führung und Bereitstellung institutioneller Sammlungen von Beschlüssen, Anordnungen und internen Regelungen, mit Suche, Verzeichnissen und Integration einer Rechtsdatenbank." },
      { name: "ABC ANON", desc: "Ein Werkzeug zur Anonymisierung von Dokumenten und Schwärzung ausgewählter Inhalte vor der Bereitstellung. Unterstützt PDF- und DOCX-Dateien sowie gescannte Dokumente." },
      { name: "ABC Kancelaria", desc: "Ein Dokumentenmanagementsystem für Korrespondenz, Register sowie ein- und ausgehende Dokumente in Papierform und elektronischer Form." },
    ],
  },
  orion: {
    eyebrow: "KI-Werkzeuge", title: "Orion AI",
    lead: "Die KI-Plattform von ABC PRO für Verwaltung und Unternehmen.",
    description: "ITORG wirkt an der Entwicklung der Orion-Plattform mit und entwickelt KI-Werkzeuge für Dokumentenverarbeitung, Informationsanalyse und Prozessautomatisierung.",
    cta: "Die Plattform Orion AI entdecken",
  },
  products: {
    title: "Produkte",
    intro: "EAP Legislator, Orion AI und weitere Lösungen von ABC PRO unterstützen Rechtsetzungsverfahren, Schriftgutverwaltung und Informationsanalyse.",
    cta: "Produkte ansehen",
    details: "Details ansehen",
    back: "Alle Produkte",
    developmentTitle: "Rechtsetzung und KI",
    partnerTitle: "Weitere Systeme von ABC PRO",
    breadcrumb: "Brotkrumennavigation",
  },

  contact: { eyebrow: "Kontakt", title: "Sprechen wir über Ihr Projekt", subtitle: "Kontaktieren Sie uns, um die Anforderungen Ihrer Institution an Software, Systemintegration und den Einsatz künstlicher Intelligenz zu besprechen." },
  footer: { tagline: "Digitale Rechtsetzung, Schriftgutverwaltung und KI-Lösungen.", privacy: "Datenschutzerklärung", cookieSettings: "Cookie-Einstellungen" },
  legal: { ...site.legal, privacyUrl: "/de/privacy/" },
  nav: [
    { label: "Leistungen", href: "#uslugi" },
    { label: "Produkte", href: "/de/products/" },
    { label: "Über uns", href: "#o-firmie" },
    { label: "Zusammenarbeit", href: "#partner" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG: Software für die öffentliche Verwaltung", description: "Software für Kommunalverwaltung, staatliche Verwaltung und andere Institutionen: Rechtsetzung, Schriftgutverwaltung, Systemintegration und künstliche Intelligenz." },
  ui: {
    skip: "Zum Inhalt springen", home: "Startseite", mainNav: "Hauptnavigation", footerNav: "Fußzeilennavigation", navigation: "Navigation", menu: "Menü",
    languages: "Sprache auswählen", language: "Sprache", facts: "Unternehmen im Überblick", inBrief: "Im Überblick", founded: "Gegründet", owner: "Inhaber",
    headquarters: "Sitz", specialization: "Schwerpunkte", specializationValue: "Rechtsetzung · Schriftgutverwaltung · Systemintegration · KI", partner: "Partner", platform: "Leistungen",
    partnerCta: "Die Lösungen von ABC PRO entdecken", writeEmail: "E-Mail schreiben", address: "Anschrift", phone: "Telefon", email: "E-Mail", eDelivery: "Polnische e-Zustellung",
    registration: "Registrierungsdaten", bank: "Bankkonto", rights: "Alle Rechte vorbehalten.", close: "Schließen",
  },
  cookies, privacy,
};

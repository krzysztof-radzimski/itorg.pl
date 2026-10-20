import type { CookieCopy, PrivacyCopy } from "./types";

export const cookies: CookieCopy = {
  title: "Datenschutzeinstellungen",
  intro: "Diese Website nutzt notwendige Technologien für ihren Betrieb und speichert Ihre Einstellungen. Derzeit verwenden wir keine Analyse- oder Werbewerkzeuge und keine Social-Media-Plugins. Optionale Funktionen benötigen Ihre Einwilligung.",
  privacy: "Datenschutzerklärung", always: "Immer aktiv", show: "Kategoriebeschreibung anzeigen", hide: "Kategoriebeschreibung ausblenden",
  accept: "Alle akzeptieren", reject: "Alle ablehnen", save: "Auswahl speichern",
  categories: [
    { key: "necessary", name: "Notwendig", desc: "Diese Technologien speichern Ihre Einstellungen und tragen zur Sicherheit der Website bei. Sie lassen sich hier nicht deaktivieren." },
    { key: "analytics", name: "Analyse", desc: "Derzeit nicht im Einsatz. Bei einer Einführung dienen sie zur Nutzungsanalyse und benötigen Ihre vorherige Einwilligung." },
    { key: "marketing", name: "Werbung", desc: "Derzeit nicht im Einsatz. Werkzeuge zur Personalisierung von Werbung oder Marketing werden nur mit Ihrer Einwilligung aktiviert." },
    { key: "social", name: "Soziale Medien", desc: "Derzeit nicht im Einsatz. Plugins und Funktionen externer sozialer Plattformen benötigen Ihre vorherige Einwilligung." },
  ],
};

export const privacy: PrivacyCopy = {
  title: "Datenschutzerklärung", description: "Datenschutzerklärung und Cookie-Informationen der Website von ITORG Krzysztof Radzimski.", document: "Dokument", updated: "Letzte Aktualisierung",
  intro: "Diese Erklärung beschreibt die Datenverarbeitung sowie den Einsatz von Cookies und ähnlichen Technologien auf itorg.pl. Die Website informiert über unser Angebot. Ein Benutzerkonto oder eine Anmeldung ist nicht erforderlich.",
  sections: [
    { id: "controller", title: "1. Verantwortlicher", paragraphs: ["Verantwortlicher ist das unten genannte Unternehmen. Bei Datenschutzfragen erreichen Sie uns per E-Mail, Telefon oder über den polnischen elektronischen Zustelldienst."] },
    { id: "data", title: "2. Verarbeitete Daten", paragraphs: ["Die Website enthält keine Formulare und keine Werkzeuge zur automatischen Erhebung von Daten für Marketingzwecke."], items: ["Kontakt: Bei E-Mails, Anrufen oder elektronischen Zustellungen verarbeiten wir Ihre Angaben wie Name, E-Mail-Adresse, Telefonnummer und Nachricht, um Ihr Anliegen zu bearbeiten.", "Technische Daten: Unser Hostinganbieter Cloudflare verarbeitet zur Bereitstellung und Absicherung der Website Protokolldaten wie IP-Adresse, Browser, Betriebssystem, Anfragezeit und verweisende Adresse."] },
    { id: "basis", title: "3. Rechtsgrundlagen", paragraphs: [], items: ["Art. 6 Abs. 1 Buchst. b DSGVO: vorvertragliche Maßnahmen auf Ihre Anfrage und Bearbeitung geschäftlicher Anfragen.", "Art. 6 Abs. 1 Buchst. f DSGVO: berechtigte Interessen an Betrieb und Sicherheit der Website, Kommunikation sowie Feststellung oder Durchsetzung von Ansprüchen.", "Art. 6 Abs. 1 Buchst. a DSGVO: Einwilligung in optionale Cookies, falls diese künftig eingeführt werden.", "Art. 6 Abs. 1 Buchst. c DSGVO: gesetzliche Pflichten, etwa steuerliche und buchhalterische Pflichten aus Geschäftsbeziehungen."] },
    { id: "cookies", title: "4. Cookies und ähnliche Technologien", paragraphs: ["Die Website lädt Ressourcen von ihrer eigenen Domain. Wir verwenden derzeit keine eigenen Analyse- oder Werbewerkzeuge und keine Social-Media-Plugins. Die Sprachversion ergibt sich aus der Seitenadresse; dafür wird kein zusätzliches Cookie gespeichert."] },
    { id: "recipients", title: "5. Datenempfänger", paragraphs: ["Daten können Dienstleistern anvertraut werden, die den Betrieb der Website und die Korrespondenz unterstützen. Eine Weitergabe an Behörden erfolgt nur auf gesetzlicher Grundlage."], items: ["Cloudflare, Inc. — Hosting und Content Delivery Network für die Website.", "E-Mail-Anbieter und Betreiber des elektronischen Zustelldienstes — zur Bearbeitung der Korrespondenz."] },
    { id: "transfers", title: "6. Übermittlung außerhalb des EWR", paragraphs: ["Einige Anbieter wie Cloudflare haben ihren Sitz außerhalb des Europäischen Wirtschaftsraums, in den USA. Übermittlungen erfolgen auf Grundlage der von der Europäischen Kommission genehmigten Standardvertragsklauseln und gegebenenfalls des Data Privacy Framework."] },
    { id: "retention", title: "7. Speicherdauer", paragraphs: ["Korrespondenz und Kontaktdaten speichern wir für die Bearbeitung des Anliegens und die anwendbaren Verjährungsfristen. Gesetzlich aufzubewahrende Unterlagen werden für die vorgeschriebene Dauer gespeichert. Technische Protokolle speichert der Hostinganbieter nach seinen Richtlinien. Ihre Cookie-Entscheidung bleibt im lokalen Speicher, bis Sie diese ändern oder Ihre Browserdaten löschen."] },
    { id: "rights", title: "8. Ihre Rechte", paragraphs: ["Unter den gesetzlichen Voraussetzungen haben Sie folgende Rechte:"], items: ["Auskunft und Erhalt einer Kopie Ihrer Daten.", "Berichtigung, Löschung oder Einschränkung der Verarbeitung.", "Widerspruch gegen die Verarbeitung auf Grundlage berechtigter Interessen.", "Datenübertragbarkeit.", "Jederzeitiger Widerruf einer Einwilligung ohne Beeinträchtigung der Rechtmäßigkeit der vorherigen Verarbeitung.", "Beschwerde beim Präsidenten der polnischen Datenschutzbehörde (UODO)."] },
    { id: "changes", title: "9. Änderungen dieser Erklärung", paragraphs: ["Diese Erklärung kann bei Weiterentwicklung der Website oder Gesetzesänderungen aktualisiert werden. Die aktuelle Fassung finden Sie mit ihrem Aktualisierungsdatum unter dieser Adresse."] },
    { id: "contact", title: "10. Kontakt", paragraphs: ["Bei Fragen zum Datenschutz und zu personenbezogenen Daten nutzen Sie bitte die folgenden Kontaktdaten."] },
  ],
  tableCaption: "Auf dieser Website verwendete Technologien", tableHeaders: ["Name / Technologie", "Zweck", "Kategorie und Grundlage"],
  tableRows: [
    { name: "itorg-cookie-consent-v1 (lokaler Browserspeicher)", purpose: "Speicherung Ihrer Cookie-Entscheidung.", basis: "Notwendig · berechtigtes Interesse" },
    { name: "Technische Cloudflare-Cookies, etwa zum Schutz vor Bots", purpose: "Sicherheit und korrekte Bereitstellung der Website.", basis: "Notwendig · berechtigtes Interesse" },
    { name: "Analyse, Werbung und soziale Medien", purpose: "Derzeit nicht im Einsatz; vorherige Einwilligung vor Aktivierung erforderlich.", basis: "Optional · Einwilligung" },
  ],
  settings: "Notwendige Kategorien sind für den Betrieb erforderlich. Optionale Einstellungen können Sie jederzeit im Panel oder durch Löschen Ihrer Browserdaten ändern.",
  cloudflare: "Datenschutzerklärung von Cloudflare", authority: "Polnische Datenschutzbehörde",
};

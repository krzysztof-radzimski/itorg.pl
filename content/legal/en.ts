import type { CookieCopy, PrivacyCopy } from "./types";

export const cookies: CookieCopy = {
  title: "Privacy settings",
  intro: "This website uses essential technologies to work and remember your preferences. We currently use no analytics, advertising or social media plugins. Any optional features require your consent.",
  privacy: "Privacy policy", always: "Always active", show: "Show category description", hide: "Hide category description",
  accept: "Accept all", reject: "Reject all", save: "Save selection",
  categories: [
    { key: "necessary", name: "Essential", desc: "These remember your preferences and help keep the website secure. They cannot be disabled in this panel." },
    { key: "analytics", name: "Analytics", desc: "Not currently used. If introduced, these will help analyse website use and will require your prior consent." },
    { key: "marketing", name: "Advertising", desc: "Not currently used. Tools for personalised advertising or marketing will only be activated with your consent." },
    { key: "social", name: "Social media", desc: "Not currently used. Plugins and features from external social platforms will require your prior consent." },
  ],
};

export const privacy: PrivacyCopy = {
  title: "Privacy policy", description: "Privacy policy and cookie information for the ITORG Krzysztof Radzimski website.", document: "Document", updated: "Last updated",
  intro: "This policy explains how data is processed and how cookies and similar technologies are used on itorg.pl. The website provides information about our services and does not require an account or login.",
  sections: [
    { id: "controller", title: "1. Data controller", paragraphs: ["The company identified below is the data controller. For privacy enquiries, contact us by email, phone or the Polish e-Delivery service."] },
    { id: "data", title: "2. Data we process", paragraphs: ["The website has no forms or tools that automatically collect data for marketing purposes."], items: ["Contact: if you email, call or use e-Delivery, we process the details you provide, such as your name, email address, phone number and message, to respond and handle your enquiry.", "Technical data: our hosting provider, Cloudflare, processes logs needed to deliver the website and maintain security, including IP address, browser, operating system, request time and referring address."] },
    { id: "basis", title: "3. Legal bases", paragraphs: [], items: ["GDPR Article 6(1)(b): steps taken at your request before entering into a contract and handling business enquiries.", "GDPR Article 6(1)(f): legitimate interests in website operation and security, communication, and establishing or pursuing claims.", "GDPR Article 6(1)(a): consent for optional cookies if these are introduced in the future.", "GDPR Article 6(1)(c): legal obligations, including tax and accounting obligations arising from business relationships."] },
    { id: "cookies", title: "4. Cookies and similar technologies", paragraphs: ["The website loads resources from its own domain. We currently use no proprietary analytics, advertising tools or social media plugins. The language version is determined by the page address; no additional cookie is stored for this purpose."] },
    { id: "recipients", title: "5. Data recipients", paragraphs: ["Data may be entrusted to providers supporting the website and our correspondence. Disclosure to public authorities takes place only where required by law."], items: ["Cloudflare, Inc. — hosting and the content delivery network serving this website.", "Our email provider and the e-Delivery operator — for correspondence with you."] },
    { id: "transfers", title: "6. Transfers outside the EEA", paragraphs: ["Some providers, such as Cloudflare, are based outside the European Economic Area, in the United States. Transfers rely on standard contractual clauses approved by the European Commission and, where applicable, the Data Privacy Framework."] },
    { id: "retention", title: "7. Retention periods", paragraphs: ["We retain correspondence and contact details for as long as needed to handle the matter and for applicable claim limitation periods. Records subject to a legal retention obligation are kept for the required period. Our hosting provider retains technical logs under its own policy. Your cookie decision remains in local storage until changed or your browser data is cleared."] },
    { id: "rights", title: "8. Your rights", paragraphs: ["Subject to the conditions set by law, you have the following rights:"], items: ["Access to your data and a copy of it.", "Rectification, erasure or restriction of processing.", "Objection to processing based on legitimate interests.", "Data portability.", "Withdrawal of consent at any time, without affecting the lawfulness of earlier processing.", "Lodging a complaint with the President of the Polish Personal Data Protection Office (UODO)."] },
    { id: "changes", title: "9. Policy changes", paragraphs: ["This policy may be updated as the website develops or laws change. The current version is available at this address together with its update date."] },
    { id: "contact", title: "10. Contact", paragraphs: ["For questions about privacy and personal data, please use the contact details below."] },
  ],
  tableCaption: "Technologies used on this website", tableHeaders: ["Name / technology", "Purpose", "Category and basis"],
  tableRows: [
    { name: "itorg-cookie-consent-v1 (browser local storage)", purpose: "Remembering your cookie decision.", basis: "Essential · legitimate interest" },
    { name: "Technical Cloudflare cookies, such as bot protection", purpose: "Security and correct website delivery.", basis: "Essential · legitimate interest" },
    { name: "Analytics, advertising and social media", purpose: "Not currently used; prior consent is required before activation.", basis: "Optional · consent" },
  ],
  settings: "Essential categories are needed for website operation. You may change optional preferences at any time in the panel or by clearing your browser data.",
  cloudflare: "Cloudflare privacy policy", authority: "Polish Personal Data Protection Office",
};

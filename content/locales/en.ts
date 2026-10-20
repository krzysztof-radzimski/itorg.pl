import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/en";

export const en: Site = {
  brand: { ...site.brand, eyebrow: "Digital public administration", tagline: "Software for public administration." },
  company: { ...site.company, country: "Poland" },
  hero: {
    eyebrow: "Legislation · document workflows · AI", titleLead: "Thoughtful solutions", titleAccent: "for public administration and business",
    subtitle: "For {years} years, we have been developing software tailored to the needs of local government, central government and other institutions. We streamline work with documents, integrate systems and automate processes.",
    primaryCta: "Get in touch", secondaryCta: "View our services", scrollLabel: "Scroll down",
  },
  stats: [
    { kind: "years", number: "", suffix: "", label: "Years in business" },
    { kind: "static", number: "XML", suffix: "", label: "Legal documents" },
    { kind: "static", number: "AI", suffix: "", label: "Working with documents" },
  ],
  about: {
    eyebrow: "About us", title: "Software development and implementation",
    lead: "Since 2009, ITORG has been designing, developing and implementing software for local government bodies, central government and other institutions in Poland.",
    paragraphs: [
      "We support legislative processes, case management and electronic records management.",
      "We develop EAP Legislator for ABC PRO, an editor for resolutions, orders and other legal acts. We also work on implementations of ABC PRO systems.",
      "We develop tools that use artificial intelligence to process documents and analyse information. We contribute to the development of ABC PRO’s Orion platform.",
    ],
  },
  services: {
    eyebrow: "Services", title: "Our services", subtitle: "We design, develop and integrate IT systems that support the delivery of public services.",
    items: [
      { icon: "legislation", title: "Legislative systems", desc: "We develop tools for drafting and signing legal acts, and submitting them for official publication and to supervisory authorities." },
      { icon: "automation", title: "Process automation", desc: "We automate repetitive tasks in case management and records management processes." },
      { icon: "integration", title: "System integration", desc: "We integrate IT systems to enable data exchange between applications." },
      { icon: "digitization", title: "Public sector software", desc: "We design and implement applications that support case management, records management and the delivery of public services." },
      { icon: "ai", title: "AI tool development", desc: "We develop solutions that use artificial intelligence to process documents, analyse information and automate processes." },
    ],
  },
  values: {
    eyebrow: "Working together", title: "How we deliver projects",
    items: [
      { num: "01", title: "Understanding administrative processes", desc: "We design solutions with legislative procedures, case management requirements and records management practices in mind." },
      { num: "02", title: "Development and maintenance", desc: "We develop and maintain software after implementation, taking users’ changing needs into account." },
      { num: "03", title: "Data protection", desc: "We consider data security and access to information when designing systems." },
      { num: "04", title: "Aligned with institutional processes", desc: "We adapt solutions to each institution’s working practices, user needs and existing IT environment." },
    ],
  },
  legislator: {
    eyebrow: "Legal drafting software",
    title: "EAP Legislator",
    lead: "An editor for local and central government bodies, supporting the drafting of resolutions, orders and other legal acts.",
    description: "ITORG develops EAP Legislator for ABC PRO. The system supports drafting legal acts in XML, consultation, electronic signing, and submission for official publication and to supervisory authorities.",
    features: [
      {
        title: "Drafting in XML",
        desc: "Templates and conversion to XML help prepare legal acts while preserving their structure."
      },
      {
        title: "Comments and change history",
        desc: "Comments, recorded changes and reports make it possible to review proposals and how they were addressed."
      },
      {
        title: "Signing and submitting legal acts",
        desc: "Electronic signing in the editor and submission of legal acts for official publication and to supervisory authorities."
      }
    ],
    editions: [
      {
        name: "EAP Legislator",
        desc: "Standard, Premium and Legalis editions for public authorities and institutions preparing legal acts. Available features depend on the chosen edition.",
        cta: "Explore EAP Legislator",
        href: legislatorUrls.editor
      },
      {
        name: "Legislator for central government",
        desc: "An edition for ministries and central government offices, based on the Government Legislation Centre (RCL) template, for acts submitted to Poland’s Dziennik Ustaw and Monitor Polski official journals.",
        cta: "Explore Legislator GOV",
        href: legislatorUrls.government
      },
      {
        name: "Public Finance (Besti@ add-on)",
        desc: "Imports XML data from Besti@ for budget resolutions and amendments, multiannual financial forecasts and reports. Generates tables for documents submitted to Poland’s regional official journals and regional chambers of audit (RIO).",
        cta: "Explore the Besti@ add-on",
        href: legislatorUrls.finance
      }
    ]
  },
  partner: {
    eyebrow: "Partnership", title: "Working with ABC PRO",
    intro: "We work with ABC PRO Sp. z o.o. to develop and implement software supporting legislative processes and electronic records management in public administration.",
    note: "Examples of ABC PRO systems:",
    products: [
      { name: "EAP Legislator", desc: "An XML editor for legal acts with change tracking, electronic signing and submission for publication." },
      { name: "Baza Aktów Własnych", desc: "A system for maintaining and providing access to an institution’s collections of resolutions, orders and internal regulations, with search, indexes and integration with a database of legislation." },
      { name: "ABC ANON", desc: "A tool for anonymising documents and redacting selected content before disclosure. Supports PDF and DOCX files, as well as scanned documents." },
      { name: "ABC Kancelaria", desc: "An electronic document management system for correspondence, registers and incoming and outgoing documents in both paper and digital form." },
    ],
  },
  orion: {
    eyebrow: "AI tools", title: "Orion AI",
    lead: "ABC PRO’s artificial intelligence platform for public administration and business.",
    description: "ITORG contributes to the development of the Orion platform and develops AI tools for document processing, information analysis and process automation.",
    cta: "Explore the Orion AI platform",
  },
  products: {
    title: "Products",
    intro: "EAP Legislator, Orion AI and other ABC PRO solutions support legislative processes, records management and information analysis.",
    cta: "View products",
    details: "View details",
    back: "All products",
    developmentTitle: "Legislation and AI",
    partnerTitle: "Other ABC PRO systems",
    breadcrumb: "Breadcrumb navigation",
  },

  contact: {
    eyebrow: "Contact", title: "Let’s talk about your project",
    subtitle: "Contact us to discuss your institution’s requirements for software, system integration and the use of artificial intelligence.",
  },
  footer: { tagline: "Digital legislation, records management and AI solutions.", privacy: "Privacy policy", cookieSettings: "Cookie settings" },
  legal: { ...site.legal, privacyUrl: "/en/privacy/" },
  nav: [
    { label: "Services", href: "#uslugi" },
    { label: "Products", href: "/en/products/" },
    { label: "About us", href: "#o-firmie" },
    { label: "Partnership", href: "#partner" },
    { label: "Contact", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG: Software for public administration", description: "Software for local government, central government and other institutions: legislative processes, records management, system integration and artificial intelligence." },
  ui: {
    skip: "Skip to content", home: "Home", mainNav: "Main navigation", footerNav: "Footer navigation", navigation: "Navigation", menu: "Menu",
    languages: "Choose a language", language: "Language", facts: "Company at a glance", inBrief: "At a glance", founded: "Founded", owner: "Owner",
    headquarters: "Based in", specialization: "Expertise", specializationValue: "Legislation · records management · system integration · AI", partner: "Partner", platform: "Services",
    partnerCta: "Explore ABC PRO’s solutions", writeEmail: "Send an email", address: "Address", phone: "Phone", email: "Email", eDelivery: "Polish e-Delivery",
    registration: "Registration details", bank: "Bank account", rights: "All rights reserved.", close: "Close",
  },
  cookies, privacy,
};

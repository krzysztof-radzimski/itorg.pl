import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/en";

export const en: Site = {
  brand: { ...site.brand, eyebrow: "Digital public administration", tagline: "Software for public administration." },
  company: { ...site.company, country: "Poland" },
  hero: {
    eyebrow: "Legislation · document workflows · AI", titleLead: "Thoughtful solutions", titleAccent: "for public administration and business",
    subtitle: "For {years} years, we have been building software tailored to public administration and businesses — streamlining document workflows, connecting systems and automating processes.",
    primaryCta: "Get in touch", secondaryCta: "View our services", scrollLabel: "Scroll down",
  },
  stats: [
    { kind: "years", number: "", suffix: "", label: "Years in business" },
    { kind: "static", number: "XML", suffix: "", label: "Legal documents" },
    { kind: "static", number: "AI", suffix: "", label: "Working with documents" },
  ],
  about: {
    eyebrow: "About us", title: "Software development and implementation",
    lead: "Since 2009, ITORG has been designing, developing and implementing software for public authorities and institutions in Poland.",
    paragraphs: [
      "We help public authorities draft legal acts, handle cases and manage electronic document workflows.",
      "We develop EAP Legislator for ABC PRO, an editor for resolutions, orders and other legal acts. We also work on implementations of ABC PRO systems.",
      "We build artificial intelligence tools for working with documents and analysing information, and contribute to the development of ABC PRO’s Orion platform.",
    ],
  },
  services: {
    eyebrow: "Services", title: "How we can help", subtitle: "We design, develop and connect systems used in public administration.",
    items: [
      { icon: "legislation", title: "Legislative systems", desc: "We develop tools for drafting, signing and submitting legal acts." },
      { icon: "automation", title: "Process automation", desc: "We automate repetitive tasks in case handling and document workflows." },
      { icon: "integration", title: "System integration", desc: "We connect systems so they can exchange data and share information." },
      { icon: "digitization", title: "Public sector software", desc: "We design and implement applications for case handling, document management and public services." },
      { icon: "ai", title: "AI tool development", desc: "We build artificial intelligence tools for working with documents, analysing information and automating tasks." },
    ],
  },
  values: {
    eyebrow: "Working together", title: "How we work",
    items: [
      { num: "01", title: "Public sector experience", desc: "We develop legislative systems and document workflows, taking public sector procedures and working practices into account." },
      { num: "02", title: "Development and maintenance", desc: "We continue to develop software and support its operation after implementation." },
      { num: "03", title: "Data protection", desc: "We consider data security and access to information when designing systems." },
      { num: "04", title: "Fit for your organisation", desc: "We design changes around users’ needs and the systems they already use." },
    ],
  },
  legislator: {
    eyebrow: "Legal drafting software",
    title: "EAP Legislator",
    lead: "An editor for public authorities preparing resolutions, orders and other legal acts.",
    description: "ITORG develops EAP Legislator for ABC PRO. The software supports drafting in XML, reviewing changes, electronic signing and submission for publication or legal oversight.",
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
        title: "Signing and submission",
        desc: "Sign documents in the editor and submit them for publication or legal oversight."
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
        name: "Public Finance — Besti@ add-on",
        desc: "Imports Besti@ XML data for budget resolutions, amendments, multi-year financial forecasts and budget reports. It produces readable tables for documents submitted for publication and regional audit chamber (RIO) oversight.",
        cta: "Explore the Besti@ add-on",
        href: legislatorUrls.finance
      }
    ]
  },
  partner: {
    eyebrow: "Partnership", title: "Working with ABC PRO",
    intro: "We work with ABC PRO Sp. z o.o. on developing and implementing software for legislative work and document management in public administration.",
    note: "Examples of ABC PRO systems:",
    products: [
      { name: "EAP Legislator", desc: "An XML editor for legal acts with change tracking, electronic signing and submission for publication." },
      { name: "Baza Aktów Własnych", desc: "A system for maintaining an organisation’s own collections of legal acts, with full-text search, indexes and integration with a database of legislation." },
      { name: "ABC ANON", desc: "A tool for redacting selected information from PDF and DOCX files and scans before sharing them." },
      { name: "ABC Kancelaria", desc: "An electronic document management system for correspondence, registers and incoming and outgoing documents in both paper and digital form." },
    ],
  },
  orion: {
    eyebrow: "AI tools", title: "Orion AI",
    lead: "ABC PRO’s artificial intelligence platform for public administration and business.",
    description: "ITORG contributes to Orion’s development and builds AI tools for working with documents, analysing information and automating tasks.",
    cta: "Explore the Orion AI platform",
  },
  products: {
    title: "Products",
    intro: "Explore EAP Legislator, Orion AI and other ABC PRO systems for legislative work and document management.",
    cta: "View products",
    details: "View details",
    back: "All products",
    developmentTitle: "Legislation and AI",
    partnerTitle: "Other ABC PRO systems",
    breadcrumb: "Breadcrumb navigation",
  },

  contact: {
    eyebrow: "Contact", title: "Let’s talk about your project",
    subtitle: "Need document management software, system integration or an AI tool? Email or call us and describe what you want to improve.",
  },
  footer: { tagline: "Legislative systems, document workflows and AI tools.", privacy: "Privacy policy", cookieSettings: "Cookie settings" },
  legal: { ...site.legal, privacyUrl: "/en/privacy/" },
  nav: [
    { label: "Services", href: "#uslugi" },
    { label: "Products", href: "/en/products/" },
    { label: "About us", href: "#o-firmie" },
    { label: "Partnership", href: "#partner" },
    { label: "Contact", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG — Software for public administration", description: "We develop and implement public sector software: legislative systems, document workflows, integrations and AI tools. We develop EAP Legislator for ABC PRO." },
  ui: {
    skip: "Skip to content", home: "Home", mainNav: "Main navigation", footerNav: "Footer navigation", navigation: "Navigation", menu: "Menu",
    languages: "Choose a language", language: "Language", facts: "Company at a glance", inBrief: "At a glance", founded: "Founded", owner: "Owner",
    headquarters: "Based in", specialization: "Expertise", specializationValue: "Legislation · document workflows · integration · AI", partner: "Partner", platform: "Services",
    partnerCta: "Explore ABC PRO’s solutions", writeEmail: "Send an email", address: "Address", phone: "Phone", email: "Email", eDelivery: "Polish e-Delivery",
    registration: "Registration details", bank: "Bank account", rights: "All rights reserved.", close: "Close",
  },
  cookies, privacy,
};

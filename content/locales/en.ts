import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/en";

export const en: Site = {
  brand: { ...site.brand, eyebrow: "Digital public administration", tagline: "Innovative IT solutions for the public sector." },
  company: { ...site.company, country: "Poland" },
  hero: {
    eyebrow: "Digital public administration", titleLead: "We bring", titleAccent: "public administration into the digital age",
    subtitle: "For {years} years, we have been developing advanced solutions for digital legislation and process automation in Poland’s public sector.",
    primaryCta: "Get in touch", secondaryCta: "Our expertise", scrollLabel: "Scroll down",
  },
  stats: [
    { kind: "years", number: "", suffix: "+", label: "Years of experience" },
    { kind: "static", number: "100%", suffix: "", label: "Public sector focus" },
    { kind: "static", number: "24/7", suffix: "", label: "Technical support" },
  ],
  about: {
    eyebrow: "About us", title: "Technology serving the public",
    lead: "ITORG is Krzysztof Radzimski’s company. Since 2009, we have been designing and implementing software for public authorities and institutions.",
    paragraphs: [
      "We specialise in digital legislative processes and document workflow automation — areas where precision, legal compliance and reliability are essential.",
      "We combine extensive public sector experience with modern engineering. Through our partnership with ABC PRO Sp. z o.o., we deliver proven legal tools and comprehensive implementations at every scale.",
      "We also develop artificial intelligence tools. ITORG contributes to the development of ABC PRO’s Orion platform, helping build solutions for everyday work with documents and information.",
    ],
  },
  services: {
    eyebrow: "What we do", title: "Our expertise", subtitle: "Comprehensive support for digital public services — from legislation and integration to AI tools.",
    items: [
      { icon: "legislation", title: "Legislative systems", desc: "Comprehensive platforms for managing legal acts and automating legislative document workflows in public administration." },
      { icon: "automation", title: "Process automation", desc: "Optimising administrative workflows with intelligent tools for managing cases and documents." },
      { icon: "integration", title: "System integration", desc: "Connecting IT solutions with existing infrastructure to keep public sector systems working together." },
      { icon: "digitization", title: "Digital public services", desc: "Implementing innovative technologies that make services more accessible to citizens and public authorities more efficient." },
      { icon: "ai", title: "AI tool development", desc: "Designing and developing artificial intelligence tools for document workflows, information analysis and everyday task automation." },
    ],
  },
  values: {
    eyebrow: "Why ITORG", title: "What sets us apart",
    items: [
      { num: "01", title: "Innovation", desc: "Continuously exploring technological solutions that address the challenges of modern public administration." },
      { num: "02", title: "Reliability", desc: "Delivering stable, high-performance systems that support the continuity of public services." },
      { num: "03", title: "Security", desc: "High standards of data protection, aligned with legal requirements and industry best practices." },
      { num: "04", title: "Partnership", desc: "Long-term cooperation grounded in an understanding of the public sector and its practical needs." },
    ],
  },
  legislator: {
    eyebrow: "Flagship product",
    title: "EAP Legislator",
    lead: "The main product Krzysztof Radzimski develops for ABC PRO.",
    description: "An editor supporting work on resolutions, orders and other legal acts — from drafting structured XML and reviewing changes to electronic signing and submission for publication or legal oversight.",
    features: [
      {
        title: "Structured legal documents in XML",
        desc: "Templates and conversion to structured content help prepare legal acts and maintain a consistent document layout."
      },
      {
        title: "Collaboration and change tracking",
        desc: "Comments, recorded changes and work reports make it possible to follow proposals and how they were addressed."
      },
      {
        title: "Signing and submitting legal acts",
        desc: "Signing within the editor and submitting documents for publication or legal oversight support an electronic legislative workflow."
      }
    ],
    editions: [
      {
        name: "EAP Legislator",
        desc: "Standard, Premium and Legalis editions for public authorities and institutions preparing legal acts, with a choice of capabilities to suit the organisation.",
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
    intro: "Our partnership with ABC PRO Sp. z o.o. gives clients access to professional legal tools and comprehensive implementations supporting public administration.",
    note: "ABC PRO provides solutions primarily for public administration and large businesses. Its key products include:",
    products: [
      { name: "EAP Legislator", desc: "An editor for drafting legal acts in XML, tracking changes, applying secure electronic signatures and submitting acts for publication." },
      { name: "Baza Aktów Własnych", desc: "A system for maintaining an organisation’s own collections of legal acts, with full-text search, indexes and integration with a database of legislation." },
      { name: "ABC ANON", desc: "A tool for anonymising PDF and DOCX documents and scans by redacting selected information in accordance with legal requirements." },
      { name: "ABC Kancelaria", desc: "An electronic document management system for correspondence, registers and incoming and outgoing documents in both paper and digital form." },
    ],
  },
  orion: {
    eyebrow: "AI tools", title: "Building the future with Orion AI",
    lead: "ITORG contributes to the development of ABC PRO’s Orion platform — an AI platform for public administration and business.",
    description: "We develop AI tools that help people work with documents, analyse information and automate tasks. Our contribution to Orion brings these capabilities together with our experience in public sector software.",
    cta: "Explore the Orion AI platform",
  },
  contact: {
    eyebrow: "Contact", title: "Let’s talk about your project",
    subtitle: "Implementing a new system or modernising your organisation? Email or call us to discuss how we can help.",
  },
  footer: { tagline: "Innovative IT solutions and AI tools for public administration.", privacy: "Privacy policy", cookieSettings: "Cookie settings" },
  legal: { ...site.legal, privacyUrl: "/en/privacy/" },
  nav: [
    { label: "About us", href: "#o-firmie" }, { label: "Services", href: "#uslugi" },
    { label: "Legislator", href: "#legislator" },
    { label: "Values", href: "#wartosci" }, { label: "Partner", href: "#partner" },
    { label: "Orion AI", href: "#orion" }, { label: "Contact", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG — IT solutions and AI tools for public administration", description: "ITORG Krzysztof Radzimski — development of EAP Legislator for ABC PRO, legislative systems, automation and AI tools. Contributor to the Orion AI platform." },
  ui: {
    skip: "Skip to content", home: "Home", mainNav: "Main navigation", footerNav: "Footer navigation", navigation: "Navigation", menu: "Menu",
    languages: "Choose a language", language: "Language", facts: "Company at a glance", inBrief: "At a glance", founded: "Founded", owner: "Owner",
    headquarters: "Based in", specialization: "Expertise", specializationValue: "Legislation · document management · integration · AI", partner: "Partner", platform: "Platform",
    partnerCta: "Explore ABC PRO’s solutions", writeEmail: "Send an email", address: "Address", phone: "Phone", email: "Email", eDelivery: "Polish e-Delivery",
    registration: "Registration details", bank: "Bank account", rights: "All rights reserved.", close: "Close",
  },
  cookies, privacy,
};

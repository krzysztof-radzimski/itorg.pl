import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/es";

export const es: Site = {
  brand: { ...site.brand, eyebrow: "Digitalización de la administración pública", tagline: "Software para la administración pública." },
  company: { ...site.company, country: "Polonia" },
  hero: {
    eyebrow: "Legislación · gestión documental · IA", titleLead: "Soluciones bien pensadas", titleAccent: "para la administración pública y las empresas",
    subtitle: "Desde hace {years} años desarrollamos software adaptado a las necesidades de las administraciones locales, la Administración del Estado y otras instituciones. Optimizamos el trabajo con documentos, integramos sistemas y automatizamos procesos.",
    primaryCta: "Contacta con nosotros", secondaryCta: "Ver servicios", scrollLabel: "Desplazarse hacia abajo",
  },
  stats: [
    { kind: "years", number: "", suffix: "", label: "Años de actividad" },
    { kind: "static", number: "XML", suffix: "", label: "Documentos jurídicos" },
    { kind: "static", number: "IA", suffix: "", label: "Trabajo con documentos" },
  ],
  about: {
    eyebrow: "Quiénes somos", title: "Desarrollamos e implantamos software",
    lead: "Desde 2009, ITORG diseña, desarrolla e implanta software para entidades locales, la Administración del Estado y otras instituciones de Polonia.",
    paragraphs: [
      "Apoyamos los procedimientos de elaboración normativa, la tramitación de expedientes y la gestión electrónica de documentos.",
      "Desarrollamos EAP Legislator para ABC PRO, un editor de resoluciones, órdenes y otros actos jurídicos. También colaboramos en la implantación de sistemas de ABC PRO.",
      "Desarrollamos herramientas que utilizan inteligencia artificial para procesar documentos y analizar información. Participamos en el desarrollo de la plataforma Orion de ABC PRO.",
    ],
  },
  services: {
    eyebrow: "Servicios", title: "Nuestros servicios", subtitle: "Diseñamos, desarrollamos e integramos sistemas informáticos que apoyan el ejercicio de las funciones públicas.",
    items: [
      { icon: "legislation", title: "Sistemas legislativos", desc: "Desarrollamos herramientas para elaborar y firmar actos jurídicos, así como remitirlos para su publicación oficial y a los órganos de supervisión." },
      { icon: "automation", title: "Automatización de procesos", desc: "Automatizamos tareas repetitivas en la tramitación de expedientes y la gestión documental." },
      { icon: "integration", title: "Integración de sistemas", desc: "Integramos sistemas informáticos para permitir el intercambio de datos entre aplicaciones." },
      { icon: "digitization", title: "Software para organismos públicos", desc: "Diseñamos e implantamos aplicaciones para la tramitación de expedientes, la gestión documental y la prestación de servicios públicos." },
      { icon: "ai", title: "Desarrollo de herramientas de IA", desc: "Desarrollamos soluciones que utilizan inteligencia artificial para procesar documentos, analizar información y automatizar procesos." },
    ],
  },
  values: {
    eyebrow: "Colaboración", title: "Cómo ejecutamos los proyectos",
    items: [
      { num: "01", title: "Conocimiento de los procedimientos administrativos", desc: "Diseñamos soluciones teniendo en cuenta los procedimientos de elaboración normativa, la tramitación de expedientes y la gestión documental." },
      { num: "02", title: "Desarrollo y mantenimiento", desc: "Desarrollamos y mantenemos el software tras su implantación, atendiendo a la evolución de las necesidades de los usuarios." },
      { num: "03", title: "Protección de datos", desc: "Al diseñar sistemas, tenemos en cuenta la seguridad de los datos y el acceso a la información." },
      { num: "04", title: "Adaptación a los procesos de la institución", desc: "Adaptamos las soluciones a la organización del trabajo de la institución, las necesidades de los usuarios y el entorno informático existente." },
    ],
  },
  legislator: {
    eyebrow: "Editor de actos jurídicos",
    title: "EAP Legislator",
    lead: "Editor para las entidades locales y la Administración del Estado, destinado a la elaboración de resoluciones, órdenes y otros actos jurídicos.",
    description: "ITORG desarrolla EAP Legislator para ABC PRO. El sistema permite elaborar proyectos de actos jurídicos en XML, realizar consultas, firmar electrónicamente y remitir los documentos para su publicación oficial y a los órganos de supervisión.",
    features: [
      {
        title: "Borradores en XML",
        desc: "Las plantillas y la conversión a XML ayudan a preparar los actos manteniendo su estructura."
      },
      {
        title: "Comentarios e historial de cambios",
        desc: "Los comentarios, el registro de cambios y los informes permiten revisar las propuestas y cómo se han resuelto."
      },
      {
        title: "Firma y remisión de actos jurídicos",
        desc: "Firma electrónica en el editor y remisión de los actos jurídicos para su publicación oficial y a los órganos de supervisión."
      }
    ],
    editions: [
      {
        name: "EAP Legislator",
        desc: "Ediciones Standard, Premium y Legalis para organismos e instituciones que elaboran actos jurídicos. Las funciones disponibles dependen de la edición elegida.",
        cta: "Descubre EAP Legislator",
        href: legislatorUrls.editor
      },
      {
        name: "Legislator para la administración central",
        desc: "Versión para ministerios y organismos centrales, basada en la plantilla del Centro de Legislación del Gobierno polaco (RCL), para actos destinados a Dziennik Ustaw y Monitor Polski.",
        cta: "Descubre Legislator GOV",
        href: legislatorUrls.government
      },
      {
        name: "Finanzas Públicas (complemento Besti@)",
        desc: "Importa datos XML de Besti@ para resoluciones presupuestarias y sus modificaciones, previsiones financieras plurianuales e informes. Genera tablas para documentos destinados a los diarios oficiales de los voivodatos y a las cámaras regionales de cuentas (RIO) de Polonia.",
        cta: "Descubre el complemento Besti@",
        href: legislatorUrls.finance
      }
    ]
  },
  partner: {
    eyebrow: "Colaboración", title: "Colaboramos con ABC PRO",
    intro: "Colaboramos con ABC PRO Sp. z o.o. en el desarrollo y la implantación de software para los procedimientos de elaboración normativa y la gestión electrónica de documentos en las administraciones públicas.",
    note: "Ejemplos de sistemas de ABC PRO:",
    products: [
      { name: "EAP Legislator", desc: "Editor de actos jurídicos en XML con seguimiento de cambios, firma electrónica y envío para publicación." },
      { name: "Baza Aktów Własnych", desc: "Sistema de gestión y consulta de colecciones institucionales de resoluciones, órdenes y reglamentos internos, con búsqueda, índices e integración con una base de datos normativa." },
      { name: "ABC ANON", desc: "Herramienta para anonimizar documentos y suprimir contenidos seleccionados antes de su divulgación. Admite archivos PDF y DOCX, así como documentos digitalizados." },
      { name: "ABC Kancelaria", desc: "Sistema de gestión documental electrónica para correspondencia, registros y documentos entrantes y salientes, tanto en papel como en formato digital." },
    ],
  },
  orion: {
    eyebrow: "Herramientas de IA", title: "Orion AI",
    lead: "La plataforma de inteligencia artificial de ABC PRO para la administración pública y las empresas.",
    description: "ITORG participa en el desarrollo de la plataforma Orion y crea herramientas de IA para el procesamiento de documentos, el análisis de información y la automatización de procesos.",
    cta: "Descubre la plataforma Orion AI",
  },
  products: {
    title: "Productos",
    intro: "EAP Legislator, Orion AI y las demás soluciones de ABC PRO apoyan la elaboración normativa, la gestión documental y el análisis de información.",
    cta: "Ver productos",
    details: "Ver detalles",
    back: "Todos los productos",
    developmentTitle: "Legislación e IA",
    partnerTitle: "Otros sistemas de ABC PRO",
    breadcrumb: "Ruta de navegación",
  },

  contact: { eyebrow: "Contacto", title: "Hablemos de su proyecto", subtitle: "Póngase en contacto con nosotros para analizar las necesidades de su institución en materia de software, integración de sistemas y uso de la inteligencia artificial." },
  footer: { tagline: "Elaboración normativa digital, gestión documental y soluciones de IA.", privacy: "Política de privacidad", cookieSettings: "Configuración de cookies" },
  legal: { ...site.legal, privacyUrl: "/es/privacy/" },
  nav: [
    { label: "Servicios", href: "#uslugi" },
    { label: "Productos", href: "/es/products/" },
    { label: "Quiénes somos", href: "#o-firmie" },
    { label: "Colaboración", href: "#partner" },
    { label: "Contacto", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG: Software para la administración pública", description: "Software para administraciones locales, la Administración del Estado y otras instituciones: elaboración normativa, gestión documental, integración de sistemas e inteligencia artificial." },
  ui: {
    skip: "Saltar al contenido", home: "Inicio", mainNav: "Navegación principal", footerNav: "Navegación del pie de página", navigation: "Navegación", menu: "Menú",
    languages: "Elegir idioma", language: "Idioma", facts: "La empresa en breve", inBrief: "En breve", founded: "Fundación", owner: "Propietario",
    headquarters: "Sede", specialization: "Especialidad", specializationValue: "Elaboración normativa · gestión documental · integración de sistemas · IA", partner: "Socio", platform: "Servicios",
    partnerCta: "Descubre las soluciones de ABC PRO", writeEmail: "Enviar un correo", address: "Dirección", phone: "Teléfono", email: "Correo electrónico", eDelivery: "Entrega electrónica polaca",
    registration: "Datos registrales", bank: "Cuenta bancaria", rights: "Todos los derechos reservados.", close: "Cerrar",
  },
  cookies, privacy,
};

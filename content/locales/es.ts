import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/es";

export const es: Site = {
  brand: { ...site.brand, eyebrow: "Digitalización de la administración pública", tagline: "Software para la administración pública." },
  company: { ...site.company, country: "Polonia" },
  hero: {
    eyebrow: "Legislación · gestión documental · IA", titleLead: "Soluciones bien pensadas", titleAccent: "para la administración pública y las empresas",
    subtitle: "Llevamos {years} años creando software adaptado a la administración pública y las empresas: agilizamos el trabajo con documentos, conectamos sistemas y automatizamos procesos.",
    primaryCta: "Contacta con nosotros", secondaryCta: "Ver servicios", scrollLabel: "Desplazarse hacia abajo",
  },
  stats: [
    { kind: "years", number: "", suffix: "", label: "Años de actividad" },
    { kind: "static", number: "XML", suffix: "", label: "Documentos jurídicos" },
    { kind: "static", number: "IA", suffix: "", label: "Trabajo con documentos" },
  ],
  about: {
    eyebrow: "Quiénes somos", title: "Desarrollamos e implantamos software",
    lead: "Desde 2009, ITORG diseña, desarrolla e implanta software para organismos e instituciones públicas de Polonia.",
    paragraphs: [
      "Ayudamos a los organismos públicos a elaborar actos jurídicos, tramitar expedientes y gestionar documentos electrónicos.",
      "Desarrollamos EAP Legislator para ABC PRO, un editor de resoluciones, órdenes y otros actos jurídicos. También colaboramos en la implantación de sistemas de ABC PRO.",
      "Creamos herramientas de inteligencia artificial para trabajar con documentos y analizar información. Colaboramos en el desarrollo de la plataforma Orion de ABC PRO.",
    ],
  },
  services: {
    eyebrow: "Servicios", title: "Cómo podemos ayudarte", subtitle: "Diseñamos, desarrollamos y conectamos sistemas para la administración pública.",
    items: [
      { icon: "legislation", title: "Sistemas legislativos", desc: "Desarrollamos herramientas para redactar, firmar y enviar actos jurídicos." },
      { icon: "automation", title: "Automatización de procesos", desc: "Automatizamos tareas repetitivas en la tramitación de expedientes y la gestión de documentos." },
      { icon: "integration", title: "Integración de sistemas", desc: "Conectamos sistemas para que puedan intercambiar datos y compartir información." },
      { icon: "digitization", title: "Software para organismos públicos", desc: "Diseñamos e implantamos aplicaciones para gestionar expedientes, documentos y servicios públicos." },
      { icon: "ai", title: "Desarrollo de herramientas de IA", desc: "Creamos herramientas de inteligencia artificial para trabajar con documentos, analizar información y automatizar tareas." },
    ],
  },
  values: {
    eyebrow: "Colaboración", title: "Cómo trabajamos",
    items: [
      { num: "01", title: "Experiencia en el sector público", desc: "Desarrollamos sistemas legislativos y de gestión documental teniendo en cuenta los procedimientos y la forma de trabajar de los organismos públicos." },
      { num: "02", title: "Desarrollo y mantenimiento", desc: "Seguimos desarrollando el software y damos soporte a su funcionamiento tras la implantación." },
      { num: "03", title: "Protección de datos", desc: "Al diseñar sistemas, tenemos en cuenta la seguridad de los datos y el acceso a la información." },
      { num: "04", title: "Adaptación a tu organización", desc: "Diseñamos los cambios según las necesidades de los usuarios y los sistemas que ya utilizan." },
    ],
  },
  legislator: {
    eyebrow: "Editor de actos jurídicos",
    title: "EAP Legislator",
    lead: "Un editor para organismos públicos que elaboran resoluciones, órdenes y otros actos jurídicos.",
    description: "ITORG desarrolla EAP Legislator para ABC PRO. El programa permite preparar borradores en XML, revisar cambios, firmar electrónicamente y enviar los actos para publicación o supervisión jurídica.",
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
        title: "Firma y envío",
        desc: "Firma los documentos en el editor y envíalos para publicación o supervisión jurídica."
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
        name: "Finanzas Públicas — complemento Besti@",
        desc: "Importa datos XML de Besti@ para resoluciones presupuestarias, modificaciones, previsiones financieras plurianuales e informes de ejecución. Genera tablas legibles para publicación y supervisión de las cámaras regionales de cuentas polacas (RIO).",
        cta: "Descubre el complemento Besti@",
        href: legislatorUrls.finance
      }
    ]
  },
  partner: {
    eyebrow: "Colaboración", title: "Colaboramos con ABC PRO",
    intro: "Colaboramos con ABC PRO Sp. z o.o. en el desarrollo y la implantación de software para la elaboración de actos jurídicos y la gestión documental en la administración pública.",
    note: "Ejemplos de sistemas de ABC PRO:",
    products: [
      { name: "EAP Legislator", desc: "Editor de actos jurídicos en XML con seguimiento de cambios, firma electrónica y envío para publicación." },
      { name: "Baza Aktów Własnych", desc: "Sistema para mantener colecciones propias de actos jurídicos, con búsqueda, índices e integración con una base de datos legislativa." },
      { name: "ABC ANON", desc: "Herramienta para ocultar información seleccionada en archivos PDF, DOCX y documentos escaneados antes de compartirlos." },
      { name: "ABC Kancelaria", desc: "Sistema de gestión documental electrónica para correspondencia, registros y documentos entrantes y salientes, tanto en papel como en formato digital." },
    ],
  },
  orion: {
    eyebrow: "Herramientas de IA", title: "Orion AI",
    lead: "La plataforma de inteligencia artificial de ABC PRO para la administración pública y las empresas.",
    description: "ITORG colabora en el desarrollo de Orion y crea herramientas de IA para trabajar con documentos, analizar información y automatizar tareas.",
    cta: "Descubre la plataforma Orion AI",
  },
  products: {
    title: "Productos",
    intro: "Conoce EAP Legislator, Orion AI y otros sistemas de ABC PRO para la elaboración de actos jurídicos y la gestión documental.",
    cta: "Ver productos",
    details: "Ver detalles",
    back: "Todos los productos",
    developmentTitle: "Legislación e IA",
    partnerTitle: "Otros sistemas de ABC PRO",
    breadcrumb: "Ruta de navegación",
  },

  contact: { eyebrow: "Contacto", title: "Hablemos de tu proyecto", subtitle: "¿Necesitas software de gestión documental, integrar sistemas o una herramienta de IA? Escríbenos o llámanos y cuéntanos qué quieres mejorar." },
  footer: { tagline: "Sistemas legislativos, gestión documental y herramientas de IA.", privacy: "Política de privacidad", cookieSettings: "Configuración de cookies" },
  legal: { ...site.legal, privacyUrl: "/es/privacy/" },
  nav: [
    { label: "Servicios", href: "#uslugi" },
    { label: "Productos", href: "/es/products/" },
    { label: "Quiénes somos", href: "#o-firmie" },
    { label: "Colaboración", href: "#partner" },
    { label: "Contacto", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG — Software para la administración pública", description: "Software para organismos públicos: sistemas legislativos, gestión documental, integraciones e IA. Desarrollamos EAP Legislator para ABC PRO." },
  ui: {
    skip: "Saltar al contenido", home: "Inicio", mainNav: "Navegación principal", footerNav: "Navegación del pie de página", navigation: "Navegación", menu: "Menú",
    languages: "Elegir idioma", language: "Idioma", facts: "La empresa en breve", inBrief: "En breve", founded: "Fundación", owner: "Propietario",
    headquarters: "Sede", specialization: "Especialidad", specializationValue: "Legislación · gestión documental · integración · IA", partner: "Socio", platform: "Servicios",
    partnerCta: "Descubre las soluciones de ABC PRO", writeEmail: "Enviar un correo", address: "Dirección", phone: "Teléfono", email: "Correo electrónico", eDelivery: "Entrega electrónica polaca",
    registration: "Datos registrales", bank: "Cuenta bancaria", rights: "Todos los derechos reservados.", close: "Cerrar",
  },
  cookies, privacy,
};

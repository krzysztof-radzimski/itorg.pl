import { site, type Site } from "../site";
import { cookies, privacy } from "../legal/es";

export const es: Site = {
  brand: { ...site.brand, eyebrow: "Digitalización de la administración pública", tagline: "Soluciones informáticas innovadoras para el sector público." },
  company: { ...site.company, country: "Polonia" },
  hero: {
    eyebrow: "Digitalización de la administración pública", titleLead: "Digitalizamos", titleAccent: "la administración pública",
    subtitle: "Llevamos {years} años desarrollando soluciones avanzadas para la legislación digital y la automatización de procesos en el sector público de Polonia.",
    primaryCta: "Contacta con nosotros", secondaryCta: "Nuestra experiencia", scrollLabel: "Desplazarse hacia abajo",
  },
  stats: [
    { kind: "years", number: "", suffix: "+", label: "Años de experiencia" },
    { kind: "static", number: "100%", suffix: "", label: "Enfoque en el sector público" },
    { kind: "static", number: "24/7", suffix: "", label: "Soporte técnico" },
  ],
  about: {
    eyebrow: "Quiénes somos", title: "Tecnología al servicio de la sociedad",
    lead: "ITORG es la empresa de Krzysztof Radzimski. Desde 2009 diseñamos e implantamos software para organismos e instituciones públicas.",
    paragraphs: [
      "Nos especializamos en la digitalización del proceso legislativo y la automatización de flujos documentales, ámbitos en los que la precisión, el cumplimiento normativo y la fiabilidad son esenciales.",
      "Combinamos una amplia experiencia en el sector público con ingeniería moderna. Nuestra colaboración con ABC PRO Sp. z o.o. nos permite ofrecer herramientas jurídicas probadas e implantaciones integrales de cualquier escala.",
      "También desarrollamos herramientas de inteligencia artificial. Krzysztof Radzimski colabora en el desarrollo de la plataforma Orion de ABC PRO, con soluciones para el trabajo diario con documentos e información.",
    ],
  },
  services: {
    eyebrow: "Qué hacemos", title: "Nuestra experiencia", subtitle: "Apoyo integral a la digitalización: desde la legislación y las integraciones hasta las herramientas de IA.",
    items: [
      { icon: "legislation", title: "Sistemas legislativos", desc: "Plataformas integrales para gestionar actos jurídicos y automatizar los flujos de documentación legislativa en la administración." },
      { icon: "automation", title: "Automatización de procesos", desc: "Optimización de los flujos administrativos con herramientas inteligentes para gestionar expedientes y documentos." },
      { icon: "integration", title: "Integración de sistemas", desc: "Conexión de soluciones informáticas con la infraestructura existente para que los sistemas públicos funcionen de forma coordinada." },
      { icon: "digitization", title: "Servicios públicos digitales", desc: "Implantación de tecnologías innovadoras que mejoran el acceso de la ciudadanía a los servicios y la eficiencia administrativa." },
      { icon: "ai", title: "Desarrollo de herramientas de IA", desc: "Diseño y desarrollo de herramientas de inteligencia artificial para trabajar con documentos, analizar información y automatizar tareas cotidianas." },
    ],
  },
  values: {
    eyebrow: "Por qué ITORG", title: "Qué nos distingue",
    items: [
      { num: "01", title: "Innovación", desc: "Búsqueda constante de soluciones tecnológicas para los retos de la administración moderna." },
      { num: "02", title: "Fiabilidad", desc: "Sistemas estables y de alto rendimiento que respaldan la continuidad de las instituciones." },
      { num: "03", title: "Seguridad", desc: "Altos estándares de protección de datos, acordes con la normativa y las buenas prácticas del sector." },
      { num: "04", title: "Colaboración", desc: "Relaciones a largo plazo basadas en la comprensión del sector público y de sus necesidades reales." },
    ],
  },
  partner: {
    eyebrow: "Colaboración", title: "Colaboramos con ABC PRO",
    intro: "Nuestra colaboración con ABC PRO Sp. z o.o. permite acceder a herramientas jurídicas profesionales e implantaciones integrales para la administración pública.",
    note: "ABC PRO ofrece soluciones dirigidas principalmente a la administración pública y a grandes empresas. Entre sus productos destacan:",
    products: [
      { name: "EAP Legislator", desc: "Editor para elaborar actos jurídicos en XML, realizar un seguimiento de cambios, aplicar firmas electrónicas seguras y enviar los actos para su publicación." },
      { name: "Baza Aktów Własnych", desc: "Sistema para mantener colecciones propias de actos jurídicos, con búsqueda, índices e integración con una base de datos legislativa." },
      { name: "ABC ANON", desc: "Herramienta para anonimizar documentos PDF y DOCX y documentos escaneados, ocultando información conforme a los requisitos legales." },
      { name: "ABC Kancelaria", desc: "Sistema de gestión documental electrónica para correspondencia, registros y documentos entrantes y salientes, tanto en papel como en formato digital." },
    ],
  },
  orion: {
    eyebrow: "Herramientas de IA", title: "Construimos el futuro con Orion AI",
    lead: "Krzysztof Radzimski colabora en el desarrollo de Orion de ABC PRO, una plataforma de IA para la administración pública y las empresas.",
    description: "Desarrollamos herramientas de IA que ayudan a trabajar con documentos, analizar información y automatizar tareas. La colaboración en Orion une estas capacidades con nuestra experiencia en software para el sector público.",
    cta: "Descubre la plataforma Orion AI",
  },
  contact: { eyebrow: "Contacto", title: "Hablemos de tu proyecto", subtitle: "¿Vas a implantar un nuevo sistema o modernizar tu organización? Escríbenos o llámanos para saber cómo podemos ayudarte." },
  footer: { tagline: "Soluciones informáticas y herramientas de IA para la administración pública.", privacy: "Política de privacidad", cookieSettings: "Configuración de cookies" },
  legal: { ...site.legal, privacyUrl: "/es/privacy/" },
  nav: [
    { label: "Quiénes somos", href: "#o-firmie" }, { label: "Servicios", href: "#uslugi" }, { label: "Valores", href: "#wartosci" },
    { label: "Colaboración", href: "#partner" }, { label: "Orion AI", href: "#orion" }, { label: "Contacto", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG — Soluciones informáticas e IA para la administración", description: "ITORG Krzysztof Radzimski: sistemas legislativos, automatización, integraciones y herramientas de IA. Socio de ABC PRO y colaborador de la plataforma Orion AI." },
  ui: {
    skip: "Saltar al contenido", home: "Inicio", mainNav: "Navegación principal", footerNav: "Navegación del pie de página", navigation: "Navegación", menu: "Menú",
    languages: "Elegir idioma", language: "Idioma", facts: "La empresa en breve", inBrief: "En breve", founded: "Fundación", owner: "Propietario",
    headquarters: "Sede", specialization: "Especialidad", specializationValue: "Legislación · gestión documental · integración · IA", partner: "Socio", platform: "Plataforma",
    partnerCta: "Descubre las soluciones de ABC PRO", writeEmail: "Enviar un correo", address: "Dirección", phone: "Teléfono", email: "Correo electrónico", eDelivery: "Entrega electrónica polaca",
    registration: "Datos registrales", bank: "Cuenta bancaria", rights: "Todos los derechos reservados.", close: "Cerrar",
  },
  cookies, privacy,
};

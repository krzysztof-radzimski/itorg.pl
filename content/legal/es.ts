import type { CookieCopy, PrivacyCopy } from "./types";

export const cookies: CookieCopy = {
  title: "Configuración de privacidad",
  intro: "Este sitio utiliza tecnologías necesarias para funcionar y recordar tus preferencias. Actualmente no usamos herramientas de análisis, publicidad ni complementos de redes sociales. Las funciones opcionales requieren tu consentimiento.",
  privacy: "Política de privacidad", always: "Siempre activas", show: "Mostrar descripción de la categoría", hide: "Ocultar descripción de la categoría",
  accept: "Aceptar todas", reject: "Rechazar todas", save: "Guardar selección",
  categories: [
    { key: "necessary", name: "Necesarias", desc: "Recuerdan tus preferencias y ayudan a mantener la seguridad del sitio. No se pueden desactivar en este panel." },
    { key: "analytics", name: "Análisis", desc: "No se utilizan actualmente. Si se incorporan, servirán para analizar el uso del sitio y requerirán tu consentimiento previo." },
    { key: "marketing", name: "Publicidad", desc: "No se utilizan actualmente. Las herramientas para personalizar anuncios o mensajes comerciales solo se activarán con tu consentimiento." },
    { key: "social", name: "Redes sociales", desc: "No se utilizan actualmente. Los complementos y funciones de plataformas sociales externas requerirán tu consentimiento previo." },
  ],
};

export const privacy: PrivacyCopy = {
  title: "Política de privacidad", description: "Política de privacidad e información sobre cookies del sitio de ITORG Krzysztof Radzimski.", document: "Documento", updated: "Última actualización",
  intro: "Esta política describe el tratamiento de datos y el uso de cookies y tecnologías similares en itorg.pl. El sitio informa sobre nuestros servicios y no requiere una cuenta ni iniciar sesión.",
  sections: [
    { id: "controller", title: "1. Responsable del tratamiento", paragraphs: ["El responsable del tratamiento es la empresa indicada a continuación. Para consultas de privacidad, puedes escribir, llamar o utilizar el servicio polaco de entrega electrónica."] },
    { id: "data", title: "2. Datos que tratamos", paragraphs: ["El sitio no contiene formularios ni herramientas que recopilen automáticamente datos con fines comerciales."], items: ["Contacto: al escribirnos, llamarnos o usar la entrega electrónica, tratamos los datos que facilitas, como nombre, correo, teléfono y mensaje, para responder y atender tu consulta.", "Datos técnicos: nuestro proveedor de alojamiento, Cloudflare, trata registros necesarios para ofrecer el sitio y protegerlo, como dirección IP, navegador, sistema operativo, hora de la solicitud y dirección de referencia."] },
    { id: "basis", title: "3. Bases jurídicas", paragraphs: [], items: ["Artículo 6.1.b del RGPD: medidas precontractuales solicitadas por ti y atención de consultas comerciales.", "Artículo 6.1.f del RGPD: interés legítimo en el funcionamiento y la seguridad del sitio, la comunicación y la determinación o defensa de reclamaciones.", "Artículo 6.1.a del RGPD: consentimiento para cookies opcionales, si se incorporan en el futuro.", "Artículo 6.1.c del RGPD: obligaciones legales, incluidas las fiscales y contables derivadas de relaciones comerciales."] },
    { id: "cookies", title: "4. Cookies y tecnologías similares", paragraphs: ["El sitio carga recursos de su propio dominio. Actualmente no utilizamos herramientas propias de análisis o publicidad ni complementos sociales. El idioma depende de la dirección de la página; no se guarda una cookie adicional para este fin."] },
    { id: "recipients", title: "5. Destinatarios de los datos", paragraphs: ["Podemos confiar datos a proveedores que permiten el funcionamiento del sitio y la gestión de la correspondencia. Solo se comunicarán a autoridades públicas cuando lo exija la ley."], items: ["Cloudflare, Inc.: alojamiento y red de distribución de contenidos del sitio.", "Proveedor de correo y operador de entrega electrónica: para gestionar la correspondencia."] },
    { id: "transfers", title: "6. Transferencias fuera del EEE", paragraphs: ["Algunos proveedores, como Cloudflare, tienen su sede fuera del Espacio Económico Europeo, en Estados Unidos. Las transferencias se basan en las cláusulas contractuales tipo aprobadas por la Comisión Europea y, cuando procede, en el Data Privacy Framework."] },
    { id: "retention", title: "7. Plazos de conservación", paragraphs: ["Conservamos la correspondencia y los datos de contacto durante la atención del asunto y los plazos de prescripción aplicables. La documentación sujeta a conservación legal se guarda durante el periodo exigido. El proveedor de alojamiento conserva los registros técnicos según su política. Tu decisión sobre las cookies permanece en el almacenamiento local hasta que la cambies o borres los datos del navegador."] },
    { id: "rights", title: "8. Tus derechos", paragraphs: ["En los términos previstos por la ley, tienes los siguientes derechos:"], items: ["Acceder a tus datos y recibir una copia.", "Rectificar, suprimir o limitar el tratamiento.", "Oponerte al tratamiento basado en el interés legítimo.", "Solicitar la portabilidad de los datos.", "Retirar el consentimiento en cualquier momento, sin afectar a la licitud del tratamiento anterior.", "Presentar una reclamación ante el presidente de la autoridad polaca de protección de datos (UODO)."] },
    { id: "changes", title: "9. Cambios en la política", paragraphs: ["La política puede actualizarse con el desarrollo del sitio o los cambios normativos. La versión vigente está disponible en esta dirección junto con su fecha de actualización."] },
    { id: "contact", title: "10. Contacto", paragraphs: ["Para consultas sobre privacidad y datos personales, utiliza los datos de contacto que figuran a continuación."] },
  ],
  tableCaption: "Tecnologías utilizadas en este sitio", tableHeaders: ["Nombre / tecnología", "Finalidad", "Categoría y base"],
  tableRows: [
    { name: "itorg-cookie-consent-v1 (almacenamiento local del navegador)", purpose: "Recordar tu decisión sobre las cookies.", basis: "Necesarias · interés legítimo" },
    { name: "Cookies técnicas de Cloudflare, como protección contra bots", purpose: "Seguridad y correcto funcionamiento del sitio.", basis: "Necesarias · interés legítimo" },
    { name: "Análisis, publicidad y redes sociales", purpose: "No se utilizan actualmente; requieren consentimiento previo a su activación.", basis: "Opcionales · consentimiento" },
  ],
  settings: "Las categorías necesarias permiten el funcionamiento del sitio. Puedes cambiar las preferencias opcionales en el panel o borrar los datos del navegador en cualquier momento.",
  cloudflare: "Política de privacidad de Cloudflare", authority: "Autoridad polaca de protección de datos",
};

import { site, type Site } from "../site";
import { cookies, privacy } from "../legal/fr";

export const fr: Site = {
  brand: { ...site.brand, eyebrow: "Transformation numérique du secteur public", tagline: "Des solutions informatiques innovantes pour le secteur public." },
  company: { ...site.company, country: "Pologne" },
  hero: {
    eyebrow: "Transformation numérique du secteur public", titleLead: "Nous accompagnons", titleAccent: "la transformation numérique des administrations",
    subtitle: "Depuis {years} ans, nous développons des solutions avancées pour la législation numérique et l’automatisation des processus dans le secteur public polonais.",
    primaryCta: "Nous contacter", secondaryCta: "Nos compétences", scrollLabel: "Faire défiler vers le bas",
  },
  stats: [
    { kind: "years", number: "", suffix: "+", label: "Années d’expérience" },
    { kind: "static", number: "100%", suffix: "", label: "Au service du secteur public" },
    { kind: "static", number: "24/7", suffix: "", label: "Assistance technique" },
  ],
  about: {
    eyebrow: "À propos", title: "La technologie au service de la société",
    lead: "ITORG est l’entreprise de Krzysztof Radzimski. Depuis 2009, nous concevons et déployons des logiciels pour les administrations et les établissements publics.",
    paragraphs: [
      "Nous sommes spécialisés dans la dématérialisation du processus législatif et l’automatisation des circuits documentaires, des domaines où la précision, la conformité juridique et la fiabilité sont essentielles.",
      "Nous associons une longue expérience du secteur public à une ingénierie moderne. Notre partenariat avec ABC PRO Sp. z o.o. permet de proposer des outils juridiques éprouvés et des déploiements complets à toute échelle.",
      "Nous développons également des outils d’intelligence artificielle. Krzysztof Radzimski participe au développement de la plateforme Orion d’ABC PRO, avec des solutions pour le travail quotidien sur les documents et l’information.",
    ],
  },
  services: {
    eyebrow: "Nos activités", title: "Nos compétences", subtitle: "Un accompagnement complet de la transformation numérique : législation, intégrations et outils d’IA.",
    items: [
      { icon: "legislation", title: "Systèmes législatifs", desc: "Des plateformes complètes de gestion des actes juridiques et d’automatisation des circuits documentaires législatifs." },
      { icon: "automation", title: "Automatisation des processus", desc: "L’optimisation des procédures administratives grâce à des outils intelligents de gestion des dossiers et des documents." },
      { icon: "integration", title: "Intégration des systèmes", desc: "La connexion des solutions informatiques aux infrastructures existantes pour assurer la cohérence des systèmes publics." },
      { icon: "digitization", title: "Services publics numériques", desc: "Le déploiement de technologies innovantes pour rendre les services plus accessibles aux citoyens et les administrations plus efficaces." },
      { icon: "ai", title: "Développement d’outils d’IA", desc: "La conception et le développement d’outils d’intelligence artificielle pour les documents, l’analyse d’informations et l’automatisation des tâches quotidiennes." },
    ],
  },
  values: {
    eyebrow: "Pourquoi ITORG", title: "Ce qui nous distingue",
    items: [
      { num: "01", title: "Innovation", desc: "La recherche continue de solutions technologiques adaptées aux défis des administrations modernes." },
      { num: "02", title: "Fiabilité", desc: "Des systèmes stables et performants qui soutiennent la continuité des établissements publics." },
      { num: "03", title: "Sécurité", desc: "Des normes élevées de protection des données, conformes aux obligations légales et aux bonnes pratiques du secteur." },
      { num: "04", title: "Partenariat", desc: "Une collaboration durable fondée sur la compréhension du secteur public et de ses besoins concrets." },
    ],
  },
  partner: {
    eyebrow: "Partenariat", title: "Notre collaboration avec ABC PRO",
    intro: "Notre partenariat avec ABC PRO Sp. z o.o. donne accès à des outils juridiques professionnels et à des déploiements complets au service des administrations publiques.",
    note: "ABC PRO propose des solutions destinées principalement aux administrations et aux grandes entreprises. Parmi ses principaux produits :",
    products: [
      { name: "EAP Legislator", desc: "Un éditeur pour rédiger des actes juridiques au format XML, suivre les modifications, apposer une signature électronique sécurisée et transmettre les actes pour publication." },
      { name: "Baza Aktów Własnych", desc: "Un système de gestion des collections d’actes juridiques d’une organisation, avec recherche, index et intégration à une base législative." },
      { name: "ABC ANON", desc: "Un outil d’anonymisation des fichiers PDF, DOCX et documents numérisés par occultation des informations conformément aux exigences légales." },
      { name: "ABC Kancelaria", desc: "Un système de gestion électronique des documents pour la correspondance, les registres et les documents entrants ou sortants, sur papier et au format numérique." },
    ],
  },
  orion: {
    eyebrow: "Outils d’IA", title: "Construire l’avenir avec Orion AI",
    lead: "Krzysztof Radzimski participe au développement d’Orion d’ABC PRO, une plateforme d’IA pour les administrations et les entreprises.",
    description: "Nous développons des outils d’IA pour travailler sur les documents, analyser l’information et automatiser les tâches. Notre contribution à Orion associe ces compétences à notre expérience des logiciels pour le secteur public.",
    cta: "Découvrir la plateforme Orion AI",
  },
  contact: { eyebrow: "Contact", title: "Parlons de votre projet", subtitle: "Vous déployez un nouveau système ou modernisez votre administration ? Écrivez-nous ou appelez-nous pour découvrir comment nous pouvons vous aider." },
  footer: { tagline: "Des solutions informatiques et des outils d’IA pour les administrations publiques.", privacy: "Politique de confidentialité", cookieSettings: "Paramètres des cookies" },
  legal: { ...site.legal, privacyUrl: "/fr/privacy/" },
  nav: [
    { label: "À propos", href: "#o-firmie" }, { label: "Services", href: "#uslugi" }, { label: "Valeurs", href: "#wartosci" },
    { label: "Partenaire", href: "#partner" }, { label: "Orion AI", href: "#orion" }, { label: "Contact", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG — Solutions informatiques et IA pour le secteur public", description: "ITORG Krzysztof Radzimski : systèmes législatifs, automatisation, intégrations et outils d’IA. Partenaire d’ABC PRO et contributeur à la plateforme Orion AI." },
  ui: {
    skip: "Aller au contenu", home: "Accueil", mainNav: "Navigation principale", footerNav: "Navigation du pied de page", navigation: "Navigation", menu: "Menu",
    languages: "Choisir une langue", language: "Langue", facts: "L’entreprise en bref", inBrief: "En bref", founded: "Création", owner: "Propriétaire",
    headquarters: "Siège", specialization: "Expertise", specializationValue: "Législation · gestion documentaire · intégration · IA", partner: "Partenaire", platform: "Plateforme",
    partnerCta: "Découvrir les solutions d’ABC PRO", writeEmail: "Envoyer un e-mail", address: "Adresse", phone: "Téléphone", email: "E-mail", eDelivery: "Envoi électronique polonais",
    registration: "Informations d’immatriculation", bank: "Compte bancaire", rights: "Tous droits réservés.", close: "Fermer",
  },
  cookies, privacy,
};

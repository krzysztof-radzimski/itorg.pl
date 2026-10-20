import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/fr";

export const fr: Site = {
  brand: { ...site.brand, eyebrow: "Transformation numérique du secteur public", tagline: "Des logiciels pour les administrations publiques." },
  company: { ...site.company, country: "Pologne" },
  hero: {
    eyebrow: "Législation · gestion documentaire · IA", titleLead: "Des solutions bien pensées", titleAccent: "pour les administrations publiques et les entreprises",
    subtitle: "Depuis {years} ans, nous développons des logiciels adaptés aux besoins des collectivités territoriales, des administrations de l’État et d’autres institutions. Nous optimisons le travail documentaire, intégrons les systèmes et automatisons les processus.",
    primaryCta: "Nous contacter", secondaryCta: "Voir nos services", scrollLabel: "Faire défiler vers le bas",
  },
  stats: [
    { kind: "years", number: "", suffix: "", label: "Années d’activité" },
    { kind: "static", number: "XML", suffix: "", label: "Documents juridiques" },
    { kind: "static", number: "IA", suffix: "", label: "Travail documentaire" },
  ],
  about: {
    eyebrow: "À propos", title: "Développer et déployer vos logiciels",
    lead: "Depuis 2009, ITORG conçoit, développe et déploie des logiciels pour les collectivités territoriales, les administrations de l’État et d’autres institutions en Pologne.",
    paragraphs: [
      "Nous accompagnons les procédures d’élaboration des actes juridiques, le traitement des dossiers et la gestion électronique des documents.",
      "Nous développons EAP Legislator pour ABC PRO, un éditeur de délibérations, de décisions et d’autres actes juridiques. Nous participons également au déploiement des systèmes d’ABC PRO.",
      "Nous développons des outils utilisant l’intelligence artificielle pour le traitement documentaire et l’analyse d’informations. Nous participons au développement de la plateforme Orion d’ABC PRO.",
    ],
  },
  services: {
    eyebrow: "Services", title: "Nos prestations", subtitle: "Nous concevons, développons et intégrons des systèmes informatiques au service des missions publiques.",
    items: [
      { icon: "legislation", title: "Systèmes législatifs", desc: "Nous développons des outils pour rédiger et signer les actes juridiques, puis les transmettre pour publication officielle et aux autorités de contrôle." },
      { icon: "automation", title: "Automatisation des processus", desc: "Nous automatisons les tâches répétitives liées au traitement des dossiers et à la gestion documentaire." },
      { icon: "integration", title: "Intégration de systèmes", desc: "Nous intégrons les systèmes informatiques afin de permettre l’échange de données entre applications." },
      { icon: "digitization", title: "Logiciels pour les administrations", desc: "Nous concevons et déployons des applications pour le traitement des dossiers, la gestion documentaire et la fourniture de services publics." },
      { icon: "ai", title: "Développement d’outils d’IA", desc: "Nous développons des solutions utilisant l’intelligence artificielle pour le traitement documentaire, l’analyse d’informations et l’automatisation des processus." },
    ],
  },
  values: {
    eyebrow: "Collaboration", title: "Notre conduite des projets",
    items: [
      { num: "01", title: "Connaissance des procédures administratives", desc: "Nous concevons nos solutions en tenant compte des procédures d’élaboration des actes juridiques, du traitement des dossiers et des règles de gestion documentaire." },
      { num: "02", title: "Développement et maintenance", desc: "Nous assurons le développement et la maintenance des logiciels après leur déploiement, en tenant compte de l’évolution des besoins des utilisateurs." },
      { num: "03", title: "Protection des données", desc: "Nous prenons en compte la sécurité des données et l’accès à l’information dès la conception des systèmes." },
      { num: "04", title: "Adaptation aux processus de l’institution", desc: "Nous adaptons nos solutions à l’organisation du travail de l’institution, aux besoins des utilisateurs et à l’environnement informatique existant." },
    ],
  },
  legislator: {
    eyebrow: "Éditeur d’actes juridiques",
    title: "EAP Legislator",
    lead: "Un éditeur destiné aux collectivités territoriales et aux administrations de l’État pour la rédaction de délibérations, d’arrêtés et d’autres actes juridiques.",
    description: "ITORG développe EAP Legislator pour ABC PRO. Le système accompagne la rédaction de projets d’actes juridiques en XML, la concertation, la signature électronique et la transmission pour publication officielle et aux autorités de contrôle.",
    features: [
      {
        title: "Rédaction en XML",
        desc: "Les modèles et la conversion en XML facilitent la préparation des actes en préservant leur structure."
      },
      {
        title: "Commentaires et historique",
        desc: "Les commentaires, l’historique des modifications et les rapports permettent de consulter les propositions et leur traitement."
      },
      {
        title: "Signature et transmission des actes",
        desc: "Signature électronique dans l’éditeur et transmission des actes juridiques pour publication officielle et aux autorités de contrôle."
      }
    ],
    editions: [
      {
        name: "EAP Legislator",
        desc: "Les éditions Standard, Premium et Legalis s’adressent aux administrations et aux établissements qui préparent des actes juridiques. Les fonctions disponibles dépendent de l’édition choisie.",
        cta: "Découvrir EAP Legislator",
        href: legislatorUrls.editor
      },
      {
        name: "Legislator pour l’administration centrale",
        desc: "Une version pour les ministères et les administrations centrales, fondée sur le modèle du Centre polonais de législation gouvernementale (RCL), pour les actes destinés au Dziennik Ustaw et au Monitor Polski.",
        cta: "Découvrir Legislator GOV",
        href: legislatorUrls.government
      },
      {
        name: "Finances publiques (module Besti@)",
        desc: "Importe les données XML de Besti@ pour les délibérations budgétaires et leurs modifications, les prévisions financières pluriannuelles et les rapports. Génère des tableaux pour les documents destinés aux journaux officiels des voïvodies et aux chambres régionales des comptes (RIO) en Pologne.",
        cta: "Découvrir le module Besti@",
        href: legislatorUrls.finance
      }
    ]
  },
  partner: {
    eyebrow: "Partenariat", title: "Notre collaboration avec ABC PRO",
    intro: "Nous collaborons avec ABC PRO Sp. z o.o. au développement et au déploiement de logiciels pour l’élaboration des actes juridiques et la gestion électronique des documents dans l’administration publique.",
    note: "Exemples de systèmes d’ABC PRO :",
    products: [
      { name: "EAP Legislator", desc: "Un éditeur d’actes juridiques en XML avec suivi des modifications, signature électronique et transmission pour publication." },
      { name: "Baza Aktów Własnych", desc: "Un système de gestion et de consultation des collections institutionnelles de délibérations, d’arrêtés et de règlements internes, avec recherche, index et intégration à une base de données législative." },
      { name: "ABC ANON", desc: "Un outil d’anonymisation des documents et d’occultation de contenus sélectionnés avant leur communication. Prend en charge les fichiers PDF et DOCX ainsi que les documents numérisés." },
      { name: "ABC Kancelaria", desc: "Un système de gestion électronique des documents pour la correspondance, les registres et les documents entrants ou sortants, sur papier et au format numérique." },
    ],
  },
  orion: {
    eyebrow: "Outils d’IA", title: "Orion AI",
    lead: "La plateforme d’intelligence artificielle d’ABC PRO pour les administrations et les entreprises.",
    description: "ITORG participe au développement de la plateforme Orion et conçoit des outils d’IA pour le traitement documentaire, l’analyse d’informations et l’automatisation des processus.",
    cta: "Découvrir la plateforme Orion AI",
  },
  products: {
    title: "Produits",
    intro: "EAP Legislator, Orion AI et les autres solutions d’ABC PRO accompagnent l’élaboration des actes juridiques, la gestion documentaire et l’analyse d’informations.",
    cta: "Voir les produits",
    details: "Voir les détails",
    back: "Tous les produits",
    developmentTitle: "Législation et IA",
    partnerTitle: "Autres systèmes d’ABC PRO",
    breadcrumb: "Fil d’Ariane",
  },

  contact: { eyebrow: "Contact", title: "Parlons de votre projet", subtitle: "Contactez-nous pour étudier les besoins de votre institution en matière de logiciels, d’intégration de systèmes et d’utilisation de l’intelligence artificielle." },
  footer: { tagline: "Élaboration numérique des actes juridiques, gestion documentaire et solutions d’IA.", privacy: "Politique de confidentialité", cookieSettings: "Paramètres des cookies" },
  legal: { ...site.legal, privacyUrl: "/fr/privacy/" },
  nav: [
    { label: "Services", href: "#uslugi" },
    { label: "Produits", href: "/fr/products/" },
    { label: "À propos", href: "#o-firmie" },
    { label: "Partenariat", href: "#partner" },
    { label: "Contact", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG: Logiciels pour les administrations publiques", description: "Logiciels pour les collectivités territoriales, les administrations de l’État et d’autres institutions : actes juridiques, gestion documentaire, intégration de systèmes et IA." },
  ui: {
    skip: "Aller au contenu", home: "Accueil", mainNav: "Navigation principale", footerNav: "Navigation du pied de page", navigation: "Navigation", menu: "Menu",
    languages: "Choisir une langue", language: "Langue", facts: "L’entreprise en bref", inBrief: "En bref", founded: "Création", owner: "Propriétaire",
    headquarters: "Siège", specialization: "Expertise", specializationValue: "Actes juridiques · gestion documentaire · intégration de systèmes · IA", partner: "Partenaire", platform: "Services",
    partnerCta: "Découvrir les solutions d’ABC PRO", writeEmail: "Envoyer un e-mail", address: "Adresse", phone: "Téléphone", email: "E-mail", eDelivery: "Envoi électronique polonais",
    registration: "Informations d’immatriculation", bank: "Compte bancaire", rights: "Tous droits réservés.", close: "Fermer",
  },
  cookies, privacy,
};

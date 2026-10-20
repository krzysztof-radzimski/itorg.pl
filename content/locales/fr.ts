import { site, legislatorUrls, type Site } from "../site";
import { cookies, privacy } from "../legal/fr";

export const fr: Site = {
  brand: { ...site.brand, eyebrow: "Transformation numérique du secteur public", tagline: "Des logiciels pour les administrations publiques." },
  company: { ...site.company, country: "Pologne" },
  hero: {
    eyebrow: "Législation · gestion documentaire · IA", titleLead: "Des solutions bien pensées", titleAccent: "pour les administrations publiques et les entreprises",
    subtitle: "Depuis {years} ans, nous développons des logiciels pour rédiger des actes juridiques, gérer les documents et automatiser le travail des administrations polonaises.",
    primaryCta: "Nous contacter", secondaryCta: "Voir nos services", scrollLabel: "Faire défiler vers le bas",
  },
  stats: [
    { kind: "years", number: "", suffix: "", label: "Années d’activité" },
    { kind: "static", number: "XML", suffix: "", label: "Documents juridiques" },
    { kind: "static", number: "IA", suffix: "", label: "Travail documentaire" },
  ],
  about: {
    eyebrow: "À propos", title: "Développer et déployer vos logiciels",
    lead: "Depuis 2009, ITORG conçoit, développe et déploie des logiciels pour les administrations et les établissements publics en Pologne.",
    paragraphs: [
      "Nous aidons les administrations à préparer des actes juridiques, à traiter les dossiers et à gérer les circuits documentaires électroniques.",
      "Nous développons EAP Legislator pour ABC PRO, un éditeur de délibérations, de décisions et d’autres actes juridiques. Nous participons également au déploiement des systèmes d’ABC PRO.",
      "Nous créons des outils d’intelligence artificielle pour travailler sur les documents et analyser l’information. Nous participons au développement de la plateforme Orion d’ABC PRO.",
    ],
  },
  services: {
    eyebrow: "Services", title: "Comment nous pouvons vous aider", subtitle: "Nous concevons, développons et connectons des systèmes pour les administrations publiques.",
    items: [
      { icon: "legislation", title: "Systèmes législatifs", desc: "Nous développons des outils pour rédiger, signer et transmettre des actes juridiques." },
      { icon: "automation", title: "Automatisation des processus", desc: "Nous automatisons les tâches répétitives du traitement des dossiers et de la gestion documentaire." },
      { icon: "integration", title: "Intégration des systèmes", desc: "Nous connectons les systèmes pour leur permettre d’échanger des données et de partager des informations." },
      { icon: "digitization", title: "Logiciels pour les administrations", desc: "Nous concevons et déployons des applications pour gérer les dossiers, les documents et les services publics." },
      { icon: "ai", title: "Développement d’outils d’IA", desc: "Nous créons des outils d’intelligence artificielle pour travailler sur les documents, analyser l’information et automatiser des tâches." },
    ],
  },
  values: {
    eyebrow: "Collaboration", title: "Notre façon de travailler",
    items: [
      { num: "01", title: "L’expérience du secteur public", desc: "Nous développons des systèmes législatifs et documentaires en tenant compte des procédures et des pratiques des administrations." },
      { num: "02", title: "Développement et maintenance", desc: "Nous faisons évoluer les logiciels et accompagnons leur fonctionnement après le déploiement." },
      { num: "03", title: "Protection des données", desc: "Nous prenons en compte la sécurité des données et l’accès à l’information dès la conception des systèmes." },
      { num: "04", title: "Des outils adaptés à vos services", desc: "Nous concevons les évolutions en fonction des besoins des utilisateurs et des systèmes déjà en place." },
    ],
  },
  legislator: {
    eyebrow: "Éditeur d’actes juridiques",
    title: "EAP Legislator",
    lead: "Un éditeur pour les administrations qui préparent des délibérations, des décisions et d’autres actes juridiques.",
    description: "ITORG développe EAP Legislator pour ABC PRO. Le logiciel accompagne la rédaction en XML, la révision, la signature électronique et la transmission pour publication ou contrôle de légalité.",
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
        title: "Signature et transmission",
        desc: "Signez les documents dans l’éditeur et transmettez-les pour publication ou contrôle de légalité."
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
        name: "Finances publiques — module Besti@",
        desc: "Importe les données XML de Besti@ pour les délibérations budgétaires, leurs modifications, les prévisions financières pluriannuelles et les rapports d’exécution. Il produit des tableaux lisibles pour la publication et le contrôle financier régional polonais (RIO).",
        cta: "Découvrir le module Besti@",
        href: legislatorUrls.finance
      }
    ]
  },
  partner: {
    eyebrow: "Partenariat", title: "Notre collaboration avec ABC PRO",
    intro: "Nous collaborons avec ABC PRO Sp. z o.o. au développement et au déploiement de logiciels de rédaction juridique et de gestion documentaire pour les administrations publiques.",
    note: "Exemples de systèmes d’ABC PRO :",
    products: [
      { name: "EAP Legislator", desc: "Un éditeur d’actes juridiques en XML avec suivi des modifications, signature électronique et transmission pour publication." },
      { name: "Baza Aktów Własnych", desc: "Un système de gestion des collections d’actes juridiques d’une organisation, avec recherche, index et intégration à une base législative." },
      { name: "ABC ANON", desc: "Un outil pour masquer des informations dans les fichiers PDF, DOCX et les documents numérisés avant leur diffusion." },
      { name: "ABC Kancelaria", desc: "Un système de gestion électronique des documents pour la correspondance, les registres et les documents entrants ou sortants, sur papier et au format numérique." },
    ],
  },
  orion: {
    eyebrow: "Outils d’IA", title: "Orion AI",
    lead: "La plateforme d’intelligence artificielle d’ABC PRO pour les administrations et les entreprises.",
    description: "ITORG participe au développement d’Orion et crée des outils d’IA pour travailler sur les documents, analyser l’information et automatiser des tâches.",
    cta: "Découvrir la plateforme Orion AI",
  },
  products: {
    title: "Produits",
    intro: "Découvrez EAP Legislator, Orion AI et les autres systèmes d’ABC PRO pour la rédaction juridique et la gestion documentaire.",
    cta: "Voir les produits",
    details: "Voir les détails",
    back: "Tous les produits",
    developmentTitle: "Législation et IA",
    partnerTitle: "Autres systèmes d’ABC PRO",
    breadcrumb: "Fil d’Ariane",
  },

  contact: { eyebrow: "Contact", title: "Parlons de votre projet", subtitle: "Besoin d’un logiciel de gestion documentaire, de connecter vos systèmes ou d’un outil d’IA ? Écrivez-nous ou appelez-nous et décrivez ce que vous souhaitez améliorer." },
  footer: { tagline: "Systèmes législatifs, gestion documentaire et outils d’IA.", privacy: "Politique de confidentialité", cookieSettings: "Paramètres des cookies" },
  legal: { ...site.legal, privacyUrl: "/fr/privacy/" },
  nav: [
    { label: "Services", href: "#uslugi" },
    { label: "Produits", href: "/fr/products/" },
    { label: "À propos", href: "#o-firmie" },
    { label: "Partenariat", href: "#partner" },
    { label: "Contact", href: "#kontakt" },
  ],
  seo: { ...site.seo, title: "ITORG — Logiciels pour les administrations publiques", description: "Logiciels pour les administrations : rédaction juridique, documents, intégrations et IA. Nous développons EAP Legislator pour ABC PRO." },
  ui: {
    skip: "Aller au contenu", home: "Accueil", mainNav: "Navigation principale", footerNav: "Navigation du pied de page", navigation: "Navigation", menu: "Menu",
    languages: "Choisir une langue", language: "Langue", facts: "L’entreprise en bref", inBrief: "En bref", founded: "Création", owner: "Propriétaire",
    headquarters: "Siège", specialization: "Expertise", specializationValue: "Législation · gestion documentaire · intégration · IA", partner: "Partenaire", platform: "Services",
    partnerCta: "Découvrir les solutions d’ABC PRO", writeEmail: "Envoyer un e-mail", address: "Adresse", phone: "Téléphone", email: "E-mail", eDelivery: "Envoi électronique polonais",
    registration: "Informations d’immatriculation", bank: "Compte bancaire", rights: "Tous droits réservés.", close: "Fermer",
  },
  cookies, privacy,
};

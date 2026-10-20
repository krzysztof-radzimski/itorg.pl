import type { CookieCopy, PrivacyCopy } from "./types";

export const cookies: CookieCopy = {
  title: "Paramètres de confidentialité",
  intro: "Ce site utilise des technologies nécessaires à son fonctionnement et mémorise vos préférences. Nous n’utilisons actuellement aucun outil d’analyse ou de publicité, ni de module de réseau social. Les fonctions facultatives nécessitent votre consentement.",
  privacy: "Politique de confidentialité", always: "Toujours actifs", show: "Afficher la description de la catégorie", hide: "Masquer la description de la catégorie",
  accept: "Tout accepter", reject: "Tout refuser", save: "Enregistrer le choix",
  categories: [
    { key: "necessary", name: "Nécessaires", desc: "Ces technologies mémorisent vos préférences et contribuent à la sécurité du site. Elles ne peuvent pas être désactivées dans ce panneau." },
    { key: "analytics", name: "Analyse", desc: "Non utilisés actuellement. S’ils sont introduits, ils serviront à analyser l’utilisation du site et nécessiteront votre consentement préalable." },
    { key: "marketing", name: "Publicité", desc: "Non utilisés actuellement. Les outils de personnalisation publicitaire ou commerciale ne seront activés qu’avec votre consentement." },
    { key: "social", name: "Réseaux sociaux", desc: "Non utilisés actuellement. Les modules et fonctions de plateformes sociales externes nécessiteront votre consentement préalable." },
  ],
};

export const privacy: PrivacyCopy = {
  title: "Politique de confidentialité", description: "Politique de confidentialité et informations sur les cookies du site ITORG Krzysztof Radzimski.", document: "Document", updated: "Dernière mise à jour",
  intro: "Cette politique décrit le traitement des données ainsi que l’utilisation des cookies et technologies similaires sur itorg.pl. Le site présente nos services et ne nécessite ni compte ni connexion.",
  sections: [
    { id: "controller", title: "1. Responsable du traitement", paragraphs: ["Le responsable du traitement est l’entreprise indiquée ci-dessous. Pour toute question de confidentialité, contactez-nous par e-mail, téléphone ou via le service polonais d’envoi électronique."] },
    { id: "data", title: "2. Données traitées", paragraphs: ["Le site ne contient ni formulaire ni outil collectant automatiquement des données à des fins commerciales."], items: ["Contact : lorsque vous écrivez, appelez ou utilisez l’envoi électronique, nous traitons les informations communiquées, telles que nom, e-mail, téléphone et message, afin de répondre à votre demande.", "Données techniques : notre hébergeur Cloudflare traite les journaux nécessaires à la diffusion et à la sécurité du site : adresse IP, navigateur, système d’exploitation, heure de la requête et adresse de provenance."] },
    { id: "basis", title: "3. Bases juridiques", paragraphs: [], items: ["Article 6, paragraphe 1, point b du RGPD : mesures précontractuelles prises à votre demande et traitement des demandes commerciales.", "Article 6, paragraphe 1, point f du RGPD : intérêts légitimes liés au fonctionnement et à la sécurité du site, à la communication et à la constatation ou à l’exercice de droits en justice.", "Article 6, paragraphe 1, point a du RGPD : consentement aux cookies facultatifs, s’ils sont introduits à l’avenir.", "Article 6, paragraphe 1, point c du RGPD : obligations légales, notamment fiscales et comptables, liées aux relations commerciales."] },
    { id: "cookies", title: "4. Cookies et technologies similaires", paragraphs: ["Le site charge ses ressources depuis son propre domaine. Nous n’utilisons actuellement ni outils propres d’analyse ou de publicité, ni modules sociaux. La langue est déterminée par l’adresse de la page ; aucun cookie supplémentaire n’est enregistré à cette fin."] },
    { id: "recipients", title: "5. Destinataires des données", paragraphs: ["Des données peuvent être confiées aux prestataires qui assurent le fonctionnement du site et la correspondance. Leur transmission aux autorités publiques intervient uniquement lorsque la loi le prévoit."], items: ["Cloudflare, Inc. : hébergement et réseau de diffusion de contenu du site.", "Le fournisseur de messagerie et l’opérateur d’envoi électronique : pour la gestion de la correspondance."] },
    { id: "transfers", title: "6. Transferts hors EEE", paragraphs: ["Certains prestataires, notamment Cloudflare, sont établis hors de l’Espace économique européen, aux États-Unis. Les transferts reposent sur les clauses contractuelles types approuvées par la Commission européenne et, le cas échéant, sur le Data Privacy Framework."] },
    { id: "retention", title: "7. Durée de conservation", paragraphs: ["Nous conservons la correspondance et les coordonnées pendant le traitement du dossier et les délais de prescription applicables. Les documents soumis à une obligation légale sont conservés pour la durée requise. L’hébergeur conserve les journaux techniques selon sa politique. Votre choix concernant les cookies reste dans le stockage local jusqu’à sa modification ou à l’effacement des données du navigateur."] },
    { id: "rights", title: "8. Vos droits", paragraphs: ["Dans les conditions prévues par la loi, vous disposez des droits suivants :"], items: ["Accéder à vos données et en obtenir une copie.", "Faire rectifier ou effacer les données, ou limiter leur traitement.", "Vous opposer au traitement fondé sur l’intérêt légitime.", "Demander la portabilité des données.", "Retirer votre consentement à tout moment, sans remettre en cause la licéité du traitement antérieur.", "Déposer une réclamation auprès du président de l’autorité polonaise de protection des données (UODO)."] },
    { id: "changes", title: "9. Modifications de la politique", paragraphs: ["Cette politique peut évoluer avec le site ou la législation. La version en vigueur est disponible à cette adresse, accompagnée de sa date de mise à jour."] },
    { id: "contact", title: "10. Contact", paragraphs: ["Pour toute question relative à la vie privée et aux données personnelles, utilisez les coordonnées ci-dessous."] },
  ],
  tableCaption: "Technologies utilisées sur ce site", tableHeaders: ["Nom / technologie", "Finalité", "Catégorie et base"],
  tableRows: [
    { name: "itorg-cookie-consent-v1 (stockage local du navigateur)", purpose: "Mémoriser votre choix concernant les cookies.", basis: "Nécessaires · intérêt légitime" },
    { name: "Cookies techniques Cloudflare, notamment contre les robots", purpose: "Sécurité et bonne diffusion du site.", basis: "Nécessaires · intérêt légitime" },
    { name: "Analyse, publicité et réseaux sociaux", purpose: "Non utilisés actuellement ; consentement préalable requis avant activation.", basis: "Facultatifs · consentement" },
  ],
  settings: "Les catégories nécessaires permettent au site de fonctionner. Vous pouvez modifier les préférences facultatives dans le panneau ou effacer les données de votre navigateur à tout moment.",
  cloudflare: "Politique de confidentialité de Cloudflare", authority: "Autorité polonaise de protection des données",
};

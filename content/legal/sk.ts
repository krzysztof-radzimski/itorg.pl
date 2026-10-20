import type { CookieCopy, PrivacyCopy } from "./types";

export const cookies: CookieCopy = {
  title: "Nastavenia súkromia",
  intro: "Web používa nevyhnutné technológie na svoju prevádzku a ukladá vaše nastavenia. V súčasnosti nepoužívame analytické ani reklamné nástroje alebo doplnky sociálnych sietí. Voliteľné funkcie vyžadujú váš súhlas.",
  privacy: "Zásady ochrany osobných údajov", always: "Vždy aktívne", show: "Zobraziť opis kategórie", hide: "Skryť opis kategórie",
  accept: "Prijať všetko", reject: "Odmietnuť všetko", save: "Uložiť výber",
  categories: [
    { key: "necessary", name: "Nevyhnutné", desc: "Ukladajú vaše nastavenia a pomáhajú zabezpečiť web. V tomto paneli ich nemožno vypnúť." },
    { key: "analytics", name: "Analytické", desc: "V súčasnosti sa nepoužívajú. Po zavedení budú slúžiť na analýzu používania webu a vyžadovať váš predchádzajúci súhlas." },
    { key: "marketing", name: "Reklamné", desc: "V súčasnosti sa nepoužívajú. Nástroje na prispôsobenie reklamy alebo marketingu sa aktivujú len s vaším súhlasom." },
    { key: "social", name: "Sociálne siete", desc: "V súčasnosti sa nepoužívajú. Doplnky a funkcie externých sociálnych platforiem budú vyžadovať váš predchádzajúci súhlas." },
  ],
};

export const privacy: PrivacyCopy = {
  title: "Zásady ochrany osobných údajov", description: "Zásady ochrany osobných údajov a informácie o cookies webu ITORG Krzysztof Radzimski.", document: "Dokument", updated: "Posledná aktualizácia",
  intro: "Tieto zásady opisujú spracúvanie údajov a používanie cookies a podobných technológií na itorg.pl. Web predstavuje ponuku spoločnosti a nevyžaduje účet ani prihlásenie.",
  sections: [
    { id: "controller", title: "1. Prevádzkovateľ osobných údajov", paragraphs: ["Prevádzkovateľom je nižšie uvedená spoločnosť. V otázkach súkromia nás môžete kontaktovať e-mailom, telefonicky alebo prostredníctvom poľskej služby elektronického doručovania."] },
    { id: "data", title: "2. Aké údaje spracúvame", paragraphs: ["Web neobsahuje formuláre ani nástroje na automatický zber údajov na marketingové účely."], items: ["Kontakt: pri e-maile, telefonáte alebo elektronickom doručení spracúvame poskytnuté údaje, napríklad meno, e-mail, telefón a správu, aby sme odpovedali a vybavili vašu otázku.", "Technické údaje: poskytovateľ hostingu Cloudflare spracúva protokoly nevyhnutné na poskytovanie a zabezpečenie webu, napríklad IP adresu, prehliadač, operačný systém, čas požiadavky a odkazujúcu adresu."] },
    { id: "basis", title: "3. Právne základy", paragraphs: [], items: ["Čl. 6 ods. 1 písm. b GDPR: kroky na vašu žiadosť pred uzatvorením zmluvy a vybavovanie obchodných otázok.", "Čl. 6 ods. 1 písm. f GDPR: oprávnený záujem na prevádzke a zabezpečení webu, komunikácii a určení alebo uplatnení nárokov.", "Čl. 6 ods. 1 písm. a GDPR: súhlas s voliteľnými cookies, ak sa v budúcnosti zavedú.", "Čl. 6 ods. 1 písm. c GDPR: zákonné povinnosti, napríklad daňové a účtovné, pri obchodnej spolupráci."] },
    { id: "cookies", title: "4. Cookies a podobné technológie", paragraphs: ["Web načítava zdroje z vlastnej domény. V súčasnosti nepoužívame vlastné analytické či reklamné nástroje ani doplnky sociálnych sietí. Jazyková verzia vyplýva z adresy stránky; na tento účel neukladáme žiadny ďalší súbor cookie."] },
    { id: "recipients", title: "5. Príjemcovia údajov", paragraphs: ["Údaje môžu byť zverené dodávateľom zabezpečujúcim prevádzku webu a korešpondenciu. Orgánom verejnej moci sa poskytujú len v prípadoch stanovených zákonom."], items: ["Cloudflare, Inc. — hosting a sieť na distribúciu obsahu webu.", "Poskytovateľ e-mailu a prevádzkovateľ elektronického doručovania — na vedenie korešpondencie."] },
    { id: "transfers", title: "6. Prenosy mimo EHP", paragraphs: ["Niektorí dodávatelia, napríklad Cloudflare, sídlia mimo Európskeho hospodárskeho priestoru, v USA. Prenosy vychádzajú zo štandardných zmluvných doložiek schválených Európskou komisiou a v príslušných prípadoch z programu Data Privacy Framework."] },
    { id: "retention", title: "7. Doba uchovávania", paragraphs: ["Korešpondenciu a kontaktné údaje uchovávame počas riešenia záležitosti a príslušných premlčacích lehôt. Dokumentáciu podliehajúcu zákonnej povinnosti uchovávame počas stanovenej doby. Technické protokoly uchováva poskytovateľ hostingu podľa svojich zásad. Rozhodnutie o cookies zostáva v miestnom úložisku, kým ho nezmeníte alebo nevymažete údaje prehliadača."] },
    { id: "rights", title: "8. Vaše práva", paragraphs: ["Za podmienok stanovených právnymi predpismi máte tieto práva:"], items: ["Prístup k údajom a získanie ich kópie.", "Oprava, vymazanie alebo obmedzenie spracúvania.", "Namietanie spracúvania založeného na oprávnenom záujme.", "Prenosnosť údajov.", "Odvolanie súhlasu kedykoľvek bez vplyvu na zákonnosť predchádzajúceho spracúvania.", "Podanie sťažnosti predsedovi poľského Úradu na ochranu osobných údajov (UODO)."] },
    { id: "changes", title: "9. Zmeny zásad", paragraphs: ["Zásady môžu byť aktualizované s rozvojom webu alebo zmenou predpisov. Aktuálne znenie je na tejto adrese spolu s dátumom aktualizácie."] },
    { id: "contact", title: "10. Kontakt", paragraphs: ["V otázkach súkromia a osobných údajov použite nasledujúce kontaktné údaje."] },
  ],
  tableCaption: "Technológie používané na webe", tableHeaders: ["Názov / technológia", "Účel", "Kategória a základ"],
  tableRows: [
    { name: "itorg-cookie-consent-v1 (miestne úložisko prehliadača)", purpose: "Zapamätanie vášho rozhodnutia o cookies.", basis: "Nevyhnutné · oprávnený záujem" },
    { name: "Technické cookies Cloudflare, napríklad ochrana pred robotmi", purpose: "Zabezpečenie a správne fungovanie webu.", basis: "Nevyhnutné · oprávnený záujem" },
    { name: "Analytika, reklama a sociálne siete", purpose: "V súčasnosti nepoužívané; pred aktiváciou vyžadujú predchádzajúci súhlas.", basis: "Voliteľné · súhlas" },
  ],
  settings: "Nevyhnutné kategórie sú potrebné na prevádzku webu. Voliteľné preferencie môžete kedykoľvek zmeniť v paneli alebo vymazaním údajov prehliadača.",
  cloudflare: "Zásady ochrany súkromia Cloudflare", authority: "Poľský Úrad na ochranu osobných údajov",
};

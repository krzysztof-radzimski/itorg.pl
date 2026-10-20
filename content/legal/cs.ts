import type { CookieCopy, PrivacyCopy } from "./types";

export const cookies: CookieCopy = {
  title: "Respektujeme vaše soukromí",
  intro: "Web používá nezbytné technologie pro správné fungování. V současnosti nepoužíváme analytické, reklamní ani sociální nástroje. Volitelné kategorie vyžadují váš souhlas, který můžete kdykoli změnit.",
  privacy: "Zásady ochrany osobních údajů", always: "Vždy aktivní", show: "Zobrazit popis kategorie", hide: "Skrýt popis kategorie",
  accept: "Přijmout vše", reject: "Odmítnout vše", save: "Uložit výběr",
  categories: [
    { key: "necessary", name: "Nezbytné", desc: "Ukládají vaše rozhodnutí o cookies a podporují bezpečné poskytování webu. V tomto panelu je nelze vypnout." },
    { key: "analytics", name: "Výkon a analytika", desc: "V současnosti se nepoužívají. Při zavedení budou sloužit k analýze používání webu a budou vyžadovat váš předchozí souhlas." },
    { key: "marketing", name: "Cílení a reklama", desc: "V současnosti se nepoužívají. Nástroje pro přizpůsobení reklamy či marketingu se aktivují pouze s vaším souhlasem." },
    { key: "social", name: "Sociální sítě", desc: "V současnosti se nepoužívají. Doplňky a funkce externích sociálních platforem budou vyžadovat váš předchozí souhlas." },
  ],
};

export const privacy: PrivacyCopy = {
  title: "Zásady ochrany osobních údajů", description: "Zásady ochrany osobních údajů a informace o cookies webu ITORG Krzysztof Radzimski.", document: "Dokument", updated: "Poslední aktualizace",
  intro: "Tyto zásady popisují zpracování údajů a používání cookies a podobných technologií na itorg.pl. Web představuje nabídku společnosti a nevyžaduje účet ani přihlášení.",
  sections: [
    { id: "controller", title: "1. Správce osobních údajů", paragraphs: ["Správcem údajů je níže uvedená společnost. V otázkách soukromí nás můžete kontaktovat e-mailem, telefonicky nebo prostřednictvím polské služby elektronického doručování."] },
    { id: "data", title: "2. Jaké údaje zpracováváme", paragraphs: ["Web neobsahuje formuláře ani nástroje pro automatický sběr údajů k marketingovým účelům."], items: ["Kontakt: při e-mailu, telefonátu nebo elektronickém doručení zpracováváme poskytnuté údaje, například jméno, e-mail, telefon a zprávu, abychom odpověděli a vyřídili váš dotaz.", "Technické údaje: poskytovatel hostingu Cloudflare zpracovává protokoly nezbytné k poskytování a zabezpečení webu, například IP adresu, prohlížeč, operační systém, čas požadavku a odkazující adresu."] },
    { id: "basis", title: "3. Právní základy", paragraphs: [], items: ["Čl. 6 odst. 1 písm. b GDPR: kroky na vaši žádost před uzavřením smlouvy a vyřizování obchodních dotazů.", "Čl. 6 odst. 1 písm. f GDPR: oprávněný zájem na provozu a zabezpečení webu, komunikaci a určení či uplatnění nároků.", "Čl. 6 odst. 1 písm. a GDPR: souhlas s volitelnými cookies, budou-li v budoucnu zavedeny.", "Čl. 6 odst. 1 písm. c GDPR: zákonné povinnosti, například daňové a účetní, v rámci obchodní spolupráce."] },
    { id: "cookies", title: "4. Cookies a podobné technologie", paragraphs: ["Web načítá zdroje z vlastní domény. V současnosti nepoužíváme vlastní analytické či reklamní nástroje ani sociální doplňky. Jazyková verze vyplývá z adresy stránky; pro tento účel neukládáme další cookie."] },
    { id: "recipients", title: "5. Příjemci údajů", paragraphs: ["Údaje mohou být svěřeny dodavatelům zajišťujícím provoz webu a korespondenci. Orgánům veřejné moci se poskytují pouze v případech stanovených zákonem."], items: ["Cloudflare, Inc. — hosting a síť pro distribuci obsahu webu.", "Poskytovatel e-mailu a provozovatel elektronického doručování — pro vedení korespondence."] },
    { id: "transfers", title: "6. Předávání mimo EHP", paragraphs: ["Někteří dodavatelé, například Cloudflare, sídlí mimo Evropský hospodářský prostor, v USA. Předávání vychází ze standardních smluvních doložek schválených Evropskou komisí a v příslušných případech z programu Data Privacy Framework."] },
    { id: "retention", title: "7. Doba uchovávání", paragraphs: ["Korespondenci a kontaktní údaje uchováváme po dobu řešení záležitosti a příslušných promlčecích lhůt. Dokumentaci podléhající zákonné povinnosti uchováváme po stanovenou dobu. Technické protokoly uchovává poskytovatel hostingu podle svých zásad. Rozhodnutí o cookies zůstává v místním úložišti, dokud ho nezměníte nebo nevymažete údaje prohlížeče."] },
    { id: "rights", title: "8. Vaše práva", paragraphs: ["Za podmínek stanovených právními předpisy máte tato práva:"], items: ["Přístup k údajům a získání jejich kopie.", "Oprava, výmaz nebo omezení zpracování.", "Námitka proti zpracování na základě oprávněného zájmu.", "Přenositelnost údajů.", "Odvolání souhlasu kdykoli, bez vlivu na zákonnost předchozího zpracování.", "Podání stížnosti předsedovi polského Úřadu pro ochranu osobních údajů (UODO)."] },
    { id: "changes", title: "9. Změny zásad", paragraphs: ["Zásady mohou být aktualizovány s rozvojem webu nebo změnou předpisů. Aktuální znění je na této adrese spolu s datem aktualizace."] },
    { id: "contact", title: "10. Kontakt", paragraphs: ["V otázkách soukromí a osobních údajů využijte následující kontaktní údaje."] },
  ],
  tableCaption: "Technologie používané na webu", tableHeaders: ["Název / technologie", "Účel", "Kategorie a základ"],
  tableRows: [
    { name: "itorg-cookie-consent-v1 (místní úložiště prohlížeče)", purpose: "Zapamatování vašeho rozhodnutí o cookies.", basis: "Nezbytné · oprávněný zájem" },
    { name: "Technické cookies Cloudflare, například ochrana před roboty", purpose: "Zabezpečení a správné poskytování webu.", basis: "Nezbytné · oprávněný zájem" },
    { name: "Analytika, reklama a sociální sítě", purpose: "V současnosti nepoužívané; před aktivací vyžadují předchozí souhlas.", basis: "Volitelné · souhlas" },
  ],
  settings: "Nezbytné kategorie jsou nutné pro provoz webu. Volitelné preference můžete kdykoli změnit v panelu nebo vymazáním údajů prohlížeče.",
  cloudflare: "Zásady ochrany soukromí Cloudflare", authority: "Polský Úřad pro ochranu osobních údajů",
};

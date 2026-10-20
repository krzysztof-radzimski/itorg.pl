import type { CookieCopy, PrivacyCopy } from "./types";

export const cookies: CookieCopy = {
  title: "Szanujemy Twoją prywatność",
  intro: "Serwis korzysta z niezbędnych technologii do prawidłowego działania. Obecnie nie używamy narzędzi analitycznych, reklamowych ani społecznościowych. Opcjonalne kategorie wymagają Twojej zgody, którą możesz zmienić w każdej chwili.",
  privacy: "Polityka prywatności",
  always: "Zawsze aktywne",
  show: "Pokaż opis kategorii",
  hide: "Ukryj opis kategorii",
  accept: "Akceptuj wszystkie",
  reject: "Odrzuć wszystkie",
  save: "Zapisz wybrane",
  categories: [
    { key: "necessary", name: "Niezbędne", desc: "Zapamiętują Twoją decyzję dotyczącą plików cookie oraz wspierają bezpieczne dostarczenie strony. Nie można ich wyłączyć w tym panelu." },
    { key: "analytics", name: "Wydajnościowe i analityczne", desc: "Obecnie niestosowane. Jeśli zostaną wprowadzone, będą służyć analizie korzystania ze strony i będą wymagać Twojej uprzedniej zgody." },
    { key: "marketing", name: "Kierunkowe i reklamowe", desc: "Obecnie niestosowane. Narzędzia dopasowujące reklamy lub przekaz marketingowy zostaną uruchomione wyłącznie po uzyskaniu Twojej zgody." },
    { key: "social", name: "Media społecznościowe", desc: "Obecnie niestosowane. Wtyczki i funkcje zewnętrznych platform społecznościowych będą wymagać Twojej uprzedniej zgody." },
  ],
};

export const privacy: PrivacyCopy = {
  title: "Polityka prywatności",
  description: "Polityka prywatności i informacje o plikach cookie serwisu ITORG Krzysztof Radzimski.",
  document: "Dokument",
  updated: "Ostatnia aktualizacja",
  intro: "Niniejsza polityka opisuje przetwarzanie danych oraz stosowanie plików cookie i podobnych technologii w serwisie itorg.pl. Serwis ma charakter informacyjny, prezentuje ofertę firmy i nie wymaga konta ani logowania.",
  sections: [
    { id: "controller", title: "1. Administrator danych", paragraphs: ["Administratorem danych jest firma wskazana poniżej. W sprawach prywatności można skontaktować się przez e-mail, telefon lub e-Doręczenia."] },
    { id: "data", title: "2. Jakie dane przetwarzamy", paragraphs: ["Serwis nie zawiera formularzy ani narzędzi automatycznego zbierania danych do celów marketingowych."], items: ["Kontakt: gdy piszesz, dzwonisz lub korzystasz z e-Doręczeń, przetwarzamy podane przez Ciebie dane (np. imię, nazwisko, e-mail, telefon i treść wiadomości), aby odpowiedzieć i obsłużyć sprawę.", "Dane techniczne: dostawca hostingu (Cloudflare) przetwarza w logach dane niezbędne do dostarczenia strony i zapewnienia bezpieczeństwa, takie jak adres IP, przeglądarka, system operacyjny, czas żądania i adres odsyłający."] },
    { id: "basis", title: "3. Podstawy prawne", paragraphs: [], items: ["Art. 6 ust. 1 lit. b RODO: działania na Twoje żądanie przed zawarciem umowy i obsługa zapytań dotyczących współpracy.", "Art. 6 ust. 1 lit. f RODO: uzasadniony interes obejmujący działanie i bezpieczeństwo serwisu, komunikację oraz ustalenie lub dochodzenie roszczeń.", "Art. 6 ust. 1 lit. a RODO: zgoda na opcjonalne pliki cookie, jeśli zostaną w przyszłości uruchomione.", "Art. 6 ust. 1 lit. c RODO: obowiązki prawne, np. podatkowe i rachunkowe, w zakresie współpracy biznesowej."] },
    { id: "cookies", title: "4. Pliki cookie i podobne technologie", paragraphs: ["Serwis ładuje zasoby z własnej domeny. Nie używamy obecnie własnych narzędzi analitycznych, reklamowych ani wtyczek społecznościowych. Wersja językowa wynika z adresu strony; nie zapisujemy w tym celu dodatkowego pliku cookie."] },
    { id: "recipients", title: "5. Odbiorcy danych", paragraphs: ["Dane mogą być powierzane dostawcom wspierającym działanie serwisu i obsługę korespondencji. Udostępnienie organom publicznym następuje wyłącznie w przypadkach wynikających z przepisów."], items: ["Cloudflare, Inc. — hosting i sieć CDN dostarczająca stronę.", "Dostawca poczty e-mail i operator e-Doręczeń — w zakresie prowadzonej korespondencji."] },
    { id: "transfers", title: "6. Przekazywanie poza EOG", paragraphs: ["Niektórzy dostawcy, np. Cloudflare, mają siedzibę poza Europejskim Obszarem Gospodarczym (USA). Przekazywanie danych odbywa się na podstawie standardowych klauzul umownych zatwierdzonych przez Komisję Europejską oraz, w stosownych przypadkach, programu Data Privacy Framework."] },
    { id: "retention", title: "7. Okres przechowywania", paragraphs: ["Korespondencję i dane kontaktowe przechowujemy przez czas obsługi sprawy oraz okres przedawnienia ewentualnych roszczeń; dokumentację objętą obowiązkiem prawnym — przez czas wymagany przepisami. Logi techniczne przechowuje dostawca hostingu zgodnie ze swoją polityką. Decyzja dotycząca cookie pozostaje w pamięci lokalnej do czasu jej zmiany lub wyczyszczenia danych przeglądarki."] },
    { id: "rights", title: "8. Twoje prawa", paragraphs: ["W zakresie przewidzianym przepisami przysługują Ci następujące prawa:"], items: ["Dostęp do danych i otrzymanie ich kopii.", "Sprostowanie, usunięcie lub ograniczenie przetwarzania.", "Sprzeciw wobec przetwarzania opartego na uzasadnionym interesie.", "Przenoszenie danych.", "Wycofanie zgody w dowolnym momencie, bez wpływu na zgodność z prawem wcześniejszego przetwarzania.", "Skarga do Prezesa Urzędu Ochrony Danych Osobowych (UODO)."] },
    { id: "changes", title: "9. Zmiany polityki", paragraphs: ["Polityka może być aktualizowana wraz z rozwojem serwisu lub zmianą przepisów. Aktualna wersja jest dostępna pod tym adresem wraz z datą aktualizacji."] },
    { id: "contact", title: "10. Kontakt", paragraphs: ["W sprawach prywatności i danych osobowych skorzystaj z poniższych danych kontaktowych."] },
  ],
  tableCaption: "Technologie stosowane w serwisie",
  tableHeaders: ["Nazwa / technologia", "Cel", "Kategoria i podstawa"],
  tableRows: [
    { name: "itorg-cookie-consent-v1 (pamięć lokalna przeglądarki)", purpose: "Zapamiętanie Twojej decyzji dotyczącej cookie.", basis: "Niezbędne · uzasadniony interes" },
    { name: "Techniczne cookie Cloudflare (np. ochrona przed botami)", purpose: "Bezpieczeństwo i prawidłowe dostarczenie strony.", basis: "Niezbędne · uzasadniony interes" },
    { name: "Analityka, reklama i media społecznościowe", purpose: "Obecnie niestosowane; wymagają uprzedniej zgody przed uruchomieniem.", basis: "Opcjonalne · zgoda" },
  ],
  settings: "Kategorie niezbędne są wymagane do działania serwisu. Decyzję o kategoriach opcjonalnych możesz zmienić w dowolnym momencie w panelu lub przez usunięcie danych przeglądarki.",
  cloudflare: "Polityka prywatności Cloudflare",
  authority: "Urząd Ochrony Danych Osobowych",
};

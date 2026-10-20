import type { CookieCopy, PrivacyCopy } from "./types";

export const cookies: CookieCopy = {
  title: "Ustawienia prywatności",
  intro: "Strona korzysta z technologii niezbędnych do działania i zapamiętuje Twój wybór ustawień. Nie używamy obecnie analityki, reklam ani wtyczek społecznościowych. Przed ich ewentualnym wprowadzeniem przedstawimy szczegóły i poprosimy o ponowną zgodę.",
  privacy: "Polityka prywatności",
  always: "Zawsze aktywne",
  show: "Pokaż opis kategorii",
  hide: "Ukryj opis kategorii",
  accept: "Akceptuj wszystkie",
  reject: "Odrzuć wszystkie",
  save: "Zapisz wybrane",
  categories: [
    { key: "necessary", name: "Niezbędne", desc: "Zapamiętują wybrane ustawienia i pomagają chronić stronę. Nie można ich wyłączyć w tym panelu." },
    { key: "analytics", name: "Analityczne", desc: "Obecnie niestosowane. Jeśli zostaną wprowadzone, będą służyć analizie korzystania ze strony i będą wymagać Twojej uprzedniej zgody." },
    { key: "marketing", name: "Reklamowe", desc: "Obecnie niestosowane. Narzędzia dopasowujące reklamy lub przekaz marketingowy zostaną uruchomione wyłącznie po uzyskaniu Twojej zgody." },
    { key: "social", name: "Media społecznościowe", desc: "Obecnie niestosowane. Wtyczki i funkcje zewnętrznych platform społecznościowych będą wymagać Twojej uprzedniej zgody." },
  ],
};

export const privacy: PrivacyCopy = {
  title: "Polityka prywatności",
  description: "Polityka prywatności i informacje o plikach cookie serwisu ITORG Krzysztof Radzimski.",
  document: "Dokument",
  updated: "Ostatnia aktualizacja",
  intro: "Ta polityka opisuje, jak przetwarzamy dane i korzystamy z plików cookie oraz podobnych technologii na itorg.pl. Strona przedstawia ofertę firmy. Nie wymaga konta ani logowania.",
  sections: [
    { id: "controller", title: "1. Administrator danych", paragraphs: ["Administratorem danych jest Krzysztof Radzimski prowadzący działalność gospodarczą pod firmą ITORG Krzysztof Radzimski. W sprawach prywatności można skontaktować się przez e-mail, telefon lub e-Doręczenia. Dane kontaktowe znajdują się poniżej."] },
    { id: "data", title: "2. Jakie dane przetwarzamy", paragraphs: ["Na stronie nie ma formularzy kontaktowych ani rejestracji. Nie zbieramy tutaj danych do reklam ani profilowania marketingowego.", "Podanie danych w korespondencji jest dobrowolne, ale bez danych kontaktowych lub informacji o sprawie możemy nie być w stanie odpowiedzieć. Przy zawieraniu umowy określone dane mogą być wymagane do jej realizacji lub przez przepisy, np. do wystawienia faktury.", "W związku z korzystaniem z tej strony nie podejmujemy wobec Ciebie decyzji opartych wyłącznie na automatycznym przetwarzaniu, w tym profilowaniu, które wywołują skutki prawne lub w podobny sposób istotnie na Ciebie wpływają. Odnośniki do zewnętrznych serwisów prowadzą do stron z własnymi zasadami prywatności."], items: ["Kontakt: gdy piszesz, dzwonisz lub korzystasz z e-Doręczeń, przetwarzamy podane dane, np. imię, nazwisko, e-mail, telefon i treść wiadomości, aby odpowiedzieć i obsłużyć sprawę.", "Dane techniczne: Cloudflare przetwarza dane połączenia potrzebne do dostarczenia i zabezpieczenia strony. Obejmują one adres IP, żądany adres URL, czas żądania oraz informacje o przeglądarce i urządzeniu przesłane w nagłówkach, w tym adres odsyłający, jeśli jest dostępny. Dane te mogą być zapisywane w logach technicznych."] },
    { id: "basis", title: "3. Podstawy prawne", paragraphs: [], items: ["Art. 6 ust. 1 lit. b RODO: przygotowanie umowy na Twoje żądanie oraz jej wykonanie, gdy jesteś stroną umowy.", "Art. 6 ust. 1 lit. f RODO: nasz uzasadniony interes w odpowiadaniu na pozostałe zapytania, kontakcie z osobami reprezentującymi klientów, zapewnieniu działania i bezpieczeństwa strony oraz ustaleniu, dochodzeniu lub obronie roszczeń.", "Art. 6 ust. 1 lit. c RODO: w razie zawarcia umowy — realizacja obowiązków prawnych, m.in. podatkowych i rachunkowych. Samo przeglądanie strony nie wymaga podania danych do takich celów."] },
    { id: "cookies", title: "4. Pliki cookie i podobne technologie", paragraphs: ["Serwis ładuje zasoby z własnej domeny. Nie używamy narzędzi analitycznych, reklamowych ani wtyczek społecznościowych. Wersja językowa wynika z adresu strony; nie zapisujemy w tym celu pliku cookie.", "Do zapamiętania ustawień używamy localStorage, czyli pamięci lokalnej przeglądarki. Zapis zawiera wyłącznie wybory w panelu prywatności, bez unikatowego identyfikatora użytkownika. Nie jest automatycznie wysyłany na serwer tak jak plik cookie.", "Zapis i odczyt informacji niezbędnych do zapamiętania ustawień oraz bezpiecznego dostarczenia żądanej strony nie wymagają zgody na podstawie art. 399 ust. 3 Prawa komunikacji elektronicznej. Jest to odrębna kwestia od podstaw przetwarzania danych osobowych opisanych w punkcie 3."] },
    { id: "recipients", title: "5. Odbiorcy danych", paragraphs: ["Dane mogą być powierzane dostawcom wspierającym działanie serwisu i obsługę korespondencji. Udostępnienie organom publicznym następuje wyłącznie w przypadkach wynikających z przepisów."], items: ["Cloudflare, Inc. — hosting, sieć CDN dostarczająca stronę i ochrona ruchu sieciowego.", "Dostawca poczty e-mail i operator e-Doręczeń — w zakresie prowadzonej korespondencji."] },
    { id: "transfers", title: "6. Przekazywanie poza EOG", paragraphs: ["Cloudflare korzysta z globalnej infrastruktury, dlatego dane techniczne mogą być przetwarzane poza Europejskim Obszarem Gospodarczym, w tym w USA.", "Warunki przetwarzania Cloudflare przewidują dla transferów objętych EU–US Data Privacy Framework decyzję Komisji Europejskiej o odpowiednim stopniu ochrony (art. 45 RODO). Dla transferów, których ta decyzja nie obejmuje, przewidują standardowe klauzule umowne zatwierdzone przez Komisję oraz odpowiednie zabezpieczenia (art. 46 RODO). Treść tych warunków jest dostępna poniżej. O informacje o stosowanych zabezpieczeniach lub ich kopię możesz poprosić administratora."] },
    { id: "retention", title: "7. Okres przechowywania", paragraphs: ["Korespondencję przechowujemy przez czas potrzebny do obsługi sprawy. Jeśli jest potrzebna do ustalenia, dochodzenia lub obrony roszczeń, przechowujemy ją do upływu właściwego okresu przedawnienia, a w razie sporu — do jego prawomocnego zakończenia. Dokumentację podatkową i rachunkową przechowujemy przez okres wymagany przepisami.", "Okres przechowywania danych technicznych w Cloudflare zależy od używanej usługi i jej konfiguracji. Informacje o retencji danych dotyczących Twojej wizyty możesz uzyskać od administratora.", "Zapis ustawień w localStorage nie ma automatycznej daty wygaśnięcia. Jest zastępowany po zmianie ustawień lub usuwany po wyczyszczeniu danych strony w przeglądarce. Po usunięciu zapisu panel pojawi się ponownie."] },
    { id: "rights", title: "8. Twoje prawa", paragraphs: ["Na warunkach określonych w RODO możesz skorzystać z poniższych praw, kontaktując się z administratorem:"], items: ["Dostęp do danych i otrzymanie ich kopii.", "Sprostowanie, usunięcie lub ograniczenie przetwarzania danych.", "Sprzeciw wobec przetwarzania opartego na uzasadnionym interesie z przyczyn związanych z Twoją szczególną sytuacją.", "Przenoszenie dostarczonych przez Ciebie danych, jeśli przetwarzamy je automatycznie na podstawie zgody lub umowy.", "Jeśli podstawą przetwarzania jest zgoda — jej wycofanie w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed wycofaniem.", "Skarga do Prezesa Urzędu Ochrony Danych Osobowych (UODO) lub innego właściwego organu nadzorczego."] },
    { id: "changes", title: "9. Zmiany polityki", paragraphs: ["Polityka może być aktualizowana wraz z rozwojem serwisu lub zmianą przepisów. Aktualna wersja jest dostępna pod tym adresem wraz z datą aktualizacji."] },
    { id: "contact", title: "10. Kontakt", paragraphs: ["W sprawach prywatności i danych osobowych skorzystaj z poniższych danych kontaktowych."] },
  ],
  tableCaption: "Technologie stosowane w serwisie",
  tableHeaders: ["Nazwa / technologia", "Cel i zastosowanie", "Zapis / odczyt na urządzeniu"],
  tableRows: [
    { name: "itorg-cookie-consent-v1 (localStorage)", purpose: "Zapamiętanie Twoich ustawień prywatności w tej przeglądarce.", basis: "Niezbędne — bez zgody (art. 399 ust. 3 PKE)." },
    { name: "Zabezpieczenia Cloudflare (zależnie od konfiguracji)", purpose: "Mogą ustawiać techniczne cookie chroniące stronę przed nadużyciami. Ich rodzaj i czas działania zależą od uruchomionego zabezpieczenia; opisuje je dokumentacja Cloudflare poniżej.", basis: "Bez zgody wyłącznie w zakresie niezbędnym do bezpiecznego dostarczenia żądanej strony." },
    { name: "Analityka, reklama i media społecznościowe", purpose: "Nie są uruchamiane, także po wybraniu „Akceptuj wszystkie”.", basis: "Obecnie niestosowane." },
  ],
  settings: "Zapisane preferencje możesz zmienić w panelu poniżej. Ewentualne wprowadzenie narzędzi opcjonalnych poprzedzimy opisem ich celów, dostawców i czasu działania oraz prośbą o nową zgodę. Bieżące ustawienia nie stanowią zgody na przyszłe, nieopisane narzędzia.",
  cloudflareCookies: "Dokumentacja plików cookie Cloudflare",
  cloudflareDpa: "Warunki przetwarzania danych Cloudflare (DPA)",
  cloudflare: "Polityka prywatności Cloudflare",
  authority: "Urząd Ochrony Danych Osobowych",
};

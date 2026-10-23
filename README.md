# ITORG — itorg.pl

Witryna **ITORG Krzysztof Radzimski**: oprogramowanie dla administracji publicznej,
automatyzacja, obieg dokumentów, integracje i tworzenie narzędzi AI. Strona
główna przedstawia firmę, usługi i współpracę. Katalog oraz opisy produktów
znajdują się na osobnych podstronach we wszystkich 27 językach.

Podstrona **EAP Legislator** przedstawia edytor, wersję dla administracji rządowej
oraz dodatek „Finanse Publiczne” do importu danych z Besti@, z odnośnikami do
[EAP Legislator](https://abcpro.pl/eap-legislator),
[Legislator GOV](https://abcpro.pl/legislator-gov) i
[dodatku Besti@](https://abcpro.pl/dodatek-bestia).

ITORG rozwija EAP Legislator dla ABC PRO Sp. z o.o. i współpracuje przy rozwoju
platformy [Orion AI](https://orion.abcpro.pl/). Katalog zawiera również opisy
systemów partnera: Baza Aktów Własnych, ABC ANON i ABC Kancelaria.

Next.js 15 (App Router), React 19, TypeScript i własny CSS. Eksport statyczny do
`out/`, hosting na Cloudflare Pages. Dwie niewielkie funkcje Pages dobierają język
wejścia i zapisują wybór ręczny. Bez serwera Next.js, zewnętrznych fontów i usług
automatycznego tłumaczenia.

## Wersje językowe

Każda wersja ma przetłumaczoną stronę główną, katalog, sześć opisów produktów,
politykę prywatności, panel cookie, nawigację, etykiety dostępności i metadane SEO.

| Język | Strona główna | Polityka prywatności |
| --- | --- | --- |
| Polski | `/` | `/polityka-prywatnosci/` |
| Angielski | `/en/` | `/en/privacy/` |
| Niemiecki | `/de/` | `/de/privacy/` |
| Hiszpański | `/es/` | `/es/privacy/` |
| Francuski | `/fr/` | `/fr/privacy/` |
| Bułgarski | `/bg/` | `/bg/privacy/` |
| Duński | `/da/` | `/da/privacy/` |
| Grecki | `/el/` | `/el/privacy/` |
| Estoński | `/et/` | `/et/privacy/` |
| Fiński | `/fi/` | `/fi/privacy/` |
| Irlandzki | `/ga/` | `/ga/privacy/` |
| Chorwacki | `/hr/` | `/hr/privacy/` |
| Węgierski | `/hu/` | `/hu/privacy/` |
| Włoski | `/it/` | `/it/privacy/` |
| Litewski | `/lt/` | `/lt/privacy/` |
| Łotewski | `/lv/` | `/lv/privacy/` |
| Maltański | `/mt/` | `/mt/privacy/` |
| Niderlandzki | `/nl/` | `/nl/privacy/` |
| Portugalski | `/pt/` | `/pt/privacy/` |
| Rumuński | `/ro/` | `/ro/privacy/` |
| Słoweński | `/sl/` | `/sl/privacy/` |
| Szwedzki | `/sv/` | `/sv/privacy/` |
| Rosyjski | `/ru/` | `/ru/privacy/` |
| Czeski | `/cs/` | `/cs/privacy/` |
| Słowacki | `/sk/` | `/sk/privacy/` |
| Białoruski | `/be/` | `/be/privacy/` |
| Ukraiński | `/uk/` | `/uk/privacy/` |

Katalog: `/produkty/` po polsku i `/{locale}/products/` w pozostałych językach.
Pod nim znajdują się podstrony `eap-legislator/`, `orion-ai/`,
`baza-aktow-wlasnych/`, `abc-anon/` i `abc-kancelaria/`. NetUnstick ma osobny adres
`/NetUnstick/` oraz `/{locale}/NetUnstick/`. Łącznie eksport obejmuje 243 strony
językowych. Wersja GOV i dodatek Besti@ są opisane na podstronie EAP Legislator.

Prezentacja NetUnstick opisuje odzyskiwanie połączeń między Makami wykrywanymi
przez Bonjour po rozłączeniu VPN. Pełne wydanie Developer ID może usunąć
kolidujące trasy pozostałe po VPN (np. FortiClient), przywracając dostęp do
plików i udostępniania ekranu bez restartu, gdy to te trasy są przyczyną awarii.
Wymaga potwierdzenia użytkownika i uprawnień administratora, a po naprawie
ponawia diagnostykę. Zachowanie potwierdzają kod planowania napraw oraz opis
rzeczywistego incydentu z 29 września 2026 w `docs/verification.md` projektu
NetUnstick. Opis oddziela tę funkcję od odczytowej wersji Mac App Store,
której dotyczą lista kontroli, zrzut okna i planowana cena 0,99 USD.
Wspólne wymaganie to macOS 14.
Zrzuty w `public/NetUnstick/screenshots/` pochodzą z uruchomionego wydania
Mac App Store we wszystkich 24 językach urzędowych UE. Ten sam obraz trafia do
prezentacji i metadanych udostępniania linku. Wersje RU, BE i UK pokazują zrzut
angielski z podpisem, ponieważ aplikacja nie obsługuje tych trzech języków.
Status „wkrótce” należy zmienić po publikacji aplikacji, dodając wtedy odnośnik
do jej karty w sklepie. Materiały PL/EN/ES z pakietu `Artifacts/Distribution/NetUnstick-Website.zip`
projektu NetUnstick są dostępne pod `/NetUnstick/{pl,en,es}/{support,privacy}.html`,
zgodnie z adresami przygotowanymi w jej metadanych App Store Connect. Treści
strony `index.html` z pakietu uzupełniają istniejącą prezentację: zakres wersji
sklepowej, jednorazowy zakup bez abonamentu i zakupów w aplikacji, przyszłe
aktualizacje bez dopłat oraz zasady korzystania na urządzeniach. Osobny plik
`public/NetUnstick/index.html` nie jest potrzebny, ponieważ ten adres generuje Next.js.

Menu: **Usługi, Produkty, O firmie, Współpraca, Kontakt**. Pozycja Produkty
prowadzi do katalogu, a pozostałe do sekcji strony głównej w bieżącym języku.

Przełącznik zachowuje rodzaj strony i konkretny produkt. Obsługuje wszystkie 24
języki urzędowe UE oraz dotychczasowe wersje białoruską, rosyjską i ukraińską.
Atrybut `html[lang]` jest zapisany w HTML podczas kompilacji. Każda strona ma
własny adres kanoniczny i komplet odnośników `hreflang`; wszystkie wersje są
w `sitemap.xml`.

Przy wejściu na adres bez prefiksu językowego (`/`, polskie adresy produktów
ABC PRO i polityka prywatności) funkcja Cloudflare wybiera język w kolejności:

1. Ręczny wybór zapisany w cookie `itorg-language`.
2. Kraj z zaufanego `request.cf.country`. Dla państw wielojęzycznych preferowany
   jest pasujący język z `Accept-Language`, z uwzględnieniem wag i wariantów regionalnych.
3. Gdy kraju nie znamy lub nie ma go w mapie, obsługiwany język przeglądarki.
4. Angielski jako język zastępczy.

Jawne adresy z prefiksem języka oraz materiały App Store są zawsze respektowane.
Dotyczy to również `/NetUnstick/`, którego polski język jest częścią adresu
prezentacji zapisanego w metadanych App Store.
Roboty wyszukiwarek otrzymują stabilną polską wersję adresów bez prefiksu.
Przekierowania 302 zachowują parametry wejścia, a odpowiedzi zależne od odwiedzającego
mają `private, no-store`. Automatyczny dobór nie zapisuje preferencji. Nie ma GPS,
pytania przeglądarki o lokalizację ani połączenia z zewnętrzną usługą IP.

Ręczna zmiana przechodzi przez `/language?locale=…&page=…`, również bez JavaScriptu.
Cel jest wybierany wyłącznie ze znanych stron i języków. Cookie obowiązuje rok,
ma `SameSite=Lax`, `HttpOnly` i na HTTPS także `Secure`. Nowy wybór odnawia termin.
Po wyłączeniu cookies można otwierać bezpośrednie adresy językowe; polski wybór
na adresie bez prefiksu wymaga zachowania cookie, aby uniknąć ponownego automatycznego doboru.

### Stałe adresy NetUnstick w App Store

Poniższe dziewięć adresów jest używane w 19 lokalizacjach metadanych aplikacji.
Ścieżki i języki są zachowywane niezależnie od kraju odwiedzającego i zapisanego
wyboru języka witryny. Ręczny przełącznik na tych stronach pozostaje dostępny.

| Język | Prezentacja | Wsparcie | Prywatność aplikacji |
| --- | --- | --- | --- |
| PL | `/NetUnstick/` | `/NetUnstick/pl/support` | `/NetUnstick/pl/privacy` |
| EN | `/en/NetUnstick/` | `/NetUnstick/en/support` | `/NetUnstick/en/privacy` |
| ES | `/es/NetUnstick/` | `/NetUnstick/es/support` | `/NetUnstick/es/privacy` |

Pełne adresy HTTPS przechowuje [lib/netunstick-store.mjs](lib/netunstick-store.mjs).
Linki wsparcia i prywatności w prezentacji prowadzą bezpośrednio do tych samych
adresów bez `.html`. Dotychczasowe pliki `.html` pozostają dostępne; Cloudflare
może przekierować je na adres bez rozszerzenia. Wykluczenia w `_routes.json`
oraz osobny warunek middleware chronią strony sklepu przed automatyczną zmianą
języka. Testy [tests/netunstick-store.test.mjs](tests/netunstick-store.test.mjs)
utrwalają dziewięć adresów, zawartość eksportu oraz zachowanie GET i HEAD z innym
krajem, preferencjami przeglądarki i cookie.

## Edycja treści

- [content/site.ts](content/site.ts): teksty polskie oraz wspólne dane firmy.
- [content/locales](content/locales): pełne słowniki pozostałych języków, sprawdzane
  przez TypeScript względem polskiej struktury.
- [content/eu](content/eu): 17 dodatkowych kompletnych słowników z typowanym
  składaniem wspólnej struktury strony, polityką, panelem cookie i opisem NetUnstick.
- [content/legal](content/legal): teksty polityk prywatności i panelu cookie.
- [content/netunstick.ts](content/netunstick.ts): krótki opis, status i dobór zrzutu NetUnstick.
- [lib/language-data.mjs](lib/language-data.mjs): wspólna lista języków, nazw, flag i kodów Open Graph.
- [lib/locales.ts](lib/locales.ts): typy języków i adresy.
- [lib/language-preference.mjs](lib/language-preference.mjs): wybór języka, mapa państw,
  parsowanie preferencji, cookie i bezpieczne cele przekierowań.
- [functions](functions): obsługa wejść bez prefiksu i ręcznego wyboru języka.
- [lib/metadata.ts](lib/metadata.ts): metadane i alternatywne wersje stron.
- [lib/products.ts](lib/products.ts): powiązanie opisów produktów z ich adresami.
- [components](components): wspólne komponenty dla wszystkich języków.
- [components/ProductLogo.tsx](components/ProductLogo.tsx): przypisanie oficjalnych
  znaków SVG do produktów, wspólne dla katalogu, strony głównej i opisów.
- [app/globals.css](app/globals.css): kolory, układ i motywy.
- [public/_headers](public/_headers): nagłówki bezpieczeństwa Cloudflare.

Polskie trasy znajdują się w grupie `app/(pl)`, a pozostałe w `app/[locale]`.
Osobne układy główne zapewniają właściwy język dokumentu także bez JavaScriptu.
Lata działalności i rok w stopce są wyliczane podczas kompilacji.

## Identyfikacja wizualna

Paleta i geometryczne akcenty pochodzą z czterech części logo ITORG.
`BrandMotif` wykorzystuje ścieżki firmowego sygnetu, a `brand-accent.svg`
powtarza jego kolory i kierunek ukośnych linii. Dekoracje nie zasłaniają treści.
Układ korzysta z płaskich powierzchni, prostych przycisków i opisowych łączy
ze strzałkami. Kafle katalogu mają jeden link obejmujący całą powierzchnię.
Jego nazwa dostępna zawiera widoczny tekst produktu, bez nadpisywania etykiety
atrybutami ARIA.

Oficjalne logotypy ABC PRO, produktów oraz dodatków są zapisane lokalnie
w `public/products` i `public/partners`. Są to rzeczywiste grafiki wektorowe.
[Wykaz źródeł](public/brand-assets.json) zawiera adresy pobrania i opis adaptacji
sygnetu Orion używanego również w nagłówku jego oficjalnej strony. Przeglądarka
odwiedzającego nie pobiera tych grafik z domen partnerów.

## Dostępność i prywatność

Celem wdrożenia jest **WCAG 2.2 na poziomie AA**. Wprowadzone rozwiązania obejmują
semantyczne nagłówki i regiony, link pomijający nawigację, widoczny fokus,
odpowiedni kontrast, elastyczny układ, duże cele interakcji, obsługę ograniczenia
ruchu i kolorów wymuszonych. Treść jest widoczna bez JavaScriptu.

Menu mobilne i wybór języka korzystają z natywnego `details/summary`. Panel cookie
używa natywnego modalnego `dialog`, blokuje interakcję z tłem, obsługuje
zamknięcie i przywraca fokus. Zgoda jest wspólna dla języków i zapisywana pod
dotychczasowym kluczem `itorg-cookie-consent-v1`. Opcjonalne narzędzia nie są
obecnie ładowane.

Zakres kontroli, wyniki oraz elementy wymagające oceny manualnej opisuje
[raport dostępności](docs/accessibility.md). Wyniki automatyczne nie stanowią
certyfikatu pełnej zgodności.

## Uruchomienie i weryfikacja

```bash
npm ci
npm run build
npm run typecheck
npm test
```

Testy sprawdzają wszystkie 243 wyeksportowane strony językowe, metadane,
przełączniki zachowujące produkt, kolejność menu, odnośniki, kotwice,
strukturę dostępności i kontrast kolorów. Dodatkowo obejmują wybór kraju i języka,
preferencje ręczne, brak pętli, wszystkie cele przełącznika, błędne dane i ochronę
przed przekierowaniem na obcą domenę. Dane krajów są kontrolowanymi scenariuszami
w testach funkcji; lokalny Podgląd nie symuluje prawdziwych wizyt z 27 państw.
`npm test` wymaga aktualnego katalogu `out/` po kompilacji.

Lokalnie: `npm run dev`. Podgląd statycznego eksportu z nagłówkami Cloudflare:
`npm run preview`. W code-architect serwer uruchamia i restartuje narzędzie
Podglądu; nie należy uruchamiać drugiego procesu serwera.

## Publikacja na Cloudflare Pages

Z terminala: `npm run deploy` (kompilacja i publikacja katalogu `out/`).
Przy integracji z Git:

| Ustawienie | Wartość |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |

Plik `public/_headers` jest kopiowany do eksportu. Publikacja nie wymaga
serwera Next.js. Katalog `functions/` jest wykrywany przez Pages CI i Wrangler.
`public/_routes.json` ogranicza wywołania funkcji do adresów bez prefiksu i `/language`;
pozostałe strony i zasoby pozostają statyczne. Samo wgranie `out/` na hosting bez
Pages Functions wyświetli tłumaczenia, ale nie uruchomi automatyki i zapisu wyboru.

Implementacja korzysta z [geodanych żądania Cloudflare](https://developers.cloudflare.com/workers/runtime-apis/request/)
i [tras Pages Functions](https://developers.cloudflare.com/pages/functions/routing/).
Do kontroli całego przepływu lokalnie służy `npm run preview`; sam `next dev` nie
obsługuje endpointu `/language` ani middleware Cloudflare.

# ITORG — itorg.pl

Witryna **ITORG Krzysztof Radzimski**: oprogramowanie dla administracji publicznej,
automatyzacja, obieg dokumentów, integracje i tworzenie narzędzi AI. Strona
główna przedstawia firmę, usługi i współpracę. Katalog oraz opisy produktów
znajdują się na osobnych podstronach we wszystkich ośmiu językach.

Podstrona **EAP Legislator** przedstawia edytor, wersję dla administracji rządowej
oraz dodatek „Finanse Publiczne” do importu danych z Besti@, z odnośnikami do
[EAP Legislator](https://abcpro.pl/eap-legislator),
[Legislator GOV](https://abcpro.pl/legislator-gov) i
[dodatku Besti@](https://abcpro.pl/dodatek-bestia).

ITORG rozwija EAP Legislator dla ABC PRO Sp. z o.o. i współpracuje przy rozwoju
platformy [Orion AI](https://orion.abcpro.pl/). Katalog zawiera również opisy
systemów partnera: Baza Aktów Własnych, ABC ANON i ABC Kancelaria.

Next.js 15 (App Router), React 19, TypeScript i własny CSS. Eksport statyczny do
`out/`, hosting na Cloudflare Pages. Bez backendu, zewnętrznych fontów i usług
automatycznego tłumaczenia.

## Wersje językowe

Każda wersja ma przetłumaczoną stronę główną, katalog, pięć opisów produktów,
politykę prywatności, panel cookie, nawigację, etykiety dostępności i metadane SEO.

| Język | Strona główna | Polityka prywatności |
| --- | --- | --- |
| Polski | `/` | `/polityka-prywatnosci/` |
| Angielski | `/en/` | `/en/privacy/` |
| Niemiecki | `/de/` | `/de/privacy/` |
| Hiszpański | `/es/` | `/es/privacy/` |
| Francuski | `/fr/` | `/fr/privacy/` |
| Rosyjski | `/ru/` | `/ru/privacy/` |
| Czeski | `/cs/` | `/cs/privacy/` |
| Słowacki | `/sk/` | `/sk/privacy/` |

Katalog: `/produkty/` po polsku i `/{locale}/products/` w pozostałych językach.
Pod nim znajdują się podstrony `eap-legislator/`, `orion-ai/`,
`baza-aktow-wlasnych/`, `abc-anon/` i `abc-kancelaria/`. Łącznie eksport obejmuje
64 strony. Wersja GOV i dodatek Besti@ są opisane na podstronie EAP Legislator.

Menu: **Usługi, Produkty, O firmie, Współpraca, Kontakt**. Pozycja Produkty
prowadzi do katalogu, a pozostałe do sekcji strony głównej w bieżącym języku.

Przełącznik zachowuje rodzaj strony i konkretny produkt. Język wynika z adresu, bez przekierowania
według przeglądarki i bez dodatkowego cookie. Atrybut `html[lang]` jest zapisany
w HTML podczas kompilacji. Każda strona ma własny adres kanoniczny i komplet
odnośników `hreflang`; wszystkie wersje są w `sitemap.xml`.

## Edycja treści

- [content/site.ts](content/site.ts): teksty polskie oraz wspólne dane firmy.
- [content/locales](content/locales): pełne słowniki pozostałych języków, sprawdzane
  przez TypeScript względem polskiej struktury.
- [content/legal](content/legal): teksty polityk prywatności i panelu cookie.
- [lib/locales.ts](lib/locales.ts): lista języków, ich nazwy i adresy.
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

Testy sprawdzają wszystkie 64 wyeksportowane strony, języki, metadane,
przełączniki zachowujące produkt, kolejność menu, odnośniki, kotwice,
strukturę dostępności i kontrast kolorów.
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
serwera Next.js ani funkcji Cloudflare.

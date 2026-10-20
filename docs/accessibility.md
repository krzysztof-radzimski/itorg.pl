# Dostępność — WCAG 2.2 AA

Stan kontroli: 20 października 2026 r. Zakres obejmuje stronę główną, katalog,
pięć podstron produktów i politykę prywatności w językach pl, en, de, es, fr,
ru, cs i sk (64 strony), a także panel cookie, menu mobilne i przełącznik
języków. Celem jest poziom AA standardu
[WCAG 2.2](https://www.w3.org/TR/WCAG22/).

Szczegóły EAP Legislator, w tym wersja dla administracji rządowej i dodatek
Besti@, są na jego podstronie. Osobne podstrony mają Orion AI, Baza Aktów
Własnych, ABC ANON i ABC Kancelaria. Testy eksportu sprawdzają rolę ITORG,
odnośniki do ABC PRO, kolejność menu i przełącznik zachowujący wybrany produkt.

## Wdrożone rozwiązania

- Właściwy `html[lang]` już w statycznym HTML; nazwy języków mają własne `lang`
  i `hreflang`. Przetłumaczone tytuły stron oraz etykiety kontrolek.
- Jeden nagłówek h1, logiczna hierarchia nagłówków, nazwane regiony, listy,
  opisowa tabela z nagłówkami kolumn i wierszy. Dekoracyjne obrazy i SVG
  pomijane przez technologie asystujące.
- Link pomijający nagłówek prowadzi do całej treści głównej, łącznie z hero.
  Cel może otrzymać fokus. Nagłówek pozostaje w zwykłym przepływie dokumentu,
  dzięki czemu nie zasłania kontrolki z fokusem.
- Widoczna obwódka fokusu, większe cele interakcji, podkreślone linki w treści,
  odpowiedni kontrast tekstów i obramowań w obu motywach.
- Menu i języki używają `details/summary`: obsługa klawiatury także bez JS.
  Skrypt dodaje Escape, zamknięcie po opuszczeniu menu i przeniesienie fokusu
  do sekcji wybranej z menu mobilnego.
- Panel cookie używa `dialog.showModal()`: tło jest nieaktywne również dla
  fokusu, cykl Tab pozostaje w panelu, Escape i widoczny przycisk zamykają panel.
  Początkowy fokus trafia na tytuł, a po zamknięciu wraca do wywołującego
  przycisku. Zamknięcie bez decyzji nie zapisuje zgody.
- Odrzucenie, akceptacja i zapis wybranych kategorii są osobnymi akcjami.
  Stan opcjonalnych przełączników jest odtwarzany przy ponownym otwarciu;
  kategoria niezbędna jest opisana i zablokowana.
- Układ dostosowuje się do 320 px, powiększenia tekstu i zmiany odstępów.
  Długie dane kontaktowe mogą się zawijać. Modal oraz rozwinięte menu mają
  własne przewijanie, gdy ich zawartość przekracza wysokość ekranu.
- Usunięte ciągłe animacje i ukrywanie treści do czasu wykonania JS.
  Pozostałe przejścia respektują `prefers-reduced-motion`; dodatkowe style
  obsługują `forced-colors`.

Zastosowano wskazówki W3C dotyczące
[widoczności elementu z fokusem](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html),
[rozmiaru celu](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
oraz [dialogu modalnego](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

## Wyniki automatyczne

Eksport produkcyjny Next.js i TypeScript zakończyły się poprawnie. `npm test`:
**69 testów zakończonych powodzeniem**. Sprawdzono eksport, języki, alternatywne
adresy, kanoniczne adresy polityk, linki wewnętrzne i kotwice, strukturę ARIA,
tabele, komplet przełączników cookie, mapę witryny i kontrast tokenów.

W Podglądzie działał rzeczywisty eksport na lokalnym serwerze Cloudflare Pages
z nagłówkami `public/_headers`. Użyto axe-core 4.14.0 z tagami `wcag2a`,
`wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa` i `best-practice`.

| Scenariusz | Warianty | Wynik |
| --- | ---: | --- |
| 64 strony × szerokości 320 i 1280 px × oba motywy | 256 | 0 zgłoszonych naruszeń, brak przewijania poziomego |
| Panel cookie: 8 języków × oba motywy, 320 px | 16 | 0 naruszeń, fokus na tytule i poprawny powrót, brak poziomego przepełnienia panelu |
| 64 strony, 320 px, tekst 200% oraz zwiększone odstępy | 64 | 0 naruszeń, brak przewijania poziomego |

Razem **336 wariantów**. Szerokość testowano w rzeczywistym dokumencie iframe
o podanym rozmiarze, wewnątrz Podglądu. Motywy wymuszano przez przełączenie
reguły CSS `prefers-color-scheme`, sprawdzając końcowy kolor tła. Zmienione
odstępy: interlinia 1,5, odstęp liter 0,12 em, wyrazów 0,16 em i akapitów 2 em.

Dodatkowo sprawdzono w DOM działającej aplikacji otwieranie menu, Escape,
przejście do sekcji z przeniesieniem fokusu, nieaktywność tła modalu, zawijanie
Tab/Shift+Tab, natywne anulowanie dialogu, powrót fokusu oraz zapis i odtworzenie
zgody, odmowy i wyboru samych kategorii analitycznych. Testy obsługi klawiszy
wywoływały zdarzenia programowo; nie zastępują testu fizyczną klawiaturą.
Kliknięciem w Podglądzie potwierdzono przejście z `/fr/privacy/` do
`/de/privacy/`, wraz ze zmianą języka HTML, nagłówka i tytułu dokumentu.

Po rozdzieleniu treści potwierdzono kliknięciami przejście z menu mobilnego
do `/produkty/`, wejście do `/produkty/eap-legislator/`, zmianę języka na
`/de/products/eap-legislator/` oraz powrót przez Kontakt do `/de/#kontakt`.
Zmiana języka zachowała produkt, a powrót ustawił fokus na sekcji kontaktowej.

W osobnym dokumencie 320 px z usuniętymi skryptami i blokadą ich wykonania
potwierdzono widoczność francuskiej treści oraz działanie natywnego menu.
Na pierwszej wizycie zamknięcie panelu nie zapisywało zgody; po przeładowaniu
panel pojawiał się ponownie, a odmowa zapisywała wyłącznie kategorię niezbędną.

## Granice kontroli

Axe oznacza część ocen kontrastu jako `incomplete` ze względu na gradienty
i dekoracyjne warstwy. Nie są one liczone jako automatycznie potwierdzone.
Testy kontrastu osobno sprawdzają kolory obu motywów i gradient przycisków.
Dla hero wyliczają zachowawczą górną granicę jasności: wszystkie maksima aurory,
przecięcie linii siatki i minimalne przyciemnienie tła. Teksty zachowują w tym
wariancie co najmniej 4,5:1. Wygląd strony oraz sekcji Legislator i Orion
obejrzano na zrzutach.

Nie wykonano pełnego audytu eksperckiego z czytnikiem ekranu ani testów na
wszystkich kombinacjach urządzeń i technologii asystujących. Do manualnego
odbioru pozostają przede wszystkim wymowa i kolejność odczytu w VoiceOver,
pełne przejście fizyczną klawiaturą, powiększenie przeglądarki 400% oraz
systemowy tryb kolorów wymuszonych. Wyniki tej kontroli nie są certyfikatem
pełnej zgodności z WCAG.

## Powtórzenie kontroli

Po `npm run build` uruchom `npm run typecheck` i `npm test`.
Plik `tests/browser-audit.js` zawiera skończony harness do lokalnego Podglądu.
Na czas audytu skopiuj go do `out/audit.qa.js`, a
`node_modules/axe-core/axe.min.js` do `out/axe.qa.js`. Wczytaj harness w lokalnej
stronie i wywołaj np.:

```js
await itorgAudit({ path: "/de/privacy/", width: 320, dark: true });
await itorgAudit({ path: "/fr/", width: 320, spacing: true, scale: 2 });
await itorgAudit({ path: "/ru/", width: 320, modal: true });
```

Harness zmienia wyłącznie lokalny widok testowy. Przeładowanie przywraca stronę.
Po kontroli usuń oba pliki `*.qa.js` z eksportu. Nie należą do aplikacji ani
do zasobów publikowanych; ponowna kompilacja również je usuwa.

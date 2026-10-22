# Dostępność — WCAG 2.2 AA

Stan kontroli historycznej: 20 października 2026 r. Zakres obejmuje stronę główną, katalog,
pięć podstron produktów i politykę prywatności w językach pl, en, de, es, fr,
ru, cs i sk (64 strony), a także panel cookie, menu mobilne i przełącznik
języków. Celem jest poziom AA standardu
[WCAG 2.2](https://www.w3.org/TR/WCAG22/).

Szczegóły EAP Legislator, w tym wersja dla administracji rządowej i dodatek
Besti@, są na jego podstronie. Osobne podstrony mają Orion AI, Baza Aktów
Własnych, ABC ANON i ABC Kancelaria. Testy eksportu sprawdzają rolę ITORG,
odnośniki do ABC PRO, kolejność menu i przełącznik zachowujący wybrany produkt.

## Rozszerzenie językowe: 22 października 2026 r.

Witryna obsługuje obecnie 27 języków: wszystkie 24 języki urzędowe UE oraz
białoruski, rosyjski i ukraiński. Eksport obejmuje 243 strony językowe oraz
dotychczasowe materiały wsparcia i prywatności NetUnstick w PL/EN/ES.
Kompilacja, TypeScript i **265 testów** zakończyły się poprawnie. Testy obejmują
również reguły doboru języka, pierwszeństwo wyboru ręcznego, poprawność wszystkich
celów przełącznika i brak pętli przekierowań.

W lokalnym Podglądzie Cloudflare Pages sprawdzono axe-core 4.14.0:

| Scenariusz | Warianty | Wynik |
| --- | ---: | --- |
| Strony główne 17 nowych języków, 320 px, wybrany motyw jasny lub ciemny | 17 | Brak poziomego przewijania i zgłoszonych naruszeń |
| NetUnstick w 17 nowych językach, 320 px, motyw ciemny | 17 | Brak poziomego przewijania i zgłoszonych naruszeń |
| Polityki EL i MT, 320 px, w tym modal cookie EL | 2 | Brak naruszeń; poprawny powrót fokusu po zamknięciu modalu |
| Strona główna EL i EAP Legislator GA, 1200 px | 2 | Brak poziomego przewijania i zgłoszonych naruszeń |

Razem **38 wariantów**. Szerokości pochodzą z rzeczywistych dokumentów iframe
w Podglądzie, nie z symulatora iPhone'a. Zachowano metody pomiaru i zakres tagów
axe opisane w historycznej kontroli poniżej. Obejrzano też układ mobilny greckiej
strony głównej, włoskiej prezentacji NetUnstick i przewijaną listę 27 języków.

Harness menu sprawdził **26 warunków w czterech scenariuszach** (320 i 402 px):
Escape, opuszczanie menu, kliknięcie poza nim, brak `relatedTarget` spotykany
w Safari, zmianę języka z zachowaniem podstrony oraz przejście do sekcji strony.
Wszystkie warunki przeszły. To programowa regresja DOM, nie fizyczne stuknięcia w iOS.
Rzeczywistymi kliknięciami w Podglądzie potwierdzono EL → IT na NetUnstick,
pamiętanie IT przy powrocie na `/`, respektowanie jawnego adresu FI i wybór PL
na tej samej podstronie ABC ANON. Powrót na `/` po wyborze PL nie przekierował ponownie.

Geolokalizację krajów weryfikowano kontrolowanymi danymi żądań w testach funkcji.
Nie były to wizyty z zagranicznych sieci. Automatyka nie nadpisuje jawnych adresów
z prefiksem, a ręczny wybór działa przez zwykłe odnośniki i endpoint Pages także bez JS.

Prezentacja NetUnstick ma rzeczywiste zrzuty wydania Mac App Store we wszystkich
24 językach UE. Nowe 17 plików uzyskano z uruchomionej aplikacji macOS przez
`abc-desktop` i natywne przechwycenie okna. Każdy plik ma 1800 × 1208 px.
Tymczasowe ustawienie języka aplikacji usunięto po wykonaniu zrzutów.

Wyniki historyczne poniżej dotyczą wcześniejszej wersji i nie oznaczają
ponowienia całej ówczesnej macierzy 336 wariantów dla 27 języków.

## Wdrożone rozwiązania

- Właściwy `html[lang]` już w statycznym HTML; nazwy języków mają własne `lang`
  i `hreflang`. Przetłumaczone tytuły stron oraz etykiety kontrolek.
- Jeden nagłówek h1, logiczna hierarchia nagłówków, nazwane regiony, listy,
  opisowa tabela z nagłówkami kolumn i wierszy. Dekoracyjne obrazy i SVG
  pomijane przez technologie asystujące.
- Link pomijający nagłówek prowadzi do całej treści głównej, łącznie z hero.
  Cel może otrzymać fokus. Nagłówek pozostaje w zwykłym przepływie dokumentu,
  dzięki czemu nie zasłania kontrolki z fokusem.
- Widoczna obwódka fokusu, większe cele interakcji oraz odpowiedni kontrast
  tekstów i obramowań w obu motywach. Łącza akcji mają strzałki, a nawigacja
  własne regiony i wyróżnienie aktywnej pozycji. Rozpoznanie łącza nie opiera
  się wyłącznie na kolorze. Kafel produktu jest jednym linkiem, którego
  nazwa dostępna zawiera widoczną treść; nie zawiera zagnieżdżonych kontrolek.
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
Testy sprawdzają również obecność lokalnych grafik w eksporcie, kontrast
przycisków w stanie zwykłym i po najechaniu oraz kontrast obwódki fokusu.

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
Pomiary kontrastu następują po zakończeniu skończonych przejść CSS wywołanych
przełączeniem motywu. Reguły axe nie są wyłączane.

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

Axe może oznaczać część ocen kontrastu jako `incomplete`. Takich ocen nie
liczymy jako automatycznie potwierdzonych. Testy kontrastu osobno sprawdzają
kolory obu motywów, zwykły i aktywny kolor przycisków oraz fokus na jasnych
i ciemnych powierzchniach. Hero ma jednolite tło, a jego dekoracja zajmuje
osobną kolumnę; usunięto aurorę, siatkę i gradientowe litery. Znaki produktów
są oficjalnymi plikami SVG, hostowanymi lokalnie. Sąsiadują z tekstowymi nazwami,
więc dekoracyjne obrazy nie powtarzają tych samych nazw w odczycie.

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

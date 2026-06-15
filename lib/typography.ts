// Pomocniki typograficzne i czasowe — czyste funkcje, bezpieczne po stronie
// serwera (używane w komponentach serwerowych, więc wartości „roku" są
// wyliczane w czasie buildu i zapisywane w statycznym HTML).

const NBSP = " ";

// „Sklejanie sierotek": jednoliterowe spójniki (i o w z a u) łączymy z kolejnym
// słowem twardą spacją, aby nigdy nie kończyły wiersza. Lookbehind zerowej
// szerokości nie konsumuje poprzedniej granicy — dzięki temu sąsiadujące
// sierotki („o i z Pisma") są obsługiwane wszystkie, a nie co druga.
const ORPHAN_RE = /(?<=^|[\s(„"])([aiouwzAIOUWZ])[ \t]+/g;

export function fixOrphans(text: string): string {
  if (!text) return text;
  return text.replace(ORPHAN_RE, (_m, letter) => `${letter}${NBSP}`);
}

// Bieżący rok (wyliczany w czasie renderu/buildu).
export function currentYear(): number {
  return new Date().getFullYear();
}

// Liczba pełnych lat działalności od podanego roku założenia.
export function yearsSince(foundedYear: number): number {
  return Math.max(0, currentYear() - foundedYear);
}

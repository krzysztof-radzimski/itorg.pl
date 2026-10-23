// Stałe adresy prezentacji, wsparcia i prywatności NetUnstick.
// Zachowujemy ich ścieżki i język niezależnie od geolokalizacji oraz cookie.
export const netunstickStoreUrls = {
  pl: {
    marketing: "https://itorg.pl/NetUnstick/",
    support: "https://itorg.pl/NetUnstick/pl/support",
    privacy: "https://itorg.pl/NetUnstick/pl/privacy",
  },
  en: {
    marketing: "https://itorg.pl/en/NetUnstick/",
    support: "https://itorg.pl/NetUnstick/en/support",
    privacy: "https://itorg.pl/NetUnstick/en/privacy",
  },
  es: {
    marketing: "https://itorg.pl/es/NetUnstick/",
    support: "https://itorg.pl/NetUnstick/es/support",
    privacy: "https://itorg.pl/NetUnstick/es/privacy",
  },
};

const normalize = (path) => path.replace(/\/index\.html$/, "/").replace(/\.html$/, "").replace(/\/$/, "");
const storePaths = new Set(Object.values(netunstickStoreUrls).flatMap((pages) => Object.values(pages).map((url) => normalize(new URL(url).pathname))));

export function isNetunstickStorePath(pathname) {
  return storePaths.has(normalize(pathname));
}

import type { Metadata, Viewport } from "next";
import { getSite } from "@/content/translations";
import { homePath, privacyPath, locales, openGraphLocales, type Locale } from "./locales";

export const viewport: Viewport = {
  width: "device-width", initialScale: 1, viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export function pageMetadata(locale: Locale, privacy = false): Metadata {
  const site = getSite(locale);
  const path = privacy ? privacyPath : homePath;
  const title = privacy ? `${site.privacy.title} — ${site.brand.legalName}` : site.seo.title;
  const description = privacy ? site.privacy.description : site.seo.description;
  return {
    metadataBase: new URL(site.seo.url), title, description,
    applicationName: site.brand.legalName, authors: [{ name: "Krzysztof Radzimski" }],
    alternates: {
      canonical: path(locale),
      languages: { ...Object.fromEntries(locales.map((language) => [language, path(language)])), "x-default": path("pl") },
    },
    openGraph: {
      type: "website", locale: openGraphLocales[locale],
      alternateLocale: locales.filter((language) => language !== locale).map((language) => openGraphLocales[language]),
      url: path(locale), siteName: site.brand.legalName, title, description,
      images: [{ url: "/logo.svg", width: 512, height: 512, alt: site.brand.name }],
    },
    twitter: { card: "summary", title, description, images: ["/logo.svg"] },
    icons: { icon: "/logo.svg", apple: "/logo.svg" },
    robots: { index: true, follow: true },
  };
}

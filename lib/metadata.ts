import type { Metadata, Viewport } from "next";
import { getSite } from "@/content/translations";
import { getNetUnstickScreenshot, netunstick } from "@/content/netunstick";
import { pagePath, locales, openGraphLocales, isProductId, type Locale, type PageId } from "./locales";
import { getProduct } from "./products";

export const viewport: Viewport = {
  width: "device-width", initialScale: 1, viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export function pageMetadata(locale: Locale, page: PageId = "home"): Metadata {
  const site = getSite(locale);
  const path = (language: Locale) => pagePath(language, page);
  const product = isProductId(page) ? getProduct(site, page) : undefined;
  const title = page === "privacy" ? `${site.privacy.title}: ${site.brand.legalName}`
    : page === "netunstick" ? `NetUnstick: ${netunstick[locale].tagline}`
    : page === "products" ? `${site.products.title}: ${site.brand.name}`
    : product ? `${product.name}: ${site.brand.name}` : site.seo.title;
  const description = page === "privacy" ? site.privacy.description
    : page === "netunstick" ? netunstick[locale].description
    : page === "products" ? site.products.intro : product ? product.summary : site.seo.description;
  const image = page === "netunstick"
    ? { url: getNetUnstickScreenshot(locale).src, width: 1800, height: 1208, alt: netunstick[locale].screenshot }
    : { url: "/logo.svg", width: 512, height: 512, alt: site.brand.name };
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
      images: [image],
    },
    twitter: { card: page === "netunstick" ? "summary_large_image" : "summary", title, description, images: [image.url] },
    icons: { icon: page === "netunstick" ? "/NetUnstick/icon.png" : "/logo.svg", apple: page === "netunstick" ? "/NetUnstick/icon.png" : "/logo.svg" },
    robots: { index: true, follow: true },
  };
}

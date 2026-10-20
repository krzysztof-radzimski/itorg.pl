import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { homePath, privacyPath, locales } from "@/lib/locales";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [homePath, privacyPath].flatMap((path) => {
    const languages = Object.fromEntries(locales.map((locale) => [locale, `${site.seo.url}${path(locale)}`]));
    return locales.map((locale) => ({ url: languages[locale], alternates: { languages } }));
  });
}

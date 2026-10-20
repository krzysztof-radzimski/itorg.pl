import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { pagePath, pages, locales } from "@/lib/locales";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) => {
    const languages = Object.fromEntries(locales.map((locale) => [locale, `${site.seo.url}${pagePath(locale, page)}`]));
    return locales.map((locale) => ({ url: languages[locale], alternates: { languages } }));
  });
}

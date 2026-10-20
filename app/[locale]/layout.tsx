import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/locales";
import SiteDocument from "@/components/SiteDocument";
export { viewport } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.filter((locale) => locale !== "pl").map((locale) => ({ locale }));
}

export default async function LocalizedLayout({ children, params }: {
  children: React.ReactNode; params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "pl") notFound();
  return <SiteDocument locale={locale}>{children}</SiteDocument>;
}

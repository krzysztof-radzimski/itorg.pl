import { notFound } from "next/navigation";
import NetUnstickPage from "@/components/NetUnstickPage";
import { isLocale } from "@/lib/locales";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "pl") notFound();
  return pageMetadata(locale, "netunstick");
}

export default async function NetUnstick({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "pl") notFound();
  return <NetUnstickPage locale={locale} />;
}

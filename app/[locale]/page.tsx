import { notFound } from "next/navigation";
import { isLocale } from "@/lib/locales";
import { pageMetadata } from "@/lib/metadata";
import HomePage from "@/components/HomePage";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale);
}
export default async function LocalizedHome({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HomePage locale={locale} />;
}

import { notFound } from "next/navigation";
import { isLocale } from "@/lib/locales";
import { pageMetadata } from "@/lib/metadata";
import PrivacyPage from "@/components/PrivacyPage";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale, true);
}
export default async function LocalizedPrivacy({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PrivacyPage locale={locale} />;
}

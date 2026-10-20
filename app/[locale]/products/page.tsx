import { notFound } from "next/navigation";
import ProductsPage from "@/components/ProductsPage";
import { isLocale } from "@/lib/locales";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return pageMetadata(locale, "products");
}
export default async function LocalizedProducts({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ProductsPage locale={locale} />;
}

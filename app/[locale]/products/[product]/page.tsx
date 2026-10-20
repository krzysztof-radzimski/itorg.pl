import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { isLocale, isProductId, productIds } from "@/lib/locales";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() { return productIds.map((product) => ({ product })); }

type Props = { params: Promise<{ locale: string; product: string }> };
export async function generateMetadata({ params }: Props) {
  const { locale, product } = await params;
  if (!isLocale(locale) || !isProductId(product)) notFound();
  return pageMetadata(locale, product);
}
export default async function LocalizedProduct({ params }: Props) {
  const { locale, product } = await params;
  if (!isLocale(locale) || !isProductId(product)) notFound();
  return <ProductPage locale={locale} product={product} />;
}

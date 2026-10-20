import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { isProductId, productIds } from "@/lib/locales";
import { pageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() { return productIds.map((product) => ({ product })); }

type Props = { params: Promise<{ product: string }> };
export async function generateMetadata({ params }: Props) {
  const { product } = await params;
  if (!isProductId(product)) notFound();
  return pageMetadata("pl", product);
}
export default async function Product({ params }: Props) {
  const { product } = await params;
  if (!isProductId(product)) notFound();
  return <ProductPage locale="pl" product={product} />;
}

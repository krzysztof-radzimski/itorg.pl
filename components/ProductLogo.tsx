import type { ProductId } from "@/lib/locales";

const sources: Record<ProductId, string> = {
  "eap-legislator": "legislator",
  "orion-ai": "orion",
  "baza-aktow-wlasnych": "baw",
  "abc-anon": "anon",
  "abc-kancelaria": "kancelaria",
};

export default function ProductLogo({ product, eager = false }: { product: ProductId; eager?: boolean }) {
  return (
    <span className="product-logo" aria-hidden="true">
      <img src={`/products/${sources[product]}.svg`} alt="" width={72} height={72} loading={eager ? "eager" : "lazy"} />
    </span>
  );
}

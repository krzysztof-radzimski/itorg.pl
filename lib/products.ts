import { legislatorUrls, type Site } from "@/content/site";
import type { ProductId } from "./locales";

interface ProductInfo {
  id: ProductId;
  name: string;
  summary: string;
  href: string;
  cta: string;
}

export function getProducts(site: Site): ProductInfo[] {
  return [
    { id: "eap-legislator", name: site.legislator.title, summary: site.legislator.lead, href: legislatorUrls.editor, cta: site.legislator.editions[0].cta },
    { id: "orion-ai", name: site.orion.title, summary: site.orion.lead, href: "https://orion.abcpro.pl/", cta: site.orion.cta },
    ...site.partner.products.slice(1).map((product, index) => ({
      id: (["baza-aktow-wlasnych", "abc-anon", "abc-kancelaria"] as const)[index],
      name: product.name, summary: product.desc,
      href: "https://abcpro.pl/", cta: site.ui.partnerCta,
    })),
  ];
}

export function getProduct(site: Site, id: ProductId) {
  return getProducts(site).find((product) => product.id === id)!;
}

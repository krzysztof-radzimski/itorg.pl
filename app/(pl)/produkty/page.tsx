import ProductsPage from "@/components/ProductsPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("pl", "products");
export default function Products() { return <ProductsPage locale="pl" />; }

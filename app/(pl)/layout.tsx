import SiteDocument from "@/components/SiteDocument";
export { viewport } from "@/lib/metadata";

export default function PolishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="pl">{children}</SiteDocument>;
}

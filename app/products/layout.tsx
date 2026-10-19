import type { Metadata } from "next";
import { DEFAULT_OPEN_GRAPH, SITE_NAME } from "../site";

// /products/page.tsx is a client component (filters), so its metadata lives here.
// /products/[slug] overrides every field below with its own values. The title must
// stay an object with a template: a plain string would drop the "| RealWaves Packs"
// suffix from every product page below this layout.
const title = "Non-Woven D-Cut, U-Cut & Box Bags in Raipur";
const description =
  "Non-woven D-Cut, U-Cut, Loop Handle, Box and BOPP bags in standard sizes with custom printing. Made in Raipur, Chhattisgarh by RealWaves Packs.";

export const metadata: Metadata = {
  title: { default: title, template: `%s | ${SITE_NAME}` },
  description,
  alternates: { canonical: "/products" },
  openGraph: { ...DEFAULT_OPEN_GRAPH, title, description, url: "/products" },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

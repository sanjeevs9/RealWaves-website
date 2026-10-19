import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Products, categoryNames, categoryDescriptions } from "../../products";
import { DEFAULT_OPEN_GRAPH, SITE_NAME } from "../../site";
import ProductDetailClient from "./ProductDetailClient";
import JsonLd, { breadcrumbs } from "../../components/JsonLd";
import { bagTypeForCategory } from "../../bagTypes";

// Unknown slugs return a real 404 instead of a 200 "not found" page (a soft 404).
export const dynamicParams = false;

export async function generateStaticParams() {
  return Products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = Products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  const bagType = bagTypeForCategory(product.category[0]);
  const categoryLabel = bagType ? `Non-Woven ${bagType.shortName} Bag` : `${categoryNames[product.category[0]] || product.category[0]} Non-Woven Bag`;
  const description =
    categoryDescriptions[product.category[0]] ||
    `Premium ${product.name} non-woven bag by ${SITE_NAME}. Eco-friendly, reusable, and fully customizable.`;

  const dimensions = product.dimensions
    ? ` Size: ${product.dimensions.width}" × ${product.dimensions.height}"${product.dimensions.Gusset ? ` × ${product.dimensions.Gusset}"` : ""}.`
    : "";

  const title = `${product.name} – ${categoryLabel}, Raipur`;

  return {
    title,
    description: `${description}${dimensions} Custom printing available. Made in Raipur by ${SITE_NAME}.`,
    openGraph: {
      ...DEFAULT_OPEN_GRAPH,
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `/products/${slug}`,
      images: [{ url: product.image.src, alt: product.name }],
    },
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = Products.find((p) => p.slug === slug);
  if (!product) notFound();
  const bagType = bagTypeForCategory(product.category[0]);
  return (
    <>
      <JsonLd
          data={breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            ...(bagType ? [{ name: bagType.name, path: `/non-woven-bags/${bagType.slug}` }] : []),
            { name: product.name, path: `/products/${slug}` },
          ])}
        />
      <ProductDetailClient slug={slug} />
    </>
  );
}

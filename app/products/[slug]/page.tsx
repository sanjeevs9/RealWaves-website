import { Metadata } from "next";
import { Products, categoryNames, categoryDescriptions } from "../../products";
import ProductDetailClient from "./ProductDetailClient";

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

  const categoryLabel = categoryNames[product.category[0]] || product.category[0];
  const description =
    categoryDescriptions[product.category[0]] ||
    `Premium ${product.name} non-woven bag by RealWaves. Eco-friendly, reusable, and fully customizable.`;

  const dimensions = product.dimensions
    ? ` Size: ${product.dimensions.width}" × ${product.dimensions.height}"${product.dimensions.Gusset ? ` × ${product.dimensions.Gusset}"` : ""}.`
    : "";

  return {
    title: `${product.name} - ${categoryLabel} Non-Woven Bag`,
    description: `${description}${dimensions} Custom branding available. Order from RealWaves.`,
    openGraph: {
      title: `${product.name} - ${categoryLabel} Bag | RealWaves`,
      description,
      type: "website",
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
  return <ProductDetailClient slug={slug} />;
}

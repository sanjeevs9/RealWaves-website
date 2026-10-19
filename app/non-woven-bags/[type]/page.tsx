import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BagTypes, bagTypeBySlug, productsForBagType } from "../../bagTypes";
import { BUSINESS, DEFAULT_OPEN_GRAPH, SITE_URL } from "../../site";
import JsonLd, { breadcrumbs } from "../../components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return BagTypes.map((t) => ({ type: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const bag = bagTypeBySlug(type);
  if (!bag) return {};
  const path = `/non-woven-bags/${bag.slug}`;
  return {
    title: bag.title,
    description: bag.description,
    alternates: { canonical: path },
    openGraph: {
      ...DEFAULT_OPEN_GRAPH,
      title: bag.title,
      description: bag.description,
      url: path,
      images: [{ url: bag.image.src, alt: bag.name }],
    },
  };
}

const phoneDisplay = "+91 90099 90000";

export default async function BagTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const bag = bagTypeBySlug(type);
  if (!bag) notFound();

  const path = `/non-woven-bags/${bag.slug}`;
  const products = productsForBagType(bag);
  const sizes = Array.from(
    new Set(
      products
        .filter((p) => p.dimensions)
        .map((p) => {
          const d = p.dimensions!;
          return `${d.width} × ${d.height}${d.Gusset ? ` × ${d.Gusset}` : ""}`;
        })
    )
  );
  const others = BagTypes.filter((t) => t.slug !== bag.slug);

  return (
    <div className="bg-cream min-h-screen">
      <JsonLd
        data={breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: bag.name, path },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: bag.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_URL}${path}`,
          name: bag.h1,
          description: bag.description,
          about: { "@type": "Thing", name: `Non-woven ${bag.name}` },
          provider: { "@id": `${SITE_URL}/#business` },
        }}
      />

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-sage">
          <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>&gt;</span>
          <Link href="/products" className="hover:text-charcoal transition-colors">Products</Link>
          <span>&gt;</span>
          <span className="text-charcoal font-medium">{bag.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.12] tracking-tight">
              {bag.h1}
            </h1>
            <div className="mt-6 space-y-4 text-sage text-sm sm:text-base leading-relaxed">
              {bag.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a
                href={`tel:${BUSINESS.telephone.replace(/-/g, "")}`}
                className="bg-forest text-white font-medium rounded-xl px-6 py-3.5 hover:bg-forest-light transition-all duration-300 text-sm"
              >
                Call {phoneDisplay}
              </a>
              <a
                href={`https://wa.me/919009990000?text=${encodeURIComponent(`Hi, I'd like a quote for non-woven ${bag.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#22c55e] text-white font-medium rounded-xl px-6 py-3.5 transition-colors text-sm"
              >
                WhatsApp for a quote
              </a>
            </div>
          </div>
          <div className="bg-[#EEF2F9] rounded-2xl flex items-center justify-center p-8 sm:p-12 aspect-square">
            <Image
              src={bag.image}
              alt={`Non-woven ${bag.name} made by RealWaves Packs, Raipur`}
              width={600}
              height={600}
              priority
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Specs + uses */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 ring-1 ring-black/[0.04]">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-4">At a glance</h2>
            <div className="divide-y divide-gray-100">
              {bag.highlights.map((h) => (
                <div key={h.label} className="flex items-start justify-between gap-6 py-3">
                  <span className="text-sm text-sage">{h.label}</span>
                  <span className="text-sm font-medium text-charcoal text-right">{h.value}</span>
                </div>
              ))}
              {sizes.length > 0 && (
                <div className="flex items-start justify-between gap-6 py-3">
                  <span className="text-sm text-sage">Sizes we&apos;ve made (inches)</span>
                  <span className="text-sm font-medium text-charcoal text-right">{sizes.join(", ")}</span>
                </div>
              )}
              <div className="flex items-start justify-between gap-6 py-3">
                <span className="text-sm text-sage">Price and MOQ</span>
                <span className="text-sm font-medium text-charcoal text-right">On request, by size and quantity</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 ring-1 ring-black/[0.04]">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-4">Who uses {bag.name}</h2>
            <ul className="space-y-2.5">
              {bag.bestFor.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm sm:text-base text-sage">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0992C2] flex-shrink-0 mt-2" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-sage leading-relaxed">
              Made at our factory in Saddu, Raipur, Chhattisgarh and delivered across India.
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      {products.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-6">
            {bag.name} we&apos;ve made for our clients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="block group">
                <div className="bg-white rounded-xl flex items-center justify-center p-5 aspect-square mb-3 ring-1 ring-black/[0.04] group-hover:shadow-md transition-all duration-300">
                  <Image
                    src={p.image}
                    alt={`${p.name} – custom printed non-woven ${bag.shortName} bag`}
                    width={200}
                    height={200}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-charcoal group-hover:text-[#0992C2] transition-colors leading-snug">
                  {p.name}
                </h3>
                {p.dimensions && (
                  <p className="text-[10px] sm:text-xs text-sage mt-1">
                    {p.dimensions.width}&quot; &times; {p.dimensions.height}&quot;
                    {p.dimensions.Gusset ? ` × ${p.dimensions.Gusset}"` : ""}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-6">
          {bag.name}: frequently asked questions
        </h2>
        <div className="space-y-3">
          {bag.faqs.map((f) => (
            <details key={f.q} className="group bg-white rounded-xl ring-1 ring-black/[0.04] px-5 py-4" open>
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-charcoal">
                <h3>{f.q}</h3>
                <span className="text-sage group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm sm:text-base text-sage leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Other types */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <h2 className="font-display text-lg sm:text-xl font-bold text-charcoal mb-4">Other non-woven bags we make</h2>
        <div className="flex flex-wrap gap-3">
          {others.map((t) => (
            <Link
              key={t.slug}
              href={`/non-woven-bags/${t.slug}`}
              className="px-4 py-2.5 bg-white rounded-lg ring-1 ring-black/[0.06] text-sm font-medium text-charcoal hover:text-[#0992C2] hover:ring-[#0992C2]/30 transition-colors"
            >
              {t.name}
            </Link>
          ))}
          <Link
            href="/products"
            className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#0B2D72] hover:text-[#0992C2] transition-colors"
          >
            Full catalogue →
          </Link>
        </div>
      </section>
    </div>
  );
}

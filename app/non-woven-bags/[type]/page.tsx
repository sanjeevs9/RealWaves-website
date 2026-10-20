import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BagTypes, bagTypeBySlug, productsForBagType } from "../../bagTypes";
import { BUSINESS, DEFAULT_OPEN_GRAPH, SITE_URL, whatsappUrl } from "../../site";
import JsonLd, { breadcrumbs } from "../../components/JsonLd";
import PageHeader from "../../components/PageHeader";
import ProductCard from "../../components/ProductCard";

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

      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: bag.name }]}
        eyebrow="Non-woven bags"
        title={bag.h1}
        intro={
          <div className="space-y-3">
            {bag.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        }
        aside={
          // The bag on a lighter navy "stage", like the bags in the home hero
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-forest-light p-10 sm:p-14">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_45%,rgba(252,248,239,0.16),rgba(252,248,239,0))]" />
            <Image
              src={bag.image}
              alt={`Non-woven ${bag.name} made by RealWaves Packs, Raipur`}
              width={600}
              height={600}
              priority
              className="relative max-h-full max-w-full object-contain drop-shadow-[0_22px_28px_rgba(0,0,0,0.35)]"
            />
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappUrl(`Hi, I'd like a quote for non-woven ${bag.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center rounded-full bg-bronze px-6 text-[15px] font-semibold text-forest transition-colors hover:bg-bronze-light"
          >
            Get a quote on WhatsApp
          </a>
          <a
            href={`tel:${BUSINESS.telephone.replace(/-/g, "")}`}
            className="inline-flex min-h-[48px] items-center rounded-full px-6 text-[15px] font-semibold text-ivory ring-1 ring-inset ring-ivory/50 transition-colors hover:bg-ivory/10"
          >
            Call {phoneDisplay}
          </a>
        </div>
      </PageHeader>

      {/* Specs + uses */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 ring-1 ring-inset ring-[#EADFC4] sm:p-9">
            <h2 className="font-display text-[1.5rem] font-semibold tracking-[-0.02em] text-charcoal sm:text-[1.75rem]">At a glance</h2>
            <dl className="mt-4 divide-y divide-[#EADFC4]">
              {bag.highlights.map((h) => (
                <div key={h.label} className="flex items-start justify-between gap-6 py-3.5">
                  <dt className="text-[15px] text-sage">{h.label}</dt>
                  <dd className="text-right text-[15px] font-semibold text-charcoal">{h.value}</dd>
                </div>
              ))}
              {sizes.length > 0 && (
                <div className="flex items-start justify-between gap-6 py-3.5">
                  <dt className="text-[15px] text-sage">Sizes we&apos;ve made (inches)</dt>
                  <dd className="text-right text-[15px] font-semibold text-charcoal">{sizes.join(", ")}</dd>
                </div>
              )}
              <div className="flex items-start justify-between gap-6 py-3.5">
                <dt className="text-[15px] text-sage">Price and MOQ</dt>
                <dd className="text-right text-[15px] font-semibold text-charcoal">On request, by size and quantity</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col rounded-3xl bg-forest p-7 text-ivory sm:p-9">
            <h2 className="font-display text-[1.5rem] font-semibold tracking-[-0.02em] sm:text-[1.75rem]">Who uses {bag.name}</h2>
            <ul className="mt-5 space-y-3">
              {bag.bestFor.map((b) => (
                <li key={b} className="flex items-start gap-3 text-base text-mist">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rotate-45 bg-bronze" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-7 text-[15px] leading-relaxed text-mist">
              Made at our factory in Saddu, Raipur, Chhattisgarh and delivered across India.
            </p>
          </div>
        </div>
      </section>

      {/* Work */}
      {products.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
          <p className="text-[15px] font-semibold text-sage">Real orders</p>
          <h2 className="section-heading mt-3">{bag.name} we&apos;ve made for our clients</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard
                key={p.slug}
                productImage={p.image}
                productName={p.name}
                slug={p.slug}
                dimensions={p.dimensions ?? {}}
              />
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 pb-14 sm:px-6 sm:pb-20">
        <p className="text-[15px] font-semibold text-sage">Questions</p>
        <h2 className="section-heading mt-3">{bag.name}: frequently asked questions</h2>
        <div className="mt-8 space-y-3">
          {bag.faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-white px-5 ring-1 ring-inset ring-[#EADFC4] sm:px-7" open>
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold text-charcoal sm:text-[17px]">
                <h3>{f.q}</h3>
                <span aria-hidden="true" className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-cream text-lg leading-none text-forest transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="-mt-1 pb-5 text-[15px] leading-relaxed text-sage sm:text-base">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Other types */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <h2 className="font-display text-[1.35rem] font-semibold tracking-[-0.01em] text-charcoal sm:text-2xl">Other non-woven bags we make</h2>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {others.map((t) => (
            <Link
              key={t.slug}
              href={`/non-woven-bags/${t.slug}`}
              className="inline-flex min-h-[44px] items-center rounded-full bg-white px-5 text-sm font-semibold text-forest ring-1 ring-inset ring-[#EADFC4] transition-colors hover:bg-forest hover:text-ivory sm:text-[15px]"
            >
              {t.name}
            </Link>
          ))}
          <Link
            href="/products"
            className="inline-flex min-h-[44px] items-center rounded-full px-4 text-sm font-semibold text-forest underline-offset-4 hover:underline sm:text-[15px]"
          >
            Full catalogue →
          </Link>
        </div>
      </section>
    </div>
  );
}

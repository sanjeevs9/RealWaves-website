'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Products, categoryNames, categoryDescriptions } from '../../products';
import ContactModal from '../../components/ContactModal';
import { bagTypeForCategory } from '../../bagTypes';
import PageHeader from '../../components/PageHeader';
import ProductCard from '../../components/ProductCard';
import { WhatsAppIcon } from '../../components/HomeHero';
import { whatsappUrl } from '../../site';

export default function ProductDetailClient({ slug }: { slug: string }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const product = Products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-display text-2xl font-semibold text-charcoal mb-4">Product not found</h1>
          <Link href="/products" className="text-bronze-ink hover:underline text-sm">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const categoryLabel = categoryNames[product.category[0]] || product.category[0];
  const categoryDesc = categoryDescriptions[product.category[0]] || '';
  const bagType = bagTypeForCategory(product.category[0]);

  // Related products (same category, exclude current)
  const related = Products.filter(
    (p) => p.slug !== product.slug && p.category.some((c) => product.category.includes(c))
  ).slice(0, 4);

  const features = [
    { label: 'Material', value: 'Non-Woven Polypropylene' },
    { label: 'Reusable', value: 'Yes' },
    { label: 'Eco-Friendly', value: 'Yes — 100% Recyclable' },
    { label: 'Print', value: 'Custom Branding Available' },
    { label: 'MOQ', value: 'Contact for Details' },
  ];

  const dims = product.dimensions;
  const sizeTiles = dims
    ? [
        { label: 'Width', value: dims.width },
        { label: 'Height', value: dims.height },
        { label: 'Gusset', value: dims.Gusset },
      ].filter((d) => d.value)
    : [];

  return (
    <>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultMessage={`I'm interested in ${product.name}. Please share pricing, MOQ and customisation options.`}
      />

      <div className="bg-cream min-h-screen">
        <PageHeader
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            {
              label: bagType?.name ?? categoryLabel,
              href: bagType ? `/non-woven-bags/${bagType.slug}` : `/products?category=${product.category[0]}`,
            },
            { label: product.name },
          ]}
          eyebrow={categoryLabel}
          title={product.name}
          intro={
            <>
              <p>{categoryDesc}</p>
              {bagType && (
                <Link href={`/non-woven-bags/${bagType.slug}`} className="mt-3 inline-block font-semibold text-ivory underline-offset-4 hover:underline">
                  About our non-woven {bagType.name}: uses, sizes and FAQs →
                </Link>
              )}
            </>
          }
          aside={
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-forest-light p-10 sm:p-14">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_45%,rgba(252,248,239,0.16),rgba(252,248,239,0))]" />
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                priority
                className="relative max-h-full max-w-full object-contain drop-shadow-[0_22px_28px_rgba(0,0,0,0.35)]"
              />
            </div>
          }
        >
          {sizeTiles.length > 0 && (
            <div className="mb-7 flex flex-wrap gap-2.5">
              {sizeTiles.map((d) => (
                <div key={d.label} className="min-w-[84px] rounded-2xl bg-forest-light px-4 py-3 ring-1 ring-inset ring-ivory/10">
                  <p className="text-xl font-semibold tracking-[-0.02em] text-ivory">{d.value}&Prime;</p>
                  <p className="mt-0.5 text-[13px] text-mist">{d.label}</p>
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-bronze px-6 text-[15px] font-semibold text-forest transition-colors hover:bg-bronze-light"
            >
              Get a quote
              <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
            <a
              href={whatsappUrl(`Hi RealWaves, I'd like a quote for ${product.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full px-6 text-[15px] font-semibold text-ivory ring-1 ring-inset ring-ivory/50 transition-colors hover:bg-ivory/10"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              WhatsApp us
            </a>
          </div>
        </PageHeader>

        {/* Specifications */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="rounded-3xl bg-white p-7 ring-1 ring-inset ring-[#EADFC4] sm:p-9">
              <h2 className="font-display text-[1.5rem] font-semibold tracking-[-0.02em] text-charcoal sm:text-[1.75rem]">Specifications</h2>
              <dl className="mt-4 divide-y divide-[#EADFC4]">
                {features.map((f) => (
                  <div key={f.label} className="flex items-start justify-between gap-6 py-3.5">
                    <dt className="text-[15px] text-sage">{f.label}</dt>
                    <dd className="text-right text-[15px] font-semibold text-charcoal">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex flex-col rounded-3xl bg-forest p-7 text-ivory sm:p-9">
              <h2 className="font-display text-[1.5rem] font-semibold tracking-[-0.02em] sm:text-[1.75rem]">Want it with your logo?</h2>
              <p className="mt-3 text-base leading-relaxed text-mist">
                Send the size, quantity and your logo. We&apos;ll share a price and a print mock-up, usually within a day.
              </p>
              <div className="mt-auto pt-7">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-ivory px-6 text-[15px] font-semibold text-forest transition-colors hover:bg-white"
                >
                  Send an enquiry
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
            <p className="text-[15px] font-semibold text-sage">More like this</p>
            <h2 className="section-heading mt-3">You may also like</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
              {related.map((item) => (
                <ProductCard
                  key={item.slug}
                  productImage={item.image}
                  productName={item.name}
                  slug={item.slug}
                  dimensions={item.dimensions ?? {}}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

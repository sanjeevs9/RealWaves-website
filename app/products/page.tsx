'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { Products, categories, Category } from '../products';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../components/ProductCard';
import ContactModal from '../components/ContactModal';
import { BagTypes } from '../bagTypes';
import PageHeader from '../components/PageHeader';

// Applies ?category= after hydration. useSearchParams() makes everything up to
// the nearest Suspense boundary client-only, so it lives in its own boundary and
// the full catalogue (with crawlable product links) stays in the prerendered HTML.
function CategoryFromUrl({ onCategory }: { onCategory: (category: string) => void }) {
  const category = useSearchParams().get('category');

  useEffect(() => {
    if (category) {
      onCategory(category);
    }
  }, [category, onCategory]);

  return null;
}

export default function Product() {
  const [filters, setFilters] = useState({
    category: [] as string[],
  });
  const [inquiryProduct, setInquiryProduct] = useState<string | null>(null);

  const uniqueCategories = Array.from(new Set(categories));

  const applyUrlCategory = useCallback((category: string) => {
    setFilters({ category: [category] });
  }, []);

  const products = filters.category.length > 0
    ? Products.filter(product =>
        filters.category.some(category => product.category.includes(category as Category))
      )
    : Products;

  const toggleFilter = (type: 'category', value: string) => {
    setFilters(prev => {
      if (prev[type].includes(value)) {
        return { ...prev, [type]: prev[type].filter(item => item !== value) };
      } else {
        return { ...prev, [type]: [...prev[type], value] };
      }
    });
  };

  const clearAllFilters = () => {
    setFilters({ category: [] });
  };

  const getCategoryDisplayName = (category: string) => {
    const displayNames: { [key: string]: string } = {
      'dcut': 'D-Cut',
      'loophandle': 'Loop Handle',
      'ucut': 'U-Cut',
      'boxbag': 'Box Bag',
      'boppboxbag': 'BOPP Box Bag',
      'bopploophandle': 'Bopp Loop Handle',
      'nonwovenboxbag': 'Non Woven Box Bag',
    };
    return displayNames[category] || category;
  };

  const hasActiveFilters = filters.category.length > 0;

  const pill = (active: boolean) =>
    `inline-flex min-h-[42px] shrink-0 items-center rounded-full px-4 text-sm font-semibold transition-colors sm:px-5 ${
      active ? 'bg-forest text-ivory' : 'bg-white text-charcoal ring-1 ring-inset ring-[#EADFC4] hover:ring-forest/40'
    }`;

  return (
    <div className="bg-cream min-h-screen">
      <Suspense fallback={null}>
        <CategoryFromUrl onCategory={applyUrlCategory} />
      </Suspense>

      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
        eyebrow="Our bags"
        title="Non-woven bag catalogue"
        intro="Custom printed non-woven bags made in Raipur, Chhattisgarh. Every bag here was printed for a real shop. Browse by style:"
      >
        <div className="flex flex-wrap gap-2.5">
          {BagTypes.map((t) => (
            <Link
              key={t.slug}
              href={`/non-woven-bags/${t.slug}`}
              className="inline-flex min-h-[44px] items-center rounded-full px-5 text-sm font-semibold text-ivory ring-1 ring-inset ring-ivory/40 transition-colors hover:bg-ivory hover:text-forest sm:text-[15px]"
            >
              {t.name}
            </Link>
          ))}
        </div>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
        {/* Filters: one row of pills (scrolls sideways on phones) */}
        <div className="flex items-center gap-4">
          <div role="group" aria-label="Filter by bag type" className="-mx-4 flex min-w-0 flex-1 gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
            <button type="button" aria-pressed={!hasActiveFilters} onClick={clearAllFilters} className={pill(!hasActiveFilters)}>
              All bags
            </button>
            {uniqueCategories.map((cat) => {
              const active = filters.category.includes(cat);
              return (
                <button key={cat} type="button" aria-pressed={active} onClick={() => toggleFilter('category', cat)} className={pill(active)}>
                  {getCategoryDisplayName(cat)}
                </button>
              );
            })}
          </div>
          <p className="hidden shrink-0 text-sm text-sage sm:block">{products.length} bags</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              productImage={product.image}
              productName={product.name}
              slug={product.slug}
              dimensions={product.dimensions as { width: number; height: number; Gusset: number }}
              onInquiry={(name) => setInquiryProduct(name)}
            />
          ))}
        </div>

        {products.length === 0 && (
          <div className="py-20 text-center">
            <p className="mb-4 text-base text-sage">No bags match your selected filters</p>
            <button
              className="inline-flex min-h-[46px] items-center rounded-full bg-forest px-6 text-[15px] font-semibold text-ivory transition-colors hover:bg-forest-light"
              onClick={clearAllFilters}
            >
              Show all bags
            </button>
          </div>
        )}
      </div>

      <ContactModal
        isOpen={inquiryProduct !== null}
        onClose={() => setInquiryProduct(null)}
        defaultMessage={inquiryProduct ? `I'm interested in ${inquiryProduct}. Please share more details about pricing, MOQ, and customization options.` : undefined}
      />
    </div>
  );
}

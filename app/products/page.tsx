'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { Products, categories, Category } from '../products';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../components/ProductCard';
import ContactModal from '../components/ContactModal';
import { BagTypes } from '../bagTypes';

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
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
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

  return (
    <div className="bg-cream min-h-screen">
      <Suspense fallback={null}>
        <CategoryFromUrl onCategory={applyUrlCategory} />
      </Suspense>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header */}
        <div className="mb-10">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-sage mb-4">
            <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
            <span>&gt;</span>
            <span className="text-charcoal font-medium">Products</span>
          </nav>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
            Non-Woven Bag Catalogue
          </h1>
          <p className="mt-2 text-sage text-sm sm:text-base">
            Custom printed non-woven bags made in Raipur, Chhattisgarh. Browse by type:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {BagTypes.map((t) => (
              <Link
                key={t.slug}
                href={`/non-woven-bags/${t.slug}`}
                className="px-3.5 py-2 bg-white rounded-lg ring-1 ring-black/[0.06] text-xs sm:text-sm font-medium text-charcoal hover:text-[#0992C2] hover:ring-[#0992C2]/30 transition-colors"
              >
                {t.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile filter toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-charcoal text-sm font-medium rounded-lg ring-1 ring-black/[0.04] active:scale-[0.98] transition-transform"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 14.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-6.586L3.293 6.707A1 1 0 013 6V4z" />
            </svg>
            Filters
            {hasActiveFilters && (
              <span className="bg-[#0B2D72] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {filters.category.length}
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className={`w-full md:w-56 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="md:sticky md:top-24">
              <div className="bg-white rounded-xl p-5 ring-1 ring-black/[0.04]">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                >
                  <h2 className="text-sm font-semibold text-charcoal uppercase tracking-wider">Categories</h2>
                  <svg
                    className={`w-4 h-4 text-sage transition-transform duration-300 ${categoriesOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${categoriesOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-1">
                    {uniqueCategories.map((cat, index) => (
                      <label
                        key={index}
                        htmlFor={`category-${index}`}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 text-sm ${
                          filters.category.includes(cat)
                            ? 'bg-[#0B2D72]/5 text-charcoal font-medium'
                            : 'text-sage hover:bg-linen'
                        }`}
                      >
                        <input
                          type="checkbox"
                          id={`category-${index}`}
                          checked={filters.category.includes(cat)}
                          onChange={() => toggleFilter('category', cat)}
                          className="sr-only"
                        />
                        <span className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border transition-colors ${
                          filters.category.includes(cat)
                            ? 'bg-[#0B2D72] border-[#0B2D72]'
                            : 'border-sage/30'
                        }`}>
                          {filters.category.includes(cat) && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        {getCategoryDisplayName(cat)}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clear filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="mt-3 w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm text-sage hover:text-charcoal transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Active filters bar */}
            {hasActiveFilters && (
              <div className="mb-6 flex items-center gap-2 flex-wrap">
                {filters.category.map(cat => (
                  <span
                    key={cat}
                    className="inline-flex items-center gap-1.5 bg-[#0B2D72]/5 text-charcoal text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {getCategoryDisplayName(cat)}
                    <button onClick={() => toggleFilter('category', cat)} className="hover:text-[#0992C2] transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                ))}
                <span className="text-xs text-sage">{products.length} products</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
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
              <div className="text-center py-20">
                <p className="text-sage text-base mb-4">No products match your selected filters</p>
                <button
                  className="px-5 py-2.5 bg-[#0B2D72] text-white rounded-lg text-sm font-medium hover:bg-[#0B2D72]/85 transition-colors"
                  onClick={clearAllFilters}
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={inquiryProduct !== null}
        onClose={() => setInquiryProduct(null)}
        defaultMessage={inquiryProduct ? `I'm interested in ${inquiryProduct}. Please share more details about pricing, MOQ, and customization options.` : undefined}
      />
    </div>
  );
}

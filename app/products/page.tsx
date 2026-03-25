'use client';

import { useState, useEffect, Suspense } from 'react';
import { Products, categories, Category } from '../products';
import { useSearchParams } from 'next/navigation';
import ProductCard from '../components/ProductCard';
import ContactModal from '../components/ContactModal';

function ProductContent() {
  const [products, setProducts] = useState<typeof Products>(Products);
  const [filters, setFilters] = useState({
    category: [] as string[],
  });
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const uniqueCategories = Array.from(new Set(categories));

  useEffect(() => {
    setMounted(true);
    if (category) {
      setFilters({ category: [category] });
    }
  }, [category]);

  useEffect(() => {
    if (!mounted) return;
    let filteredProducts = [...Products];
    if (filters.category.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        filters.category.some(category => product.category.includes(category as Category))
      );
    }
    setProducts(filteredProducts);
  }, [filters, mounted]);

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
      'boppboxbag': 'Bopp Box Bag',
      'bopploophandle': 'Bopp Loop Handle',
      'nonwovenboxbag': 'Non Woven Box Bag',
    };
    return displayNames[category] || category;
  };

  const hasActiveFilters = filters.category.length > 0;

  if (!mounted) {
    return <ProductLoading />;
  }

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-1.5 text-xs text-sage mb-4">
            <span>Home</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-charcoal font-medium">Products</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
            Product Catalogue
          </h1>
          <p className="mt-2 text-sage text-sm sm:text-base">
            Browse our complete range of non-woven bags
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="w-full md:w-56 flex-shrink-0">
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
                        <span className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border transition-colors ${
                          filters.category.includes(cat)
                            ? 'bg-[#0B2D72] border-[#0B2D72]'
                            : 'border-sage/30'
                        }`}>
                          {filters.category.includes(cat) && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

function ProductLoading() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="mb-10">
          <div className="h-3 w-32 bg-linen rounded mb-4" />
          <div className="h-8 w-64 bg-linen rounded mb-2" />
          <div className="h-4 w-48 bg-linen rounded" />
        </div>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="w-full md:w-56 flex-shrink-0">
            <div className="bg-white rounded-xl p-5 ring-1 ring-black/[0.04]">
              <div className="h-5 w-24 bg-linen rounded mb-4" />
              <div className="space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-9 bg-linen rounded-lg" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl h-72 sm:h-80 animate-pulse border border-gray-200 shadow-sm" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  return (
    <Suspense fallback={<ProductLoading />}>
      <ProductContent />
    </Suspense>
  );
}

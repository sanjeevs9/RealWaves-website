'use client';

import { useState, useEffect, Suspense } from 'react';
import ProductCard from '../components/ProductCard';
import { Products } from '../products';
import { useSearchParams } from 'next/navigation';

// Separate component that uses useSearchParams
function ProductContent() {
  const [products, setProducts] = useState<typeof Products>(Products);
  const [filters, setFilters] = useState({
    category: [] as string[],
  });
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  // Get unique categories from products
  const uniqueCategories = Array.from(new Set(Products.map(product => product.category)));

  // Initialize filters from URL parameter (only once)
  useEffect(() => {
    setMounted(true);
    if (category) {
      setFilters({ category: [category] });
    }
  }, [category]);

  // Apply filters
  useEffect(() => {
    if (!mounted) return;
    
    let filteredProducts = [...Products];
    
    // Filter by category
    if (filters.category.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        filters.category.includes(product.category)
      );
    }
    
    setProducts(filteredProducts);
  }, [filters, mounted]);

  // Toggle filter
  const toggleFilter = (type: 'category', value: string) => {
    setFilters(prev => {
      if (prev[type].includes(value)) {
        return {
          ...prev,
          [type]: prev[type].filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [type]: [...prev[type], value]
        };
      }
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({ category: [] });
  };

  // Get display name for category
  const getCategoryDisplayName = (category: string) => {
    const displayNames: { [key: string]: string } = {
      'dcut': 'D-Cut',
      'loophandle': 'Loop Handle',
      'ucut': 'U-Cut',
      'box': 'Box',
      'boxbag': 'Box Bag',
      'printed': 'Printed',
      'designed': 'Designed'
    };
    return displayNames[category] || category;
  };

  // Check if any filters are active
  const hasActiveFilters = filters.category.length > 0;

  // Show loading state until mounted
  if (!mounted) {
    return <ProductLoading />;
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-500">
        <span>HOME</span> &gt; <span className="font-medium">PRODUCT CATALOGUE</span>
      </div>
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">All Your Needs At One Stop</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Panel */}
        <div className="w-full md:w-64 flex-shrink-0 border-r pr-4">
          {/* Categories Filter */}
          <div className="mb-6 border-b pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
            >
              <h2 className="font-medium text-lg">Categories</h2>
              <span className={`transform transition-transform ${categoriesOpen ? 'rotate-180' : ''}`}>▼</span>
            </div>
            {categoriesOpen && (
              <div className="mt-3 space-y-2">
                {uniqueCategories.map((category, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id={`category-${index}`} 
                      checked={filters.category.includes(category)}
                      onChange={() => toggleFilter('category', category)}
                      className="h-4 w-4"
                    />
                    <label htmlFor={`category-${index}`} className="text-sm">{getCategoryDisplayName(category)}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="flex-1">
          {/* Clear Filter Button - Only show when filters are active */}
          {hasActiveFilters && (
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  Active filters: {filters.category.map(cat => getCategoryDisplayName(cat)).join(', ')}
                </span>
              </div>
              <button 
                onClick={clearAllFilters}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
                Clear Filters
              </button>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {products.map((product,index) => (
              <ProductCard
                key={index}
                gsmValue={product.gsm.toString()}
                productImage={product.image}
                productName={product.name}
                dimensions={product.dimensions}
              />
            ))}
          </div>
          
          {/* Show empty state if no products match filters */}
          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products match your selected filters</p>
              <button 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                onClick={clearAllFilters}
              >
                Clear All Filters
              </button> 
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Loading component for Suspense fallback
function ProductLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 text-sm text-gray-500">
        <span>HOME</span> &gt; <span className="font-medium">PRODUCT CATALOGUE</span>
      </div>
      <h1 className="text-3xl font-bold mb-8">All Your Needs At One Stop</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0 border-r pr-4">
          <div className="mb-6 border-b pb-4">
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-lg">Categories</h2>
              <span>▼</span>
            </div>
            <div className="mt-3 space-y-2">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-gray-200 rounded-lg h-64 animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
export default function Product() {
  return (
    <Suspense fallback={<ProductLoading />}>
      <ProductContent />
    </Suspense>
  );
}

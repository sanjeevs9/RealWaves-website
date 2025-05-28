'use client';

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import bag from '@/public/bags/redBag.png';

// Define product type
type Product = {
  id: string;
  productCode: string;
  gsmValue: string;
  productImage: string;
  productName: string;
  price1: string;
  minQuantity1: string;
  price2: string;
  minQuantity2: string;
  dimensions: { size: string; unit: string; color: string }[];
  category: string;
  color: string;
  size: string;
};

// Sample product data
const productData: Product[] = [
  {
    id: '1',
    productCode: 'A29',
    gsmValue: '250',
    productImage: bag.src, // Replace with actual image path
    productName: 'Paper Bag Premium',
    price1: '2.65',
    minQuantity1: '5,000',
    price2: '2.05',
    minQuantity2: '10,000',
    dimensions: [
      { size: '250', unit: 'A', color: 'blue' },
      { size: '250', unit: 'B', color: 'green' }
    ],
    category: 'Category A',
    color: 'red',
    size: 'M'
  },
  // Add more sample products as needed (you can duplicate and modify this)
  {
    id: '2',
    productCode: 'A29',
    gsmValue: '250',
    productImage: bag.src,
    productName: 'Paper Bag Premium',
    price1: '2.65',
    minQuantity1: '5,000',
    price2: '2.05',
    minQuantity2: '10,000',
    dimensions: [
      { size: '250', unit: 'A', color: 'blue' },
      { size: '250', unit: 'B', color: 'blue' }
    ],
    category: 'Category B',
    color: 'green',
    size: 'L'
  },
  // Add more products to match your design
];

export default function Product() {
  const [products, setProducts] = useState<Product[]>(productData);
  const [filters, setFilters] = useState({
    category: [] as string[],
    color: [] as string[],
    size: [] as string[],
    otherFilters: [] as string[]
  });
  // const [activeFilters, setActiveFilters] = useState({
  //   color: false,
  //   bag: false,
  //   someOther: false
  // });
  const [sortOpen, setSortOpen] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [type1Open, setType1Open] = useState(true);
  const [type2Open, setType2Open] = useState(true);
  const [type3Open, setType3Open] = useState(true);

  // Apply filters
  useEffect(() => {
    let filteredProducts = [...productData];
    
    // Filter by category
    if (filters.category.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        filters.category.includes(product.category)
      );
    }
    
    // Filter by color
    if (filters.color.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        filters.color.includes(product.color)
      );
    }
    
    // Filter by size
    if (filters.size.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        filters.size.includes(product.size)
      );
    }
    
    setProducts(filteredProducts);
  }, [filters]);

  // Toggle filter
  const toggleFilter = (type: 'category' | 'color' | 'size' | 'otherFilters', value: string) => {
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

  // Toggle active filter tags
  const toggleActiveFilter = (filter: 'color' | 'bag' | 'someOther') => {
    // setActiveFilters(prev => ({
    //   ...prev,
    //   [filter]: !prev[filter]
    // }));
    console.log(filter);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-500">
        <span>HOME</span> &gt; <span className="font-medium">PRODUCT CATALOGUE</span>
      </div>
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">All Your Needs At One Stop</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Panel */}
        <div className="w-full md:w-64 flex-shrink-0 border-r pr-4">
          {/* Sort Dropdown */}
          <div className="mb-6 border-b pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setSortOpen(!sortOpen)}
            >
              <h2 className="font-medium text-lg">Sort</h2>
              <span className={`transform transition-transform ${sortOpen ? 'rotate-180' : ''}`}>▼</span>
            </div>
            {sortOpen && (
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm flex items-center">
                    Color <span className="ml-1 bg-blue-500 rounded-full w-3 h-3"></span>
                    <button className="ml-1" onClick={() => toggleActiveFilter('color')}>×</button>
                  </span>
                </div>
                {['Category A', 'Category A', 'Category A'].map((category, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id={`sort-category-${index}`} 
                      className="h-4 w-4"
                    />
                    <label htmlFor={`sort-category-${index}`}>{category}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Filters Section */}
          <div className="mb-6 border-b pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <h2 className="font-medium text-lg">Filters</h2>
              <span className={`transform transition-transform ${filtersOpen ? 'rotate-180' : ''}`}>▼</span>
            </div>
            {filtersOpen && (
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm flex items-center">
                  Color <span className="ml-1 bg-blue-500 rounded-full w-3 h-3"></span>
                  <button className="ml-1" onClick={() => toggleActiveFilter('color')}>×</button>
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm flex items-center">
                  Bag
                  <button className="ml-1" onClick={() => toggleActiveFilter('bag')}>×</button>
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm flex items-center">
                  Some Other
                  <button className="ml-1" onClick={() => toggleActiveFilter('someOther')}>×</button>
                </span>
              </div>
            )}
          </div>
          
          {/* Type 1 */}
          <div className="mb-6 border-b pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setType1Open(!type1Open)}
            >
              <h2 className="font-medium text-lg">Type 1</h2>
              <span className={`transform transition-transform ${type1Open ? 'rotate-180' : ''}`}>▼</span>
            </div>
            {type1Open && (
              <div className="mt-3 space-y-2">
                {['Category A', 'Category A', 'Category A', 'Category A', 'Category A'].map((category, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id={`category-${index}`} 
                      checked={filters.category.includes(category)}
                      onChange={() => toggleFilter('category', category)}
                      className="h-4 w-4"
                    />
                    <label htmlFor={`category-${index}`} className="text-sm">{category}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Type 2 (Size) */}
          <div className="mb-6 border-b pb-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setType2Open(!type2Open)}
            >
              <h2 className="font-medium text-lg">Type 2 (Size)</h2>
              <span className={`transform transition-transform ${type2Open ? 'rotate-180' : ''}`}>▼</span>
            </div>
            {type2Open && (
              <div className="mt-3">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                  <div className="bg-blue-500 h-full w-1/3"></div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                    <button 
                      key={index}
                      className={`${
                        filters.size.includes(size) ? 'text-blue-500 font-medium' : 'text-gray-500'
                      }`}
                      onClick={() => toggleFilter('size', size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Type 3 (Color) */}
          <div className="mb-6">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setType3Open(!type3Open)}
            >
              <h2 className="font-medium text-lg">Type 3 (Color)</h2>
              <span className={`transform transition-transform ${type3Open ? 'rotate-180' : ''}`}>▼</span>
            </div>
            {type3Open && (
              <div className="mt-3">
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    { name: 'red', color: 'bg-red-500' },
                    { name: 'yellow', color: 'bg-yellow-400' },
                    { name: 'green', color: 'bg-green-500' },
                    { name: 'teal', color: 'bg-teal-400' },
                    { name: 'blue', color: 'bg-blue-500' },
                    { name: 'purple', color: 'bg-purple-500' },
                    { name: 'black', color: 'bg-black' }
                  ].map((colorObj, index) => (
                    <button 
                      key={index}
                      className={`w-6 h-6 rounded-full ${colorObj.color} ${
                        filters.color.includes(colorObj.name) ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                      }`}
                      onClick={() => toggleFilter('color', colorObj.name)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                productCode={product.productCode}
                gsmValue={product.gsmValue}
                productImage={product.productImage}
                productName={product.productName}
                price1={product.price1}
                minQuantity1={product.minQuantity1}
                price2={product.price2}
                minQuantity2={product.minQuantity2}
                dimensions={product.dimensions}
              />
            ))}
          </div>
          
          {/* Show empty state if no products match filters */}
          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products match your selected filters</p>
              <button 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => setFilters({ category: [], color: [], size: [], otherFilters: [] })}
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

'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/public/logo.png"
import { useState } from 'react'

// Category data from CategorySection
const categoryData = [
  {
    id: 1,
    title: "D-Cut",
  },
  {
    id: 2,
    title: "Loop Handle",
  },
  {
    id: 3,
    title: "U-Cut",
  },
  {
    id: 4,
    title: "Box",
  },
  {
    id: 5,
    title: "Printed",
  },
  {
    id: 6,
    title: "Designed",
  },
];

const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo} // Make sure to add your logo image
                alt="RealWaves Logo"
                width={150}
                height={40}
                className="h-6 md:h-8 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                About Us
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                >
                  Products
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isProductsDropdownOpen && (
                  <div
                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                    className="absolute top-full left-0  w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                  >
                    {categoryData.map((category) => (
                      <Link
                        key={category.id}
                        href={`/products?category=${encodeURIComponent(category.title)}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link
                href="/blogs"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                Blogs
              </Link>
            </div>
          </div>

          {/* Phone Number Button - Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+919009990000"
              className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700"
            >
              <div className="flex items-center bg-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                  <path d="M2.36955 0.938228C2.63024 0.676361 3.05386 0.675424 3.31566 0.936118C3.31633 0.936791 3.31704 0.937494 3.31771 0.938228L6.27819 3.8987C6.54005 4.15939 6.54098 4.58295 6.2803 4.84476L4.53987 6.58524C4.04108 7.0786 3.97832 7.86261 4.39235 8.429C5.02109 9.29189 5.71687 10.1038 6.47315 10.8575C7.31634 11.7043 8.233 12.4747 9.21238 13.1595C9.77827 13.5542 10.5455 13.4877 11.035 13.0015L12.7154 11.2947C12.9761 11.0328 13.3997 11.0319 13.6615 11.2926L16.6294 14.2657C16.8913 14.5264 16.8923 14.9499 16.6316 15.2118C16.6309 15.2125 16.6302 15.2132 16.6295 15.2139V15.2087L15.8287 16.0041C14.7932 17.0527 13.285 17.4841 11.8515 17.1419C10.4073 16.7553 9.0344 16.14 7.78483 15.3193C6.6239 14.5773 5.54805 13.71 4.57676 12.7327C3.68307 11.8456 2.88017 10.8715 2.17989 9.82496C1.41392 8.69885 0.807679 7.47207 0.378334 6.17959C-0.113845 4.66123 0.293977 2.99516 1.43187 1.87584L2.36955 0.938228Z" fill="#2476FE" />
                </svg>
              </div>
              <span
              className='text-xs md:text-base'
              >+ 91 90099 90000</span>
            </a>
          </div>
          <div className='flex items-center gap-2 md:hidden'>
          <div className="flex items-center">
            <a
              href="tel:+919009990000"
              className="bg-blue-600 text-white p-2 rounded-full flex items-center space-x-2 hover:bg-blue-700"
            >
              <div className="flex items-center bg-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                  <path d="M2.36955 0.938228C2.63024 0.676361 3.05386 0.675424 3.31566 0.936118C3.31633 0.936791 3.31704 0.937494 3.31771 0.938228L6.27819 3.8987C6.54005 4.15939 6.54098 4.58295 6.2803 4.84476L4.53987 6.58524C4.04108 7.0786 3.97832 7.86261 4.39235 8.429C5.02109 9.29189 5.71687 10.1038 6.47315 10.8575C7.31634 11.7043 8.233 12.4747 9.21238 13.1595C9.77827 13.5542 10.5455 13.4877 11.035 13.0015L12.7154 11.2947C12.9761 11.0328 13.3997 11.0319 13.6615 11.2926L16.6294 14.2657C16.8913 14.5264 16.8923 14.9499 16.6316 15.2118C16.6309 15.2125 16.6302 15.2132 16.6295 15.2139V15.2087L15.8287 16.0041C14.7932 17.0527 13.285 17.4841 11.8515 17.1419C10.4073 16.7553 9.0344 16.14 7.78483 15.3193C6.6239 14.5773 5.54805 13.71 4.57676 12.7327C3.68307 11.8456 2.88017 10.8715 2.17989 9.82496C1.41392 8.69885 0.807679 7.47207 0.378334 6.17959C-0.113845 4.66123 0.293977 2.99516 1.43187 1.87584L2.36955 0.938228Z" fill="#2476FE" />
                </svg>
              </div>
              <span
              className='text-xs md:text-base'
              >+ 91 90099 90000</span>
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          
          {/* Mobile Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between"
            >
              Products
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Mobile Dropdown Menu */}
            {isProductsDropdownOpen && (
              <div className="pl-4 space-y-1">
                {categoryData.map((category) => (
                  <Link
                    key={category.id}
                    href={`/products?category=${encodeURIComponent(category.title)}`}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsProductsDropdownOpen(false);
                    }}
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link
            href="/blogs"
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blogs
          </Link>
          
          {/* Mobile Phone Number Button */}
         
        </div>

      </div>
      
    </nav>
  )
}

export default Navbar

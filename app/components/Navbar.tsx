'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/public/logo.png"
import { useState, useEffect } from 'react'

const categoryData = [
  { id: 1, title: "D-Cut", category: "dcut" },
  { id: 2, title: "Loop Handle", category: "loophandle" },
  { id: 3, title: "U-Cut", category: "ucut" },
  { id: 4, title: "Bopp Box Bag", category: "boppboxbag" },
  { id: 5, title: "Bopp Loop Handle", category: "bopploophandle" },
  { id: 6, title: "Non Woven Box Bag", category: "nonwovenboxbag" },
];

const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(15,44,29,0.06)]'
        : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={logo}
              alt="RealWaves"
              width={150}
              height={40}
              className="h-6 sm:h-7 md:h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About Us</Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button className="nav-link flex items-center gap-1.5">
                Products
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute top-full left-0 pt-3 transition-all duration-300 ${
                isProductsDropdownOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}>
                <div className="w-56 bg-white rounded-xl shadow-xl ring-1 ring-black/5 py-2">
                  {categoryData.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/products?category=${encodeURIComponent(cat.category)}`}
                      className="block px-5 py-2.5 text-sm text-charcoal/80 hover:text-forest hover:bg-forest/5 transition-all duration-200"
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+919009990000"
              className="group inline-flex items-center gap-2.5 bg-forest text-white pl-5 pr-2.5 py-2 rounded-full hover:bg-forest-light transition-all duration-300 text-sm font-medium"
            >
              <span>+91 90099 90000</span>
              <span className="bg-white/15 rounded-full p-1.5 group-hover:bg-white/25 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:+919009990000"
              className="bg-forest text-white p-2.5 rounded-full hover:bg-forest-light transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal hover:bg-forest/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${
        isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-forest/5 bg-white px-4 py-4 space-y-1">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-3 text-sm font-medium text-charcoal hover:text-forest hover:bg-forest/5 rounded-lg transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-3 text-sm font-medium text-charcoal hover:text-forest hover:bg-forest/5 rounded-lg transition-colors"
          >
            About Us
          </Link>

          <div>
            <button
              onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-charcoal hover:text-forest hover:bg-forest/5 rounded-lg transition-colors"
            >
              Products
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${
              isProductsDropdownOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="ml-4 mt-1 space-y-0.5">
                {categoryData.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/products?category=${encodeURIComponent(cat.category)}`}
                    onClick={() => { setIsMobileMenuOpen(false); setIsProductsDropdownOpen(false); }}
                    className="block px-4 py-2.5 text-sm text-sage hover:text-forest transition-colors"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Phone */}
          <a
            href="tel:+919009990000"
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-forest"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +91 90099 90000
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

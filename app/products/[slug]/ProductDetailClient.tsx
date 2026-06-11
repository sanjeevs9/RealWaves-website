'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Products, categoryNames, categoryDescriptions } from '../../products';
import ContactModal from '../../components/ContactModal';

export default function ProductDetailClient({ slug }: { slug: string }) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const product = Products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-charcoal mb-4">Product not found</h1>
          <Link href="/products" className="text-[#0992C2] hover:underline text-sm">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Use same image multiple times for gallery (user will add more later)
  const galleryImages = [product.image, product.image, product.image, product.image];
  const categoryLabel = categoryNames[product.category[0]] || product.category[0];
  const categoryDesc = categoryDescriptions[product.category[0]] || '';

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

  return (
    <>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <div className="bg-cream min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-sage">
            <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
            <span>&gt;</span>
            <Link href="/products" className="hover:text-charcoal transition-colors">Products</Link>
            <span>&gt;</span>
            <Link
              href={`/products?category=${product.category[0]}`}
              className="hover:text-charcoal transition-colors"
            >
              {categoryLabel}
            </Link>
            <span>&gt;</span>
            <span className="text-charcoal font-medium truncate max-w-[180px] sm:max-w-none">{product.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left — Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="bg-[#EEF2F9] rounded-2xl flex items-center justify-center p-8 sm:p-12 aspect-square mb-4">
                <Image
                  src={galleryImages[selectedImage]}
                  alt={product.name}
                  width={600}
                  height={600}
                  quality={100}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Thumbnails */}
              <div className="flex flex-wrap gap-3">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center p-2 transition-all duration-200 cursor-pointer ${
                      selectedImage === i
                        ? 'bg-[#EEF2F9] ring-2 ring-[#0B2D72]'
                        : 'bg-[#EEF2F9]/60 ring-1 ring-gray-200 hover:ring-gray-300'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      width={80}
                      height={80}
                      className="max-w-full max-h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right — Product Info */}
            <div className="flex flex-col">
              {/* Category badge */}
              <div className="inline-flex self-start items-center gap-1.5 rounded-full bg-[#0B2D72]/8 px-3 py-1 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0992C2]" />
                <span className="text-xs font-medium text-[#0B2D72] tracking-wide">{categoryLabel}</span>
              </div>

              {/* Name */}
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal leading-tight tracking-tight mb-4">
                {product.name}
              </h1>

              {/* Description */}
              <p className="text-sage text-sm sm:text-base leading-relaxed mb-8">
                {categoryDesc}
              </p>

              {/* Dimensions */}
              {product.dimensions && (
                <div className="mb-8">
                  <h3 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-3">Dimensions</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    {product.dimensions.width && (
                      <div className="bg-[#EEF2F9] rounded-xl px-4 py-3 text-center min-w-[70px]">
                        <p className="text-lg font-bold text-charcoal">{product.dimensions.width}&quot;</p>
                        <p className="text-[10px] text-sage uppercase tracking-wider mt-0.5">Width</p>
                      </div>
                    )}
                    <span className="text-sage text-lg">&times;</span>
                    {product.dimensions.height && (
                      <div className="bg-[#EEF2F9] rounded-xl px-4 py-3 text-center min-w-[70px]">
                        <p className="text-lg font-bold text-charcoal">{product.dimensions.height}&quot;</p>
                        <p className="text-[10px] text-sage uppercase tracking-wider mt-0.5">Height</p>
                      </div>
                    )}
                    {product.dimensions.Gusset && (
                      <>
                        <span className="text-sage text-lg">&times;</span>
                        <div className="bg-[#EEF2F9] rounded-xl px-4 py-3 text-center min-w-[70px]">
                          <p className="text-lg font-bold text-charcoal">{product.dimensions.Gusset}&quot;</p>
                          <p className="text-[10px] text-sage uppercase tracking-wider mt-0.5">Gusset</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-charcoal uppercase tracking-wider mb-3">Specifications</h3>
                <div className="divide-y divide-gray-100">
                  {features.map((f) => (
                    <div key={f.label} className="flex items-center justify-between py-3">
                      <span className="text-sm text-sage">{f.label}</span>
                      <span className="text-sm font-medium text-charcoal">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3 mt-auto">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="flex-1 bg-forest text-white font-medium rounded-xl px-6 py-3.5 hover:bg-forest-light transition-all duration-300 text-sm flex items-center justify-center gap-2"
                >
                  Request a Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <a
                  href="https://wa.me/919009990000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-[#25D366] hover:bg-[#22c55e] transition-colors"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-100">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-8">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((item) => (
                <div
                  key={item.slug}
                  onClick={() => router.push(`/products/${item.slug}`)}
                  className="group cursor-pointer"
                >
                  <div className="bg-[#EEF2F9] rounded-xl flex items-center justify-center p-6 aspect-square mb-3 group-hover:shadow-md transition-all duration-300">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm font-medium text-charcoal group-hover:text-[#0992C2] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  {item.dimensions && (
                    <p className="text-[10px] sm:text-xs text-sage mt-1">
                      {item.dimensions.width}&quot; &times; {item.dimensions.height}&quot;
                      {item.dimensions.Gusset ? ` × ${item.dimensions.Gusset}"` : ''}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

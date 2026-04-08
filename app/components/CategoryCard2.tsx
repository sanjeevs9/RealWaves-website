"use client"
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

interface CategoryCard2Props {
  title: string;
  imageUrl: StaticImageData | string;
  backgroundColor?: string;
  category: string;
}

const CategoryCard2: React.FC<CategoryCard2Props> = ({
  title,
  imageUrl,
  category,
}) => {
  const router = useRouter();

  return (
    <div
      className="flex-shrink-0 mx-2 sm:mx-4 group cursor-pointer"
      onClick={() => {
        router.push(`/products?category=${category}`);
      }}
    >
      <div className="relative rounded-2xl w-40 h-48 sm:w-44 sm:h-56 md:w-48 md:h-60 lg:w-52 lg:h-64 xl:w-56 xl:h-[17rem] overflow-hidden transition-all duration-500 hover:-translate-y-2">
        {/* Tinted background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EEF2F9] via-[#F0F4FA] to-[#E8ECF4]" />

        {/* Product image */}
        <div className="relative w-full h-[calc(100%-3rem)] sm:h-[calc(100%-3.5rem)] flex items-center justify-center p-4 sm:p-6 lg:p-7">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
          />
        </div>

        {/* Title bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-3 py-2.5 sm:py-3 border-t border-gray-100/50">
          <h3 className="text-charcoal font-display text-xs sm:text-sm font-bold tracking-wide text-center truncate">
            {title}
          </h3>
        </div>

        {/* Hover border glow */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-200/60 group-hover:ring-[#0B2D72]/30 transition-all duration-500" />
      </div>
    </div>
  );
};

export default CategoryCard2;

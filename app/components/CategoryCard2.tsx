"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CategoryCard2Props {
  title: string;
  imageUrl: string;
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
      className="flex-shrink-0 mx-3 sm:mx-5 group cursor-pointer"
      onClick={() => {
        router.push(`/products?category=${category}`);
      }}
    >
      {/* Card */}
      <div className="relative rounded-2xl w-36 h-44 sm:w-40 sm:h-52 md:w-44 md:h-56 lg:w-48 lg:h-60 xl:w-52 xl:h-64 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-2.5 overflow-hidden">
        {/* Product image area */}
        <div className="relative w-full h-[calc(100%-3.5rem)] sm:h-[calc(100%-4rem)] flex items-center justify-center p-5 sm:p-6 lg:p-8">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Clean bottom area with title */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-1">
          <h3 className="text-charcoal font-display text-sm sm:text-base font-semibold tracking-wide text-center truncate">
            {title}
          </h3>
        </div>

        {/* Accent line at bottom — reveals on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0B2D72] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
      </div>
    </div>
  );
};

export default CategoryCard2;

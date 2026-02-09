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
      className="flex flex-col items-center mx-1.5 sm:mx-2 group cursor-pointer"
      onClick={() => {
        router.push(`/products?category=${category}`);
      }}
    >
      {/* Card */}
      <div className="relative rounded-2xl w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 lg:w-32 lg:h-36 xl:w-40 xl:h-44 2xl:w-48 2xl:h-52 bg-white shadow-sm hover:shadow-lg ring-1 ring-[#0B2D72]/[0.06] hover:ring-[#0B2D72]/20 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden">
        {/* Subtle bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0B2D72] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        {/* Product image */}
        <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-4 lg:p-5">
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={500}
            className="w-14 h-14 sm:w-20 sm:h-20 lg:w-22 lg:h-22 xl:w-28 xl:h-28 2xl:w-36 2xl:h-36 object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Label below card */}
      <div className="mt-1.5 sm:mt-2 lg:mt-2.5 text-center">
        <h3 className="text-[10px] sm:text-xs lg:text-sm font-semibold text-[#0B2D72] tracking-wide transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard2;

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
  backgroundColor = '#0A0A3A',
  category,
}) => {
  const router = useRouter();
  
  return (
    <div className="flex flex-col items-center mx-2">
      <div 
        className="relative rounded-2xl w-24 h-24 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 2xl:w-64  2xl:h-64  flex flex-col items-center justify-end cursor-pointer transition-transform hover:scale-105"
        style={{ backgroundColor }}
        onClick={() => {
          router.push(`/products?category=${category}`);
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            loading='lazy'
            src={imageUrl}
            alt={title}
            width={500}    
            height={500}
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-44 xl:h-44 2xl:w-64 2xl:h-64 object-contain -translate-y-6 xl:-translate-y-10"
          />
        </div>
        <h3 className="p-1 text-white text-xs md:text-sm font-medium text-center absolute bottom-2">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard2;

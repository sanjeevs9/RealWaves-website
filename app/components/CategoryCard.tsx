import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface CategoryCardProps {
  title: string;
  imageUrl: string;
  backgroundColor?: string;
  category: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageUrl,
  backgroundColor = '#001842', // Default light blue background
  category
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
        <div 
        className="rounded-2xl w-28 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-64 flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105"
        style={{ backgroundColor }}
        onClick={() => {
          router.push(`/products?category=${category}`);
        }}
        >
        <div className="relative w-full h-full rounded-xl overflow-hidden ">
            <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain"
            />
        </div>
        
        </div>
        <h3 className="mt-3 text-black text-sm md:text-lg font-semibold text-center">{title}</h3>
    </div>
  );
};

export default CategoryCard;

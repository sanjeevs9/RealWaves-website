import React from 'react';
import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  backgroundColor?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageUrl,
  backgroundColor = '#001842' // Default light blue background
}) => {
  return (
    <div className="flex flex-col items-center">
        <div 
        className="rounded-2xl w-56 h-64 flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105"
        style={{ backgroundColor }}
        >
        <div className="relative w-full h-full rounded-xl overflow-hidden ">
            <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            />
        </div>
        
        </div>
        <h3 className="mt-3 text-black text-lg font-semibold text-center">{title}</h3>
    </div>
  );
};

export default CategoryCard;

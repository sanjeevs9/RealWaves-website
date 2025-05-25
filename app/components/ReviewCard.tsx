import React from 'react';
import Image from 'next/image';
import naividya from "@/public/naivedya.png"
import quoteMark from "@/public/quote.png"

interface ReviewCardProps {
  companyName: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  logoSrc: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  companyName,
  quote,
  authorName,
  authorTitle,
  logoSrc,
}) => {
  return (
    <div className="bg-[#EDF0FF] rounded-3xl p-6 shadow-md  max-w-[300px] ">
      {/* Company Logo */}
      <div className="mb-2">
        <Image 
          src={naividya.src} 
          alt={`${companyName} logo`} 
          width={100} 
          height={30} 
          className="object-contain"
        />
      </div>
      
      {/* Quote Mark */}
      <div className="text-4xl font-serif text-gray-400 mb-2">

        <Image
          src={quoteMark.src}
          alt="Quote Mark"
          width={20}
          height={20}
          className="object-contain"
        />
      </div>
      <div className='flex flex-col justify-between min-h-[190px]'>
        {/* Testimonial Text */}
        <p className=" text-sm leading-snug mb-4 text-gray-800">
            {quote}
        </p>
        
        {/* Author Information */}
        <div className="text-xs uppercase text-gray-600 font-medium mt-4 ">
            <p>{authorName}</p>
            <p>{authorTitle}, {companyName}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

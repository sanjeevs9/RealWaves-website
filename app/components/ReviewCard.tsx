import React from 'react';
import Image from 'next/image';
// import naividya from "@/public/naivedya.png"
import quoteMark from "@/public/quote.png"

interface ReviewCardProps {
  companyName?: string;
  quote?: string;
  authorName?: string;
  authorTitle?: string;
  logoSrc?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  companyName,
  quote,
  authorName,
  authorTitle
}) => {
  return (
    <div className="bg-[#EDF0FF] rounded-3xl p-6 shadow-md w-full max-w-[335px] mx-auto">
      {/* Company Logo */}
      <div className="mb-2 pt-20">
        {/* <Image 
          src={naividya.src} 
          alt={`${companyName} logo`} 
          width={100} 
          height={30} 
          className="object-contain"
        /> */}
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
      <div className='flex flex-col justify-between min-h-[220px]'>
        {/* Testimonial Text */}
        <p className=" text-base leading-snug mb-4 text-gray-800 font-roboto">
            {quote}
        </p>
        
        {/* Author Information */}
        <div className="text-xs uppercase text-gray-600 font-medium mt-4 ">
            <p>{authorName}</p>
            <p>{authorTitle} {companyName}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

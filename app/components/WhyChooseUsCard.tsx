"use client"

import React from "react";
import Image, { StaticImageData } from "next/image";

interface WhyChooseUsCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
  imageSrc?: string | StaticImageData;
  extraText?: string;
  icon2?: React.ReactNode;
  index: number;
}

export const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({
  title,
  description,
  icon,
  imageSrc,
}) => {
  return (
    <div className="group relative bg-white rounded-2xl ring-1 ring-black/[0.04] hover:shadow-xl hover:shadow-forest/5 transition-all duration-500 overflow-hidden">
      {/* Image */}
      {imageSrc && (
        <div className="h-44 sm:h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Icon */}
        <div className="mb-4 text-[#0992C2] [&_svg]:w-10 [&_svg]:h-10">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-display font-bold text-charcoal mb-2.5 leading-snug">{title}</h3>

        {/* Description */}
        <p className="text-sm text-sage leading-relaxed">{description}</p>
      </div>

      {/* Hover accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0B2D72] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};

export const WhyChooseUsExtendedCard = WhyChooseUsCard;

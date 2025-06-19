"use client"

import React, { useState } from "react";
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
  index,
  title,
  description,
  icon,
  icon2,
  extraText,
  imageSrc
}) => {
    const [isExtended, setIsExtended] = useState(false);

  return (
    <div className="relative">
      <div className={`relative bg-white border-t-[0.5px] min-h-[280px] sm:min-h-[300px] md:min-h-[310px] rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center text-center max-w-sm sm:max-w-md mx-auto pb-8 sm:pb-10 h-fit ${isExtended ? 'hidden' : 'h-fit'}`}>
        {/* Icon/Logo */}
        <div className="mb-4 sm:mb-5 md:mb-6 text-[#02357E] scale-75 sm:scale-90 md:scale-100">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 font-poppins">{title}</h3>

        {/* Description */}
        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-roboto">{description}</p>

        {/* Arrow Button */}
        <div className="absolute -bottom-8 sm:-bottom-10">
          <button 
            onClick={() => setIsExtended(!isExtended)}
            className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center transition-transform hover:scale-105"
            aria-label="Learn more"
          >
              <svg width="70" height="70" className="sm:w-80 sm:h-80 md:w-90 md:h-90" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="38.9629" width="55" height="55.1021" rx="27.5" transform="rotate(45 38.9629 0)" fill="#02357E"/>
                  <path d="M28.9719 50.6177C28.8099 50.4556 28.7053 50.2349 28.6931 49.9879C28.6675 49.4601 29.0747 49.0115 29.6022 48.9859L48.1592 48.0852L48.9861 29.6053C49.0098 29.0776 49.4568 28.6687 49.9845 28.6924C50.5122 28.7162 50.9212 29.1631 50.8975 29.6908L50.0315 49.041C50.0093 49.5343 49.6155 49.9297 49.1222 49.9538L29.695 50.897C29.4145 50.9106 29.1561 50.8018 28.9719 50.6177Z" fill="white"/>
                  <path d="M48.3997 49.6746L28.1786 29.4535C27.8051 29.08 27.805 28.4743 28.1786 28.1007C28.5523 27.727 29.158 27.7271 29.5315 28.1007L49.7526 48.3217C50.1262 48.6954 50.1262 49.3009 49.7526 49.6746C49.3789 50.0483 48.7734 50.0482 48.3997 49.6746Z" fill="white"/>
              </svg>
          </button>
        </div>
      </div>
      
      {isExtended && (
        <div className={`absolute left-0 right-0 z-20 ${Number(index) === 0 || Number(index) === 1 || Number(index) === 2 ? 'top-0' : 'bottom-0'}`}>
          <WhyChooseUsExtendedCard
            title={title}
            index={index}
            description={description}
            icon={icon2}
            onClick={() => {setIsExtended(!isExtended)}}
            extraText={extraText}
            imageSrc={imageSrc}
          />
        </div>
      )}
    </div>
  );
};

export const WhyChooseUsExtendedCard: React.FC<WhyChooseUsCardProps> = ({
  title,
  description,
  icon,
  onClick,
  extraText,
  imageSrc,
}) => {
  return (
    <div className="relative bg-[#02357E] min-h-[500px] sm:min-h-[580px] md:min-h-[655px] rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-5 md:p-6 flex flex-col items-center text-center max-w-sm sm:max-w-md mx-auto overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1407 646" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <g filter="url(#filter0_n_44_362)">
            <path d="M0 36C0 16.1177 16.1177 0 36 0H1371C1390.88 0 1407 16.1178 1407 36V646H0V36Z" fill="#02357E"/>
          </g>
          <defs>
            <filter id="filter0_n_44_362" x="0" y="0" width="1407" height="646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feTurbulence type="fractalNoise" baseFrequency="0.90909087657928467 0.90909087657928467" stitchTiles="stitch" numOctaves="3" result="noise" seed="7740" />
              <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
              <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
              </feComponentTransfer>
              <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
              <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
              <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
              <feMerge result="effect1_noise_44_362">
                <feMergeNode in="shape" />
                <feMergeNode in="color1" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
      
      {/* Content (z-index to display above the texture) */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Icon/Logo */}
        <div className="mb-4 sm:mb-5 text-white scale-75 sm:scale-90 md:scale-100">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 sm:mb-5 md:mb-6 font-poppins4">{title}</h3>

        {/* Description */}
        <p className="text-white text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-roboto">{description}</p>
        
        {/* Extra Text */}
        {extraText && (
          <p className="text-white text-sm sm:text-base leading-relaxed italic mb-6 sm:mb-8 md:mb-10 font-roboto">{extraText}</p>
        )}
        
        {/* Bottom Image */}
        <div className="relative w-full flex justify-center items-center">
            {imageSrc && (
            <div className="mt-2 sm:mt-3 md:mt-4 w-full">
                <div className="h-40 sm:h-48 md:h-52 w-full overflow-hidden rounded-lg sm:rounded-xl">
                <Image 
                    src={imageSrc} 
                    alt={title} 
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                />
                </div>
            </div>
            )}
            
            {/* Arrow Button (if needed) */}
            <div className="absolute -top-8 sm:-top-10 left-1/2 transfrom -translate-x-1/2">
            {onClick && (
            <div className="mt-2 sm:mt-3 md:mt-4">
                <button 
                onClick={onClick}
                className="flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20"
                aria-label="Learn more"
                >
                <svg width="78" height="78" className="sm:w-70 sm:h-70 md:w-78 md:h-78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="38.8906" width="55.1021" height="55" rx="27.5" transform="rotate(45 38.8906 0)" fill="white"/>
                    <path d="M50.6181 48.8816C50.4561 49.0437 50.2354 49.1482 49.9884 49.1604C49.4606 49.186 49.012 48.7788 48.9864 48.2513L48.0857 29.6943L29.6058 28.8674C29.078 28.8437 28.6692 28.3967 28.6929 27.869C28.7167 27.3413 29.1635 26.9324 29.6913 26.956L49.0415 27.822C49.5348 27.8442 49.9302 28.238 49.9543 28.7313L50.8975 48.1585C50.9111 48.4391 50.8023 48.6975 50.6181 48.8816Z" fill="#02357E"/>
                    <path d="M49.6751 29.4538L29.454 49.6749C29.0805 50.0484 28.4748 50.0485 28.1011 49.6749C27.7275 49.3012 27.7276 48.6955 28.1011 48.322L48.3222 28.1009C48.6959 27.7273 49.3014 27.7273 49.6751 28.1009C50.0487 28.4746 50.0487 29.0802 49.6751 29.4538Z" fill="#02357E"/>
                </svg>

                </button>
            </div>
            )}
            </div>
        </div>
      </div>
    </div>
  );
};

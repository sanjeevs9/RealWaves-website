import React from "react";
import Image from "next/image";
import Link from "next/link";
import yellowBag from "@/public/heroSection/TopLeftBag.png";
import bagsBottom from "@/public/heroSection/bagsOnTable.png";
import shoppingBags from "@/public/heroSection/categoryBag.png";
import ModelImage from "@/public/heroSection/ModelHoldingBag.png";
import logo from "@/public/icon.png";
import CategorySection from "../Sections/CategorySection";

const Hero = () => {
  return (
    <>
    <div className="p-4 pb-0 bg-[#F9F9F9] relative">
      <div className="relative w-full min-h-[600px] bg-[#2476FE] overflow-hidden rounded-tr-3xl rounded-tl-3xl">
        {/* Background texture */}
        <div className="absolute inset-0 z-0">
          <svg width="100%" height="100%" viewBox="0 0 1407 646" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <g filter="url(#filter0_n_44_362)">
              <path d="M0 36C0 16.1177 16.1177 0 36 0H1371C1390.88 0 1407 16.1178 1407 36V646H0V36Z" fill="#2476FE"/>
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

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 py-20 pb-32 flex flex-col items-center ">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src={logo.src}
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Center content */}
          <div className=" text-center flex flex-col items-center text-white max-w-3xl  pt-10 ">
            <h1 className="text-4xl font-normal md:text-5xl lg:text-6xl mb-6 font-roboto">
            Premium Non-Woven Bags,
              <br />
              Manufacturer & Exporter
            </h1>
            <p className="text-xl md:text-2xl font-semibold mb-8 tracking-wide text-white/90 font-poppins">
              Sustainable. Customizable. Reusable.
            </p>
            <p className="text-sm md:text-base mb-14 max-w-lg mx-auto font-poppins">
            Based in Raipur, Chhattisgarh | 7+ Years of Trusted Manufacturing
            </p>
            <Link
              href="/products"
              className="flex w-[221px] h-[48px] px-0 py-[1px] justify-center items-center gap-4 flex-shrink-0 rounded-[261px] bg-white text-black font-poppins text-base font-normal leading-[110%] tracking-[0.64px] capitalize shadow-[inset_0px_0px_8.7px_0px_rgba(0,0,0,0.51)] hover:bg-opacity-90 transition-all"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Yellow bag top left */}
        <div className="absolute top-0 left-0 ">
          <Image
            src={yellowBag.src}
            alt="Yellow handbag"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>

        {/* Shopping bags top right */}
        <div className="absolute top-0 right-0 ">
          <Image
            src={shoppingBags.src}
            alt="Shopping bags"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>

        {/* Person with shopping bags bottom left */}
        <div className="absolute -bottom-40 left-5 ">
          <Image
            src={ModelImage.src}
            alt="Person with shopping bags"
            width={350}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Collection of bags bottom right */}
        <div className="absolute bottom-6 right-0 ">
          <Image
            src={bagsBottom.src}
            alt="Collection of bags"
            width={300}
            height={280}
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Category Section positioned to overlap */}
      <div className="relative -mt-20 ">
        <CategorySection />
      </div>
    </div>
    </>
  );
};

export default Hero;

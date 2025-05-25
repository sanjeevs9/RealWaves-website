import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import textureBg from "@/public/heroSection/hero-background.webp"
import yellowBag from "@/public/heroSection/TopLeftBag.png"
import bagsBottom from "@/public/heroSection/bagsOnTable.png"
import shoppingBags from "@/public/heroSection/categoryBag.png"
import ModelImage from "@/public/heroSection/ModelHoldingBag.png"
import logo from "@/public/logo.png"

const Hero = () => {
  return (
    <div className="relative w-full min-h-[500px] bg-blue-600 ">
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src={textureBg.src}
          alt="Background texture"
          fill
          className="object-cover opacity-10"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src={logo.src} 
            alt="Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Center content */}
        <div className="text-center text-white max-w-2xl mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Customize, your Bags
            <br />
            all in budget
          </h1>
          <p className="text-sm md:text-base mb-8 max-w-lg mx-auto">
            Discover our exclusive range of high-quality bags designed for retailers
            and corporate clients. Experience unmatched durability, style, and value
            with every order.
          </p>
          <Link 
            href="/products" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            Explore Products
          </Link>
        </div>
      </div>

      {/* Yellow bag top left */}
      <div className="absolute top-8 left-8 md:left-24">
        <Image
          src={yellowBag.src}
          alt="Yellow handbag"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Shopping bags top right */}
      <div className="absolute top-8 right-8 md:right-24">
        <Image
          src={shoppingBags.src}
          alt="Shopping bags"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* Person with shopping bags bottom left */}
      <div className="absolute bottom-8 left-8 md:left-24">
        <Image
          src={ModelImage.src}
          alt="Person with shopping bags"
          width={180}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Collection of bags bottom right */}
      <div className="absolute bottom-8 right-8 md:right-24">
        <Image
          src={bagsBottom.src}
          alt="Collection of bags"
          width={200}
          height={180}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;

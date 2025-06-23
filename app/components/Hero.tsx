"use client"
import React, {  useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring, useAnimation } from "framer-motion";
import yellowBag from "@/public/heroSection/Adobe Express - file.png";
// import bagsBottom from "@/public/heroSection/bagsOnTable.png";
import shoppingBags from "@/public/heroSection/categoryBag.png";
import ModelImage from "@/public/heroSection/ModelHoldingBag.png";
import logo from "@/public/icon.png";
import CategorySection from "../Sections/CategorySection";
import heroImage from "@/public/heroSection/New Project (2).png";

const Hero = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const bagAnimation = useAnimation();

  // Physics-based motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position to bag rotation
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  // Spring physics for smooth movement
  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  useEffect(() => {
    // Drop animation on page load
    bagAnimation.start({
      y: [0, 50, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 1.5,
        ease: "easeOut",
        times: [0, 0.6, 0.8, 1]
      }
    });

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [bagAnimation, mouseX, mouseY]);

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "919009990000"; // Add your WhatsApp number here
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

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

        {/* WhatsApp Floating Button */}
        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="white"
            className="group-hover:scale-110 transition-transform duration-300"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>

        {/* Content container */}
        <div className="relative z-10 container mx-auto px-4 py-20 pb-32 flex flex-col items-center ">
          {/* Logo */}
          <div className="md:mb-6 pr-5 md:pr-0">
            <Image
            className="object-contain w-20 h-20 sm:w-30 sm:h-30  md:w-32 md:h-32 "
              src={logo.src}
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          {/* Center content */}
          <div className=" text-center flex flex-col items-center text-white max-w-3xl  pt-10 lg:gap-6 ">
            <h1 className="text-2xl font-normal md:text-5xl lg:text-6xl mb-6 font-roboto">
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
              className="flex w-[180px] h-[48px] sm:w-[221px] sm:h-[48px] px-0 py-[1px] justify-center items-center gap-4 flex-shrink-0 rounded-[261px] bg-white text-black font-poppins text-sm sm:text-base font-normal leading-[110%] tracking-[0.64px] capitalize shadow-[inset_0px_0px_8.7px_0px_rgba(0,0,0,0.51)] hover:bg-opacity-90 transition-all"
            >
              View Products
            </Link>
          </div>
        </div>

        {/* Animated Yellow bag top left */}
        <motion.div 
          className=" absolute -top-10 sm:-top-11 md:-top-16 lg:-top-20 left-0"
          animate={bagAnimation}
          style={{
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: "preserve-3d",
            transformOrigin: "center center"
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src={yellowBag.src}
              alt="Yellow handbag"
              width={350}
              height={350}
              className="object-contain w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-80 lg:h-80 drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Shopping bags top right */}
        <div className="hidden  absolute top-0 right-0 ">
          <Image
            src={shoppingBags.src}
            alt="Shopping bags"
            width={250}
            height={250}
            className="object-contain w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-70 lg:h-70"
          />
        </div>

        {/* Person with shopping bags bottom left */}
        <div className="hidden md:block absolute  md:-bottom-40 left-5 ">
          <Image
            src={ModelImage.src}
            alt="Person with shopping bags"
            width={350}
            height={400}
            className="object-contain w-40 h-40 sm:w-50 sm:h-50 md:w-60 md:h-60 lg:w-70 lg:h-70"
          />
        </div>

        {/* Collection of bags bottom right */}
        <div className="hidden md:block absolute bottom-10 -right-10 ">
          <Image
            src={heroImage.src}
            alt="Collection of bags"
            width={600}
            height={500}
            className="object-contain md:w-96 lg:w-full 2xl:w-[600px]"
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

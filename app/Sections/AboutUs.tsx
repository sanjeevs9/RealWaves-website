import React from "react";
import Image from "next/image";

import logo from "@/public/logo.png";

const AboutVideoSection: React.FC = () => {
  return (
    <div className="bg-white p-5">
      <section className="relative flex items-center rounded-3xl">
        {/* Background Video */}
        <video
          className="absolute inset-0 h-screen w-full md:h-full object-cover rounded-3xl"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videos/realwavesVideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0"></div>

        {/* Logo */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
          <Image
            src={logo}
            alt="RealWaves Logo"
            width={300}
            height={80}
            className="h-5 lg:h-12 w-auto"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-screen lg:h-full flex items-end lg:items-center p-5 lg:p-20">
          {/* Left Side Glass Card */}
          <div className="w-full max-w-2xl mb-8 md:mb-12">
            <div className="backdrop-blur-xl bg-black/30 rounded-2xl border border-white/20 shadow-2xl p-6 md:p-8 lg:p-10">
              {/* About Us Label */}
              <p className="text-white font-['Roboto'] text-sm sm:text-base font-normal leading-[124%] tracking-[0.8px] uppercase mb-6">
                About Us
              </p>

              {/* Main Heading */}
              <h2 className="text-white font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-normal leading-[124%] tracking-[2px] mb-8">
                Our Journey-From
                <br />
                Trial to Excellence
              </h2>

              {/* Content Paragraphs */}
              <div className="space-y-6 text-gray-200 text-base md:text-lg leading-relaxed mb-12 font-roboto">
                <p>
                Realwaves is a leading manufacturer and exporter of eco-friendly, durable, and customizable non-woven bags, proudly operating from Raipur, Chhattisgarh for over 7 years.


                </p>
                <p className="hidden md:block">
                Backed by advanced machinery, skilled professionals, and a strict quality control process, every Realwaves bag is a step toward a greener tomorrow.
                </p>
              </div>

              {/* Statistics Section */}
              <div className="">
                <div className="grid grid-cols-3 gap-6 md:gap-8">
                  <div className="text-left">
                    <div className="w-full h-[2px] md:h-[3px] bg-blue-500 rounded-full mb-4"></div>
                    <h3 className="text-base md:text-3xl font-normal text-white mb-2">7+ years</h3>
                    <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
                      of establishing brands larger than life
                    </p>
                  </div>
                  
                  <div className="text-left">
                    <div className="w-full h-[2px] md:h-[3px] bg-blue-500 rounded-full mb-4"></div>
                    <h3 className="text-base md:text-2xl font-normal text-white mb-2">2000+ clients</h3>
                    <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
                      With happy reviews
                    </p>
                  </div>
                  
                  <div className="text-left">
                    <div className="w-full h-[2px] md:h-[3px] bg-blue-500 rounded-full mb-4"></div>
                    <h3 className="text-base md:text-3xl font-normal text-white mb-2">2 Lakh+</h3>
                    <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
                      bags per day manufacturing capability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutVideoSection;

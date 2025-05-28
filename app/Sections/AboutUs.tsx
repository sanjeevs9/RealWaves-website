import React from "react";
import Image from "next/image";

import logo from "@/public/logo.png";

const AboutVideoSection: React.FC = () => {
  return (
    <div className="bg-white p-5">
      <section className="relative flex items-center rounded-3xl">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
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
            className="h-12 w-auto"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center p-20">
          {/* Left Side Glass Card */}
          <div className="w-full max-w-2xl ml-8 md:ml-16 lg:ml-20">
            <div className="backdrop-blur-xl bg-black/30 rounded-2xl border border-white/20 shadow-2xl p-6 md:p-8 lg:p-10">
              {/* About Us Label */}
              <p className="text-white font-['Roboto'] text-base font-normal leading-[124%] tracking-[0.8px] uppercase mb-6">
                About Us
              </p>

              {/* Main Heading */}
              <h2 className="text-white font-poppins text-[50px] font-normal leading-[124%] tracking-[2px] mb-8">
                Our Journey-From
                <br />
                Trial to Excellence
              </h2>

              {/* Content Paragraphs */}
              <div className="space-y-6 text-gray-200 text-base md:text-lg leading-relaxed mb-12 font-roboto">
                <p>
                  With over 22 years of experience in the garment and textile
                  industry, our director,{" "}
                  <span className="font-semibold text-white">
                    Mr. Chandan Kumar Chaudhary
                  </span>
                  , is the driving force behind Realwaves Packs India Private
                  Limited.
                </p>
                <p>
                  His journey began in his family&apos;s business, where he
                  immersed himself in the world of fabrics and design, gaining
                  invaluable insights and honing his entrepreneurial spirit.
                </p>
              </div>

              {/* Statistics Section */}
              <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                  <div className="text-left">
                    <div className="w-full h-[3px] bg-blue-500 rounded-full mb-4"></div>
                    <h3 className="text-2xl md:text-3xl font-normal text-white mb-2">7+ years</h3>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      of establishing brands larger than life
                    </p>
                  </div>
                  
                  <div className="text-left">
                    <div className="w-full h-[3px] bg-blue-500 rounded-full mb-4"></div>
                    <h3 className="text-2xl md:text-3xl font-normal text-white mb-2">100+ clients</h3>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      With happy reviews and repeated offers
                    </p>
                  </div>
                  
                  <div className="text-left">
                    <div className="w-full h-[3px] bg-blue-500 rounded-full mb-4"></div>
                    <h3 className="text-2xl md:text-3xl font-normal text-white mb-2">96% retain</h3>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      of establishing brands larger than life
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

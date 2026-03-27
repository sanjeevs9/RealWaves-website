'use client'
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { FadeIn, ScaleIn } from '../components/animations';

const AboutVideoSection: React.FC = () => {
  return (
    <section className="bg-cream p-3 sm:p-5">
      <div className="relative flex items-center rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 h-screen w-full md:h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/realwavesVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-charcoal/10" />

        {/* Logo watermark */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
          <Image
            src={logo}
            alt="RealWaves Logo"
            width={300}
            height={80}
            className="h-5 lg:h-12 w-auto opacity-70"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-screen lg:h-full flex items-end lg:items-center p-5 lg:p-16 xl:p-20">
          <div className="w-full max-w-2xl mb-8 md:mb-12">
            <ScaleIn delay={0.1}>
            <div className="backdrop-blur-2xl bg-forest-dark/55 rounded-2xl border border-white/10 shadow-2xl p-6 md:p-8 lg:p-10">
              {/* Label */}
              <FadeIn delay={0.1} direction="none">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span className="text-white/80 text-xs font-medium tracking-widest uppercase">About Us</span>
              </div>
              </FadeIn>

              {/* Heading */}
              <FadeIn delay={0.15} direction="up">
              <h2 className="text-white font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight mb-6 lg:mb-8">
                Our Journey &mdash; From
                <br />
                Trial to Excellence
              </h2>
              </FadeIn>

              {/* Description */}
              <FadeIn delay={0.25} direction="up">
              <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed mb-8 lg:mb-10">
                <p>
                  Realwaves is a leading manufacturer of eco-friendly, durable, and customizable non-woven bags, proudly operating from Raipur, Chhattisgarh for over 7 years.
                </p>
                <p className="hidden md:block">
                  Backed by advanced machinery, skilled professionals, and a strict quality control process, every Realwaves bag is a step toward a greener tomorrow.
                </p>
              </div>
              </FadeIn>

              {/* Stats */}
              <FadeIn delay={0.3} direction="up">
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                {[
                  { value: '7+ years', label: 'of establishing brands larger than life' },
                  { value: '2000+ clients', label: 'with happy reviews' },
                  { value: '2 Lakh+', label: 'bags per day manufacturing capability' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="w-full h-[2px] bg-white/20 rounded-full mb-3 lg:mb-4" />
                    <h3 className="text-sm md:text-2xl font-semibold text-white mb-1">{stat.value}</h3>
                    <p className="text-[10px] md:text-xs text-white/50 leading-relaxed">{stat.label}</p>
                  </div>
                ))}
              </div>
              </FadeIn>
            </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVideoSection;

'use client'
import React, { useEffect, useRef } from "react";
import type { StaticImageData } from "next/image";
import printingPoster from "@/public/factory/printing.webp";
import bagMakingPoster from "@/public/factory/bag-making.webp";
import inShopsPoster from "@/public/factory/in-shops.webp";

// The 40-second factory film, cut into three short muted loops (public/factory/*.mp4,
// 640px wide, cut from public/videos/realwavesVideo.mp4 with ffmpeg).
const STEPS = [
  {
    title: "Printed",
    text: "Your logo is printed on non-woven fabric on our own machines.",
    video: "/factory/printing.mp4",
    poster: printingPoster,
    label: "Fabric being printed with a customer's logo on the RealWaves printing machine",
  },
  {
    title: "Made into bags",
    text: "Cut, sealed and fitted with handles in the same factory.",
    video: "/factory/bag-making.mp4",
    poster: bagMakingPoster,
    label: "Printed bags coming off the bag-making machine",
  },
  {
    title: "On your counter",
    text: "Packed in Raipur and delivered to your shop anywhere in India.",
    video: "/factory/in-shops.mp4",
    poster: inShopsPoster,
    label: "RealWaves bags being handed to customers at shop counters",
  },
];

const STATS = [
  { value: "2 lakh+", label: "bags a day" },
  { value: "2000+", label: "businesses" },
  { value: "100+", label: "cities" },
];

// A muted clip that only downloads once it nears the screen, plays while visible and
// pauses when scrolled away. People who ask for reduced motion just see the poster.
function LoopClip({ src, poster, label }: { src: string; poster: StaticImageData; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) video.src = src;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "120px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      poster={poster.src}
      preload="none"
      muted
      loop
      playsInline
      aria-label={label}
      className="block aspect-[4/3] w-full rounded-3xl bg-forest object-cover"
    />
  );
}

const AboutVideoSection: React.FC = () => {
  return (
    <section aria-labelledby="about-title" className="bg-cream px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-5">
          <div className="min-w-0 flex-1 basis-[420px]">
            <p className="text-[15px] font-semibold text-sage">About RealWaves Packs</p>
            <h2 id="about-title" className="section-heading mt-3 text-balance">
              From our machines to your counter
            </h2>
          </div>
          <p className="min-w-0 flex-1 basis-[340px] text-pretty text-base leading-relaxed text-sage sm:text-[17px]">
            Since 2017, every RealWaves bag has been printed and made in our own factory in Raipur, then sent to shops across India.
          </p>
        </div>

        {/* Phones: a swipeable row with the next step peeking in, so the three clips
            don't stack into a very long scroll. Tablets and up: a grid. */}
        <ol className="-mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:mt-12 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-6 [&::-webkit-scrollbar]:hidden">
          {STEPS.map((step, i) => (
            <li key={step.title} className="w-[82%] min-w-0 flex-none snap-start sm:w-auto">
              <LoopClip src={step.video} poster={step.poster} label={step.label} />
              <div className="mt-4 flex items-start gap-3.5 sm:mt-5 sm:gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-forest text-[15px] font-semibold text-bronze"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="mt-1.5 text-lg font-semibold sm:text-xl tracking-[-0.01em] text-charcoal">{step.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-sage">{step.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border-t border-[#EADFC4] pt-7 sm:mt-12">
          <dl className="grid w-full grid-cols-3 gap-3 sm:flex sm:w-auto sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-2">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-[22px] font-semibold tracking-[-0.02em] text-charcoal">{stat.value}</dd>
                <dd aria-hidden="true" className="text-sm text-sage sm:text-[15px]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default AboutVideoSection;

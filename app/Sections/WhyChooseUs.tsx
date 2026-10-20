import Image from "next/image";
import sweetShopBag from "@/public/bags/u-cut2.webp";
import sareeBag from "@/public/bags/LH4.webp";
import bakeryBag from "@/public/bags/Box5.webp";
import { whatsappUrl } from "../site";

// Copy only states what the site already claims elsewhere.
const iconProps = {
  "aria-hidden": true,
  className: "h-[30px] w-[30px]",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const REASONS = [
  {
    title: "Our own factory",
    text: "Quality and dates stay in our hands.",
    icon: (
      <svg {...iconProps}>
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1" />
        <path d="M12 18h1" />
        <path d="M7 18h1" />
      </svg>
    ),
  },
  {
    title: "Your logo, done right",
    text: "No artwork yet? We'll help with the design.",
    icon: (
      <svg {...iconProps}>
        <path d="M6 9V2h12v7" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    ),
  },
  {
    title: "Delivered across India",
    text: "Packed in Raipur, sent to 100+ cities.",
    icon: (
      <svg {...iconProps}>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: "Reusable and recyclable",
    text: "Fabric customers carry again and again.",
    icon: (
      <svg {...iconProps}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="bg-cream px-4 pb-16 pt-4 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[15px] font-semibold text-sage">Why choose us</p>
          <h2 id="why-title" className="section-heading mt-3">
            Why shops choose RealWaves
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-2">
          {/* Big tile: the five styles, shown with three real customer bags */}
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl bg-bronze p-8 sm:min-h-[456px] sm:p-9">
            <h3 className="relative z-10 font-display text-2xl font-semibold tracking-[-0.02em] text-charcoal sm:text-[1.75rem]">
              Five bag styles, one supplier
            </h3>
            <p className="relative z-10 mt-2.5 max-w-[22rem] text-base leading-relaxed text-sage">
              D-Cut, U-Cut, Loop Handle, Box and BOPP laminated, all printed with your logo.
            </p>
            <Image
              src={sweetShopBag}
              alt="U-Cut bag printed for a sweet shop"
              sizes="(min-width: 1024px) 140px, 30vw"
              className="absolute -bottom-3.5 left-[8%] h-[46%] w-auto -rotate-[5deg] drop-shadow-[0_12px_16px_rgba(11,45,114,0.22)]"
            />
            <Image
              src={bakeryBag}
              alt="Green box bag printed for a bakery"
              sizes="(min-width: 1024px) 190px, 40vw"
              className="absolute -bottom-3.5 right-[2%] h-[36%] w-auto rotate-[5deg] drop-shadow-[0_12px_16px_rgba(11,45,114,0.22)] sm:right-[6%] sm:h-[40%]"
            />
            <Image
              src={sareeBag}
              alt="Paisley printed loop-handle bag for a saree shop"
              sizes="(min-width: 1024px) 170px, 40vw"
              className="absolute -bottom-3 left-[27%] h-[58%] w-auto drop-shadow-[0_12px_16px_rgba(11,45,114,0.22)] sm:left-[33%]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {REASONS.map((reason) => (
              <div key={reason.title} className="rounded-3xl bg-white p-5 sm:p-7">
                <span className="flex text-charcoal">{reason.icon}</span>
                <h3 className="mt-4 text-base font-semibold leading-snug sm:mt-[18px] sm:text-[19px] tracking-[-0.01em] text-charcoal">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-sage sm:mt-2 sm:text-[15px]">{reason.text}</p>
              </div>
            ))}
          </div>

          {/* Full-width bar: quotes, with the call to action */}
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 rounded-3xl bg-forest px-7 py-7 text-ivory sm:px-9 lg:col-span-2">
            <div className="flex items-center gap-5">
              <svg {...iconProps} className="h-[30px] w-[30px] flex-none text-bronze">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              <div>
                <h3 className="text-[21px] font-semibold tracking-[-0.01em]">Quick, fair quotes</h3>
                <p className="mt-1 text-[15px] text-mist">Send the style and quantity on WhatsApp and get a clear price.</p>
              </div>
            </div>
            <a
              href={whatsappUrl("Hi RealWaves, I'd like a quote for non-woven bags.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-bronze px-6 text-[15px] font-semibold text-forest transition-colors hover:bg-bronze-light"
            >
              Get a quote
              <svg aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

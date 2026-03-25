'use client';

import { ReactNode } from 'react';

interface Review {
  quote: string;
  name: string;
  role: string;
  logo: ReactNode;
}

// Brand logo SVG components
function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function AmazonLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#FF9900">
      <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705a.66.66 0 0 1-.753.077c-1.06-.878-1.25-1.284-1.828-2.12-1.747 1.782-2.983 2.315-5.249 2.315-2.68 0-4.764-1.654-4.764-4.96 0-2.583 1.4-4.339 3.392-5.2 1.726-.754 4.14-.889 5.983-1.098V6.39c0-.72.055-1.57-.368-2.19-.37-.556-1.079-.786-1.703-.786-1.158 0-2.19.594-2.443 1.825-.052.273-.252.542-.527.555l-2.94-.317c-.248-.055-.524-.255-.453-.634C6.071 1.665 9.158.502 11.94.502c1.416 0 3.27.377 4.384 1.45 1.416 1.322 1.28 3.084 1.28 5.004v4.533c0 1.363.564 1.96 1.097 2.696.187.263.228.578-.01.773-.594.496-1.651 1.42-2.233 1.937l-.013-.1z"/>
      <path d="M21.63 17.452c-1.804 1.332-4.426 2.044-6.679 2.044-3.161 0-6.006-1.168-8.157-3.113-.169-.152-.018-.36.185-.242 2.322 1.352 5.196 2.164 8.162 2.164 2.001 0 4.203-.414 6.228-1.272.305-.13.562.201.261.419z"/>
      <path d="M22.415 16.24c-.23-.295-1.523-.14-2.104-.07-.176.022-.203-.132-.044-.243 1.03-.724 2.72-.515 2.917-.272.198.246-.052 1.94-.018 2.217-.13.176-.255.082-.197-.134.192-.474.623-1.535.393-1.83l.053.332z"/>
    </svg>
  );
}

function MicrosoftLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
      <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
      <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
      <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
      <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
    </svg>
  );
}

function SlackLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
      <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.27 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.163 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
      <path d="M15.163 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.163 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.27a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.315A2.528 2.528 0 0 1 24 15.163a2.528 2.528 0 0 1-2.522 2.523h-6.315z" fill="#ECB22E"/>
    </svg>
  );
}

function AppleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#555">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function ShopifyLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#96BF48">
      <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.058-.121-.074l-.914 21.104zm-1.332-17.525c0 .006-.209.068-.527.168-.316-.912-.876-1.752-1.864-1.752h-.076c-.279-.359-.623-.518-.928-.518-2.293 0-3.392 2.861-3.734 4.313-.888.275-1.521.47-1.6.496-.499.156-.514.171-.579.638-.051.358-1.348 10.365-1.348 10.365l10.09 1.893.566-15.603zM11.487 6.26c0 .065 0 .136-.006.201-.543.168-1.139.352-1.74.539.336-1.291.964-1.916 1.515-2.151.141.363.231.849.231 1.411zM10.507 4.2c.1 0 .199.034.297.104-.72.338-1.494 1.188-1.82 2.886-.479.148-.947.293-1.383.428.384-1.312 1.271-3.418 2.906-3.418zM11.002 13.508c.053.865.028 1.842-.143 2.576-.514-.263-.869-1.061-.869-1.893 0-.445.057-.899.161-1.274.276.153.555.355.851.591zm1.422-5.869c.063 0 .117.009.174.027-.604.737-.879 1.884-.879 3.025 0 .313.021.605.063.875-1.191-.865-.917-2.86-.055-3.699.23-.147.457-.228.697-.228z"/>
    </svg>
  );
}

function MetaLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function SpotifyLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#1DB954">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );
}

function NotionLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#000">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.046-.747.326-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933zM2.64 1.782l13.075-.933c1.634-.14 2.055-.047 3.082.7l4.25 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.046-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V3.462c0-.84.374-1.54 1.681-1.68z"/>
    </svg>
  );
}

function StripeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="#635BFF">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-7.076-2.19l-.893 5.575C4.747 22.704 7.676 24 11.501 24c2.6 0 4.716-.693 6.22-1.956 1.614-1.349 2.408-3.28 2.408-5.762 0-4.085-2.467-5.78-6.153-7.132z"/>
    </svg>
  );
}

const topRowReviews: Review[] = [
  {
    quote:
      'RealWaves bags have transformed how we approach packaging and branding. We now make eco-friendly choices that positively impact our business.',
    name: 'Rajesh Agarwal',
    role: 'Director, Shringaar Sweets',
    logo: <GoogleLogo />,
  },
  {
    quote:
      '\u201CSwitching to RealWaves was a game-changer for us. Their platform streamlined our packaging processes, saving us countless hours each month.\u201D',
    name: 'Priya Bajaj',
    role: 'Owner, Bajaj Retail',
    logo: <AmazonLogo />,
  },
  {
    quote:
      '\u201CThe quality features offered give us peace of mind knowing that our brand image is protected.\u201D',
    name: 'Amit Sharma',
    role: 'Marketing Head, Fusion Mart',
    logo: <MicrosoftLogo />,
  },
  {
    quote:
      '\u201CThe integration process was seamless and we were up and running in no time with custom printed bags.\u201D',
    name: 'Deepak Verma',
    role: 'CEO, Bonzelo Foods',
    logo: <SlackLogo />,
  },
  {
    quote:
      '\u201COutstanding quality at competitive prices. RealWaves has become our go-to supplier for all non-woven packaging needs.\u201D',
    name: 'Sneha Reddy',
    role: 'Procurement, Metro Bazaar',
    logo: <AppleLogo />,
  },
];

const bottomRowReviews: Review[] = [
  {
    quote:
      '\u201CThe customer support has been outstanding. Whenever we have questions or need assistance, their team is quick to respond and incredibly helpful.\u201D',
    name: 'Kavita Menon',
    role: 'Operations Head, FreshMart',
    logo: <MetaLogo />,
  },
  {
    quote:
      '\u201CWe\u2019ve seen a significant improvement in our brand presentation since the switch.\u201D',
    name: 'Vikram Singh',
    role: 'Director, Singh Textiles',
    logo: <SpotifyLogo />,
  },
  {
    quote:
      '\u201CI can\u2019t recommend RealWaves enough! Their eco-friendly bags have made it easier for us to manage customer applications and approvals, resulting in faster turnaround times and happier clients.\u201D',
    name: 'Ananya Patel',
    role: 'Founder, GreenLeaf Organics',
    logo: <ShopifyLogo />,
  },
  {
    quote:
      '\u201CThe bulk ordering efficiency has drastically improved. Turnaround time has enhanced significantly and our retail partners love the bags.\u201D',
    name: 'Rohan Gupta',
    role: 'Supply Chain, QuickStop',
    logo: <NotionLogo />,
  },
  {
    quote:
      '\u201CExceptional print clarity and bag strength. Every delivery has been consistent and on time \u2014 truly reliable.\u201D',
    name: 'Meera Joshi',
    role: 'Owner, Joshi Provisions',
    logo: <StripeLogo />,
  },
];

function ChevronRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[340px] min-h-0 sm:min-h-[210px] bg-white rounded-xl sm:rounded-2xl border border-gray-200/70 px-4 sm:px-7 py-3 sm:py-6 flex flex-col justify-between gap-3 sm:gap-6">
      <p className="text-[13px] sm:text-[14.5px] leading-[1.6] sm:leading-[1.7] text-gray-600 font-body tracking-[0.01em]">
        {review.quote}
      </p>

      <div className="flex items-center justify-between pt-1">
        <div className="min-w-0">
          <p className="text-[13px] sm:text-[15px] font-semibold text-gray-900 font-body tracking-[-0.01em]">
            {review.name}
          </p>
          <p className="text-[11px] sm:text-[13px] text-gray-400 font-body mt-0.5">
            {review.role}
          </p>
        </div>

        <div className="flex-shrink-0 ml-4">
          {review.logo}
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  reviews,
  direction = 'left',
  speed = 40,
}: {
  reviews: Review[];
  direction?: 'left' | 'right';
  speed?: number;
}) {
  const animName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-[#FAFCFF] via-[#FAFCFF]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-[#FAFCFF] via-[#FAFCFF]/80 to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-3 sm:gap-5 hover:[animation-play-state:paused]"
        style={{
          animation: `${animName} ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-1 overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="text-center mb-8 sm:mb-14 lg:mb-16 px-4">
        {/* <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 mb-6 backdrop-blur-sm">
          <ChatIcon />
          <span className="text-[13px] font-medium text-gray-600 font-body tracking-wide">
            Testimonials
          </span>
        </div> */}

        <h2 className="section-heading">
          What Our Clients Are Saying
        </h2>

        <p className="mt-3 sm:mt-5 text-gray-400 text-[13px] sm:text-[16px] leading-[1.6] sm:leading-[1.7] max-w-lg mx-auto font-body">
          We take pride in delivering exceptional solutions that deliver great
          results. But don&apos;t just take our word for it.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:gap-5">
        <MarqueeRow reviews={topRowReviews} direction="left" speed={45} />
        <MarqueeRow reviews={bottomRowReviews} direction="right" speed={45} />
      </div>

      <div className="text-center mt-14 sm:mt-16">
        <button className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3 text-[14px] font-medium text-gray-600 font-body hover:border-gray-400 hover:text-gray-800 transition-all duration-200 cursor-pointer">
          See all Reviews
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

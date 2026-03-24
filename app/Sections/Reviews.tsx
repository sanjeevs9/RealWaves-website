'use client';

interface Review {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  badgeColor: string;
}

const topRowReviews: Review[] = [
  {
    quote:
      'RealWaves tools have transformed how we approach financial planning and branding. We now make data-driven choices that positively impact our business.',
    name: 'Rajesh Agarwal',
    role: 'Director, Shringaar Sweets',
    initials: 'RA',
    avatarBg: 'bg-gradient-to-br from-amber-600 to-amber-800',
    badgeColor: 'bg-amber-500',
  },
  {
    quote:
      '\u201CSwitching to RealWaves was a game-changer for us. Their platform streamlined our packaging processes, saving us countless hours each month.\u201D',
    name: 'Priya Bajaj',
    role: 'Owner, Bajaj Retail',
    initials: 'PB',
    avatarBg: 'bg-gradient-to-br from-rose-400 to-rose-600',
    badgeColor: 'bg-blue-500',
  },
  {
    quote:
      '\u201CThe quality features offered give us peace of mind knowing that our brand image is protected.\u201D',
    name: 'Amit Sharma',
    role: 'Marketing Head, Fusion Mart',
    initials: 'AS',
    avatarBg: 'bg-gradient-to-br from-sky-500 to-sky-700',
    badgeColor: 'bg-red-500',
  },
  {
    quote:
      '\u201CThe integration process was seamless and we were up and running in no time with custom printed bags.\u201D',
    name: 'Deepak Verma',
    role: 'CEO, Bonzelo Foods',
    initials: 'DV',
    avatarBg: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
    badgeColor: 'bg-emerald-500',
  },
  {
    quote:
      '\u201COutstanding quality at competitive prices. RealWaves has become our go-to supplier for all non-woven packaging needs.\u201D',
    name: 'Sneha Reddy',
    role: 'Procurement, Metro Bazaar',
    initials: 'SR',
    avatarBg: 'bg-gradient-to-br from-violet-400 to-violet-600',
    badgeColor: 'bg-violet-500',
  },
];

const bottomRowReviews: Review[] = [
  {
    quote:
      '\u201CThe customer support has been outstanding. Whenever we have questions or need assistance, their team is quick to respond and incredibly helpful.\u201D',
    name: 'Kavita Menon',
    role: 'Operations Head, FreshMart',
    initials: 'KM',
    avatarBg: 'bg-gradient-to-br from-teal-500 to-teal-700',
    badgeColor: 'bg-slate-700',
  },
  {
    quote:
      '\u201CWe\u2019ve seen a significant improvement in our brand presentation since the switch.\u201D',
    name: 'Vikram Singh',
    role: 'Director, Singh Textiles',
    initials: 'VS',
    avatarBg: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
    badgeColor: 'bg-gradient-to-br from-pink-400 to-purple-500',
  },
  {
    quote:
      '\u201CI can\u2019t recommend RealWaves enough! Their eco-friendly bags have made it easier for us to manage customer applications and approvals, resulting in faster turnaround times and happier clients.\u201D',
    name: 'Ananya Patel',
    role: 'Founder, GreenLeaf Organics',
    initials: 'AP',
    avatarBg: 'bg-gradient-to-br from-pink-400 to-pink-600',
    badgeColor: 'bg-blue-600',
  },
  {
    quote:
      '\u201CThe bulk ordering efficiency has drastically improved. Turnaround time has enhanced significantly and our retail partners love the bags.\u201D',
    name: 'Rohan Gupta',
    role: 'Supply Chain, QuickStop',
    initials: 'RG',
    avatarBg: 'bg-gradient-to-br from-orange-400 to-orange-600',
    badgeColor: 'bg-orange-500',
  },
  {
    quote:
      '\u201CExceptional print clarity and bag strength. Every delivery has been consistent and on time \u2014 truly reliable.\u201D',
    name: 'Meera Joshi',
    role: 'Owner, Joshi Provisions',
    initials: 'MJ',
    avatarBg: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
    badgeColor: 'bg-rose-400',
  },
];

function ChatIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-500"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

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

        <div className="flex-shrink-0 relative ml-4">
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${review.avatarBg} flex items-center justify-center text-white text-[9px] sm:text-[11px] font-bold tracking-wider shadow-sm`}
          >
            {review.initials}
          </div>
          <div
            className={`absolute -bottom-0.5 -right-1 w-[18px] h-[18px] rounded-full ${review.badgeColor} border-[2px] border-white shadow-sm`}
          />
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
      {/* Soft fade edges */}
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
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden">
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

      {/* Header */}
      <div className="text-center mb-8 sm:mb-14 lg:mb-16 px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 mb-6 backdrop-blur-sm">
          <ChatIcon />
          <span className="text-[13px] font-medium text-gray-600 font-body tracking-wide">
            Testimonials
          </span>
        </div>

        <h2 className="section-heading">
          What Our Clients Are Saying
        </h2>

        <p className="mt-3 sm:mt-5 text-gray-400 text-[13px] sm:text-[16px] leading-[1.6] sm:leading-[1.7] max-w-lg mx-auto font-body">
          We take pride in delivering exceptional solutions that deliver great
          results. But don&apos;t just take our word for it.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="flex flex-col gap-3 sm:gap-5">
        <MarqueeRow reviews={topRowReviews} direction="left" speed={45} />
        <MarqueeRow reviews={bottomRowReviews} direction="right" speed={45} />
      </div>

      {/* CTA */}
      <div className="text-center mt-14 sm:mt-16">
        <button className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3 text-[14px] font-medium text-gray-600 font-body hover:border-gray-400 hover:text-gray-800 transition-all duration-200 cursor-pointer">
          See all Reviews
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

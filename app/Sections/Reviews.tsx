'use client';

import { FadeIn } from '../components/animations';

interface Review {
  quote: string;
  business: string;
  location: string;
  color: string;
}

// Brand-aligned avatar palette (RealWaves navy + cyan family)
const C = {
  navy: '#0B2D72',
  cyan: '#0992C2',
  blue: '#163D82',
  teal: '#0E7490',
  indigo: '#1E40AF',
  sky: '#0369A1',
};

function BrandAvatar({ business, color }: { business: string; color: string }) {
  const initial = business.trim().charAt(0).toUpperCase();
  return (
    <div
      className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white font-semibold text-[14px] sm:text-[17px] font-body select-none"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {initial}
    </div>
  );
}

const topRowReviews: Review[] = [
  {
    quote:
      'Our customers actually notice the bags now. The print is crisp and the finish feels premium — exactly the image we wanted to carry.',
    business: 'Naivedya',
    location: 'Retail Partner',
    color: C.navy,
  },
  {
    quote:
      'The custom printed bags add a real touch of class to every purchase. Our brand looks far more premium at the billing counter.',
    business: 'Joravar Ethnic Wear',
    location: 'Ethnic Wear',
    color: C.cyan,
  },
  {
    quote:
      'Strong, stylish and reliable. The bags hold heavy garments easily and our customers reuse them again and again.',
    business: 'Wardrobe',
    location: 'Raipur',
    color: C.blue,
  },
  {
    quote:
      'For a wedding store, presentation is everything. These bags make every order feel like a special occasion.',
    business: 'Dulhe Wale',
    location: 'Raipur',
    color: C.teal,
  },
  {
    quote:
      'Sturdy bags that handle our heaviest sweet boxes without a worry. Delivery is always on time, even during the festival rush.',
    business: 'Chandan Sweets',
    location: 'Raipur',
    color: C.indigo,
  },
  {
    quote:
      'Clean, fresh-looking bags that match our bakery perfectly. The print stays sharp and the quality is consistent.',
    business: 'Bread Basket',
    location: 'Bakery',
    color: C.sky,
  },
  {
    quote:
      'From order to delivery the whole process was smooth. The bags carry our brand beautifully and customers love them.',
    business: 'Maosaji Sweets',
    location: 'Sweets & Namkeen',
    color: C.navy,
  },
  {
    quote:
      'Great quality at a price that makes sense for daily use. We switched completely to RealWaves and never looked back.',
    business: 'New Bharat Sweets',
    location: 'Sweets & Namkeen',
    color: C.cyan,
  },
  {
    quote:
      'Eco-friendly and durable — our customers appreciate that we’ve moved away from plastic, and the branding looks fantastic.',
    business: 'Gulshan Sweets',
    location: 'Sweets & Namkeen',
    color: C.blue,
  },
  {
    quote:
      'Bulk orders are handled effortlessly. Consistent quality across thousands of bags, every single time.',
    business: 'Shubham Mall',
    location: 'Retail Mall',
    color: C.teal,
  },
  {
    quote:
      'The bags are spacious and strong enough for full outfits, and our store name looks elegant printed on them.',
    business: 'Laxmi Vastralaya',
    location: 'Clothing Store',
    color: C.indigo,
  },
];

const bottomRowReviews: Review[] = [
  {
    quote:
      'Tough bags that carry shoe boxes with ease. The print is bold and our brand really stands out now.',
    business: 'Diamond Shoe House',
    location: 'Footwear Store',
    color: C.sky,
  },
  {
    quote:
      'Excellent finish and vibrant colours. RealWaves understood exactly how we wanted our brand to look.',
    business: 'Shail Vastralaya',
    location: 'Clothing Store',
    color: C.navy,
  },
  {
    quote:
      'Reliable supply and great communication. We always get our bags well before we run out of stock.',
    business: 'Mundra Vastralaya',
    location: 'Clothing Store',
    color: C.cyan,
  },
  {
    quote:
      'Even being away from the city, delivery has never been an issue. Dependable service and great bags.',
    business: 'Mansarovar Mart',
    location: 'Narayanpur',
    color: C.blue,
  },
  {
    quote:
      'Affordable, eco-friendly and well made. These bags have genuinely improved how our store is perceived.',
    business: 'Sumeet Bazar',
    location: 'Retail Partner',
    color: C.teal,
  },
  {
    quote:
      'Perfect for daily billing. Strong handles, neat printing, and our customers carry our brand all over town.',
    business: 'Shubham K Mart',
    location: 'Supermarket',
    color: C.indigo,
  },
  {
    quote:
      'The bags look as stylish as our products. A small change that made a big difference to our brand image.',
    business: 'Style Shop',
    location: 'Fashion Store',
    color: C.sky,
  },
  {
    quote:
      'Premium feel at a fair price. RealWaves delivered exactly what they promised — on time and on budget.',
    business: 'Maharaja',
    location: 'Retail Partner',
    color: C.navy,
  },
  {
    quote:
      'Quality bags delivered all the way to Korba without delay. Couldn’t be happier with the service.',
    business: 'Saheb',
    location: 'Korba',
    color: C.cyan,
  },
  {
    quote:
      'Fresh designs for a fresh bakery. The print clarity and bag strength have both been excellent.',
    business: 'New Heera Bakery',
    location: 'Bakery',
    color: C.blue,
  },
  {
    quote:
      'Simple process, great quality and honest pricing. RealWaves has become our trusted bag partner.',
    business: 'Puncher',
    location: 'Retail Partner',
    color: C.teal,
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[340px] min-h-0 sm:min-h-[210px] bg-white rounded-xl sm:rounded-2xl border border-gray-200/70 px-4 sm:px-7 py-3 sm:py-6 flex flex-col justify-between gap-3 sm:gap-6">
      <p className="text-[13px] sm:text-[14.5px] leading-[1.6] sm:leading-[1.7] text-gray-600 font-body tracking-[0.01em]">
        {review.quote}
      </p>

      <div className="flex items-center gap-3 pt-1">
        <BrandAvatar business={review.business} color={review.color} />
        <div className="min-w-0">
          <p className="text-[13px] sm:text-[15px] font-semibold text-gray-900 font-body tracking-[-0.01em]">
            {review.business}
          </p>
          <p className="text-[11px] sm:text-[13px] text-gray-400 font-body mt-0.5">
            {review.location}
          </p>
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
          <ReviewCard key={`${review.business}-${i}`} review={review} />
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

      <FadeIn direction="up">
      <div className="text-center mb-8 sm:mb-14 lg:mb-16 px-4">
        <h2 className="section-heading">
          What Our Clients Are Saying
        </h2>

        <p className="mt-3 sm:mt-5 text-gray-400 text-[13px] sm:text-[16px] leading-[1.6] sm:leading-[1.7] max-w-lg mx-auto font-body">
          We take pride in delivering exceptional solutions that deliver great
          results. But don&apos;t just take our word for it.
        </p>
      </div>
      </FadeIn>

      <div className="flex flex-col gap-3 sm:gap-5">
        <MarqueeRow reviews={topRowReviews} direction="left" speed={55} />
        <MarqueeRow reviews={bottomRowReviews} direction="right" speed={55} />
      </div>
    </section>
  );
}

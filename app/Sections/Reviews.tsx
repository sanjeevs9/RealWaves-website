import Image, { StaticImageData } from 'next/image';
import naivedya from '@/public/customers/naivedya.webp';
import shringaar from '@/public/customers/shringaar.webp';
import breadBasket from '@/public/customers/bread-basket.webp';
import fusion from '@/public/customers/fusion.webp';
import bajaj from '@/public/customers/bajaj-shoes.webp';
import madhu from '@/public/customers/madhu-textorium.webp';
import kajri from '@/public/customers/kajri.webp';
import saheb from '@/public/customers/saheb.webp';
import bonzelo from '@/public/customers/bonzelo.webp';
import vardaati from '@/public/customers/vardaati.webp';
import shreeShyam from '@/public/customers/shree-shyam.webp';
import puncher from '@/public/customers/puncher.webp';
import shail from '@/public/customers/shail.webp';

// Customer logos on two slow, endless tickers moving in opposite directions. Each logo
// is cropped from a photo of a bag we printed for them by scripts/crop-customer-logos.cjs
// (Naivedya's is their own logo file).
// A track holds its list four times and slides by half, so it loops seamlessly even on
// wide screens; only the first copy is read by screen readers. Hovering pauses it, and
// people who ask for reduced motion get a still, wrapped list.
// Real client testimonials can go here once they're collected (see the /do checklist).
type Logo = { shop: string; logo: StaticImageData };

const ROW_ONE: Logo[] = [
  { shop: 'Naivedya', logo: naivedya },
  { shop: 'Shringaar', logo: shringaar },
  { shop: 'The Bread Basket', logo: breadBasket },
  { shop: 'Fusion', logo: fusion },
  { shop: 'Bajaj Shoes', logo: bajaj },
  { shop: 'Madhu Textorium', logo: madhu },
  { shop: 'Kajri', logo: kajri },
];

const ROW_TWO: Logo[] = [
  { shop: 'Saheb', logo: saheb },
  { shop: 'Bonzelo', logo: bonzelo },
  { shop: 'Vardaati', logo: vardaati },
  { shop: 'Shree Shyam', logo: shreeShyam },
  { shop: 'Puncher', logo: puncher },
  { shop: 'Shail Vastralaya', logo: shail },
];

const COPIES = 4;

function LogoTicker({ items, reverse = false }: { items: Logo[]; reverse?: boolean }) {
  const track = Array.from({ length: COPIES }, () => items).flat();
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
      <ul
        className={`flex w-max shrink-0 items-center group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-3 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {track.map((c, i) => {
          const copy = i >= items.length;
          return (
            <li
              key={`${c.shop}-${i}`}
              aria-hidden={copy || undefined}
              className={`shrink-0 px-1.5 sm:px-2.5 ${copy ? 'motion-reduce:hidden' : ''}`}
            >
              <div className="flex h-16 items-center rounded-xl bg-white p-1.5 ring-1 ring-inset ring-[#EADFC4] sm:h-[84px] sm:rounded-2xl sm:p-2">
                <Image
                  src={c.logo}
                  alt={copy ? '' : `${c.shop} logo, printed on a RealWaves bag`}
                  sizes="(min-width: 640px) 180px, 140px"
                  className="h-full w-auto rounded-lg sm:rounded-xl"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Reviews() {
  return (
    <section aria-labelledby="clients-title" className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-[15px] font-semibold text-sage">Our customers</p>
        <h2 id="clients-title" className="section-heading mt-3">
          Shops that carry our bags
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-sage sm:text-[17px]">
          Their logos, as we printed them. A few of the 2000+ businesses we make bags for.
        </p>
      </div>

      <div className="mt-10 space-y-2.5 sm:mt-12 sm:space-y-3">
        <LogoTicker items={ROW_ONE} />
        <LogoTicker items={ROW_TWO} reverse />
      </div>

      <p className="mt-7 px-4 text-center text-[15px] text-sage">
        and 2000+ more shops in 100+ cities across India
      </p>
    </section>
  );
}

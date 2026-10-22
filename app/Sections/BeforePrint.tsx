import Image from 'next/image';
import { DESIGN_TO_BAG } from '../realPhotos';
import { whatsappUrl } from '../site';

const STEPS = [
  'Send your logo and the bag size',
  'Get a 3D design of your bag, usually within a day',
  'Approve it, and we print and deliver',
];

// Every order starts as a 3D design; here two of them sit next to the bag we printed.
export default function BeforePrint() {
  return (
    <section aria-labelledby="before-title" className="bg-forest px-4 py-16 text-ivory sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <p className="text-[15px] font-semibold text-bronze">a mirror to your brand</p>
          <h2 id="before-title" className="mt-3 text-balance font-display text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[2.4rem]">
            See your bag before we print it
          </h2>
          <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-mist sm:text-[17px]">
            We design every bag in 3D first, with your logo, colours and size. You approve it on WhatsApp, then we print.
          </p>
          <ol className="mt-7 grid gap-3">
            {STEPS.map((s, i) => (
              <li key={s} className="flex items-center gap-3.5 text-[15px] text-mist sm:text-base">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-forest-light text-sm font-semibold text-bronze">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
          <a
            href={whatsappUrl("Hi RealWaves, I'd like a free 3D design of my bag.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[48px] items-center rounded-full bg-bronze px-6 text-[15px] font-semibold text-forest transition-colors hover:bg-bronze-light"
          >
            Get a free 3D design
          </a>
        </div>

        <div className="grid gap-4">
          {DESIGN_TO_BAG.map((p) => (
            <figure key={p.shop} className="m-0 rounded-[26px] bg-forest-light p-3 sm:p-4">
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#6C6C6C]">
                  <Image src={p.design} alt={`3D design of the ${p.shop} bag`} sizes="(min-width: 1024px) 300px, 42vw" className="h-full w-full object-cover" />
                </div>
                <span aria-hidden="true" className="text-xl text-bronze sm:text-2xl">→</span>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image src={p.bag} alt={`The printed ${p.shop} bag`} sizes="(min-width: 1024px) 300px, 42vw" className="h-full w-full object-cover" />
                </div>
              </div>
              <figcaption className="grid grid-cols-[1fr_auto_1fr] gap-2 px-1 pb-0.5 pt-3 text-[13px] text-mist sm:gap-3 sm:text-sm">
                <span><b className="font-semibold text-ivory">{p.shop}</b> · 3D design</span>
                <span aria-hidden="true" className="w-5 sm:w-6" />
                <span>Printed bag</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

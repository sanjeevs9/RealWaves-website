import Image from 'next/image';
import { FACTORY_PHOTOS } from '../realPhotos';

// Photo bento: the printing press large, the rest around it, each with a short caption.
const SPANS = [
  'col-span-2 row-span-2',
  '',
  '',
  '',
  'col-span-2 lg:col-span-2',
];

export default function FactoryPhotos() {
  return (
    <section aria-labelledby="factory-title" className="bg-cream px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-4">
          <div>
            <p className="text-[15px] font-semibold text-sage">Inside our factory</p>
            <h2 id="factory-title" className="section-heading mt-3 text-balance">Printed, cut and stitched in Saddu, Raipur</h2>
          </div>
          <p className="max-w-sm text-pretty text-base leading-relaxed text-sage sm:text-[17px]">
            Real photos from our floor: the fabric, the presses and the people who make your bags.
          </p>
        </div>
        <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:auto-rows-[240px] lg:grid-cols-3">
          {FACTORY_PHOTOS.map((p, i) => (
            <figure key={p.caption} className={`group relative m-0 overflow-hidden rounded-3xl ${SPANS[i] ?? ''}`}>
              <Image
                src={p.img}
                alt={p.alt}
                sizes={i === 0 ? '(min-width: 1024px) 760px, 100vw' : '(min-width: 1024px) 380px, 50vw'}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto">
                <span className="inline-block rounded-full bg-forest/85 px-3 py-1.5 text-[12.5px] font-semibold leading-tight text-ivory backdrop-blur-sm sm:px-3.5 sm:text-[13px]">
                  {p.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

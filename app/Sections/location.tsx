'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BUSINESS } from '../site';
// A group of bags we printed for real shops, built from our bag cut-outs by
// scripts/make-bag-collage.cjs (transparent, so it sits on the ivory panel below)
import bagsCollage from '@/public/factory/bags-collage.webp';

const { latitude: lat, longitude: lng } = BUSINESS.geo;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}&q=${lat},${lng}&zoom=15&maptype=satellite`;
const fallbackMapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&t=k&output=embed`;

// Figures the site already states. The old "4.9 rating" is left out: no review
// listing backs it up (the only Google Maps listing found is marked closed).
const MapSection: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section aria-labelledby="visit-title" className="bg-bronze px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-12">
        <div className="min-w-0 flex-1 basis-[360px]">
          <p className="text-[15px] font-semibold text-sage">Factory &amp; store</p>
          <h2 id="visit-title" className="section-heading mt-3 text-balance">
            Visit our factory in Raipur
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-sage sm:text-[17px]">
            Feel the fabric, compare bag styles and talk through your print before you order.
          </p>
          <address className="mt-6 text-[15px] not-italic leading-relaxed text-charcoal">
            <span className="block font-semibold">RealWaves Packs</span>
            <span className="block text-sage">
              {BUSINESS.address.streetAddress}, Raipur, Chhattisgarh {BUSINESS.address.postalCode}
            </span>
          </address>
          <p className="mt-3 text-[15px] text-sage">
            <a href="tel:+919009990000" className="inline-block py-2 font-semibold text-charcoal underline-offset-4 hover:underline">+91 90099 90000</a>
            {' / '}
            <a href="tel:+919617234355" className="inline-block py-2 font-semibold text-charcoal underline-offset-4 hover:underline">+91 96172 34355</a>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-forest px-6 text-[15px] font-semibold text-ivory transition-colors hover:bg-forest-light"
            >
              <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11 22 2l-9 19-2-8z" />
              </svg>
              Get directions
            </a>
            <a
              href="tel:+919009990000"
              className="inline-flex min-h-[48px] items-center rounded-full px-6 text-[15px] font-semibold text-charcoal ring-1 ring-inset ring-forest transition-colors hover:bg-forest hover:text-ivory"
            >
              Call the store
            </a>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 basis-[480px] flex-col gap-4">
          <div className="overflow-hidden rounded-3xl bg-ivory">
            <Image
              src={bagsCollage}
              alt="Printed RealWaves bags for Kajri, Shail, Saheb, The Bread Basket, Fusion, Bonzelo and Madhu Textorium"
              sizes="(min-width: 1024px) 620px, 100vw"
              className="aspect-video w-full object-contain"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative h-[200px] overflow-hidden rounded-[20px] bg-linen">
              <iframe
                src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? googleMapsEmbedUrl : fallbackMapUrl}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                onLoad={() => setMapLoaded(true)}
                title="Map of the RealWaves Packs factory in Raipur"
              />
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-linen">
                  <p className="text-sm text-sage">Loading map…</p>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center rounded-[20px] bg-forest p-6 text-ivory">
              <p className="text-[1.75rem] font-semibold tracking-[-0.02em] text-bronze">3 crore+</p>
              <p className="mt-1 text-sm text-mist">bags shipped to 100+ cities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

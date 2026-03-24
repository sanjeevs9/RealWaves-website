'use client';

import React, { useState } from 'react';
import { Navigation } from 'lucide-react';

interface StoreLocation {
  name: string;
  address: string;
  city: string;
  zipCode: string;
  nearestMetro?: {
    name: string;
    line: string;
  } | null;
  nearestBus?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface StoreStats {
  dailyFootfall: string;
  dailyFootfallDescription: string;
  bagsShipped: string;
  bagsShippedDescription: string;
  rating: string;
  ratingDescription: string;
}

const MapSection: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const storeLocation: StoreLocation = {
    name: "Real Wave Store",
    address: "Near SBI Bank, Nakoda Group Premises Ward 26, Village Saddu, Raipur (C.G) 492014",
    city: "Raipur",
    zipCode: "492014",
    coordinates: {
      lat: 21.272750,
      lng: 81.693197
    }
  };

  const storeStats: StoreStats = {
    dailyFootfall: "100+",
    dailyFootfallDescription: "Cities across India we supply to",
    bagsShipped: "3 Crore+",
    bagsShippedDescription: "Bags Shipped to 100+ cities",
    rating: "4.9 Rating",
    ratingDescription: "By the customers visiting our store."
  };

  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}&q=${storeLocation.coordinates.lat},${storeLocation.coordinates.lng}&zoom=15&maptype=satellite`;
  const fallbackMapUrl = `https://maps.google.com/maps?q=${storeLocation.coordinates.lat},${storeLocation.coordinates.lng}&z=15&t=k&output=embed`;

  const handleNavigateClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${storeLocation.coordinates.lat},${storeLocation.coordinates.lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Store Information */}
          <div className="space-y-8 lg:space-y-10 flex flex-col justify-between h-full p-2 md:p-0">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="section-heading">
                Our Store Awaits
                <br className="hidden sm:block" />
                Your Visit
              </h2>
            </div>

            {/* Store Details */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-charcoal">
                {storeLocation.name}
              </h3>
              <p className="text-sage leading-relaxed text-sm sm:text-base">
                {storeLocation.address}
              </p>
              <div className="pt-1">
                <p className="text-xs text-sage uppercase tracking-wider mb-1">Phone / WhatsApp</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <a href="tel:+919009990000" className="text-sm font-medium text-[#0992C2] hover:underline">+91 90099 90000</a>
                  <span className="text-sage">/</span>
                  <a href="tel:+919617234355" className="text-sm font-medium text-[#0992C2] hover:underline">+91 9617234355</a>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-2">
              {[
                { value: storeStats.dailyFootfall, label: storeStats.dailyFootfallDescription },
                { value: storeStats.bagsShipped, label: storeStats.bagsShippedDescription },
                { value: storeStats.rating, label: storeStats.ratingDescription },
              ].map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="w-full h-[2px] bg-[#0B2D72]/15 rounded-full mb-3 lg:mb-4" />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal mb-1 lg:mb-2">
                    {stat.value}
                  </div>
                  <p className="text-xs text-sage leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative mt-6 lg:mt-0">
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              {/* Map Container */}
              <div className="absolute inset-0 bg-linen">
                <iframe
                  src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? googleMapsEmbedUrl : fallbackMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  onLoad={() => setMapLoaded(true)}
                  title="Store Location Map"
                />

                {/* Loading State */}
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-linen">
                    <div className="text-center space-y-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-forest border-t-transparent rounded-full animate-spin mx-auto"></div>
                      <p className="text-xs sm:text-sm text-sage">Loading map...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigate Button */}
              <button
                onClick={handleNavigateClick}
                className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4 bg-forest hover:bg-forest-light text-white px-3 py-2 lg:px-4 lg:py-2.5 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-1.5 lg:gap-2 font-medium text-xs lg:text-sm"
              >
                <Navigation size={14} className="lg:w-4 lg:h-4" />
                <span>Navigate</span>
              </button>
            </div>

            {/* Mobile Quick Actions */}
            <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
              <button
                onClick={handleNavigateClick}
                className="flex items-center justify-center gap-2 bg-forest hover:bg-forest-light text-white py-2.5 px-3 sm:py-3 sm:px-4 rounded-xl font-medium transition-colors text-sm"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
              </button>
              <a
                href="tel:+919009990000"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#22c55e] text-white py-2.5 px-3 sm:py-3 sm:px-4 rounded-xl font-medium transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Call Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

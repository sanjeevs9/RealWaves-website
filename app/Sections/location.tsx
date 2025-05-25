'use client';

import React, { useState } from 'react';
import { Navigation } from 'lucide-react';

interface StoreLocation {
  name: string;
  address: string;
  city: string;
  zipCode: string;
  nearestMetro: {
    name: string;
    line: string;
  };
  nearestBus: string;
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

  // Example store data - replace with your actual data
  const storeLocation: StoreLocation = {
    name: "Real Wave Store",
    address: "221B, FIRST FLOOR, BAKER STREET",
    city: "NEW YORK",
    zipCode: "110017",
    nearestMetro: {
      name: "Conaught Place",
      line: "Yellow Line"
    },
    nearestBus: "Rajiv Chowk",
    coordinates: {
      lat: 28.6139,
      lng: 77.2090
    }
  };

  const storeStats: StoreStats = {
    dailyFootfall: "2000+",
    dailyFootfallDescription: "Daily Footfall of customers from all over India",
    bagsShipped: "30K+",
    bagsShippedDescription: "Bags Shipped Daily all over the world",
    rating: "4.9 Rating",
    ratingDescription: "By the customers visiting our store."
  };

  // Google Maps Embed URL
  // const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'demo'}&q=${storeLocation.coordinates.lat},${storeLocation.coordinates.lng}&zoom=15&maptype=roadmap`;
  
  // Fallback URL without API key (limited functionality)
  const fallbackMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8749042734344!2d${storeLocation.coordinates.lng}!3d${storeLocation.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin`;

  const handleNavigateClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${storeLocation.coordinates.lat},${storeLocation.coordinates.lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Store Information */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">
                SHOP LOCATION
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our Store await your Visit
              </h2>
            </div>

            {/* Store Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {storeLocation.name}
                </h3>
                <div className="text-gray-600 space-y-1">
                  <p className="font-medium">{storeLocation.address}</p>
                  <p className="font-medium">
                    {storeLocation.city} {storeLocation.zipCode}
                  </p>
                </div>
              </div>

              {/* Transportation Info */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Nearest Metro Station
                  </h4>
                  <p className="text-gray-600">
                    {storeLocation.nearestMetro.name}{' '}
                    <span className="text-gray-500">
                      ({storeLocation.nearestMetro.line})
                    </span>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Nearest Bus Stop
                  </h4>
                  <p className="text-gray-600">{storeLocation.nearestBus}</p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="w-full h-1 bg-blue-500 rounded-full mb-4"></div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {storeStats.dailyFootfall}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {storeStats.dailyFootfallDescription}
                </p>
              </div>

              <div className="text-center sm:text-left">
                <div className="w-full h-1 bg-blue-500 rounded-full mb-4"></div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {storeStats.bagsShipped}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {storeStats.bagsShippedDescription}
                </p>
              </div>

              <div className="text-center sm:text-left">
                <div className="w-full h-1 bg-blue-500 rounded-full mb-4"></div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {storeStats.rating}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {storeStats.ratingDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-lg">
              {/* Map Container */}
              <div className="absolute inset-0 bg-gray-100">
                <iframe
                  src={fallbackMapUrl}
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
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-center space-y-2">
                      <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                      <p className="text-sm text-gray-600">Loading map...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigate Button */}
              <button
                onClick={handleNavigateClick}
                className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 flex items-center gap-2 font-medium text-sm"
              >
                <Navigation size={16} />
                Navigate
              </button>
            </div>

            {/* Mobile: Additional Quick Actions */}
            <div className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
              <button
                onClick={handleNavigateClick}
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                <Navigation size={18} />
                Get Directions
              </button>
              <a
                href={`tel:+911234567890`}
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
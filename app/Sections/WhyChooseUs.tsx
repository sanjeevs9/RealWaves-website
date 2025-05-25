"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Custom SVG Icon Components (replace with your actual SVGs)
const SustainabilityIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="32"
      cy="32"
      r="28"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <path
      d="M32 12v8m0 24v8m-20-20h8m24 0h8"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="32" cy="32" r="6" fill="currentColor" />
  </svg>
);

const QualityIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="32"
      cy="32"
      r="28"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <path
      d="M20 32l6 6L44 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DeliveryIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="32"
      cy="32"
      r="28"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
    />
    <path
      d="M16 28h12l4-8h12v20H32m-8 0a4 4 0 108 0m16 0a4 4 0 108 0"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface ExpandedContent {
  title: string;
  description: string;
  image: string;
  additionalText?: string;
}

interface FeatureCard {
  id: string;
  position: "top" | "bottom";
  column: number; // 0, 1, 2
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  expandedContent: ExpandedContent;
}

interface ExpandableCardProps {
  card: FeatureCard;
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  card,
  isExpanded,
  onToggle,
  className = "",
}) => {
  const IconComponent = card.icon;
  const isTopCard = card.position === "top";

  return (
    <div className={`relative ${className}`}>
      {/* Main Card */}
      <div
        className={`
          relative bg-gray-50 rounded-2xl p-6 transition-all duration-500 ease-in-out cursor-pointer
          hover:shadow-md border border-gray-100 hover:bg-gray-100
          ${isExpanded ? "shadow-lg z-20" : "z-10"}
          ${isTopCard && isExpanded ? "rounded-b-none" : ""}
          ${!isTopCard && isExpanded ? "rounded-t-none" : ""}
        `}
        onClick={onToggle}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {card.description}
          </p>
        </div>

        {/* Arrow Button */}
        <div className="flex justify-end mt-4">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-transform duration-300">
            {isTopCard ? (
              <ChevronDown
                className={`w-5 h-5 text-white transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            ) : (
              <ChevronUp
                className={`w-5 h-5 text-white transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            )}
          </div>
        </div>
      </div>

      {/* Expanded Content - Positioned to Overlay */}
      <div
        className={`
          absolute left-0 right-0 bg-blue-600 text-white transition-all duration-500 ease-in-out overflow-hidden z-30
          ${
            isTopCard
              ? "top-full -mt-4 rounded-b-2xl rounded-t-none"
              : "bottom-full -mb-4 rounded-t-2xl rounded-b-none"
          }
          ${
            isExpanded
              ? "opacity-100 translate-y-0"
              : "opacity-0 pointer-events-none"
          }
          ${isTopCard && !isExpanded ? "-translate-y-4" : ""}
          ${!isTopCard && !isExpanded ? "translate-y-4" : ""}
        `}
        style={{
          height: isExpanded ? "300px" : "0",
        }}
      >
        <div className="p-6 space-y-4 h-full">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          <h4 className="text-xl font-semibold text-center">
            {card.expandedContent.title}
          </h4>

          <p className="text-blue-100 text-sm text-center leading-relaxed">
            {card.expandedContent.description}
          </p>

          {card.expandedContent.additionalText && (
            <p className="text-white text-sm text-center leading-relaxed bg-blue-700 bg-opacity-50 rounded-lg p-3">
              {card.expandedContent.additionalText}
            </p>
          )}

          {/* Image Container */}
          <div className="flex justify-center mt-6">
            <div className="relative w-48 h-32 bg-white bg-opacity-20 rounded-lg overflow-hidden">
              <img
                src={card.expandedContent.image}
                alt={card.expandedContent.title}
                className="w-full h-full object-cover"
              />
              {/* Expand Arrow Icon */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsSection: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  // Sample card data - replace with your actual content
  const cards: FeatureCard[] = [
    {
      id: "sustainability-top",
      position: "top",
      column: 0,
      icon: SustainabilityIcon,
      title: "Sustainable Products",
      description:
        "Partnering with realwave transformed our packaging process—superior quality, reliable delivery, and outstanding customer service.",
      expandedContent: {
        title: "Eco-Friendly Solutions",
        description:
          "Our sustainable packaging solutions help reduce environmental impact while maintaining superior quality standards.",
        image: "/api/placeholder/300/200",
        additionalText:
          "Made from 100% recyclable materials with carbon-neutral production processes.",
      },
    },
    {
      id: "quality-top",
      position: "top",
      column: 1,
      icon: QualityIcon,
      title: "Premium Quality",
      description:
        "Partnering with realwave transformed our packaging process—superior quality, reliable delivery, and outstanding customer service.",
      expandedContent: {
        title: "Unmatched Quality Standards",
        description:
          "Every product undergoes rigorous testing to ensure it meets our strict quality benchmarks.",
        image: "/api/placeholder/300/200",
        additionalText:
          "ISO certified manufacturing with 99.9% quality assurance rate.",
      },
    },
    {
      id: "delivery-top",
      position: "top",
      column: 2,
      icon: DeliveryIcon,
      title: "Fast Delivery",
      description:
        "Partnering with realwave transformed our packaging process—superior quality, reliable delivery, and outstanding customer service.",
      expandedContent: {
        title: "Lightning Fast Shipping",
        description:
          "Get your orders delivered quickly with our optimized logistics network.",
        image: "/api/placeholder/300/200",
        additionalText:
          "Same-day shipping available for orders placed before 2 PM.",
      },
    },
    {
      id: "sustainability-bottom",
      position: "bottom",
      column: 0,
      icon: SustainabilityIcon,
      title: "Cost Effective",
      description:
        "Partnering with realwave transformed our packaging process—superior quality, reliable delivery, and outstanding customer service.",
      expandedContent: {
        title: "Budget-Friendly Options",
        description:
          "Get the best value for your money without compromising on quality.",
        image: "/api/placeholder/300/200",
        additionalText:
          "Up to 30% cost savings compared to traditional packaging solutions.",
      },
    },
    {
      id: "quality-bottom",
      position: "bottom",
      column: 1,
      icon: QualityIcon,
      title: "Custom Solutions",
      description:
        "Partnering with realwave transformed our packaging process—superior quality, reliable delivery, and outstanding customer service.",
      expandedContent: {
        title: "Tailored to Your Needs",
        description:
          "Custom packaging solutions designed specifically for your business requirements.",
        image: "/api/placeholder/300/200",
        additionalText:
          "Over 500 customization options available with dedicated design support.",
      },
    },
    {
      id: "delivery-bottom",
      position: "bottom",
      column: 2,
      icon: DeliveryIcon,
      title: "24/7 Support",
      description:
        "Partnering with realwave transformed our packaging process—superior quality, reliable delivery, and outstanding customer service.",
      expandedContent: {
        title: "Round-the-Clock Assistance",
        description:
          "Our dedicated support team is available 24/7 to help you with any queries.",
        image: "/api/placeholder/300/200",
        additionalText:
          "Average response time under 5 minutes with 98% customer satisfaction.",
      },
    },
  ];

  const handleCardToggle = (cardId: string) => {
    const card = cards.find((c) => c.id === cardId);
    if (!card) return;

    const newExpandedCards = new Set(expandedCards);

    // Find the vertically paired card
    const pairedCard = cards.find(
      (c) => c.column === card.column && c.position !== card.position
    );

    if (expandedCards.has(cardId)) {
      // If current card is expanded, collapse it
      newExpandedCards.delete(cardId);
    } else {
      // If current card is collapsed, expand it and collapse its vertical pair
      newExpandedCards.add(cardId);
      if (pairedCard) {
        newExpandedCards.delete(pairedCard.id);
      }
    }

    setExpandedCards(newExpandedCards);
  };

  const topCards = cards.filter((card) => card.position === "top");
  const bottomCards = cards.filter((card) => card.position === "bottom");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 tracking-wide uppercase mb-4">
            WHY CHOSE US?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Why Choosing Us Is the Smart Move for Your Business?
          </h2>
        </div>

        {/* Desktop: Cards Grid with Overlay Expansion */}
        <div className="hidden md:block">
          <div className="space-y-8">
            {/* Top Row */}
            <div className="grid grid-cols-3 gap-6">
              {topCards.map((card) => (
                <ExpandableCard
                  key={card.id}
                  card={card}
                  isExpanded={expandedCards.has(card.id)}
                  onToggle={() => handleCardToggle(card.id)}
                />
              ))}
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-3 gap-6">
              {bottomCards.map((card) => (
                <ExpandableCard
                  key={card.id}
                  card={card}
                  isExpanded={expandedCards.has(card.id)}
                  onToggle={() => handleCardToggle(card.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Simple Stack */}
        <div className="md:hidden space-y-6">
          {cards.map((card) => {
            const IconComponent = card.icon;
            const isExpanded = expandedCards.has(card.id);

            return (
              <div key={card.id} className="relative">
                {/* Main Card */}
                <div
                  className={`
                    bg-gray-50 rounded-2xl p-6 transition-all duration-500 ease-in-out cursor-pointer
                    hover:shadow-md border border-gray-100 hover:bg-gray-100
                    ${isExpanded ? "shadow-lg rounded-b-none" : ""}
                  `}
                  onClick={() => {
                    const newExpandedCards = new Set(expandedCards);
                    if (expandedCards.has(card.id)) {
                      newExpandedCards.delete(card.id);
                    } else {
                      newExpandedCards.clear(); // Only one expanded at a time on mobile
                      newExpandedCards.add(card.id);
                    }
                    setExpandedCards(newExpandedCards);
                  }}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div className="flex justify-end mt-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-transform duration-300">
                      <ChevronDown
                        className={`w-5 h-5 text-white transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  className={`
                    bg-blue-600 text-white transition-all duration-500 ease-in-out overflow-hidden
                    rounded-b-2xl rounded-t-none
                    ${isExpanded ? "opacity-100" : "opacity-0"}
                  `}
                  style={{
                    height: isExpanded ? "300px" : "0",
                  }}
                >
                  <div className="p-6 space-y-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold text-center">
                      {card.expandedContent.title}
                    </h4>

                    <p className="text-blue-100 text-sm text-center leading-relaxed">
                      {card.expandedContent.description}
                    </p>

                    {card.expandedContent.additionalText && (
                      <p className="text-white text-sm text-center leading-relaxed bg-blue-700 bg-opacity-50 rounded-lg p-3">
                        {card.expandedContent.additionalText}
                      </p>
                    )}

                    {/* Image Container */}
                    <div className="flex justify-center mt-6">
                      <div className="relative w-48 h-32 bg-white bg-opacity-20 rounded-lg overflow-hidden">
                        <img
                          src={card.expandedContent.image}
                          alt={card.expandedContent.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Expand Arrow Icon */}
                        <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

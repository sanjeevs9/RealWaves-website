"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "../components/ReviewCard";

// Main CustomerReviewSection Component
export default function CustomerReviewSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [cardsPerView, setCardsPerView] = useState<number>(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      companyName: "GOOGLE",
      quote:
        "Partnering with RealWaves transformed our packaging process—superior quality, reliable delivery, and outstanding customer service. They've become a vital part of our supply chain. Highly recommend for any B2B needs!",
      authorName: "MR. SUNDAR",
      authorTitle: "CEO",
      logoSrc: "/images/google-logo.png",
    },
    {
      companyName: "MICROSOFT",
      quote:
        "RealWaves has consistently delivered exceptional packaging solutions for our products. Their attention to detail and commitment to quality have significantly improved our product presentation.",
      authorName: "SATYA NADELLA",
      authorTitle: "CEO",
      logoSrc: "/images/microsoft-logo.png",
    },
    {
      companyName: "AMAZON",
      quote:
        "Working with RealWaves has streamlined our packaging operations. Their innovative solutions and reliable service have helped us maintain our delivery standards even during peak seasons.",
      authorName: "ANDY JASSY",
      authorTitle: "CEO",
      logoSrc: "/images/amazon-logo.png",
    },
    {
      companyName: "APPLE",
      quote:
        "RealWaves understands our commitment to premium packaging. Their solutions align perfectly with our brand values, providing our customers with an unboxing experience that matches our product quality.",
      authorName: "TIM COOK",
      authorTitle: "CEO",
      logoSrc: "/images/apple-logo.png",
    },
    {
      companyName: "TESLA",
      quote:
        "RealWaves has revolutionized our packaging approach with sustainable and innovative solutions. Their commitment to eco-friendly materials aligns perfectly with our environmental mission.",
      authorName: "ELON MUSK",
      authorTitle: "CEO",
      logoSrc: "/images/tesla-logo.png",
    },
    {
      companyName: "META",
      quote:
        "The packaging solutions from RealWaves have enhanced our product delivery experience. Their innovative approach and reliable service have exceeded our expectations consistently.",
      authorName: "MARK ZUCKERBERG",
      authorTitle: "CEO",
      logoSrc: "/images/meta-logo.png",
    },
  ];

  // Calculate cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1); // Mobile: 1 card
      else if (width < 1024) setCardsPerView(2); // Tablet: 2 cards
      else if (width < 1280) setCardsPerView(3); // Desktop: 3 cards
      else setCardsPerView(4); // Large: 4 cards
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Calculate max index based on cards per view
  const maxIndex = Math.max(0, reviews.length - cardsPerView);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    const clampedIndex = Math.min(index, maxIndex);
    setCurrentIndex(clampedIndex);
  };

  // Mouse/Touch swipe handlers (not dragging cards)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.pageX;
    const diff = startX - currentX;
    const threshold = 100; // Increased threshold for intentional swipes

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setIsDragging(false);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!startX) return;
    const currentX = e.changedTouches[0].clientX;
    const diff = startX - currentX;
    const threshold = 75; // Good threshold for touch swipes

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setStartX(0);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [maxIndex]);

  // Calculate transform based on card width + gap
  const cardWidth = 335; // Your card max-width
  const gap = 24; // gap-6 = 24px
  const slideWidth = cardWidth + gap;
  const translateX = -(currentIndex * slideWidth);

  return (
    <div
      className="py-16 text-white w-full"
      style={{ backgroundColor: "#1A1B1D" }}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-12 ml-12">
          <p className="uppercase text-[#898989] font-['Roboto'] text-[16px] font-normal leading-[124%] tracking-[0.8px]">
            CUSTOMER REVIEWS
          </p>
          <h2 className="text-white font-roboto text-[40px] font-normal leading-[124%] tracking-[2px] pt-2">
            RealWaves is trusted by Brands Across India
          </h2>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-sm transition-all duration-200 shadow-lg"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-sm transition-all duration-200 shadow-lg"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Cards container */}
          <div className="overflow-hidden ml-12 mr-12">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out gap-6 select-none"
              style={{
                transform: `translateX(${translateX}px)`,
                width: `${reviews.length * slideWidth}px`,
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => setIsDragging(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {reviews.map((review, index) => (
                <div key={index} className="flex-shrink-0">
                  <ReviewCard
                    companyName={review.companyName}
                    quote={review.quote}
                    authorName={review.authorName}
                    authorTitle={review.authorTitle}
                    logoSrc={review.logoSrc}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? "bg-white scale-110"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

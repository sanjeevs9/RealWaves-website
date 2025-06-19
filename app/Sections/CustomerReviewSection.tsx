"use client";

import ReviewCard from "../components/ReviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Main CustomerReviewSection Component
export default function CustomerReviewSection() {
  const reviews = [
    {
      companyName: "Retail Partner, Bhilai",
      quote:
        "We've been sourcing non-woven bags from Realwaves for the past 3 years — the quality, price, and timely delivery make them our first choice.",
      authorName: "",
      authorTitle: "",
      logoSrc: "",
    },
    {
      companyName: "Apparel Exporter, Delhi",
      quote:
        "Their custom-printed loop handle bags helped elevate our brand visibility at trade shows. Realwaves is reliable and responsive.",
      authorName: "",
      authorTitle: "",
      logoSrc: "",
    },
    {
      companyName: "Grocery Chain, Raipur",
      quote:
        "What we love most is their commitment to eco-friendly practices and their support for bulk orders with quick dispatch.",
      authorName: "",
      authorTitle: "",
      logoSrc: "",
    },
  ];

  // react-multi-carousel responsive config
  const responsive = {
    
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items:4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div
      className="py-16 text-white w-full"
      style={{ backgroundColor: "#1A1B1D" }}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="md:mb-12 md:ml-12 p-5 md:p-0">
          <p className="uppercase text-[#898989] font-['Roboto'] text-[16px] font-normal leading-[124%] tracking-[0.8px]">
            Our Happy Customers
          </p>
          <h2 className="text-white font-roboto text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal leading-[124%] tracking-[2px] pt-2">
            RealWaves is trusted by Brands Across India
          </h2>
        </div>

        {/* Carousel container */}
        <div className="relative">
          <div className="overflow-hidden ml-0 mr-0 sm:ml-12 sm:mr-12">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              showDots={true}
              arrows={false}
              containerClass="w-full"
              itemClass="flex justify-center"
              dotListClass="flex justify-center mt-8 gap-2"
              renderDotsOutside={false}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full max-w-[335px]">
                  <ReviewCard
                    companyName={review.companyName}
                    quote={review.quote}
                    authorName={review.authorName}
                    authorTitle={review.authorTitle}
                    logoSrc={review.logoSrc}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

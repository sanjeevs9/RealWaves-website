"use client"
import { useState } from "react";
import ReviewCard from "../components/ReviewCard";

export default function CustomerReviewSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviews = [
        {
            companyName: "GOOGLE",
            quote: "Partnering with RealWaves transformed our packaging process—superior quality, reliable delivery, and outstanding customer service. They've become a vital part of our supply chain. Highly recommend for any B2B needs!",
            authorName: "MR. SUNDAR",
            authorTitle: "CEO",
            logoSrc: "/images/google-logo.png"
        },
        {
            companyName: "MICROSOFT",
            quote: "RealWaves has consistently delivered exceptional packaging solutions for our products. Their attention to detail and commitment to quality have significantly improved our product presentation.",
            authorName: "SATYA NADELLA",
            authorTitle: "CEO",
            logoSrc: "/images/microsoft-logo.png"
        },
        {
            companyName: "AMAZON",
            quote: "Working with RealWaves has streamlined our packaging operations. Their innovative solutions and reliable service have helped us maintain our delivery standards even during peak seasons.",
            authorName: "ANDY JASSY",
            authorTitle: "CEO",
            logoSrc: "/images/amazon-logo.png"
        },
        {
            companyName: "APPLE",
            quote: "RealWaves understands our commitment to premium packaging. Their solutions align perfectly with our brand values, providing our customers with an unboxing experience that matches our product quality.",
            authorName: "TIM COOK",
            authorTitle: "CEO",
            logoSrc: "/images/apple-logo.png"
        }
    ];

    // // Auto-scroll functionality
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => 
    //             prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    //         );
    //     }, 5000); // Change slide every 5 seconds
        
    //     return () => clearInterval(interval);
    // }, [reviews.length]);

    // Show 1 card on mobile, up to 3 on larger screens
    // const visibleReviews = () => {
    //     // This is a simple implementation - for a more responsive approach
    //     // you might want to use a hook to detect screen width
    //     return [reviews[currentIndex]];
    // };

    return (
        <div className="py-16 bg-gray-900 text-white w-full">
            <div className="container mx-auto px-4">
                {/* Section header */}
                <div className="mb-12">
                    <p className="uppercase text-[#898989] font-['Roboto'] text-[16px] font-normal leading-[124%] tracking-[0.8px]">CUSTOMER REVIEWS</p>
                    <h2 className="text-white font-roboto text-[40px] font-normal leading-[124%] tracking-[2px] pt-2">RealWaves is trusted by Brands Across India</h2>
                </div>

                {/* Carousel container */}
                <div className="relative">
                    {/* Cards container with animation */}
                    <div className="flex justify-center  overflow-hidden w-full">
                        <div className="flex transition-transform duration-500 ease-in-out w-full "
                             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {reviews.map((review, index) => (
                                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 ">
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
                    <div className="flex justify-center mt-8 gap-1.5">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                    currentIndex === index ? "bg-white" : "bg-gray-500"
                                }`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

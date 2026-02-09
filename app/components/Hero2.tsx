'use client'
import Image from 'next/image';
import CategoryCard2 from './CategoryCard2';
import { categoryData } from '@/constants';
import bag2 from "@/public/heroSection/_DSC3176 2.png"
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import ContactModal from './ContactModal';

export default function Hero2() {
    const router = useRouter()
    const [isContactOpen, setIsContactOpen] = useState(false);

    const handleWhatsAppClick = () => {
        const phoneNumber = "919009990000";
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    const handleContactClick = () => {
        setIsContactOpen(!isContactOpen);
    };

    return (
        <>
        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3">
            <button
                onClick={handleContactClick}
                className="group bg-forest p-3.5 rounded-full shadow-lg shadow-forest/20 hover:bg-forest-light transition-all duration-300 hover:scale-105"
                aria-label="Contact Us"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"
                    className="group-hover:scale-110 transition-transform duration-300">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            </button>
            <button
                onClick={handleWhatsAppClick}
                className="group bg-[#25D366] p-3.5 rounded-full shadow-lg shadow-[#25D366]/20 hover:bg-[#22c55e] transition-all duration-300 hover:scale-105"
                aria-label="Chat on WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"
                    className="group-hover:scale-110 transition-transform duration-300">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
            </button>
        </div>

        {/* Contact Form Modal */}
        <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
        />

        {/* Hero Section */}
        <div className="relative w-full overflow-hidden">
            {/* Background — soft ambient gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: `linear-gradient(180deg, #EEF2F9 0%, #F6F8FC 40%, #FFFFFF 100%)`
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-end gap-16 lg:gap-64">
                <div className="relative z-20 flex flex-col items-center justify-center w-full pt-10 md:pt-16 lg:pt-24 px-4">
                    {/* Trust Badge */}
                    <div className="inline-flex items-center gap-2 bg-charcoal/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 ring-1 ring-charcoal/8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0992C2] animate-pulse" />
                        <span className="text-xs font-medium text-charcoal tracking-wide">Trusted by 2000+ Businesses Across India</span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal text-center max-w-4xl leading-[1.08] tracking-tight">
                        Premium Non-Woven
                        <span className="block text-[#0992C2] mt-1">Bag Manufacturer</span>
                    </h1>

                    {/* Tagline */}
                    <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-sage font-medium tracking-[0.2em] uppercase text-center">
                        Sustainable &middot; Customizable &middot; Reusable
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-3 sm:gap-4 mt-8">
                        <button
                            onClick={() => router.push('/products')}
                            className="group bg-forest text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium hover:bg-forest-light transition-all duration-300 flex items-center gap-2.5 shadow-lg shadow-forest/15"
                        >
                            <span>View Products</span>
                            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                        <button
                            onClick={handleContactClick}
                            className="bg-white/70 backdrop-blur-sm text-charcoal px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium ring-1 ring-charcoal/10 hover:ring-forest/30 hover:bg-white transition-all duration-300"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Hero Product Image */}
                <div className="relative z-0 w-full items-end flex justify-center h-[5rem] overflow-x-clip lg:overflow-x-visible pointer-events-none">
                    <Image
                        src={bag2}
                        alt="Premium Non-Woven Bags Collection"
                        width={1500}
                        height={1500}
                        quality={100}
                        className="w-full sm:w-3/4 max-h-[600px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[500px] object-contain scale-110 md:scale-100"
                    />
                </div>
            </div>
        </div>

        {/* Category Row */}
        <div className="bg-cream">
            <div className="flex justify-between items-center pl-5 pr-5 lg:pl-10 lg:pr-10 pt-10 xl:pt-16 pb-8 lg:pb-10 overflow-x-auto overflow-y-hidden md:overflow-x-hidden scrollbar-hide">
                {categoryData.map((item) => (
                    <CategoryCard2
                        key={item.category}
                        category={item.category}
                        title={item.title}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

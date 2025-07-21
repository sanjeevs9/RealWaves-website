'use client'
import Image from 'next/image';
import CategoryCard2 from './CategoryCard2';
import { categoryData } from '@/constants';
import bag2 from "@/public/heroSection/_DSC3176 2.png"
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Hero2() {
    const router = useRouter()
    const [isContactOpen, setIsContactOpen] = useState(false);

    const handleWhatsAppClick = () => {
        // Replace with your WhatsApp number
        const phoneNumber = "919009990000"; // Add your WhatsApp number here
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    const handleContactClick = () => {
        setIsContactOpen(!isContactOpen);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted');
        setIsContactOpen(false);
    };
      
    return (
        <>
        <div className="relative w-full">
            {/* SVG Background */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/heroSection/BG2.svg"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Fixed Buttons Container */}
            <div className="fixed bottom-8 right-1 sm:right-8 z-50 flex flex-col gap-4">
                 {/* Contact Button */}
                 <button
                    onClick={handleContactClick}
                    className="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center group"
                    aria-label="Contact Us"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="group-hover:scale-110 transition-transform duration-300"
                    >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                </button>

                
                {/* WhatsApp Button */}
                <button
                    onClick={handleWhatsAppClick}
                    className="bg-[#25D366] p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center group"
                    aria-label="Chat on WhatsApp"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="group-hover:scale-110 transition-transform duration-300"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                </button>

               
            </div>

            {/* Contact Form Popover */}
            {isContactOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
                            <button
                                onClick={() => setIsContactOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="name" className="block font-semibold text-sm mb-1">Name</label>
                                <input 
                                    id="name" 
                                    name="name" 
                                    type="text" 
                                    placeholder="Name" 
                                    required
                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 placeholder-gray-400 text-sm" 
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-semibold text-sm mb-1">Email</label>
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    placeholder="Email" 
                                    required
                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 placeholder-gray-400 text-sm" 
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="block font-semibold text-sm mb-1">Description</label>
                                <textarea 
                                    id="description" 
                                    name="description" 
                                    rows={4} 
                                    placeholder="Go ahead write it out." 
                                    required
                                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 placeholder-gray-400 resize-none text-sm" 
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="mt-2 flex items-center gap-2 justify-center bg-blue-600 text-white font-medium rounded-full px-6 py-2 shadow hover:bg-blue-700 transition-all text-sm"
                            >
                                <svg width="20" height="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10" cy="10" r="10" fill="#fff" />
                                    <path d="M7 10.5l2 2 4-4" stroke="#2476FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Submit Response
                            </button>
                        </form>
                    </div>
                </div>
            )}
            
            {/* Content */}
            <div className='relative h-full w-full flex flex-col justify-end gap-16 lg:gap-64 '>
                <div className='flex flex-col items-center justify-center  w-full z-20 pt-10 md:pt-16 p-2 lg:p-0 lg:pt-20'>
                        <div className='text-xl font-semibold lg:font-bold md:text-3xl lg:text-5xl mb-6 font-roboto text-center '>Premium Non-Woven Bags,Manufacturer & Exporter</div>
                        <div className='text-sm md:text-2xl font-semibold mb-8 tracking-wide text-black font-poppins text-center'>Sustainable. Customizable. Reusable.</div>
                        <button onClick={()=>{
                            router.push('/products')
                        }} className='bg-[#0A0A3A] px-2 lg:px-3 py-2 text-white rounded-full flex items-center justify-between gap-4'>
                            <span className="text-xs lg:text-base  lg:font-normal pl-3">View Products</span>
                            <div className="bg-[#0057B8] rounded-full p-1 lg:p-3 flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </button>

                </div>
                <div className="z-10 w-full items-end flex justify-center  h-[5rem]   overflow-x-clip lg:overflow-x-visible">
                    <Image
                    src={bag2}
                    alt="bag"
                    width={1500}
                    height={1500}
                    quality={100}
                    className=" w-full sm:w-3/4  max-h-[600px] sm:max-h-[400px] md:max-h-[400px] lg:max-h-[500px] object-contain scale-110 md:scale-100"
                    />
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center pl-5 pr-5 lg:pl-10 lg:pr-10 pt-10 xl:pt-16 overflow-x-auto overflow-y-hidden md:overflow-x-hidden scrollbar-hide lg:pb-5'>
            {categoryData.map((item)=>{
                return(
                    <CategoryCard2 
                        key={item.category}
                        category={item.category}
                        title={item.title}
                        imageUrl={item.imageUrl}
                    />
                )
            })}
        </div>
        </>
    )
}
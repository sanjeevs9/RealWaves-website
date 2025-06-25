import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import facebook from '@/public/socials/fb.png';
import instagram from '@/public/socials/insta.png';
import linkedin from '@/public/socials/linkedIn.png';
import { FooterSvg } from '@/constants';

export const Footer = () => {
    return (
        <div className="w-full relative text-white  p-6 ">
            {/* SVG Background */}
            <div 
                className="absolute top-0 left-0 w-full h-full -z-10 "
                dangerouslySetInnerHTML={{ __html: FooterSvg }}
            />

            <div className="container mx-auto flex flex-col items-center pt-5 relative">
                {/* Logo and Tagline */}
                <div className="mb-6 text-center">
                    <Image
                        src={logo}
                        alt="RealWaves Logo"
                        width={471}
                        height={70}
                        className="mx-auto w-[200px] md:w-[250px] lg:w-[300px]"
                    />
                    <p className="text-[#F4F4F4] font-['Ananda_Black_Personal_Use'] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[110%] tracking-[2.491px] capitalize italic mt-5 px-2">A LEADING NON-WOVEN BAG MANUFACTURER IN CENTRAL INDIA</p>
                </div>

                {/* Main Content Area */}
                <div className="w-full flex flex-wrap justify-between items-start ">
                    {/* Contact Information */}
                    <div className="w-full md:w-1/4 ">
                        <h2 className="text-xl font-bold mb-2">Contact</h2>
                        <p className="mb-1">+91 90099 90000</p>
                        <p className="mb-1">+91 9617234355</p>
                        <p className="mb-1">Near SBI Bank,Nakoda Group Premises</p>
                        <p className="mb-1"> Ward 26, Village Saddu,Raipur</p>
                        <p className="mb-1"> (C.G) 492014</p>
                        <p className="mb-1">info@realwavespacks.com</p>
                    </div>

                    {/* Explore Products Buttons */}
                    <div className="w-full md:w-2/4 flex flex-col items-center justify-center space-x-4 my-4 md:my-0">
                        <div className='flex gap-4'>
                            <Link
                                href="/products"
                                className="flex text-sm sm:text-base w-[180px] md:w-[221px] h-[48px] px-0 py-[1px] justify-center items-center gap-4 flex-shrink-0 bg-white text-black rounded-full hover:bg-gray-200 transition"
                            >
                                Explore Products
                            </Link>
                            <Link
                                href="/about"
                                className="flex text-sm sm:text-base w-[180px] md:w-[221px] h-[48px] px-0 py-[1px] justify-center items-center gap-4 flex-shrink-0 bg-white text-black rounded-full hover:bg-gray-200 transition"
                            >
                                About Us
                            </Link>
                        </div>
                        {/* Social Media Links */}
                        <div className="flex space-x-4 my-4 pt-10">
                            <div className='flex flex-row items-center gap-2'>
                                <Image src={facebook} alt="Facebook" width={20} height={20} />
                                <Link href="https://facebook.com" className="flex items-center hover:text-blue-400 transition">
                                    Facebook <span className="ml-1">↗</span>
                                </Link>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Image src={instagram} alt="Instagram" width={20} height={20} />
                            <Link href="https://www.instagram.com/real_wavespacks/#" target='_blank' className="flex items-center hover:text-pink-400 transition">
                                Instagram <span className="ml-1">↗</span>
                            </Link>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Image src={linkedin} alt="LinkedIn" width={20} height={20} />
                                <Link href="https://linkedin.com" className="flex items-center hover:text-blue-600 transition">
                                    LinkedIn <span className="ml-1">↗</span>
                                </Link>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-4 text-sm text-gray-400">
                        Copyright:© 2025 Realwaves. All rights reserved.
                        </div>
                    </div>


                    {/* Inbox and Search */}
                    <div className="w-full md:w-1/4 text-right pt-10">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold mb-3">Your Inbox Needs</h2>
                            <p className="text-lg text-gray-300">Some Rejuvenation too</p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="px-4 py-2.5 w-full max-w-xs rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2.5 rounded-r-lg transition-colors duration-300">
                                <span className="text-xl">→</span>
                            </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-2 text-right">We respect your privacy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

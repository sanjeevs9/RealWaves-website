import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import facebook from '@/public/socials/fb.png';
import instagram from '@/public/socials/insta.png';
import linkedin from '@/public/socials/linkedIn.png';

export const Footer = () => {
    const socialLinks = [
        { icon: facebook, label: 'Facebook', url: 'https://www.facebook.com/realwavespacksraipur?mibextid=ZbWKwL' },
        { icon: instagram, label: 'Instagram', url: 'https://www.instagram.com/real_wavespacks/#' },
        { icon: linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
    ];

    return (
        <footer className="relative overflow-hidden">
            {/* Main footer */}
            <div className="bg-[#F1F5F9]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-10">

                    {/* Top row — Logo + CTA */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 sm:mb-14">
                        <div>
                            <Image
                                src={logo}
                                alt="RealWaves"
                                width={471}
                                height={70}
                                className="w-[140px] sm:w-[180px]"
                            />
                            <p className="mt-2.5 text-[#0B2D72]/40 text-xs tracking-[1.5px] uppercase font-medium">
                                Non-Woven Bag Manufacturer
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link
                                href="/products"
                                className="px-6 py-2.5 bg-[#0B2D72] text-white rounded-lg text-sm font-medium hover:bg-[#0B2D72]/85 transition-colors duration-300"
                            >
                                Explore Products
                            </Link>
                            <Link
                                href="/about"
                                className="px-6 py-2.5 ring-1 ring-[#0B2D72]/20 text-[#0B2D72] rounded-lg text-sm font-medium hover:bg-[#0B2D72]/5 transition-all duration-300"
                            >
                                About Us
                            </Link>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-[#0B2D72]/10 mb-12 sm:mb-14" />

                    {/* 3-column grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">

                        {/* Contact */}
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-[2.5px] text-[#0B2D72] mb-6">
                                Contact
                            </h3>
                            <div className="space-y-3.5 text-sm text-[#0B2D72]/60 leading-relaxed">
                                <a href="tel:+919009990000" className="flex items-center gap-2.5 hover:text-[#0B2D72] transition-colors">
                                    <svg className="w-4 h-4 text-[#0B2D72]/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +91 90099 90000
                                </a>
                                <a href="tel:+919617234355" className="flex items-center gap-2.5 hover:text-[#0B2D72] transition-colors">
                                    <svg className="w-4 h-4 text-[#0B2D72]/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +91 9617234355
                                </a>
                                <a href="mailto:realwavespacks@gmail.com" className="flex items-center gap-2.5 hover:text-[#0B2D72] transition-colors">
                                    <svg className="w-4 h-4 text-[#0B2D72]/40 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    realwavespacks@gmail.com
                                </a>
                                <div className="flex items-start gap-2.5 pt-1">
                                    <svg className="w-4 h-4 text-[#0B2D72]/40 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="space-y-0.5">
                                        <p>Near SBI Bank, Nakoda Group Premises</p>
                                        <p>Ward 26, Village Saddu, Raipur</p>
                                        <p>(C.G) 492014</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-[2.5px] text-[#0B2D72] mb-6">
                                Quick Links
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { label: 'D-Cut Bags', href: '/products?category=dcut' },
                                    { label: 'Loop Handle Bags', href: '/products?category=loophandle' },
                                    { label: 'U-Cut Bags', href: '/products?category=ucut' },
                                    { label: 'Box Bags', href: '/products?category=nonwovenboxbag' },
                                    { label: 'All Products', href: '/products' },
                                    { label: 'About Us', href: '/about' },
                                ].map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="block text-sm text-[#0B2D72]/50 hover:text-[#0B2D72] hover:translate-x-1 transition-all duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Get In Touch + Socials */}
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-[2.5px] text-[#0B2D72] mb-6">
                                Get In Touch
                            </h3>
                            <p className="text-sm text-[#0B2D72]/50 mb-5 leading-relaxed">
                                Drop us your email and we&apos;ll get back to you within 24 hours.
                            </p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email..."
                                    className="px-4 py-2.5 w-full rounded-l-lg text-[#0B2D72] text-sm focus:outline-none bg-white border border-[#0B2D72]/10 border-r-0 placeholder-[#0B2D72]/30 focus:border-[#0B2D72]/25 transition-colors"
                                />
                                <button className="bg-[#0B2D72] hover:bg-[#0B2D72]/85 px-5 py-2.5 rounded-r-lg transition-colors duration-300 text-white font-medium text-sm flex-shrink-0">
                                    Send
                                </button>
                            </div>

                            {/* Socials */}
                            <div className="flex items-center gap-3 mt-8">
                                {socialLinks.map((s) => (
                                    <Link
                                        key={s.label}
                                        href={s.url}
                                        target="_blank"
                                        className="w-9 h-9 rounded-lg bg-white hover:bg-[#0B2D72]/[0.06] ring-1 ring-[#0B2D72]/[0.06] flex items-center justify-center transition-all duration-300 group"
                                    >
                                        <Image
                                            src={s.icon}
                                            alt={s.label}
                                            width={16}
                                            height={16}
                                            className="opacity-35 group-hover:opacity-70 transition-opacity duration-300"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar — navy strip */}
            <div className="bg-[#0B2D72] px-4 sm:px-6 lg:px-8 py-4">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-[11px] text-white/50">
                        &copy; {new Date().getFullYear()} Realwaves Packs. All rights reserved.
                    </p>
                    <p className="text-[11px] text-white/30">
                        Made in Raipur, Chhattisgarh
                    </p>
                </div>
            </div>
        </footer>
    );
};

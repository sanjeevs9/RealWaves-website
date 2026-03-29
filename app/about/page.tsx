'use client'

import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCounter } from '../components/animations';

const offerings = [
    { name: 'D-Cut Bags', href: '/products?category=dcut' },
    { name: 'Loop Handle Bags', href: '/products?category=loophandle' },
    { name: 'U-Cut Bags', href: '/products?category=ucut' },
    { name: 'Box Bags', href: '/products?category=nonwovenboxbag' },
    { name: 'BOPP Laminated Bags', href: '/products?category=boppboxbag' },
    { name: 'Custom Print Bags', href: '/products' },
];

export default function About() {
    const stats = [
        { value: 7, suffix: '+', label: 'Years of Excellence' },
        { value: 2000, suffix: '+', label: 'Happy Clients' },
        { value: 2, suffix: ' Lakh+', label: 'Bags Per Day' },
        { value: 100, suffix: '+', label: 'Cities Served' },
    ];

    return (
        <div className="bg-cream">
            {/* Breadcrumb */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <nav className="flex items-center gap-2 text-xs sm:text-sm text-sage">
                    <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
                    <span>&gt;</span>
                    <span className="text-charcoal font-medium">About Us</span>
                </nav>
            </div>

            {/* Hero */}
            <section className="py-14 sm:py-18 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeIn direction="up" delay={0.1}>
                        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] tracking-tight">
                            Crafting Sustainable Packaging
                            <span className="block text-[#0992C2] mt-1">Since 2017</span>
                        </h1>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.25}>
                        <p className="mt-6 text-sage text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            A leading manufacturer of eco-friendly, durable, and customizable non-woven bags from the heart of Central India.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Stats */}
            <section className="pb-16 sm:pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.1}>
                        {stats.map((stat) => (
                            <StaggerItem key={stat.label}>
                                <div className="bg-white rounded-xl p-5 sm:p-6 text-center ring-1 ring-black/[0.04]">
                                    <p className="text-2xl sm:text-3xl font-bold text-charcoal">
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className="text-xs sm:text-sm text-sage mt-1.5">{stat.label}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Story */}
            <section className="pb-16 sm:pb-20 lg:pb-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up" delay={0.1}>
                        <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-14 ring-1 ring-black/[0.04]">
                            <h2 className="section-heading mb-8">
                                Our Story
                            </h2>
                            <div className="space-y-5 text-sage text-sm sm:text-base leading-relaxed">
                                <p>
                                    <strong className="text-charcoal">Realwaves</strong> is a trusted name in the field of eco-friendly, durable, and customizable non-woven bags, proudly manufacturing and exporting from <strong className="text-charcoal">Raipur, Chhattisgarh</strong> for the past 7+ years.
                                </p>
                                <p>
                                    Founded with a vision to contribute to a sustainable and plastic-free future, Realwaves combines innovation, quality, and affordability to deliver non-woven solutions that meet global standards. We specialize in manufacturing <strong className="text-charcoal">reusable, recyclable, and biodegradable non-woven bags</strong> that cater to various industries like retail, fashion, food &amp; grocery, corporate gifting, exhibitions, events, and more.
                                </p>
                                <p>
                                    Our state-of-the-art facility in Raipur is equipped with advanced machinery, a skilled workforce, and a strict quality control system that ensures every bag leaving our unit stands out in durability, design, and finish.
                                </p>
                            </div>

                            {/* Capabilities */}
                            <div className="mt-10 pt-8 border-t border-linen">
                                <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-5">What We Offer</h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {offerings.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center gap-2.5 text-sm text-sage hover:text-[#0992C2] transition-colors group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0992C2] flex-shrink-0 group-hover:scale-125 transition-transform" />
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

        </div>
    );
}

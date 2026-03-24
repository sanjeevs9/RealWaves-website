export default function About() {
    const stats = [
        { value: '7+', label: 'Years of Excellence' },
        { value: '2000+', label: 'Happy Clients' },
        { value: '2 Lakh+', label: 'Bags Per Day' },
        { value: '100+', label: 'Cities Served' },
    ];

    return (
        <div className="bg-cream">
            {/* Hero */}
            <section className="py-16 sm:py-20 lg:py-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] tracking-tight">
                        Crafting Sustainable Packaging
                        <span className="block text-[#0992C2] mt-1">Since 2017</span>
                    </h1>
                    <p className="mt-6 text-sage text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        A leading manufacturer of eco-friendly, durable, and customizable non-woven bags from the heart of Central India.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="pb-16 sm:pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="bg-white rounded-xl p-5 sm:p-6 text-center ring-1 ring-black/[0.04]">
                                <p className="text-2xl sm:text-3xl font-bold text-charcoal">{stat.value}</p>
                                <p className="text-xs sm:text-sm text-sage mt-1.5">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="pb-16 sm:pb-20 lg:pb-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                                {[
                                    'D-Cut Bags',
                                    'Loop Handle Bags',
                                    'U-Cut Bags',
                                    'Box Bags',
                                    'BOPP Laminated Bags',
                                    'Custom Print Bags',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2.5 text-sm text-sage">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#0992C2] flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

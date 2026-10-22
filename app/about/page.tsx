import type { Metadata } from 'next';
import Link from 'next/link';
import { DEFAULT_OPEN_GRAPH } from '../site';
import { BagTypes } from '../bagTypes';
import PageHeader from '../components/PageHeader';
import AboutVideoSection from '../Sections/AboutUs';
import WhyChooseUsSection from '../Sections/WhyChooseUs';
import Reviews from '../Sections/Reviews';
import MapSection from '../Sections/location';
import FactoryPhotos from '../Sections/FactoryPhotos';

const title = 'About Us – Bag Manufacturer in Raipur Since 2017';
const description =
    'RealWaves Packs has made custom printed non-woven bags in Saddu, Raipur since 2017: 2000+ clients, 2 lakh+ bags a day, supplied to 100+ cities.';

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: '/about' },
    openGraph: { ...DEFAULT_OPEN_GRAPH, title, description, url: '/about' },
};

const STATS = [
    { value: '2017', label: 'making bags since' },
    { value: '2000+', label: 'shops and businesses' },
    { value: '2 lakh+', label: 'bags a day' },
    { value: '100+', label: 'cities supplied' },
];

// The About page reuses the homepage sections (factory clips, why us, customers,
// visit us) under its own header and a short story.
export default function About() {
    return (
        <div className="bg-cream">
            <PageHeader
                crumbs={[{ label: 'Home', href: '/' }, { label: 'About us' }]}
                eyebrow="About RealWaves Packs"
                title="A non-woven bag maker in Raipur, since 2017"
                intro="We print and make custom bags in our own factory in Saddu, Raipur, for shops across India."
                aside={
                    <dl className="grid grid-cols-2 gap-3">
                        {STATS.map((s) => (
                            <div key={s.label} className="rounded-2xl bg-forest-light px-5 py-5 ring-1 ring-inset ring-ivory/10 sm:px-6 sm:py-6">
                                <dt className="sr-only">{s.label}</dt>
                                <dd className="text-[1.9rem] font-semibold leading-none tracking-[-0.03em] text-bronze sm:text-[2.3rem]">{s.value}</dd>
                                <dd aria-hidden="true" className="mt-2 text-[14px] text-mist sm:text-[15px]">{s.label}</dd>
                            </div>
                        ))}
                    </dl>
                }
            />

            {/* Story */}
            <section aria-labelledby="story-title" className="px-4 py-16 sm:px-6 sm:py-20">
                <div className="mx-auto grid max-w-6xl gap-x-16 gap-y-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                    <div>
                        <p className="text-[15px] font-semibold text-sage">Our story</p>
                        <h2 id="story-title" className="section-heading mt-3 text-balance">
                            Bags for the shops that carry your city
                        </h2>
                    </div>
                    <div>
                        <div className="space-y-4 text-pretty text-base leading-relaxed text-sage sm:text-[17px]">
                            <p>
                                <strong className="font-semibold text-charcoal">RealWaves Packs</strong> makes custom printed non-woven bags in its own factory in Saddu, Raipur. Since 2017 we have printed bags for more than 2000 shops and businesses in 100+ cities.
                            </p>
                            <p>
                                We make reusable, recyclable D-Cut, U-Cut, loop handle, box and BOPP laminated bags for sweet shops, saree and clothing stores, supermarkets, bakeries, events and corporate gifting.
                            </p>
                            <p>
                                Printing, cutting, stitching and packing all happen under one roof, so we keep a close eye on quality and on delivery dates.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-2.5">
                            {BagTypes.map((t) => (
                                <Link
                                    key={t.slug}
                                    href={`/non-woven-bags/${t.slug}`}
                                    className="inline-flex min-h-[44px] items-center rounded-full bg-white px-5 text-sm font-semibold text-forest ring-1 ring-inset ring-[#EADFC4] transition-colors hover:bg-forest hover:text-ivory sm:text-[15px]"
                                >
                                    {t.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <FactoryPhotos />
            <AboutVideoSection />
            <WhyChooseUsSection />
            <Reviews />
            <MapSection />
        </div>
    );
}

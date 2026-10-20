import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import { BagTypes } from '../bagTypes';
import { BUSINESS, LEGAL_NAME, whatsappUrl } from '../site';

const COMPANY_LINKS = [
    { label: 'All products', href: '/products' },
    { label: 'About us', href: '/about' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Contact', href: '/#contact' },
];

// Only the profiles that exist (the old LinkedIn link pointed at linkedin.com itself).
const SOCIALS = [
    { label: 'Facebook', url: BUSINESS.sameAs[0] },
    { label: 'Instagram', url: BUSINESS.sameAs[1] },
];

// Phones get 40px-tall rows so each link is easy to tap
const linkClass = 'inline-flex min-h-[40px] items-center text-[15px] text-mist transition-colors hover:text-ivory sm:min-h-0';

export const Footer = () => {
    return (
        // All navy: a last call to action, the link columns, then a giant faint
        // "RealWaves" wordmark that the bottom bar slightly overlaps
        <footer className="overflow-hidden bg-forest text-ivory">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-4 pb-10 pt-14 sm:px-6 sm:pt-16">
                <p className="font-display text-[1.7rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[2.2rem]">
                    Ready to print your bags?
                </p>
                <div className="flex flex-wrap gap-3">
                    <a
                        href={whatsappUrl("Hi RealWaves, I'd like a quote for non-woven bags.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[48px] items-center rounded-full bg-ivory px-6 text-[15px] font-semibold text-forest transition-colors hover:bg-white"
                    >
                        Get a quote on WhatsApp
                    </a>
                    <a
                        href="tel:+919009990000"
                        className="inline-flex min-h-[48px] items-center rounded-full px-6 text-[15px] font-semibold text-ivory ring-1 ring-inset ring-ivory/50 transition-colors hover:bg-ivory/10"
                    >
                        Call +91 90099 90000
                    </a>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ivory/15 pb-4 pt-12 sm:gap-10 lg:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]">
                    <div className="col-span-2 sm:col-span-1">
                        <Link href="/" aria-label="RealWaves Packs home" className="inline-flex py-1">
                            {/* The blue logo, turned white for the navy background */}
                            <Image src={logo} alt="RealWaves Packs" className="h-[28px] w-auto brightness-0 invert" />
                        </Link>
                        <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-mist">
                            Custom printed non-woven bags, made in Raipur since 2017.
                        </p>
                        <address className="mt-3 max-w-xs text-[15px] not-italic leading-relaxed text-mist">
                            {BUSINESS.address.streetAddress}, Raipur, Chhattisgarh {BUSINESS.address.postalCode}
                        </address>
                    </div>

                    <nav aria-label="Bag styles">
                        <h3 className="text-[15px] font-semibold text-ivory">Bag styles</h3>
                        <ul className="mt-2 sm:mt-4 sm:space-y-2.5">
                            {BagTypes.map((bag) => (
                                <li key={bag.slug}>
                                    <Link href={`/non-woven-bags/${bag.slug}`} className={linkClass}>{bag.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Company">
                        <h3 className="text-[15px] font-semibold text-ivory">Company</h3>
                        <ul className="mt-2 sm:mt-4 sm:space-y-2.5">
                            {COMPANY_LINKS.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className={linkClass}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="col-span-2 sm:col-span-1">
                        <h3 className="text-[15px] font-semibold text-ivory">Contact</h3>
                        <ul className="mt-2 sm:mt-4 sm:space-y-2.5">
                            <li><a href="tel:+919009990000" className={linkClass}>+91 90099 90000</a></li>
                            <li><a href="tel:+919617234355" className={linkClass}>+91 96172 34355</a></li>
                            <li><a href={`mailto:${BUSINESS.email}`} className={`${linkClass} break-all`}>{BUSINESS.email}</a></li>
                            <li className="flex gap-6 sm:pt-1">
                                {SOCIALS.map((s) => (
                                    <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[40px] items-center text-[15px] font-semibold text-ivory underline-offset-4 hover:underline sm:min-h-0">
                                        {s.label}
                                    </a>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sized so the word spans the content width; the bar below covers its foot */}
            <p
                aria-hidden="true"
                className="mx-auto mb-[-0.13em] mt-6 max-w-6xl select-none whitespace-nowrap px-4 text-center font-display text-[clamp(3.6rem,calc((100vw-48px)/5.55),12.4rem)] font-bold leading-[0.8] tracking-[-0.045em] text-white/[0.07] sm:mt-10 sm:px-6"
            >
                RealWaves
            </p>

            <div className="relative bg-forest-dark">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-5 text-sm text-mist sm:px-6">
                    <p>&copy; {new Date().getFullYear()} {LEGAL_NAME}. All rights reserved.</p>
                    <p>Made in Raipur, Chhattisgarh</p>
                </div>
            </div>
        </footer>
    );
};

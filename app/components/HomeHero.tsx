'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ContactModal from './ContactModal'
import { BagTypes } from '../bagTypes'
import { whatsappUrl } from '../site'
import mithaiBag from '@/public/bags/Box3.webp'
import bakeryBag from '@/public/bags/Box5.webp'
import sareeBag from '@/public/bags/LH4.webp'
import fashionBag from '@/public/bags/D-cut6.webp'
import familyStoreBag from '@/public/bags/LH7.webp'

// Customer bags standing on the "stage" under the headline. Sizes are heights relative
// to the tallest (saree) bag, so the row scales with the stage height. All five show on
// every screen; on phones they overlap more, as a cluster, so they stay a readable size.
// Everything here is in the first view, so the middle three load eagerly.
const STAGE = [
    { src: mithaiBag, alt: 'Yellow non-woven box bag printed for a sweet shop', className: 'h-[61%] z-[1]' },
    { src: bakeryBag, alt: 'Green non-woven box bag printed for a bakery', className: 'h-[63%] z-[2]', eager: true },
    { src: sareeBag, alt: 'Paisley printed loop-handle bag for a saree shop', className: 'h-full z-[3]', priority: true },
    { src: fashionBag, alt: 'Pink D-Cut bag printed for a fashion store', className: 'h-[72%] z-[2]', eager: true },
    { src: familyStoreBag, alt: 'White and red loop-handle bag printed for a family store', className: 'h-[66%] z-[1]' },
]

export const ArrowIcon = ({ className = '' }: { className?: string }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
)

export const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
)

export default function HomeHero() {
    const [isContactOpen, setIsContactOpen] = useState(false)

    return (
        <>
            {/* Floating Action Buttons */}
            <div className="fixed bottom-4 right-3 z-50 flex flex-col gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3">
                <button
                    onClick={() => setIsContactOpen(true)}
                    className="group bg-forest p-3 sm:p-3.5 rounded-full shadow-lg shadow-forest/20 ring-2 ring-white hover:bg-forest-light transition-all duration-300 hover:scale-105"
                    aria-label="Contact Us"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"
                        className="group-hover:scale-110 transition-transform duration-300">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                </button>
                <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#25D366] p-3 sm:p-3.5 rounded-full shadow-lg shadow-[#25D366]/20 hover:bg-[#22c55e] transition-all duration-300 hover:scale-105 text-white"
                    aria-label="Chat on WhatsApp"
                >
                    <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
            </div>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

            {/* Phones and portrait tablets: the hero is as tall as its content, so the bags
                sit right under the buttons. Landscape screens ("wide": laptops, desktops,
                landscape tablets): it fills exactly one screen below the 68px navbar
                (620–1000px); the text keeps its size and the bag stage takes whatever height
                is left. */}
            <section
                aria-labelledby="home-hero-title"
                className="flex flex-col overflow-hidden bg-forest text-ivory wide:h-[clamp(620px,calc(100svh-68px),1000px)]"
            >
                <div className="mx-auto max-w-4xl shrink-0 px-5 pb-7 pt-9 text-center sm:px-6 md:pb-[clamp(20px,4vh,40px)] md:pt-[clamp(28px,6vh,64px)]">
                    {/* Real {' '} text node between the spans, so crawlers and screen readers
                        don't read "…since 2017Bags that…" */}
                    <h1 id="home-hero-title">
                        <span className="block text-[13px] font-medium text-mist sm:text-base">
                            Non-woven bag manufacturer in Raipur, since 2017
                        </span>{' '}
                        <span className="mt-3 block text-balance font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[2.6rem] md:mt-4 md:text-[clamp(2.5rem,min(3.8vw,6.5vh),3.6rem)]">
                            Bags that carry your brand home.
                        </span>
                    </h1>
                    <p className="mx-auto mt-3 max-w-[32rem] text-pretty text-[15px] leading-normal text-mist sm:mt-5 sm:text-base sm:leading-relaxed md:text-[17px]">
                        Custom printed D-Cut, U-Cut, Loop Handle, Box and BOPP bags. Made in Raipur and delivered wholesale anywhere in India.
                    </p>
                    <div className="mt-5 flex justify-center gap-2.5 sm:mt-7 sm:gap-3">
                        <button
                            type="button"
                            onClick={() => setIsContactOpen(true)}
                            className="group inline-flex min-h-[46px] items-center gap-2 rounded-full bg-bronze px-5 text-[15px] font-semibold text-forest transition-colors hover:bg-bronze-light sm:min-h-[48px] sm:gap-2.5 sm:px-6"
                        >
                            Get a quote
                            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </button>
                        <a
                            href={whatsappUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[46px] items-center gap-2 rounded-full px-5 text-[15px] font-semibold text-ivory ring-1 ring-inset ring-ivory/60 transition-colors hover:bg-ivory/10 sm:min-h-[48px] sm:gap-2.5 sm:px-6"
                        >
                            <WhatsAppIcon className="h-[18px] w-[18px]" />
                            <span className="sm:hidden">WhatsApp</span>
                            <span className="hidden sm:inline">Chat on WhatsApp</span>
                        </a>
                    </div>
                    <p className="mt-4 text-[13px] text-mist sm:mt-5 sm:text-sm">Trusted by 2000+ businesses across India</p>
                </div>

                {/* Bag stage: navy above, an ivory "floor" below that the bags stand on */}
                <div className="relative flex flex-col justify-end px-3 pb-4 sm:px-6 wide:min-h-0 wide:flex-1 md:pb-[clamp(14px,3vh,32px)]">
                    <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-12 bg-ivory md:h-[clamp(48px,8vh,84px)]" />
                    {/* Row height: a share of the width on phones and portrait tablets (the bags
                        overlap there, as a cluster, so all five fit); on wide screens, the stage
                        height, capped so the row never outgrows the width */}
                    <div className="relative mx-auto flex h-[50vw] w-full items-end justify-center sm:h-[44vw] md:h-[40vw] wide:h-full wide:max-h-[min(480px,31vw)]">
                        {STAGE.map((bag) => (
                            <div key={bag.alt} className={`relative -mx-[5.5vw] shrink-0 md:-mx-[3vw] wide:-mx-[0.8%] ${bag.className}`}>
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-x-[6%] -bottom-2.5 h-5 rounded-[50%] bg-[radial-gradient(closest-side,rgba(7,29,74,0.32),rgba(7,29,74,0))]"
                                />
                                <Image
                                    src={bag.src}
                                    alt={bag.alt}
                                    priority={bag.priority}
                                    loading={bag.eager ? 'eager' : undefined}
                                    sizes="(min-width: 768px) 20vw, 32vw"
                                    className="relative block h-full w-auto max-w-none"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bag styles: each links to its landing page */}
            <nav aria-label="Bag styles" className="bg-ivory px-4 pb-12 pt-8 sm:pb-14">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                    <span className="w-full text-center text-[15px] font-medium text-slate-600 sm:mr-2 sm:w-auto">
                        Browse by style:
                    </span>
                    {BagTypes.map((bag) => (
                        <Link
                            key={bag.slug}
                            href={`/non-woven-bags/${bag.slug}`}
                            className="inline-flex min-h-[44px] items-center rounded-full px-5 text-sm font-semibold text-forest ring-1 ring-inset ring-forest/70 transition-colors hover:bg-forest hover:text-ivory sm:text-[15px]"
                        >
                            {bag.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    )
}

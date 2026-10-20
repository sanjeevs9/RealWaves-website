'use client'
import Image, { StaticImageData } from 'next/image'
import { useRef, useState } from 'react'
import { whatsappUrl } from '../site'
import { ArrowIcon } from './HomeHero'
import mithaiBag from '@/public/bags/Box3.webp'
import sareeBag from '@/public/bags/LH4.webp'
import bakeryBag from '@/public/bags/Box5.webp'
import fashionBag from '@/public/bags/D-cut6.webp'
import sweetShopBag from '@/public/bags/u-cut2.webp'
import familyStoreBag from '@/public/bags/LH7.webp'
import textileBag from '@/public/bags/boppbox1.webp'

const THEMES = {
    bronze: {
        panel: 'bg-bronze text-forest',
        muted: 'text-slate-600',
        cta: 'bg-forest text-ivory hover:bg-forest-light',
        shadow: 'drop-shadow-[0_16px_20px_rgba(11,45,114,0.25)]',
    },
    navy: {
        panel: 'bg-forest text-ivory',
        muted: 'text-mist',
        cta: 'bg-bronze text-forest hover:bg-bronze-light',
        shadow: 'drop-shadow-[0_16px_20px_rgba(3,12,36,0.45)]',
    },
    mist: {
        panel: 'bg-forest-50 text-forest',
        muted: 'text-slate-600',
        cta: 'bg-forest text-ivory hover:bg-forest-light',
        shadow: 'drop-shadow-[0_16px_20px_rgba(11,45,114,0.22)]',
    },
}

interface Slide {
    id: string
    theme: keyof typeof THEMES
    eyebrow: string
    title: string
    body: string
    cta: string
    message: string
    images: { src: StaticImageData; alt: string; className: string }[]
}

// Copy only states what the site already claims (custom printing, design help,
// wholesale delivery across India). Dates, lead times and MOQ stay out until confirmed.
const SLIDES: Slide[] = [
    {
        id: 'festive',
        theme: 'bronze',
        eyebrow: 'Festive & wedding season',
        title: 'Book your festive print run before the rush.',
        body: 'Diwali and wedding orders fill up fast. Book your slot early and have your bags in store before the season peaks.',
        cta: 'Plan my order',
        message: "Hi RealWaves, I'd like to book festive season bags.",
        images: [
            { src: mithaiBag, alt: 'Yellow box bag printed for a sweet shop', className: 'left-[12%] h-[74%] -rotate-6' },
            { src: sareeBag, alt: 'Paisley printed loop-handle bag for a saree shop', className: 'right-[12%] h-[92%] rotate-3' },
        ],
    },
    {
        id: 'logo',
        theme: 'navy',
        eyebrow: 'Custom logo printing',
        title: 'Your logo on every bag that leaves your shop.',
        body: "Send your logo and the quantity you need on WhatsApp. No artwork yet? We'll help with the design.",
        cta: 'Send my logo',
        message: "Hi RealWaves, I'd like a price for bags printed with my logo.",
        images: [
            { src: bakeryBag, alt: 'Green box bag printed for a bakery', className: 'left-[8%] h-[68%] -rotate-[4deg]' },
            { src: fashionBag, alt: 'Pink D-Cut bag printed for a fashion store', className: 'right-[10%] h-[86%] rotate-[4deg]' },
        ],
    },
    {
        id: 'bulk',
        theme: 'mist',
        eyebrow: 'Bulk & wholesale',
        title: 'Stocking up for the year? Ask for bulk pricing.',
        body: 'Large orders, packed and dispatched from Raipur to anywhere in India.',
        cta: 'Get bulk pricing',
        message: "Hi RealWaves, I'd like bulk pricing for non-woven bags.",
        images: [
            { src: sweetShopBag, alt: 'U-Cut bag printed for a sweet shop', className: 'left-[6%] h-[70%] -rotate-[5deg]' },
            { src: familyStoreBag, alt: 'White and red loop-handle bag printed for a family store', className: 'left-[30%] h-[80%]' },
            { src: textileBag, alt: 'Brown BOPP laminated bag printed for a textile store', className: 'right-[4%] h-[72%] rotate-[5deg]' },
        ],
    },
]

const pad = (n: number) => String(n).padStart(2, '0')

export default function PromoBanners() {
    const [active, setActive] = useState(0)
    const touchX = useRef<number | null>(null)
    const go = (i: number) => setActive((i + SLIDES.length) % SLIDES.length)

    return (
        <section
            aria-roledescription="carousel"
            aria-label="Offers"
            className="bg-ivory px-4 pb-16 sm:px-6 sm:pb-20"
        >
            <div className="mx-auto max-w-6xl">
                {/* All slides share one grid cell, so the box is always as tall as the
                    tallest slide and switching never shifts the page below */}
                <div
                    className="grid grid-cols-1"
                    onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
                    onTouchEnd={(e) => {
                        if (touchX.current === null) return
                        const dx = e.changedTouches[0].clientX - touchX.current
                        if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1))
                        touchX.current = null
                    }}
                >
                    {SLIDES.map((slide, i) => {
                        const t = THEMES[slide.theme]
                        const isActive = i === active
                        return (
                            <div
                                key={slide.id}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`${i + 1} of ${SLIDES.length}`}
                                aria-hidden={!isActive}
                                inert={!isActive}
                                className={`[grid-area:1/1] flex min-h-[380px] flex-wrap items-stretch overflow-hidden rounded-3xl transition-opacity duration-500 ${t.panel} ${isActive ? 'opacity-100' : 'invisible opacity-0'}`}
                            >
                                <div className="flex min-w-0 flex-1 basis-[400px] flex-col justify-center px-7 py-9 sm:px-11 sm:py-12">
                                    <p className={`text-[15px] font-semibold ${slide.theme === 'navy' ? 'text-bronze' : t.muted}`}>
                                        {slide.eyebrow}
                                    </p>
                                    <h2 className="mt-3 max-w-[32rem] text-balance font-display text-[1.7rem] font-semibold leading-[1.12] tracking-[-0.015em] sm:text-[2rem] lg:text-[2.3rem]">
                                        {slide.title}
                                    </h2>
                                    <p className={`mt-4 max-w-[30rem] text-pretty text-base leading-relaxed ${t.muted}`}>
                                        {slide.body}
                                    </p>
                                    <a
                                        href={whatsappUrl(slide.message)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group mt-7 inline-flex min-h-[48px] items-center gap-2.5 self-start rounded-full px-6 text-[15px] font-semibold transition-colors ${t.cta}`}
                                    >
                                        {slide.cta}
                                        <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                    </a>
                                </div>
                                <div className="relative min-h-[240px] min-w-0 flex-1 basis-[380px] sm:min-h-[300px]">
                                    {slide.images.map((img) => (
                                        <Image
                                            key={img.alt}
                                            src={img.src}
                                            alt={img.alt}
                                            sizes="(min-width: 640px) 20vw, 45vw"
                                            className={`absolute -bottom-4 w-auto max-w-none ${t.shadow} ${img.className}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                    <p aria-hidden="true" className="text-base font-semibold tabular-nums text-forest">
                        {pad(active + 1)} <span className="text-slate-500">/ {pad(SLIDES.length)}</span>
                    </p>
                    <div className="flex items-center">
                        {SLIDES.map((slide, i) => (
                            <button
                                key={slide.id}
                                type="button"
                                onClick={() => setActive(i)}
                                aria-label={`Show banner ${i + 1}: ${slide.eyebrow}`}
                                aria-current={i === active}
                                className="flex h-11 w-11 items-center justify-center"
                            >
                                <span className={`block h-2 rounded-full transition-all duration-300 ${i === active ? 'w-7 bg-forest' : 'w-2 bg-slate-500'}`} />
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={() => go(active - 1)}
                            aria-label="Previous banner"
                            className="ml-3 flex h-12 w-12 items-center justify-center rounded-full text-forest ring-1 ring-inset ring-forest transition-colors hover:bg-forest hover:text-ivory"
                        >
                            <ArrowIcon className="h-5 w-5 rotate-180" />
                        </button>
                        <button
                            type="button"
                            onClick={() => go(active + 1)}
                            aria-label="Next banner"
                            className="ml-2 flex h-12 w-12 items-center justify-center rounded-full bg-forest text-ivory transition-colors hover:bg-forest-light"
                        >
                            <ArrowIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

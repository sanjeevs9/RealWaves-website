'use client'

import { useState, useEffect } from 'react'

interface Task {
    id: string
    text: string
    done: boolean
}

interface Section {
    title: string
    tasks: Task[]
}

interface TabData {
    label: string
    description: string
    sections: Section[]
}

// ─── TAB 1: Things to collect from others (photoshoot, clients, team) ───
const collectSections: Section[] = [
    {
        title: 'Photoshoot — Why Choose Us Section (6 images)',
        tasks: [
            { id: 'c-img-1', text: 'Sustainable Products — bags on natural surface or customer holding bag outside their shop', done: false },
            { id: 'c-img-2', text: '7+ Years of Expertise — factory floor, machines running, production line wide shot', done: false },
            { id: 'c-img-3', text: 'Nationwide & Export Delivery — warehouse with stacked orders, loaded delivery truck', done: false },
            { id: 'c-img-4', text: 'Custom Branding & Printing — printing machine in action, spread of different branded bags', done: false },
            { id: 'c-img-5', text: 'Eco-Conscious Manufacturing — raw fabric rolls, quality checking process', done: false },
            { id: 'c-img-6', text: 'Quick Turnaround — packed orders with shipping labels, workers packing cartons', done: false },
        ],
    },
    {
        title: 'Photoshoot — Factory & Products',
        tasks: [
            { id: 'c-img-8', text: 'Shoot multiple angles per product (currently all 4 thumbnails show the same image)', done: false },
            { id: 'c-img-9', text: 'Hero section — shoot a real RealWaves bag photo at the same angle as the current hero image', done: false },
            { id: 'c-img-10', text: 'Team photos for About page', done: false },
            { id: 'c-img-11', text: 'Real blog-related photos (factory, bags in use, customers)', done: false },
        ],
    },
    {
        title: 'Collect from Clients — Testimonials',
        tasks: [
            { id: 'c-rev-1', text: 'Ask 8-10 real clients for testimonials (name, designation, company, city, review text)', done: false },
        ],
    },
]

// ─── TAB 2: Things you need to do yourself ───
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const yourTaskSections: Section[] = [
    {
        title: 'EmailJS Dashboard',
        tasks: [
            { id: 'ejs-1', text: 'Add phone and category fields to EmailJS email template ( {{phone}} and {{category}} )', done: false },
            { id: 'ejs-2', text: 'Remove old industry field from EmailJS template', done: false },
            { id: 'ejs-3', text: 'Test the contact form — submit a test and verify all fields come through', done: false },
        ],
    },
    {
        title: 'Update Website Content (after collecting)',
        tasks: [
            { id: 'up-1', text: 'Replace fake review logos & data with real testimonials in constants file', done: false },
            { id: 'up-2', text: '"See all Reviews" button — link to Google Reviews page or remove it', done: false },
            { id: 'up-3', text: 'Add collected images to Why Choose Us section', done: false },
            { id: 'up-4', text: 'Replace factory video with new footage', done: false },
            { id: 'up-5', text: 'Add multi-angle product photos', done: false },
            { id: 'up-6', text: 'Update About page with real founding story and team photos', done: false },
            { id: 'up-7', text: 'Update product data — GSM, MOQ, pricing, colors, sizes', done: false },
        ],
    },
    {
        title: 'Blog Content',
        tasks: [
            { id: 'blog-1', text: 'Fix fake authors — change "Sarah Johnson" and "Michael Chen" to "RealWaves Team"', done: false },
            { id: 'blog-2', text: 'Update blog dates (currently January 2024)', done: false },
            { id: 'blog-3', text: 'Write blog: "Non woven bag manufacturer in Raipur"', done: false },
            { id: 'blog-4', text: 'Write blog: "D-cut vs loop handle bags — which to choose"', done: false },
            { id: 'blog-5', text: 'Write blog: "Custom printed carry bags wholesale India"', done: false },
            { id: 'blog-6', text: 'Write blog: "Plastic ban alternatives for retailers"', done: false },
            { id: 'blog-7', text: 'Write blog: "Non woven bag GSM guide"', done: false },
            { id: 'blog-8', text: 'Write 3-5 more SEO-targeted blogs', done: false },
        ],
    },
    {
        title: 'Social Media Links',
        tasks: [
            { id: 'social-1', text: 'Update LinkedIn URL (currently generic "https://linkedin.com")', done: false },
            { id: 'social-2', text: 'Verify Facebook URL is correct', done: false },
            { id: 'social-3', text: 'Verify Instagram URL is correct', done: false },
            { id: 'social-4', text: 'Verify WhatsApp number is correct (919009990000)', done: false },
        ],
    },
    {
        title: 'Footer / Legal',
        tasks: [
            { id: 'foot-1', text: 'Newsletter email input — connect to Mailchimp/Brevo or remove it', done: false },
            { id: 'foot-2', text: 'Update ISO badge based on actual certification status', done: false },
            { id: 'foot-3', text: 'Create Privacy Policy page (/privacy)', done: false },
            { id: 'foot-4', text: 'Create Terms & Conditions page (/terms)', done: false },
        ],
    },
    {
        title: 'SEO / Technical',
        tasks: [
            { id: 'seo-1', text: 'Add meta titles & descriptions to every page', done: false },
            { id: 'seo-2', text: 'Submit sitemap to Google Search Console', done: false },
            { id: 'seo-3', text: 'Claim and update Google Business Profile', done: false },
            { id: 'seo-4', text: 'Set up Google Analytics / Tag Manager', done: false },
            { id: 'seo-5', text: 'Set up conversion tracking on form submissions', done: false },
            { id: 'seo-6', text: 'Add favicon with your logo mark', done: false },
        ],
    },
    {
        title: 'Domain / Hosting',
        tasks: [
            { id: 'host-1', text: 'Verify domain is connected and live', done: false },
            { id: 'host-2', text: 'Set up SSL (HTTPS)', done: false },
        ],
    },
    {
        title: 'Future Features',
        tasks: [
            { id: 'feat-1', text: 'Add "Request Free Sample" CTA on product pages', done: false },
            { id: 'feat-2', text: 'Add "Download Catalogue" PDF lead magnet', done: false },
            { id: 'feat-3', text: 'Add sticky mobile CTA bar', done: false },
            { id: 'feat-4', text: 'Create industry landing pages (retail, fashion, food, events, corporate)', done: false },
            { id: 'feat-5', text: 'Add FAQ page', done: false },
            { id: 'feat-6', text: 'Pre-fill WhatsApp message with context on product pages', done: false },
        ],
    },
]

const tabs: TabData[] = [
    {
        label: 'To Collect',
        description: 'Images, testimonials, and content to gather from your team and clients',
        sections: collectSections,
    },
    // {
    //     label: 'Your Tasks',
    //     description: 'Things you need to do yourself on the website',
    //     sections: yourTaskSections,
    // },
]

const STORAGE_KEY = 'realwaves-todo-v2'

export default function TodoPage() {
    const [activeTab, setActiveTab] = useState(0)
    const [allSections, setAllSections] = useState<Section[][]>(tabs.map((t) => t.sections))
    const [loaded, setLoaded] = useState(false)

    // Load saved state
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) {
            try {
                const savedDone: Record<string, boolean> = JSON.parse(saved)
                setAllSections((prev) =>
                    prev.map((sections) =>
                        sections.map((section) => ({
                            ...section,
                            tasks: section.tasks.map((task) => ({
                                ...task,
                                done: savedDone[task.id] ?? task.done,
                            })),
                        }))
                    )
                )
            } catch {
                // ignore
            }
        }
        setLoaded(true)
    }, [])

    // Save on change
    useEffect(() => {
        if (!loaded) return
        const doneMap: Record<string, boolean> = {}
        allSections.forEach((sections) =>
            sections.forEach((s) => s.tasks.forEach((t) => (doneMap[t.id] = t.done)))
        )
        localStorage.setItem(STORAGE_KEY, JSON.stringify(doneMap))
    }, [allSections, loaded])

    const toggleTask = (sectionIdx: number, taskIdx: number) => {
        setAllSections((prev) =>
            prev.map((sections, tabIdx) =>
                tabIdx === activeTab
                    ? sections.map((section, si) =>
                          si === sectionIdx
                              ? {
                                    ...section,
                                    tasks: section.tasks.map((task, ti) =>
                                        ti === taskIdx ? { ...task, done: !task.done } : task
                                    ),
                                }
                              : section
                      )
                    : sections
            )
        )
    }

    const currentSections = allSections[activeTab]

    // Stats for current tab
    const tabTotal = currentSections.reduce((sum, s) => sum + s.tasks.length, 0)
    const tabDone = currentSections.reduce((sum, s) => sum + s.tasks.filter((t) => t.done).length, 0)
    const tabProgress = tabTotal > 0 ? Math.round((tabDone / tabTotal) * 100) : 0

    // Overall stats
    const overallTotal = allSections.reduce((sum, sections) => sum + sections.reduce((s2, s) => s2 + s.tasks.length, 0), 0)
    const overallDone = allSections.reduce((sum, sections) => sum + sections.reduce((s2, s) => s2 + s.tasks.filter((t) => t.done).length, 0), 0)
    const overallProgress = overallTotal > 0 ? Math.round((overallDone / overallTotal) * 100) : 0

    if (!loaded) return null

    return (
        <div className="bg-cream min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
                        Website To-Do List
                    </h1>
                    <p className="mt-2 text-sage text-sm sm:text-base">
                        Track everything that needs to be done before launch.
                    </p>

                    {/* Overall progress */}
                    <div className="mt-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-charcoal">
                                Overall: {overallDone} / {overallTotal} completed
                            </span>
                            <span className="text-xs font-bold text-[#0992C2]">{overallProgress}%</span>
                        </div>
                        <div className="w-full h-2 bg-[#0B2D72]/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#0B2D72] rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${overallProgress}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-2">
                    {tabs.map((tab, idx) => {
                        const tTotal = allSections[idx].reduce((sum, s) => sum + s.tasks.length, 0)
                        const tDone = allSections[idx].reduce((sum, s) => sum + s.tasks.filter((t) => t.done).length, 0)
                        return (
                            <button
                                key={tab.label}
                                onClick={() => setActiveTab(idx)}
                                className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                    activeTab === idx
                                        ? 'bg-[#0B2D72] text-white shadow-lg shadow-[#0B2D72]/20'
                                        : 'bg-white text-charcoal/60 hover:bg-white/80 ring-1 ring-black/[0.04]'
                                }`}
                            >
                                <span className="block">{tab.label}</span>
                                <span className={`text-[11px] mt-0.5 block ${activeTab === idx ? 'text-white/60' : 'text-sage'}`}>
                                    {tDone}/{tTotal} done
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* Tab description + progress */}
                <div className="mb-6 mt-4">
                    <p className="text-xs text-sage">{tabs[activeTab].description}</p>
                    <div className="mt-3">
                        <div className="w-full h-1.5 bg-[#0B2D72]/8 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#0992C2] rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${tabProgress}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-6">
                    {currentSections.map((section, si) => {
                        const sectionDone = section.tasks.filter((t) => t.done).length
                        const sectionTotal = section.tasks.length
                        const allDone = sectionDone === sectionTotal

                        return (
                            <div
                                key={section.title}
                                className={`bg-white rounded-xl p-5 sm:p-6 ring-1 transition-all duration-300 ${
                                    allDone ? 'ring-green-200 bg-green-50/30' : 'ring-black/[0.04]'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="font-display text-base sm:text-lg font-bold text-charcoal">
                                        {section.title}
                                    </h2>
                                    <span
                                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                                            allDone
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-[#0B2D72]/8 text-[#0B2D72]/60'
                                        }`}
                                    >
                                        {sectionDone}/{sectionTotal}
                                    </span>
                                </div>

                                <div className="space-y-1">
                                    {section.tasks.map((task, ti) => (
                                        <label
                                            key={task.id}
                                            className={`flex items-start gap-3 py-2.5 px-2 -mx-2 rounded-lg cursor-pointer transition-colors hover:bg-cream/60 group ${
                                                task.done ? 'opacity-60' : ''
                                            }`}
                                        >
                                            <div className="pt-0.5">
                                                <input
                                                    type="checkbox"
                                                    checked={task.done}
                                                    onChange={() => toggleTask(si, ti)}
                                                    className="sr-only"
                                                />
                                                <div
                                                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                                                        task.done
                                                            ? 'bg-[#0B2D72] border-[#0B2D72]'
                                                            : 'border-gray-300 group-hover:border-[#0B2D72]/40'
                                                    }`}
                                                >
                                                    {task.done && (
                                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    )}
                                                </div>
                                            </div>
                                            <span
                                                className={`text-sm leading-relaxed transition-all ${
                                                    task.done
                                                        ? 'line-through text-sage'
                                                        : 'text-charcoal/80'
                                                }`}
                                            >
                                                {task.text}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Footer note */}
                <p className="mt-10 text-center text-xs text-sage/60">
                    Progress is saved in your browser. Do not clear browser data.
                </p>
            </div>
        </div>
    )
}

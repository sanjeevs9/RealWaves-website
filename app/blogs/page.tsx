import type { Metadata } from "next";
import { blogData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { DEFAULT_OPEN_GRAPH } from "../site";
import PageHeader from "../components/PageHeader";

const title = "Packaging Blog – Non-Woven Bag Guides & Tips";
const description =
    "Guides on non-woven carry bags, custom printing, GSM and plastic-free packaging from RealWaves Packs, a bag manufacturer in Raipur, Chhattisgarh.";

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/blogs" },
    openGraph: { ...DEFAULT_OPEN_GRAPH, title, description, url: "/blogs" },
};

export default function Blogs() {
    const featured = blogData[0];
    const rest = blogData.slice(1);

    return (
        <div className="bg-cream min-h-screen">
            <PageHeader
                crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
                eyebrow="Blog"
                title="Guides for shops buying bags"
                intro="Tips on choosing, printing and using non-woven bags, from the people who make them."
            />

            {/* Featured Article */}
            <div className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16">
                <Link
                    href={`/blogs/${featured.slug}`}
                    className="group block overflow-hidden rounded-3xl bg-white ring-1 ring-inset ring-[#EADFC4] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(11,45,114,0.10)]"
                >
                    <div className="grid md:grid-cols-2">
                        <div className="relative h-56 md:h-full min-h-[280px] overflow-hidden">
                            <Image
                                src={featured.image}
                                alt={featured.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B2D72]/8 px-3 py-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-bronze-ink" />
                                    <span className="text-xs font-medium text-[#0B2D72]">{featured.category}</span>
                                </span>
                                <span className="text-xs text-sage">{featured.readTime}</span>
                            </div>

                            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-charcoal leading-snug tracking-tight mb-4 group-hover:text-bronze-ink transition-colors duration-300">
                                {featured.title}
                            </h2>

                            <p className="text-sage text-sm leading-relaxed mb-6 line-clamp-3">
                                {featured.content.substring(0, 180)}...
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">
                                        {featured.author.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-charcoal">{featured.author}</p>
                                    <p className="text-xs text-sage">
                                        {new Date(featured.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* All Articles Grid */}
            <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
                <h2 className="section-heading mb-8">All articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {rest.map((blog) => (
                        <Link
                            key={blog.id}
                            href={`/blogs/${blog.slug}`}
                            className="group block overflow-hidden rounded-3xl bg-white p-2 ring-1 ring-inset ring-[#EADFC4] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(11,45,114,0.10)]"
                        >
                            <div className="relative h-44 overflow-hidden rounded-2xl sm:h-48">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="px-3 pb-3 pt-4 sm:px-4">
                                <div className="flex items-center gap-2 mb-3">
                                    {blog.tags && blog.tags.slice(0, 2).map((tag, i) => (
                                        <span key={i} className="text-xs font-medium text-bronze-ink bg-bronze/60 px-2.5 py-0.5 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="font-display text-base font-semibold text-charcoal leading-snug mb-2 line-clamp-2 group-hover:text-bronze-ink transition-colors duration-300">
                                    {blog.title}
                                </h3>
                                <p className="text-sage text-sm leading-relaxed mb-4 line-clamp-2">
                                    {blog.content.substring(0, 100)}...
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center">
                                            <span className="text-white text-[10px] font-bold">
                                                {blog.author.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <span className="text-xs text-sage">
                                            {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} &middot; {blog.readTime}
                                        </span>
                                    </div>
                                    <svg className="w-4 h-4 text-sage group-hover:text-bronze-ink group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

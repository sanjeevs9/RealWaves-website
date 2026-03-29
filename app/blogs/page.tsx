"use client"
import { blogData } from "@/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
    const router = useRouter();
    const featured = blogData[0];
    const rest = blogData.slice(1);

    return (
        <div className="bg-cream min-h-screen">
            {/* Breadcrumb + Header */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
                <nav className="flex items-center gap-2 text-xs sm:text-sm text-sage mb-6">
                    <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
                    <span>&gt;</span>
                    <span className="text-charcoal font-medium">Blog</span>
                </nav>

                <div className="mb-10 sm:mb-14">
                    <h1 className="section-heading">Insights & Resources</h1>
                    <p className="mt-3 text-sage text-sm sm:text-base max-w-lg leading-relaxed">
                        Tips, trends, and insights on sustainable packaging and growing your business.
                    </p>
                </div>
            </div>

            {/* Featured Article */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
                <div
                    onClick={() => router.push(`/blogs/${featured.id}`)}
                    className="group cursor-pointer bg-white rounded-2xl ring-1 ring-black/[0.04] overflow-hidden hover:shadow-lg hover:shadow-charcoal/5 transition-all duration-300"
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
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0992C2]" />
                                    <span className="text-xs font-medium text-[#0B2D72]">{featured.category}</span>
                                </span>
                                <span className="text-xs text-sage">{featured.readTime}</span>
                            </div>

                            <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-charcoal leading-snug tracking-tight mb-4 group-hover:text-[#0992C2] transition-colors duration-300">
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
                                    <p className="text-[11px] text-sage">
                                        {new Date(featured.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* All Articles Grid */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
                <h2 className="font-display text-lg sm:text-xl font-bold text-charcoal mb-6 sm:mb-8">All Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {rest.map((blog) => (
                        <div
                            key={blog.id}
                            onClick={() => router.push(`/blogs/${blog.id}`)}
                            className="group cursor-pointer bg-white rounded-xl ring-1 ring-black/[0.04] overflow-hidden hover:shadow-lg hover:shadow-charcoal/5 transition-all duration-300"
                        >
                            <div className="relative h-40 sm:h-44 overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-4 sm:p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    {blog.tags && blog.tags.slice(0, 2).map((tag, i) => (
                                        <span key={i} className="text-[10px] sm:text-xs font-medium text-[#0992C2] bg-[#0992C2]/8 px-2 py-0.5 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="font-display text-sm sm:text-base font-bold text-charcoal leading-snug mb-2 line-clamp-2 group-hover:text-[#0992C2] transition-colors duration-300">
                                    {blog.title}
                                </h3>
                                <p className="text-sage text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                                    {blog.content.substring(0, 100)}...
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center">
                                            <span className="text-white text-[9px] font-bold">
                                                {blog.author.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <span className="text-[11px] text-sage">
                                            {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} &middot; {blog.readTime}
                                        </span>
                                    </div>
                                    <svg className="w-4 h-4 text-sage group-hover:text-[#0992C2] group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

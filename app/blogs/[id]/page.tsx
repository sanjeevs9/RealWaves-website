import { blogData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blog = blogData.find((blog) => blog.id === id);

    if (!blog) {
        return (
            <div className="bg-cream min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-display text-2xl font-bold text-charcoal mb-4">Blog Not Found</h1>
                    <Link href="/blogs" className="text-[#0992C2] hover:underline text-sm">
                        Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    const sections = blog.content.split(/\n\s*\n/);

    // Find related blogs (same category, exclude current)
    const related = blogData.filter(b => b.id !== blog.id).slice(0, 3);

    return (
        <div className="bg-cream min-h-screen">
            {/* Hero Image with overlay */}
            <div className="relative h-[50vh] sm:h-[55vh] lg:h-[60vh] overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/50" />

                {/* Breadcrumb on image */}
                <div className="absolute top-0 left-0 right-0 z-10">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                        <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/70">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>&gt;</span>
                            <Link href="/blogs" className="hover:text-white transition-colors">Blog</Link>
                            <span>&gt;</span>
                            <span className="text-white font-medium truncate max-w-[200px]">{blog.title}</span>
                        </nav>
                    </div>
                </div>

                {/* Title + meta on image */}
                <div className="absolute bottom-0 left-0 right-0 z-10">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                            {blog.category}
                        </span>
                        <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight mb-5 max-w-3xl">
                            {blog.title}
                        </h1>
                        <div className="flex items-center gap-4 text-white/80 text-xs sm:text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">
                                        {blog.author.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <span>{blog.author}</span>
                            </div>
                            <span>&middot;</span>
                            <span>{blog.readTime}</span>
                            <span>&middot;</span>
                            <span>
                                {new Date(blog.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {blog.tags.map((tag, index) => (
                        <span key={index} className="text-xs font-medium text-[#0992C2] bg-[#0992C2]/8 px-3 py-1 rounded-full">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Article Sections */}
                <article>
                    {sections.map((section, idx) => {
                        const [firstLine, ...rest] = section.trim().split(/\n/);
                        return (
                            <div key={idx} className="mb-10 last:mb-0">
                                {idx === 0 ? (
                                    <div>
                                        <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-body">
                                            {firstLine}
                                        </p>
                                        {rest.length > 0 && (
                                            <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed font-body mt-4">
                                                {rest.join(" ")}
                                            </p>
                                        )}
                                    </div>
                                ) : (
                                    <div>
                                        <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-4 leading-snug">
                                            {firstLine}
                                        </h2>
                                        {rest.length > 0 && (
                                            <div className="space-y-4">
                                                {rest.map((paragraph, pIdx) => (
                                                    <p key={pIdx} className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-body">
                                                        {paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </article>

                {/* Divider */}
                <div className="border-t border-gray-200 my-12 sm:my-16" />

                {/* Author Bio */}
                <div className="flex items-start gap-4 mb-12 sm:mb-16">
                    <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-base font-bold">
                            {blog.author.split(' ').map(n => n[0]).join('')}
                        </span>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-charcoal mb-1">Written by {blog.author}</p>
                        <p className="text-sm text-sage leading-relaxed">
                            Expert in sustainable packaging and business solutions. Passionate about helping brands make eco-friendly choices.
                        </p>
                    </div>
                </div>

                {/* Related Articles */}
                {related.length > 0 && (
                    <div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-charcoal mb-6">More to read</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
                            {related.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/blogs/${item.id}`}
                                    className="group"
                                >
                                    <div className="relative rounded-xl overflow-hidden aspect-[3/2] mb-3">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <h4 className="text-sm font-bold text-charcoal leading-snug line-clamp-2 group-hover:text-[#0992C2] transition-colors duration-300">
                                        {item.title}
                                    </h4>
                                    <p className="text-[11px] text-sage mt-1">{item.readTime}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

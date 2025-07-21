import { blogData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blog = blogData.find((blog) => blog.id === id);
    if (!blog) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
                    <p className="text-gray-600 mb-8">The blog you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/blogs" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    // Split content into sections by double newlines
    const sections = blog.content.split(/\n\s*\n/);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4">
                        <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                            {blog.category}
                        </div>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                            {blog.title}
                        </h1>
                        <div className="flex items-center justify-center space-x-2 md:space-x-6 text-xs md:text-sm">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">
                                        {blog.author.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <span>{blog.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span>{blog.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                })}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {blog.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Table of Contents */}
                <div className="mb-8 bg-blue-50 rounded-xl p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                    <div className="space-y-2">
                        {sections.slice(1).map((section, idx) => {
                            const [firstLine] = section.trim().split(/\n/);
                            return (
                                <a
                                    key={idx + 1}
                                    href={`#section-${idx + 1}`}
                                    className="block text-blue-600 hover:text-blue-800 hover:underline transition-colors text-sm md:text-base"
                                >
                                    {idx + 1}. {firstLine}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Article Content */}
                <article className="prose prose-sm md:prose-lg max-w-none">
                    <div className="bg-white rounded-xl shadow-sm p-4 md:p-8 lg:p-12">
                        {sections.map((section, idx) => {
                            // Split the section into first line and the rest
                            const [firstLine, ...rest] = section.trim().split(/\n/);
                            return (
                                <div key={idx} className="mb-8 last:mb-0" id={idx === 0 ? undefined : `section-${idx}`}>
                                    {idx === 0 ? (
                                        // First section - introduction
                                        <div className="text-base md:text-xl text-gray-700 leading-relaxed">
                                            <p className="mb-4">{firstLine}</p>
                                            {rest.length > 0 && (
                                                <p className="text-gray-600">{rest.join(" ")}</p>
                                            )}
                                        </div>
                                    ) : (
                                        // Other sections with headings
                                        <div>
                                            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
                                                {firstLine}
                                            </h2>
                                            {rest.length > 0 && (
                                                <div className="text-gray-700 leading-relaxed space-y-4">
                                                    {rest.map((paragraph, pIdx) => (
                                                        <p key={pIdx} className="text-sm md:text-lg">
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
                    </div>
                </article>

                {/* Author Bio */}
                <div className="mt-12 bg-white rounded-xl shadow-sm p-4 md:p-8">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg md:text-xl">
                                {blog.author.split(' ').map(n => n[0]).join('')}
                            </span>
                        </div>
                        <div>
                            <h3 className="text-lg md:text-xl font-bold text-gray-900">{blog.author}</h3>
                            <p className="text-sm md:text-base text-gray-600">Expert in sustainable packaging and business solutions</p>
                        </div>
                    </div>
                </div>

                {/* Social Sharing */}
                {/* <div className="mt-12 bg-white rounded-xl shadow-sm p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Share this article</h3>
                    <div className="flex space-x-4">
                        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                            <span>Twitter</span>
                        </button>
                        <button className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            <span>Facebook</span>
                        </button>
                        <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <span>LinkedIn</span>
                        </button>
                    </div>
                </div> */}

                {/* Related Articles CTA */}
                <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 md:p-8 text-center text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Want to Learn More?</h3>
                    <p className="text-sm md:text-base text-blue-100 mb-6">Discover more insights about sustainable packaging and business growth.</p>
                    <Link 
                        href="/blogs" 
                        className="inline-block bg-white text-blue-600 px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
                    >
                        Explore All Blogs
                    </Link>
                </div>
            </div>
        </div>
    );
}
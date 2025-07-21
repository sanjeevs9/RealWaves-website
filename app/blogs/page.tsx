"use client"
import { blogData } from "@/constants";
import { useRouter } from "next/navigation";
import BlogComponent from "../components/BlogComponent";
import Image from "next/image";

export default function Blogs() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our Blog
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Discover insights, tips, and trends in sustainable packaging and business growth
                    </p>
                    <div className="mt-8 flex items-center justify-center space-x-4 text-blue-100">
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span>{blogData.length} Articles</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span>Updated Regularly</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Blog */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2">
                                <div className="relative h-48 md:h-full w-full">
                                    <Image
                                        src={blogData[0].image}
                                        alt={blogData[0].title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
                                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                                    {blogData[0].category}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {blogData[0].title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {blogData[0].content.substring(0, 200)}...
                                </p>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">
                                                    {blogData[0].author.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <span>{blogData[0].author}</span>
                                        </div>
                                        <span>{blogData[0].readTime}</span>
                                    </div>
                                    <button
                                        onClick={() => router.push(`/blogs/${blogData[0].id}`)}
                                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto"
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Articles */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogData.slice(1).map((blog, idx) => (
                            <BlogComponent
                                key={idx + 1}
                                image={blog.image}
                                title={blog.title}
                                article={blog.content}
                                author={blog.author}
                                date={blog.date}
                                readTime={blog.readTime}
                                tags={blog.tags}
                                onClick={() => router.push(`/blogs/${blog.id}`)}
                            />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    );
}
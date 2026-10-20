import { blogData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_NAME, SITE_URL } from "../../site";
import JsonLd, { breadcrumbs } from "../../components/JsonLd";
import PageHeader from "../../components/PageHeader";

// Unknown slugs return a real 404 instead of a 200 "not found" page (a soft 404).
// Old numeric addresses (/blogs/1) redirect permanently in next.config.js.
export const dynamicParams = false;

export async function generateStaticParams() {
    return blogData.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const blog = blogData.find((b) => b.slug === slug);
    if (!blog) return {};

    const description = blog.content.substring(0, 155).replace(/\n/g, " ") + "...";
    return {
        title: blog.title,
        description,
        openGraph: {
            title: blog.title,
            description,
            type: "article",
            publishedTime: blog.date,
            authors: [blog.author],
            url: `/blogs/${slug}`,
            siteName: SITE_NAME,
            locale: "en_IN",
            images: [{ url: blog.image, alt: blog.title }],
        },
        alternates: {
            canonical: `/blogs/${slug}`,
        },
    };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogData.find((blog) => blog.slug === slug);

    if (!blog) notFound();

    const sections = blog.content.split(/\n\s*\n/);

    // Find related blogs (same category, exclude current)
    const related = blogData.filter(b => b.id !== blog.id).slice(0, 3);

    return (
        <div className="bg-cream min-h-screen">
            <JsonLd
                data={breadcrumbs([
                    { name: "Home", path: "/" },
                    { name: "Blog", path: "/blogs" },
                    { name: blog.title, path: `/blogs/${blog.slug}` },
                ])}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    headline: blog.title,
                    datePublished: blog.date,
                    image: `${SITE_URL}${blog.image}`,
                    mainEntityOfPage: `${SITE_URL}/blogs/${blog.slug}`,
                    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
                    publisher: { "@id": `${SITE_URL}/#business` },
                }}
            />
            <PageHeader
                crumbs={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blogs" }, { label: blog.title }]}
                eyebrow={blog.category}
                title={blog.title}
                intro={
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px]">
                        <span>{blog.author}</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>{blog.readTime}</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>
                            {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                    </p>
                }
            />

            {/* Content: a comfortable reading width */}
            <div className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
                <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl">
                    <Image src={blog.image} alt={blog.title} fill priority sizes="(min-width: 768px) 720px, 100vw" className="object-cover" />
                </div>

                {/* Tags */}
                <div className="mb-10 flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                        <span key={index} className="rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-forest ring-1 ring-inset ring-[#EADFC4]">
                            {tag}
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
                                        <h2 className="font-display text-xl sm:text-2xl font-semibold text-charcoal mb-4 leading-snug">
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
                <div className="my-12 border-t border-[#EADFC4] sm:my-16" />

                {/* Author Bio */}
                <div className="mb-12 flex items-start gap-4 rounded-3xl bg-white p-6 ring-1 ring-inset ring-[#EADFC4] sm:mb-16 sm:p-7">
                    <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-base font-bold">
                            {blog.author.split(' ').map(n => n[0]).join('')}
                        </span>
                    </div>
                    <div>
                        <p className="mb-1 text-[15px] font-semibold text-charcoal">Written by {blog.author}</p>
                        <p className="text-sm text-sage leading-relaxed">
                            We make custom printed non-woven bags in our own factory in Raipur, and write these guides from what we see on the shop floor.
                        </p>
                    </div>
                </div>

                {/* Related Articles */}
                {related.length > 0 && (
                    <div>
                        <h3 className="mb-6 font-display text-[1.5rem] font-semibold tracking-[-0.02em] text-charcoal">More to read</h3>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                            {related.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/blogs/${item.slug}`}
                                    className="group block rounded-3xl bg-white p-2 ring-1 ring-inset ring-[#EADFC4] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(11,45,114,0.10)]"
                                >
                                    <div className="relative mb-3 aspect-[3/2] overflow-hidden rounded-2xl">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <h4 className="line-clamp-2 px-2 text-[15px] font-semibold leading-snug text-charcoal">
                                        {item.title}
                                    </h4>
                                    <p className="mt-1 px-2 pb-2 text-[13px] text-sage">{item.readTime}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

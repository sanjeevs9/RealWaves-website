import { blogData } from "@/constants";

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blog = blogData.find((blog) => blog.id === id);
    if (!blog) {
        return <div>Blog not found</div>;
    }

    // Split content into sections by double newlines
    const sections = blog.content.split(/\n\s*\n/);

    return (
        <div className="flex flex-col items-center pt-10 min-h-screen">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
                <div className="text-lg sm:text-xl uppercase tracking-wider mb-2 font-roboto text-[#656565]">BLOGS</div>
                <h1 className="font-normal text-2xl sm:text-3xl md:text-4xl text-black font-roboto leading-[124%] tracking-[1px] sm:tracking-[2px] mb-6 sm:mb-8 md:mb-10">
                    {blog.title}
                </h1>
                <div className="text-gray-800 text-base font-roboto leading-relaxed space-y-6">
                    {sections.map((section, idx) => {
                        // Split the section into first line and the rest
                        const [firstLine, ...rest] = section.trim().split(/\n/);
                        return (
                            <p key={idx} className="mb-4 lg:text-lg">
                                <span className={` block mb-1  ${ idx === 0 ? '' : 'font-medium lg:text-2xl'}`}>{firstLine}</span>
                                {rest.join(" ")}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
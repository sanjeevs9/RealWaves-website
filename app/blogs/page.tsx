"use client"
import { blogData } from "@/constants";
import { useRouter } from "next/navigation";
import BlogComponent from "../components/BlogComponent";

export default function Blogs() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center pt-10" >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between flex-wrap">
          {blogData.map((blog, idx) => (
            <BlogComponent
              key={idx}
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
    )
}
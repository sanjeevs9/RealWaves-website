"use client"
import { blogData } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Blogs() {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center  pt-10" >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-between flex-wrap cursor-pointer">
          {blogData.map((blog, idx) => (
            <div
              key={idx}
              onClick={()=>{
                router.push(`/blogs/${blog.id}`)
              }}
              className="bg-white rounded-2xl shadow-lg max-w-[390px] min-w-[320px] flex-1 flex flex-col overflow-hidden mb-8"
            >
              <div className="w-full h-[140px] relative">
                <Image src={blog.image} alt="Blog" fill className="object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-gray-500 text-sm mb-1">({blog.tags})</div>
                <div className="font-semibold text-xl mb-3">{blog.title}</div>
                <div className="text-gray-700 text-sm mb-6 line-clamp-4">{blog.content}</div>
                <div className="flex items-center mt-auto  pt-10">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <div className="font-semibold text-sm">{blog.author}</div>
                    <div className="text-gray-500 text-sm">
                      {blog.date} • {blog.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    )
}
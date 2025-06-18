'use client'
// import BrandingCarousel from './BrandingCarousel';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { blogData } from '@/constants';

export default function Blogs() {
  const router = useRouter();
  return (
    <section className="bg-white pt-8 pl-44 pr-40 ">
      <div className="max-w-full mx-auto px-6">
        <div className="text-xl uppercase tracking-wider mb-2 font-roboto text-[#656565]">BLOGS</div>
        <h1 className="text-4xl font-normal text-black font-roboto leading-[124%] tracking-[2px] mb-10">
          Look What our Leaders Have to Say
        </h1>
        <div className="flex gap-8 justify-between flex-wrap cursor-pointer">
          {blogData.slice(0, 4).map((blog, idx) => (
            <div
              key={idx}
              onClick={()=>{
                router.push(`/blogs/${blog.id}`)
              }}
            className={`bg-white rounded-2xl shadow-lg max-w-[400px] min-w-[320px] flex-1 flex flex-col overflow-hidden mb-8 ${idx === 3 ? 'hidden 2xl:block' : ''}`}
            >
              <div className="w-full h-[140px] relative">
                <Image src={blog.image} alt="Blog" fill className="object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between min-h-[319px]">
                  <div className='flex flex-col '>
                    <div className="text-gray-500 text-sm mb-1">({blog.tags})</div>
                    <div className="font-semibold text-xl mb-3">{blog.title}</div>
                    <div className="text-gray-700 text-sm mb-6 line-clamp-4">{blog.content}</div>
                  </div>
                  <div className="flex items-center mt-auto  pt-1 ">
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
      <div className="mt-8">
      </div>
    </section>
  );
}

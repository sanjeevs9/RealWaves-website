'use client'
// import BrandingCarousel from './BrandingCarousel';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { blogData } from '@/constants';

export default function Blogs() {
  const router = useRouter();
  return (
    <section className="bg-white pt-8 px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-40 ">
      <div className="max-w-full mx-auto p-2 md:p-0">
        <div className="text-lg sm:text-xl uppercase tracking-wider mb-2 font-roboto text-[#656565]">BLOGS</div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-black font-roboto leading-[124%] tracking-[1px] sm:tracking-[2px] mb-6 sm:mb-8 md:mb-10">
          Look What our Leaders Have to Say
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 cursor-pointer p-4 md:p-0">
          {blogData.slice(0, 4).map((blog, idx) => (
            <div
              key={idx}
              onClick={()=>{
                router.push(`/blogs/${blog.id}`)
              }}
            className={`bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden ${idx === 3 ? 'hidden xl:block' : ''}`}
            >
              <div className="w-full h-[120px] sm:h-[140px] relative">
                <Image src={blog.image} alt="Blog" fill className="object-cover" />
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between min-h-[280px] sm:min-h-[319px]">
                  <div className='flex flex-col '>
                    <div className="text-gray-500 text-xs sm:text-sm mb-1">({blog.tags})</div>
                    <div className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">{blog.title}</div>
                    <div className="text-gray-700 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-4">{blog.content}</div>
                  </div>
                  <div className="flex items-center mt-auto pt-1">
                    {/* <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 mr-2 sm:mr-3"></div> */}
                    <div>
                      <div className="font-semibold text-xs sm:text-sm">{blog.author}</div>
                      <div className="text-gray-500 text-xs sm:text-sm">
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

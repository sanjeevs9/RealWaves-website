// import BrandingCarousel from './BrandingCarousel';
import Image from 'next/image';

const blogData = [
  {
    title: 'Water and Its Implications',
    tags: 'TAGS',
    content:
      'Partnering with [Your Brand Name] transformed our packaging process—superior quality, reliable delivery, and outstanding customer service. They\'ve become a vital part of our supply chain. Highly recommend for any B2B needs!',
    author: 'Name Sharma',
    date: '29 May 2025',
    readTime: '6 min read',
    image: '/a310f323ee3331152834763071548ae7378fa3c5.jpg',
  },
  {
    title: 'Water and Its Implications',
    tags: 'TAGS',
    content:
      'Partnering with [Your Brand Name] transformed our packaging process—superior quality, reliable delivery, and outstanding customer service. They\'ve become a vital part of our supply chain. Highly recommend for any B2B needs!',
    author: 'Name Sharma',
    date: '29 May 2025',
    readTime: '6 min read',
    image: '/a310f323ee3331152834763071548ae7378fa3c5.jpg',
  },
  {
    title: 'Water and Its Implications',
    tags: 'TAGS',
    content:
      'Partnering with [Your Brand Name] transformed our packaging process—superior quality, reliable delivery, and outstanding customer service. They\'ve become a vital part of our supply chain. Highly recommend for any B2B needs!',
    author: 'Name Sharma',
    date: '29 May 2025',
    readTime: '6 min read',
    image: '/a310f323ee3331152834763071548ae7378fa3c5.jpg',
  },
];

export default function Blogs() {
  return (
    <section className="bg-white pt-8 pl-44 pr-40">
      <div className="max-w-full mx-auto px-6">
        <div className="text-xl uppercase tracking-wider mb-2 font-roboto text-[#656565]">BLOGS</div>
        <h1 className="text-4xl font-normal text-black font-roboto leading-[124%] tracking-[2px] mb-10">
          Look What our Leaders Have to Say
        </h1>
        <div className="flex gap-8 justify-between flex-wrap">
          {blogData.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg max-w-[400px] min-w-[320px] flex-1 flex flex-col overflow-hidden mb-8"
            >
              <div className="w-full h-[140px] relative">
                <Image src={blog.image} alt="Blog" fill className="object-cover" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-gray-500 text-sm mb-1">({blog.tags})</div>
                <div className="font-semibold text-xl mb-3">{blog.title}</div>
                <div className="text-gray-700 text-sm mb-6">{blog.content}</div>
                <div className="flex items-center mt-auto  pt-16">
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

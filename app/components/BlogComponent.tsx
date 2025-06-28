import React from "react";
import Image from "next/image";

interface BlogCardProps {
  image: string;
  title: string;
  article: string;
  author: string;
  date: string;
  readTime: string;
  tags?: string[] | string;
  id?: string;
  onClick?: () => void;
}

const BlogComponent: React.FC<BlogCardProps> = ({
  image,
  title,
  article,
  author,
  date,
  readTime,
  tags,
  onClick
}) => {
  // Format tags: if array, join with commas, otherwise use as is
  const formattedTags = Array.isArray(tags) ? tags.join(", ") : tags;

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-lg max-w-[350px] flex-1 flex flex-col overflow-hidden mb-8 cursor-pointer font-[Inter]"
    >
      <div className="w-full h-[160px] relative bg-[#0a1a2f]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="text-gray-500 text-sm mb-2">({formattedTags || "TAGS"})</div>
        <div className="font-semibold text-base mb-3 font-roboto">{title}</div>
        <div className="text-gray-700 text-base mb-7 line-clamp-4">{article}</div>
        <div className="flex items-center mt-auto">
          <div>
            <div className="font-semibold text-sm font-roboto">{author}</div>
            <div className="text-gray-500 text-xs font-roboto">
              {date} • {readTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
"use client";

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
  const formattedTags = Array.isArray(tags) ? tags : [tags];

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {formattedTags && formattedTags.length > 0 && formattedTags.slice(0, 2).map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {article.substring(0, 120)}...
        </p>
        
        {/* Author and Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <div className="font-semibold text-sm text-gray-900">{author}</div>
              <div className="text-gray-500 text-xs">
                {new Date(date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })} • {readTime}
              </div>
            </div>
          </div>
          
          {/* Read More Arrow */}
          <div className="text-blue-600 group-hover:translate-x-1 transition-transform duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
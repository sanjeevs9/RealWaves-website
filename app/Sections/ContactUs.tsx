import Image from "next/image";
import React from "react";

export default function ContactUs() {
  return (
    <div className=" py-16 px-4  bg-white pl-52 pr-52">
      <div className="w-full flex flex-col md:flex-row justify-between md:items-start ">
        {/* Left Side: Contact Info */}
        <div className=" flex flex-col gap-8 ">
          <div>
            <p className="text-xl uppercase tracking-wider mb-2 font-roboto text-[#656565]">Contact Us</p>
            <h2 className="text-4xl font-normal text-black font-roboto leading-[124%] tracking-[2px]">Reach Out to Us at Any Point</h2>
          </div>
          <div className="flex items-center gap-4 mb-2">
            {/* Email Icon */}
            <span className="inline-flex items-center justify-center w-10 h-10">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#2476FE"/>
                <path d="M8 12.5L16 18L24 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="8" y="12" width="16" height="8" rx="2" stroke="white" strokeWidth="2"/>
              </svg>
            </span>
            <div>
              <p className="text-xs text-gray-500">E-mail</p>
              <a href="mailto:xyzmmmmmm@gmail.com" className="text-blue-600 font-medium text-base hover:underline">xyzmmmmmm@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Phone Icon */}
            <span className="inline-flex items-center justify-center w-10 h-10">
              <Image src="/phone-icon.png" alt="Phone Icon" width={32} height={32} />
            </span>
            <div>
              <p className="text-xs text-gray-500">Phone Number</p>
              <a href="tel:900000000000" className="text-blue-600 font-medium text-base hover:underline">900000000000</a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className=" max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 border-t-[0.5px]">
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block font-semibold text-md mb-1">Name</label>
              <input id="name" name="name" type="text" placeholder="Name" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 placeholder-gray-400" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-md mb-1">Email</label>
              <input id="email" name="email" type="email" placeholder="Email" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 placeholder-gray-400" />
            </div>
            <div>
              <label htmlFor="industry" className="block font-semibold text-md mb-1">Industry</label>
              <input id="industry" name="industry" type="text" placeholder="Industry" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 placeholder-gray-400" />
            </div>
            <div>
              <label htmlFor="description" className="block font-semibold text-md mb-1">Description</label>
              <textarea id="description" name="description" rows={7} placeholder="Go ahead write it out." className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 placeholder-gray-400 resize-none" />
            </div>
            <button type="submit" className="mt-2 flex items-center gap-2 justify-center bg-blue-600 text-white font-medium rounded-full px-6 py-2 shadow hover:bg-blue-700 transition-all">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#fff"/><path d="M7 10.5l2 2 4-4" stroke="#2476FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Submit Response
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



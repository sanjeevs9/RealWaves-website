'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebook from "@/public/socials/fb.png";
import linkedin from "@/public/socials/linkedIn.png";
import instagram from "@/public/socials/insta.png";

const WhatsAppIcon = () => {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 cursor-pointer" onClick={() => {
      window.open("https://wa.me/919009990000", "_blank")
    }}>
      <Image src="/whatsapp.png" alt="WhatsApp Icon" width={32} height={32} />
    </span>
  );
};

export default function ContactUs() {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 2xl:px-40 bg-white">
      <div className="w-full flex flex-col lg:flex-row justify-between lg:items-start gap-8 lg:gap-12">
        {/* Left Side: Contact Info */}
        <div className="flex flex-col gap-6 sm:gap-8 min-h-[400px] sm:min-h-[500px] lg:min-h-[550px] bg-white w-full justify-between">
          <div className="flex flex-col gap-4 sm:gap-6 justify-between p-5 md:p-0">
            <div>
              <p className="text-lg sm:text-xl uppercase tracking-wider mb-2 font-roboto text-[#656565]">Contact Us</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-black font-roboto leading-[124%] tracking-[1px] sm:tracking-[2px]">Reach Out to Us at Any Point</h2>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 mb-2 pt-3 sm:pt-5">
              {/* Email Icon */}
              <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="8" fill="#2476FE" />
                  <path d="M8 12.5L16 18L24 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="8" y="12" width="16" height="8" rx="2" stroke="white" strokeWidth="2" />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-sm sm:text-base text-gray-500">E-mail</p>
                <a href="mailto:info@realwavespacks.com" className="text-blue-600 font-medium text-sm sm:text-base hover:underline break-all">info@realwavepacks.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Phone Icon */}
              <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                <Image src="/phone-icon.png" alt="Phone Icon" width={32} height={32} />
              </span>
              <div className="min-w-0">
                <p className="text-sm sm:text-base text-gray-500">Phone Number</p>
                <a href="tel:+919009990000" className="text-blue-600 font-medium text-sm sm:text-base hover:underline">+ 91 90099 90000</a>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              {/* WhatsApp Icon */}
              <WhatsAppIcon />
              <div className="min-w-0">
                <p className="text-sm sm:text-base text-gray-500">WhatsApp</p>
                <a href="https://wa.me/919009990000" className="text-blue-600 font-medium text-sm sm:text-base hover:underline">Message us on WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-10 w-full 2xl:w-4/6 p-5 md:p-0">
              <div className="text-center">
                <div className="w-full h-[3px] bg-blue-500 rounded-full mb-3 sm:mb-4"></div>
                <div className="flex items-center justify-center gap-1 sm:gap-2 cursor-pointer" onClick={() => {
                  window.open("https://facebook.com", "_blank")
                }}>
                  <Image src={facebook} alt="Facebook" width={40} height={40} className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]" />
                  <Link href="https://facebook.com" className="flex items-center hover:text-blue-400 transition text-sm sm:text-base">
                    Facebook <span className="ml-1">↗</span>
                  </Link>
                </div>
              </div>

              <div className="">
                <div className="w-full h-[3px] bg-blue-500 rounded-full mb-3 sm:mb-4"></div>
                <div className="flex items-center justify-center gap-1 sm:gap-2 cursor-pointer" onClick={() => {
                  window.open("https://instagram.com", "_blank")
                }}>
                  <Image src={instagram} alt="Instagram" width={40} height={40} className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]" />
                  <Link href="https://instagram.com" className="flex items-center hover:text-pink-400 transition text-sm sm:text-base">
                    Instagram <span className="ml-1">↗</span>
                  </Link>
                </div>
              </div>

              <div className="text-left">
                <div className="w-full h-[3px] bg-blue-500 rounded-full mb-3 sm:mb-4"></div>
                <div className="flex items-center justify-center gap-1 sm:gap-2 cursor-pointer" onClick={() => {
                  window.open("https://linkedin.com", "_blank")
                }}>
                  <Image src={linkedin} alt="LinkedIn" width={40} height={40} className="w-[25px] h-[25px] md:w-[50px] md:h-[50px]" />
                  <Link href="https://linkedin.com" className="flex items-center hover:text-blue-600 transition text-sm sm:text-base">
                    LinkedIn <span className="ml-1">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:max-w-lg bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border-t-[0.5px]">
          <form className="flex flex-col gap-3 sm:gap-4">
            <div>
              <label htmlFor="name" className="block font-semibold text-sm sm:text-md mb-1">Name</label>
              <input id="name" name="name" type="text" placeholder="Name" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 placeholder-gray-400 text-sm sm:text-base" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-sm sm:text-md mb-1">Email</label>
              <input id="email" name="email" type="email" placeholder="Email" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 placeholder-gray-400 text-sm sm:text-base" />
            </div>
            <div>
              <label htmlFor="industry" className="block font-semibold text-sm sm:text-md mb-1">Industry</label>
              <input id="industry" name="industry" type="text" placeholder="Industry" className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 placeholder-gray-400 text-sm sm:text-base" />
            </div>
            <div>
              <label htmlFor="description" className="block font-semibold text-sm sm:text-md mb-1">Description</label>
              <textarea id="description" name="description" rows={6} placeholder="Go ahead write it out." className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 placeholder-gray-400 resize-none text-sm sm:text-base" />
            </div>
            <button type="submit" className="mt-2 flex items-center gap-2 justify-center bg-blue-600 text-white font-medium rounded-full px-4 sm:px-6 py-2 shadow hover:bg-blue-700 transition-all text-sm sm:text-base">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#fff" /><path d="M7 10.5l2 2 4-4" stroke="#2476FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Submit Response
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



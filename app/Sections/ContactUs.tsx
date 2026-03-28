'use client';

import Image from "next/image";
import emailjs from "@emailjs/browser";
import React from "react";
import { FadeIn } from '../components/animations';
import facebook from "@/public/socials/fb.png";
import linkedin from "@/public/socials/linkedIn.png";
import instagram from "@/public/socials/insta.png";

export default function ContactUs() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      setIsLoading(true);
      emailjs
        .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, formRef.current, {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Message sent successfully!');
            formRef.current?.reset();
            setIsLoading(false);
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send message. Please try again.');
            setIsLoading(false);
          },
        );
    }
  };

  const socialLinks = [
    { icon: facebook, label: 'Facebook', url: 'https://www.facebook.com/realwavespacksraipur?mibextid=ZbWKwL' },
    { icon: instagram, label: 'Instagram', url: 'https://www.instagram.com/real_wavespacks/#' },
    { icon: linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <FadeIn direction="right">
          <div className="flex flex-col">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h2 className="section-heading">Get in Touch</h2>
                <p className="mt-4 text-sage text-sm sm:text-base max-w-md leading-relaxed">
                  Ready to elevate your packaging? Reach out and let&apos;s discuss how we can serve your business.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B2D72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-sage uppercase tracking-wider">Email</p>
                    <a href="mailto:realwavespacks@gmail.com" className="text-sm font-medium text-charcoal hover:text-[#0992C2] transition-colors">
                      realwavespacks@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest/5 flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B2D72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-sage uppercase tracking-wider">Phone</p>
                    <a href="tel:+919009990000" className="text-sm font-medium text-charcoal hover:text-[#0992C2] transition-colors">
                      +91 90099 90000
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20} />
                  </div>
                  <div>
                    <p className="text-xs text-sage uppercase tracking-wider">WhatsApp</p>
                    <a href="https://wa.me/919009990000" className="text-sm font-medium text-charcoal hover:text-[#0992C2] transition-colors">
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-8 border-t border-linen lg:border-0">
              <div className="flex items-center gap-4 sm:gap-6">
                {socialLinks.map((social) => (
                  <div
                    key={social.label}
                    className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <Image
                      src={social.icon}
                      alt={social.label}
                      width={28}
                      height={28}
                      className="w-5 h-5 sm:w-7 sm:h-7 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="text-xs sm:text-sm text-sage group-hover:text-charcoal transition-colors duration-300">
                      {social.label} <span className="text-[10px] sm:text-xs">↗</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </FadeIn>

          {/* Right - Form */}
          <FadeIn direction="left" delay={0.15}>
          <div className="bg-[#EEF2F9] rounded-2xl p-6 sm:p-8 lg:p-10">
            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-1.5">Name</label>
                <input
                  id="contact-name" name="name" type="text" placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest bg-white placeholder-sage/50 text-sm transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
                <input
                  id="contact-email" name="email" type="email" placeholder="you@company.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest bg-white placeholder-sage/50 text-sm transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-charcoal mb-1.5">Phone / WhatsApp Number <span className="text-red-500">*</span></label>
                <input
                  id="contact-phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest bg-white placeholder-sage/50 text-sm transition-all"
                />
              </div>
              <div>
                <label htmlFor="contact-category" className="block text-sm font-medium text-charcoal mb-1.5">Product Category</label>
                <select
                  id="contact-category" name="category"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest bg-white text-sm transition-all text-charcoal"
                  defaultValue=""
                >
                  <option value="" disabled>Select a category</option>
                  <option value="D-Cut">D-Cut</option>
                  <option value="Loop Handle">Loop Handle</option>
                  <option value="U-Cut">U-Cut</option>
                  <option value="Box Bag">Box Bag</option>
                  <option value="Bopp Box Bag">Bopp Box Bag</option>
                  <option value="Bopp Loop Handle">Bopp Loop Handle</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-desc" className="block text-sm font-medium text-charcoal mb-1.5">Message</label>
                <textarea
                  id="contact-desc" name="description" rows={5} placeholder="Tell us about your requirements..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest bg-white placeholder-sage/50 resize-none text-sm transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="mt-1 bg-forest text-white font-medium rounded-xl px-6 py-3.5 hover:bg-forest-light transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

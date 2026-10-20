'use client';

import React from "react";
import Image from "next/image";
import Toast, { ToastState } from '../components/Toast';
import { BUSINESS, whatsappUrl } from '../site';
import madhuBag from '@/public/bags/boppbox1.webp';
import kajriBag from '@/public/bags/LH6.webp';
import breadBasketBag from '@/public/bags/Box4.webp';

// Three customer bags standing beside the form, like the bag stage in the hero.
// Chosen for contrast on navy and for their full-size cut-outs (sharp on big screens).
const PANEL_BAGS = [
  { src: madhuBag, alt: 'Brown BOPP box bag printed for Madhu Textorium', className: 'h-[80%] z-[1]' },
  { src: kajriBag, alt: 'White and red loop-handle bag printed for Kajri', className: 'h-full z-[2]' },
  { src: breadBasketBag, alt: 'White box bag printed for The Bread Basket', className: 'h-[70%] z-[1]' },
];

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-charcoal placeholder-sage/60 transition-all focus:outline-none focus:ring-2";
const inputOk = "border-[#E5DCC6] focus:border-forest focus:ring-forest/15";
const inputError = "border-danger ring-2 ring-danger/15 focus:border-danger focus:ring-danger/15";
const labelClass = "mb-1.5 block text-sm font-semibold text-charcoal";

export default function ContactUs() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [toast, setToast] = React.useState<ToastState>(null);
  const [contactError, setContactError] = React.useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value.trim();
    const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value.trim();
    const category = (form.elements.namedItem('category') as HTMLSelectElement)?.value.trim();
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement)?.value.trim();
    if (!phone && !email) {
      setContactError(true);
      setToast({ type: 'info', message: 'Please share a phone number or email so we can reach you.' });
      return;
    }
    setContactError(false);

    setIsLoading(true);
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, email, category, description }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Request failed');
        setToast({ type: 'success', message: 'Thanks for reaching out — we’ll get back to you within 24 hours.' });
        formRef.current?.reset();
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setToast({ type: 'error', message: 'We couldn’t send your message. Please try again or WhatsApp us.' });
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-cream px-4 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto flex max-w-6xl flex-wrap overflow-hidden rounded-[28px] bg-white">
        {/* Navy panel: a short line and three of our bags standing on a darker "shelf" */}
        <div className="relative flex min-w-0 flex-1 basis-[420px] flex-col justify-between gap-8 overflow-hidden bg-forest px-7 pt-9 text-ivory sm:px-10 sm:pt-11">
          <div>
            <p className="text-[15px] font-semibold text-bronze">Made for your shop</p>
            <p className="mt-2.5 max-w-[24rem] text-balance font-display text-[1.6rem] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[1.9rem]">
              Your logo, on bags your customers carry home.
            </p>
            <p className="mt-3 max-w-[26rem] text-pretty text-[15px] leading-relaxed text-mist">
              Printed for Madhu Textorium, Kajri, The Bread Basket and 2000+ more shops.
            </p>
          </div>
          <div className="relative -mx-7 px-7 pb-7 sm:-mx-10 sm:px-10 sm:pb-9">
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-14 bg-forest-dark sm:h-16" />
            {/* Phones size the row by the screen width so all three bags fit side by side */}
            <div className="relative mx-auto flex h-[50vw] items-end justify-center sm:h-[270px]">
              {PANEL_BAGS.map((bag) => (
                <div key={bag.alt} className={`relative -mx-[4vw] shrink-0 sm:-mx-4 ${bag.className}`}>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-[8%] -bottom-2 h-4 rounded-[50%] bg-[radial-gradient(closest-side,rgba(0,0,0,0.35),rgba(0,0,0,0))]"
                  />
                  <Image
                    src={bag.src}
                    alt={bag.alt}
                    sizes="(min-width: 1024px) 200px, 34vw"
                    className="relative block h-full w-auto max-w-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The enquiry form */}
        <div className="min-w-0 flex-1 basis-[420px] p-7 sm:p-11">
          <p className="text-[15px] font-semibold text-sage">Get in touch</p>
          <h2 id="contact-title" className="mt-2.5 text-balance font-display text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.02em] text-charcoal sm:text-[2.15rem]">
            Tell us what you need
          </h2>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-sage">
            WhatsApp{' '}
            <a
              href={whatsappUrl("Hi RealWaves, I'd like to know more about your bags.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-charcoal underline-offset-4 hover:underline"
            >
              +91 90099 90000
            </a>
            , email{' '}
            <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-charcoal underline-offset-4 hover:underline">
              {BUSINESS.email}
            </a>{' '}
            or fill in the form. We reply within 24 hours.
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="contact-name" className={labelClass}>Name <span className="text-danger">*</span></label>
              <input
                id="contact-name" name="name" type="text" required placeholder="Your full name"
                className={`${inputBase} ${inputOk}`}
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className={labelClass}>Phone / WhatsApp</label>
              <input
                id="contact-phone" name="phone" type="tel"
                inputMode="numeric" maxLength={10} pattern="[6-9][0-9]{9}"
                title="Enter a 10-digit mobile number (without +91)"
                placeholder="10-digit mobile number"
                onInput={() => contactError && setContactError(false)}
                className={`${inputBase} ${contactError ? inputError : inputOk}`}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className={labelClass}>Email</label>
              <input
                id="contact-email" name="email" type="email" placeholder="you@company.com"
                onInput={() => contactError && setContactError(false)}
                className={`${inputBase} ${contactError ? inputError : inputOk}`}
              />
            </div>
            <p className={`-mt-1 text-sm sm:col-span-2 ${contactError ? 'font-medium text-danger' : 'text-sage'}`}>
              Please provide a phone number or email so we can reach you.
            </p>
            <div className="sm:col-span-2">
              <label htmlFor="contact-category" className={labelClass}>Bag style</label>
              <select
                id="contact-category" name="category"
                className={`${inputBase} ${inputOk}`}
                defaultValue=""
              >
                <option value="" disabled>Select a bag style</option>
                <option value="D-Cut">D-Cut</option>
                <option value="Loop Handle">Loop Handle</option>
                <option value="U-Cut">U-Cut</option>
                <option value="Box Bag">Box Bag</option>
                <option value="Bopp Box Bag">BOPP Box Bag</option>
                <option value="Bopp Loop Handle">BOPP Loop Handle</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-desc" className={labelClass}>Message</label>
              <textarea
                id="contact-desc" name="description" rows={3} placeholder="Quantity, colours, delivery city…"
                className={`${inputBase} ${inputOk} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-forest px-6 text-[15px] font-semibold text-ivory transition-colors hover:bg-forest-light disabled:cursor-not-allowed disabled:opacity-50 sm:col-span-2"
            >
              {isLoading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending…
                </>
              ) : 'Send enquiry'}
            </button>
          </form>
        </div>
      </div>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </section>
  );
}

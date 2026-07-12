'use client'
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import Toast, { ToastState } from './Toast';

export default function ContactModal({
    isOpen,
    onClose,
    defaultMessage,
}: {
    isOpen: boolean;
    onClose: () => void;
    defaultMessage?: string;
}) {
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState<ToastState>(null);
    const [contactError, setContactError] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;

        const name = (form.elements.namedItem('name') as HTMLInputElement)?.value.trim();
        const phone = (form.elements.namedItem('phone') as HTMLInputElement)?.value.trim();
        const email = (form.elements.namedItem('email') as HTMLInputElement)?.value.trim();
        const description = (form.elements.namedItem('description') as HTMLTextAreaElement)?.value.trim();
        if (!phone && !email) {
            setContactError(true);
            setToast({ type: 'info', message: 'Please share a phone number or email so we can reach you.' });
            return;
        }
        setContactError(false);

        // Same garbage string pasted into every field is the pattern behind the
        // EmailJS-key-scraping spam these forms have been getting — pretend
        // success and skip the actual send rather than tipping the bot off.
        const filled = [name, email, phone, description].filter(Boolean);
        if (filled.length >= 2 && new Set(filled).size === 1) {
            setToast({ type: 'success', message: 'Thanks for reaching out — we’ll get back to you within 24 hours.' });
            formRef.current?.reset();
            onClose();
            return;
        }

        {
            setIsLoading(true);
            emailjs
                .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, form, {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
                    blockHeadless: true,
                    limitRate: { throttle: 20000 },
                })
                .then(
                    () => {
                        setToast({ type: 'success', message: 'Thanks for reaching out — we’ll get back to you within 24 hours.' });
                        formRef.current?.reset();
                        onClose();
                        setIsLoading(false);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setToast({ type: 'error', message: 'We couldn’t send your message. Please try again or WhatsApp us.' });
                        setIsLoading(false);
                    },
                );
        }
    };

    return (
      <>
        {isOpen && (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-xl font-display font-bold text-charcoal">Get in Touch</h3>
                        <p className="text-sm text-sage mt-1">We&apos;ll get back to you within 24 hours</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-sage hover:text-charcoal transition-colors p-2 -m-1 min-w-[40px] min-h-[40px] flex items-center justify-center"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="modal-name" className="block text-sm font-medium text-charcoal mb-1.5">Name</label>
                        <input
                            id="modal-name" name="name" type="text" required placeholder="Your name"
                            className="w-full border border-linen rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest bg-cream/50 placeholder-sage text-sm transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="modal-email" className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
                        <input
                            id="modal-email" name="email" type="email" placeholder="you@company.com"
                            onInput={() => contactError && setContactError(false)}
                            className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 bg-cream/50 placeholder-sage text-sm transition-all ${
                                contactError
                                    ? 'border-[#0992C2] ring-2 ring-[#0992C2]/15 focus:border-[#0992C2] focus:ring-[#0992C2]/15'
                                    : 'border-linen focus:ring-forest/20 focus:border-forest'
                            }`}
                        />
                    </div>
                    <div>
                        <label htmlFor="modal-phone" className="block text-sm font-medium text-charcoal mb-1.5">Phone / WhatsApp Number</label>
                        <input
                            id="modal-phone" name="phone" type="tel"
                            inputMode="numeric" maxLength={10} pattern="[6-9][0-9]{9}"
                            title="Enter a 10-digit mobile number (without +91)"
                            placeholder="10-digit mobile number"
                            onInput={() => contactError && setContactError(false)}
                            className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 bg-cream/50 placeholder-sage text-sm transition-all ${
                                contactError
                                    ? 'border-[#0992C2] ring-2 ring-[#0992C2]/15 focus:border-[#0992C2] focus:ring-[#0992C2]/15'
                                    : 'border-linen focus:ring-forest/20 focus:border-forest'
                            }`}
                        />
                        <p className={`mt-1.5 text-xs ${contactError ? 'text-[#0992C2] font-medium' : 'text-sage'}`}>Please provide a phone number or email so we can reach you.</p>
                    </div>
                    <div>
                        <label htmlFor="modal-category" className="block text-sm font-medium text-charcoal mb-1.5">Product Category</label>
                        <select
                            id="modal-category" name="category"
                            className="w-full border border-linen rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest bg-cream/50 text-sm transition-all text-charcoal"
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
                        <label htmlFor="modal-desc" className="block text-sm font-medium text-charcoal mb-1.5">Message</label>
                        <textarea
                            id="modal-desc" name="description" rows={4} required placeholder="Tell us about your requirements..."
                            defaultValue={defaultMessage}
                            className="w-full border border-linen rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest bg-cream/50 placeholder-sage resize-none text-sm transition-all"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="mt-1 bg-forest text-white font-medium rounded-xl px-6 py-3 hover:bg-forest-light transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
        </div>
        )}

        <Toast toast={toast} onClose={() => setToast(null)} />
      </>
    );
}

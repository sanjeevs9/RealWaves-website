'use client';

import { useCallback, useEffect, useState } from 'react';

export type ToastState = { type: 'success' | 'error' | 'info'; message: string } | null;

const VARIANTS = {
  success: { accent: '#25D366', title: 'Message sent' },
  error: { accent: '#EF4444', title: 'Something went wrong' },
  info: { accent: '#0992C2', title: 'Almost there' },
} as const;

export default function Toast({
  toast,
  onClose,
  duration = 4000,
}: {
  toast: ToastState;
  onClose: () => void;
  duration?: number;
}) {
  const [visible, setVisible] = useState(false);

  const handleClose = useCallback(() => {
    setVisible(false);
    // wait for the exit transition before unmounting
    setTimeout(onClose, 300);
  }, [onClose]);

  useEffect(() => {
    if (!toast) return;
    // trigger enter transition on the next frame
    const enter = requestAnimationFrame(() => setVisible(true));
    const timer = setTimeout(handleClose, duration);
    return () => {
      cancelAnimationFrame(enter);
      clearTimeout(timer);
    };
  }, [toast, duration, handleClose]);

  if (!toast) return null;

  const { accent, title } = VARIANTS[toast.type];

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-[100] transition-all duration-300 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="relative flex items-start gap-3 w-full sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-linen pl-4 pr-9 py-4 overflow-hidden">
        {/* icon */}
        <div
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ backgroundColor: `${accent}1A` }}
        >
          {toast.type === 'success' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : toast.type === 'info' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 16v-5M12 8h.01" />
              <circle cx="12" cy="12" r="9" strokeWidth="2" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          )}
        </div>

        {/* text */}
        <div className="min-w-0 pt-0.5">
          <p className="text-sm font-semibold text-charcoal font-body leading-tight">
            {title}
          </p>
          <p className="text-[13px] text-sage font-body mt-0.5 leading-snug">
            {toast.message}
          </p>
        </div>

        {/* close */}
        <button
          onClick={handleClose}
          aria-label="Dismiss notification"
          className="absolute top-3 right-3 text-sage/60 hover:text-charcoal transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

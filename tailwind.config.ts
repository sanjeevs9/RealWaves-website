import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0B2D72',
          light: '#163d82',
          dark: '#071d4a',
          50: '#EFF3FB',
        },
        bronze: {
          DEFAULT: '#F6E7BC',
          light: '#FBF3DE',
          dark: '#E4D29A',
        },
        cream: '#FAFCFF',
        linen: '#F1F5F9',
        charcoal: '#0B2D72',
        sage: '#64748B',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'display': ['var(--font-playfair)', 'Georgia', 'serif'],
        'body': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        'roboto': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        'poppins': ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

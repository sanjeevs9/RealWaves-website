import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Endless ticker: the track holds the list twice, so sliding by half loops seamlessly
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        "marquee-reverse": "marquee 50s linear infinite reverse",
      },
      screens: {
        // Landscape screens at least tablet-wide and tall enough for a full-screen hero
        // (laptops, desktops, landscape tablets). Phones and portrait tablets skip it.
        wide: { raw: "(min-width: 768px) and (min-aspect-ratio: 1/1) and (min-height: 540px)" },
      },
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
          // accent text and dots on light backgrounds (4.7:1 on ivory)
          ink: '#8C6A2B',
        },
        // form errors
        danger: '#B42318',
        // page background: the same warm off-white as the homepage
        cream: '#FCF8EF',
        // warm off-white for the homepage hero floor and banners
        ivory: '#FCF8EF',
        // muted text on navy (8.5:1 on forest)
        mist: '#C9D3E6',
        linen: '#F1F5F9',
        charcoal: '#0B2D72',
        // muted body text; #64748B failed contrast (4.3:1) on the warm background
        sage: '#475569',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'display': ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        'roboto': ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        'poppins': ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

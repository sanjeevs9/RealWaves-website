/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve images as-is. Vercel's image optimisation returns 402 (Payment Required)
    // for any new image once the Hobby plan's monthly quota runs out, which left
    // pictures broken on deployments. Photos are pre-sized to WebP instead:
    // see scripts/optimize-images.mjs.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        // The production *.vercel.app alias serves a duplicate copy of the site;
        // send it (and its link equity) to the real domain with a 308.
        // Per-deployment preview URLs are left alone.
        source: "/:path*",
        has: [{ type: "host", value: "real-waves-website.vercel.app" }],
        destination: "https://www.realwavespacks.com/:path*",
        permanent: true,
      },
      // Blog posts moved from numeric ids to readable slugs (see blogData in constants.ts)
      { source: "/blogs/1", destination: "/blogs/custom-carry-bags-promote-your-business", permanent: true },
      { source: "/blogs/2", destination: "/blogs/sustainable-eco-friendly-packaging-for-business", permanent: true },
      { source: "/blogs/3", destination: "/blogs/custom-branded-bags-make-your-business-stand-out", permanent: true },
      // The bag-type pages live under /non-woven-bags/<type>; the folder itself is the catalogue
      { source: "/non-woven-bags", destination: "/products", permanent: true },
    ];
  },
};

module.exports = nextConfig;

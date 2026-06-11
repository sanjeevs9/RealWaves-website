import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/do", "/api/"],
    },
    sitemap: "https://real-waves-website.vercel.app/sitemap.xml",
  };
}

import { MetadataRoute } from "next";
import { blogData } from "@/constants";
import { Products } from "./products";
import { SITE_URL as BASE_URL } from "./site";
import { BagTypes } from "./bagTypes";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls = blogData.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productUrls = Products.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: [`${BASE_URL}${product.image.src}`],
  }));

  // Bag-type landing pages are the main targets for "<type> bags Raipur" searches
  const bagTypeUrls = BagTypes.map((type) => ({
    url: `${BASE_URL}/non-woven-bags/${type.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
    images: [`${BASE_URL}${type.image.src}`],
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...bagTypeUrls,
    ...productUrls,
    ...blogUrls,
  ];
}

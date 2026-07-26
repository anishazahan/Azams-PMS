import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";
import { SERVICES } from "@/data/services";
import { BLOG_POSTS } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE.url}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE.url}/clients`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/testimonials`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}

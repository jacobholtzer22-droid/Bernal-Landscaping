import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/reviews`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/gallery`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/service-areas`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

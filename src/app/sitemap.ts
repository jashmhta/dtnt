import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { DESTINATIONS } from "@/lib/destinations";

const ROUTES = ["/", "/about", "/private-service", "/corporate-service", "/careers", "/contact", "/destinations"];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];
  return [
    ...ROUTES,
    ...DESTINATIONS.map((d) => `/destinations/${d.slug}`),
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}

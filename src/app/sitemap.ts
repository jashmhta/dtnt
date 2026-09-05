import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES = ["/", "/about", "/private-service", "/corporate-service", "/careers", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}

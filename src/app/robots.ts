import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const AI_BOTS = ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "anthropic-ai", "Google-Extended"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_BOTS.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    ...(SITE_URL ? { sitemap: `${SITE_URL}/sitemap.xml` } : {}),
  };
}

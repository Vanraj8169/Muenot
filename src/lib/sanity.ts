import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Sanity Client Configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to false for instant updates (no caching delay)
});

// Image URL Builder
const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Types
export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: SanityBlock[];
  coverImage: SanityImageSource;
  tags: string[];
  author: {
    name: string;
    role: string;
    image?: SanityImageSource;
  };
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export interface SanityBlock {
  _type: string;
  _key: string;
  style?: string;
  children?: {
    _type: string;
    text: string;
    marks?: string[];
  }[];
  markDefs?: {
    _type: string;
    _key: string;
    href?: string;
  }[];
  listItem?: string;
  level?: number;
}

// Check if Sanity is configured
export function isSanityConfigured(): boolean {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const isConfigured = !!(projectId && projectId !== "");
  
  // Debug log (remove in production)
  if (typeof window !== "undefined") {
    console.log("Sanity Config Check:", { projectId, isConfigured });
  }
  
  return isConfigured;
}

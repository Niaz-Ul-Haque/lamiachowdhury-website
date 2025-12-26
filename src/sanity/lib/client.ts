import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

/**
 * Sanity Client Configuration
 *
 * SETUP:
 * 1. Create a Sanity project at https://www.sanity.io/
 * 2. Add your project ID and dataset to environment variables:
 *    - NEXT_PUBLIC_SANITY_PROJECT_ID
 *    - NEXT_PUBLIC_SANITY_DATASET
 *
 * Environment variables should be set in .env.local:
 * NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
 * NEXT_PUBLIC_SANITY_DATASET=production
 */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ycpgp2zg";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Helper type for Sanity documents
export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

// Property type
export interface Property extends SanityDocument {
  title: string;
  slug: { current: string };
  address: string;
  price: string;
  status: "for-sale" | "sold" | "pending" | "coming-soon";
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: string;
  neighborhood: string;
  mainImage: SanityImageSource;
  gallery: SanityImageSource[];
  description: string;
  features: string[];
  featured: boolean;
  order: number;
}

// Testimonial type
export interface Testimonial extends SanityDocument {
  quote: string;
  author: string;
  location: string;
  photo: SanityImageSource;
  transactionType: "buyer" | "seller" | "investor" | "dubai";
  featured: boolean;
  isSample: boolean;
  order: number;
}

// Neighborhood type
export interface Neighborhood extends SanityDocument {
  name: string;
  slug: { current: string };
  shortDescription: string;
  fullDescription: string;
  image: SanityImageSource;
  averagePrice: string;
  features: string[];
  highlights: string[];
  propertyTypes: string[];
  idealFor: string[];
  region: "toronto" | "gta";
  featured: boolean;
  order: number;
}

// Market Update type
export interface MarketUpdate extends SanityDocument {
  title: string;
  slug: { current: string };
  month: string;
  publishedAt: string;
  summary: string;
  highlights: Array<{
    title: string;
    description: string;
    trend: "up" | "down" | "stable";
  }>;
  buyerInsight: string;
  sellerInsight: string;
  image: SanityImageSource;
  featured: boolean;
}

// Site Settings type
export interface SiteSettings extends SanityDocument {
  siteName: string;
  tagline: string;
  agentName: string;
  agentTitle: string;
  credentials: string;
  phone: string;
  email: string;
  brokerage: string;
  dubaiAffiliation: string;
  instagramUrl: string;
  calendlyUrl: string;
  headshot: SanityImageSource;
  heroBackground: SanityImageSource;
  shortBio: string;
  fullBio: string;
  achievements: string[];
}

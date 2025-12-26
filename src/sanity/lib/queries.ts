import { groq } from "next-sanity";

/**
 * GROQ Queries for Sanity CMS
 *
 * These queries fetch data from Sanity. Use them with the Sanity client:
 *
 * import { client } from "@/sanity/lib/client";
 * import { featuredPropertiesQuery } from "@/sanity/lib/queries";
 *
 * const properties = await client.fetch(featuredPropertiesQuery);
 */

// Featured Properties Query
export const featuredPropertiesQuery = groq`
  *[_type == "property" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    address,
    price,
    status,
    propertyType,
    bedrooms,
    bathrooms,
    squareFeet,
    neighborhood,
    mainImage,
    description,
    features
  }
`;

// All Properties Query
export const allPropertiesQuery = groq`
  *[_type == "property"] | order(order asc) {
    _id,
    title,
    slug,
    address,
    price,
    status,
    propertyType,
    bedrooms,
    bathrooms,
    squareFeet,
    neighborhood,
    mainImage,
    description,
    features,
    featured
  }
`;

// Single Property Query
export const propertyBySlugQuery = groq`
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    address,
    price,
    status,
    propertyType,
    bedrooms,
    bathrooms,
    squareFeet,
    neighborhood,
    mainImage,
    gallery,
    description,
    features
  }
`;

// Featured Testimonials Query
export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    quote,
    author,
    location,
    photo,
    transactionType,
    isSample
  }
`;

// All Testimonials Query
export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    author,
    location,
    photo,
    transactionType,
    isSample,
    featured
  }
`;

// Featured Neighborhoods Query
export const featuredNeighborhoodsQuery = groq`
  *[_type == "neighborhood" && featured == true] | order(order asc) {
    _id,
    name,
    slug,
    shortDescription,
    image,
    averagePrice,
    features,
    propertyTypes,
    idealFor,
    region
  }
`;

// All Neighborhoods Query
export const allNeighborhoodsQuery = groq`
  *[_type == "neighborhood"] | order(order asc) {
    _id,
    name,
    slug,
    shortDescription,
    fullDescription,
    image,
    averagePrice,
    features,
    highlights,
    propertyTypes,
    idealFor,
    region,
    featured
  }
`;

// Single Neighborhood Query
export const neighborhoodBySlugQuery = groq`
  *[_type == "neighborhood" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    shortDescription,
    fullDescription,
    image,
    averagePrice,
    features,
    highlights,
    propertyTypes,
    idealFor,
    region
  }
`;

// Latest Market Update Query
export const latestMarketUpdateQuery = groq`
  *[_type == "marketUpdate" && featured == true] | order(publishedAt desc)[0] {
    _id,
    title,
    slug,
    month,
    publishedAt,
    summary,
    highlights,
    buyerInsight,
    sellerInsight,
    image
  }
`;

// All Market Updates Query
export const allMarketUpdatesQuery = groq`
  *[_type == "marketUpdate"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    month,
    publishedAt,
    summary,
    image,
    featured
  }
`;

// Site Settings Query
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    agentName,
    agentTitle,
    credentials,
    phone,
    email,
    brokerage,
    dubaiAffiliation,
    instagramUrl,
    calendlyUrl,
    headshot,
    heroBackground,
    shortBio,
    fullBio,
    achievements
  }
`;

import { defineField, defineType } from "sanity";

export const neighborhood = defineType({
  name: "neighborhood",
  title: "Neighborhoods",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Neighborhood Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
      description: "Brief description for cards (1-2 sentences)",
    }),
    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "text",
      rows: 6,
      description: "Detailed description for the neighborhood page",
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "averagePrice",
      title: "Average Price Range",
      type: "string",
      description: "e.g., $750,000+",
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g., Walkable, Good Schools, Transit Hub",
    }),
    defineField({
      name: "highlights",
      title: "Neighborhood Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "Detailed bullet points about the neighborhood",
    }),
    defineField({
      name: "propertyTypes",
      title: "Property Types Available",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Condos", value: "Condos" },
          { title: "Lofts", value: "Lofts" },
          { title: "Townhouses", value: "Townhouses" },
          { title: "Semi-Detached", value: "Semi-Detached" },
          { title: "Detached", value: "Detached" },
        ],
      },
    }),
    defineField({
      name: "idealFor",
      title: "Ideal For",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g., Young professionals, Families, First-time buyers",
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      options: {
        list: [
          { title: "Toronto", value: "toronto" },
          { title: "GTA", value: "gta" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "averagePrice",
      media: "image",
    },
  },
});

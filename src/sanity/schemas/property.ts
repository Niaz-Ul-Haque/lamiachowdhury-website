import { defineField, defineType } from "sanity";

export const property = defineType({
  name: "property",
  title: "Featured Properties",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Property Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: "e.g., $699,000 or $1,299,000",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "For Sale", value: "for-sale" },
          { title: "Sold", value: "sold" },
          { title: "Pending", value: "pending" },
          { title: "Coming Soon", value: "coming-soon" },
        ],
      },
      initialValue: "for-sale",
    }),
    defineField({
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Condo", value: "condo" },
          { title: "Townhouse", value: "townhouse" },
          { title: "Semi-Detached", value: "semi-detached" },
          { title: "Detached", value: "detached" },
          { title: "Loft", value: "loft" },
        ],
      },
    }),
    defineField({
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
    }),
    defineField({
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
    }),
    defineField({
      name: "squareFeet",
      title: "Square Feet",
      type: "string",
    }),
    defineField({
      name: "neighborhood",
      title: "Neighborhood",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
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
      title: "title",
      subtitle: "address",
      media: "mainImage",
    },
  },
});

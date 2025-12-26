import { defineField, defineType } from "sanity";

export const marketUpdate = defineType({
  name: "marketUpdate",
  title: "Market Updates",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
    }),
    defineField({
      name: "month",
      title: "Month/Period",
      type: "string",
      description: "e.g., July 2025",
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "highlights",
      title: "Market Highlights",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
            {
              name: "trend",
              type: "string",
              title: "Trend",
              options: {
                list: [
                  { title: "Up", value: "up" },
                  { title: "Down", value: "down" },
                  { title: "Stable", value: "stable" },
                ],
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "buyerInsight",
      title: "Insight for Buyers",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "sellerInsight",
      title: "Insight for Sellers",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "featured",
      title: "Featured (Show on Homepage)",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "month",
      media: "image",
    },
  },
  orderings: [
    {
      title: "Published Date, Newest",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});

import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location / Context",
      type: "string",
      description: "e.g., First-time buyers, Scarborough",
    }),
    defineField({
      name: "photo",
      title: "Author Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "transactionType",
      title: "Transaction Type",
      type: "string",
      options: {
        list: [
          { title: "Buyer", value: "buyer" },
          { title: "Seller", value: "seller" },
          { title: "Investor", value: "investor" },
          { title: "Dubai Investment", value: "dubai" },
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
      name: "isSample",
      title: "Is Sample Testimonial",
      type: "boolean",
      description: "Mark as true if this is a placeholder/sample testimonial",
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
      title: "author",
      subtitle: "location",
      media: "photo",
    },
  },
});

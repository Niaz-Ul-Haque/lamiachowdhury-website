import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "agentName",
      title: "Agent Name",
      type: "string",
    }),
    defineField({
      name: "agentTitle",
      title: "Agent Title",
      type: "string",
    }),
    defineField({
      name: "credentials",
      title: "Credentials",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "brokerage",
      title: "Brokerage Name",
      type: "string",
    }),
    defineField({
      name: "dubaiAffiliation",
      title: "Dubai Affiliation",
      type: "string",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "calendlyUrl",
      title: "Calendly URL",
      type: "url",
      description: "Your Calendly booking link",
    }),
    defineField({
      name: "headshot",
      title: "Agent Headshot",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "heroBackground",
      title: "Hero Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "fullBio",
      title: "Full Bio",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
});

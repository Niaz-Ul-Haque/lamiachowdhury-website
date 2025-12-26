/**
 * Sanity CMS Configuration
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a free Sanity account at https://www.sanity.io/
 * 2. Create a new project and get your project ID
 * 3. Replace 'YOUR_PROJECT_ID' below with your actual project ID
 * 4. Run `npx sanity@latest init` in a separate folder to set up Sanity Studio
 *    OR deploy Sanity Studio separately
 *
 * For local development, you can run Sanity Studio alongside your Next.js app.
 */

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas";

// Sanity project configuration
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ycpgp2zg";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "lamia-chowdhury-realty",
  title: "Lamia Chowdhury Real Estate",

  projectId,
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});

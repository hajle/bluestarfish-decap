import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    cover: image().refine((img) => img.width >= 300, {
      message: "Cover image must be at least 300 pixels wide!",
    }),
    description: z
      .string()
      .max(
        160,
        "For best SEO results, please keep the description under 160 characters."
      ),
    draft: z.boolean().default(false),
    category: z.enum(["CSS", "Reference Docs", "Astro", "General"]),
  }),
});

const countryCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    sortOrder: z.number(),
    cover: image().refine((img) => img.width >= 1500, {
      message: "Cover image must be at least 1500 pixels wide!",
    }),
    image: image().refine((img) => img.width >= 500, {
      message: "Cover image must be at least 500 pixels wide!",
    }).optional(),
    description: z
      .string()
      .max(
        160,
        "For best SEO results, please keep the description under 160 characters."
      ),
  }),
});

export const collections = {
  'blog': blogCollection,
  'country': countryCollection
};
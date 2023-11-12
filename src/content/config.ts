import { z, defineCollection } from "astro:content";

const countryCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    seoTitle: z.string(),
    seoDesc: z.string().max(
      160,
      "For best SEO results, please keep the description under 160 characters."
    ),
    sortOrder: z.number(),
    title: z.string(),
    cover: image().refine((img) => img.width >= 1500, {
      message: "Cover image must be at least 1500 pixels wide!",
    }),
    image: image().refine((img) => img.width >= 500, {
      message: "Cover image must be at least 500 pixels wide!",
    }),
    intro: z
      .string(),
  }),
});

export const collections = {
  'country': countryCollection
};
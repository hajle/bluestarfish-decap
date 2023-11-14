import { z, defineCollection } from "astro:content";

const pageCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      seo: z.object({
        seoTitle: z.string(),
        seoDesc: z
          .string()
          .max(
            160,
            "For best SEO results, please keep the description under 160 characters."
          ),
      }),
      hero: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        image: image().refine((img) => img.width >= 1500, {
          message: "Cover image must be at least 1500 pixels wide!",
        }),
      }),
      intro: z.string().optional(),
      countriesWidget: z.boolean().default(false),
      skillsWidget: z.boolean().default(false),
      contactForm: z.boolean().default(false),
      chatWidget: z.boolean().default(false),
    }),
});

const countryCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      seo: z.object({
        seoTitle: z.string(),
        seoDesc: z
          .string()
          .max(
            160,
            "For best SEO results, please keep the description under 160 characters."
          ),
      }),
      sortOrder: z.number(),
      title: z.string(),
      cover: image().refine((img) => img.width >= 1500, {
        message: "Cover image must be at least 1500 pixels wide!",
      }),
      image: image().refine((img) => img.width >= 500, {
        message: "Cover image must be at least 500 pixels wide!",
      }),
      intro: z.string(),
    }),
});

export const collections = {
  pages: pageCollection,
  country: countryCollection,
};

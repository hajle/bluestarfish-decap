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
      tripsWidget: z.boolean().default(false),
      contactButtonWidget: z.boolean().default(false),
      chatWidget: z.boolean().default(false),
      reviewsWidget: z.boolean().default(false),
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

const widgetsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      en: z.array(
        z.object({
          title: z.string(),
          text: z.string(),
          image: image()
            .refine((img) => img.width >= 900, {
              message: "Image must be at least 900 pixels wide!",
            })
            .optional(),
          author: z.string().optional(),
          date: z.date().optional(),
        })
      ),
      pl: z.array(
        z.object({
          title: z.string(),
          text: z.string(),
          image: image()
            .refine((img) => img.width >= 900, {
              message: "Image must be at least 900 pixels wide!",
            })
            .optional(),
          author: z.string().optional(),
          date: z.date().optional(),
        })
      ),
    }),
});

export const collections = {
  pages: pageCollection,
  country: countryCollection,
  widgets: widgetsCollection,
};

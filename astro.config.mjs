import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // redirects: {
  //   "/": "/en",
  // },
  site: "https://bluestarfishtravel.com",
  integrations: [tailwind(), react(), sitemap()],
});

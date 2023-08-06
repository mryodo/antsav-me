import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  output: "server",
  adapter: netlify()
});
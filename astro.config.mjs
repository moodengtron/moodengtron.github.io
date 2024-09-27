// @ts-check
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'http://moodengtron.com',
  integrations: [
    tailwind(),
    react(),
    icon({
      include: {
        tabler: ['brand-x', 'brand-telegram', 'brand-github', 'mail', 'clipboard'],
      },
    }),
    sitemap(),
    (await import('astro-compress')).default(),
  ],
});

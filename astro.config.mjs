// @ts-check
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'http://moodengtron.com',
  integrations: [
    tailwind(),
    react(),
    icon({
      include: {
        tabler: ['*'],
      },
    }),
    (await import('astro-compress')).default(),
  ],
});

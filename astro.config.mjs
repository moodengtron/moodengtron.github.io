// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import icon from 'astro-icon';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    icon({
      include: {
        tabler: ['*'],
      },
    }),
    playformCompress(),
  ],
});

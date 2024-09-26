/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'zoo-pattern': "url('/img/banner.png')",
      },

      fontFamily: {
        sans: [
          'var(--aw-font-sans, ui-sans-serif)',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          'var(--aw-font-serif, ui-serif)',
          ...defaultTheme.fontFamily.serif,
        ],
        heading: [
          'var(--aw-font-heading, ui-sans-serif)',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};

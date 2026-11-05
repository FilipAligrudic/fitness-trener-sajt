// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Kad kupiš domen, upiši ga ovdje (bitno za SEO i sitemap)
  site: 'https://www.example.me',
  vite: {
    plugins: [tailwindcss()],
  },
});

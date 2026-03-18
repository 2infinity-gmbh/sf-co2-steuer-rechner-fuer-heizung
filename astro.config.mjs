import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://co2-steuer-rechner-fuer-heizung.de',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});

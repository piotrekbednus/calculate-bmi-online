import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/site.config';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  integrations: [sitemap()],
});

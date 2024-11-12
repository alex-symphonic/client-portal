import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node'
import clerk from '@clerk/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    clerk(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  adapter: node({ mode: 'standalone' }),
  output: 'server',
});

import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

// Custom domain (elhatoyelgarabato.com) → base is always root.
// No subdirectory prefix needed even on GitHub Actions.

export default defineConfig({
  site: 'https://elhatoyelgarabato.com',
  base: '',
  integrations: [react()],
  output: 'static',
  vite: {
    assetsInclude: ['**/*.JPG'],
  },
})

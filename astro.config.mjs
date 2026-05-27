import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

// GitHub Pages branch: served at marsdix.github.io/El-Hato-y-el-Garabato/
// base must match the repo subdirectory path.

export default defineConfig({
  site: 'https://marsdix.github.io/El-Hato-y-el-Garabato',
  base: '/El-Hato-y-el-Garabato',
  integrations: [react()],
  output: 'static',
  vite: {
    assetsInclude: ['**/*.JPG'],
  },
})

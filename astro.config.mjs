import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

const base = process.env.GITHUB_ACTIONS ? '/El-Hato-y-el-Garabato' : ''

export default defineConfig({
  site: 'https://elhatoyelgarabato.com',
  base,
  integrations: [react()],
  output: 'static',
  vite: {
    assetsInclude: ['**/*.JPG'],
  },
})

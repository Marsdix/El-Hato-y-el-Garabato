#!/usr/bin/env node
/**
 * Build Astro and package the output as a WordPress theme.
 *
 * Usage:
 *   node scripts/build-wp-theme.mjs
 *   WP_THEME_DIR=/path/to/wp-content/themes/mi-tema-astro node scripts/build-wp-theme.mjs
 *
 * Output: wp-theme-dist/mi-tema-astro/  (ready to upload via SFTP)
 */

import { execSync } from 'child_process'
import { cpSync, copyFileSync, existsSync, mkdirSync, rmSync } from 'fs'
import { join } from 'path'

const THEME_NAME = 'mi-tema-astro'
const THEME_DIR  = process.env.WP_THEME_DIR ?? `./wp-theme-dist/${THEME_NAME}`
const DIST       = './dist'
const WP_SRC     = './wp-theme'

// ── 1. Build Astro (base = '' because GITHUB_ACTIONS is not set) ─────────────
console.log('▶ Building Astro…')
execSync('npm run build', {
  stdio: 'inherit',
  env: { ...process.env, GITHUB_ACTIONS: '' },
})

// ── 2. Clean and prepare theme directory ─────────────────────────────────────
if (existsSync(THEME_DIR)) rmSync(THEME_DIR, { recursive: true, force: true })
mkdirSync(THEME_DIR, { recursive: true })
console.log(`▶ Writing theme to: ${THEME_DIR}`)

// ── 3. Copy entire Astro dist/ → theme/dist/  (all pages + all assets) ───────
cpSync(DIST, join(THEME_DIR, 'dist'), { recursive: true, force: true })
console.log('  ✓ dist/ (all pages, images, JS, CSS)')

// ── 4. WordPress theme PHP + CSS files ───────────────────────────────────────
for (const file of ['style.css', 'functions.php', 'front-page.php', 'index.php']) {
  const src = join(WP_SRC, file)
  if (!existsSync(src)) {
    console.warn(`  ⚠ Missing: ${src} — skipping`)
    continue
  }
  copyFileSync(src, join(THEME_DIR, file))
  console.log(`  ✓ ${file}`)
}

console.log(`
✓ Done — ${THEME_DIR}/

Upload via SFTP to: /wp-content/themes/${THEME_NAME}/
Then: WP Admin → Apariencia → Temas → Activar
`)

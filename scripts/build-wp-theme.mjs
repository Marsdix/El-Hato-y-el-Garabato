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
import { cpSync, copyFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const THEME_NAME  = 'mi-tema-astro'
const THEME_DIR   = process.env.WP_THEME_DIR ?? `./wp-theme-dist/${THEME_NAME}`
const DIST        = './dist'
const WP_SRC      = './wp-theme'

// ── 1. Build Astro (base = '' because GITHUB_ACTIONS is not set) ─────────────
console.log('▶ Building Astro…')
execSync('npm run build', {
  stdio: 'inherit',
  env: { ...process.env, GITHUB_ACTIONS: '' },  // ensure base = ''
})

// ── 2. Prepare output directory ───────────────────────────────────────────────
mkdirSync(THEME_DIR, { recursive: true })
console.log(`▶ Writing theme to: ${THEME_DIR}`)

// ── 3. Astro assets (_astro/) ─────────────────────────────────────────────────
cpSync(join(DIST, '_astro'), join(THEME_DIR, '_astro'), { recursive: true, force: true })

// ── 4. Astro HTML — PHP reads this at runtime ─────────────────────────────────
copyFileSync(join(DIST, 'index.html'), join(THEME_DIR, 'index.html'))

// ── 5. Public assets copied by Astro to dist root ────────────────────────────
for (const asset of ['favicon.png', 'og-cover.jpg', 'robots.txt']) {
  const src = join(DIST, asset)
  if (existsSync(src)) {
    copyFileSync(src, join(THEME_DIR, asset))
  }
}

// ── 6. WordPress theme PHP + CSS files ───────────────────────────────────────
for (const file of ['style.css', 'functions.php', 'front-page.php', 'index.php']) {
  const src = join(WP_SRC, file)
  if (!existsSync(src)) {
    console.warn(`  ⚠ Missing: ${src} — skipping`)
    continue
  }
  copyFileSync(src, join(THEME_DIR, file))
}

console.log(`
✓ Done. Theme packaged at: ${THEME_DIR}/

Next steps:
  1. Upload the contents of ${THEME_DIR}/ via SFTP to:
       /wp-content/themes/${THEME_NAME}/
  2. In WordPress Admin → Appearance → Themes → activate "${THEME_NAME}"
  3. Set front page: Settings → Reading → "A static page" → Front page: any page (WP uses front-page.php automatically)
`)

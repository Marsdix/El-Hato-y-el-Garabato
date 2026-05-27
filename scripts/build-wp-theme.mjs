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
import { cpSync, copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'fs'
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

// ── 4. Fix asset paths in JS/CSS bundles ─────────────────────────────────────
// Astro builds with base='' so all asset paths are "/_astro/...".
// In WordPress the theme serves from /wp-content/themes/<name>/dist/,
// so browsers look for /_astro/ at the domain root — 404.
// Fix: replace every "/_astro/" occurrence in JS/CSS bundles at build time.
console.log('▶ Fixing /_astro/ paths in bundles…')
const ASSET_DIR    = join(THEME_DIR, 'dist', '_astro')
const WRONG_PATH   = '/_astro/'
const CORRECT_PATH = `/wp-content/themes/${THEME_NAME}/dist/_astro/`
const bundleFiles  = readdirSync(ASSET_DIR).filter(f => f.endsWith('.js') || f.endsWith('.css'))
let fixedCount = 0
for (const file of bundleFiles) {
  const fp      = join(ASSET_DIR, file)
  const content = readFileSync(fp, 'utf8')
  if (content.includes(WRONG_PATH)) {
    writeFileSync(fp, content.replaceAll(WRONG_PATH, CORRECT_PATH))
    fixedCount++
  }
}
console.log(`  ✓ Fixed ${fixedCount} bundle file(s)`)

// Also fix HTML files (img src, og tags, etc. outside React)
console.log('▶ Fixing /_astro/ paths in HTML files…')
function fixHtmlDir(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fp = join(dir, entry.name)
    if (entry.isDirectory()) { fixHtmlDir(fp); continue }
    if (!entry.name.endsWith('.html')) continue
    const content = readFileSync(fp, 'utf8')
    if (content.includes(WRONG_PATH)) {
      writeFileSync(fp, content.replaceAll(WRONG_PATH, CORRECT_PATH))
    }
  }
}
fixHtmlDir(join(THEME_DIR, 'dist'))
console.log('  ✓ HTML files patched')

// ── 5. WordPress theme PHP + CSS files ───────────────────────────────────────
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

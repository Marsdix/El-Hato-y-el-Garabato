// Astro SSG: all internal links are plain <a href> — no React Router Link.
// This helper prefixes paths with BASE_URL so GitHub Pages subdirectory works.

// Normalize BASE_URL to always have a trailing slash
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/')

export const siteUrl = (path) => {
  // External URLs pass through unchanged
  if (path && (path.startsWith('http') || path.startsWith('//'))) return path
  // '' or '/' → home
  if (!path || path === '/') return BASE
  return `${BASE}${path.replace(/^\//, '')}`
}

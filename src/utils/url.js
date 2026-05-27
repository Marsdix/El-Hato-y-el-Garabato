// Astro SSG: all internal links are plain <a href> — no React Router Link.
// This helper prefixes paths with BASE_URL so GitHub Pages subdirectory works.
export const siteUrl = (path) => {
  if (!path || path.startsWith('http') || path.startsWith('//')) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

// ─── GROQ QUERIES ─────────────────────────────────────────────────────
// Cada query devuelve datos con la misma forma que los archivos en /data,
// de modo que los componentes no necesitan cambios.

// Vinos — misma forma que VINOS en src/data/vinos.js
// Nota: en los datos estáticos, imagen viene de IMAGES.tienda.vinos.xxx (ruta local).
// Desde Sanity vendrá como URL CDN de Sanity. Ambas funcionan en <img src>.
export const QUERY_VINOS = `*[_type == "vino"] | order(order asc) {
  "id": slug.current,
  tag,
  nombre,
  varietal,
  precio,
  href,
  "imagen": imagen.asset->url + "?auto=format",
  featured,
  descripcion,
  cata,
  analitica
}`

// Blog posts — misma forma que BLOG_POSTS en src/data/blog.js
export const QUERY_BLOG = `*[_type == "blogPost"] | order(date desc) {
  "id": slug.current,
  title,
  cat,
  date,
  readTime,
  excerpt,
  "imagen": imagen.asset->url + "?auto=format",
  href,
  tags,
  content
}`

// Visitas — devuelve { intro, experiencias }
// Coincide con { VISITA_INTRO, EXPERIENCIAS } de src/data/visitas.js
export const QUERY_VISITAS = `{
  "intro": *[_type == "visitaIntro"] | order(_createdAt asc) { es, en },
  "experiencias": *[_type == "experiencia"] | order(order asc) {
    "id": id.current,
    num,
    titulo,
    descripcion,
    detalles,
    precio,
    href
  }
}`

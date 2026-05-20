import { useState } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../ui/ScrollReveal'
import { useLanguage } from '../../hooks/useLanguage'

// Devuelve el texto en el idioma pedido, cayendo al español si falta traducción
const pick = (obj, lang) => (lang === 'en' ? (obj?.en ?? obj?.es) : obj?.es) ?? ''

// Convierte cualquier URL de YouTube a URL de embed
function youtubeEmbed(url) {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/)
  return m ? `https://www.youtube.com/embed/${m[1]}` : url
}

// ── Renderiza cada bloque de contenido ────────────────────────────
function Block({ block, language }) {
  switch (block.type) {
    case 'intro':
      return <p className="blog-post-intro">{pick(block, language)}</p>

    case 'p':
      return <p className="blog-post-p">{pick(block, language)}</p>

    case 'h2':
      return <h2 className="blog-post-h2">{pick(block, language)}</h2>

    case 'image':
      return (
        <figure className="blog-post-figure">
          <img src={block.src} alt={block.caption ? pick(block.caption, language) : ''} />
          {block.caption && <figcaption>{pick(block.caption, language)}</figcaption>}
        </figure>
      )

    case 'video':
      return (
        <figure className="blog-post-figure">
          <div className="blog-post-video">
            <iframe
              src={youtubeEmbed(block.src)}
              title={block.caption ? pick(block.caption, language) : 'Vídeo'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {block.caption && <figcaption>{pick(block.caption, language)}</figcaption>}
        </figure>
      )

    case 'list':
      return (
        <ul className="blog-post-list">
          {block.items.map((item, i) => (
            <li key={i}>{pick(item, language)}</li>
          ))}
        </ul>
      )

    default:
      return null
  }
}

// ── Sección de comentarios ────────────────────────────────────────
function CommentsSection({ post, t }) {
  const [form, setForm]     = useState({ nombre: '', comentario: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    const id = import.meta.env.VITE_FORMSPREE_ID
    if (!id) { setStatus('success'); return }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${id}`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({ ...form, post: post.titleKey }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="blog-comments-section">
      <h2 className="blog-comments-title">{t('blog.comments.title')}</h2>
      <p className="blog-comments-desc">{t('blog.comments.desc')}</p>

      {status === 'success' ? (
        <div className="blog-comments-success">{t('blog.comments.success')}</div>
      ) : (
        <form className="blog-comments-form" onSubmit={handleSubmit}>
          <div className="blog-comments-field">
            <label htmlFor="comment-nombre">{t('blog.comments.nombre')}</label>
            <input
              id="comment-nombre"
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder={t('blog.comments.nombre')}
              required
              disabled={status === 'sending'}
            />
          </div>
          <div className="blog-comments-field">
            <label htmlFor="comment-texto">{t('blog.comments.texto')}</label>
            <textarea
              id="comment-texto"
              name="comentario"
              rows={5}
              value={form.comentario}
              onChange={handleChange}
              placeholder={t('blog.comments.texto')}
              required
              disabled={status === 'sending'}
            />
          </div>
          {status === 'error' && (
            <p className="blog-comments-error">{t('blog.comments.error')}</p>
          )}
          <button
            type="submit"
            className="btn-primary"
            disabled={status === 'sending'}
          >
            {t('blog.comments.submit')}
          </button>
        </form>
      )}
    </section>
  )
}

// ── Sección de fuente original ────────────────────────────────────
function SourceSection({ href, t }) {
  if (!href) return null
  return (
    <section className="blog-source-section">
      <h2 className="blog-source-title">{t('blog.source.title')}</h2>
      <p className="blog-source-desc">{t('blog.source.desc')}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="blog-source-link"
      >
        <span>{t('blog.source.link')}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
    </section>
  )
}

// ── Formato de fecha ──────────────────────────────────────────────
function formatDate(dateStr, language) {
  return new Date(dateStr).toLocaleDateString(
    language === 'es' ? 'es-ES' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }
  )
}

// ── Componente principal ──────────────────────────────────────────
export default function BlogPostSection({ post }) {
  const { t, language } = useLanguage()

  return (
    <article className="blog-post-section">
      <div className="blog-post-inner">

        {/* ── Cabecera ──────────────────────────────────────────── */}
        <ScrollReveal amount={0.2} className="blog-post-header">
          <Link to="/blog" className="blog-post-back">{t('blog.back')}</Link>
          <div className="blog-post-meta">
            <span className="blog-card-tag">{t(post.cat)}</span>
            {post.readTime && (
              <span className="blog-post-readtime">
                {language === 'en' ? post.readTime.en : post.readTime.es}
              </span>
            )}
            <time dateTime={post.date}>{formatDate(post.date, language)}</time>
          </div>
          <h1 className="blog-post-title">{t(post.title)}</h1>
          {post.tags && (
            <div className="blog-post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="blog-post-tag">{tag}</span>
              ))}
            </div>
          )}
        </ScrollReveal>

        {/* ── Cuerpo ────────────────────────────────────────────── */}
        <div className="blog-post-body">
          {post.content.map((block, i) => (
            <ScrollReveal key={i} amount={0.15} delay={0.05}>
              <Block block={block} language={language} />
            </ScrollReveal>
          ))}
        </div>

        {/* ── Artículo original ─────────────────────────────────── */}
        <ScrollReveal amount={0.2}>
          <SourceSection href={post.href} t={t} />
        </ScrollReveal>

        {/* ── Comentarios ───────────────────────────────────────── */}
        <ScrollReveal amount={0.15}>
          <CommentsSection post={post} t={t} />
        </ScrollReveal>

        {/* ── Volver ────────────────────────────────────────────── */}
        <div className="blog-post-footer">
          <Link to="/blog" className="blog-post-back">{t('blog.back')}</Link>
        </div>
      </div>
    </article>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ArrowRight from '../ui/ArrowRight'
import { siteUrl } from '../../utils/url'
import ScrollReveal from '../ui/ScrollReveal'
import AnimatedDivider from '../ui/AnimatedDivider'
import GoldLine from '../ui/GoldLine'
import { BLOG_POSTS } from '../../data/blog'
import { useLanguage } from '../../hooks/useLanguage'
import { useSanityFetch } from '../../hooks/useSanityFetch'
import { QUERY_BLOG } from '../../lib/queries'

const CATS = [
  'blog.cat.prensa',
  'blog.cat.enoturismo',
  'blog.cat.vinos',
  'blog.cat.bodega',
  'blog.cat.info',
]

function formatDate(dateStr, language) {
  return new Date(dateStr).toLocaleDateString(
    language === 'es' ? 'es-ES' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }
  )
}

export default function BlogSection() {
  const { t, language } = useLanguage()
  const { data: posts } = useSanityFetch(QUERY_BLOG, BLOG_POSTS)
  const [activeCats, setActiveCats] = useState(new Set())

  const toggle = (cat) => {
    setActiveCats(prev => {
      const next = new Set(prev)
      if (next.has(cat)) next.delete(cat)
      else next.add(cat)
      return next
    })
  }

  const clear = () => setActiveCats(new Set())

  const visiblePosts = activeCats.size === 0
    ? posts
    : posts.filter(p => activeCats.has(p.cat))

  return (
    <section className="blog-section" id="blog-articulos">
      <ScrollReveal className="blog-header">
        <AnimatedDivider />
        <p className="section-label">{t('blog.label')}</p>
        <h2>{t('blog.title')} <em>{t('blog.title.em')}</em></h2>
        <GoldLine />
      </ScrollReveal>

      <ScrollReveal className="blog-filter-wrap">
        <div className="blog-chips">
          <button
            className={`blog-chip${activeCats.size === 0 ? ' active' : ''}`}
            onClick={clear}
          >
            {t('blog.todos')}
          </button>
          {CATS.filter(cat => posts.some(p => p.cat === cat)).map(cat => (
            <button
              key={cat}
              className={`blog-chip${activeCats.has(cat) ? ' active' : ''}`}
              onClick={() => toggle(cat)}
            >
              {t(cat)}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {visiblePosts.length} {visiblePosts.length === 1 ? 'artículo' : 'artículos'}
      </p>

      <div className="blog-grid">
        <AnimatePresence mode="popLayout">
          {visiblePosts.map(post => {
            const isInternal = Boolean(post.content)
            return (
              <motion.article
                key={post.id}
                className="blog-card"
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
                exit={{ opacity: 0, scale: 0.88, transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } }}
              >
                {post.imagen && (
                  <a
                    href={isInternal ? siteUrl(`blog/${post.id}`) : post.href}
                    className="blog-card-img-wrap"
                    {...(!isInternal && { target: '_blank', rel: 'noopener noreferrer' })}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <img src={post.imagen} alt="" loading="lazy" />
                  </a>
                )}
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-tag">{t(post.cat)}</span>
                    <time className="blog-card-date" dateTime={post.date}>
                      {formatDate(post.date, language)}
                    </time>
                  </div>
                  <h3 className="blog-card-title">
                    {isInternal
                      ? <a href={siteUrl(`blog/${post.id}`)}>{t(post.title)}</a>
                      : <a href={post.href} target="_blank" rel="noopener noreferrer">{t(post.title)}</a>
                    }
                  </h3>
                  <p className="blog-card-excerpt">{t(post.excerpt)}</p>
                  {isInternal
                    ? <a href={siteUrl(`blog/${post.id}`)} className="btn-ghost blog-card-link">{t('blog.leer')} <ArrowRight size={14} /></a>
                    : <a href={post.href} className="btn-ghost blog-card-link" target="_blank" rel="noopener noreferrer">{t('blog.leer')} <ArrowRight size={14} /></a>
                  }
                </div>
              </motion.article>
            )
          })}
        </AnimatePresence>
      </div>

      {visiblePosts.length === 0 && (
        <p className="blog-empty">{t('blog.empty')}</p>
      )}
    </section>
  )
}

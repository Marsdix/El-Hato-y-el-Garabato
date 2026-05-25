import { useState } from 'react'
import ArrowRight from '../ui/ArrowRight'
import { siteUrl } from '../../utils/url'
import ScrollReveal from '../ui/ScrollReveal'
import { StaggerList, StaggerItem } from '../ui/StaggerList'
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
  const [activeCat, setActiveCat] = useState(null)

  const visiblePosts = activeCat ? posts.filter(p => p.cat === activeCat) : posts

  return (
    <section className="blog-section" id="blog-articulos">
      <ScrollReveal className="blog-header">
        <AnimatedDivider />
        <p className="section-label">{t('blog.label')}</p>
        <h2>{t('blog.title')} <em>{t('blog.title.em')}</em></h2>
        <GoldLine />
      </ScrollReveal>

      {/* ── Filtro por categoría ─────────────────────────────────── */}
      <ScrollReveal className="blog-filter-wrap">
        <div className="blog-chips">
          <button
            className={`blog-chip${activeCat === null ? ' active' : ''}`}
            onClick={() => setActiveCat(null)}
          >
            {t('blog.todos')}
          </button>
          {CATS.filter(cat => posts.some(p => p.cat === cat)).map(cat => (
            <button
              key={cat}
              className={`blog-chip${activeCat === cat ? ' active' : ''}`}
              onClick={() => setActiveCat(activeCat === cat ? null : cat)}
            >
              {t(cat)}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <StaggerList className="blog-grid" as="div" amount={0.06}>
        {visiblePosts.map(post => {
          const isInternal = Boolean(post.content)
          const CardImg = isInternal
            ? ({ children }) => <a href={siteUrl(`blog/${post.id}`)} className="blog-card-img-wrap" tabIndex={-1} aria-hidden="true">{children}</a>
            : ({ children }) => <a href={post.href} className="blog-card-img-wrap" target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">{children}</a>

          return (
            <StaggerItem className="blog-card" as="article" key={post.id}>
              {post.imagen && (
                <CardImg>
                  <img src={post.imagen} alt="" loading="lazy" />
                </CardImg>
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
            </StaggerItem>
          )
        })}
      </StaggerList>
    </section>
  )
}

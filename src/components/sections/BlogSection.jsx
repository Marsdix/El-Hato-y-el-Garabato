import { Link } from 'react-router-dom'
import ArrowRight from '../ui/ArrowRight'
import ScrollReveal from '../ui/ScrollReveal'
import { StaggerList, StaggerItem } from '../ui/StaggerList'
import AnimatedDivider from '../ui/AnimatedDivider'
import GoldLine from '../ui/GoldLine'
import { BLOG_POSTS } from '../../data/blog'
import { useLanguage } from '../../hooks/useLanguage'
import { useSanityFetch } from '../../hooks/useSanityFetch'
import { QUERY_BLOG } from '../../lib/queries'

function formatDate(dateStr, language) {
  return new Date(dateStr).toLocaleDateString(
    language === 'es' ? 'es-ES' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }
  )
}

export default function BlogSection() {
  const { t, language } = useLanguage()
  // Sanity fetch con los datos estáticos como estado inicial (cero flash de carga).
  // Si Sanity no tiene datos todavía, se usan los datos estáticos de /data/blog.js.
  const posts = useSanityFetch(QUERY_BLOG, BLOG_POSTS)

  return (
    <section className="blog-section" id="blog-articulos">
      <ScrollReveal className="blog-header">
        <AnimatedDivider />
        <p className="section-label">{t('blog.label')}</p>
        <h2>{t('blog.title')} <em>{t('blog.title.em')}</em></h2>
        <GoldLine />
      </ScrollReveal>

      <StaggerList className="blog-grid" as="div" amount={0.06}>
        {posts.map(post => {
          const isInternal = Boolean(post.content)
          const CardImg = isInternal
            ? ({ children }) => <Link to={`/blog/${post.id}`} className="blog-card-img-wrap" tabIndex={-1} aria-hidden="true">{children}</Link>
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
                    ? <Link to={`/blog/${post.id}`}>{t(post.title)}</Link>
                    : <a href={post.href} target="_blank" rel="noopener noreferrer">{t(post.title)}</a>
                  }
                </h3>
                <p className="blog-card-excerpt">{t(post.excerpt)}</p>
                {isInternal
                  ? <Link to={`/blog/${post.id}`} className="btn-ghost blog-card-link">{t('blog.leer')} <ArrowRight size={14} /></Link>
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

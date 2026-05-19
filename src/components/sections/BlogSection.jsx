import ArrowRight from '../ui/ArrowRight'
import ScrollReveal from '../ui/ScrollReveal'
import { StaggerList, StaggerItem } from '../ui/StaggerList'
import AnimatedDivider from '../ui/AnimatedDivider'
import GoldLine from '../ui/GoldLine'
import { BLOG_POSTS } from '../../data/blog'
import { useLanguage } from '../../hooks/useLanguage'

function formatDate(dateStr, language) {
  const date = new Date(dateStr)
  return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogSection() {
  const { t, language } = useLanguage()

  return (
    <section className="blog-section" id="blog-articulos">
      <ScrollReveal className="blog-header">
        <AnimatedDivider />
        <p className="section-label">{t('blog.label')}</p>
        <h2>{t('blog.title')} <em>{t('blog.title.em')}</em></h2>
        <GoldLine />
      </ScrollReveal>

      <StaggerList className="blog-grid" as="div" amount={0.06}>
        {BLOG_POSTS.map(post => (
          <StaggerItem className="blog-card" as="article" key={post.id}>
            {post.imagen && (
              <a
                href={post.href}
                className="blog-card-img-wrap"
                target="_blank"
                rel="noopener noreferrer"
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
                <a href={post.href} target="_blank" rel="noopener noreferrer">
                  {t(post.titleKey)}
                </a>
              </h3>
              <p className="blog-card-excerpt">{t(post.excerptKey)}</p>
              <a
                href={post.href}
                className="btn-ghost blog-card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('blog.leer')} <ArrowRight size={14} />
              </a>
            </div>
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  )
}

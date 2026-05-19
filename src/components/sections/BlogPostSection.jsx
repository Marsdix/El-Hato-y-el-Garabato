import { Link } from 'react-router-dom'
import { BtnPrimary } from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'
import { useLanguage } from '../../hooks/useLanguage'

function Block({ block, t, language }) {
  switch (block.type) {
    case 'intro':
      return <p className="blog-post-intro">{language === 'en' ? block.en : block.es}</p>

    case 'p':
      return <p className="blog-post-p">{language === 'en' ? block.en : block.es}</p>

    case 'h2':
      return <h2 className="blog-post-h2">{language === 'en' ? block.en : block.es}</h2>

    case 'image':
      return (
        <figure className="blog-post-figure">
          <img src={block.src} alt={block.caption ? (language === 'en' ? block.caption.en : block.caption.es) : ''} />
          {block.caption && (
            <figcaption>{language === 'en' ? block.caption.en : block.caption.es}</figcaption>
          )}
        </figure>
      )

    case 'list':
      return (
        <ul className="blog-post-list">
          {block.items.map((item, i) => (
            <li key={i}>{language === 'en' ? item.en : item.es}</li>
          ))}
        </ul>
      )

    case 'cta':
      return (
        <div className="blog-post-cta-block">
          <p>{language === 'en' ? block.en : block.es}</p>
          <BtnPrimary to={block.to}>
            {language === 'en' ? block.btnEn : block.btnEs}
          </BtnPrimary>
        </div>
      )

    default:
      return null
  }
}

function formatDate(dateStr, language) {
  return new Date(dateStr).toLocaleDateString(
    language === 'es' ? 'es-ES' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' }
  )
}

export default function BlogPostSection({ post }) {
  const { t, language } = useLanguage()

  return (
    <article className="blog-post-section">
      <div className="blog-post-inner">
        {/* ── Cabecera del artículo ─────────────────────────────── */}
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
          <h1 className="blog-post-title">{t(post.titleKey)}</h1>
          {post.tags && (
            <div className="blog-post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="blog-post-tag">{tag}</span>
              ))}
            </div>
          )}
        </ScrollReveal>

        {/* ── Cuerpo del artículo ───────────────────────────────── */}
        <div className="blog-post-body">
          {post.content.map((block, i) => (
            <ScrollReveal key={i} amount={0.15} delay={0.05}>
              <Block block={block} t={t} language={language} />
            </ScrollReveal>
          ))}
        </div>

        {/* ── Pie: volver al blog ───────────────────────────────── */}
        <div className="blog-post-footer">
          <Link to="/blog" className="blog-post-back">{t('blog.back')}</Link>
        </div>
      </div>
    </article>
  )
}

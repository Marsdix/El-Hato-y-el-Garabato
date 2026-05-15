import { PRESS_LOGOS } from '../../data/press'
import { useLanguage } from '../../hooks/useLanguage'

function PressItem({ item }) {
  const content = item.logo
    ? <img src={item.logo} alt={item.nombre} className="press-logo-img" loading="lazy" />
    : <span className="press-logo-text">{item.nombre}</span>

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="press-item press-item--link"
        aria-label={item.nombre}
      >
        {content}
      </a>
    )
  }

  return <span className="press-item">{content}</span>
}

export default function Press() {
  const { t } = useLanguage()
  const doubled = [...PRESS_LOGOS, ...PRESS_LOGOS]

  return (
    <section className="press">
      <p className="press-label">{t('press.label')}</p>
      <div className="press-viewport">
        <div className="press-track">
          {doubled.map((item, i) => (
            <span key={i} className="press-entry">
              <PressItem item={item} />
              <span className="press-dot" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

import { PRESS_LOGOS } from '../../data/press'
import { useLanguage } from '../../hooks/useLanguage'
import { siteUrl } from '../../utils/url'

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
              {item.href ? (
                <a
                  href={siteUrl(item.href)}
                  className="press-logo press-logo--link"
                >
                  {item.nombre}
                </a>
              ) : (
                <span className="press-logo">{item.nombre}</span>
              )}
              <span className="press-dot" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

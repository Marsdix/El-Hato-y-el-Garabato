import { Fragment } from 'react'
import { PRESS_LOGOS } from '../../data/press'
import { useLanguage } from '../../hooks/useLanguage'

export default function Press() {
  const { t } = useLanguage()
  const doubled = [...PRESS_LOGOS, ...PRESS_LOGOS]

  return (
    <section className="press">
      <p className="press-label">{t('press.label')}</p>
      <div className="press-track">
        {doubled.map((logo, i) => (
          <Fragment key={i}>
            <span className="press-logo">{logo}</span>
            <span className="press-dot">✦</span>
          </Fragment>
        ))}
      </div>
    </section>
  )
}

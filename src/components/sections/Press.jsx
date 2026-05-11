import { Fragment } from 'react'
import { PRESS_LOGOS } from '../../data/press'

export default function Press() {
  const doubled = [...PRESS_LOGOS, ...PRESS_LOGOS]
  return (
    <section className="press">
      <p className="press-label">Presencia en medios</p>
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

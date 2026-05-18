import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { BtnPrimary } from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'
import { IMAGES } from '../../data/images'
import { useLanguage } from '../../hooks/useLanguage'
import { fadeRight } from '../../animations/variants'

function CountUp({ to, suffix, duration = 3 }) {
  const [value, setValue] = useState(0)
  const prefersReduced = useReducedMotion()
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          if (prefersReduced) { setValue(to); return }

          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / (duration * 1000), 1)
            // ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * to))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [to, duration, prefersReduced])

  return (
    <span ref={ref}>
      {value}{suffix && <sup>{suffix}</sup>}
    </span>
  )
}

export default function BodegaFullwidth() {
  const { t } = useLanguage()

  return (
    <div className="bodega">
      <div className="bodega-bg" style={{ backgroundImage: `url(${IMAGES.home.bodegaPanoramica})` }} />
      <div className="bodega-vignette" />

      <ScrollReveal variant={fadeRight} className="bodega-content" amount={0.2}>
        <p className="section-label">{t('bodega.fw.label')}</p>
        <h2>
          {t('bodega.fw.title.1')}<br />
          <em>{t('bodega.fw.title.em')}</em><br />
          {t('bodega.fw.title.3')}
        </h2>
        <p>{t('bodega.fw.desc')}</p>
        <div className="stats-row">
          <div className="stat-item">
            <strong><CountUp to={8} /></strong>
            <span>{t('bodega.fw.stat.ha')}</span>
          </div>
          <div className="stat-item">
            <strong><CountUp to={100} suffix="+" duration={2} /></strong>
            <span>{t('bodega.fw.stat.anos')}</span>
          </div>
          <div className="stat-item">
            <strong><CountUp to={0} /></strong>
            <span>{t('bodega.fw.stat.aditivos')}</span>
          </div>
        </div>
        <BtnPrimary to="/bodega">{t('bodega.fw.cta')}</BtnPrimary>
      </ScrollReveal>
    </div>
  )
}

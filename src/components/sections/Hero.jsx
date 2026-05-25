import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { BtnPrimary, BtnGhost } from '../ui/Button'
import ArrowRight from '../ui/ArrowRight'
import { IMAGES } from '../../data/images'
import { useLanguage } from '../../hooks/useLanguage'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const { t } = useLanguage()
  const prefersReduced = useReducedMotion()
  const heroRef = useRef(null)

  useEffect(() => {
    if (document.readyState === 'complete') { setLoaded(true); return }
    const fn = () => setLoaded(true)
    window.addEventListener('load', fn)
    return () => window.removeEventListener('load', fn)
  }, [])

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? ['0px', '0px'] : ['0px', '120px']
  )

  return (
    <section className={`hero${loaded ? ' loaded' : ''}`} id="hero" ref={heroRef}>
      <motion.div
        className="hero-bg"
        style={{ backgroundImage: `url('${IMAGES.home.hero}')`, y: bgY }}
        initial={{ scale: 1.08 }}
        animate={{ scale: loaded ? 1 : 1.08 }}
        transition={{ duration: 8, ease: 'easeInOut' }}
      />
      <div className="hero-vignette" />

      <div className="hero-content">
        <p className="hero-eyebrow">{t('hero.eyebrow')}</p>
        <h1>
          {t('hero.title.1')}<br />
          {t('hero.title.2')}<br />
          <em>{t('hero.title.em')}</em>
        </h1>
        <p className="hero-desc">{t('hero.desc')}</p>
        <div className="hero-actions">
          <BtnPrimary to="/tienda">{t('hero.cta.discover')}</BtnPrimary>
          <BtnGhost href="#bodega" light>
            {t('hero.cta.bodega')} <ArrowRight />
          </BtnGhost>
        </div>
      </div>

      <div className="hero-scroll">
        <span>{t('hero.scroll')}</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

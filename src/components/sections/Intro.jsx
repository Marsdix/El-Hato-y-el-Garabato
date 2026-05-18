import { motion } from 'framer-motion'
import { BtnGhost } from '../ui/Button'
import ArrowRight from '../ui/ArrowRight'
import ScrollReveal from '../ui/ScrollReveal'
import CountUp from '../ui/CountUp'
import { IMAGES } from '../../data/images'
import { useLanguage } from '../../hooks/useLanguage'
import { useScrollColor } from '../../hooks/useScrollColor'
import AnimatedDivider from '../ui/AnimatedDivider'
import GoldLine from '../ui/GoldLine'
import { fadeLeft, fadeRight } from '../../animations/variants'

export default function Intro() {
  const { t } = useLanguage()
  const { ref: colorRef, filter } = useScrollColor(1)

  return (
    <section className="section" id="bodega">
      <div className="intro">
        <ScrollReveal variant={fadeLeft} className="intro-image" amount={0.15}>
          <motion.img
            ref={colorRef}
            src={IMAGES.home.bodegaInterior}
            alt={t('intro.img.alt')}
            style={{ filter }}
          />
          <div className="intro-stat">
            <strong><CountUp from={20} to={100} duration={2.4} /></strong>
            <span>{t('intro.stat')}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant={fadeRight} className="intro-text" amount={0.13}>
          <AnimatedDivider />
          <p className="section-label">{t('intro.label')}</p>
          <h2>
            {t('intro.title.1')}<br />
            {t('intro.title.2')}<br />
            <em>{t('intro.title.em')}</em>
          </h2>
          <GoldLine />
          <p>{t('intro.p1')}</p>
          <p>{t('intro.p2')}</p>
          <BtnGhost to="/bodega" style={{ marginTop: 12 }}>
            {t('intro.cta')} <ArrowRight />
          </BtnGhost>
        </ScrollReveal>
      </div>
    </section>
  )
}

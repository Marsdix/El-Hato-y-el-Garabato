import { BtnGhost } from '../ui/Button'
import ArrowRight from '../ui/ArrowRight'
import ScrollReveal from '../ui/ScrollReveal'
import { IMAGES } from '../../data/images'
import { useLanguage } from '../../hooks/useLanguage'
import { fadeLeft, fadeRight } from '../../animations/variants'

export default function Intro() {
  const { t } = useLanguage()

  return (
    <section className="section" id="bodega">
      <div className="intro">
        <ScrollReveal variant={fadeLeft} className="intro-image" amount={0.15}>
          <img
            src={IMAGES.home.bodegaInterior}
            alt={t('intro.img.alt')}
          />
          <div className="intro-stat">
            <strong>100</strong>
            <span>{t('intro.stat')}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant={fadeRight} className="intro-text" amount={0.15}>
          <div className="divider" />
          <p className="section-label">{t('intro.label')}</p>
          <h2>
            {t('intro.title.1')}<br />
            {t('intro.title.2')}<br />
            <em>{t('intro.title.em')}</em>
          </h2>
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

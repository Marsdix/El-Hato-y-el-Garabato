import { BtnGhost } from '../ui/Button'
import ArrowRight from '../ui/ArrowRight'
import { IMAGES } from '../../data/images'
import { useLanguage } from '../../hooks/useLanguage'

export default function Intro() {
  const { t } = useLanguage()

  return (
    <section className="section" id="bodega">
      <div className="intro">
        <div className="intro-image reveal-left">
          <img
            src={IMAGES.home.bodegaInterior}
            alt="La bodega El Hato y el Garabato"
          />
          <div className="intro-stat">
            <strong>100</strong>
            <span>{t('intro.stat')}</span>
          </div>
        </div>

        <div className="intro-text reveal-right">
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
        </div>
      </div>
    </section>
  )
}

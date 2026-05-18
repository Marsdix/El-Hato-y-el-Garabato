import { BtnPrimary } from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'
import CountUp from '../ui/CountUp'
import { IMAGES } from '../../data/images'
import { useLanguage } from '../../hooks/useLanguage'
import { fadeRight } from '../../animations/variants'

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
            <strong><CountUp to={8} duration={1.5} /></strong>
            <span>{t('bodega.fw.stat.ha')}</span>
          </div>
          <div className="stat-item">
            <strong><CountUp from={20} to={100} suffix="+" duration={2.5} /></strong>
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

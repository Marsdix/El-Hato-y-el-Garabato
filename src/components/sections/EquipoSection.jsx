import { BtnPrimary } from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'
import { IMAGES } from '../../data/images'
import { useLanguage } from '../../hooks/useLanguage'
import { fadeLeft, fadeRight } from '../../animations/variants'

export default function EquipoSection() {
  const { t } = useLanguage()

  return (
    <section className="equipo-section" id="equipo">
      <div className="equipo-inner">
        <ScrollReveal variant={fadeLeft} className="equipo-text" amount={0.15}>
          <div className="divider" />
          <p className="section-label">{t('equipo.label')}</p>
          <h2>
            {t('equipo.title.1')}<br />
            <em>{t('equipo.title.em')}</em><br />
            {t('equipo.title.3')}
          </h2>
          <p>{t('equipo.desc')}</p>
          <ul className="feature-list">
            {['equipo.feat.1','equipo.feat.2','equipo.feat.3','equipo.feat.4','equipo.feat.5'].map(key => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
          <BtnPrimary to="/nosotros">{t('equipo.cta')}</BtnPrimary>
        </ScrollReveal>

        <ScrollReveal variant={fadeRight} className="equipo-image" amount={0.15}>
          <img
            src={IMAGES.nosotros.equipoGrupo}
            alt={t('equipo.img.alt')}
          />
        </ScrollReveal>
      </div>
    </section>
  )
}

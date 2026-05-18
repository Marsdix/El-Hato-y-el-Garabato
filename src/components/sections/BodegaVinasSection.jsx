import { BODEGA_VINAS } from '../../data/bodega'
import { IMAGES } from '../../data/images'
import { useLanguage } from '../../hooks/useLanguage'
import ScrollReveal from '../ui/ScrollReveal'
import { fadeLeft } from '../../animations/variants'

export default function BodegaVinasSection() {
  const { t } = useLanguage()
  const { parrafos, stats, variedadesTintas, variedadesBlancas } = BODEGA_VINAS
  const imagen = IMAGES.bodega.vinas

  return (
    <section className="bodega-vinas-section" id="bodega-vinas">
      <div className="bodega-vinas-inner">

        <ScrollReveal variant={fadeLeft} className="bodega-vinas-image" amount={0.15}>
          <img
            src={imagen}
            alt={t('bodega.img.alt')}
            loading="lazy"
          />
        </ScrollReveal>

        <div className="bodega-vinas-text">
          <ScrollReveal amount={0.15}>
            <div className="divider" />
            <p className="section-label">{t('bodega.label')}</p>
            <h2 className="bodega-vinas-h2">
              {t('bodega.title')} <em>{t('bodega.title.em')}</em>
            </h2>
            <p>{t(parrafos[0])}</p>
            <p>{t(parrafos[1])}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} amount={0.15}>
            <div className="bodega-vinas-stats">
              {stats.map(s => (
                <div className="bodega-stat" key={s.unidad.es}>
                  <strong>{s.valor}</strong>
                  <span>{t(s.unidad)}</span>
                  <em>{t(s.desc)}</em>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} amount={0.15}>
            <p>{t(parrafos[2])}</p>
            <p>{t(parrafos[3])}</p>
            <p>{t(parrafos[4])}</p>
            <div className="variedades-list">
              <p className="variedades-label">{t('bodega.tintas')}</p>
              <div className="variedades-tags">
                {variedadesTintas.map(v => (
                  <span className="variedad-tag" key={v}>{v}</span>
                ))}
              </div>
            </div>
            <div className="variedades-list">
              <p className="variedades-label">{t('bodega.blancas')}</p>
              <div className="variedades-tags">
                {variedadesBlancas.map(v => (
                  <span className="variedad-tag" key={v}>{v}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}

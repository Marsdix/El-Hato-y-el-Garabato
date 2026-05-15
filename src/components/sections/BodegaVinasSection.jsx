import { BODEGA_VINAS } from '../../data/bodega'
import { IMAGES } from '../../data/images'
import { useLanguage } from '../../hooks/useLanguage'

export default function BodegaVinasSection() {
  const { t } = useLanguage()
  const { parrafos, stats, variedadesTintas, variedadesBlancas } = BODEGA_VINAS
  const imagen = IMAGES.bodega.vinas

  return (
    <section className="bodega-vinas-section">
      <div className="bodega-vinas-inner">

        <div className="bodega-vinas-image reveal-left">
          <img
            src={imagen}
            alt={t('bodega.img.alt')}
            loading="lazy"
          />
        </div>

        <div className="bodega-vinas-text">
          <div className="divider reveal" />
          <p className="section-label reveal">{t('bodega.label')}</p>
          <h2 className="bodega-vinas-h2 reveal">
            {t('bodega.title')} <em>{t('bodega.title.em')}</em>
          </h2>

          <p className="reveal">{t(parrafos[0])}</p>
          <p className="reveal">{t(parrafos[1])}</p>

          <div className="bodega-vinas-stats reveal">
            {stats.map(s => (
              <div className="bodega-stat" key={s.unidad.es}>
                <strong>{s.valor}</strong>
                <span>{t(s.unidad)}</span>
                <em>{t(s.desc)}</em>
              </div>
            ))}
          </div>

          <p className="reveal">{t(parrafos[2])}</p>
          <p className="reveal">{t(parrafos[3])}</p>
          <p className="reveal">{t(parrafos[4])}</p>

          <div className="variedades-list reveal">
            <p className="variedades-label">{t('bodega.tintas')}</p>
            <div className="variedades-tags">
              {variedadesTintas.map(v => (
                <span className="variedad-tag" key={v}>{v}</span>
              ))}
            </div>
          </div>

          <div className="variedades-list reveal">
            <p className="variedades-label">{t('bodega.blancas')}</p>
            <div className="variedades-tags">
              {variedadesBlancas.map(v => (
                <span className="variedad-tag" key={v}>{v}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

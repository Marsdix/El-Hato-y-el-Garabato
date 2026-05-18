import { motion } from 'framer-motion'
import { BODEGA_VINAS } from '../../data/bodega'
import { IMAGES } from '../../data/images'
import { useLanguage } from '../../hooks/useLanguage'
import { useScrollColor } from '../../hooks/useScrollColor'
import ScrollReveal from '../ui/ScrollReveal'
import AnimatedDivider from '../ui/AnimatedDivider'
import GoldLine from '../ui/GoldLine'
import CountUp from '../ui/CountUp'
import { imageRevealUp } from '../../animations/variants'

export default function BodegaVinasSection() {
  const { t } = useLanguage()
  const { parrafos, stats, variedadesTintas, variedadesBlancas } = BODEGA_VINAS
  const imagen = IMAGES.bodega.vinas
  const { ref: colorRef, filter } = useScrollColor(1)

  return (
    <section className="bodega-vinas-section" id="bodega-vinas">
      <div className="bodega-vinas-inner">

        <ScrollReveal variant={imageRevealUp} className="bodega-vinas-image" amount={0.15}>
          <motion.img
            ref={colorRef}
            src={imagen}
            alt={t('bodega.img.alt')}
            loading="lazy"
            style={{ filter }}
          />
        </ScrollReveal>

        <div className="bodega-vinas-text">
          <ScrollReveal amount={0.15}>
            <AnimatedDivider />
            <p className="section-label">{t('bodega.label')}</p>
            <h2 className="bodega-vinas-h2">
              {t('bodega.title')} <em>{t('bodega.title.em')}</em>
            </h2>
            <GoldLine />
            <p>{t(parrafos[0])}</p>
            <p>{t(parrafos[1])}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} amount={0.15}>
            <div className="bodega-vinas-stats">
              {stats.map(s => {
                const prefix = s.valor.startsWith('+') ? '+' : undefined
                const num = parseInt(s.valor.replace('+', ''), 10)
                const dur = num >= 100 ? 3 : num >= 20 ? 2 : 1.5
                return (
                  <div className="bodega-stat" key={s.unidad.es}>
                    <strong><CountUp to={num} prefix={prefix} duration={dur} /></strong>
                    <span>{t(s.unidad)}</span>
                    <em>{t(s.desc)}</em>
                  </div>
                )
              })}
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

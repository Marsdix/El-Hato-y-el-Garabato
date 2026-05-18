import ArrowRight from '../ui/ArrowRight'
import ScrollReveal from '../ui/ScrollReveal'
import { StaggerList, StaggerItem } from '../ui/StaggerList'
import AnimatedDivider from '../ui/AnimatedDivider'
import GoldLine from '../ui/GoldLine'
import { VINOS } from '../../data/vinos'
import { useLanguage } from '../../hooks/useLanguage'

export default function TiendaSection() {
  const { t } = useLanguage()

  return (
    <section className="tienda-section" id="tienda-catalogo">
      <ScrollReveal className="tienda-header">
        <AnimatedDivider />
        <p className="section-label">{t('tienda.label')}</p>
        <h2>{t('tienda.title')} <em>{t('tienda.title.em')}</em></h2>
        <GoldLine />
      </ScrollReveal>

      <StaggerList className="tienda-grid" as="div" amount={0.05}>
        {VINOS.map(vino => (
          <StaggerItem className="tienda-card" as="article" key={vino.id}>
            <a
              href={vino.href}
              className="tienda-card-img-wrap"
              rel="noopener noreferrer"
              aria-label={`${t('tienda.ver')} ${vino.nombre}`}
            >
              <img
                src={vino.imagen}
                alt={vino.nombre}
                loading="lazy"
              />
            </a>
            <div className="tienda-card-body">
              <p className="tienda-card-tag">{t(vino.tag)}</p>
              <h3 className="tienda-card-nombre">{vino.nombre}</h3>
              <p className="tienda-card-varietal">{t(vino.varietal)}</p>
              <div className="tienda-card-footer">
                <span className="tienda-card-precio">
                  <sup>€</sup>{vino.precio}
                </span>
                <a
                  href={vino.href}
                  className="btn-ghost"
                  rel="noopener noreferrer"
                >
                  {t('tienda.ver')} <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  )
}

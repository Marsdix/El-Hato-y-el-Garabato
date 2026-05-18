import ArrowRight from '../ui/ArrowRight'
import { BtnGhost } from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'
import { StaggerList, StaggerItem } from '../ui/StaggerList'
import { VINOS } from '../../data/vinos'
import { useLanguage } from '../../hooks/useLanguage'

const FEATURED = VINOS.filter(v => v.featured)

export default function VinosGrid() {
  const { t } = useLanguage()

  return (
    <section className="section vinos-section" id="vinos">
      <ScrollReveal className="vinos-header">
        <h2>{t('vinos.title')}<br /><em>{t('vinos.title.em')}</em></h2>
        <BtnGhost to="/tienda">
          {t('vinos.cta')} <ArrowRight />
        </BtnGhost>
      </ScrollReveal>

      <StaggerList className="vinos-grid" as="div" amount={0.1}>
        {FEATURED.map((vino) => (
          <StaggerItem className="vino-card" key={vino.id} as="div">
            <a
              href={vino.href}
              className="vino-card-inner"
              rel="noopener noreferrer"
              aria-label={vino.nombre}
            >
              <img className="vino-card-img" src={vino.imagen} alt={vino.nombre} />
              <div className="vino-overlay" />
              <div className="vino-content">
                <p className="vino-tag">{t(vino.tag)}</p>
                <h3 className="vino-name">{vino.nombre}</h3>
                <p className="vino-varietal">{t(vino.varietal)}</p>
                {vino.precio && (
                  <p className="vino-precio"><sup>€</sup>{vino.precio}</p>
                )}
                <span className="vino-cta">
                  {t('vinos.ver')} <ArrowRight size={14} />
                </span>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  )
}

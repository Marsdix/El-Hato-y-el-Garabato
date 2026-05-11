import ArrowRight from '../ui/ArrowRight'
import { BtnGhost } from '../ui/Button'
import { VINOS } from '../../data/vinos'
import { LINKS } from '../../data/navigation'

const DELAY_CLASS = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3']

export default function VinosGrid() {
  return (
    <section className="section vinos-section" id="vinos">
      <div className="vinos-header reveal">
        <h2>Nuestros<br /><em>vinos</em></h2>
        <BtnGhost href={LINKS.tienda}>
          Ver toda la colección <ArrowRight />
        </BtnGhost>
      </div>

      <div className="vinos-grid">
        {VINOS.map((vino, i) => (
          <div className={`vino-card reveal ${DELAY_CLASS[i] ?? ''}`} key={vino.id}>
            <div className="vino-card-inner">
              {/* IMAGEN VINO: {vino.nombre} → ver src/data/vinos.js para cambiar */}
              <img className="vino-card-img" src={vino.imagen} alt={vino.nombre} />
              <div className="vino-overlay" />
              <div className="vino-content">
                <p className="vino-tag">{vino.tag}</p>
                <h3 className="vino-name">{vino.nombre}</h3>
                <p className="vino-varietal">{vino.varietal}</p>
                <a href={vino.href} className="vino-cta" rel="noopener noreferrer">
                  Ver vino <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

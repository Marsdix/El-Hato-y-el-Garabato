import ArrowRight from '../ui/ArrowRight'
import { VINOS } from '../../data/vinos'

export default function TiendaSection() {
  return (
    <section className="tienda-section">
      <div className="tienda-header reveal">
        <div className="divider" />
        <p className="section-label">Colección completa</p>
        <h2>Nuestros <em>vinos</em></h2>
      </div>

      <div className="tienda-grid">
        {VINOS.map(vino => (
          <article className="tienda-card reveal" key={vino.id}>
            <a
              href={vino.href}
              className="tienda-card-img-wrap"
              rel="noopener noreferrer"
              aria-label={`Ver ${vino.nombre} en la tienda`}
            >
              <img
                src={vino.imagen}
                alt={vino.nombre}
                loading="lazy"
              />
            </a>
            <div className="tienda-card-body">
              <p className="tienda-card-tag">{vino.tag}</p>
              <h3 className="tienda-card-nombre">{vino.nombre}</h3>
              <p className="tienda-card-varietal">{vino.varietal}</p>
              <div className="tienda-card-footer">
                <span className="tienda-card-precio">
                  <sup>€</sup>{vino.precio}
                </span>
                <a
                  href={vino.href}
                  className="btn-ghost"
                  rel="noopener noreferrer"
                >
                  Ver vino <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

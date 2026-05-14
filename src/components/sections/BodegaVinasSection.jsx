import { BODEGA_VINAS } from '../../data/bodega'
import { IMAGES } from '../../data/images'

export default function BodegaVinasSection() {
  const { parrafos, stats, variedadesTintas, variedadesBlancas } = BODEGA_VINAS
  const imagen = IMAGES.bodega.vinas

  return (
    <section className="bodega-vinas-section">
      <div className="bodega-vinas-inner">

        <div className="bodega-vinas-image reveal-left">
          <img
            src={imagen}
            alt="Jose trabajando en las viñas de El Hato y el Garabato"
            loading="lazy"
          />
        </div>

        <div className="bodega-vinas-text">
          <div className="divider reveal" />
          <p className="section-label reveal">Las Viñas · Arribes del Duero</p>
          <h2 className="bodega-vinas-h2 reveal">
            Viñas <em>centenarias.</em>
          </h2>

          <p className="reveal">{parrafos[0]}</p>
          <p className="reveal">{parrafos[1]}</p>

          <div className="bodega-vinas-stats reveal">
            {stats.map(s => (
              <div className="bodega-stat" key={s.unidad}>
                <strong>{s.valor}</strong>
                <span>{s.unidad}</span>
                <em>{s.desc}</em>
              </div>
            ))}
          </div>

          <p className="reveal">{parrafos[2]}</p>
          <p className="reveal">{parrafos[3]}</p>
          <p className="reveal">{parrafos[4]}</p>

          <div className="variedades-list reveal">
            <p className="variedades-label">Variedades tintas</p>
            <div className="variedades-tags">
              {variedadesTintas.map(v => (
                <span className="variedad-tag" key={v}>{v}</span>
              ))}
            </div>
          </div>

          <div className="variedades-list reveal">
            <p className="variedades-label">Variedades blancas</p>
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

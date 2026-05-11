import { BtnPrimary } from '../ui/Button'
import { EXPERIENCIAS, VISITA_INTRO } from '../../data/visitas'

export default function VisitaExperienciasSection() {
  return (
    <section className="visita-experiencias-section">
      <div className="visita-exp-header reveal">
        <div className="divider" />
        <p className="section-label">Enoturismo · Arribes del Duero</p>
        <h2>Elige tu <em>experiencia.</em></h2>
        {VISITA_INTRO.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="visita-exp-grid">
        {EXPERIENCIAS.map((exp, i) => (
          <article
            className={`visita-exp-card reveal reveal-delay-${i + 1}`}
            key={exp.id}
          >
            <p className="visita-exp-num">{exp.num}</p>
            <h3 className="visita-exp-titulo">{exp.titulo}</h3>
            <p className="visita-exp-desc">{exp.descripcion}</p>

            <ul className="visita-exp-detalles" aria-label="Detalles de la visita">
              {exp.detalles.map(d => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <div className="visita-exp-precio">
              <strong>{exp.precio}</strong>
              <span>€ / persona</span>
            </div>

            <BtnPrimary href={exp.href}>Reservar visita</BtnPrimary>
          </article>
        ))}
      </div>
    </section>
  )
}

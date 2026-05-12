import { BtnPrimary } from '../ui/Button'

const OPCIONES = [
  {
    num: '01',
    titulo: 'Visita a la bodega y viñedo',
    desc: 'Recorrido completo por las instalaciones y cata de vinos',
  },
  {
    num: '02',
    titulo: 'Paseo entre viñas centenarias',
    desc: 'Caminata guiada por los pagos históricos de Arribes',
  },
  {
    num: '03',
    titulo: 'Maridaje con productos locales',
    desc: 'Experiencia gastronómica con elaboraciones de la comarca',
  },
]

export default function VisitaSection() {
  return (
    <section className="visita-section" id="visita">
      {/*
        IMAGEN VISITA (fondo decorativo lateral, lado derecho)
        Cambiar URL en App.css → .visita-section::before → background: url(...)
        Guardar en public/images/visita.jpg — experiencia enoturística o paisaje
      */}
      <div className="visita-inner">
        <div className="divider reveal" />
        <p className="section-label reveal">Enoturismo · Arribes del Duero</p>
        <h2 className="reveal">Una visita<br /><em>única.</em></h2>
        <p className="reveal">
          Ven a conocer una zona y variedades únicas, experimentar un
          enoturismo diferente y vivir una experiencia relajada en nuestras
          viñas y bodega.
        </p>
        <div className="visita-options reveal">
          {OPCIONES.map(op => (
            <div className="visita-option" key={op.num}>
              <span className="visita-option-num">{op.num}</span>
              <div className="visita-option-text">
                <strong>{op.titulo}</strong>
                <span>{op.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal">
          <BtnPrimary to="/visita">Información y reserva</BtnPrimary>
        </div>
      </div>
    </section>
  )
}

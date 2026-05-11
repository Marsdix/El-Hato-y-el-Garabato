import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/layout/PageHero'
import { BtnPrimary } from '../components/ui/Button'
import { EQUIPO } from '../data/equipo'
import { MEDIOS } from '../data/medios'
import { LINKS } from '../data/navigation'

// ─── SECCIÓN MEDIOS ───────────────────────────────────────────────
function MediosSection() {
  return (
    <section className="medios-section">
      <div className="medios-inner">
        <div className="medios-header reveal">
          <div className="divider" />
          <p className="section-label">Reconocimientos</p>
          <h2>En los <em>medios</em></h2>
        </div>
        <div className="medios-grid reveal">
          {MEDIOS.map(medio => (
            <div className="medio-logo" key={medio.nombre} title={medio.nombre}>
              <img src={medio.logo} alt={medio.nombre} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── FICHA DE MIEMBRO ─────────────────────────────────────────────
function MiembroSection({ miembro }) {
  const imgReveal = miembro.invertido ? 'reveal-right' : 'reveal-left'
  const txtReveal = miembro.invertido ? 'reveal-left' : 'reveal-right'

  return (
    <section className={`miembro-section${miembro.invertido ? ' miembro-section--inv' : ''}`}>
      <div className={`miembro-imagen ${imgReveal}`}>
        <img
          src={miembro.imagen}
          alt={`${miembro.nombre} — ${miembro.rol}`}
          loading="lazy"
          style={{ objectPosition: miembro.imagenPos }}
        />
      </div>

      <div className={`miembro-content ${txtReveal}`}>
        <div className="divider" />
        <p className="miembro-rol section-label">{miembro.rol}</p>
        <h2 className="miembro-nombre">{miembro.nombre}</h2>
        <div className="miembro-bio">
          {miembro.bio.map((parrafo, i) => (
            <p
              key={i}
              className={parrafo.destacado ? 'miembro-bio--destacado' : ''}
            >
              {parrafo.texto}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA FINAL ────────────────────────────────────────────────────
function CtaFinal() {
  return (
    <section className="nosotros-cta reveal">
      <div className="nosotros-cta-inner">
        <p className="section-label">¿Hablamos?</p>
        <h2>¿Tienes alguna duda?<br /><em>Aquí estamos.</em></h2>
        <div className="nosotros-cta-actions">
          <BtnPrimary href={LINKS.tienda}>Ver nuestros vinos</BtnPrimary>
          <a href="/#contacto" className="btn-ghost btn-ghost-light">
            Contactar con nosotros
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── PÁGINA ───────────────────────────────────────────────────────
export default function SobreNosotros() {
  useScrollReveal()

  return (
    <>
      {/*
        IMAGEN HERO SOBRE NOSOTROS
        Guardar en public/images/quienes-somos.jpg (mínimo 1920×1280px)
      */}
      <PageHero
        eyebrow="Quiénes somos"
        title={<>Las personas<br /><em>detrás del vino.</em></>}
        backgroundImage="https://elhatoyelgarabato.com/wp-content/uploads/2024/06/quienes-somos.jpg"
        imagePosition="62% 53%"
      />

      <MediosSection />

      {EQUIPO.map(miembro => (
        <MiembroSection key={miembro.id} miembro={miembro} />
      ))}

      <CtaFinal />
    </>
  )
}

import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/layout/PageHero'
import { BtnPrimary, BtnGhost } from '../components/ui/Button'
import { EQUIPO } from '../data/equipo'
import { MEDIOS } from '../data/medios'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'

// ─── SECCIÓN MEDIOS ───────────────────────────────────────────────
function MediosSection() {
  const { t } = useLanguage()
  return (
    <section className="medios-section">
      <div className="medios-inner">
        <div className="medios-header reveal">
          <div className="divider" />
          <p className="section-label">{t('nosotros.medios.label')}</p>
          <h2>{t('nosotros.medios.title')} <em>{t('nosotros.medios.title.em')}</em></h2>
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
  const { t } = useLanguage()
  const imgReveal = miembro.invertido ? 'reveal-right' : 'reveal-left'
  const txtReveal = miembro.invertido ? 'reveal-left' : 'reveal-right'

  return (
    <section className={`miembro-section${miembro.invertido ? ' miembro-section--inv' : ''}`}>
      <div className={`miembro-imagen ${imgReveal}`}>
        <img
          src={miembro.imagen}
          alt={`${miembro.nombre} — ${t(miembro.rol)}`}
          loading="lazy"
          style={{ objectFit: miembro.objectFit ?? 'cover', objectPosition: miembro.imagenPos }}
        />
      </div>

      <div className={`miembro-content ${txtReveal}`}>
        <div className="divider" />
        <p className="miembro-rol section-label">{t(miembro.rol)}</p>
        <h2 className="miembro-nombre">{miembro.nombre}</h2>
        <div className="miembro-bio">
          {miembro.bio.map((parrafo, i) => (
            <p
              key={i}
              className={parrafo.destacado ? 'miembro-bio--destacado' : ''}
            >
              {t(parrafo.texto)}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA FINAL ────────────────────────────────────────────────────
function CtaFinal() {
  const { t } = useLanguage()
  return (
    <section className="nosotros-cta reveal">
      <div className="nosotros-cta-inner">
        <p className="section-label">{t('nosotros.cta.label')}</p>
        <h2>{t('nosotros.cta.title.1')}<br /><em>{t('nosotros.cta.title.em')}</em></h2>
        <div className="nosotros-cta-actions">
          <BtnPrimary to="/tienda">{t('nosotros.cta.vinos')}</BtnPrimary>
          <BtnGhost to="/contacto">{t('nosotros.cta.contacto')}</BtnGhost>
        </div>
      </div>
    </section>
  )
}

// ─── PÁGINA ───────────────────────────────────────────────────────
export default function SobreNosotros() {
  useScrollReveal()
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t('page.nosotros.eyebrow')}
        title={<>{t('page.nosotros.title.1')}<br /><em>{t('page.nosotros.title.em')}</em></>}
        backgroundImage={IMAGES.nosotros.hero}
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

import { motion } from 'framer-motion'
import PageHero from '../components/layout/PageHero'
import { BtnPrimary, BtnGhost } from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'
import { StaggerList, StaggerItem } from '../components/ui/StaggerList'
import { EQUIPO } from '../data/equipo'
import { MEDIOS } from '../data/medios'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'
import { usePageTitle } from '../hooks/usePageTitle'
import { useRegisterSections } from '../context/SectionContext'
import { useTilt } from '../hooks/useTilt'
import { useScrollColor } from '../hooks/useScrollColor'
import AnimatedDivider from '../components/ui/AnimatedDivider'
import GoldLine from '../components/ui/GoldLine'

import { fadeLeft, fadeRight } from '../animations/variants'

const SECTIONS = [
  { id: 'medios',  label: 'Medios' },
  { id: 'equipo-nosotros', label: 'Equipo' },
  { id: 'nosotros-cta',    label: 'Contacto' },
]

// ─── SECCIÓN MEDIOS ───────────────────────────────────────────────
function MediosSection() {
  const { t } = useLanguage()
  return (
    <section className="medios-section" id="medios">
      <div className="medios-inner">
        <ScrollReveal className="medios-header">
          <AnimatedDivider />
          <p className="section-label">{t('nosotros.medios.label')}</p>
          <h2>{t('nosotros.medios.title')} <em>{t('nosotros.medios.title.em')}</em></h2>
          <GoldLine />
        </ScrollReveal>
        <StaggerList className="medios-grid" as="div" amount={0.1}>
          {MEDIOS.map(medio => (
            <StaggerItem key={medio.nombre} as="div" className="medio-logo" title={medio.nombre}>
              {medio.href ? (
                <a href={medio.href} target="_blank" rel="noopener noreferrer" aria-label={medio.nombre}>
                  <img src={medio.logo} alt={medio.nombre} loading="lazy" />
                </a>
              ) : (
                <img src={medio.logo} alt={medio.nombre} loading="lazy" />
              )}
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  )
}

// ─── FICHA DE MIEMBRO ─────────────────────────────────────────────
function MiembroSection({ miembro }) {
  const { t } = useLanguage()
  const { rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(5)
  const { ref: colorRef, filter } = useScrollColor(1)
  const imgVariant = miembro.invertido ? fadeRight : fadeLeft
  const txtVariant = miembro.invertido ? fadeLeft  : fadeRight

  return (
    <section className={`miembro-section${miembro.invertido ? ' miembro-section--inv' : ''}`}>
      <ScrollReveal variant={imgVariant} className="miembro-imagen" amount={0.15}>
        <motion.div
          className="miembro-img-tilt"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={{ rotateX, rotateY, transformPerspective: 900 }}
        >
          <motion.img
            ref={colorRef}
            src={miembro.imagen}
            alt={`${miembro.nombre} — ${t(miembro.rol)}`}
            loading="lazy"
            style={{ objectFit: miembro.objectFit ?? 'cover', objectPosition: miembro.imagenPos, filter }}
          />
        </motion.div>
      </ScrollReveal>

      <ScrollReveal variant={txtVariant} className="miembro-content" amount={0.15}>
        <AnimatedDivider />
        <p className="miembro-rol section-label">{t(miembro.rol)}</p>
        <h2 className="miembro-nombre">{miembro.nombre}</h2>
        <GoldLine delay={0.3} />
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
      </ScrollReveal>
    </section>
  )
}

// ─── CTA FINAL ────────────────────────────────────────────────────
function CtaFinal() {
  const { t } = useLanguage()
  return (
    <ScrollReveal as="section" className="nosotros-cta" amount={0.3} id="nosotros-cta">
      <div className="nosotros-cta-inner">
        <p className="section-label">{t('nosotros.cta.label')}</p>
        <h2>{t('nosotros.cta.title.1')}<br /><em>{t('nosotros.cta.title.em')}</em></h2>
        <div className="nosotros-cta-actions">
          <BtnPrimary to="/tienda">{t('nosotros.cta.vinos')}</BtnPrimary>
          <BtnGhost to="/contacto">{t('nosotros.cta.contacto')}</BtnGhost>
        </div>
      </div>
    </ScrollReveal>
  )
}

// ─── PÁGINA ───────────────────────────────────────────────────────
export default function SobreNosotros() {
  useRegisterSections(SECTIONS)
  const { t } = useLanguage()
  usePageTitle('Sobre Nosotros', 'About Us')

  return (
    <>
      <PageHero
        eyebrow={t('page.nosotros.eyebrow')}
        title={<>{t('page.nosotros.title.1')}<br /><em>{t('page.nosotros.title.em')}</em></>}
        backgroundImage={IMAGES.nosotros.hero}
        imagePosition="62% 53%"
      />

      <MediosSection />

      <div id="equipo-nosotros">
        {EQUIPO.map(miembro => (
          <MiembroSection key={miembro.id} miembro={miembro} />
        ))}
      </div>

      <CtaFinal />
    </>
  )
}

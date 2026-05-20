import { BtnPrimary } from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'
import { StaggerList, StaggerItem } from '../ui/StaggerList'
import AnimatedDivider from '../ui/AnimatedDivider'
import GoldLine from '../ui/GoldLine'
import { EXPERIENCIAS, VISITA_INTRO } from '../../data/visitas'
import { useLanguage } from '../../hooks/useLanguage'
import { useSanityFetch } from '../../hooks/useSanityFetch'
import { QUERY_VISITAS } from '../../lib/queries'

// Estado inicial que coincide con la forma devuelta por QUERY_VISITAS
const VISITAS_INICIAL = { intro: VISITA_INTRO, experiencias: EXPERIENCIAS }

export default function VisitaExperienciasSection() {
  const { t } = useLanguage()
  // Sanity fetch con los datos estáticos como estado inicial (cero flash de carga).
  // QUERY_VISITAS devuelve { intro, experiencias }; misma forma que VISITAS_INICIAL.
  const { intro, experiencias } = useSanityFetch(QUERY_VISITAS, VISITAS_INICIAL)

  return (
    <section className="visita-experiencias-section" id="visita-experiencias">
      <ScrollReveal className="visita-exp-header">
        <AnimatedDivider />
        <p className="section-label">{t('visita.exp.label')}</p>
        <h2>{t('visita.exp.title')} <em>{t('visita.exp.title.em')}</em></h2>
        <GoldLine />
        {intro.map((p, i) => (
          <p key={i}>{t(p)}</p>
        ))}
      </ScrollReveal>

      <StaggerList className="visita-exp-grid" as="div" amount={0.05}>
        {experiencias.map((exp) => (
          <StaggerItem className="visita-exp-card" as="article" key={exp.id}>
            <p className="visita-exp-num">{exp.num}</p>
            <h3 className="visita-exp-titulo">{t(exp.titulo)}</h3>
            <p className="visita-exp-desc">{t(exp.descripcion)}</p>

            <ul className="visita-exp-detalles" aria-label={t('visita.exp.details.aria')}>
              {exp.detalles.map((d, j) => (
                <li key={j}>{t(d)}</li>
              ))}
            </ul>

            <div className="visita-exp-precio">
              <strong>{exp.precio}</strong>
              <span>{t('visita.exp.precio.unit')}</span>
            </div>

            <BtnPrimary href={exp.href}>{t('visita.exp.reservar')}</BtnPrimary>
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  )
}

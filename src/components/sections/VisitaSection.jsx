import { BtnPrimary } from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'
import { StaggerList, StaggerItem } from '../ui/StaggerList'
import AnimatedDivider from '../ui/AnimatedDivider'
import GoldLine from '../ui/GoldLine'
import { useLanguage } from '../../hooks/useLanguage'

const OPCIONES = [
  { num: '01', titleKey: 'visita.opt.1.title', descKey: 'visita.opt.1.desc' },
  { num: '02', titleKey: 'visita.opt.2.title', descKey: 'visita.opt.2.desc' },
  { num: '03', titleKey: 'visita.opt.3.title', descKey: 'visita.opt.3.desc' },
]

export default function VisitaSection() {
  const { t } = useLanguage()

  return (
    <section className="visita-section" id="visita">
      <div className="visita-inner">
        <ScrollReveal amount={0.2}>
          <AnimatedDivider />
          <p className="section-label">{t('visita.label')}</p>
          <h2>{t('visita.title')}<br /><em>{t('visita.title.em')}</em></h2>
          <GoldLine />
          <p>{t('visita.desc')}</p>
        </ScrollReveal>

        <StaggerList className="visita-options" as="div" amount={0.15}>
          {OPCIONES.map(op => (
            <StaggerItem className="visita-option" as="div" key={op.num}>
              <span className="visita-option-num">{op.num}</span>
              <div className="visita-option-text">
                <strong>{t(op.titleKey)}</strong>
                <span>{t(op.descKey)}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>

        <ScrollReveal delay={0.15} amount={0.3}>
          <BtnPrimary to="/visita">{t('visita.cta')}</BtnPrimary>
        </ScrollReveal>
      </div>
    </section>
  )
}

import { BtnPrimary } from '../ui/Button'
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
        <div className="divider reveal" />
        <p className="section-label reveal">{t('visita.label')}</p>
        <h2 className="reveal">{t('visita.title')}<br /><em>{t('visita.title.em')}</em></h2>
        <p className="reveal">{t('visita.desc')}</p>
        <div className="visita-options reveal">
          {OPCIONES.map(op => (
            <div className="visita-option" key={op.num}>
              <span className="visita-option-num">{op.num}</span>
              <div className="visita-option-text">
                <strong>{t(op.titleKey)}</strong>
                <span>{t(op.descKey)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal">
          <BtnPrimary to="/visita">{t('visita.cta')}</BtnPrimary>
        </div>
      </div>
    </section>
  )
}

import PageHero from '../components/layout/PageHero'
import VisitaExperienciasSection from '../components/sections/VisitaExperienciasSection'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'
import { useRegisterSections } from '../context/SectionContext'

const SECTIONS = [{ id: 'visita-experiencias', label: 'Experiencias' }]

export default function VisitaBodega() {
  useRegisterSections(SECTIONS)
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t('page.visita.eyebrow')}
        title={<>{t('page.visita.title.1')}<br /><em>{t('page.visita.title.em')}</em></>}
        backgroundImage={IMAGES.visita.hero}
        imagePosition="50% 50%"
      />
      <VisitaExperienciasSection />
    </>
  )
}

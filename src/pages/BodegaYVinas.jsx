import PageHero from '../components/layout/PageHero'
import BodegaVinasSection from '../components/sections/BodegaVinasSection'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'
import { useRegisterSections } from '../context/SectionContext'

const SECTIONS = [{ id: 'bodega-vinas', label: 'Bodega y Viñas' }]

export default function BodegaYVinas() {
  useRegisterSections(SECTIONS)
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t('page.bodega.eyebrow')}
        title={
          <>
            {t('page.bodega.title.1')}
            <br />
            <em>{t('page.bodega.title.em')}</em>
          </>
        }
        backgroundImage={IMAGES.bodega.hero}
        imagePosition="50% 60%"
      />
      <BodegaVinasSection />
    </>
  )
}

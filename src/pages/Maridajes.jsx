import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/layout/PageHero'
import MaridajesSection from '../components/sections/MaridajesSection'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'

export default function Maridajes() {
  useScrollReveal()
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t('page.maridajes.eyebrow')}
        title={<>{t('page.maridajes.title.1')}<br /><em>{t('page.maridajes.title.em')}</em></>}
        backgroundImage={IMAGES.tienda.hero}
        imagePosition="50% 60%"
      />
      <MaridajesSection />
    </>
  )
}

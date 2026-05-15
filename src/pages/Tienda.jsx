import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/layout/PageHero'
import TiendaSection from '../components/sections/TiendaSection'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'

export default function Tienda() {
  useScrollReveal()
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t('page.tienda.eyebrow')}
        title={<>{t('page.tienda.title.1')}<br /><em>{t('page.tienda.title.em')}</em></>}
        backgroundImage={IMAGES.tienda.hero}
        imagePosition="50% 40%"
      />
      <TiendaSection />
    </>
  )
}

import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/layout/PageHero'
import AvisoLegalSection from '../components/sections/AvisoLegalSection'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'

export default function AvisoLegal() {
  useScrollReveal()
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t('page.aviso.eyebrow')}
        title={<>{t('page.aviso.title.1')}<br /><em>{t('page.aviso.title.em')}</em></>}
        backgroundImage={IMAGES.avisoLegal.hero}
        imagePosition="50% 40%"
      />
      <AvisoLegalSection />
    </>
  )
}

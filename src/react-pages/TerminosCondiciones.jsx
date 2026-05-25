import PageHero from '../components/layout/PageHero'
import TerminosSection from '../components/sections/TerminosSection'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'
import { usePageTitle } from '../hooks/usePageTitle'

export default function TerminosCondiciones() {
  const { t } = useLanguage()
  usePageTitle('Términos y Condiciones', 'Terms & Conditions')

  return (
    <>
      <PageHero
        eyebrow={t('page.terminos.eyebrow')}
        title={<>{t('page.terminos.title.1')}<br /><em>{t('page.terminos.title.em')}</em></>}
        backgroundImage={IMAGES.terminos.hero}
        imagePosition="50% 40%"
      />
      <TerminosSection />
    </>
  )
}

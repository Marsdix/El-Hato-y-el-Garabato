import PageHero from '../components/layout/PageHero'
import ContactoSection from '../components/sections/ContactoSection'
import MapSection from '../components/sections/MapSection'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'
import { useRegisterSections } from '../context/SectionContext'

const SECTIONS = [{ id: 'contacto', label: 'Contacto' }]

export default function Contacto() {
  useRegisterSections(SECTIONS)
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t('page.contacto.eyebrow')}
        title={
          <>
            {t('page.contacto.title.1')}
            <br />
            <em>{t('page.contacto.title.em')}</em>
          </>
        }
        backgroundImage={IMAGES.contacto.hero}
        imagePosition="50% 40%"
      />
      <ContactoSection />
      <MapSection />
    </>
  )
}

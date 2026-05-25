import PageHero from '../components/layout/PageHero'
import TiendaSection from '../components/sections/TiendaSection'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'
import { usePageTitle } from '../hooks/usePageTitle'
import { useRegisterSections } from '../context/SectionContext'

const SECTIONS = [{ id: 'tienda-catalogo', label: 'Catálogo' }]

export default function Tienda() {
  useRegisterSections(SECTIONS)
  const { t } = useLanguage()
  usePageTitle('Tienda', 'Shop')

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

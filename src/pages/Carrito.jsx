import PageHero from '../components/layout/PageHero'
import CarritoSection from '../components/sections/CarritoSection'
import { IMAGES } from '../data/images'
import { useLanguage } from '../hooks/useLanguage'

export default function Carrito() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t('page.carrito.eyebrow')}
        title={<>{t('page.carrito.title.1')}<br /><em>{t('page.carrito.title.em')}</em></>}
        backgroundImage={IMAGES.vinoDetalle.hero}
        imagePosition="50% 60%"
      />
      <CarritoSection />
    </>
  )
}

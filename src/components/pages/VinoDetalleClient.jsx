import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from '../../context/LanguageContext'
import { CartProvider } from '../../context/CartContext'
import { SectionProvider } from '../../context/SectionContext'
import { useRegisterSections } from '../../context/SectionContext'
import PageHero from '../layout/PageHero'
import VinoDetalleSection from '../sections/VinoDetalleSection'
import { IMAGES } from '../../data/images'
import { useLanguage } from '../../hooks/useLanguage'

function VinoDetalleInner({ vino }) {
  useRegisterSections([])
  const { t } = useLanguage()

  return (
    <>
      <PageHero
        eyebrow={t('page.vino.eyebrow')}
        title={<>{vino.nombre}</>}
        backgroundImage={IMAGES.vinoDetalle.hero}
        imagePosition="center"
      />
      <VinoDetalleSection vino={vino} />
    </>
  )
}

export default function VinoDetalleClient({ vino }) {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CartProvider>
          <SectionProvider>
            <VinoDetalleInner vino={vino} />
          </SectionProvider>
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}

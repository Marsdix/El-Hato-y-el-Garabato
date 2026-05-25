import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from '../../context/LanguageContext'
import { CartProvider } from '../../context/CartContext'
import { SectionProvider } from '../../context/SectionContext'
import { useRegisterSections } from '../../context/SectionContext'
import Hero from '../sections/Hero'
import Press from '../sections/Press'
import Intro from '../sections/Intro'
import VinosGrid from '../sections/VinosGrid'
import Quote from '../sections/Quote'
import BodegaFullwidth from '../sections/BodegaFullwidth'
import EquipoSection from '../sections/EquipoSection'
import VisitaSection from '../sections/VisitaSection'
import ContactoSection from '../sections/ContactoSection'

const SECTIONS = [
  { id: 'hero',     label: 'Inicio' },
  { id: 'bodega',   label: 'Bodega' },
  { id: 'vinos',    label: 'Vinos' },
  { id: 'equipo',   label: 'Equipo' },
  { id: 'visita',   label: 'Visita' },
  { id: 'contacto', label: 'Contacto' },
]

function HomeInner() {
  useRegisterSections(SECTIONS)
  return (
    <>
      <Hero />
      <Press />
      <Intro />
      <VinosGrid />
      <Quote />
      <BodegaFullwidth />
      <EquipoSection />
      <VisitaSection />
      <ContactoSection />
    </>
  )
}

export default function HomeClient() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CartProvider>
          <SectionProvider>
            <HomeInner />
          </SectionProvider>
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}

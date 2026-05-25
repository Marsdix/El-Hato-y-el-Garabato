import { useRegisterSections } from '../context/SectionContext'
import Hero from '../components/sections/Hero'
import Press from '../components/sections/Press'
import Intro from '../components/sections/Intro'
import VinosGrid from '../components/sections/VinosGrid'
import Quote from '../components/sections/Quote'
import BodegaFullwidth from '../components/sections/BodegaFullwidth'
import EquipoSection from '../components/sections/EquipoSection'
import VisitaSection from '../components/sections/VisitaSection'
import ContactoSection from '../components/sections/ContactoSection'

const SECTIONS = [
  { id: 'hero',     label: 'Inicio' },
  { id: 'bodega',   label: 'Bodega' },
  { id: 'vinos',    label: 'Vinos' },
  { id: 'equipo',   label: 'Equipo' },
  { id: 'visita',   label: 'Visita' },
  { id: 'contacto', label: 'Contacto' },
]

export default function Home() {
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

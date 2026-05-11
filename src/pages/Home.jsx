import { useScrollReveal } from '../hooks/useScrollReveal'
import Hero from '../components/sections/Hero'
import Press from '../components/sections/Press'
import Intro from '../components/sections/Intro'
import VinosGrid from '../components/sections/VinosGrid'
import Quote from '../components/sections/Quote'
import BodegaFullwidth from '../components/sections/BodegaFullwidth'
import EquipoSection from '../components/sections/EquipoSection'
import VisitaSection from '../components/sections/VisitaSection'
import ContactoSection from '../components/sections/ContactoSection'

export default function Home() {
  useScrollReveal()

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

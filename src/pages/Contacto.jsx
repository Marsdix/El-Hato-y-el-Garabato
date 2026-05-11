import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/layout/PageHero'
import ContactoSection from '../components/sections/ContactoSection'
import MapSection from '../components/sections/MapSection'

export default function Contacto() {
  useScrollReveal()

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={<>Estamos<br /><em>aquí.</em></>}
        backgroundImage="https://elhatoyelgarabato.com/wp-content/uploads/2024/06/la-bodega-1024x819.jpeg"
        imagePosition="50% 40%"
      />
      <ContactoSection />
      <MapSection />
    </>
  )
}

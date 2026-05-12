import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/layout/PageHero'
import TiendaSection from '../components/sections/TiendaSection'
import { IMAGES } from '../data/images'

export default function Tienda() {
  useScrollReveal()

  return (
    <>
      <PageHero
        eyebrow="Colección de vinos"
        title={<>Nuestros<br /><em>vinos.</em></>}
        backgroundImage={IMAGES.tienda.hero}
        imagePosition="50% 40%"
      />
      <TiendaSection />
    </>
  )
}

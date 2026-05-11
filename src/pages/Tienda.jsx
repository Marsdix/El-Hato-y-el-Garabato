import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/layout/PageHero'
import TiendaSection from '../components/sections/TiendaSection'

export default function Tienda() {
  useScrollReveal()

  return (
    <>
      <PageHero
        eyebrow="Colección de vinos"
        title={<>Nuestros<br /><em>vinos.</em></>}
        backgroundImage="https://elhatoyelgarabato.com/wp-content/uploads/2024/06/vinos-1024x577.jpeg"
        imagePosition="50% 40%"
      />
      <TiendaSection />
    </>
  )
}

import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/layout/PageHero'
import BodegaVinasSection from '../components/sections/BodegaVinasSection'
import BodegaFullwidth from '../components/sections/BodegaFullwidth'

export default function BodegaYVinas() {
  useScrollReveal()

  return (
    <>
      <PageHero
        eyebrow="Bodega y Viñas"
        title={<>Arribes del Duero.<br /><em>Duero Internacional.</em></>}
        backgroundImage="https://elhatoyelgarabato.com/wp-content/uploads/2024/09/bodega-vina.jpg"
        imagePosition="50% 60%"
      />
      <BodegaVinasSection />
      <BodegaFullwidth />
    </>
  )
}

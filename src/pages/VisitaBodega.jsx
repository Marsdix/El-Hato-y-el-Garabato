import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/layout/PageHero'
import VisitaExperienciasSection from '../components/sections/VisitaExperienciasSection'
import { IMAGES } from '../data/images'

export default function VisitaBodega() {
  useScrollReveal()

  return (
    <>
      <PageHero
        eyebrow="Enoturismo"
        title={<>Reserva tu<br /><em>visita.</em></>}
        backgroundImage={IMAGES.visita.hero}
        imagePosition="50% 50%"
      />
      <VisitaExperienciasSection />
    </>
  )
}

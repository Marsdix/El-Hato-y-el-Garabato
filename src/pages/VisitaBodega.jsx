import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/layout/PageHero'
import VisitaExperienciasSection from '../components/sections/VisitaExperienciasSection'

export default function VisitaBodega() {
  useScrollReveal()

  return (
    <>
      <PageHero
        eyebrow="Enoturismo"
        title={<>Reserva tu<br /><em>visita.</em></>}
        backgroundImage="https://elhatoyelgarabato.com/wp-content/uploads/2024/09/DSC_6673-1.jpg"
        imagePosition="50% 50%"
      />
      <VisitaExperienciasSection />
    </>
  )
}

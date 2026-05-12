import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/layout/PageHero'
import TerminosSection from '../components/sections/TerminosSection'
import { IMAGES } from '../data/images'

export default function TerminosCondiciones() {
  useScrollReveal()
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Términos y<br /><em>condiciones.</em></>}
        backgroundImage={IMAGES.terminos.hero}
        imagePosition="50% 40%"
      />
      <TerminosSection />
    </>
  )
}

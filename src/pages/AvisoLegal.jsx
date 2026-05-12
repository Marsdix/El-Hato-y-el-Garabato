import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/layout/PageHero'
import AvisoLegalSection from '../components/sections/AvisoLegalSection'
import { IMAGES } from '../data/images'

export default function AvisoLegal() {
  useScrollReveal()
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Aviso<br /><em>legal.</em></>}
        backgroundImage={IMAGES.avisoLegal.hero}
        imagePosition="50% 40%"
      />
      <AvisoLegalSection />
    </>
  )
}

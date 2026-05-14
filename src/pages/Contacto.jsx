import { useScrollReveal } from "../hooks/useScrollReveal";
import PageHero from "../components/layout/PageHero";
import ContactoSection from "../components/sections/ContactoSection";
import MapSection from "../components/sections/MapSection";
import { IMAGES } from "../data/images";

export default function Contacto() {
  useScrollReveal();

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title={
          <>
            Estamos
            <br />
            <em>aquí.</em>
          </>
        }
        backgroundImage={IMAGES.contacto.hero}
        imagePosition="50% 40%"
      />
      <ContactoSection />
      <MapSection />
    </>
  );
}

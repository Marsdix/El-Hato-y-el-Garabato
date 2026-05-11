// Mapa de Google Maps embebido sin API key.
// Para actualizar la ubicación, cambiar el parámetro q en el src del iframe.

export default function MapSection() {
  return (
    <section className="map-section" aria-label="Localización de la bodega">
      <iframe
        src="https://maps.google.com/maps?q=Calle+Palazuelo+4,+49230+Formariz,+Zamora,+España&t=&z=15&ie=UTF8&iwloc=&output=embed"
        title="El Hato y el Garabato — Calle Palazuelo 4, Formariz, Zamora"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  )
}

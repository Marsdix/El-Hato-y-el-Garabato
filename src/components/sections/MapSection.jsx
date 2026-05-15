import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const LAT  = 41.34664
const LNG  = -6.29119
const ZOOM = 15

const TILES = {
  light: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  dark:  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
}
const ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright" tabindex="-1">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" tabindex="-1">CARTO</a>'

function getTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export default function MapSection() {
  const containerRef = useRef(null)
  const mapRef       = useRef(null)
  const tileRef      = useRef(null)

  useEffect(() => {
    if (mapRef.current) return

    const map = L.map(containerRef.current, {
      center: [LAT, LNG],
      zoom: ZOOM,
      scrollWheelZoom: false,
      zoomControl: true,
    })
    mapRef.current = map

    const applyTile = (theme) => {
      if (tileRef.current) tileRef.current.remove()
      tileRef.current = L.tileLayer(TILES[theme], {
        attribution: ATTR,
        subdomains: 'abcd',
        maxZoom: 20,
      }).addTo(map)
    }

    applyTile(getTheme())

    const observer = new MutationObserver(() => applyTile(getTheme()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    const icon = L.divIcon({
      className: '',
      html: '<div class="map-pin"></div>',
      iconSize:    [22, 22],
      iconAnchor:  [11, 22],
      popupAnchor: [0, -24],
    })

    L.marker([LAT, LNG], { icon })
      .addTo(map)
      .bindPopup(
        '<p class="map-popup-title">El Hato y el Garabato</p>' +
        '<p class="map-popup-addr">Calle Palazuelo 4<br>49230 Formariz · Zamora</p>'
      )

    return () => {
      observer.disconnect()
      map.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <section className="map-section" aria-label="Localización de la bodega">
      <div className="map-location-band">
        <span className="map-band-dot">✦</span>
        <span className="map-band-text">Arribes del Duero · Zamora · España</span>
        <span className="map-band-dot">✦</span>
      </div>
      <div className="map-wrapper">
        <div ref={containerRef} className="map-leaflet" />
        <a
          href={`https://www.google.com/maps?q=${LAT},${LNG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="map-gmaps-btn"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Abrir en Google Maps
        </a>
      </div>
    </section>
  )
}

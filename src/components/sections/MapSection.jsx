import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useLanguage } from '../../hooks/useLanguage'

const LAT  = 41.34664
const LNG  = -6.29119
const ZOOM = 17

const TILE_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
const ATTR     = '&copy; <a href="https://www.openstreetmap.org/copyright" tabindex="-1">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" tabindex="-1">CARTO</a>'

export default function MapSection() {
  const { t } = useLanguage()
  const containerRef = useRef(null)
  const mapRef       = useRef(null)
  const markerRef    = useRef(null)

  // Create map once on mount
  useEffect(() => {
    if (mapRef.current) return

    const map = L.map(containerRef.current, {
      center: [LAT, LNG],
      zoom: ZOOM,
      scrollWheelZoom: false,
      zoomControl: true,
    })
    mapRef.current = map

    L.tileLayer(TILE_URL, {
      attribution: ATTR,
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(map)

    const icon = L.divIcon({
      className: '',
      html: '<div class="map-pin"></div>',
      iconSize:    [22, 22],
      iconAnchor:  [11, 22],
      popupAnchor: [0, -24],
    })

    markerRef.current = L.marker([LAT, LNG], { icon }).addTo(map)
    markerRef.current.bindPopup('')

    return () => {
      map.remove()
      mapRef.current   = null
      markerRef.current = null
    }
  }, [])

  // Update popup content when language changes
  useEffect(() => {
    if (!markerRef.current) return
    markerRef.current.getPopup().setContent(
      `<p class="map-popup-title">${t('map.popup.title')}</p>` +
      `<p class="map-popup-addr">${t('map.popup.addr')}</p>`
    )
  }, [t])

  return (
    <section className="map-section" aria-label={t('map.aria')}>
      <div className="map-location-band">
        <span className="map-band-dot">✦</span>
        <span className="map-band-text">{t('map.band')}</span>
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
          {t('map.gmaps')}
        </a>
      </div>
    </section>
  )
}

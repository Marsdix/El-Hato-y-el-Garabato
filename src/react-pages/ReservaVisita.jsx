import { useState } from 'react'
import PageHero from '../components/layout/PageHero'
import ScrollReveal from '../components/ui/ScrollReveal'
import AnimatedDivider from '../components/ui/AnimatedDivider'
import GoldLine from '../components/ui/GoldLine'
import { IMAGES } from '../data/images'
import { EXPERIENCIAS } from '../data/visitas'
import { useLanguage } from '../hooks/useLanguage'
import { usePageTitle } from '../hooks/usePageTitle'
import { useRegisterSections } from '../context/SectionContext'
import { fadeLeft, fadeRight } from '../animations/variants'

const SECTIONS = [{ id: 'reserva-form', label: 'Reserva' }]

const COPY = {
  bodega: {
    duracion: { es: '1 hora', en: '1 hour' },
    incluye:  { es: 'Cata guiada en bodega con Jose o Liliana', en: 'Guided tasting at the winery with Jose or Liliana' },
    hero:     { es: 'Visita Bodega', en: 'Winery Visit' },
  },
  'vina-bodega': {
    duracion: { es: '2 horas', en: '2 hours' },
    incluye:  { es: 'Visita al viñedo + cata en bodega', en: 'Vineyard visit + tasting at the winery' },
    hero:     { es: 'Visita Viña y Bodega', en: 'Vineyard & Winery Visit' },
  },
}

export default function ReservaVisita({ tipo }) {
  useRegisterSections(SECTIONS)
  const { t, language } = useLanguage()

  const exp  = EXPERIENCIAS.find(e => e.id === (tipo === 'bodega' ? 'visita-bodega' : 'visita-vina-bodega'))
  const copy = COPY[tipo]

  usePageTitle(
    tipo === 'bodega' ? 'Reserva Visita Bodega' : 'Reserva Visita Viña y Bodega',
    tipo === 'bodega' ? 'Book Winery Visit'      : 'Book Vineyard & Winery Visit',
  )

  const today = new Date().toISOString().split('T')[0]

  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '', fecha: '', personas: 1, mensaje: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const setPersonas = delta =>
    setForm(prev => ({ ...prev, personas: Math.max(1, Math.min(20, prev.personas + delta)) }))

  const total = exp ? exp.precio * form.personas : 0

  const handleSubmit = async e => {
    e.preventDefault()
    const id = import.meta.env.VITE_FORMSPREE_ID
    const payload = {
      ...form,
      tipo_visita: exp ? t(exp.titulo) : tipo,
      precio_total: `${total}€`,
    }
    if (id) {
      setStatus('sending')
      try {
        const res = await fetch(`https://formspree.io/f/${id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        setStatus(res.ok ? 'success' : 'error')
      } catch {
        setStatus('error')
      }
    } else {
      const subject = encodeURIComponent(`Reserva: ${exp ? t(exp.titulo) : tipo}`)
      const body = encodeURIComponent(
        `Nombre: ${form.nombre}\nEmail: ${form.email}\nTeléfono: ${form.telefono || '—'}\nFecha: ${form.fecha}\nPersonas: ${form.personas}\nTotal estimado: ${total}€\n\n${form.mensaje}`,
      )
      window.location.href = `mailto:pedidos@elhatoyelgarabato.com?subject=${subject}&body=${body}`
    }
  }

  return (
    <>
      <PageHero
        eyebrow={t('page.visita.eyebrow')}
        title={<>{t({ es: 'Reserva tu', en: 'Book your' })}<br /><em>{t(copy.hero)}</em></>}
        backgroundImage={IMAGES.visita.hero}
        imagePosition="50% 60%"
      />

      <section className="reserva-section" id="reserva-form">
        <div className="reserva-inner">

          {/* Columna izquierda: detalles de la visita */}
          <ScrollReveal variant={fadeLeft} className="reserva-info" amount={0.15}>
            <AnimatedDivider />
            <p className="section-label">{t({ es: 'Detalles de la visita', en: 'Visit details' })}</p>
            {exp && <h2>{t(exp.titulo)}</h2>}
            <GoldLine />
            {exp && <p className="reserva-desc">{t(exp.descripcion)}</p>}
            <ul className="reserva-detalles">
              <li>
                <span>{t({ es: 'Duración', en: 'Duration' })}</span>
                <strong>{t(copy.duracion)}</strong>
              </li>
              <li>
                <span>{t({ es: 'Incluye', en: 'Includes' })}</span>
                <strong>{t(copy.incluye)}</strong>
              </li>
              {exp && (
                <li>
                  <span>{t({ es: 'Precio', en: 'Price' })}</span>
                  <strong>{exp.precio}€ / {t({ es: 'persona', en: 'person' })}</strong>
                </li>
              )}
            </ul>
            <p className="reserva-aviso">
              {t({ es: 'Si tu visita es en pocas horas, escríbenos al', en: 'If your visit is just a few hours away, message us at' })}{' '}
              <a href="tel:+34685501561">685 50 15 61</a>
            </p>
          </ScrollReveal>

          {/* Columna derecha: formulario */}
          <ScrollReveal variant={fadeRight} className="reserva-form-col" amount={0.15}>
            <p className="section-label">{t({ es: 'Formulario de reserva', en: 'Booking form' })}</p>

            {status === 'success' ? (
              <div className="carrito-success">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p>{t({ es: '¡Reserva enviada! Te contactaremos para confirmar.', en: 'Booking sent! We will contact you soon to confirm.' })}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="reserva-nombre" className="sr-only">{t({ es: 'Tu nombre', en: 'Your name' })}</label>
                    <input
                      id="reserva-nombre"
                      type="text" name="nombre"
                      placeholder={t({ es: 'Tu nombre *', en: 'Your name *' })}
                      value={form.nombre} onChange={handleChange}
                      maxLength={100} required disabled={status === 'sending'}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reserva-email" className="sr-only">{t({ es: 'Tu email', en: 'Your email' })}</label>
                    <input
                      id="reserva-email"
                      type="email" name="email"
                      placeholder={t({ es: 'Tu email *', en: 'Your email *' })}
                      value={form.email} onChange={handleChange}
                      maxLength={254} required disabled={status === 'sending'}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="reserva-telefono" className="sr-only">{t({ es: 'Teléfono (opcional)', en: 'Phone (optional)' })}</label>
                  <input
                    id="reserva-telefono"
                    type="tel" name="telefono"
                    placeholder={t({ es: 'Teléfono (opcional)', en: 'Phone (optional)' })}
                    value={form.telefono} onChange={handleChange}
                    maxLength={20} disabled={status === 'sending'}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="reserva-fecha" className="sr-only">{t({ es: 'Fecha de visita', en: 'Visit date' })}</label>
                    <input
                      id="reserva-fecha"
                      type="date" name="fecha"
                      value={form.fecha} onChange={handleChange}
                      min={today} required disabled={status === 'sending'}
                    />
                  </div>
                  <div className="form-group">
                    <div className="personas-counter">
                      <span className="personas-label" id="personas-label">
                        {t({ es: 'Personas', en: 'People' })}
                      </span>
                      <div className="personas-control" role="group" aria-labelledby="personas-label">
                        <button
                          type="button" className="personas-btn"
                          onClick={() => setPersonas(-1)}
                          disabled={form.personas <= 1 || status === 'sending'}
                          aria-label={t({ es: 'Menos una persona', en: 'One fewer person' })}
                        >−</button>
                        <span className="personas-num" aria-live="polite" aria-atomic="true">{form.personas}</span>
                        <button
                          type="button" className="personas-btn"
                          onClick={() => setPersonas(1)}
                          disabled={form.personas >= 20 || status === 'sending'}
                          aria-label={t({ es: 'Más una persona', en: 'One more person' })}
                        >+</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="reserva-mensaje" className="sr-only">{t({ es: 'Comentarios o preguntas', en: 'Comments or questions' })}</label>
                  <textarea
                    id="reserva-mensaje"
                    name="mensaje" rows="4"
                    placeholder={t({ es: 'Comentarios o preguntas (opcional)', en: 'Comments or questions (optional)' })}
                    value={form.mensaje} onChange={handleChange}
                    maxLength={1000} disabled={status === 'sending'}
                  />
                </div>

                {exp && (
                  <div className="reserva-total">
                    <span>
                      {form.personas} {t({ es: 'persona', en: 'person' })}{form.personas > 1 ? 's' : ''} × {exp.precio}€
                    </span>
                    <strong>{total}€ {t({ es: 'total', en: 'total' })}</strong>
                  </div>
                )}

                {status === 'error' && (
                  <p className="carrito-error">
                    {t({ es: 'Error al enviar. Inténtalo de nuevo.', en: 'Error sending. Please try again.' })}
                  </p>
                )}

                <button
                  type="submit" className="btn-primary"
                  style={{ width: '100%', marginTop: 8 }}
                  disabled={status === 'sending'}
                >
                  {status === 'sending'
                    ? t({ es: 'Enviando…', en: 'Sending…' })
                    : t({ es: 'Enviar reserva', en: 'Send booking' })}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

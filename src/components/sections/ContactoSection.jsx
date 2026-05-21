import { useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import ScrollReveal from '../ui/ScrollReveal'
import AnimatedDivider from '../ui/AnimatedDivider'
import GoldLine from '../ui/GoldLine'
import { fadeLeft, fadeRight } from '../../animations/variants'

export default function ContactoSection() {
  const { t } = useLanguage()
  const [form, setForm]     = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    const id = import.meta.env.VITE_FORMSPREE_ID
    if (id) {
      setStatus('sending')
      try {
        const res = await fetch(`https://formspree.io/f/${id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        setStatus(res.ok ? 'success' : 'error')
      } catch {
        setStatus('error')
      }
    } else {
      const subject = encodeURIComponent(form.asunto || 'Contacto web')
      const body = encodeURIComponent(`Nombre: ${form.nombre}\nEmail: ${form.email}\n\n${form.mensaje}`)
      window.location.href = `mailto:pedidos@elhatoyelgarabato.com?subject=${subject}&body=${body}`
    }
  }

  return (
    <section className="contacto-section" id="contacto">
      <div className="contacto-inner">
        <ScrollReveal variant={fadeLeft} className="contacto-left" amount={0.15}>
          <AnimatedDivider />
          <p className="section-label">{t('contacto.label')}</p>
          <h2>{t('contacto.title.1')}<br />{t('contacto.title.2')} <em>{t('contacto.title.em')}</em></h2>
          <GoldLine />
          <div className="contact-items">
            <div className="contact-item">
              <label>{t('contacto.email.label')}</label>
              <a href="mailto:pedidos@elhatoyelgarabato.com">
                pedidos@elhatoyelgarabato.com
              </a>
            </div>
            <div className="contact-item">
              <label>{t('contacto.phone.label')}</label>
              <a href="tel:+34685501561">+34 685 50 15 61</a>
            </div>
            <div className="contact-item">
              <label>{t('contacto.address.label')}</label>
              <p>{t('contacto.address.value')}</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant={fadeRight} className="contacto-right" amount={0.15}>
          <p className="section-label">{t('contacto.form.label')}</p>

          {status === 'success' ? (
            <div className="carrito-success">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <p>{t('contacto.form.success')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text" name="nombre" placeholder={t('contacto.form.nombre')}
                    value={form.nombre} onChange={handleChange}
                    maxLength={100} required disabled={status === 'sending'}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email" name="email" placeholder={t('contacto.form.email')}
                    value={form.email} onChange={handleChange}
                    maxLength={254} required disabled={status === 'sending'}
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text" name="asunto" placeholder={t('contacto.form.asunto')}
                  value={form.asunto} onChange={handleChange}
                  maxLength={150} disabled={status === 'sending'}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="mensaje" rows="5" placeholder={t('contacto.form.mensaje')}
                  value={form.mensaje} onChange={handleChange}
                  maxLength={2000} required disabled={status === 'sending'}
                />
              </div>
              {status === 'error' && (
                <p className="carrito-error">{t('contacto.form.error')}</p>
              )}
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: 8 }} disabled={status === 'sending'}>
                {status === 'sending' ? t('contacto.form.sending') : t('contacto.form.submit')}
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useLanguage } from '../../hooks/useLanguage'
import ScrollReveal from '../ui/ScrollReveal'
import AnimatedDivider from '../ui/AnimatedDivider'
import GoldLine from '../ui/GoldLine'

function QtyControl({ item, updateCantidad, removeItem }) {
  return (
    <div className="carrito-qty">
      <button onClick={() => updateCantidad(item.id, -1)} aria-label="Reducir cantidad">−</button>
      <span>{item.cantidad}</span>
      <button onClick={() => updateCantidad(item.id, 1)} aria-label="Aumentar cantidad">+</button>
    </div>
  )
}

export default function CarritoSection() {
  const { t } = useLanguage()
  const { items, count, total, updateCantidad, removeItem, clearCart } = useCart()
  const [form, setForm]     = useState({ nombre: '', email: '', notas: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    const id = import.meta.env.VITE_FORMSPREE_ID
    setStatus('sending')
    try {
      const pedido = items.map(i => `${i.nombre} × ${i.cantidad} (${(parseFloat(i.precio) * i.cantidad).toFixed(2)} €)`).join('\n')
      const body = { ...form, pedido, total: `${total.toFixed(2)} €` }
      if (id) {
        const res = await fetch(`https://formspree.io/f/${id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(body),
        })
        setStatus(res.ok ? 'success' : 'error')
      } else {
        setStatus('success')
      }
      if (status !== 'error') clearCart()
    } catch {
      setStatus('error')
    }
  }

  if (items.length === 0 && status !== 'success') {
    return (
      <section className="carrito-section">
        <div className="carrito-inner">
          <ScrollReveal className="carrito-empty">
            <AnimatedDivider />
            <p className="section-label">{t('carrito.title')}</p>
            <GoldLine />
            <p className="carrito-empty-msg">{t('carrito.empty')}</p>
            <Link to="/tienda" className="btn-primary">{t('carrito.empty.cta')}</Link>
          </ScrollReveal>
        </div>
      </section>
    )
  }

  if (status === 'success') {
    return (
      <section className="carrito-section">
        <div className="carrito-inner">
          <ScrollReveal className="carrito-empty">
            <AnimatedDivider />
            <p className="section-label">{t('carrito.title')}</p>
            <GoldLine />
            <div className="carrito-success">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <p>{t('carrito.form.success')}</p>
              <Link to="/tienda" className="btn-ghost">{t('carrito.empty.cta')}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    )
  }

  return (
    <section className="carrito-section">
      <div className="carrito-inner">
        <ScrollReveal className="carrito-header">
          <Link to="/tienda" className="carrito-back">{t('carrito.back')}</Link>
          <AnimatedDivider />
          <p className="section-label">{t('carrito.title')}</p>
          <GoldLine />
        </ScrollReveal>

        <div className="carrito-layout">
          {/* ── Lista de items ──────────────────────────────────── */}
          <div className="carrito-items">
            {items.map(item => (
              <div className="carrito-item" key={item.id}>
                <img src={item.imagen} alt={item.nombre} className="carrito-item-img" />
                <div className="carrito-item-info">
                  <p className="carrito-item-nombre">{item.nombre}</p>
                  <p className="carrito-item-precio">€ {parseFloat(item.precio).toFixed(2)}</p>
                </div>
                <QtyControl item={item} updateCantidad={updateCantidad} removeItem={removeItem} />
                <p className="carrito-item-subtotal">
                  € {(parseFloat(item.precio) * item.cantidad).toFixed(2)}
                </p>
                <button
                  className="carrito-item-remove"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Eliminar ${item.nombre}`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* ── Resumen + formulario ────────────────────────────── */}
          <div className="carrito-aside">
            <div className="carrito-resumen">
              <div className="carrito-resumen-row">
                <span>{t('carrito.subtotal')}</span>
                <span>€ {total.toFixed(2)}</span>
              </div>
              <div className="carrito-resumen-row carrito-envio">
                <span>{t('carrito.envio')}</span>
                <span className="carrito-envio-nota">{t('carrito.envio.nota')}</span>
              </div>
              <div className="carrito-resumen-row carrito-total">
                <span>{t('carrito.total')}</span>
                <span>€ {total.toFixed(2)}</span>
              </div>
            </div>

            <form className="carrito-form" onSubmit={handleSubmit}>
              <p className="carrito-form-title">{t('carrito.form.title')}</p>
              <div className="carrito-field">
                <label htmlFor="carrito-nombre">{t('carrito.form.nombre')}</label>
                <input
                  id="carrito-nombre"
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div className="carrito-field">
                <label htmlFor="carrito-email">{t('carrito.form.email')}</label>
                <input
                  id="carrito-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <div className="carrito-field">
                <label htmlFor="carrito-notas">{t('carrito.form.notas')}</label>
                <textarea
                  id="carrito-notas"
                  name="notas"
                  rows={3}
                  value={form.notas}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>
              {status === 'error' && (
                <p className="carrito-error">{t('carrito.form.error')}</p>
              )}
              <button type="submit" className="btn-primary carrito-submit" disabled={status === 'sending'}>
                {status === 'sending' ? t('carrito.form.sending') : t('carrito.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

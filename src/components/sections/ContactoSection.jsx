// Formulario de contacto estático.
// Para hacerlo funcional en producción, usar Formspree (https://formspree.io):
//   1. Crear cuenta y obtener el ID del formulario
//   2. Añadir VITE_FORMSPREE_ID al .env
//   3. Cambiar el <form> a: <form action={`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`} method="POST">

import { useLanguage } from '../../hooks/useLanguage'

export default function ContactoSection() {
  const { t } = useLanguage()

  return (
    <section className="contacto-section" id="contacto">
      <div className="contacto-inner">
        <div className="contacto-left reveal-left">
          <div className="divider" />
          <p className="section-label">{t('contacto.label')}</p>
          <h2>{t('contacto.title.1')}<br />{t('contacto.title.2')} <em>{t('contacto.title.em')}</em></h2>
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
              <p>Calle Palazuelo, 4<br />49230 Formariz · Zamora</p>
            </div>
          </div>
        </div>

        <div className="contacto-right reveal-right">
          <p className="section-label">{t('contacto.form.label')}</p>
          <form>
            <div className="form-row">
              <div className="form-group">
                <input type="text" name="nombre" placeholder={t('contacto.form.nombre')} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder={t('contacto.form.email')} required />
              </div>
            </div>
            <div className="form-group">
              <input type="text" name="asunto" placeholder={t('contacto.form.asunto')} />
            </div>
            <div className="form-group">
              <textarea name="mensaje" rows="5" placeholder={t('contacto.form.mensaje')} required />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: 8 }}>
              {t('contacto.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

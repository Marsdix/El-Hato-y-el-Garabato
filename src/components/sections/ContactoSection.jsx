// Formulario de contacto estático.
// Para hacerlo funcional en producción, usar Formspree (https://formspree.io):
//   1. Crear cuenta y obtener el ID del formulario
//   2. Añadir VITE_FORMSPREE_ID al .env
//   3. Cambiar el <form> a: <form action={`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`} method="POST">

export default function ContactoSection() {
  return (
    <section className="contacto-section" id="contacto">
      <div className="contacto-inner">
        <div className="contacto-left reveal-left">
          <div className="divider" />
          <p className="section-label">Estamos aquí</p>
          <h2>Hablemos<br />de <em>vino.</em></h2>
          <div className="contact-items">
            <div className="contact-item">
              <label>Correo electrónico</label>
              <a href="mailto:pedidos@elhatoyelgarabato.com">
                pedidos@elhatoyelgarabato.com
              </a>
            </div>
            <div className="contact-item">
              <label>Teléfono</label>
              <a href="tel:+34685501561">+34 685 50 15 61</a>
            </div>
            <div className="contact-item">
              <label>Dirección</label>
              <p>Calle Palazuelo, 4<br />49230 Formariz · Zamora</p>
            </div>
          </div>
        </div>

        <div className="contacto-right reveal-right">
          <p className="section-label">Envíanos un mensaje</p>
          <form>
            <div className="form-row">
              <div className="form-group">
                <input type="text" name="nombre" placeholder="Nombre" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Correo electrónico" required />
              </div>
            </div>
            <div className="form-group">
              <input type="text" name="asunto" placeholder="Asunto" />
            </div>
            <div className="form-group">
              <textarea name="mensaje" rows="5" placeholder="Tu mensaje…" required />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: 8 }}>
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

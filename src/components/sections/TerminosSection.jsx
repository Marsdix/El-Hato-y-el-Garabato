import { StaggerList, StaggerItem } from '../ui/StaggerList'
import { useLanguage } from '../../hooks/useLanguage'

const SECTIONS = [
  {
    num: '01',
    title: { es: 'Objeto y ámbito', en: 'Scope and Purpose' },
    content: {
      es: (
        <>
          <p>
            Las presentes condiciones generales de contratación regularán expresamente las relaciones
            surgidas entre <strong>El Hato y el Garabato SL</strong> (en adelante HG), con domicilio
            en Zamora, y los usuarios que utilicen el portal www.elhatoyelgarabato.com, así como
            con quienes contraten los productos ofrecidos a través del mismo.
          </p>
          <p>
            HG se reserva el derecho a modificar en cualquier momento, sin aviso previo, el diseño,
            desarrollo y condiciones del portal. Las modificaciones serán publicadas con antelación
            suficiente para que los usuarios puedan conocerlas antes de su visita o adquisición.
          </p>
          <p>
            Estas condiciones han sido elaboradas de conformidad con la Ley 7/1998 sobre Condiciones
            Generales de la Contratación, la Ley 26/1984 General para la Defensa de Consumidores y
            Usuarios, la Ley 7/1996 de Ordenación del Comercio Minorista, y demás disposiciones legales
            aplicables.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            These general terms and conditions expressly govern the relationships between{' '}
            <strong>El Hato y el Garabato SL</strong> (hereinafter HG), with registered address in
            Zamora, Spain, and the users of the portal www.elhatoyelgarabato.com, as well as those
            who purchase products through it.
          </p>
          <p>
            HG reserves the right to modify at any time, without prior notice, the design, development
            and conditions of the portal. Modifications will be published sufficiently in advance for
            users to review them before visiting or making a purchase.
          </p>
          <p>
            These conditions have been drawn up in accordance with Spanish Law 7/1998 on General
            Contracting Conditions, Law 26/1984 for the Protection of Consumers and Users, Law 7/1996
            on Retail Trade, and other applicable legal provisions.
          </p>
        </>
      ),
    },
  },
  {
    num: '02',
    title: { es: 'Productos y sistema de compra', en: 'Products and Purchasing System' },
    content: {
      es: (
        <>
          <p>
            Los productos ofertados en el portal, junto con sus características y precios, aparecerán en
            pantalla. Los gastos de envío al domicilio del usuario serán siempre por cuenta del comprador.
            Los precios indicados están en euros e incluyen el IVA vigente, salvo error mecanográfico.
          </p>
          <p>
            Para adquirir un producto, el usuario deberá añadirlo a la cesta de compra según las
            indicaciones en pantalla, cumplimentar el formulario de pedido y enviarlo a HG, lo que supone
            la aceptación de todas las presentes condiciones.
          </p>
          <ul>
            <li>Los usuarios deben ser mayores de dieciocho (18) años para realizar compras.</li>
            <li>
              Una vez efectuada la compra, HG remitirá la factura correspondiente antes de que
              transcurran treinta (30) días desde la ejecución de la misma.
            </li>
            <li>
              La confirmación de pedido remitida por HG no tendrá validez como factura, únicamente
              como comprobante de compra.
            </li>
          </ul>
        </>
      ),
      en: (
        <>
          <p>
            Products offered on the portal, along with their characteristics and prices, will appear on
            screen. Delivery costs to the user's address are always the buyer's responsibility. Prices
            are shown in euros and include applicable VAT, unless there is a typographical error.
          </p>
          <p>
            To purchase a product, the user must add it to the shopping basket as indicated on screen,
            complete the order form and submit it to HG, which constitutes acceptance of all these
            conditions.
          </p>
          <ul>
            <li>Users must be over eighteen (18) years of age to make purchases.</li>
            <li>
              Once a purchase is made, HG will issue the corresponding invoice within thirty (30) days
              of its execution.
            </li>
            <li>
              The order confirmation sent by HG shall not constitute an invoice, but only a proof of
              purchase.
            </li>
          </ul>
        </>
      ),
    },
  },
  {
    num: '03',
    title: { es: 'Pago, entrega y desistimiento', en: 'Payment, Delivery and Withdrawal' },
    content: {
      es: (
        <>
          <p>
            El pago del precio de los bienes y de los gastos de envío podrá realizarse mediante tarjeta
            de crédito o PayPal. En ningún momento HG almacenará datos de tarjeta en el servidor.
            HG está adscrita a la pasarela de pago{' '}
            <a href="https://www.paypal.com/es/cgi-bin/webscr?cmd=p/gen/ua/policy_pbp-outside" rel="noopener noreferrer">
              PayPal
            </a>{' '}
            con máxima seguridad.
          </p>
          <p>
            HG se obliga a entregar los bienes en el domicilio señalado en el formulario de pedido en
            el plazo más breve posible y, en todo caso, antes de treinta (30) días naturales desde la
            fecha del pedido. No se realizan entregas en apartados de correos ni locutorios.
          </p>
          <p>
            El usuario-comprador dispondrá de un plazo de <strong>siete (7) días hábiles</strong> desde
            la recepción de los bienes para resolver la compraventa sin penalización, exclusivamente en
            los casos en que el producto no se ajuste al pedido realizado y nunca por rotura o descuido
            del cliente. Las devoluciones se abonarán íntegramente en un plazo máximo de treinta días.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            Payment for goods and delivery costs may be made by credit card or PayPal. At no time will
            HG store card details on its server. HG uses the{' '}
            <a href="https://www.paypal.com/es/cgi-bin/webscr?cmd=p/gen/ua/policy_pbp-outside" rel="noopener noreferrer">
              PayPal
            </a>{' '}
            payment gateway with maximum security.
          </p>
          <p>
            HG undertakes to deliver goods to the address specified in the order form as soon as
            possible and, in any event, within thirty (30) calendar days from the order date. Deliveries
            to PO boxes are not available.
          </p>
          <p>
            The buyer has a period of <strong>seven (7) working days</strong> from receipt of goods to
            cancel the purchase without penalty, exclusively in cases where the product does not match
            the order placed and never due to damage or negligence on the part of the customer. Refunds
            will be paid in full within a maximum of thirty days.
          </p>
        </>
      ),
    },
  },
  {
    num: '04',
    title: { es: 'Política de protección de datos', en: 'Data Protection Policy' },
    content: {
      es: (
        <>
          <p>
            De acuerdo con la Ley Orgánica 15/1999 de Protección de Datos de Carácter Personal, HG
            informa al usuario de la existencia de un fichero automatizado de datos personales creado
            con los datos obtenidos en el portal, con las finalidades de información y comercialización
            de los productos, así como la realización de actividades promocionales de su interés.
          </p>
          <p>
            El usuario acepta expresamente la inclusión de los datos recabados durante la navegación en
            dicho fichero. HG se compromete a respetar su confidencialidad, utilizarlos exclusivamente
            para los fines indicados y adoptar todas las medidas para evitar su alteración, pérdida o
            acceso no autorizado.
          </p>
          <p>
            Para ejercitar los derechos de acceso, rectificación, cancelación u oposición reconocidos
            en la Ley, el usuario puede dirigirse a{' '}
            <a href="mailto:jose@elhatoyelgarabato.com">jose@elhatoyelgarabato.com</a>.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            In accordance with Spanish Organic Law 15/1999 on Personal Data Protection, HG informs
            users of the existence of an automated personal data file created with data obtained via the
            portal, for the purposes of product information and marketing, as well as promotional
            activities of interest to the user.
          </p>
          <p>
            The user expressly agrees to the inclusion of data collected during browsing in said file.
            HG undertakes to respect its confidentiality, use it solely for the stated purposes, and
            take all measures to prevent its alteration, loss or unauthorised access.
          </p>
          <p>
            To exercise the rights of access, rectification, cancellation or objection recognised by
            law, the user may contact{' '}
            <a href="mailto:jose@elhatoyelgarabato.com">jose@elhatoyelgarabato.com</a>.
          </p>
        </>
      ),
    },
  },
  {
    num: '05',
    title: { es: 'Propiedad intelectual e industrial', en: 'Intellectual and Industrial Property' },
    content: {
      es: (
        <>
          <p>
            Todos los contenidos del portal — diseños, textos, gráficos, logos, iconos, software, nombres
            comerciales y marcas — están sujetos a derechos de propiedad intelectual e industrial de HG
            o de terceros que han autorizado su inclusión.
          </p>
          <p>
            Queda expresamente prohibida la reproducción, distribución, comunicación pública o modificación
            no autorizada de dichos contenidos. No se entenderá concedida licencia alguna sobre los mismos
            sin autorización expresa de HG.
          </p>
          <p>
            No se podrá establecer ningún vínculo a esta web desde cualquier otra sin el previo conocimiento
            de HG.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            All portal content — designs, texts, graphics, logos, icons, software, trade names and
            trademarks — is subject to the intellectual and industrial property rights of HG or third
            parties who have authorised its inclusion.
          </p>
          <p>
            Unauthorised reproduction, distribution, public communication or modification of such
            content is expressly prohibited. No licence over the content shall be deemed to have been
            granted without HG's express authorisation.
          </p>
          <p>
            No link to this website may be established from any other website without HG's prior
            knowledge.
          </p>
        </>
      ),
    },
  },
  {
    num: '06',
    title: { es: 'Responsabilidad', en: 'Liability' },
    content: {
      es: (
        <>
          <p>
            HG únicamente responderá de los daños que el usuario pueda sufrir cuando sean imputables
            a una actuación dolosa de la misma. El usuario reconoce que la utilización del portal y la
            adquisición de productos se realiza bajo su entera responsabilidad.
          </p>
          <p>HG no se hace responsable de los perjuicios derivados de:</p>
          <ul>
            <li>Interferencias, virus informáticos o averías ajenas a HG en el sistema electrónico.</li>
            <li>Retrasos o bloqueos causados por deficiencias o sobrecargas de Internet.</li>
            <li>Daños causados por terceras personas mediante intromisiones ilegítimas.</li>
            <li>La imposibilidad de dar el servicio por causas no imputables a HG o por fuerza mayor.</li>
          </ul>
        </>
      ),
      en: (
        <>
          <p>
            HG shall only be liable for damages suffered by the user where attributable to HG's own
            wilful misconduct. The user acknowledges that use of the portal and purchase of products is
            entirely at their own risk.
          </p>
          <p>HG accepts no responsibility for losses arising from:</p>
          <ul>
            <li>Interference, computer viruses or faults beyond HG's control in the electronic system.</li>
            <li>Delays or blockages caused by deficiencies or overloads on the Internet.</li>
            <li>Damage caused by third parties through unlawful interference.</li>
            <li>The impossibility of providing the service due to reasons not attributable to HG or to force majeure.</li>
          </ul>
        </>
      ),
    },
  },
  {
    num: '07',
    title: { es: 'Obligaciones del usuario', en: 'User Obligations' },
    content: {
      es: (
        <>
          <p>
            El usuario se obliga a cumplir las presentes condiciones, a obrar conforme a la ley y las
            buenas costumbres, y a abstenerse de utilizar el portal de cualquier forma que pueda
            impedir o deteriorar su normal funcionamiento.
          </p>
          <p>En particular, el usuario se compromete a:</p>
          <ul>
            <li>Proporcionar datos veraces en los formularios de pedido o registro y mantenerlos actualizados.</li>
            <li>No difundir contenido difamatorio, obsceno, amenazador o que incite a la discriminación.</li>
            <li>No introducir virus, código malicioso o cualquier instrumento que cause daños en el portal.</li>
            <li>Custodiar adecuadamente su nombre de usuario y contraseña, sin cederlos a terceros.</li>
            <li>No utilizar identidades falsas ni suplantar la identidad de otros usuarios.</li>
            <li>No realizar actividades publicitarias o comerciales no autorizadas a través del portal.</li>
          </ul>
        </>
      ),
      en: (
        <>
          <p>
            The user agrees to comply with these conditions, to act in accordance with the law and good
            practice, and to refrain from using the portal in any way that may prevent or impair its
            normal operation.
          </p>
          <p>In particular, the user undertakes to:</p>
          <ul>
            <li>Provide accurate data in order or registration forms and keep it up to date.</li>
            <li>Not disseminate defamatory, obscene, threatening or discriminatory content.</li>
            <li>Not introduce viruses, malicious code or any instrument that causes damage to the portal.</li>
            <li>Safeguard their username and password appropriately, without passing them on to third parties.</li>
            <li>Not use false identities or impersonate other users.</li>
            <li>Not carry out unauthorised advertising or commercial activities through the portal.</li>
          </ul>
        </>
      ),
    },
  },
]

const INTRO = {
  es: 'Las presentes condiciones generales de contratación regulan expresamente las relaciones entre El Hato y el Garabato y los usuarios que utilicen este portal o contraten sus productos. La utilización del portal supone la aceptación sin reservas de todas y cada una de estas condiciones.',
  en: 'These general terms and conditions expressly govern the relationships between El Hato y el Garabato and users of this portal or purchasers of its products. Use of the portal constitutes unreserved acceptance of each and every one of these conditions.',
}

export default function TerminosSection() {
  const { language } = useLanguage()
  const pick = obj => language === 'en' ? obj.en : obj.es

  return (
    <section className="legal-section">
      <p className="legal-intro">{pick(INTRO)}</p>
      <StaggerList className="legal-cards" as="div" amount={0.1}>
        {SECTIONS.map(({ num, title, content }) => (
          <StaggerItem key={num} className="legal-card" as="div">
            <div className="legal-card-header">
              <span className="legal-card-num">{num}</span>
              <h3 className="legal-card-title">{pick(title)}</h3>
            </div>
            <div className="legal-card-body">{pick(content)}</div>
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  )
}

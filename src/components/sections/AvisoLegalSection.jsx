import { StaggerList, StaggerItem } from '../ui/StaggerList'
import { useLanguage } from '../../hooks/useLanguage'

const SECTIONS = [
  {
    num: "01",
    title: { es: "Condiciones generales", en: "General Terms" },
    content: {
      es: (
        <p>
          El acceso a www.elhatoyelgarabato.com y la utilización de sus contenidos
          implica la aceptación de las condiciones generales de uso y de las
          advertencias legales que a continuación se especifican.
        </p>
      ),
      en: (
        <p>
          Access to www.elhatoyelgarabato.com and use of its contents implies
          acceptance of the general terms of use and legal notices set out below.
        </p>
      ),
    },
  },
  {
    num: "02",
    title: { es: "Propiedad del sitio web", en: "Website Ownership" },
    content: {
      es: (
        <>
          <p>
            En cumplimiento de lo previsto en la Ley 34/2002, de 11 de julio, de
            Servicios de la Sociedad de la Información y de Comercio Electrónico,
            se pone en conocimiento de los usuarios los siguientes datos de
            información general:
          </p>
          <ul>
            <li>
              El presente portal constituye el Sitio Oficial en Internet de la
              empresa <strong>El Hato y el Garabato SL</strong>, en adelante HG,
              con <strong>CIF B49288988</strong>, inscrita en el Registro
              Mercantil de Zamora el 14 de octubre de 2015 con el número de
              entrada 1/2015/1974.
            </li>
            <li>
              Los usuarios podrán establecer comunicación directa con HG a través
              de{" "}
              <a href="mailto:liliana@elhatoyelgarabato.com">
                liliana@elhatoyelgarabato.com
              </a>{" "}
              o bien por correo postal a C/ Palazuelo, 4 — 49230 Formariz, Zamora.
            </li>
          </ul>
        </>
      ),
      en: (
        <>
          <p>
            In compliance with Spanish Law 34/2002 of 11 July on Information
            Society Services and Electronic Commerce, the following general
            information is provided:
          </p>
          <ul>
            <li>
              This portal is the official website of{" "}
              <strong>El Hato y el Garabato SL</strong>, hereinafter HG, with
              Tax ID (CIF) <strong>B49288988</strong>, registered in the
              Mercantile Registry of Zamora on 14 October 2015 under entry
              number 1/2015/1974.
            </li>
            <li>
              Users may contact HG directly at{" "}
              <a href="mailto:liliana@elhatoyelgarabato.com">
                liliana@elhatoyelgarabato.com
              </a>{" "}
              or by post at C/ Palazuelo, 4 — 49230 Formariz, Zamora, Spain.
            </li>
          </ul>
        </>
      ),
    },
  },
  {
    num: "03",
    title: { es: "Condiciones de uso", en: "Terms of Use" },
    content: {
      es: (
        <>
          <p>
            La información contenida en este portal podrá ser modificada y
            actualizada por HG, sin necesidad de previo aviso, tanto en lo
            referente a su contenido como en cuanto a su diseño y presentación.
          </p>
          <p>
            HG no se hace responsable del uso de terceros de la información
            contenida, ni de los contenidos accesibles mediante enlaces o
            documentos existentes en otros dominios.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            Information on this portal may be modified and updated by HG without
            prior notice, both in terms of its content and its design and
            presentation.
          </p>
          <p>
            HG is not responsible for third-party use of the information
            contained herein, nor for the contents accessible via links or
            documents hosted in other domains.
          </p>
        </>
      ),
    },
  },
  {
    num: "04",
    title: { es: "Propiedad intelectual", en: "Intellectual Property" },
    content: {
      es: (
        <>
          <p>
            HG es titular de los derechos de propiedad intelectual del presente
            portal (contenidos, diseño, estructura de navegación, etc.) salvo
            expresa referencia en otro sentido. Las marcas o signos distintivos
            están igualmente protegidos por la legislación vigente.
          </p>
          <p>
            Los contenidos presentes en el blog de HG se publican bajo{" "}
            <a
              href="http://creativecommons.org/licenses/by-nc-sa/3.0/es/"
              rel="noopener noreferrer"
            >
              Licencia Creative Commons — Reconocimiento-No comercial-Compartir
              bajo la misma licencia 3.0 España
            </a>
            .
          </p>
        </>
      ),
      en: (
        <>
          <p>
            HG holds the intellectual property rights of this portal (content,
            design, navigation structure, etc.) unless expressly stated
            otherwise. Trademarks and distinctive signs are equally protected
            under applicable law.
          </p>
          <p>
            Content published on HG's blog is released under a{" "}
            <a
              href="http://creativecommons.org/licenses/by-nc-sa/3.0/es/"
              rel="noopener noreferrer"
            >
              Creative Commons Licence — Attribution-NonCommercial-ShareAlike
              3.0 Spain
            </a>
            .
          </p>
        </>
      ),
    },
  },
  {
    num: "05",
    title: { es: "Comentarios del blog", en: "Blog Comments" },
    content: {
      es: (
        <>
          <p>
            HG no se hace responsable de las opiniones o comentarios publicados
            por los usuarios en el blog, siendo el usuario el único y directo
            responsable de los mismos.
          </p>
          <p>
            No se aceptarán comentarios difamatorios, vejatorios, insultantes o
            contrarios a las leyes españolas, ni intentos de suplantación de
            identidad o publicación de datos personales de terceros.
          </p>
          <p>
            HG se reserva el derecho a eliminar los comentarios que no se ajusten
            a estas condiciones.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            HG is not responsible for opinions or comments posted by users on
            the blog; the user alone bears direct responsibility for such
            content.
          </p>
          <p>
            Defamatory, abusive, insulting or unlawful comments, as well as
            identity impersonation or publication of third-party personal data,
            will not be accepted.
          </p>
          <p>
            HG reserves the right to remove comments that do not comply with
            these conditions.
          </p>
        </>
      ),
    },
  },
  {
    num: "06",
    title: { es: "Protección de datos personales", en: "Personal Data Protection" },
    content: {
      es: (
        <>
          <p>
            De acuerdo con la Ley 15/1999 de Protección de Datos, los usuarios no
            están obligados a proporcionar datos personales salvo que
            voluntariamente deseen enviar una consulta a través del formulario de
            contacto. En ese caso, prestan su consentimiento a HG para su
            inclusión en el fichero de datos.
          </p>
          <p>
            HG se compromete a no utilizar los datos con un fin distinto al
            recogido, ni a cederlos a terceros sin consentimiento previo. Para
            ejercer los derechos de acceso, rectificación, cancelación u
            oposición, contactar en{" "}
            <a href="mailto:jose@elhatoyelgarabato.com">
              jose@elhatoyelgarabato.com
            </a>{" "}
            indicando en el asunto la palabra <em>Baja</em>.
          </p>
        </>
      ),
      en: (
        <>
          <p>
            In accordance with Spanish Organic Law 15/1999 on Personal Data
            Protection, users are not required to provide personal data unless
            they voluntarily choose to send a query via the contact form. In
            that case, they consent to HG including their data in its files.
          </p>
          <p>
            HG undertakes not to use the data for any purpose other than that
            stated, nor to share it with third parties without prior consent. To
            exercise rights of access, rectification, cancellation or objection,
            please contact{" "}
            <a href="mailto:jose@elhatoyelgarabato.com">
              jose@elhatoyelgarabato.com
            </a>{" "}
            with the word <em>Baja</em> in the subject line.
          </p>
        </>
      ),
    },
  },
  {
    num: "07",
    title: { es: "Legislación aplicable", en: "Applicable Law" },
    content: {
      es: (
        <p>
          Será de aplicación a las presentes condiciones la legislación española,
          sometiéndose cualesquiera controversias a la exclusiva jurisdicción de
          los Juzgados y Tribunales españoles.
        </p>
      ),
      en: (
        <p>
          These conditions are governed by Spanish law. Any disputes shall be
          subject to the exclusive jurisdiction of the Spanish courts and
          tribunals.
        </p>
      ),
    },
  },
  {
    num: "08",
    title: { es: "Google Analytics", en: "Google Analytics" },
    content: {
      es: (
        <p>
          Esta página web utiliza Google Analytics para analizar el uso del sitio.
          La información generada por las cookies será transmitida y archivada por
          Google. Puede rechazar el uso de cookies mediante la configuración
          apropiada de su navegador.
        </p>
      ),
      en: (
        <p>
          This website uses Google Analytics to analyse site usage. The
          information generated by cookies will be transmitted to and stored by
          Google. You may refuse the use of cookies through the appropriate
          settings in your browser.
        </p>
      ),
    },
  },
]

const INTRO = {
  es: 'El acceso y uso de este sitio web implica la aceptación de las condiciones generales y advertencias legales recogidas a continuación. Si no está de acuerdo con alguna de ellas, le rogamos que se abstenga de utilizar este portal.',
  en: 'Access to and use of this website implies acceptance of the general conditions and legal notices set out below. If you do not agree with any of them, please refrain from using this portal.',
}

export default function AvisoLegalSection() {
  const { language } = useLanguage()
  const pick = obj => language === 'en' ? obj.en : obj.es

  return (
    <section className="legal-section">
      <h2 className="sr-only">{language === 'en' ? 'Legal Notice' : 'Aviso Legal'}</h2>
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

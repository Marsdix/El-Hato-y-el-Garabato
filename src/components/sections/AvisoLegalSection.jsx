const SECTIONS = [
  {
    num: "01",
    title: "Condiciones generales",
    content: (
      <p>
        El acceso a www.elhatoyelgarabato.com y la utilización de sus contenidos
        implica la aceptación de las condiciones generales de uso y de las
        advertencias legales que a continuación se especifican.
      </p>
    ),
  },
  {
    num: "02",
    title: "Propiedad del sitio web",
    content: (
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
  },
  {
    num: "03",
    title: "Condiciones de uso",
    content: (
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
  },
  {
    num: "04",
    title: "Propiedad intelectual",
    content: (
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
  },
  {
    num: "05",
    title: "Comentarios del blog",
    content: (
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
  },
  {
    num: "06",
    title: "Protección de datos personales",
    content: (
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
  },
  {
    num: "07",
    title: "Legislación aplicable",
    content: (
      <p>
        Será de aplicación a las presentes condiciones la legislación española,
        sometiéndose cualesquiera controversias a la exclusiva jurisdicción de
        los Juzgados y Tribunales españoles.
      </p>
    ),
  },
  {
    num: "08",
    title: "Google Analytics",
    content: (
      <p>
        Esta página web utiliza Google Analytics para analizar el uso del sitio.
        La información generada por las cookies será transmitida y archivada por
        Google. Puede rechazar el uso de cookies mediante la configuración
        apropiada de su navegador.
      </p>
    ),
  },
];

import { StaggerList, StaggerItem } from '../ui/StaggerList'

export default function AvisoLegalSection() {
  return (
    <section className="legal-section">
      <p className="legal-intro">
        El acceso y uso de este sitio web implica la aceptación de las
        condiciones generales y advertencias legales recogidas a continuación.
        Si no está de acuerdo con alguna de ellas, le rogamos que se abstenga de
        utilizar este portal.
      </p>
      <StaggerList className="legal-cards" as="div" amount={0.1}>
        {SECTIONS.map(({ num, title, content }) => (
          <StaggerItem key={num} className="legal-card" as="div">
            <div className="legal-card-header">
              <span className="legal-card-num">{num}</span>
              <h3 className="legal-card-title">{title}</h3>
            </div>
            <div className="legal-card-body">{content}</div>
          </StaggerItem>
        ))}
      </StaggerList>
    </section>
  );
}

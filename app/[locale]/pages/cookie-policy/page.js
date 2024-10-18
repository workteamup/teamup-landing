"use client";

import LegalPageTemplate from "@/app/components/legal-page-template";

const Heading2 = ({ children }) => {
  return (
    <h2 className="text-2xl md:text-4xl font-semibold mb-6 mt-10 text-blue-950">
      {children}
    </h2>
  );
};

const Heading3 = ({ children }) => {
  return (
    <h3 className="text-lg md:text-2xl font-semibold mb-3 mt-6 text-blue-950">
      {children}
    </h3>
  );
};

const Paragraph = ({ children }) => {
  return <p className="mt-4 mb-3 text-justify">{children}</p>;
};

const UnorderedList = ({ children }) => {
  return <ul className="list-disc pl-6 mb-3 mt-3 text-justify">{children}</ul>;
};

const ListItem = ({ children }) => {
  return <li className="mb-1">{children}</li>;
};

export default function Page() {
  return (
    <LegalPageTemplate title="Política de cookies">
      <Paragraph>
        El acceso a este Sitio Web puede implicar la utilización de cookies. Las
        cookies son pequeñas cantidades de información que se almacenan en el
        navegador utilizado por cada Usuario —en los distintos dispositivos que
        pueda utilizar para navegar— para que el servidor recuerde cierta
        información que posteriormente y únicamente el servidor que la
        implementó leerá. Las cookies facilitan la navegación, la hacen más
        amigable, y no dañan el dispositivo de navegación.
      </Paragraph>
      <Paragraph>
        Las cookies son procedimientos automáticos de recogida de información
        relativa a las preferencias determinadas por el Usuario durante su
        visita al Sitio Web con el fin de reconocerlo como Usuario, y
        personalizar su experiencia y el uso del Sitio Web, y pueden también,
        por ejemplo, ayudar a identificar y resolver errores.
      </Paragraph>
      <Paragraph>
        La información recabada a través de las cookies puede incluir la fecha y
        hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha
        estado en el Sitio Web y los sitios visitados justo antes y después del
        mismo. Sin embargo, ninguna cookie permite que esta misma pueda
        contactarse con el número de teléfono del Usuario o con cualquier otro
        medio de contacto personal. Ninguna cookie puede extraer información del
        disco duro del Usuario o robar información personal. La única manera de
        que la información privada del Usuario forme parte del archivo Cookie es
        que el usuario dé personalmente esa información al servidor.
      </Paragraph>
      <Paragraph>
        Las cookies que permiten identificar a una persona se consideran datos
        personales. Por tanto, a las mismas les será de aplicación la Política
        de Privacidad anteriormente descrita. En este sentido, para la
        utilización de las mismas será necesario el consentimiento del Usuario.
        Este consentimiento será comunicado, en base a una elección auténtica,
        ofrecido mediante una decisión afirmativa y positiva, antes del
        tratamiento inicial, removible y documentado.
      </Paragraph>
      <Heading3>Cookies propias</Heading3>
      <Paragraph>
        Son aquellas cookies que son enviadas al ordenador o dispositivo del
        Usuario y gestionadas exclusivamente por Team Up! para el mejor
        funcionamiento del Sitio Web. La información que se recaba se emplea
        para mejorar la calidad del Sitio Web y su Contenido y su experiencia
        como Usuario. Estas cookies permiten reconocer al Usuario como visitante
        recurrente del Sitio Web y adaptar el contenido para ofrecerle
        contenidos que se ajusten a sus preferencias.
      </Paragraph>
      <Heading3>Cookies de terceros</Heading3>
      <Paragraph>
        Son cookies utilizadas y gestionadas por entidades externas que
        proporcionan a Team Up! servicios solicitados por este mismo para
        mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio
        Web. Los principales objetivos para los que se utilizan cookies de
        terceros son la obtención de estadísticas de accesos y analizar la
        información de la navegación, es decir, cómo interactúa el Usuario con
        el Sitio Web.
      </Paragraph>
      <Paragraph>
        La información que se obtiene se refiere, por ejemplo, al número de
        páginas visitadas, el idioma, el lugar a la que la dirección IP desde el
        que accede el Usuario, el número de Usuarios que acceden, la frecuencia
        y reincidencia de las visitas, el tiempo de visita, el navegador que
        usan, el operador o tipo de dispositivo desde el que se realiza la
        visita. Esta información se utiliza para mejorar el Sitio Web, y
        detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o
        servicio de óptima calidad. En todo caso, la información se recopila de
        forma anónima y se elaboran informes de tendencias del Sitio Web sin
        identificar a usuarios individuales.
      </Paragraph>
      <Paragraph>
        Puede obtener más información sobre las cookies, la información sobre la
        privacidad, o consultar la descripción del tipo de cookies que se
        utiliza, sus principales características, periodo de expiración, etc. en
        el siguiente(s) enlace(s):
      </Paragraph>
      <UnorderedList>
        <ListItem>
          Google Analytics: https://developers.google.com/analytics
        </ListItem>
        <ListItem>Microsoft Clarity: https://clarity.microsoft.com/</ListItem>
      </UnorderedList>
      <Paragraph>
        La(s) entidad(es) encargada(s) del suministro de cookies podrá(n) ceder
        esta información a terceros, siempre y cuando lo exija la ley o sea un
        tercero el que procese esta información para dichas entidades.
      </Paragraph>
      <Heading3>Deshabilitar, rechazar y eliminar cookies</Heading3>
      <Paragraph>
        El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o
        parcialmente— instaladas en su dispositivo mediante la configuración de
        su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox,
        Safari, Explorer). En este sentido, los procedimientos para rechazar y
        eliminar las cookies pueden diferir de un navegador de Internet a otro.
        En consecuencia, el Usuario debe acudir a las instrucciones facilitadas
        por el propio navegador de Internet que esté utilizando. En el supuesto
        de que rechace el uso de cookies —total o parcialmente— podrá seguir
        usando el Sitio Web, si bien podrá tener limitada la utilización de
        algunas de las prestaciones del mismo.
      </Paragraph>
    </LegalPageTemplate>
  );
}

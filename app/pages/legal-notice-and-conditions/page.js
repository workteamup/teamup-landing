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
    <LegalPageTemplate title="Aviso legal y condiciones generales de uso">
      <Heading2>I. Información general</Heading2>
      <Paragraph>
        En cumplimiento con el deber de información dispuesto en la Ley 34/2002
        de Servicios de la Sociedad de la Información y el Comercio Electrónico
        (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes
        datos de información general de este sitio web:
      </Paragraph>
      <Paragraph>
        La titularidad de este sitio web, https://teamup.works, (en adelante,
        Sitio Web) la ostenta: TEAM UP TECH ESPAÑA S.L., provista de NIF:
        B56746340 e inscrita en: Registro Mercantil de Bizkaia con los
        siguientes datos registrales: Tomo 6244, folio 68, inscripción 1 con
        hoja BI-82082, cuyo representante es: Ignacio Ramos Howell, y cuyos
        datos de contacto son:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          Dirección: Alameda de Mazarredo 25, 1º, 48009 Bizkaia
        </ListItem>
        <ListItem>Teléfono de contacto: 624827931</ListItem>
        <ListItem>Email de contacto: contacto@teamup.works</ListItem>
      </UnorderedList>
      <Heading2>II. Términos y condiciones generales de uso</Heading2>
      <Heading3>El objeto de las condiciones: el sitio web</Heading3>
      <Paragraph>
        El objeto de las presentes Condiciones Generales de Uso (en adelante,
        Condiciones) es regular el acceso y la utilización del Sitio Web. A los
        efectos de las presentes Condiciones se entenderá como Sitio Web: la
        apariencia externa de los interfaces de pantalla, tanto de forma
        estática como de forma dinámica, es decir, el árbol de navegación; y
        todos los elementos integrados tanto en los interfaces de pantalla como
        en el árbol de navegación (en adelante, Contenidos) y todos aquellos
        servicios o recursos en línea que en su caso ofrezca a los Usuarios (en
        adelante, Servicios).
      </Paragraph>
      <Paragraph>
        Team Up! se reserva la facultad de modificar, en cualquier momento, y
        sin aviso previo, la presentación y configuración del Sitio Web y de los
        Contenidos y Servicios que en él pudieran estar incorporados. El Usuario
        reconoce y acepta que en cualquier momento Team Up! pueda interrumpir,
        desactivar y/o cancelar cualquiera de estos elementos que se integran en
        el Sitio Web o el acceso a los mismos.
      </Paragraph>
      <Paragraph>
        El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla
        general, es gratuito sin que el Usuario tenga que proporcionar una
        contraprestación para poder disfrutar de ello, salvo en lo relativo al
        coste de conexión a través de la red de telecomunicaciones suministrada
        por el proveedor de acceso que hubiere contratado el Usuario.
      </Paragraph>
      <Paragraph>
        La utilización de alguno de los Contenidos o Servicios del Sitio Web
        podrá hacerse mediante la suscripción o registro previo del Usuario.
      </Paragraph>
      <Heading3>El usuario</Heading3>
      <Paragraph>
        El acceso, la navegación y uso del Sitio Web, así como por los espacios
        habilitados para interactuar entre los Usuarios, y el Usuario y Team
        Up!, como los comentarios y/o espacios de blogging, confiere la
        condición de Usuario, por lo que se aceptan, desde que se inicia la
        navegación por el Sitio Web, todas las Condiciones aquí establecidas,
        así como sus ulteriores modificaciones, sin perjuicio de la aplicación
        de la correspondiente normativa legal de obligado cumplimiento según el
        caso. Dada la relevancia de lo anterior, se recomienda al Usuario
        leerlas cada vez que visite el Sitio Web.
      </Paragraph>
      <Paragraph>
        El Sitio Web de Team Up! proporciona gran diversidad de información,
        servicios y datos. El Usuario asume su responsabilidad para realizar un
        uso correcto del Sitio Web. Esta responsabilidad se extenderá a:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          Un uso de la información, Contenidos y/o Servicios y datos ofrecidos
          por Team Up! sin que sea contrario a lo dispuesto por las presentes
          Condiciones, la Ley, la moral o el orden público, o que de cualquier
          otro modo puedan suponer lesión de los derechos de terceros o del
          mismo funcionamiento del Sitio Web.
        </ListItem>
        <ListItem>
          La veracidad y licitud de las informaciones aportadas por el Usuario
          en los formularios extendidos por Team Up! para el acceso a ciertos
          Contenidos o Servicios ofrecidos por el Sitio Web. En todo caso, el
          Usuario notificará de forma inmediata a Team Up! acerca de cualquier
          hecho que permita el uso indebido de la información registrada en
          dichos formularios, tales como, pero no solo, el robo, extravío, o el
          acceso no autorizado a identificadores y/o contraseñas, con el fin de
          proceder a su inmediata cancelación.
        </ListItem>
      </UnorderedList>
      <Paragraph>
        Team Up! se reserva el derecho de retirar todos aquellos comentarios y
        aportaciones que vulneren la ley, el respeto a la dignidad de la
        persona, que sean discriminatorios, xenófobos, racistas, pornográficos,
        spamming, que atenten contra la juventud o la infancia, el orden o la
        seguridad pública o que, a su juicio, no resultaran adecuados para su
        publicación.
      </Paragraph>
      <Paragraph>
        En cualquier caso, Team Up! no será responsable de las opiniones
        vertidas por los Usuarios a través de comentarios u otras herramientas
        de blogging o de participación que pueda haber.
      </Paragraph>
      <Paragraph>
        El mero acceso a este Sitio Web no supone entablar ningún tipo de
        relación de carácter comercial entre Team Up! y el Usuario.
      </Paragraph>
      <Paragraph>
        Siempre en el respeto de la legislación vigente, este Sitio Web de Team
        Up! se dirige a todas las personas, sin importar su edad, que puedan
        acceder y/o navegar por las páginas del Sitio Web.
      </Paragraph>
      <Heading2>
        III. Acceso y navegación en el sitio web: exclusión de garantías y
        responsabilidad
      </Heading2>
      <Paragraph>
        Team Up! no garantiza la continuidad, disponibilidad y utilidad del
        Sitio Web, ni de los Contenidos o Servicios. Team Up! hará todo lo
        posible por el buen funcionamiento del Sitio Web, sin embargo, no se
        responsabiliza ni garantiza que el acceso a este Sitio Web no vaya a ser
        ininterrumpido o que esté libre de error.
      </Paragraph>
      <Paragraph>
        Tampoco se responsabiliza o garantiza que el contenido o software al que
        pueda accederse a través de este Sitio Web, esté libre de error o cause
        un daño al sistema informático (software y hardware) del Usuario. En
        ningún caso Team Up! será responsable por las pérdidas, daños o
        perjuicios de cualquier tipo que surjan por el acceso, navegación y el
        uso del Sitio Web, incluyéndose, pero no limitándose, a los ocasionados
        a los sistemas informáticos o los provocados por la introducción de
        virus.
      </Paragraph>
      <Paragraph>
        Team Up! tampoco se hace responsable de los daños que pudiesen
        ocasionarse a los usuarios por un uso inadecuado de este Sitio Web. En
        particular, no se hace responsable en modo alguno de las caídas,
        interrupciones, falta o defecto de las telecomunicaciones que pudieran
        ocurrir.
      </Paragraph>
      <Heading2>IV. Política de enlaces</Heading2>
      <Paragraph>
        Se informa que el Sitio Web de Team Up! pone o puede poner a disposición
        de los Usuarios medios de enlace (como, entre otros, links, banners,
        botones), directorios y motores de búsqueda que permiten a los Usuarios
        acceder a sitios web pertenecientes y/o gestionados por terceros.
      </Paragraph>
      <Paragraph>
        La instalación de estos enlaces, directorios y motores de búsqueda en el
        Sitio Web tiene por objeto facilitar a los Usuarios la búsqueda de y
        acceso a la información disponible en Internet, sin que pueda
        considerarse una sugerencia, recomendación o invitación para la visita
        de los mismos.
      </Paragraph>
      <Paragraph>
        Team Up! no ofrece ni comercializa por sí ni por medio de terceros los
        productos y/o servicios disponibles en dichos sitios enlazados.
      </Paragraph>
      <Paragraph>
        Asimismo, tampoco garantizará la disponibilidad técnica, exactitud,
        veracidad, validez o legalidad de sitios ajenos a su propiedad a los que
        se pueda acceder por medio de los enlaces.
      </Paragraph>
      <Paragraph>
        Team Up! en ningún caso revisará o controlará el contenido de otros
        sitios web, así como tampoco aprueba, examina ni hace propios los
        productos y servicios, contenidos, archivos y cualquier otro material
        existente en los referidos sitios enlazados.
      </Paragraph>
      <Paragraph>
        Team Up! no asume ninguna responsabilidad por los daños y perjuicios que
        pudieran producirse por el acceso, uso, calidad o licitud de los
        contenidos, comunicaciones, opiniones, productos y servicios de los
        sitios web no gestionados por Team Up! y que sean enlazados en este
        Sitio Web.
      </Paragraph>
      <Paragraph>
        El Usuario o tercero que realice un hipervínculo desde una página web de
        otro, distinto, sitio web al Sitio Web de Team Up! deberá saber que:
      </Paragraph>
      <UnorderedList>
        <ListItem>
          No se permite la reproducción —total o parcialmente— de ninguno de los
          Contenidos y/o Servicios del Sitio Web sin autorización expresa de
          Team Up!.
        </ListItem>
        <ListItem>
          No se permite tampoco ninguna manifestación falsa, inexacta o
          incorrecta sobre el Sitio Web de Team Up!, ni sobre los Contenidos y/o
          Servicios del mismo.
        </ListItem>
        <ListItem>
          A excepción del hipervínculo, el sitio web en el que se establezca
          dicho hiperenlace no contendrá ningún elemento, de este Sitio Web,
          protegido como propiedad intelectual por el ordenamiento jurídico
          español, salvo autorización expresa de Team Up!.
        </ListItem>
        <ListItem>
          El establecimiento del hipervínculo no implicará la existencia de
          relaciones entre Team Up! y el titular del sitio web desde el cual se
          realice, ni el conocimiento y aceptación de Team Up! de los
          contenidos, servicios y/o actividades ofrecidas en dicho sitio web, y
          viceversa.
        </ListItem>
      </UnorderedList>
      <Heading2>V. Propiedad intelectual e industrial</Heading2>
      <Paragraph>
        Team Up! por sí o como parte cesionaria, es titular de todos los
        derechos de propiedad intelectual e industrial del Sitio Web, así como
        de los elementos contenidos en el mismo (a título enunciativo y no
        exhaustivo, imágenes, sonido, audio, vídeo, software o textos, marcas o
        logotipos, combinaciones de colores, estructura y diseño, selección de
        materiales usados, programas de ordenador necesarios para su
        funcionamiento, acceso y uso, etc.). Serán, por consiguiente, obras
        protegidas como propiedad intelectual por el ordenamiento jurídico
        español, siéndoles aplicables tanto la normativa española y comunitaria
        en este campo, como los tratados internacionales relativos a la materia
        y suscritos por España.
      </Paragraph>
      <Paragraph>
        Todos los derechos reservados. En virtud de lo dispuesto en la Ley de
        Propiedad Intelectual, quedan expresamente prohibidas la reproducción,
        la distribución y la comunicación pública, incluida su modalidad de
        puesta a disposición, de la totalidad o parte de los contenidos de esta
        página web, con fines comerciales, en cualquier soporte y por cualquier
        medio técnico, sin la autorización de Team Up!.
      </Paragraph>
      <Paragraph>
        El Usuario se compromete a respetar los derechos de propiedad
        intelectual e industrial de Team Up!. Podrá visualizar los elementos del
        Sitio Web o incluso imprimirlos, copiarlos y almacenarlos en el disco
        duro de su ordenador o en cualquier otro soporte físico siempre y cuando
        sea, exclusivamente, para su uso personal. El Usuario, sin embargo, no
        podrá suprimir, alterar, o manipular cualquier dispositivo de protección
        o sistema de seguridad que estuviera instalado en el Sitio Web.
      </Paragraph>
      <Paragraph>
        En caso de que el Usuario o tercero considere que cualquiera de los
        Contenidos del Sitio Web suponga una violación de los derechos de
        protección de la propiedad intelectual, deberá comunicarlo
        inmediatamente a Team Up! a través de los datos de contacto del apartado
        de INFORMACIÓN GENERAL de este Aviso Legal y Condiciones Generales de
        Uso.
      </Paragraph>
      <Paragraph>
        La base legal para el tratamiento de los datos personales es el
        consentimiento. Team Up! se compromete a recabar el consentimiento
        expreso y verificable del Usuario para el tratamiento de sus datos
        personales para uno o varios fines específicos.
      </Paragraph>
      <Paragraph>
        El Usuario tendrá derecho a retirar su consentimiento en cualquier
        momento. Será tan fácil retirar el consentimiento como darlo. Como regla
        general, la retirada del consentimiento no condicionará el uso del Sitio
        Web.
      </Paragraph>
      <Paragraph>
        En las ocasiones en las que el Usuario deba o pueda facilitar sus datos
        a través de formularios para realizar consultas, solicitar información o
        por motivos relacionados con el contenido del Sitio Web, se le informará
        en caso de que la cumplimentación de alguno de ellos sea obligatoria
        debido a que los mismos sean imprescindibles para el correcto desarrollo
        de la operación realizada.
      </Paragraph>
      <Heading2>
        VI. Acciones legales, legislación aplicable y jurisdicción
      </Heading2>
      <Paragraph>
        Team Up! se reserva la facultad de presentar las acciones civiles o
        penales que considere necesarias por la utilización indebida del Sitio
        Web y Contenidos, o por el incumplimiento de las presentes Condiciones.
      </Paragraph>
      <Paragraph>
        La relación entre el Usuario y Team Up! se regirá por la normativa
        vigente y de aplicación en el territorio español. De surgir cualquier
        controversia en relación con la interpretación y/o a la aplicación de
        estas Condiciones las partes someterán sus conflictos a la jurisdicción
        ordinaria sometiéndose a los jueces y tribunales que correspondan
        conforme a derecho.
      </Paragraph>
    </LegalPageTemplate>
  );
}

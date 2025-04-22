"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByTypePage from "../../../components/new-web/solution-by-type-page";

export default function CustomOfficeSpacePage() {
  const customOfficeData = {
    hero: {
      headline: "Diseña tu Oficina Soñada—Virtualmente",
      subheadline: "Team Up! te permite construir un espacio 3D personalizado que refleja tu cultura y marca mientras fomenta las conexiones que impulsan el éxito empresarial.",
      cta: "Crea tu Sede Virtual"
    },
    importance: [
      {
        title: "Cultura",
        description: "Un espacio virtual único refuerza tus valores e identidad, creando un sentido de pertenencia incluso en equipos distribuidos."
      },
      {
        title: "Marca",
        description: "Impresiona a clientes y candidatos con un entorno 3D personalizado que muestra la personalidad e innovación de tu empresa."
      },
      {
        title: "Compromiso",
        description: "Un espacio 3D familiar y personalizado impulsa la interacción diaria al proporcionar un 'lugar' consistente para que los equipos se reúnan y colaboren."
      }
    ],
    stats: [
      {
        value: "70%",
        description: "de los trabajadores remotos desean un espacio de trabajo personalizado que se sienta conectado con la cultura de su empresa.",
        source: "Gartner Workplace Survey, 2023"
      },
      {
        value: "20%",
        description: "Las empresas con fuerte presencia visual de marca en sus espacios de trabajo ven un 20% más de alineación cultural por parte de los empleados."
      },
      {
        value: "33%",
        description: "Las organizaciones con culturas cohesivas y bien definidas ven un 33% más de retención y un 21% más de rentabilidad."
      }
    ],
    benefits: [
      {
        title: "Personalización 3D Completa",
        description: "Diseña salas virtuales, decoración y distribuciones que coincidan con el estilo de tu empresa y creen un sentido de lugar para equipos distribuidos."
      },
      {
        title: "Elementos de Marca",
        description: "Añade logos, colores y elementos temáticos para reforzar tu identidad y crear una experiencia consistente para empleados y visitantes."
      },
      {
        title: "Características Interactivas",
        description: "Incluye juegos, pizarras y centros sociales para uso diario que hacen que tu espacio virtual sea tanto funcional como hermoso."
      }
    ],
    comparisons: [
      {
        traditional: "Plataformas de oficina virtual genéricas con personalización limitada",
        advantage: "Espacios 3D completamente personalizables con elementos interactivos que se sienten únicos, atractivos y alineados con tu cultura empresarial específica."
      }
    ],
    useCases: [
      "Crea un lobby virtual personalizado para reuniones con clientes y tours de nuevos empleados que muestre los valores de tu empresa a través de elementos interactivos.",
      "Diseña una sala de descanso virtual con juegos y áreas sociales para charlas casuales que recrean las interacciones espontáneas de las oficinas físicas.",
      "Construye una sala de capacitación personalizada con herramientas 3D interactivas para sesiones de incorporación que sumergen a los nuevos empleados en tu cultura desde el primer día."
    ],
    spotlight: [
      {
        title: "Decoración Personalizada",
        description: "Elige entre cientos de diseños 3D, opciones de mobiliario y temas ambientales para crear espacios que se sientan auténticos para tu marca."
      },
      {
        title: "Integración de Marca",
        description: "Añade sin problemas tu logo, paleta de colores y elementos de marca en todo el entorno virtual para una experiencia consistente."
      },
      {
        title: "Objetos Interactivos",
        description: "Incluye herramientas útiles como pizarras, mesas de juego y pantallas multimedia que hacen que el espacio sea funcional para el trabajo diario."
      }
    ],
    testimonial: {
      quote: "Nuestro espacio personalizado en Team Up! se ha convertido en la sede digital de nuestra empresa—se siente como un hogar para nuestro equipo distribuido globalmente. Los clientes están impresionados por la experiencia de marca, y nuestros empleados sienten una conexión más fuerte con nuestra cultura. Se ha convertido en una ventaja competitiva tanto en la retención de talento como en las presentaciones a clientes.",
      author: "Jamie Rodriguez",
      position: "Director de Marketing, Future Tech Co."
    },
    futureProof: [
      {
        title: "Personalización Dinámica",
        description: "Actualiza tu oficina virtual en cualquier momento para reflejar nueva imagen de marca, crecimiento del equipo o cambios culturales sin interrupciones ni costos significativos."
      },
      {
        title: "Diseño Escalable",
        description: "Expande tu espacio 3D a medida que tu equipo crece, desde pequeñas startups hasta empresas globales, con entornos que mantienen la intimidad a cualquier escala."
      },
      {
        title: "Características Preparadas para el Futuro",
        description: "Integra herramientas emergentes como asistentes de reuniones con IA o compatibilidad con realidad aumentada, manteniendo tu oficina virtual a la vanguardia."
      }
    ],
    getStarted: {
      heading: "Comienza a diseñar tu espacio de trabajo 3D personalizado con nuestras herramientas fáciles de usar—no se necesitan habilidades de diseño.",
      description: "Crea un espacio virtual que realmente represente a tu empresa.",
      cta: "Reserva una Consulta de Espacio Personalizado"
    }
  };

  return (
    <WebLayout>
      <SolutionByTypePage typeData={customOfficeData} />
    </WebLayout>
  );
}

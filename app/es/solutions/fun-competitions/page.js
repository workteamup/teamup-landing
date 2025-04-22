"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByTypePage from "../../../components/new-web/solution-by-type-page";

export default function FunCompetitionsPage() {
  const funCompetitionsData = {
    hero: {
      headline: "Convierte el Team-Building en Diversión",
      subheadline: "Team Up! ofrece juegos competitivos divertidos en entornos 3D inmersivos que fortalecen lazos y generan alegría mientras desarrollan habilidades esenciales del equipo.",
      cta: "¡Comienza la Diversión Ahora!"
    },
    importance: [
      {
        title: "Estado de Ánimo",
        description: "Las actividades divertidas reducen el agotamiento y aumentan la felicidad creando asociaciones positivas con compañeros y trabajo."
      },
      {
        title: "Trabajo en Equipo",
        description: "Los juegos fomentan la colaboración en un entorno 3D relajado, desarrollando habilidades blandas que se transfieren directamente a los proyectos de trabajo."
      },
      {
        title: "Compromiso",
        description: "La competencia amistosa en entornos inmersivos mantiene a los equipos motivados y conectados a través de ubicaciones y zonas horarias."
      }
    ],
    stats: [
      {
        value: "60%",
        description: "de los empleados se sienten desconectados sin actividades regulares de team-building, con trabajadores remotos reportando aún mayor aislamiento.",
        source: "Harvard Business Review, 2023"
      },
      {
        value: "30%",
        description: "Los equipos que participan en actividades divertidas regulares muestran un 30% más de moral y un 25% mejor capacidad de resolución de problemas."
      },
      {
        value: "87%",
        description: "Los empleados comprometidos tienen un 87% menos de probabilidades de dejar sus empresas, citando las actividades de vinculación en equipo como un factor principal de compromiso."
      }
    ],
    benefits: [
      {
        title: "Biblioteca de Juegos Inmersivos",
        description: "Elige entre entornos 3D como El Suelo es Lava, Conecta 4, El Corral y más que transforman el team-building pasivo en experiencias activas y memorables."
      },
      {
        title: "Configuración con Un Clic",
        description: "Inicia juegos competitivos con mínima preparación—nuestros entornos 3D vienen preconfigurados para diversión inmediata."
      },
      {
        title: "Formatos Flexibles",
        description: "Admite desafíos individuales y grupales en espacios 3D que se adaptan al tamaño de tu equipo y objetivos específicos."
      }
    ],
    comparisons: [
      {
        traditional: "Eventos ocasionales de team-building presencial",
        advantage: "Juegos virtuales frecuentes y económicos en entornos 3D inmersivos que se adaptan a cualquier horario y crean conexión continua, no solo experiencias únicas."
      }
    ],
    useCases: [
      "Organiza una noche de trivia virtual en nuestro Auditorio para poner a prueba el conocimiento del equipo y generar competencia amistosa y risas.",
      "Realiza una carrera de relevos en nuestro entorno El Suelo es Lava donde los equipos compiten para completar desafíos mientras navegan obstáculos.",
      "Organiza competencias de equipo en nuestro espacio Conecta 4 donde los jugadores deben anotar en aros de baloncesto para colocar sus piezas, combinando habilidad física con estrategia."
    ],
    spotlight: [
      {
        title: "El Suelo es Lava",
        description: "Un desafiante circuito de obstáculos donde los compañeros pueden animarse mutuamente y reír juntos mientras navegan las dificultades."
      },
      {
        title: "El Corral",
        description: "Competencia basada en equipos donde los grupos deben recolectar huevos mientras defienden sus recursos, desarrollando tanto estrategia como habilidades de comunicación."
      },
      {
        title: "Conecta 4 con un Giro",
        description: "Juego clásico reimaginado en 3D con desafíos físicos adicionales que nivelan el campo de juego y añaden imprevisibilidad."
      }
    ],
    testimonial: {
      quote: "¡Nuestro equipo adora absolutamente los juegos en Team Up!—las competencias de El Suelo es Lava se han convertido en lo más destacado de nuestra semana! Hemos visto una mejor comunicación durante los proyectos y un aumento del 38% en la colaboración entre departamentos desde que comenzamos estas sesiones regulares de juegos.",
      author: "Casey Williams",
      position: "Líder de Experiencia del Empleado, Creative Solutions Agency"
    },
    futureProof: [
      {
        title: "Biblioteca de Juegos en Evolución",
        description: "Team Up! continuamente añade nuevos juegos y desafíos basados en lo último en diseño de juegos y psicología de equipo, asegurando que tu equipo siempre tenga nuevas formas de conectar."
      },
      {
        title: "Formatos Flexibles",
        description: "Apoya equipos remotos, híbridos o presenciales con juegos que funcionan en cualquier configuración, adaptándose a las tendencias futuras de trabajo sin perder efectividad."
      },
      {
        title: "Resiliencia Cultural",
        description: "Fomenta una cultura divertida y colaborativa que retiene talento y aumenta la moral a través de transiciones laborales, cambios económicos y evolución del equipo."
      }
    ],
    getStarted: {
      heading: "Elige un juego y comienza a jugar en minutos—sin necesidad de equipo especial o conocimientos técnicos.",
      description: "Transforma el team building en momentos divertidos de conexión genuina.",
      cta: "Comienza a Jugar con una Prueba Gratuita"
    }
  };

  return (
    <WebLayout>
      <SolutionByTypePage typeData={funCompetitionsData} />
    </WebLayout>
  );
}

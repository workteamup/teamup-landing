"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByRolePage from "../../../components/new-web/solution-by-role-page";

export default function ManagersSolutionPage() {
  // Spanish version of Managers data
  const managersData = {
    title: "Gerentes y Líderes de Equipo",
    hero: {
      headline: "Lidera Equipos Remotos de Alto Rendimiento con Confianza",
      subheadline: "Team Up! proporciona a los gerentes las herramientas para construir conexión, impulsar la colaboración y mantener el impulso del equipo, sin importar dónde trabajen tus personas.",
      cta: "Eleva tu Gestión de Equipo"
    },
    benefits: [
      {
        title: "Vínculos de Equipo más Fuertes",
        description: "Construye conexiones genuinas entre los miembros del equipo que se traducen en mejor colaboración y apoyo mutuo."
      },
      {
        title: "Mayor Compromiso",
        description: "Mantén a tu equipo motivado y comprometido con experiencias interactivas que rompen la monotonía del trabajo remoto."
      },
      {
        title: "Mejor Comunicación",
        description: "Crea un entorno donde la información fluye naturalmente y los miembros del equipo se sienten cómodos compartiendo ideas."
      },
      {
        title: "Liderazgo Visible",
        description: "Mantén presencia y accesibilidad como líder, incluso cuando no puedes estar físicamente presente con tu equipo."
      }
    ],
    stats: [
      {
        value: "63%",
        description: "de los gerentes informan que mantener la cohesión del equipo es su mayor desafío en entornos remotos.",
        source: "Encuesta de Desarrollo de Liderazgo, 2023"
      },
      {
        value: "82%",
        description: "de los miembros del equipo dicen que se sienten más conectados con los colegas después de participar en actividades virtuales de equipo."
      },
      {
        value: "3.4x",
        description: "mayor efectividad en la resolución de problemas en equipos con fuertes conexiones sociales versus aquellos sin ellas."
      }
    ],
    features: [
      {
        title: "Espacios de Equipo",
        description: "Crea entornos virtuales dedicados para que tu equipo colabore, socialice y construya relaciones."
      },
      {
        title: "Herramientas de Reuniones",
        description: "Realiza reuniones más efectivas con funciones interactivas que aumentan la participación y mantienen a todos comprometidos."
      },
      {
        title: "Insights de Equipo",
        description: "Obtén visibilidad sobre la dinámica del equipo y los patrones de participación para identificar oportunidades de mejora."
      }
    ],
    spotlight: [
      {
        title: "Zona de Standup Diario",
        description: "Transforma las verificaciones rutinarias en interacciones atractivas en un espacio diseñado para actualizaciones rápidas y alineación del equipo. Los tableros visuales de proyectos y elementos interactivos mantienen a todos enfocados e involucrados."
      },
      {
        title: "Centro de Colaboración",
        description: "Permite un trabajo en equipo fluido en un espacio dedicado con herramientas integradas para lluvia de ideas, resolución de problemas y planificación de proyectos. Múltiples áreas de trabajo apoyan diferentes tipos de colaboración."
      },
      {
        title: "Rincón de Conexión de Equipo",
        description: "Fortalece las relaciones con un espacio diseñado para la interacción social y la formación de equipos. Las actividades regulares y reuniones informales ayudan a los miembros del equipo remoto a desarrollar las conexiones personales que impulsan la colaboración efectiva."
      }
    ],
    testimonial: {
      quote: "Como gerente de un equipo completamente distribuido, Team Up! ha sido un cambio de juego. Nuestro equipo se siente más conectado que cuando estábamos en una oficina, y nuestras métricas de productividad han mejorado un 28% desde la implementación.",
      author: "Marcus Johnson",
      position: "Gerente de Ingeniería, TechSolutions Inc."
    },
    comparisons: [
      {
        traditional: "Reuniones por Videoconferencia",
        advantage: "Crea interacciones ricas en contexto en entornos 3D donde los miembros del equipo pueden moverse, colaborar e interactuar naturalmente en lugar de mirar una cuadrícula de caras."
      },
      {
        traditional: "Herramientas de Gestión de Proyectos",
        advantage: "Combina la gestión de tareas con espacios de colaboración inmersivos donde los equipos pueden discutir, visualizar y resolver problemas juntos en tiempo real."
      },
      {
        traditional: "Plataformas de Chat de Equipo",
        advantage: "Reemplaza la comunicación solo de texto con experiencias virtuales ricas que capturan los matices y la espontaneidad de las interacciones en persona."
      }
    ],
    useCases: [
      "Realiza standups diarios atractivos en un espacio dedicado con seguimiento visual del progreso y actualizaciones interactivas del equipo.",
      "Organiza sesiones efectivas de lluvia de ideas en una sala virtual con pizarras colaborativas y herramientas de votación.",
      "Construye cohesión de equipo con actividades sociales regulares en espacios personalizados diseñados para la conexión y la diversión."
    ],
    howItWorks: [
      "Configura el espacio de trabajo virtual de tu equipo con áreas personalizadas para diferentes tipos de colaboración.",
      "Establece rutinas de equipo y plantillas de reuniones que aprovechen al máximo las funciones interactivas.",
      "Introduce gradualmente actividades de formación de equipos que fortalezcan las relaciones y mejoren la colaboración."
    ],
    getStarted: {
      heading: "¿Listo para llevar tu liderazgo de equipo al siguiente nivel?",
      description: "Únete a los gerentes que están construyendo equipos remotos de alto rendimiento con Team Up!",
      cta: "Comienza tu Transformación de Equipo"
    }
  };

  return (
    <WebLayout>
      <SolutionByRolePage roleData={managersData} />
    </WebLayout>
  );
}

"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByPainPage from "../../../components/new-web/solution-by-pain-page";

export default function EmployeeDisengagementSolutionPage() {
  const disengagementData = {
    title: "Desconexión de Empleados",
    hero: {
      headline: "Reaviva la Pasión de tu Equipo",
      subheadline: "Combate la desconexión de los empleados con las experiencias 3D interactivas de Team Up! que transforman el trabajo en diversión.",
      cta: "Impulsa el Compromiso del Equipo Ahora"
    },
    reasons: [
      {
        description: "Los empleados desconectados cuestan a las empresas entre 450 y 550 mil millones de dólares anuales en pérdida de productividad e innovación.",
        source: "Gallup, 2023"
      },
      {
        description: "La falta de compromiso conduce a mayor ausentismo, presentismo y eventual rotación."
      },
      {
        description: "Los equipos desconectados son menos innovadores, adaptables y receptivos a los cambios del mercado y las necesidades de los clientes."
      }
    ],
    stats: [
      {
        value: "36%",
        description: "de los empleados reportan estar activamente comprometidos en el trabajo, con los trabajadores remotos reportando un compromiso aún menor.",
        source: "ADP Research, 2023"
      },
      {
        value: "2.5x",
        description: "Los empleados desconectados tienen 2.5 veces más probabilidades de dejar sus trabajos en un año."
      },
      {
        value: "21%",
        description: "Las empresas con empleados altamente comprometidos ven un 21% más de rentabilidad y 41% menos de ausentismo."
      }
    ],
    benefits: [
      {
        description: "Genera alegría y creatividad con actividades virtuales inspiradas en juegos que rompen la monotonía del trabajo remoto."
      },
      {
        description: "Proporciona oportunidades para el reconocimiento y la celebración en entornos virtuales inmersivos que se sienten especiales y significativos."
      },
      {
        description: "Fomenta un sentido de propósito conectando el trabajo individual con los objetivos del equipo a través de visualización interactiva y desafíos colaborativos."
      }
    ],
    comparisons: [
      {
        traditional: "Talleres presenciales de team-building e iniciativas ocasionales de compromiso",
        advantage: "Compromiso continuo a través de experiencias 3D inmersivas accesibles en cualquier momento y lugar. Nuestra plataforma crea momentos diarios de conexión, no solo eventos ocasionales."
      }
    ],
    useCases: [
      "Organiza sesiones virtuales de lluvia de ideas en nuestro Auditorio donde los equipos pueden votar sobre ideas a través de la ubicación de avatares para retroalimentación visual inmediata.",
      "Organiza desafíos virtuales de equipo en nuestro entorno Corral para impulsar la colaboración y la competencia amistosa.",
      "Crea un muro virtual de reconocimiento en tu espacio de oficina personalizado para celebrar logros y hacer que los miembros del equipo se sientan valorados."
    ],
    spotlight: [
      {
        title: "Juegos Interactivos",
        description: "Desde salas de escape virtuales hasta noches de trivia en entornos 3D que transforman actividades pasivas en experiencias activas."
      },
      {
        title: "Espacios Personalizables",
        description: "Diseña tu oficina virtual para reflejar la cultura de tu equipo, con elementos interactivos que fomentan el compromiso."
      }
    ],
    testimonial: {
      quote: "Team Up! ha transformado nuestra cultura de trabajo remoto. Los entornos 3D y las actividades basadas en juegos dan a nuestro equipo algo que esperar cada día. Nuestros índices de compromiso han aumentado un 47% en solo tres meses.",
      author: "Jamie Wong",
      position: "CEO, Startup Innovate Inc."
    },
    howItWorks: [
      "Crea tu espacio de trabajo y selecciona de nuestra biblioteca de entornos 3D diseñados para diferentes tipos de compromiso.",
      "Personaliza tus espacios virtuales con tu marca y elementos interactivos.",
      "Lanza actividades de compromiso con plantillas prediseñadas o crea tus propias experiencias personalizadas."
    ],
    getStarted: {
      heading: "¿Listo para impulsar el compromiso?",
      description: "Reserva una demo personalizada hoy y ve Team Up! en acción.",
      cta: "Reserva una Demo Hoy"
    }
  };

  return (
    <WebLayout>
      <SolutionByPainPage painData={disengagementData} />
    </WebLayout>
  );
} 
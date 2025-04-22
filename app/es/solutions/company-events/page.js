"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByTypePage from "../../../components/new-web/solution-by-type-page";

export default function CompanyEventsPage() {
  const companyEventsData = {
    hero: {
      headline: "Organiza Eventos que Unen a Todos",
      subheadline: "Team Up! hace que las reuniones grandes sean atractivas, escalables y sin esfuerzo con entornos 3D inmersivos que se sienten como experiencias compartidas.",
      cta: "Revoluciona tus Eventos Virtuales"
    },
    importance: [
      {
        title: "Conexión",
        description: "Los grandes eventos unen a los equipos y refuerzan la cultura—hazlos memorables con espacios 3D inmersivos que crean experiencias compartidas."
      },
      {
        title: "Participación",
        description: "Mantén a los asistentes activos, no pasivos, con funciones 3D interactivas que fomentan la participación y previenen la desconexión digital."
      },
      {
        title: "Escalabilidad",
        description: "Organiza eventos para cientos de personas sin el costo o las complicaciones logísticas de los lugares físicos, manteniendo la sensación de una experiencia compartida significativa."
      }
    ],
    stats: [
      {
        value: "$1,000+",
        description: "costo por asistente en eventos físicos, con 40% del presupuesto gastado en lugar y viajes",
        source: "Event Marketing Institute, 2023"
      },
      {
        value: "80%",
        description: "de los asistentes a webinars se desconectan en 10 minutos cuando la visualización pasiva es el único método de participación"
      },
      {
        value: "30%",
        description: "mayores tasas de retención y 25% mejor colaboración entre equipos en empresas con eventos regulares"
      }
    ],
    benefits: [
      {
        title: "Entornos Diversos",
        description: "Elige entre nuestro Auditorio, Fogata o espacios personalizados para crear la atmósfera perfecta para tu evento específico."
      },
      {
        title: "Salas de Grupos",
        description: "Crea grupos pequeños para networking o discusiones en espacios 3D conectados que mantienen la sensación cohesiva del evento."
      },
      {
        title: "Plantillas de Eventos",
        description: "Lanza reuniones generales, conferencias o encuentros sociales con entornos 3D prediseñados que requieren una configuración mínima."
      },
      {
        title: "Análisis Completo",
        description: "Rastrea el compromiso, la participación y el feedback en tiempo real para medir el éxito del evento y mejorar futuras reuniones."
      }
    ],
    useCases: [
      "Organiza una reunión general de empresa en nuestro Auditorio con sesiones de grupos en espacios 3D temáticos para preguntas y respuestas y discusiones en grupos pequeños.",
      "Organiza una conferencia virtual con escenarios para presentaciones principales, áreas de exposición interactivas y salones de networking en un entorno de campus 3D personalizado.",
      "Realiza una fiesta de empresa con espacios 3D temáticos que incluyen juegos como El Suelo es Lava y Conecta 4 para la creación de vínculos entre equipos y experiencias compartidas."
    ],
    spotlight: [
      {
        title: "Entorno de Auditorio",
        description: "Ambiente profesional con plataformas de votación interactivas para la participación y seguimiento del compromiso de la audiencia."
      },
      {
        title: "Herramienta de Mixer",
        description: "Asigna aleatoriamente a los asistentes a salas de grupos para fomentar nuevas conexiones y networking entre equipos."
      },
      {
        title: "Panel de Eventos",
        description: "Monitorea el compromiso en tiempo real y ajusta las actividades basándote en análisis de participación."
      }
    ],
    testimonial: {
      quote: "Team Up! transformó nuestra reunión general global de 500 personas en una experiencia atractiva que realmente unió a los equipos. Las funciones interactivas y los espacios de grupos crearon conexiones genuinas que nunca logramos con webinars tradicionales.",
      author: "Sarah Chen",
      position: "Directora de Experiencia del Empleado, Global Tech Co."
    },
    futureProof: [
      {
        title: "Crecimiento Escalable",
        description: "Las herramientas de eventos de Team Up! escalan sin problemas de 10 a 10,000 asistentes, asegurando que tu empresa pueda organizar reuniones impactantes mientras crece."
      },
      {
        title: "Preparado para Híbrido",
        description: "Combina asistentes presenciales y virtuales en un entorno 3D cohesivo, adaptándote a modelos de trabajo híbridos en evolución sin dejar a nadie fuera."
      },
      {
        title: "Innovación Continua",
        description: "Accede regularmente a nuevas funciones e integraciones de eventos, manteniendo tus interacciones a gran escala a la vanguardia y atractivas incluso para los participantes más expertos en tecnología."
      }
    ],
    getStarted: {
      heading: "¿Listo para transformar tus eventos de empresa?",
      description: "Comienza a crear reuniones virtuales memorables que fortalezcan los lazos del equipo y la cultura de la empresa.",
      cta: "Reserva una Demo de Eventos"
    }
  };

  return (
    <WebLayout>
      <SolutionByTypePage typeData={companyEventsData} />
    </WebLayout>
  );
}

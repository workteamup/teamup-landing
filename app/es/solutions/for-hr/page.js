"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByRolePage from "../../../components/new-web/solution-by-role-page";

export default function HRSolutionPage() {
  // Spanish version of HR data
  const hrData = {
    title: "Profesionales de RRHH",
    hero: {
      headline: "Construye una Cultura Remota Próspera que Atrae y Retiene Talento",
      subheadline: "Team Up! ayuda a los equipos de RRHH a crear experiencias atractivas para los empleados que fortalecen la cultura y aumentan la retención en equipos distribuidos.",
      cta: "Ver Soluciones para RRHH en Acción"
    },
    benefits: [
      {
        title: "Cultura más Fuerte",
        description: "Construye y mantén una cultura empresarial vibrante que trascienda las barreras físicas y conecte a los empleados remotos."
      },
      {
        title: "Mayor Retención",
        description: "Reduce la rotación creando conexiones significativas y oportunidades de participación que hacen que los empleados se sientan valorados."
      },
      {
        title: "Mejor Incorporación",
        description: "Da la bienvenida a los nuevos empleados con experiencias inmersivas que aceleran la integración y construyen relaciones desde el primer día."
      },
      {
        title: "Cohesión de Equipo",
        description: "Fomenta vínculos más fuertes entre los miembros del equipo a través de actividades interactivas regulares y experiencias virtuales compartidas."
      }
    ],
    stats: [
      {
        value: "76%",
        description: "de los líderes de RRHH dicen que mantener la cultura de la empresa es su mayor desafío en entornos de trabajo remoto.",
        source: "Encuesta de Ejecutivos de RRHH, 2023"
      },
      {
        value: "41%",
        description: "tasas de retención más altas en empresas con sólidos programas virtuales de formación de equipos para empleados remotos."
      },
      {
        value: "68%",
        description: "de los empleados dicen que sentirse conectados con los colegas es un factor principal en su decisión de permanecer en una empresa."
      }
    ],
    features: [
      {
        title: "Herramientas de Planificación de Eventos",
        description: "Organiza y gestiona fácilmente eventos virtuales de formación de equipos, celebraciones y reuniones de empresa con herramientas de planificación intuitivas."
      },
      {
        title: "Análisis de Participación",
        description: "Realiza un seguimiento de la participación, los patrones de interacción y los comentarios para medir la eficacia de tus iniciativas culturales."
      },
      {
        title: "Espacios Personalizables",
        description: "Crea entornos virtuales con la marca de tu empresa que reflejen tus valores y proporcionen contexto para diferentes tipos de interacciones."
      }
    ],
    spotlight: [
      {
        title: "Centro de Incorporación Virtual",
        description: "Da la bienvenida a los nuevos empleados con una experiencia de incorporación inmersiva en un espacio dedicado. Incluye historia interactiva de la empresa, exploración de valores y oportunidades para conocer a los miembros del equipo en un entorno estructurado."
      },
      {
        title: "Centro de Conexión Cultural",
        description: "Mantén las tradiciones y celebraciones de la empresa en un espacio virtual diseñado para la conexión social. Organiza eventos regulares, desde charlas informales hasta celebraciones de hitos que fortalecen las relaciones."
      },
      {
        title: "Zona de Bienestar y Desarrollo",
        description: "Apoya el bienestar y el crecimiento de los empleados con espacios dedicados para sesiones de mindfulness, talleres de aprendizaje y actividades de desarrollo de habilidades que muestran inversión en tu equipo."
      }
    ],
    testimonial: {
      quote: "Como Directora de RRHH que gestiona un equipo global, Team Up! ha sido transformador para nuestra cultura. Nuestras tasas de finalización de incorporación aumentaron un 32%, y nuestras puntuaciones trimestrales de compromiso han mostrado una mejora constante desde la implementación.",
      author: "Elena Rodríguez",
      position: "Directora de RRHH, Global Tech Solutions"
    },
    comparisons: [
      {
        traditional: "Incorporación por Videoconferencia",
        advantage: "Crea experiencias de incorporación interactivas y autoguiadas en espacios 3D que los nuevos empleados pueden explorar a su propio ritmo mientras se conectan con los miembros del equipo."
      },
      {
        traditional: "Retiros Anuales de Team Building",
        advantage: "Organiza actividades virtuales regulares y rentables de formación de equipos que mantienen la conexión durante todo el año en lugar de depender de eventos presenciales poco frecuentes."
      },
      {
        traditional: "Manuales Estáticos para Empleados",
        advantage: "Transforma las políticas y valores de la empresa en experiencias interactivas en espacios virtuales con las que los empleados realmente se involucran y recuerdan."
      }
    ],
    useCases: [
      "Diseña un recorrido completo de incorporación para nuevos empleados con estaciones interactivas para la historia de la empresa, presentaciones del equipo y capacitación de roles.",
      "Organiza una celebración virtual de aniversario de la empresa con exhibiciones interactivas de línea de tiempo, ceremonias de reconocimiento y actividades sociales.",
      "Crea un programa virtual recurrente de bienestar con espacios dedicados para meditación, desafíos de fitness y recursos de salud mental."
    ],
    howItWorks: [
      "Trabaja con nuestro equipo para diseñar espacios personalizados alineados con la cultura de tu empresa y los objetivos de RRHH.",
      "Configura tu calendario de eventos y actividades de participación con el apoyo de nuestro equipo de éxito del cliente.",
      "Lanza tus iniciativas de RRHH y realiza un seguimiento de las métricas de participación para mejorar continuamente tu experiencia virtual de empleados."
    ],
    getStarted: {
      heading: "¿Listo para transformar la experiencia de tus empleados?",
      description: "Únete a los líderes de RRHH que están construyendo culturas remotas más fuertes con Team Up!",
      cta: "Reserva una Demo Enfocada en RRHH"
    }
  };

  return (
    <WebLayout>
      <SolutionByRolePage roleData={hrData} />
    </WebLayout>
  );
}

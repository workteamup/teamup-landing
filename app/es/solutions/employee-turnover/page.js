"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByPainPage from "../../../components/new-web/solution-by-pain-page";

export default function EmployeeTurnoverSolutionPage() {
  const turnoverData = {
    title: "Rotación de Empleados",
    hero: {
      headline: "Detén la Rotación de Empleados",
      subheadline: "Retén a tu mejor talento con experiencias de team-building que fomentan conexiones genuinas.",
      cta: "Comienza a Reducir la Rotación Hoy"
    },
    reasons: [
      {
        description: "La alta rotación cuesta a las empresas entre 1.5 y 2 veces el salario de un empleado en reclutamiento, incorporación y pérdida de productividad.",
        source: "SHRM, 2023"
      },
      {
        description: "Las salidas frecuentes dañan la moral del equipo, dificultando que los empleados restantes se mantengan motivados y comprometidos."
      },
      {
        description: "Perder empleados significa perder conocimientos valiosos y memoria institucional, retrasando proyectos e innovación."
      }
    ],
    stats: [
      {
        value: "25%",
        description: "Las empresas con altas tasas de rotación ven una disminución del 25% en productividad e innovación.",
        source: "Gallup, 2023"
      },
      {
        value: "4.2",
        description: "La permanencia promedio de un empleado es de solo 4.2 años, y apenas 2.8 años para Millennials y Gen Z."
      },
      {
        value: "70%",
        description: "de los empleados dicen que permanecerían más tiempo si se sintieran más conectados con su equipo y la cultura de la empresa."
      }
    ],
    benefits: [
      {
        description: "Fomenta un sentido de pertenencia con espacios virtuales persistentes para la interacción diaria que recrean la camaradería de las oficinas presenciales."
      },
      {
        description: "Fortalece los vínculos del equipo a través de actividades divertidas inspiradas en juegos que crean memorias compartidas y bromas internas."
      },
      {
        description: "Proporciona oportunidades para conexiones significativas más allá de las tareas laborales, permitiendo que los compañeros se conozcan como personas, no solo como colegas."
      }
    ],
    comparisons: [
      {
        traditional: "Retiros anuales de team-building",
        advantage: "Compromiso continuo a través de interacciones virtuales diarias, no solo una vez al año. Nuestros entornos 3D crean experiencias compartidas memorables a una fracción del costo."
      }
    ],
    useCases: [
      "Organiza pausas de café virtuales en nuestro entorno Fogata para mantener la cohesión del equipo con temas de conversación que generan discusiones significativas.",
      "Organiza noches de juegos mensuales con nuestras actividades Conecta 4 y El Suelo es Lava para aumentar la moral y crear experiencias compartidas.",
      "Crea un programa de mentoría virtual usando nuestros espacios de Punto de Encuentro para apoyar a los nuevos empleados y ayudarles a formar conexiones desde el primer día."
    ],
    spotlight: [
      {
        title: "Puntos de Encuentro Persistentes",
        description: "Espacios virtuales siempre abiertos para conversaciones espontáneas y construcción de comunidad."
      },
      {
        title: "Avatares 3D Personalizables",
        description: "Permite que los empleados expresen sus personalidades y reconozcan a sus colegas instantáneamente en espacios virtuales."
      }
    ],
    testimonial: {
      quote: "Team Up! ha sido un cambio radical para nuestro equipo remoto. Los espacios 3D dinámicos y los juegos interactivos han dado a nuestro equipo algo con lo que conectar. Nuestra tasa de rotación nunca ha sido tan baja — un 32% menos en seis meses.",
      author: "María Chen",
      position: "Gerente de RRHH, TechWave Inc."
    },
    howItWorks: [
      "Regístrate y crea el espacio virtual de tu equipo con nuestro intuitivo panel de control.",
      "Invita a los miembros del equipo a unirse, personalizar sus avatares 3D y explorar tu entorno virtual.",
      "Comienza a organizar eventos y actividades virtuales diseñadas específicamente para fortalecer conexiones y combatir el aislamiento."
    ],
    getStarted: {
      heading: "¿Listo para reducir la rotación?",
      description: "Comienza tu prueba gratuita de 30 días hoy y observa la diferencia en la conexión de tu equipo.",
      cta: "Comienza a Reducir la Rotación Ahora"
    }
  };

  return (
    <WebLayout>
      <SolutionByPainPage painData={turnoverData} />
    </WebLayout>
  );
} 
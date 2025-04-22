"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByTypePage from "../../../components/new-web/solution-by-type-page";

export default function DailyActivityPage() {
  const dailyActivityData = {
    hero: {
      headline: "Haz que Cada Reunión Importe",
      subheadline: "Team Up! transforma las reuniones rutinarias en experiencias interactivas y productivas en entornos 3D inmersivos.",
      cta: "Mejora tus Reuniones Diarias"
    },
    importance: [
      {
        title: "Compromiso",
        description: "Las reuniones diarias marcan el tono de la cultura de tu equipo: mantén a tu equipo motivado y conectado con espacios 3D inmersivos que fomentan la participación."
      },
      {
        title: "Productividad",
        description: "Reduce la fatiga de las reuniones y aumenta el enfoque con herramientas 3D interactivas que hacen que las discusiones rutinarias sean más dinámicas y atractivas."
      },
      {
        title: "Consistencia",
        description: "Construye hábitos de colaboración con espacios 3D diseñados específicamente para hacer que la interacción diaria sea fluida y significativa."
      }
    ],
    stats: [
      {
        value: "70%",
        description: "de los empleados reportan fatiga en las videollamadas tradicionales, reduciendo la productividad hasta en un 30%",
        source: "Microsoft Work Trend Index, 2023"
      },
      {
        value: "25%",
        description: "Los equipos con interacciones diarias atractivas son 25% más productivos y tienen 40% mejor retención de información."
      },
      {
        value: "$400B",
        description: "Las reuniones mal gestionadas cuestan a las empresas $400 mil millones anuales en tiempo perdido y disminución del compromiso."
      }
    ],
    benefits: [
      {
        title: "Espacios Persistentes",
        description: "Salas 3D siempre disponibles para consultas rápidas—sin necesidad de programar, solo entra como lo harías en una oficina física."
      },
      {
        title: "Herramientas Interactivas",
        description: "Utiliza audio espacial, encuestas 3D, pizarras y avatares para mantener a todos comprometidos y presentes en la conversación."
      },
      {
        title: "Agendas Personalizadas",
        description: "Estructura las discusiones con plantillas integradas para stand-ups o retrospectivas con seguimiento visual de los puntos de discusión."
      }
    ],
    useCases: [
      "Organiza un stand-up virtual en nuestro espacio de Planificación donde los miembros del equipo mueven avatares para actualizar el progreso visualmente mientras usan audio espacial para una conversación natural.",
      "Realiza un control diario del estado de ánimo usando nuestro entorno Fogata con encuestas para medir la moral del equipo a través de la ubicación de avatares en diferentes plataformas.",
      "Facilita una sesión de planificación de sprint en nuestra sala de Planificación dedicada con tableros interactivos y plataformas de votación que visualizan el consenso del equipo."
    ],
    spotlight: [
      {
        title: "Puntos de Reunión Persistentes",
        description: "Salas 3D siempre abiertas para consultas espontáneas que fomentan las conversaciones casuales que construyen la cohesión del equipo."
      },
      {
        title: "Encuestas Interactivas",
        description: "Recopila feedback en tiempo real durante las reuniones a través del movimiento físico del avatar en lugar de botones abstractos."
      },
      {
        title: "Plantillas de Agenda",
        description: "Agiliza los stand-ups y retrospectivas con formatos 3D predefinidos que visualizan el progreso y los puntos de discusión."
      }
    ],
    testimonial: {
      quote: "Team Up! hizo que nuestros stand-ups diarios se sintieran como si estuviéramos en la misma sala—nuestro equipo está más conectado que nunca. El espacio 3D da una sensación de presencia que Zoom nunca pudo, y nuestros puntajes de efectividad en reuniones han aumentado un 45%.",
      author: "Jordan Lee",
      position: "Líder de Equipo, TechForward Co."
    },
    futureProof: [
      {
        title: "Espacios Adaptables",
        description: "Los espacios de reunión diaria de Team Up! se ajustan perfectamente a configuraciones híbridas o totalmente remotas, asegurando la conectividad mientras los modelos de trabajo evolucionan más allá de 2025."
      },
      {
        title: "Actualizaciones Continuas",
        description: "Accede a nuevas herramientas como agendas impulsadas por IA y encuestas mejoradas, manteniendo tus interacciones diarias modernas y eficientes."
      },
      {
        title: "Colaboración Escalable",
        description: "Apoya equipos de cualquier tamaño, desde pequeños grupos hasta unidades globales, con espacios 3D que crecen con tu organización sin perder la conexión humana."
      }
    ],
    getStarted: {
      heading: "Transforma tus Reuniones Diarias",
      description: "Configura el espacio 3D de tu equipo en minutos y transforma las reuniones rutinarias en experiencias atractivas.",
      cta: "Comienza tu Prueba Gratuita de 30 Días"
    }
  };

  return (
    <WebLayout>
      <SolutionByTypePage typeData={dailyActivityData} />
    </WebLayout>
  );
} 
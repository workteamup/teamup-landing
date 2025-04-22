"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByTypePage from "../../../components/new-web/solution-by-type-page";

export default function EventsPage() {
  const eventsData = {
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
    // ... rest of the Spanish data remains the same
  };

  return (
    <WebLayout>
      <SolutionByTypePage typeData={eventsData} />
    </WebLayout>
  );
} 
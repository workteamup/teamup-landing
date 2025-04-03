"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function PlanningSpacePage() {
  const customContent = {
    title: "Sesiones de votación multiopción dinámicas que no te aburrirán",
    tagline: "Empodera a tu equipo para tomar decisiones juntos",
    features: [
      {
        title: "Tablero de Tareas del Equipo",
        description:
          "Organiza las tareas de tu equipo con un tablero intuitivo de arrastrar y soltar para mejor visibilidad y seguimiento.",
      },
      {
        title: "Visualización de Línea de Tiempo",
        description:
          "Traza el calendario de tu proyecto con una línea de tiempo visual que todos pueden entender de un vistazo.",
      },
      {
        title: "Asignación de Recursos",
        description:
          "Asigna fácilmente miembros del equipo a tareas y rastrea la distribución de recursos en tus proyectos.",
      },
      {
        title: "Marcadores de Prioridad",
        description:
          "Destaca tareas de alta prioridad y fechas límite para asegurar que el trabajo crítico se realice primero.",
      },
      {
        title: "Toma de Notas",
        description:
          "Captura decisiones e ideas importantes directamente dentro del espacio de planificación para referencia futura.",
      },
      {
        title: "Biblioteca de Plantillas",
        description:
          "Elige entre plantillas de planificación prediseñadas para diferentes tipos de proyectos y metodologías.",
      },
    ],
    howToUse: [
      {
        title: "Crea tu Espacio de Planificación",
        description:
          'Haz clic en "Crear Espacio" y selecciona la plantilla de Planificación de las opciones disponibles.',
      },
      {
        title: "Invita a Tu Equipo",
        description:
          "Envía invitaciones a todos los miembros del equipo que deberían participar en la sesión de planificación.",
      },
      {
        title: "Configura Tu Tablero",
        description:
          "Organiza las columnas de tu tablero según tu flujo de trabajo (ej., Por Hacer, En Progreso, Hecho).",
      },
      {
        title: "Añade Tareas y Asignaciones",
        description:
          "Crea tarjetas de tareas con descripciones, fechas de vencimiento y asígnalas a miembros del equipo.",
      },
      {
        title: "Realiza Tu Sesión de Planificación",
        description:
          "Ejecuta tu reunión de planificación, discutiendo cada tarea y moviéndolas a las columnas apropiadas mientras avanzas.",
      },
    ],
    cta: {
      title: "¿Listo para transformar la planificación de tu equipo?",
      description:
        "Experimenta el poder de la planificación visual con tu equipo en nuestro Espacio de Planificación.",
      buttonText: "Prueba Gratis por 2 Meses",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="planning"
      language="es"
      customContent={customContent}
    />
  );
}

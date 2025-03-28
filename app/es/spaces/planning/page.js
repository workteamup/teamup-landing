"use client";

import WebLayout from "../../../components/new-web/layout";
import SpaceTemplate from "../../../components/new-web/space-template";
import Button from "../../../components/new-web/button";

export default function PlanningSpacePage() {
  const features = [
    {
      title: "Tablero de Tareas de Equipo",
      description:
        "Organiza las tareas de tu equipo con un tablero intuitivo de arrastrar y soltar para una mejor visibilidad y seguimiento.",
    },
    {
      title: "Visualización de Línea de Tiempo",
      description:
        "Mapea el cronograma de tu proyecto con una línea de tiempo visual que todos pueden entender de un vistazo.",
    },
    {
      title: "Asignación de Recursos",
      description:
        "Asigna fácilmente miembros del equipo a tareas y realiza un seguimiento de la distribución de recursos en tus proyectos.",
    },
    {
      title: "Marcadores de Prioridad",
      description:
        "Destaca tareas de alta prioridad y fechas límite para asegurar que el trabajo crítico se realice primero.",
    },
    {
      title: "Toma de Notas",
      description:
        "Captura decisiones importantes e ideas directamente dentro del espacio de planificación para futuras referencias.",
    },
    {
      title: "Biblioteca de Plantillas",
      description:
        "Elige entre plantillas de planificación preestablecidas para diferentes tipos de proyectos y metodologías.",
    },
  ];

  const howToUse = [
    {
      title: "Crea tu Espacio de Planificación",
      description:
        'Haz clic en "Crear Espacio" y selecciona la plantilla de Planificación entre las opciones disponibles.',
    },
    {
      title: "Invita a Tu Equipo",
      description:
        "Envía invitaciones a todos los miembros del equipo que deberían participar en la sesión de planificación.",
    },
    {
      title: "Configura Tu Tablero",
      description:
        "Organiza las columnas de tu tablero según tu flujo de trabajo (por ejemplo, Por Hacer, En Progreso, Terminado).",
    },
    {
      title: "Añade Tareas y Asignaciones",
      description:
        "Crea tarjetas de tareas con descripciones, fechas de vencimiento y asígnalas a miembros del equipo.",
    },
    {
      title: "Realiza Tu Sesión de Planificación",
      description:
        "Ejecuta tu reunión de planificación, discutiendo cada tarea y moviéndolas a las columnas apropiadas a medida que avanzas.",
    },
  ];

  return (
    <WebLayout>
      <SpaceTemplate
        tagline="Planifica y organiza el trabajo de tu equipo con claridad y propósito"
        imageUrl="/spaces/planning-hero.jpg"
        title="Espacio de Planificación"
        features={features}
        howToUse={howToUse}
      >
        {/* Contenido adicional específico del espacio de Planificación */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gray-cloud rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-phantom">
              ¿Listo para transformar la planificación de tu equipo?
            </h2>
            <p className="text-center mb-6 text-gray-graphite">
              Experimenta el poder de la planificación visual con tu equipo en
              nuestro Espacio de Planificación.
            </p>
            <div className="flex justify-center">
              <Button href="https://app.teamup.works/signup" size="lg">
                Prueba Gratis por 2 Meses
              </Button>
            </div>
          </div>
        </section>
      </SpaceTemplate>
    </WebLayout>
  );
}

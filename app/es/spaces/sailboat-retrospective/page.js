"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function SailboatRetrospectivePage() {
  const customContent = {
    title: "Lograr que todos estén en la misma página nunca fue tan fácil",
    tagline:
      "Reflexiona y mejora en equipo con un formato de retrospectiva visual",
    features: [
      {
        title: "Metáfora Visual",
        description:
          "Utiliza la metáfora del velero para identificar qué te impulsa hacia adelante y qué te frena.",
      },
      {
        title: "Aportación Colaborativa",
        description:
          "Todos pueden contribuir con ideas simultáneamente, asegurando que todas las voces sean escuchadas.",
      },
      {
        title: "Agrupación en Tiempo Real",
        description:
          "Organiza y categoriza la retroalimentación en tiempo real mientras surgen temas de la discusión.",
      },
      {
        title: "Elementos de Acción",
        description:
          "Convierte las ideas en tareas accionables con seguimiento integrado de elementos de acción.",
      },
      {
        title: "Integración de Temporizador",
        description:
          "Mantén tu retrospectiva enfocada y a tiempo con temporizadores integrados para cada fase.",
      },
      {
        title: "Exportar y Compartir",
        description:
          "Exporta los resultados de tu retrospectiva y elementos de acción para un fácil seguimiento.",
      },
    ],
    howToUse: [
      {
        title: "Prepara el Escenario",
        description:
          "Crea tu espacio de retrospectiva e invita a los miembros de tu equipo a unirse.",
      },
      {
        title: "Recopila Retroalimentación",
        description:
          "Los miembros del equipo añaden sus pensamientos sobre lo que funciona (viento), desafíos (anclas), riesgos (rocas) y objetivos (destino).",
      },
      {
        title: "Agrupa y Discute",
        description:
          "Organiza elementos similares y facilita una discusión sobre los temas principales.",
      },
      {
        title: "Crea Elementos de Acción",
        description:
          "Convierte las ideas en elementos de acción concretos y asigna responsables para el seguimiento.",
      },
      {
        title: "Da Seguimiento",
        description:
          "Rastrea el progreso de los elementos de acción y revísalos en tu próxima retrospectiva.",
      },
    ],
    cta: {
      title: "¿Listo para mejorar las retrospectivas de tu equipo?",
      description:
        "Haz tus retrospectivas más atractivas y accionables con nuestro formato de Velero.",
      buttonText: "Prueba Gratis por 2 Meses",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="sailboat-retrospective"
      language="es"
      customContent={customContent}
    />
  );
}

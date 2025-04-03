"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function CampfirePage() {
  const customContent = {
    title: "La forma más fácil de crear oportunidades para conectar y unirse",
    tagline:
      "Construye relaciones más fuertes en un ambiente casual y relajado",
    features: [
      {
        title: "Ambiente Acogedor",
        description:
          "Un entorno virtual de fogata cálido y acogedor que fomenta la conversación abierta y el compartir.",
      },
      {
        title: "Juegos para Romper el Hielo",
        description:
          "Iniciadores de conversación y actividades de construcción de equipo integradas para involucrar a todos.",
      },
      {
        title: "Compartir Historias",
        description:
          "Túrnense para compartir historias, experiencias y conocer mejor a sus compañeros de equipo.",
      },
      {
        title: "S'mores Virtuales",
        description:
          "Elementos interactivos divertidos como asar malvaviscos virtuales para añadir diversión a sus reuniones.",
      },
      {
        title: "Asientos Flexibles",
        description:
          "Organiza tus sillas de campamento virtuales para crear círculos de conversación íntimos o discusiones grupales más grandes.",
      },
      {
        title: "Sonidos Ambientales",
        description:
          "Sonidos opcionales de fuego crepitante y naturaleza para mejorar la atmósfera de campamento.",
      },
    ],
    howToUse: [
      {
        title: "Configura tu Fogata",
        description:
          "Crea tu espacio de fogata y personaliza el ambiente a tu gusto.",
      },
      {
        title: "Invita a tu Equipo",
        description:
          "Envía invitaciones a los miembros del equipo para tu reunión virtual alrededor de la fogata.",
      },
      {
        title: "Elige Actividades",
        description:
          "Selecciona entre varios rompehielos y actividades de construcción de equipo para incluir en tu sesión.",
      },
      {
        title: "Inicia la Conversación",
        description:
          "Usa indicadores de conversación o deja que las discusiones fluyan naturalmente alrededor de la fogata.",
      },
      {
        title: "Comparte y Conéctate",
        description:
          "Túrnense para compartir historias y experiencias, construyendo lazos más fuertes en el equipo.",
      },
    ],
    cta: {
      title: "¿Listo para unir a tu equipo?",
      description:
        "Crea conexiones significativas en un ambiente relajado de fogata virtual.",
      buttonText: "Prueba Gratis por 2 Meses",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="campfire"
      language="es"
      customContent={customContent}
    />
  );
}

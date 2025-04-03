"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function FloorIsLavaPage() {
  const customContent = {
    title: "El nombre lo dice todo, un error y estás fuera",
    tagline:
      "Convierte la construcción de equipo en una emocionante aventura virtual",
    features: [
      {
        title: "Obstáculos Dinámicos",
        description:
          "Obstáculos virtuales desafiantes que requieren pensamiento rápido y coordinación para superarlos.",
      },
      {
        title: "Coordinación de Equipo",
        description:
          "Trabajen juntos para ayudar a los compañeros a navegar por el recorrido y llegar a un lugar seguro.",
      },
      {
        title: "Física en Tiempo Real",
        description:
          "Movimiento y física realistas que hacen que el juego sea desafiante y atractivo.",
      },
      {
        title: "Power-ups",
        description:
          "Recolecta habilidades especiales y bonificaciones para ayudar a tu equipo a sobrevivir más tiempo.",
      },
      {
        title: "Modos Competitivos",
        description:
          "Múltiples modos de juego incluyendo equipo contra equipo y último jugador en pie.",
      },
      {
        title: "Dificultad Personalizable",
        description:
          "Ajusta el nivel de desafío para que coincida con la habilidad y experiencia de tu equipo.",
      },
    ],
    howToUse: [
      {
        title: "Crea tu Juego",
        description:
          "Configura una nueva sesión de El Suelo es Lava y elige tu modo de juego.",
      },
      {
        title: "Forma Equipos",
        description:
          "Divide a los jugadores en equipos o prepárate para un desafío todos contra todos.",
      },
      {
        title: "Aprende los Controles",
        description:
          "Toma un tutorial rápido para dominar el movimiento y las habilidades especiales.",
      },
      {
        title: "Inicia el Desafío",
        description:
          "Comienza el juego y trabajen juntos para sobrevivir a la lava que sube y los obstáculos.",
      },
      {
        title: "Celebra el Éxito",
        description:
          "Compara puntuaciones, celebra victorias y desafía a otros a superar los récords.",
      },
    ],
    cta: {
      title: "¿Listo para poner a prueba la agilidad de tu equipo?",
      description:
        "Salta a un emocionante desafío virtual que une a tu equipo a través de la competencia amistosa.",
      buttonText: "Prueba Gratis por 2 Meses",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="floor-is-lava"
      language="es"
      customContent={customContent}
    />
  );
}

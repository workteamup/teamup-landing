"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function Connect4Page() {
  const customContent = {
    title: "El juego clásico con un toque moderno",
    tagline: "Desafía a tus compañeros en un juego atemporal de estrategia",
    features: [
      {
        title: "Tablero de Juego 3D",
        description:
          "Un tablero de juego 3D inmersivo que da vida a la experiencia clásica de Conecta 4.",
      },
      {
        title: "Modo Torneo",
        description:
          "Organiza torneos con múltiples jugadores y sigue las clasificaciones a lo largo del tiempo.",
      },
      {
        title: "Vista de Espectador",
        description:
          "Observa partidas en curso y aprende de las estrategias de otros mientras esperas tu turno.",
      },
      {
        title: "Temporizador de Movimientos",
        description:
          "Límites de tiempo opcionales para mantener las partidas ágiles y emocionantes.",
      },
      {
        title: "Análisis de Partidas",
        description:
          "Revisa tus partidas y analiza movimientos para mejorar tu estrategia.",
      },
      {
        title: "Chat y Reacciones",
        description:
          "Interactúa con otros jugadores a través del chat y divertidos emotes de reacción.",
      },
    ],
    howToUse: [
      {
        title: "Inicia una Partida",
        description:
          "Crea una nueva sala de juego o únete a una existente desde el lobby.",
      },
      {
        title: "Elige el Modo de Juego",
        description:
          "Selecciona entre partidas casuales, clasificatorias o modo torneo.",
      },
      {
        title: "Haz tu Movimiento",
        description:
          "Haz clic en una columna para soltar tu ficha e intenta conectar cuatro en línea.",
      },
      {
        title: "Usa la Estrategia",
        description:
          "Planifica tus movimientos y estate atento a los posibles movimientos ganadores de tu oponente.",
      },
      {
        title: "Desafía a Otros",
        description:
          "Invita a compañeros a partidas o únete a la clasificación del torneo.",
      },
    ],
    cta: {
      title: "¿Listo para mostrar tus habilidades estratégicas?",
      description:
        "Experimenta el clásico juego Conecta 4 reinventado para la construcción de equipos virtuales.",
      buttonText: "Prueba Gratis por 2 Meses",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="connect-4"
      language="es"
      customContent={customContent}
    />
  );
}

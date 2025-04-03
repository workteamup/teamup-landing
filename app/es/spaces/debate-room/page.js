"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function DebateRoomPage() {
  const customContent = {
    title: "No más interrupciones incómodas constantes",
    tagline:
      "Estructura tus discusiones para mejores resultados y participación equitativa",
    features: [
      {
        title: "Cola de Oradores",
        description:
          "Orden de palabra justo y organizado que elimina las interrupciones y asegura que todos sean escuchados.",
      },
      {
        title: "Gestión del Tiempo",
        description:
          "Temporizadores integrados para turnos de palabra y discusiones de temas para mantener los debates enfocados y equilibrados.",
      },
      {
        title: "Organización de Temas",
        description:
          "Estructura clara para organizar temas de debate, puntos y contraargumentos.",
      },
      {
        title: "Sistema de Reacciones",
        description:
          "Opciones de reacción no verbal para mostrar acuerdo, desacuerdo o solicitar aclaraciones sin interrumpir.",
      },
      {
        title: "Herramientas de Moderación",
        description:
          "Potentes herramientas para moderadores para gestionar oradores, tiempo y mantener discusiones productivas.",
      },
      {
        title: "Tablero de Resumen",
        description:
          "Captura y muestra puntos clave y decisiones tomadas durante el debate para fácil referencia.",
      },
    ],
    howToUse: [
      {
        title: "Configura tu Debate",
        description:
          "Crea tu sala de debate y configura el formato y las reglas para tu discusión.",
      },
      {
        title: "Define los Temas",
        description:
          "Añade tus temas de debate y organízalos en el orden que deseas discutirlos.",
      },
      {
        title: "Asigna Roles",
        description:
          "Designa moderadores y participantes, y establece límites de tiempo de intervención si lo deseas.",
      },
      {
        title: "Facilita la Discusión",
        description:
          "Utiliza el sistema de cola y las herramientas de moderación para mantener un debate ordenado y productivo.",
      },
      {
        title: "Captura Conclusiones",
        description:
          "Documenta puntos clave y decisiones en el tablero de resumen para referencia futura.",
      },
    ],
    cta: {
      title: "¿Listo para discusiones más productivas?",
      description:
        "Experimenta debates estructurados que conducen a mejor entendimiento y resultados más claros.",
      buttonText: "Prueba Gratis por 2 Meses",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="debate-room"
      language="es"
      customContent={customContent}
    />
  );
}

"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function FarmyardPage() {
  const customContent = {
    title: "Un juego de equipo que sacará lo peor de ti",
    tagline: "Colabora en un entorno virtual de granja caótico y divertido",
    features: [
      {
        title: "Tareas Cooperativas",
        description:
          "Trabajen juntos para gestionar su granja virtual a través de varios escenarios desafiantes y divertidos.",
      },
      {
        title: "Caos Animal",
        description:
          "Lidia con animales virtuales impredecibles que crean situaciones hilarantes que requieren respuestas rápidas del equipo.",
      },
      {
        title: "Gestión de Recursos",
        description:
          "Coordina con tu equipo para gestionar eficientemente los recursos de la granja y manejar eventos inesperados.",
      },
      {
        title: "Mini-Juegos",
        description:
          "Participa en varios mini-juegos temáticos de granja, desde pastoreo de ovejas hasta carreras de cosecha.",
      },
      {
        title: "Eventos Climáticos",
        description:
          "Adáptate a condiciones climáticas cambiantes que afectan tus actividades agrícolas y crean nuevos desafíos.",
      },
      {
        title: "Sistema de Logros",
        description:
          "Gana insignias y recompensas por completar tareas y manejar emergencias de la granja en equipo.",
      },
    ],
    howToUse: [
      {
        title: "Entra en la Granja",
        description:
          "Únete a tu granja virtual y familiarízate con tus responsabilidades.",
      },
      {
        title: "Forma tu Equipo",
        description:
          "Únete con colegas y asigna diferentes roles y áreas de la granja.",
      },
      {
        title: "Inicia Actividades",
        description:
          "Elige entre varias actividades de granja y mini-juegos para abordar juntos.",
      },
      {
        title: "Maneja el Caos",
        description:
          "Trabajen juntos para gestionar eventos inesperados y mantener la granja funcionando sin problemas.",
      },
      {
        title: "Celebra Logros",
        description:
          "Sigue el progreso de tu equipo y celebra la finalización de tareas desafiantes de la granja.",
      },
    ],
    cta: {
      title: "¿Listo para una construcción de equipo agrícola?",
      description:
        "Únete a la diversión caótica de gestionar una granja virtual con tu equipo.",
      buttonText: "Prueba Gratis por 2 Meses",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="farmyard"
      language="es"
      customContent={customContent}
    />
  );
}

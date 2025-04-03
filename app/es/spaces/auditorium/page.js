"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function AuditoriumPage() {
  const customContent = {
    title: "¿Qué puede compararse con tener el escenario para ti mismo?",
    tagline: "Presenta con confianza en un auditorio virtual profesional",
    features: [
      {
        title: "Escenario Profesional",
        description:
          "Un escenario virtual bien diseñado que pone a los presentadores en el centro de atención y cautiva a la audiencia.",
      },
      {
        title: "Presentaciones Dinámicas",
        description:
          "Comparte diapositivas, videos y contenido interactivo con transiciones fluidas y visualización de alta calidad.",
      },
      {
        title: "Interacción con la Audiencia",
        description:
          "Herramientas integradas para sesiones de preguntas y respuestas, encuestas y retroalimentación para mantener a todos involucrados.",
      },
      {
        title: "Asientos Flexibles",
        description:
          "Acomoda audiencias de cualquier tamaño con ángulos de visión optimizados automáticamente para todos.",
      },
      {
        title: "Controles del Presentador",
        description:
          "Controles fáciles de usar para gestionar presentaciones, destacar oradores y manejar interacciones con la audiencia.",
      },
      {
        title: "Grabación y Compartir",
        description:
          "Graba presentaciones para verlas después y compártelas fácilmente con miembros del equipo que no pudieron asistir.",
      },
    ],
    howToUse: [
      {
        title: "Configura tu Auditorio",
        description:
          "Crea tu espacio de auditorio y personalízalo según tus necesidades de presentación.",
      },
      {
        title: "Prepara tu Contenido",
        description:
          "Sube tus materiales de presentación y pruébalos en el entorno virtual.",
      },
      {
        title: "Invita a tu Audiencia",
        description:
          "Comparte el enlace del auditorio con tu audiencia y establece permisos de visualización.",
      },
      {
        title: "Involucra a tu Audiencia",
        description:
          "Utiliza funciones interactivas como encuestas y preguntas y respuestas para mantener el compromiso de la audiencia.",
      },
      {
        title: "Seguimiento",
        description:
          "Comparte grabaciones y recopila comentarios para mejorar futuras presentaciones.",
      },
    ],
    cta: {
      title: "¿Listo para elevar tus presentaciones?",
      description:
        "Transforma tus presentaciones virtuales en experiencias cautivadoras que dejan una impresión duradera.",
      buttonText: "Prueba Gratis por 2 Meses",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="auditorium"
      language="es"
      customContent={customContent}
    />
  );
}

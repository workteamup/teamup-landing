"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByRolePage from "../../../components/new-web/solution-by-role-page";

export default function MarketingSolutionPage() {
  // Data extracted from solutions-by-role.md for Marketing (Spanish version)
  const marketingData = {
    title: "Equipos de Marketing",
    hero: {
      headline: "Crea Experiencias de Marca Auténticas en Espacios Virtuales",
      subheadline: "Team Up! ayuda a los equipos de marketing a colaborar, crear y mostrar experiencias de marca en entornos 3D inmersivos.",
      cta: "Lanza Tu Espacio de Marca"
    },
    benefits: [
      {
        title: "Inmersión de Marca",
        description: "Crea espacios virtuales que encarnen la identidad y los valores de tu marca para un compromiso interno y externo más auténtico."
      },
      {
        title: "Colaboración Creativa",
        description: "Permite que los equipos de marketing ideen y creen juntos en tiempo real, independientemente de su ubicación física."
      },
      {
        title: "Marketing Experiencial",
        description: "Transforma los activos de marketing tradicionales en experiencias interactivas que resuenan tanto con los miembros del equipo como con las audiencias."
      }
    ],
    stats: [
      {
        value: "68%",
        description: "de los equipos de marketing luchan por mantener la consistencia de marca en equipos distribuidos.",
        source: "Marketing Week, 2023"
      },
      {
        value: "73%",
        description: "de los marketers informan que las herramientas de colaboración virtual no apoyan eficazmente los procesos creativos.",
        source: "Creative Management Report, 2023"
      },
      {
        value: "4.2x",
        description: "mayores tasas de engagement para experiencias de marca interactivas en comparación con formatos de contenido tradicionales."
      }
    ],
    features: [
      {
        title: "Entornos de Marca",
        description: "Crea espacios 3D personalizados que reflejen la identidad visual, valores y personalidad de tu marca."
      },
      {
        title: "Herramientas Colaborativas",
        description: "Accede a herramientas especializadas para lluvia de ideas creativas, revisión de contenido y planificación de campañas."
      },
      {
        title: "Exhibición de Experiencias",
        description: "Organiza eventos virtuales y lanzamientos de productos en espacios inmersivos que dan vida a tu marca."
      }
    ],
    spotlight: [
      {
        title: "Centro de Inmersión de Marca",
        description: "Crea un espacio virtual central donde los miembros del equipo puedan experimentar tus directrices de marca, valores y voz en un formato interactivo. Los nuevos miembros del equipo pueden explorar elementos de marca en 3D en lugar de leer documentos estáticos."
      },
      {
        title: "Sala de Guerra de Campaña",
        description: "Colabora en campañas de marketing en un espacio dedicado con tableros visuales, áreas de revisión de contenido y herramientas de retroalimentación en tiempo real. Mantén todos los activos y discusiones de la campaña en un entorno inmersivo."
      },
      {
        title: "Exhibición Virtual de Productos",
        description: "Presenta productos y servicios en entornos 3D interactivos que permiten a los miembros del equipo comprender características y beneficios a través de la experiencia en lugar de la descripción."
      }
    ],
    testimonial: {
      quote: "Team Up! transformó la forma en que colabora nuestro equipo global de marketing. En lugar de directrices de marca estáticas, ahora tenemos un espacio de marca inmersivo donde los miembros del equipo realmente experimentan nuestros valores y voz. Nuestra alineación de campaña mejoró dramáticamente.",
      author: "Sarah Chen",
      position: "CMO, Innovate Brands"
    },
    comparisons: [
      {
        traditional: "Documentos de Directrices de Marca",
        advantage: "Da vida a tu marca con entornos 3D inmersivos e interactivos que los empleados pueden experimentar, no solo leer."
      },
      {
        traditional: "Herramientas de Gestión de Redes Sociales",
        advantage: "Crea momentos auténticos y compartibles a partir de eventos 3D virtuales que generan engagement orgánico en lugar de contenido corporativo programado."
      },
      {
        traditional: "Talleres de Marca Presenciales",
        advantage: "Organiza sesiones virtuales de inmersión de marca escalables en espacios 3D personalizados accesibles para todos los miembros del equipo, independientemente de su ubicación."
      }
    ],
    useCases: [
      "Crea una experiencia de inmersión de marca virtual en un entorno 3D personalizado para nuevas contrataciones para alinearlos con tu visión a través de elementos interactivos.",
      "Organiza un evento virtual de lanzamiento de producto en nuestro Auditorio para energizar y alinear al equipo de marketing con demostraciones inmersivas.",
      "Facilita una sesión colaborativa de planificación de campaña en un espacio virtual de marca con pizarras interactivas y plataformas de votación."
    ],
    howItWorks: [
      "Trabaja con nuestro equipo de diseño para crear entornos 3D personalizados que muestren la identidad de tu marca.",
      "Configura tu centro de marketing con plantillas relevantes para diferentes tipos de actividades de marca.",
      "Lanza tus espacios de marca y comienza a crear experiencias compartibles para audiencias internas y externas."
    ],
    getStarted: {
      heading: "¿Listo para dar vida a tu marca en espacios virtuales?",
      description: "Lanza tu espacio 3D de marca en minutos y comienza a crear experiencias de marca auténticas que resuenen.",
      cta: "Reserva una Demo Enfocada en Marketing"
    }
  };

  return (
    <WebLayout>
      <SolutionByRolePage roleData={marketingData} />
    </WebLayout>
  );
} 
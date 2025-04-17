"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByPainPage from "../../../components/new-web/solution-by-pain-page";

export default function RemoteDisconnectionSolutionPage() {
  const disconnectionData = {
    title: "Desconexión Remota",
    hero: {
      headline: "Acorta la Distancia, Construye Conexiones Reales",
      subheadline: "Combate la desconexión remota con los entornos 3D inmersivos de Team Up! que hacen que lo virtual se sienta personal.",
      cta: "Conecta a tu Equipo Hoy"
    },
    reasons: [
      {
        description: "Los trabajadores remotos reportan sentirse 2.5 veces más aislados que sus colegas en la oficina, impactando directamente su bienestar y rendimiento.",
        source: "Buffer State of Remote Work, 2023"
      },
      {
        description: "La falta de conexión lleva a malentendidos, menor colaboración y conocimiento aislado."
      },
      {
        description: "Los equipos desconectados luchan por construir confianza, compartir conocimientos y mantener la innovación a lo largo del tiempo."
      }
    ],
    stats: [
      {
        value: "70%",
        description: "de los trabajadores remotos se sienten desconectados de su equipo, con un 33% reportándolo como su mayor desafío.",
        source: "GitLab Remote Work Report, 2023"
      },
      {
        value: "50%",
        description: "Los equipos remotos experimentan un 50% más de malentendidos y retrasos en proyectos debido a la falta de interacción espontánea."
      },
      {
        value: "30%",
        description: "Las empresas con equipos remotos conectados ven tasas de innovación 30% más altas y resolución de problemas 25% más rápida."
      }
    ],
    benefits: [
      {
        description: "Crea espacios de café virtuales en entornos 3D como nuestro espacio Fogata para conversaciones espontáneas que imitan las interacciones de oficina."
      },
      {
        description: "Organiza eventos sociales virtuales en entornos inmersivos que fomentan la participación y la conexión genuina más allá de las tareas laborales."
      },
      {
        description: "Proporciona oportunidades de mentoría virtual en espacios personalizados que fomentan el crecimiento y el intercambio de conocimientos a través de fronteras geográficas."
      }
    ],
    comparisons: [
      {
        traditional: "Videoconferencias estándar para reuniones de equipo con vistas en cuadrícula 2D",
        advantage: "Entornos 3D inmersivos con audio espacial que simulan interacciones presenciales, permitiendo dinámicas grupales naturales y conversaciones espontáneas."
      }
    ],
    useCases: [
      "Configura una cafetería virtual como Punto de Encuentro permanente donde los miembros del equipo pueden pasar para charlas casuales durante el día.",
      "Organiza almuerzos virtuales de equipo en nuestro entorno Fogata con tarjetas de temas de conversación para facilitar discusiones significativas.",
      "Crea un club de lectura o grupo de hobbies virtual en un espacio personalizado para ayudar a los miembros del equipo a conectar a través de intereses compartidos más allá del trabajo."
    ],
    spotlight: [
      {
        title: "Audio Espacial",
        description: "Habla naturalmente con compañeros cercanos mientras te mueves por espacios 3D, justo como en la vida real."
      },
      {
        title: "Objetos Interactivos",
        description: "Desde pizarras virtuales hasta mesas de juegos, nuestros entornos incluyen elementos que promueven la colaboración y la conversación."
      }
    ],
    testimonial: {
      quote: "Team Up! ha hecho que nuestro equipo global se sienta como si estuviéramos todos en la misma sala. Los entornos 3D crean una sensación de lugar que Zoom nunca pudo lograr, y hemos visto la colaboración aumentar un 40% entre nuestros equipos de EE.UU. y Europa.",
      author: "Alejandro Vega",
      position: "Líder de Equipo, Global Creative Agency"
    },
    howItWorks: [
      "Diseña tus espacios virtuales para reflejar la personalidad y estilo de trabajo de tu equipo usando nuestras herramientas intuitivas de creación.",
      "Invita a los miembros del equipo a unirse con un simple enlace y personalizar sus avatares 3D para reconocimiento instantáneo.",
      "Comienza a interactuar en tiempo real con audio espacial y conversaciones basadas en proximidad, justo como en persona."
    ],
    getStarted: {
      heading: "¿Listo para conectar a tu equipo?",
      description: "Comienza tu prueba gratuita hoy y experimenta la diferencia en solo una semana.",
      cta: "Comienza tu Prueba Gratuita"
    }
  };

  return (
    <WebLayout>
      <SolutionByPainPage painData={disconnectionData} />
    </WebLayout>
  );
} 
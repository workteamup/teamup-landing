"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByRolePage from "../../../components/new-web/solution-by-role-page";

export default function EmployeesSolutionPage() {
  // Spanish version of Employees data
  const employeesData = {
    title: "Empleados",
    hero: {
      headline: "Haz que el Trabajo Remoto sea más Humano y Agradable",
      subheadline: "Team Up! te ayuda a conectar con colegas, colaborar eficazmente y disfrutar de tu jornada laboral, sin importar dónde te encuentres.",
      cta: "Descubre Cómo Funciona"
    },
    benefits: [
      {
        title: "Conexiones Significativas",
        description: "Construye relaciones reales con colegas a través de interacciones naturales que van más allá de las videollamadas y los mensajes de chat."
      },
      {
        title: "Equilibrio Trabajo-Vida",
        description: "Disfruta de la flexibilidad del trabajo remoto mientras mantienes las conexiones sociales que hacen que el trabajo sea satisfactorio."
      },
      {
        title: "Colaboración Efectiva",
        description: "Trabaja juntos de manera más natural en espacios virtuales diseñados para diferentes tipos de trabajo en equipo e interacción."
      },
      {
        title: "Crecimiento Profesional",
        description: "Desarrolla tus habilidades y visibilidad dentro de la organización a través de mejores conexiones con compañeros y líderes."
      }
    ],
    stats: [
      {
        value: "67%",
        description: "de los empleados remotos informan sentirse desconectados de sus colegas al menos parte del tiempo.",
        source: "Informe de Trabajo Remoto, 2023"
      },
      {
        value: "78%",
        description: "de los trabajadores dicen que sentirse conectados con los colegas es esencial para la satisfacción laboral."
      },
      {
        value: "42%",
        description: "de los empleados remotos extrañan las interacciones espontáneas y la construcción de relaciones del trabajo presencial."
      }
    ],
    features: [
      {
        title: "Espacios Sociales",
        description: "Conéctate con colegas en entornos virtuales diseñados para conversaciones casuales y construcción de relaciones."
      },
      {
        title: "Herramientas Colaborativas",
        description: "Accede a herramientas intuitivas que hacen que trabajar con compañeros sea tan natural como estar en la misma habitación."
      },
      {
        title: "Actividades Divertidas",
        description: "Participa en juegos y eventos de equipo que aportan disfrute y conexión a tu jornada laboral remota."
      }
    ],
    spotlight: [
      {
        title: "Sala de Descanso Virtual",
        description: "Tómate un descanso y chatea con colegas en un espacio casual diseñado para las conversaciones espontáneas que construyen relaciones. Entra en cualquier momento para encontrar compañeros y disfrutar de un momento de conexión durante tu día."
      },
      {
        title: "Espacio de Trabajo Colaborativo",
        description: "Trabaja junto a compañeros en un entorno virtual compartido que hace que la colaboración se sienta natural. Muévete entre diferentes áreas para trabajo enfocado, discusiones de equipo o sesiones creativas."
      },
      {
        title: "Centro de Actividades de Equipo",
        description: "Participa en juegos divertidos y ejercicios de formación de equipos que fortalecen las relaciones mientras proporcionan un descanso bienvenido de las tareas rutinarias. Las actividades regulares te ayudan a sentirte parte del equipo."
      }
    ],
    testimonial: {
      quote: "Como alguien que ha trabajado remotamente durante años, Team Up! ha cambiado completamente lo conectado que me siento con mis colegas. He construido amistades que nunca habría hecho solo a través de videollamadas, y el trabajo se siente mucho más agradable.",
      author: "Jamie Rivera",
      position: "Diseñador de Producto, Remote First Inc."
    },
    comparisons: [
      {
        traditional: "Email y Chat",
        advantage: "Reemplaza la comunicación solo de texto con interacciones ricas y contextuales en espacios virtuales donde puedes ver y escuchar a los colegas en un entorno natural."
      },
      {
        traditional: "Reuniones por Video",
        advantage: "Ve más allá de las rígidas videollamadas a entornos virtuales flexibles donde puedes dividirte en grupos pequeños, trabajar lado a lado o tener conversaciones privadas."
      },
      {
        traditional: "Oficina Presencial",
        advantage: "Disfruta de los mejores aspectos de la vida de oficina—conversaciones espontáneas, vínculos de equipo y energía colaborativa—mientras mantienes la flexibilidad del trabajo remoto."
      }
    ],
    useCases: [
      "Entra en la sala de descanso virtual durante tu pausa para el café para ponerte al día con colegas y construir relaciones.",
      "Colabora con compañeros en un espacio compartido donde puedes discutir ideas, compartir pantallas y resolver problemas juntos.",
      "Participa en juegos semanales de equipo que proporcionan una forma divertida de conectar con colegas más allá de las tareas laborales."
    ],
    howItWorks: [
      "Crea tu avatar personalizado y configura tu perfil para representarte en el espacio de trabajo virtual.",
      "Únete a los espacios existentes de tu equipo o ayuda a crear nuevos para diferentes tipos de trabajo e interacción.",
      "Incorpora Team Up! en tu rutina diaria, entrando para sesiones de colaboración, reuniones de equipo o conversaciones casuales."
    ],
    getStarted: {
      heading: "¿Listo para una experiencia de trabajo remoto más conectada?",
      description: "Únete a miles de trabajadores remotos que están construyendo relaciones significativas con Team Up!",
      cta: "Comienza tu Prueba Gratuita"
    }
  };

  return (
    <WebLayout>
      <SolutionByRolePage roleData={employeesData} />
    </WebLayout>
  );
}

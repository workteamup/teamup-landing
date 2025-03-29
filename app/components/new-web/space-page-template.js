"use client";

import WebLayout from "./layout";
import SpaceTemplate from "./space-template";
import Button from "./button";
import { spaces } from "../../data/spaces";

/**
 * SpacePageTemplate Component
 * A helper component to easily create space pages with consistent design
 * 
 * @param {Object} props
 * @param {string} props.spaceId - The ID of the space from data/spaces.js
 * @param {string} props.language - The language code ("en" or "es")
 * @param {Object} props.translations - Optional translations for static text
 */
export default function SpacePageTemplate({ 
  spaceId,
  language = "en",
  translations = null
}) {
  // Find the space data
  const space = spaces.find(space => space.id === spaceId);
  
  // Default translations in English
  const defaultTranslations = {
    tagline: "Coming Soon",
    underDevelopment: "This space is under development",
    workingHard: `We're working hard to bring you the ${space?.title} space. In the meantime, you can try our Planning space or explore other available spaces.`,
    tryPlanning: "Try Planning Space",
    exploreAll: "Explore All Spaces" 
  };
  
  // Spanish translations
  const spanishTranslations = {
    tagline: "Próximamente",
    underDevelopment: "Este espacio está en desarrollo",
    workingHard: `Estamos trabajando arduamente para brindarte el espacio ${space?.title}. Mientras tanto, puedes probar nuestro espacio de Planificación o explorar otros espacios disponibles.`,
    tryPlanning: "Probar Espacio de Planificación",
    exploreAll: "Explorar Todos los Espacios"
  };
  
  // Select language translations or use custom ones if provided
  const t = translations || (language === "es" ? spanishTranslations : defaultTranslations);
  
  // Features based on language
  const features = language === "es" 
    ? [
        {
          title: "Colaboración en Equipo",
          description: "Trabaja en conjunto con tu equipo en tiempo real."
        },
        {
          title: "Interfaz Intuitiva",
          description: "Diseño fácil de usar que requiere un entrenamiento mínimo para comenzar."
        },
        {
          title: "Entorno Personalizable",
          description: "Adapta el espacio para que coincida con las necesidades y preferencias de tu equipo."
        },
        {
          title: "Integración de Video y Voz",
          description: "Herramientas de comunicación incorporadas para interacciones fluidas del equipo."
        },
        {
          title: "Elementos Interactivos",
          description: "Involucra a tu equipo con componentes y actividades interactivas."
        },
        {
          title: "Acceso Multiplataforma",
          description: "Accede desde cualquier dispositivo, en cualquier lugar, en cualquier momento."
        }
      ]
    : [
        {
          title: "Team Collaboration",
          description: "Work together seamlessly with your team in real-time."
        },
        {
          title: "Intuitive Interface",
          description: "Easy-to-use design that requires minimal training to get started."
        },
        {
          title: "Customizable Environment",
          description: "Tailor the space to match your team's needs and preferences."
        },
        {
          title: "Video & Voice Integration",
          description: "Built-in communication tools for smooth team interactions."
        },
        {
          title: "Interactive Elements",
          description: "Engage your team with interactive components and activities."
        },
        {
          title: "Cross-Platform Access",
          description: "Access from any device, anywhere, anytime."
        }
      ];

  if (!space) {
    return (
      <WebLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <p className="text-xl text-red-500">Space not found</p>
        </div>
      </WebLayout>
    );
  }

  return (
    <WebLayout>
      <SpaceTemplate
        tagline={t.tagline}
        imageUrl={space.image}
        title={space.title}
        features={features}
        howToUse={[]}
      >
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gray-cloud rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-phantom">
              {t.underDevelopment}
            </h2>
            <p className="text-center mb-6 text-gray-graphite">
              {t.workingHard}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href={`/${language}/spaces/planning`} size="lg">
                {t.tryPlanning}
              </Button>
              <Button href={`/${language}/spaces`} variant="outline" size="lg">
                {t.exploreAll}
              </Button>
            </div>
          </div>
        </section>
      </SpaceTemplate>
    </WebLayout>
  );
} 
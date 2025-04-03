"use client";

import WebLayout from "./layout";
import SpaceTemplate from "./space-template";
import PageTitle from "./page-title";
import Button from "./button";
import { spaces } from "../../data/spaces";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * SpacePageTemplate Component
 * A helper component to easily create space pages with consistent design
 *
 * @param {Object} props
 * @param {string} props.spaceId - The ID of the space from data/spaces.js
 * @param {string} props.language - The language code ("en" or "es")
 * @param {string} props.translations - Optional translations for static text
 * @param {Object} props.customContent - Optional custom content for the space
 */
export default function SpacePageTemplate({
  spaceId,
  language = "en",
  translations = null,
  customContent = null,
}) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end center"],
  });

  const imageRotate = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const imageTranslateZ = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  // Find the space data
  const space = spaces.find((space) => space.id === spaceId);

  // Get the hero image path based on spaceId
  const getHeroImage = () => {
    try {
      return `/spaces/${spaceId}-hero.jpg`;
    } catch {
      return "/spaces/placeholder-hero.jpg"; // Fallback to placeholder
    }
  };

  // Default translations in English
  const defaultTranslations = {
    tagline: "Coming Soon",
    underDevelopment: "This space is under development",
    workingHard: `We're working hard to bring you the ${space?.title} space. In the meantime, you can try our Planning space or explore other available spaces.`,
    tryPlanning: "Try Planning Space",
    exploreAll: "Explore All Spaces",
    cta: {
      title: "Ready to transform your team collaboration?",
      description: "Experience the power of virtual spaces with your team.",
      buttonText: "Try Free for 2 Months",
    },
  };

  // Spanish translations
  const spanishTranslations = {
    tagline: "Próximamente",
    underDevelopment: "Este espacio está en desarrollo",
    workingHard: `Estamos trabajando arduamente para brindarte el espacio ${space?.title}. Mientras tanto, puedes probar nuestro espacio de Planificación o explorar otros espacios disponibles.`,
    tryPlanning: "Probar Espacio de Planificación",
    exploreAll: "Explorar Todos los Espacios",
    cta: {
      title: "¿Listo para transformar la colaboración de tu equipo?",
      description:
        "Experimenta el poder de los espacios virtuales con tu equipo.",
      buttonText: "Prueba Gratis por 2 Meses",
    },
  };

  // Select language translations or use custom ones if provided
  const t =
    translations ||
    (language === "es" ? spanishTranslations : defaultTranslations);

  // Default features based on language
  const defaultFeatures =
    language === "es"
      ? [
          {
            title: "Colaboración en Equipo",
            description: "Trabaja en conjunto con tu equipo en tiempo real.",
          },
          {
            title: "Interfaz Intuitiva",
            description:
              "Diseño fácil de usar que requiere un entrenamiento mínimo para comenzar.",
          },
          {
            title: "Entorno Personalizable",
            description:
              "Adapta el espacio para que coincida con las necesidades y preferencias de tu equipo.",
          },
          {
            title: "Integración de Video y Voz",
            description:
              "Herramientas de comunicación incorporadas para interacciones fluidas del equipo.",
          },
          {
            title: "Elementos Interactivos",
            description:
              "Involucra a tu equipo con componentes y actividades interactivas.",
          },
          {
            title: "Acceso Multiplataforma",
            description:
              "Accede desde cualquier dispositivo, en cualquier lugar, en cualquier momento.",
          },
        ]
      : [
          {
            title: "Team Collaboration",
            description:
              "Work together seamlessly with your team in real-time.",
          },
          {
            title: "Intuitive Interface",
            description:
              "Easy-to-use design that requires minimal training to get started.",
          },
          {
            title: "Customizable Environment",
            description:
              "Tailor the space to match your team's needs and preferences.",
          },
          {
            title: "Video & Voice Integration",
            description:
              "Built-in communication tools for smooth team interactions.",
          },
          {
            title: "Interactive Elements",
            description:
              "Engage your team with interactive components and activities.",
          },
          {
            title: "Cross-Platform Access",
            description: "Access from any device, anywhere, anytime.",
          },
        ];

  // Default how to use steps
  const defaultHowToUse =
    language === "es"
      ? [
          {
            title: "Crea tu Espacio",
            description:
              "Selecciona este espacio de la lista de espacios disponibles.",
          },
          {
            title: "Invita a tu Equipo",
            description:
              "Comparte el enlace con los miembros de tu equipo para que se unan.",
          },
          {
            title: "Personaliza el Entorno",
            description:
              "Ajusta la configuración según las necesidades de tu equipo.",
          },
        ]
      : [
          {
            title: "Create your Space",
            description: "Select this space from the list of available spaces.",
          },
          {
            title: "Invite Your Team",
            description: "Share the link with your team members to join.",
          },
          {
            title: "Customize the Environment",
            description: "Adjust the settings according to your team's needs.",
          },
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

  // Use custom content if provided, otherwise use defaults
  const content = customContent || {
    title: space.title,
    tagline: t.tagline,
    features: defaultFeatures,
    howToUse: defaultHowToUse,
    cta: t.cta,
  };

  return (
    <WebLayout>
      {/* Hero Section Container */}
      <div className="relative min-h-[120vh]" ref={heroRef}>
        {/* Title Section */}
        <div className="relative">
          <PageTitle
            title={content.title}
            align="center"
            size="large"
            background="brand-dark"
            theme="dark"
          />
        </div>

        {/* Hero Image Section */}
        <div className="container mx-auto px-4">
          <div className="relative -mt-24 max-w-5xl mx-auto z-10">
            <motion.div
              style={{
                rotateX: imageRotate,
                translateZ: imageTranslateZ,
                scale: imageScale,
                transformPerspective: 1500,
                transformOrigin: "top",
              }}
              className="relative z-10"
              transition={{
                type: "spring",
                stiffness: 2,
                damping: 200,
                restDelta: 0.000001,
                mass: 15,
                velocity: 0.02,
              }}
            >
              <img
                src={getHeroImage()}
                alt={content.title}
                className="w-full rounded-3xl shadow-xl"
                onError={(e) => {
                  e.target.src = "/spaces/placeholder-hero.jpg";
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-24">
        {/* Features Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-phantom">
            {language === "es" ? "Características" : "Features"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-phantom">
                  {feature.title}
                </h3>
                <p className="text-gray-space">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Use Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-phantom">
            {language === "es" ? "Cómo Usar" : "How to Use"}
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {content.howToUse.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
                    {step.title}
                  </h3>
                  <p className="text-gray-space">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-cloud rounded-xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-phantom">
            {content.cta.title}
          </h2>
          <p className="text-center mb-6 text-gray-graphite">
            {content.cta.description}
          </p>
          <div className="flex justify-center">
            <Button href="https://app.teamup.works/signup" size="lg">
              {content.cta.buttonText}
            </Button>
          </div>
        </section>
      </div>
    </WebLayout>
  );
}

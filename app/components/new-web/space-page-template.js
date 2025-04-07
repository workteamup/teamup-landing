"use client";

import WebLayout from "./layout";
import SpaceTemplate from "./space-template";
import PageTitle from "./page-title";
import Button from "./button";
import BadgeSectionTitle from "./badge-section-title";
import IconSectionTitle from "./icon-section-title";
import MinimalFeatureCard from "./minimal-feature-card";
import StepItem from "./step-item";
import Testimonial from "./testimonial";
import CTASection from "./cta-section";
import { spaces } from "../../data/spaces";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { brand3Tints, brand1Tints, brand2Tints } from "../../lib/design-tokens";
import StepsList from "./steps-list";

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
    offset: ["-100px", "33vh"],
  });

  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [45, 0]);
  const imageTranslateZ = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  // Color pairing system for name and underline
  const colorPairs = [
    {
      nameColor: "text-brand-blue", // #3F89F6
      underlineFilter:
        "[filter:invert(40%)_sepia(57%)_saturate(2771%)_hue-rotate(227deg)_brightness(97%)_contrast(98%)]", // for brand-purple #635DF5
    },
    {
      nameColor: "text-brand-purple", // #635DF5
      underlineFilter:
        "[filter:invert(80%)_sepia(66%)_saturate(1217%)_hue-rotate(157deg)_brightness(97%)_contrast(98%)]", // for brand-teal #67DAFA
    },
    {
      nameColor: "text-brand-teal", // #67DAFA
      underlineFilter:
        "[filter:invert(53%)_sepia(92%)_saturate(1850%)_hue-rotate(198deg)_brightness(98%)_contrast(98%)]", // for brand-blue #3F89F6
    },
  ];

  // Randomly select a color pair
  const randomPair = colorPairs[Math.floor(Math.random() * colorPairs.length)];

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

      {/* Welcome Section */}
      <div className="container mx-auto px-4 py-24 text-center max-w-4xl">
        <h2 className="text-5xl font-semibold text-brand-dark font-poppins mb-2">
          Welcome to the{" "}
          <span className={`${randomPair.nameColor} relative inline-block`}>
            {space.title}
            <img
              src="/svg/underline.svg"
              alt=""
              className={`absolute -bottom-4 left-1/2 h-4 w-full ${randomPair.underlineFilter}`}
              style={{
                transform: `translateX(-50%) scaleX(${Math.min(
                  Math.max(space.title.length / 5, 1),
                  3
                )})`,
                transformOrigin: "center",
                objectFit: "fill",
              }}
              aria-hidden="true"
            />
          </span>{" "}
          space
        </h2>
        <p className="text-2xl text-gray-space">
          {language === "es"
            ? "Descubre un nuevo nivel de colaboración y productividad en equipo"
            : "Discover a new level of team collaboration and productivity"}
        </p>
      </div>

      {/* Testimonial Section */}
      <div className="container mx-auto px-4 py-16">
        <Testimonial
          quote="With Dovetail, the work we've done in the past is always available so that the work we do in the future isn't redundant."
          name="Roy Olende"
          jobTitle="Head of UX Research"
          companyLogo="/svg/new-logo-dark.svg"
          companyName="Team Up"
          align="center"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-24">
        {/* Features Section */}
        <section
          className="py-16 md:py-24 -mx-4 px-8 md:px-24 rounded-[2.5rem]"
          style={{
            background: `linear-gradient(to bottom, white 0%, ${brand3Tints.tint90} 100%)`,
          }}
        >
          <div className="container mx-auto">
            <IconSectionTitle
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              }
              title={language === "es" ? "Características" : "Features"}
              align="center"
              theme="purple"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.features.map((feature, index) => (
                <MinimalFeatureCard key={index} text={feature.title} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Mid-page CTA Section - Full Width */}
      <CTASection
        title="Ready to enhance your team collaboration?"
        description="Start using this space today and transform how your team works together."
        buttonText="Try Free for 2 Months"
        buttonUrl="https://app.teamup.works/signup"
        secondaryButtonText="Contact Sales"
        secondaryButtonUrl="/contact"
        theme="light"
        align="center"
        titleSize="lg"
        background="linear-gradient(to right, #F0FBFF, #ECF3FE)"
      />

      {/* Continue with rest of content */}
      <div className="container mx-auto px-4 py-12 space-y-24">
        {/* How to Use Section */}
        <section
          className="py-16 md:py-24 -mx-4 px-8 md:px-24 rounded-[2.5rem]"
          style={{
            background: `linear-gradient(to bottom, white 0%, ${brand1Tints.tint90} 100%)`,
          }}
        >
          <div className="container mx-auto">
            <IconSectionTitle
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <path d="M12 20V10M18 20V4M6 20v-4" />
                </svg>
              }
              title={language === "es" ? "Cómo Usar" : "How to Use"}
              align="center"
              theme="teal"
            />
            <div className="max-w-4xl mx-auto">
              <StepsList
                steps={content.howToUse.map((step) => ({
                  ...step,
                  image: getHeroImage(), // Using the space image as a placeholder
                }))}
                theme="teal"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section
          className="py-16 md:py-24 -mx-4 px-8 md:px-24 rounded-[2.5rem]"
          style={{
            background: `linear-gradient(to bottom, white 0%, ${brand2Tints.tint90} 100%)`,
          }}
        >
          <div className="container mx-auto">
            <IconSectionTitle
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2"></rect>
                  <path d="M16 3h-8v4h8V3z"></path>
                </svg>
              }
              title="Use Cases"
              align="center"
              theme="blue"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MinimalFeatureCard text="Use Case 1" />
              <MinimalFeatureCard text="Use Case 2" />
              <MinimalFeatureCard text="Use Case 3" />
            </div>
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

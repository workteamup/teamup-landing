"use client";
import WebLayout from "../components/new-web/layout";
import { useTranslations } from "../contexts/TranslationContext";
import Image from "next/image";
import Button from "../components/new-web/button";
import LogoCarousel from "../components/new-web/logo-carousel";
import TargetAudienceCards from "../components/new-web/target-audience-cards";
import UseCasesSection from "../components/new-web/use-cases-section";
import Hero from "../components/new-web/hero";
import ProductTour from "../components/new-web/product-tour";
import BookingEmbed from "../components/new-web/booking-embed";
import { semanticColors } from "../lib/design-tokens";

// Metadata needs to be handled differently with client components
// Either through a separate metadata.js file or by removing the client directive
export default function HomePage() {
  const t = useTranslations();

  // Use cases data
  const useCasesData = [
    {
      title: t("UseCases.cases.teamBuilding.title"),
      description: t("UseCases.cases.teamBuilding.description"),
      image: "/images/team-building-case.jpg",
      bulletPoints: [],
    },
    {
      title: t("UseCases.cases.remoteMeetings.title"),
      description: t("UseCases.cases.remoteMeetings.description"),
      image: "/images/remote-meetings-case.jpg",
      bulletPoints: [],
    },
    {
      title: t("UseCases.cases.onboarding.title"),
      description: t("UseCases.cases.onboarding.description"),
      image: "/images/onboarding-case.jpg",
      bulletPoints: [],
    },
    {
      title: t("UseCases.cases.companyEvents.title"),
      description: t("UseCases.cases.companyEvents.description"),
      image: "/images/company-events-case.jpg",
      bulletPoints: [],
    },
  ];

  return (
    <WebLayout>
      {/* Hero Section */}
      <Hero />

      {/* Logo Carousel - Dark Variant */}
      <LogoCarousel variant="dark" logoCount={12} />

      {/* Product Tour Section */}
      <ProductTour
        subtitle="DEMO DEL PRODUCTO"
        title="Cómo funciona Team Up!"
        bgImage="/images/debate.jpg"
        videoSrc="/videos/placeholder.mp4"
      />

      {/* Target Audience Cards */}
      <TargetAudienceCards
        title="Team Up es la Solución Perfecta Para Tu Equipo"
        description="Descubre cómo Team Up puede ayudar a diferentes roles en tu organización a mejorar el compromiso y la productividad del equipo."
        language="es"
      />

      {/* Use Cases Section */}
      <UseCasesSection
        title={t("UseCases.sectionTitle")}
        description={t("UseCases.sectionDescription")}
        useCases={useCasesData}
        primaryCTAText={t("UseCases.primaryCTA")}
        secondaryCTAText={t("UseCases.secondaryCTA")}
      />

      {/* Custom Space CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-tr from-brand-teal via-brand-blue to-brand-purple text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("CustomSpaceCTA.title")}
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            {t("CustomSpaceCTA.description")}
          </p>
          <Button
            href="/contact"
            variant="secondary"
            size="xl"
            className="font-bold text-brand-purple hover:bg-white"
          >
            {t("CustomSpaceCTA.buttonText")}
          </Button>
        </div>
      </section>

      {/* Add an ID and key to the BookingEmbed component */}
      <div id="booking-section">
        <BookingEmbed key="booking-embed-es" />
      </div>

      {/* Features section */}
      <section className="py-16 bg-gray-cloud rounded-xl my-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-phantom">
          Por Qué los Equipos Adoran Nuestra Oficina Virtual
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-brand-teal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
              Team Building
            </h3>
            <p className="text-gray-space">
              Fomenta conexiones significativas en tu equipo remoto con espacios
              virtuales colaborativos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-brand-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
              Productividad
            </h3>
            <p className="text-gray-space">
              Optimiza los flujos de trabajo y mejora la productividad con
              nuestros entornos virtuales intuitivos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-brand-purple"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
              Compromiso
            </h3>
            <p className="text-gray-space">
              Mantén a tu equipo comprometido y motivado con actividades
              interactivas y competiciones divertidas.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
            ¿Listo para transformar la experiencia de tu equipo remoto?
          </h2>
          <p className="text-lg text-gray-graphite mb-8">
            Únete a miles de equipos que ya utilizan Team Up! para crear lugares
            de trabajo remotos más conectados, productivos y felices.
          </p>
          <Button href="https://app.teamup.works/signup" size="lg">
            Comienza Tu Prueba Gratuita
          </Button>
        </div>
      </section>
    </WebLayout>
  );
}

"use client";
import WebLayout from "../components/new-web/layout";
import { useTranslations } from "../contexts/TranslationContext";
import Image from "next/image";
import Button from "../components/new-web/button";
import LogoCarousel from "../components/new-web/logo-carousel";
import { semanticColors } from "../lib/design-tokens";

// Metadata needs to be handled differently with client components
// Either through a separate metadata.js file or by removing the client directive
export default function HomePage() {
  const t = useTranslations();

  return (
    <WebLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-brand-purple/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            {/* Left content column */}
            <div className="w-full lg:w-3/5 space-y-6">
              <p className="text-gray-graphite font-semibold">
                La solución #1 para un espacio de trabajo flexible
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                Equipos más felices <br />
                rinden mejor
              </h1>

              <p className="text-lg text-gray-graphite max-w-lg">
                Convertimos reuniones aburridas en experiencias atractivas que
                construyen cultura.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                <Button
                  href="https://app.teamup.works/signup"
                  variant="primary"
                  size="xl"
                  className="text-center w-full sm:w-auto"
                >
                  Prueba gratis por 2 meses
                </Button>
                <Button
                  href="#create-meeting"
                  variant="text"
                  size="xl"
                  className="text-center w-full sm:w-auto"
                >
                  ¡Crea tu primera reunión ahora!
                </Button>
              </div>
              <p className="text-sm text-gray-space mt-4">
                No se requiere tarjeta de crédito
              </p>
            </div>

            {/* Right video/image column */}
            <div className="w-full lg:w-2/5">
              <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
                <span className="text-4xl text-gray-500 font-bold">
                  ESTO ES UN VIDEO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel - Dark Variant */}
      <LogoCarousel variant="dark" logoCount={12} />

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

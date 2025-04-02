"use client";

import Image from "next/image";
import Button from "./button";
import HeroImageStack from "./hero-image-stack";
import { useTranslations } from "../../contexts/TranslationContext";

/**
 * Hero Component
 * Main landing page hero section with responsive design and improved text scaling for larger screens
 *
 * @returns {JSX.Element} The Hero component
 */
export default function Hero() {
  const t = useTranslations();

  return (
    <section className="py-16 md:py-28 lg:py-36 xl:py-44 bg-brand-purple/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content column */}
          <div className="w-full lg:w-3/5 space-y-6 lg:space-y-8">
            <p className="text-gray-graphite font-semibold text-base md:text-lg xl:text-xl">
              {t("Hero.tagline", {
                en: "The #1 solution for a flexible workspace",
                es: "La solución #1 para un espacio de trabajo flexible",
              })}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-brand-dark leading-tight font-poppins">
              {t("Hero.titleLine1", {
                en: "Happier teams",
                es: "Los equipos felices",
              })}{" "}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              {t("Hero.titleLine2", {
                en: "perform better",
                es: "rinden mejor",
              })}
            </h1>

            <p className="text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-graphite max-w-lg hyphens-auto">
              {t("Hero.description", {
                en: "We turn boring meetings into engaging experiences that build culture.",
                es: "Convertimos reuniones aburridas en experiencias atractivas que construyen cultura.",
              })}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-8 lg:mt-12">
              <Button
                href="https://app.teamup.works/signup"
                variant="primary"
                size="lg"
                className="text-center w-full sm:w-auto sm:size-xl"
              >
                {t("Hero.primaryButton", {
                  en: "Create your first meeting now!",
                  es: "¡Crea tu primera reunión ahora!",
                })}
              </Button>

              <div className="w-full sm:w-auto">
                <Button
                  href="#create-meeting"
                  variant="secondary"
                  size="lg"
                  className="text-center w-full sm:w-auto sm:size-xl"
                >
                  {t("Hero.secondaryButton", {
                    en: "Try free for 2 months",
                    es: "Prueba gratis por 2 meses",
                  })}
                </Button>
                <p className="text-sm md:text-base text-gray-space mt-2">
                  {t("Hero.disclaimer", {
                    en: "No credit card required",
                    es: "No se requiere tarjeta de crédito",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Right video/image column */}
          <div className="w-full lg:w-2/5 relative py-4 px-4 mt-8 lg:mt-0 lg:py-8">
            <div className="overflow-visible relative mx-auto">
              <HeroImageStack
                images={[
                  {
                    src: "/images/campfire.jpg",
                    alt: t("Hero.imageAlt1", {
                      en: "Virtual team building around a campfire",
                      es: "Team building virtual alrededor de una fogata",
                    }),
                    width: 700,
                    height: 525,
                  },
                  {
                    src: "/images/planning.jpg",
                    alt: t("Hero.imageAlt2", {
                      en: "Team planning collaborative space",
                      es: "Espacio colaborativo de planificación de equipo",
                    }),
                    width: 700,
                    height: 525,
                  },
                  {
                    src: "/images/debate.jpg",
                    alt: t("Hero.imageAlt3", {
                      en: "Team debate discussion room",
                      es: "Sala de discusión para debates de equipo",
                    }),
                    width: 700,
                    height: 525,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

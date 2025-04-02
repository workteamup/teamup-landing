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
    <section
      className="py-16 md:py-28 lg:py-36 xl:py-44 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(130deg, #f4f0ff 0%, #f0ebff 45%, #e8f2ff 75%, #f1f6ff 100%)",
      }}
    >
      {/* Subtle blurred elements in brand colors */}
      <div
        className="absolute top-[-15%] right-[-5%] w-[60%] h-[75%] rounded-full opacity-[0.25] blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, rgba(138, 75, 255, 0.8) 0%, rgba(138, 75, 255, 0.15) 70%)",
        }}
      ></div>
      <div
        className="absolute bottom-[-5%] left-[5%] w-[45%] h-[65%] rounded-full opacity-[0.22] blur-[75px]"
        style={{
          background:
            "radial-gradient(circle, rgba(94, 172, 247, 0.9) 0%, rgba(94, 172, 247, 0.2) 60%)",
        }}
      ></div>
      <div
        className="absolute top-[25%] left-[-10%] w-[40%] h-[55%] rounded-full opacity-[0.20] blur-[65px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 158, 27, 0.8) 0%, rgba(255, 158, 27, 0.15) 70%)",
        }}
      ></div>

      {/* Add a small extra accent blob */}
      <div
        className="absolute top-[65%] right-[15%] w-[20%] h-[30%] rounded-full opacity-[0.15] blur-[50px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 102, 196, 0.7) 0%, rgba(255, 102, 196, 0.1) 70%)",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
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

            <p
              className="text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-graphite max-w-lg whitespace-normal break-words"
              style={{
                hyphens: "none",
                WebkitHyphens: "none",
                msHyphens: "none",
                wordBreak: "normal",
                overflowWrap: "normal",
              }}
            >
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

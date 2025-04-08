"use client";

import Image from "next/image";
import Button from "./button";
import HeroImageStack from "./hero-image-stack";
import { useTranslations } from "../../contexts/TranslationContext";
import {
  brandColors,
  brand1Tints,
  brand2Tints,
  brand3Tints,
  greyColors,
  semanticColors,
  spacing,
} from "../../lib/design-tokens";

/**
 * Hero Component
 * Main landing page hero section with responsive design and improved text scaling for larger screens
 *
 * @returns {JSX.Element} The Hero component
 */
export default function Hero() {
  const t = useTranslations();

  // Define gradients using design tokens instead of hardcoded values
  const backgroundGradient = `radial-gradient(circle at 0% 0%, ${brand3Tints.tint70} 0%, transparent 50%),
                             radial-gradient(circle at 100% 0%, ${brand2Tints.tint70} 0%, transparent 50%),
                             radial-gradient(circle at 50% 100%, ${brand1Tints.tint70} 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, ${brand3Tints.tint80} 0%, transparent 100%),
                             linear-gradient(165deg, ${brand3Tints.tint90} 0%, ${brand2Tints.tint90} 100%)`;

  // Remove old blob gradients since we're using the mesh gradient
  const purpleBlob = `radial-gradient(circle, rgba(99, 93, 245, 0.15) 0%, rgba(99, 93, 245, 0.05) 70%)`;
  const blueBlob = `radial-gradient(circle, rgba(63, 137, 246, 0.15) 0%, rgba(63, 137, 246, 0.05) 60%)`;
  const orangeBlob = `radial-gradient(circle, rgba(103, 218, 250, 0.15) 0%, rgba(103, 218, 250, 0.05) 70%)`;
  const pinkBlob = `radial-gradient(circle, rgba(99, 93, 245, 0.1) 0%, rgba(99, 93, 245, 0.02) 70%)`;

  return (
    <section
      className="py-16 md:py-28 lg:py-36 xl:py-44 relative overflow-hidden"
      style={{
        background: backgroundGradient,
      }}
    >
      {/* Subtle blurred elements in brand colors */}
      <div
        className="absolute top-[-15%] right-[-5%] w-[60%] h-[75%] rounded-full opacity-[0.25] blur-[60px]"
        style={{
          background: purpleBlob,
        }}
      ></div>
      <div
        className="absolute bottom-[-5%] left-[5%] w-[45%] h-[65%] rounded-full opacity-[0.22] blur-[75px]"
        style={{
          background: blueBlob,
        }}
      ></div>
      <div
        className="absolute top-[25%] left-[-10%] w-[40%] h-[55%] rounded-full opacity-[0.20] blur-[65px]"
        style={{
          background: orangeBlob,
        }}
      ></div>

      {/* Add a small extra accent blob */}
      <div
        className="absolute top-[65%] right-[15%] w-[20%] h-[30%] rounded-full opacity-[0.15] blur-[50px]"
        style={{
          background: pinkBlob,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content column */}
          <div className="w-full lg:w-3/5 space-y-6 lg:space-y-8">
            <p className="text-gray-phantom font-semibold text-base md:text-lg xl:text-xl">
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
              <span className="text-brand-purple">
                {t("Hero.titleLine2", {
                  en: "perform better",
                  es: "rinden mejor",
                })}
              </span>
            </h1>

            <p
              className="text-lg md:text-xl lg:text-xl xl:text-2xl text-brand-dark max-w-lg whitespace-normal break-normal font-medium"
              style={{
                hyphens: "none",
                WebkitHyphens: "none",
                msHyphens: "none",
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
                size="extralarge"
                className="text-center w-full sm:w-auto"
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
                  size="extralarge"
                  className="text-center w-full sm:w-auto"
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

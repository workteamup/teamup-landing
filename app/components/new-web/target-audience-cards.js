"use client";

import Link from "next/link";
import { brandColors } from "../../lib/design-tokens";
import Image from "next/image";

/**
 * Target Audience Cards Component
 * Displays a section with a title, description, and three cards targeting different user personas
 * based on the Ringover hero_product_container design pattern
 *
 * @param {Object} props Component properties
 * @param {string} props.title - The section title
 * @param {string} props.description - The section description
 * @param {string} props.language - The current language ('en' or 'es')
 */
export default function TargetAudienceCards({
  title,
  description,
  language = "en",
}) {
  // Card data with English/Spanish translations
  const cardData = [
    {
      id: 1,
      title: {
        en: "For CEOs",
        es: "Para CEOs",
      },
      description: {
        en: "Reduce your team building expenses with a solution that helps you create the best online company culture.",
        es: "Reduce tus gastos de team building con una solución que te ayuda a crear la mejor cultura de empresa online.",
      },
      color: brandColors.brand1, // Teal
      footerText: {
        en: "See more",
        es: "Ver más",
      },
      colorClass: "bg-brand-teal",
      textColorClass: "text-brand-teal",
      bgTintClass: "bg-brand-teal/10", // Teal with 10% opacity
    },
    {
      id: 2,
      title: {
        en: "For HR People",
        es: "Para Profesionales de RRHH",
      },
      description: {
        en: "Create engaging activities that create long lasting bonds with the company with just a few clicks",
        es: "Crea actividades atractivas que generan vínculos duraderos con la empresa con solo unos pocos clics",
      },
      color: brandColors.brand2, // Blue
      footerText: {
        en: "See more",
        es: "Ver más",
      },
      colorClass: "bg-brand-blue",
      textColorClass: "text-brand-blue",
      bgTintClass: "bg-brand-blue/10", // Blue with 10% opacity
    },
    {
      id: 3,
      title: {
        en: "For Managers",
        es: "Para Managers",
      },
      description: {
        en: "Get the best out of your team with an environment that boosts engagement and interaction",
        es: "Saca lo mejor de tu equipo con un entorno que impulsa el compromiso y la interacción",
      },
      color: brandColors.brand3, // Purple
      footerText: {
        en: "See more",
        es: "Ver más",
      },
      colorClass: "bg-brand-purple",
      textColorClass: "text-brand-purple",
      bgTintClass: "bg-brand-purple/10", // Purple with 10% opacity
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-5 text-gray-phantom">{title}</h2>
          <p className="text-xl text-gray-graphite max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Cards Container */}
        <div className="hero_product_container grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`${card.bgTintClass} p-4 rounded-3xl transition-all duration-150 hover:scale-125 hover:z-10 relative group`}
            >
              <div
                className={`hero_product ${card.colorClass} rounded-2xl overflow-hidden shadow-lg text-white`}
              >
                <div className="hero_product_content p-8 flex flex-col min-h-[360px]">
                  <div className="hero_content_left">
                    <div className="hero_content_logo mb-6">
                      <h3 className="text-3xl font-extrabold">
                        {card.title[language]}
                      </h3>
                    </div>

                    <p className="hero_content_desc text-lg font-bold mb-6">
                      {card.description[language]}
                    </p>
                  </div>

                  <div className="hero_content_img mt-auto">
                    {/* Placeholder for future image if needed */}
                  </div>
                </div>

                <div className="hero_product_footer bg-white w-full px-10 py-5">
                  <Link
                    href={`/${language}/solutions`}
                    className={`link_arrow_full ${card.textColorClass} flex items-center font-bold text-lg`}
                  >
                    {card.footerText[language]}
                    <span className="trigger ml-4 group-hover:translate-x-1 transition-transform duration-150">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

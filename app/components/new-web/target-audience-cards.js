"use client";

import Link from "next/link";
import {
  brandColors,
  brand1Tints,
  brand2Tints,
  brand3Tints,
} from "../../lib/design-tokens";
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
    {
      id: 4,
      title: {
        en: "For Employees",
        es: "Para Empleados",
      },
      description: {
        en: "Enjoy the benefits of remote work while staying connected to your colleagues.",
        es: "Disfruta de los beneficios del trabajo remoto mientras te mantienes conectado con tus colegas.",
      },
      color: brandColors.dark, // Dark background
      footerText: {
        en: "See more",
        es: "Ver más",
      },
      colorClass: "bg-brand-dark",
      textColorClass: "text-brand-dark",
      bgTintClass: "bg-gray-arsenic/10", // Dark with opacity
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-5 text-gray-phantom">{title}</h2>
          <p className="text-xl text-gray-graphite max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Cards Container */}
        <div className="hero_product_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cardData.map((card) => (
            <div
              key={card.id}
              className={`p-4 rounded-3xl transition-all duration-200 hover:scale-110 hover:z-10 hover:shadow-xl relative group ${
                card.id === 1
                  ? "bg-brand-teal-light" // Solid light teal
                  : card.id === 2
                  ? "bg-brand-blue-light" // Solid light blue
                  : card.id === 3
                  ? "bg-brand-purple-light" // Solid light purple
                  : "bg-brand-dark-light" // Light variant of dark color
              }`}
            >
              <div
                className={`hero_product ${card.colorClass} rounded-2xl overflow-hidden text-white h-full flex flex-col`}
              >
                <div className="hero_product_content p-8 flex flex-col flex-grow min-h-[320px]">
                  <div className="hero_content_left">
                    <div className="hero_content_logo mb-6">
                      <h3 className="text-3xl font-extrabold">
                        {card.title[language]}
                      </h3>
                    </div>

                    <p className="hero_content_desc text-lg font-bold mb-10">
                      {card.description[language]}
                    </p>
                  </div>

                  <div className="hero_content_img mt-auto">
                    {/* Placeholder for future image if needed */}
                    {/* Uncomment to add an image
                    <div className="w-full h-36 mt-4 relative">
                      <Image
                        src="/images/placeholder.jpg"
                        alt="Feature illustration"
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    */}
                  </div>
                </div>

                <div className="hero_product_footer bg-white w-full px-10 py-5 mt-auto">
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

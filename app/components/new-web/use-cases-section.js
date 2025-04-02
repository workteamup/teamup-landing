"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import { useTranslations, useLocale } from "../../contexts/TranslationContext";

/**
 * Use Cases Section Component
 * Displays a section with title, description, and alternating left-right content blocks
 * similar to the solutions template pattern.
 * Ends with primary and secondary CTAs.
 * 
 * @param {Object} props Component properties
 * @param {string} props.title - The section title
 * @param {string} props.description - The section description
 * @param {Array} props.useCases - Array of use case objects with title, description, and image
 * @param {string} props.primaryCTAText - Text for the primary CTA button
 * @param {string} props.secondaryCTAText - Text for the secondary CTA button
 * @param {string} props.primaryCTALink - Link for the primary CTA button
 * @param {string} props.secondaryCTALink - Link for the secondary CTA button
 */
export default function UseCasesSection({
  title,
  description,
  useCases,
  primaryCTAText,
  secondaryCTAText,
  primaryCTALink,
  secondaryCTALink
}) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-cloud/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-5 text-gray-phantom">{title}</h2>
          <p className="text-xl text-gray-graphite max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Use Cases - Alternating Layout */}
        <div className="space-y-24">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-gray-phantom">
                  {useCase.title}
                </h3>
                <p className="text-gray-graphite">{useCase.description}</p>

                {useCase.bulletPoints && (
                  <ul className="space-y-2 mt-4">
                    {useCase.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-brand-teal mt-1 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-space">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-20 text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href={primaryCTALink || `/${locale}/pricing`} 
              size="lg"
              variant="primary"
            >
              {primaryCTAText || t("Common.seePricing")}
            </Button>
            <Button 
              href={secondaryCTALink || `/${locale}/dashboard`} 
              size="lg"
              variant="text"
            >
              {secondaryCTAText || t("Common.createFirstMeeting")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
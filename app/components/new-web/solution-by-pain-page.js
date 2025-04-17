"use client";

import React from "react";
import Image from "next/image";
import Button from "./button";
import SolutionHero from "./solution-hero";
import Testimonial from "./testimonial";
import { useTranslations } from "../../contexts/TranslationContext";
import {
  brandColors,
  greyColors,
  shadows,
  borderRadius,
  spacing
} from "../../lib/design-tokens";

/**
 * SolutionByPainPage Component
 * A template for pain-based solution pages
 * 
 * @param {Object} props
 * @param {Object} props.painData - Data for the pain-based solution
 * @returns {JSX.Element} The SolutionByPainPage component
 */
const SolutionByPainPage = ({ painData }) => {
  const t = useTranslations();

  // Card component for "Why It's Important" section
  const ReasonCard = ({ reason, index }) => (
    <div 
      className="bg-white p-6 rounded-lg h-full flex flex-col"
      style={{ 
        boxShadow: shadows.md,
        borderRadius: borderRadius.lg
      }}
    >
      <h3 className="text-xl font-semibold mb-3 font-poppins text-brand-dark">
        {t("SolutionsByPain.reasonTitle", { fallback: "Reason" })} {index + 1}
      </h3>
      <p className="text-gray-space flex-grow">{reason.description}</p>
      {reason.source && (
        <div className="text-xs text-gray-steel mt-3">
          {t("SolutionsByPain.source", { fallback: "Source:" })} {reason.source}
        </div>
      )}
    </div>
  );

  // Stat card component for "Problem in Numbers" section
  const StatCard = ({ value, description, source }) => (
    <div 
      className="bg-white p-6 rounded-lg text-center"
      style={{ 
        boxShadow: shadows.md,
        borderRadius: borderRadius.lg
      }}
    >
      <div className="text-4xl font-bold text-brand-blue mb-2">{value}</div>
      <p className="text-gray-space">{description}</p>
      {source && <div className="text-xs text-gray-steel mt-2">{source}</div>}
    </div>
  );

  // Benefit card component
  const BenefitCard = ({ benefit, index }) => (
    <div 
      className="bg-white p-6 rounded-lg h-full flex flex-col"
      style={{ 
        boxShadow: shadows.md,
        borderRadius: borderRadius.lg
      }}
    >
      <h3 className="text-xl font-semibold mb-3 font-poppins text-brand-dark">
        {t("SolutionsByPain.benefitTitle", { fallback: "Benefit" })} {index + 1}
      </h3>
      <p className="text-gray-space">{benefit.description}</p>
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <SolutionHero
        headline={painData.hero.headline}
        subheadline={painData.hero.subheadline}
        ctaText={painData.hero.cta}
        ctaHref="#get-started"
        theme="blue" // Use blue theme for pain-based solutions
      />

      {/* Why It's Important Section */}
      <section className="py-16 bg-white" aria-labelledby="importance-heading">
        <div className="container mx-auto px-4">
          <h2 
            id="importance-heading"
            className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins"
          >
            {t("SolutionsByPain.importanceHeading", {
              fallback: "Why It's Important to Solve",
            })}{" "}
            {painData.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painData.reasons.map((reason, index) => (
              <ReasonCard
                key={index}
                reason={reason}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Problem in Numbers Section */}
      <section 
        className="py-16 bg-gray-cloud"
        aria-labelledby="problems-heading"
        style={{ backgroundColor: greyColors.cloud }}
      >
        <div className="container mx-auto px-4">
          <h2 
            id="problems-heading"
            className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins"
          >
            {t("SolutionsByPain.problemsHeading", {
              fallback: "The Problem in Numbers",
            })}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painData.stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                description={stat.description}
                source={stat.source}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white" aria-labelledby="benefits-heading">
        <div className="container mx-auto px-4">
          <h2 
            id="benefits-heading"
            className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins"
          >
            {t("SolutionsByPain.benefitsHeading", {
              fallback: "Benefits of Using Team Up!",
            })}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painData.benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section 
        className="py-16 bg-gray-cloud"
        aria-labelledby="comparison-heading"
        style={{ backgroundColor: greyColors.cloud }}
      >
        <div className="container mx-auto px-4">
          <h2 
            id="comparison-heading"
            className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins"
          >
            {t("SolutionsByPain.comparisonHeading", {
              fallback: "Team Up! vs. Traditional Solutions",
            })}
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {painData.comparisons.map((comparison, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6"
                style={{ 
                  boxShadow: shadows.md,
                  borderRadius: borderRadius.lg
                }}
              >
                <div className="mb-4">
                  <h4 className="font-semibold text-brand-dark mb-2 font-poppins">
                    {t("SolutionsByPain.traditionalSolution", {
                      fallback: "Traditional Solution:",
                    })}
                  </h4>
                  <p className="text-gray-space">{comparison.traditional}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center text-brand-blue mt-1">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-blue mb-2 font-poppins">
                      {t("SolutionsByPain.teamUpAdvantage", {
                        fallback: "Team Up! Advantage:",
                      })}
                    </h4>
                    <p className="text-gray-space">{comparison.advantage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-16 bg-white" aria-labelledby="spotlight-heading">
        <div className="container mx-auto px-4">
          <h2 
            id="spotlight-heading"
            className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins"
          >
            {t("SolutionsByPain.spotlightHeading", {
              fallback: "Features Spotlight",
            })}
          </h2>

          <div className="space-y-16">
            {painData.spotlight.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div 
                    className="relative w-full aspect-[4/3] rounded-lg overflow-hidden"
                    style={{ boxShadow: shadows.lg }}
                  >
                    <Image
                      src={`/solutions/pain-spotlight-${index + 1}.jpg`}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-brand-dark font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-gray-space text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {painData.testimonial && (
        <section 
          className="py-16 bg-gray-cloud" 
          aria-labelledby="testimonial-heading"
          style={{ backgroundColor: greyColors.cloud }}
        >
          <div className="container mx-auto px-4">
            <h2 
              id="testimonial-heading" 
              className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins sr-only"
            >
              {t("SolutionsByPain.testimonialHeading", {
                fallback: "What Our Customers Say",
              })}
            </h2>
            
            <Testimonial
              quote={painData.testimonial.quote}
              name={painData.testimonial.author}
              jobTitle={painData.testimonial.position}
              align="center"
            />
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      <section className="py-16 bg-white" aria-labelledby="use-cases-heading">
        <div className="container mx-auto px-4">
          <h2 
            id="use-cases-heading"
            className="text-3xl font-bold mb-8 text-center text-brand-dark font-poppins"
          >
            {t("SolutionsByPain.useCasesHeading", {
              fallback: "Use Cases",
            })}
          </h2>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {painData.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-blue bg-opacity-10 rounded-full flex items-center justify-center text-brand-blue mt-1">
                    <svg
                      className="w-4 h-4"
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
                  </div>
                  <p className="text-gray-space">{useCase}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        className="py-16 bg-gray-cloud"
        aria-labelledby="how-it-works-heading"
        style={{ backgroundColor: greyColors.cloud }}
      >
        <div className="container mx-auto px-4">
          <h2 
            id="how-it-works-heading"
            className="text-3xl font-bold mb-8 text-center text-brand-dark font-poppins"
          >
            {t("SolutionsByPain.howItWorksHeading", {
              fallback: "How It Works",
            })}
          </h2>

          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l border-brand-blue border-opacity-30">
              {painData.howItWorks.map((step, index) => (
                <li key={index} className="mb-8 ml-6 last:mb-0">
                  <div className="absolute w-8 h-8 bg-brand-blue text-white rounded-full -left-4 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-space ml-2 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section 
        id="get-started" 
        className="py-16 bg-brand-blue text-white text-center"
        aria-labelledby="get-started-heading"
      >
        <div className="container mx-auto px-4">
          <h2 
            id="get-started-heading"
            className="text-3xl font-bold mb-6 font-poppins"
          >
            {painData.getStarted.heading}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {painData.getStarted.description}
          </p>
          <Button 
            href="https://app.teamup.works/signup" 
            size="lg"
            variant="light"
            aria-label={painData.getStarted.cta}
          >
            {painData.getStarted.cta}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SolutionByPainPage; 
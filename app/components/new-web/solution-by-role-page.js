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
 * SolutionByRolePage Component
 * A template for role-based solution pages
 * 
 * @param {Object} props
 * @param {Object} props.roleData - Data for the role-based solution
 * @returns {JSX.Element} The SolutionByRolePage component
 */
const SolutionByRolePage = ({ roleData }) => {
  const t = useTranslations();

  // Card component that follows design system guidelines
  const FeatureCard = ({ title, description, className = "" }) => (
    <div 
      className={`bg-white p-6 rounded-lg h-full flex flex-col ${className}`}
      style={{ 
        boxShadow: shadows.md,
        borderRadius: borderRadius.lg
      }}
    >
      <h3 className="text-xl font-semibold mb-3 font-poppins text-brand-dark">{title}</h3>
      <p className="text-gray-space">{description}</p>
    </div>
  );

  // Stat card component
  const StatCard = ({ value, description, source }) => (
    <div 
      className="bg-white p-6 rounded-lg text-center"
      style={{ 
        boxShadow: shadows.md,
        borderRadius: borderRadius.lg
      }}
    >
      <div className="text-4xl font-bold text-brand-purple mb-2">{value}</div>
      <p className="text-gray-space">{description}</p>
      {source && <div className="text-xs text-gray-steel mt-2">{source}</div>}
    </div>
  );

  return (
    <div className="bg-white">
      <SolutionHero
        headline={roleData.hero.headline}
        subheadline={roleData.hero.subheadline}
        ctaText={roleData.hero.cta}
        ctaHref="#get-started"
      />

      {/* Benefits Section */}
      <section className="py-16 bg-white" aria-labelledby="benefits-heading">
        <div className="container mx-auto px-4">
          <h2 
            id="benefits-heading"
            className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins"
          >
            {t("SolutionsByRole.benefitsHeading", {
              fallback: "How Team Up! Benefits",
            })}{" "}
            {roleData.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roleData.benefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Problems/Stats Section */}
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
            {t("SolutionsByRole.problemsHeading", {
              fallback: "The Challenge in Numbers",
            })}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roleData.stats.map((stat, index) => (
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

      {/* Features Section */}
      <section className="py-16 bg-white" aria-labelledby="features-heading">
        <div className="container mx-auto px-4">
          <h2 
            id="features-heading"
            className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins"
          >
            {t("SolutionsByRole.featuresHeading", {
              fallback: "Key Features for",
            })}{" "}
            {roleData.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roleData.features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section 
        className="py-16 bg-gray-cloud"
        aria-labelledby="spotlight-heading"
        style={{ backgroundColor: greyColors.cloud }}
      >
        <div className="container mx-auto px-4">
          <h2 
            id="spotlight-heading"
            className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins"
          >
            {t("SolutionsByRole.spotlightHeading", {
              fallback: "Features Spotlight",
            })}
          </h2>

          <div className="space-y-16">
            {roleData.spotlight.map((item, index) => (
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
                      src={`/solutions/spotlight-${index + 1}.jpg`}
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
      {roleData.testimonial && (
        <section className="py-16 bg-white" aria-labelledby="testimonial-heading">
          <div className="container mx-auto px-4">
            <h2 
              id="testimonial-heading" 
              className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins sr-only"
            >
              Testimonial
            </h2>
            
            <Testimonial
              quote={roleData.testimonial.quote}
              name={roleData.testimonial.author}
              jobTitle={roleData.testimonial.position}
              align="center"
            />
          </div>
        </section>
      )}

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
            {t("SolutionsByRole.comparisonHeading", {
              fallback: "Team Up! vs. Traditional Solutions",
            })}
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {roleData.comparisons.map((comparison, index) => (
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
                    Traditional Approach:
                  </h4>
                  <p className="text-gray-space">{comparison.traditional}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-purple bg-opacity-10 rounded-full flex items-center justify-center text-brand-purple mt-1">
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
                      Team Up! Advantage:
                    </h4>
                    <p className="text-gray-space">{comparison.advantage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white" aria-labelledby="use-cases-heading">
        <div className="container mx-auto px-4">
          <h2 
            id="use-cases-heading"
            className="text-3xl font-bold mb-8 text-center text-brand-dark font-poppins"
          >
            {t("SolutionsByRole.useCasesHeading", {
              fallback: "Use Cases",
            })}
          </h2>

          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {roleData.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-brand-purple bg-opacity-10 rounded-full flex items-center justify-center text-brand-purple mt-1">
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

      {/* How It Works */}
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
            {t("SolutionsByRole.howItWorksHeading", {
              fallback: "How It Works",
            })}
          </h2>

          <div className="max-w-3xl mx-auto">
            <ol className="relative border-l border-brand-purple border-opacity-30">
              {roleData.howItWorks.map((step, index) => (
                <li key={index} className="mb-8 ml-6 last:mb-0">
                  <div className="absolute w-8 h-8 bg-brand-purple text-white rounded-full -left-4 flex items-center justify-center font-bold">
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
        className="py-16 bg-brand-purple text-white text-center"
        aria-labelledby="get-started-heading"
      >
        <div className="container mx-auto px-4">
          <h2 
            id="get-started-heading"
            className="text-3xl font-bold mb-6 font-poppins"
          >
            {roleData.getStarted.heading}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {roleData.getStarted.description}
          </p>
          <Button 
            href="https://app.teamup.works/signup" 
            size="lg"
            variant="light"
            aria-label={`${roleData.getStarted.cta} for ${roleData.title}`}
          >
            {roleData.getStarted.cta}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SolutionByRolePage;
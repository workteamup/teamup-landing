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
  spacing,
} from "../../lib/design-tokens";

/**
 * SolutionByTypePage Component
 * Template for type-based solution pages following the same pattern as pain and role pages
 */
const SolutionByTypePage = ({ typeData }) => {
  const t = useTranslations();

  // Card component for "Why It's Important" section
  const ImportanceCard = ({ title, description }) => (
    <div
      className="bg-white p-6 rounded-lg h-full flex flex-col"
      style={{
        boxShadow: shadows.md,
        borderRadius: borderRadius.lg,
      }}
    >
      <h3 className="text-xl font-semibold mb-3 font-poppins text-brand-dark">
        {title}
      </h3>
      <p className="text-gray-space">{description}</p>
    </div>
  );

  // Stat card component
  const StatCard = ({ value, description, source }) => (
    <div
      className="bg-white p-6 rounded-lg text-center"
      style={{
        boxShadow: shadows.md,
        borderRadius: borderRadius.lg,
      }}
    >
      <div className="text-4xl font-bold text-brand-blue mb-2">{value}</div>
      <p className="text-gray-space">{description}</p>
      {source && <div className="text-xs text-gray-steel mt-2">{source}</div>}
    </div>
  );

  // Feature card component
  const FeatureCard = ({ title, description }) => (
    <div
      className="bg-white p-6 rounded-lg h-full flex flex-col"
      style={{
        boxShadow: shadows.md,
        borderRadius: borderRadius.lg,
      }}
    >
      <h3 className="text-xl font-semibold mb-3 font-poppins text-brand-dark">
        {title}
      </h3>
      <p className="text-gray-space">{description}</p>
    </div>
  );

  return (
    <>
      <SolutionHero
        headline={typeData.hero.headline}
        subheadline={typeData.hero.subheadline}
        ctaText={typeData.hero.cta}
        ctaHref="#get-started"
        theme="blue"
      />

      {/* Why It's Important Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins">
            {t("SolutionsByType.importanceHeading", {
              fallback: "Why It's Important",
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {typeData.importance.map((item, index) => (
              <ImportanceCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Problem in Numbers Section */}
      <section className="py-16 bg-gray-cloud">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins">
            {t("SolutionsByType.problemsHeading", {
              fallback: "Problem in Numbers",
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {typeData.stats.map((stat, index) => (
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins">
            {t("SolutionsByType.benefitsHeading", {
              fallback: "Benefits of Team Up!",
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {typeData.benefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-cloud">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-dark font-poppins">
            {t("SolutionsByType.useCasesHeading", { fallback: "Use Cases" })}
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {typeData.useCases.map((useCase, index) => (
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

      {/* Features Spotlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins">
            {t("SolutionsByType.spotlightHeading", {
              fallback: "Features Spotlight",
            })}
          </h2>
          <div className="space-y-16">
            {typeData.spotlight.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={`/solutions/type-spotlight-${index + 1}.jpg`}
                      alt={feature.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-brand-dark font-poppins">
                    {feature.title}
                  </h3>
                  <p className="text-gray-space text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {typeData.testimonial && (
        <section className="py-16 bg-gray-cloud">
          <div className="container mx-auto px-4">
            <Testimonial
              quote={typeData.testimonial.quote}
              name={typeData.testimonial.author}
              jobTitle={typeData.testimonial.position}
              align="center"
            />
          </div>
        </section>
      )}

      {/* Future-Proof Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-dark font-poppins">
            {t("SolutionsByType.futureProofHeading", {
              fallback: "Future-Proof Your Team",
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {typeData.futureProof.map((item, index) => (
              <FeatureCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section
        id="get-started"
        className="py-16 bg-brand-blue text-white text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 font-poppins">
            {typeData.getStarted.heading}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {typeData.getStarted.description}
          </p>
          <Button
            href="https://app.teamup.works/signup"
            size="lg"
            variant="light"
          >
            {typeData.getStarted.cta}
          </Button>
        </div>
      </section>
    </>
  );
};

export default SolutionByTypePage;

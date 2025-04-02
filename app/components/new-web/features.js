"use client";

import { useTranslations } from "../../contexts/TranslationContext";
import { features } from "../../consts";
import UnknownIcon from "../icons/unknown-icon";
import {
  brandColors,
  greyColors,
  semanticColors,
  brand3Tints,
} from "../../lib/design-tokens";

/**
 * FeatureTag Component
 * A card displaying a single feature with an icon and title
 * Uses the design system styling
 */
const FeatureTag = ({ icon, titleKey }) => {
  const t = useTranslations();
  return (
    <div className="min-w-[180px] md:min-w-[250px] flex-shrink-0">
      <div
        className="flex flex-col items-center justify-center bg-white
        px-3 py-3 md:py-4 md:px-4 rounded-xl m-1 md:m-2 space-y-2 md:space-y-3 
        border border-gray-smoke shadow-sm
        transition-all duration-300 ease-out
        hover:scale-[1.05] hover:shadow-md hover:border-gray-steel
        cursor-pointer
        h-full"
      >
        <div className="flex items-center justify-center p-3 bg-brand-purple-light rounded-full shadow-sm">
          {icon && (
            <div className="w-8 h-8 md:w-10 md:h-10 text-brand-purple">
              {icon}
            </div>
          )}
        </div>

        <div className="text-sm md:text-base font-semibold text-center text-gray-graphite">
          {t(`Features.${titleKey}`)}
        </div>
      </div>
    </div>
  );
};

/**
 * Features Component
 * Displays a section with horizontally scrolling rows of feature cards
 * Using the design system tokens and styling
 */
const Features = () => {
  const t = useTranslations();

  // Split features into three arrays for different rows
  const rowFeatures = [
    // First row features
    [...features.slice(0, Math.ceil(features.length / 3))],
    // Second row features
    [
      ...features.slice(
        Math.ceil(features.length / 3),
        Math.ceil((2 * features.length) / 3)
      ),
    ],
    // Third row features
    [...features.slice(Math.ceil((2 * features.length) / 3))],
  ];

  // Create infinite arrays for each row
  const infiniteRowFeatures = rowFeatures.map((rowArray) => {
    return [...Array(8)].flatMap(() => rowArray);
  });

  // Use brand color tints for background gradient from the design tokens
  const sectionBackground = `linear-gradient(to bottom, white 0%, ${brand3Tints.tint90} 100%)`;

  return (
    <section
      id="features"
      className="py-16 md:py-24 overflow-hidden"
      style={{ background: sectionBackground }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Section header - using design system font styles */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider sm:tracking-widest mb-2 sm:mb-3 md:mb-4 text-brand-purple">
            {t("Features.tag")}
          </p>
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark font-poppins">
            {t("Features.heading")}
          </h2>
          <p className="text-lg md:text-xl text-gray-space max-w-3xl mx-auto">
            {t("Features.subheading")}
          </p>
        </div>

        {/* Feature sliders */}
        <div className="slider-container pb-8">
          {[0, 1, 2].map((rowIndex) => (
            <div
              className={`slider slider-${rowIndex} overflow-visible mb-4`}
              key={rowIndex}
            >
              {infiniteRowFeatures[rowIndex].map((feature, key) => (
                <FeatureTag
                  key={`row-${rowIndex}-${key}`}
                  icon={
                    <UnknownIcon width="20" height="20" path={feature.icon} />
                  }
                  titleKey={feature.titleKey}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

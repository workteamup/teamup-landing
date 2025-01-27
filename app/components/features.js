"use client";
import { useTranslations } from "../contexts/TranslationContext";
import { features } from "../consts";
import SectionHeader from "./section-header";
import Tag from "./tag";
import UnknownIcon from "./icons/unknown-icon";

const FeatureTag = ({ icon, titleKey }) => {
  const t = useTranslations();
  return (
    <div className="min-w-[180px] md:min-w-[250px] flex-shrink-0">
      <div
        className="flex flex-col items-center justify-center bg-white
        px-3 py-3 md:py-4 md:px-4 rounded-xl m-1 md:m-2 space-y-2 md:space-y-3 
        border border-slate-200 text-blue-800
        transition-all duration-300 ease-out
        hover:scale-[1.05] hover:shadow-lg hover:border-slate-300
        cursor-pointer
        h-full"
      >
        <div className="flex items-center justify-center p-3 bg-blue-50/70 rounded-full shadow-md">
          {icon && (
            <div className="w-8 h-8 md:w-10 md:h-10 text-blue-500">{icon}</div>
          )}
        </div>

        <div className="text-sm md:text-base font-semibold text-center">
          {t(`Features.${titleKey}`)}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const t = useTranslations();

  // Split features into three arrays for different rows
  const rowFeatures = [
    // First row features
    [...features.slice(0, Math.ceil(features.length / 3))],
    // Second row features
    [...features.slice(Math.ceil(features.length / 3), Math.ceil(2 * features.length / 3))],
    // Third row features
    [...features.slice(Math.ceil(2 * features.length / 3))]
  ];

  // Create infinite arrays for each row
  const infiniteRowFeatures = rowFeatures.map(rowArray => {
    return [...Array(8)].flatMap(() => rowArray);
  });

  return (
    <div id="features" className="mb-24 md:mb-[200px] overflow-hidden">
      <SectionHeader
        tag={t("Features.tag")}
        heading={t("Features.heading")}
        subheading={t("Features.subheading")}
        width="1200"
        className="max-w-[1200px] mb-8"
      />
      <div className="slider-container pb-8">
        {[0, 1, 2].map((rowIndex) => (
          <div 
            className={`slider slider-${rowIndex} overflow-visible`}
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
  );
};

export default Features;

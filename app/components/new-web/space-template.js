"use client";

import Image from "next/image";
import { useTranslations } from "../../contexts/TranslationContext";
import { semanticColors } from "../../lib/design-tokens";
import PageTitle from "./page-title";

/**
 * A reusable template for all space pages
 *
 * @param {Object} props Component properties
 * @param {string} props.tagline A short, engaging phrase
 * @param {string} props.imageUrl URL to the main space image or video
 * @param {string} props.title The name of the space
 * @param {Array} props.features Array of feature objects with title and description
 * @param {Array} props.howToUse Array of step objects with step number, title and description
 * @param {React.ReactNode} props.children Optional additional content
 */
const SpaceTemplate = ({
  tagline,
  imageUrl,
  title,
  features,
  howToUse,
  children,
}) => {
  const t = useTranslations();

  return (
    <div className="space-y-16">
      <PageTitle
        title={title}
        align="center"
        size="large"
        background="brand-dark"
        theme="dark"
      />

      {/* Image Section */}
      <section className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden shadow-xl max-w-5xl mx-auto mb-12">
          <Image
            src={imageUrl}
            alt={title}
            width={1200}
            height={675}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-cloud py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-phantom">
            {t("Spaces.featuresTitle")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-phantom">
                  {feature.title}
                </h3>
                <p className="text-gray-space">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-phantom">
          {t("Spaces.howToUseTitle")}
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {howToUse.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
                  {step.title}
                </h3>
                <p className="text-gray-space">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Content */}
      {children}
    </div>
  );
};

export default SpaceTemplate;

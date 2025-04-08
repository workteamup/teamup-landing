"use client";

import Image from "next/image";
import { useTranslations } from "../../contexts/TranslationContext";
import { semanticColors } from "../../lib/design-tokens";
import PageTitle from "./page-title";

/**
 * A template specifically for role-based solution pages
 *
 * @param {Object} props Component properties
 * @param {string} props.title The role-based solution title
 * @param {string} props.description A brief description of how Team Up helps this role
 * @param {Object} props.challenges Array of challenges this role faces
 * @param {Object} props.benefits Array of benefits for this role
 * @param {Object} props.features Array of features relevant to this role
 * @param {React.ReactNode} props.children Optional additional content
 */
const SolutionRoleTemplate = ({
  title,
  description,
  challenges = [],
  benefits = [],
  features = [],
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

      {/* Main Description */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-graphite">{description}</p>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="bg-gray-cloud py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-phantom">
            {t("SolutionTemplates.roles.challengesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-brand-purple"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
                  {challenge.title}
                </h3>
                <p className="text-gray-space">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-phantom">
          {t("SolutionTemplates.roles.benefitsTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex-shrink-0 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-brand-teal"
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
                <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
                  {benefit.title}
                </h3>
                <p className="text-gray-space">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-gradient-to-b from-white to-gray-cloud py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-phantom">
            {t("SolutionTemplates.roles.featuresTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-blue/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-brand-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
                  {feature.title}
                </h3>
                <p className="text-gray-space">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content */}
      {children}
    </div>
  );
};

export default SolutionRoleTemplate;

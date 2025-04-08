"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionRoleTemplate from "../../../components/new-web/solution-role-template";
import Button from "../../../components/new-web/button";
import { useTranslations } from "../../../contexts/TranslationContext";

export default function EmployeesSolutionPage() {
  const t = useTranslations();

  const challenges = [
    {
      title: t("SolutionTemplates.roles.employees.challenges.connection.title"),
      description: t(
        "SolutionTemplates.roles.employees.challenges.connection.description"
      ),
    },
    {
      title: t(
        "SolutionTemplates.roles.employees.challenges.collaboration.title"
      ),
      description: t(
        "SolutionTemplates.roles.employees.challenges.collaboration.description"
      ),
    },
    {
      title: t("SolutionTemplates.roles.employees.challenges.engagement.title"),
      description: t(
        "SolutionTemplates.roles.employees.challenges.engagement.description"
      ),
    },
  ];

  const benefits = [
    {
      title: t("SolutionTemplates.roles.employees.benefits.flexibility.title"),
      description: t(
        "SolutionTemplates.roles.employees.benefits.flexibility.description"
      ),
    },
    {
      title: t(
        "SolutionTemplates.roles.employees.benefits.collaboration.title"
      ),
      description: t(
        "SolutionTemplates.roles.employees.benefits.collaboration.description"
      ),
    },
    {
      title: t("SolutionTemplates.roles.employees.benefits.connection.title"),
      description: t(
        "SolutionTemplates.roles.employees.benefits.connection.description"
      ),
    },
    {
      title: t("SolutionTemplates.roles.employees.benefits.growth.title"),
      description: t(
        "SolutionTemplates.roles.employees.benefits.growth.description"
      ),
    },
  ];

  const features = [
    {
      title: t("SolutionTemplates.roles.employees.features.spaces.title"),
      description: t(
        "SolutionTemplates.roles.employees.features.spaces.description"
      ),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: t("SolutionTemplates.roles.employees.features.tools.title"),
      description: t(
        "SolutionTemplates.roles.employees.features.tools.description"
      ),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      ),
    },
    {
      title: t("SolutionTemplates.roles.employees.features.activities.title"),
      description: t(
        "SolutionTemplates.roles.employees.features.activities.description"
      ),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
  ];

  return (
    <WebLayout>
      <SolutionRoleTemplate
        title={t("SolutionTemplates.roles.employees.title")}
        description={t("SolutionTemplates.roles.employees.description")}
        challenges={challenges}
        benefits={benefits}
        features={features}
      >
        {/* Call to action section */}
        <section className="bg-gray-cloud py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              {t("SolutionTemplates.roles.employees.cta.heading")}
            </h2>
            <p className="text-lg text-gray-graphite max-w-3xl mx-auto mb-8">
              {t("SolutionTemplates.roles.employees.cta.description")}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button href="https://app.teamup.works/signup" size="lg">
                {t("SolutionTemplates.roles.employees.cta.primaryButton")}
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                {t("SolutionTemplates.roles.employees.cta.secondaryButton")}
              </Button>
            </div>
          </div>
        </section>
      </SolutionRoleTemplate>
    </WebLayout>
  );
}

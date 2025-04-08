"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionRoleTemplate from "../../../components/new-web/solution-role-template";
import Button from "../../../components/new-web/button";
import { useTranslations } from "../../../contexts/TranslationContext";

export default function ManagersSolutionPage() {
  const t = useTranslations();

  const challenges = [
    {
      title: t(
        "SolutionTemplates.roles.managers.challenges.communication.title"
      ),
      description: t(
        "SolutionTemplates.roles.managers.challenges.communication.description"
      ),
    },
    {
      title: t(
        "SolutionTemplates.roles.managers.challenges.collaboration.title"
      ),
      description: t(
        "SolutionTemplates.roles.managers.challenges.collaboration.description"
      ),
    },
    {
      title: t("SolutionTemplates.roles.managers.challenges.engagement.title"),
      description: t(
        "SolutionTemplates.roles.managers.challenges.engagement.description"
      ),
    },
  ];

  const benefits = [
    {
      title: t("SolutionTemplates.roles.managers.benefits.productivity.title"),
      description: t(
        "SolutionTemplates.roles.managers.benefits.productivity.description"
      ),
    },
    {
      title: t("SolutionTemplates.roles.managers.benefits.communication.title"),
      description: t(
        "SolutionTemplates.roles.managers.benefits.communication.description"
      ),
    },
    {
      title: t("SolutionTemplates.roles.managers.benefits.visibility.title"),
      description: t(
        "SolutionTemplates.roles.managers.benefits.visibility.description"
      ),
    },
    {
      title: t("SolutionTemplates.roles.managers.benefits.engagement.title"),
      description: t(
        "SolutionTemplates.roles.managers.benefits.engagement.description"
      ),
    },
  ];

  const features = [
    {
      title: t("SolutionTemplates.roles.managers.features.teamSpaces.title"),
      description: t(
        "SolutionTemplates.roles.managers.features.teamSpaces.description"
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
      title: t("SolutionTemplates.roles.managers.features.monitoring.title"),
      description: t(
        "SolutionTemplates.roles.managers.features.monitoring.description"
      ),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      ),
    },
    {
      title: t("SolutionTemplates.roles.managers.features.collaboration.title"),
      description: t(
        "SolutionTemplates.roles.managers.features.collaboration.description"
      ),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      ),
    },
  ];

  return (
    <WebLayout>
      <SolutionRoleTemplate
        title={t("SolutionTemplates.roles.managers.title")}
        description={t("SolutionTemplates.roles.managers.description")}
        challenges={challenges}
        benefits={benefits}
        features={features}
      >
        {/* Call to action section */}
        <section className="bg-gray-cloud py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              {t("SolutionTemplates.roles.managers.cta.heading")}
            </h2>
            <p className="text-lg text-gray-graphite max-w-3xl mx-auto mb-8">
              {t("SolutionTemplates.roles.managers.cta.description")}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button href="https://app.teamup.works/signup" size="lg">
                {t("SolutionTemplates.roles.managers.cta.primaryButton")}
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                {t("SolutionTemplates.roles.managers.cta.secondaryButton")}
              </Button>
            </div>
          </div>
        </section>
      </SolutionRoleTemplate>
    </WebLayout>
  );
}

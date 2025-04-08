"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionRoleTemplate from "../../../components/new-web/solution-role-template";
import Button from "../../../components/new-web/button";
import { useTranslations } from "../../../contexts/TranslationContext";

export default function CxoSolutionPage() {
  const t = useTranslations();

  const challenges = [
    {
      title: t("SolutionTemplates.roles.cxo.challenges.engagement.title"),
      description: t(
        "SolutionTemplates.roles.cxo.challenges.engagement.description"
      ),
    },
    {
      title: t("SolutionTemplates.roles.cxo.challenges.culture.title"),
      description: t(
        "SolutionTemplates.roles.cxo.challenges.culture.description"
      ),
    },
    {
      title: t("SolutionTemplates.roles.cxo.challenges.productivity.title"),
      description: t(
        "SolutionTemplates.roles.cxo.challenges.productivity.description"
      ),
    },
  ];

  const benefits = [
    {
      title: t("SolutionTemplates.roles.cxo.benefits.culture.title"),
      description: t(
        "SolutionTemplates.roles.cxo.benefits.culture.description"
      ),
    },
    {
      title: t("SolutionTemplates.roles.cxo.benefits.retention.title"),
      description: t(
        "SolutionTemplates.roles.cxo.benefits.retention.description"
      ),
    },
    {
      title: t("SolutionTemplates.roles.cxo.benefits.costs.title"),
      description: t("SolutionTemplates.roles.cxo.benefits.costs.description"),
    },
    {
      title: t("SolutionTemplates.roles.cxo.benefits.innovation.title"),
      description: t(
        "SolutionTemplates.roles.cxo.benefits.innovation.description"
      ),
    },
  ];

  const features = [
    {
      title: t("SolutionTemplates.roles.cxo.features.analytics.title"),
      description: t(
        "SolutionTemplates.roles.cxo.features.analytics.description"
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
      title: t("SolutionTemplates.roles.cxo.features.customization.title"),
      description: t(
        "SolutionTemplates.roles.cxo.features.customization.description"
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
      title: t("SolutionTemplates.roles.cxo.features.security.title"),
      description: t(
        "SolutionTemplates.roles.cxo.features.security.description"
      ),
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
  ];

  return (
    <WebLayout>
      <SolutionRoleTemplate
        title={t("SolutionTemplates.roles.cxo.title")}
        description={t("SolutionTemplates.roles.cxo.description")}
        challenges={challenges}
        benefits={benefits}
        features={features}
      >
        {/* Call to action section */}
        <section className="bg-gray-cloud py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              {t("SolutionTemplates.roles.cxo.cta.heading")}
            </h2>
            <p className="text-lg text-gray-graphite max-w-3xl mx-auto mb-8">
              {t("SolutionTemplates.roles.cxo.cta.description")}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button href="https://app.teamup.works/signup" size="lg">
                {t("SolutionTemplates.roles.cxo.cta.primaryButton")}
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                {t("SolutionTemplates.roles.cxo.cta.secondaryButton")}
              </Button>
            </div>
          </div>
        </section>
      </SolutionRoleTemplate>
    </WebLayout>
  );
}

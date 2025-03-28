"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionTemplate from "../../../components/new-web/solution-template";
import Button from "../../../components/new-web/button";
import { useTranslations } from "../../../contexts/TranslationContext";

export default function CompanyEventsSolutionPage() {
  const t = useTranslations();

  const blocks = [
    {
      title: t("SolutionTemplates.companyEvents.blocks.allHands.title"),
      description: t(
        "SolutionTemplates.companyEvents.blocks.allHands.description"
      ),
      image: "/solutions/all-hands.jpg",
      bulletPoints: t(
        "SolutionTemplates.companyEvents.blocks.allHands.bulletPoints"
      ),
    },
    {
      title: t("SolutionTemplates.companyEvents.blocks.teamBuilding.title"),
      description: t(
        "SolutionTemplates.companyEvents.blocks.teamBuilding.description"
      ),
      image: "/solutions/team-building.jpg",
      bulletPoints: t(
        "SolutionTemplates.companyEvents.blocks.teamBuilding.bulletPoints"
      ),
    },
    {
      title: t("SolutionTemplates.companyEvents.blocks.celebrations.title"),
      description: t(
        "SolutionTemplates.companyEvents.blocks.celebrations.description"
      ),
      image: "/solutions/celebrations.jpg",
      bulletPoints: t(
        "SolutionTemplates.companyEvents.blocks.celebrations.bulletPoints"
      ),
    },
    {
      title: t("SolutionTemplates.companyEvents.blocks.onboarding.title"),
      description: t(
        "SolutionTemplates.companyEvents.blocks.onboarding.description"
      ),
      image: "/solutions/onboarding.jpg",
      bulletPoints: t(
        "SolutionTemplates.companyEvents.blocks.onboarding.bulletPoints"
      ),
    },
  ];

  return (
    <WebLayout>
      <SolutionTemplate
        title={t("SolutionTemplates.companyEvents.title")}
        description={t("SolutionTemplates.companyEvents.description")}
        blocks={blocks}
      >
        {/* Call to action section */}
        <section className="bg-gray-cloud py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              {t("SolutionTemplates.companyEvents.cta.heading")}
            </h2>
            <p className="text-lg text-gray-graphite max-w-3xl mx-auto mb-8">
              {t("SolutionTemplates.companyEvents.cta.description")}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button href="https://app.teamup.works/signup" size="lg">
                {t("SolutionTemplates.companyEvents.cta.primaryButton")}
              </Button>
              <Button href="#" variant="secondary" size="lg">
                {t("SolutionTemplates.companyEvents.cta.secondaryButton")}
              </Button>
            </div>
          </div>
        </section>
      </SolutionTemplate>
    </WebLayout>
  );
}

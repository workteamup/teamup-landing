"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionTemplate from "../../../components/new-web/solution-template";
import Button from "../../../components/new-web/button";
import { useTranslations } from "../../../contexts/TranslationContext";

export default function CustomOfficeSolutionPage() {
  const t = useTranslations();

  const blocks = [
    {
      title: t("SolutionTemplates.customOffice.blocks.brandedSpaces.title"),
      description: t(
        "SolutionTemplates.customOffice.blocks.brandedSpaces.description"
      ),
      image: "/solutions/branded-office.jpg",
      bulletPoints: t(
        "SolutionTemplates.customOffice.blocks.brandedSpaces.bulletPoints"
      ),
    },
    {
      title: t("SolutionTemplates.customOffice.blocks.departmentAreas.title"),
      description: t(
        "SolutionTemplates.customOffice.blocks.departmentAreas.description"
      ),
      image: "/solutions/department-areas.jpg",
      bulletPoints: t(
        "SolutionTemplates.customOffice.blocks.departmentAreas.bulletPoints"
      ),
    },
    {
      title: t("SolutionTemplates.customOffice.blocks.workflow.title"),
      description: t(
        "SolutionTemplates.customOffice.blocks.workflow.description"
      ),
      image: "/solutions/workflow-layout.jpg",
      bulletPoints: t(
        "SolutionTemplates.customOffice.blocks.workflow.bulletPoints"
      ),
    },
    {
      title: t("SolutionTemplates.customOffice.blocks.integrations.title"),
      description: t(
        "SolutionTemplates.customOffice.blocks.integrations.description"
      ),
      image: "/solutions/tool-integrations.jpg",
      bulletPoints: t(
        "SolutionTemplates.customOffice.blocks.integrations.bulletPoints"
      ),
    },
  ];

  return (
    <WebLayout>
      <SolutionTemplate
        title={t("SolutionTemplates.customOffice.title")}
        description={t("SolutionTemplates.customOffice.description")}
        blocks={blocks}
      >
        {/* Call to action section */}
        <section className="bg-gray-cloud py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              {t("SolutionTemplates.customOffice.cta.heading")}
            </h2>
            <p className="text-lg text-gray-graphite max-w-3xl mx-auto mb-8">
              {t("SolutionTemplates.customOffice.cta.description")}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                href="https://app.teamup.works/signup" 
                size="lg"
              >
                {t("SolutionTemplates.customOffice.cta.primaryButton")}
              </Button>
              <Button 
                href="#" 
                variant="secondary" 
                size="lg"
              >
                {t("SolutionTemplates.customOffice.cta.secondaryButton")}
              </Button>
            </div>
          </div>
        </section>
      </SolutionTemplate>
    </WebLayout>
  );
}

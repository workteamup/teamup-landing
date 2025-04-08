"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionTemplate from "../../../components/new-web/solution-type-template";
import Button from "../../../components/new-web/button";
import { useTranslations } from "../../../contexts/TranslationContext";

export default function DailyActivitySolutionPage() {
  const t = useTranslations();

  const blocks = [
    {
      title: t("SolutionTemplates.dailyActivity.blocks.standup.title"),
      description: t(
        "SolutionTemplates.dailyActivity.blocks.standup.description"
      ),
      image: "/solutions/daily-standup.jpg",
      bulletPoints: t(
        "SolutionTemplates.dailyActivity.blocks.standup.bulletPoints"
      ),
    },
    {
      title: t("SolutionTemplates.dailyActivity.blocks.workspace.title"),
      description: t(
        "SolutionTemplates.dailyActivity.blocks.workspace.description"
      ),
      image: "/solutions/collaborative-workspace.jpg",
      bulletPoints: t(
        "SolutionTemplates.dailyActivity.blocks.workspace.bulletPoints"
      ),
    },
    {
      title: t("SolutionTemplates.dailyActivity.blocks.meetings.title"),
      description: t(
        "SolutionTemplates.dailyActivity.blocks.meetings.description"
      ),
      image: "/solutions/team-meeting.jpg",
      bulletPoints: t(
        "SolutionTemplates.dailyActivity.blocks.meetings.bulletPoints"
      ),
    },
    {
      title: t("SolutionTemplates.dailyActivity.blocks.focus.title"),
      description: t(
        "SolutionTemplates.dailyActivity.blocks.focus.description"
      ),
      image: "/solutions/focus-zone.jpg",
      bulletPoints: t(
        "SolutionTemplates.dailyActivity.blocks.focus.bulletPoints"
      ),
    },
  ];

  return (
    <WebLayout>
      <SolutionTemplate
        title={t("SolutionTemplates.dailyActivity.title")}
        description={t("SolutionTemplates.dailyActivity.description")}
        blocks={blocks}
      >
        {/* Call to action section */}
        <section className="bg-gray-cloud py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              {t("SolutionTemplates.dailyActivity.cta.heading")}
            </h2>
            <p className="text-lg text-gray-graphite max-w-3xl mx-auto mb-8">
              {t("SolutionTemplates.dailyActivity.cta.description")}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button href="https://app.teamup.works/signup" size="lg">
                {t("SolutionTemplates.dailyActivity.cta.primaryButton")}
              </Button>
              <Button href="#" variant="secondary" size="lg">
                {t("SolutionTemplates.dailyActivity.cta.secondaryButton")}
              </Button>
            </div>
          </div>
        </section>
      </SolutionTemplate>
    </WebLayout>
  );
}

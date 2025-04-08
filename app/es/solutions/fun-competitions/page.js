"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionTemplate from "../../../components/new-web/solution-type-template";
import Button from "../../../components/new-web/button";
import { useTranslations } from "../../../contexts/TranslationContext";

export default function FunCompetitionsSolutionPage() {
  const t = useTranslations();

  const blocks = [
    {
      title: t("SolutionTemplates.funCompetitions.blocks.teamGames.title"),
      description: t(
        "SolutionTemplates.funCompetitions.blocks.teamGames.description"
      ),
      image: "/solutions/team-games.jpg",
      bulletPoints: t(
        "SolutionTemplates.funCompetitions.blocks.teamGames.bulletPoints"
      ),
    },
    {
      title: t("SolutionTemplates.funCompetitions.blocks.tournaments.title"),
      description: t(
        "SolutionTemplates.funCompetitions.blocks.tournaments.description"
      ),
      image: "/solutions/tournaments.jpg",
      bulletPoints: t(
        "SolutionTemplates.funCompetitions.blocks.tournaments.bulletPoints"
      ),
    },
    {
      title: t("SolutionTemplates.funCompetitions.blocks.icebreakers.title"),
      description: t(
        "SolutionTemplates.funCompetitions.blocks.icebreakers.description"
      ),
      image: "/solutions/icebreakers.jpg",
      bulletPoints: t(
        "SolutionTemplates.funCompetitions.blocks.icebreakers.bulletPoints"
      ),
    },
    {
      title: t("SolutionTemplates.funCompetitions.blocks.rewards.title"),
      description: t(
        "SolutionTemplates.funCompetitions.blocks.rewards.description"
      ),
      image: "/solutions/rewards.jpg",
      bulletPoints: t(
        "SolutionTemplates.funCompetitions.blocks.rewards.bulletPoints"
      ),
    },
  ];

  return (
    <WebLayout>
      <SolutionTemplate
        title={t("SolutionTemplates.funCompetitions.title")}
        description={t("SolutionTemplates.funCompetitions.description")}
        blocks={blocks}
      >
        {/* Call to action section */}
        <section className="bg-gray-cloud py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
              {t("SolutionTemplates.funCompetitions.cta.heading")}
            </h2>
            <p className="text-lg text-gray-graphite max-w-3xl mx-auto mb-8">
              {t("SolutionTemplates.funCompetitions.cta.description")}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button href="https://app.teamup.works/signup" size="lg">
                {t("SolutionTemplates.funCompetitions.cta.primaryButton")}
              </Button>
              <Button href="#" variant="secondary" size="lg">
                {t("SolutionTemplates.funCompetitions.cta.secondaryButton")}
              </Button>
            </div>
          </div>
        </section>
      </SolutionTemplate>
    </WebLayout>
  );
}

"use client";

import WebLayout from "../../components/new-web/layout";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "../../contexts/TranslationContext";
import PageTitle from "../../components/new-web/page-title";

// Note: With "use client" directive, static metadata export doesn't work
// Metadata is handled by the page.js file itself in the app directory structure
export default function SolutionsPage() {
  const t = useTranslations();
  const locale = useLocale();

  // Solutions data
  const solutions = [
    {
      id: "day-to-day-activity",
      title: t("SolutionsPage.solutions.dayToDay.title"),
      description: t("SolutionsPage.solutions.dayToDay.description"),
      image: "/solutions/daily-activity.jpg",
    },
    {
      id: "company-events",
      title: t("SolutionsPage.solutions.companyEvents.title"),
      description: t("SolutionsPage.solutions.companyEvents.description"),
      image: "/solutions/company-events.jpg",
    },
    {
      id: "fun-competitions",
      title: t("SolutionsPage.solutions.funCompetitions.title"),
      description: t("SolutionsPage.solutions.funCompetitions.description"),
      image: "/solutions/competitions.jpg",
    },
    {
      id: "custom-office-space",
      title: t("SolutionsPage.solutions.customOffice.title"),
      description: t("SolutionsPage.solutions.customOffice.description"),
      image: "/solutions/custom-office.jpg",
    },
  ];

  return (
    <WebLayout>
      <PageTitle
        title={t("SolutionsPage.pageHeading")}
        align="center"
        size="large"
        background="brand-dark"
        theme="dark"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {solutions.map((solution) => (
            <Link
              href={`/${locale}/solutions/${solution.id}`}
              key={solution.id}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="h-60 relative">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-semibold mb-3 group-hover:text-brand-purple transition-colors text-gray-phantom">
                    {solution.title}
                  </h2>
                  <p className="text-gray-space flex-grow">
                    {solution.description}
                  </p>
                  <div className="mt-4 text-brand-blue font-medium flex items-center">
                    <span>{t("SolutionsPage.viewSolution")}</span>
                    <svg
                      className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </WebLayout>
  );
}

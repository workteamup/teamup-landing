"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function FarmyardPage() {
  const customContent = {
    title: "A team game that will get the worst out of you",
    tagline: "Collaborate in a chaotic and hilarious virtual farm environment",
    features: [
      {
        title: "Cooperative Tasks",
        description:
          "Work together to manage your virtual farm through various challenging and funny scenarios.",
      },
      {
        title: "Animal Chaos",
        description:
          "Deal with unpredictable virtual animals that create hilarious situations requiring quick team responses.",
      },
      {
        title: "Resource Management",
        description:
          "Coordinate with your team to efficiently manage farm resources and handle unexpected events.",
      },
      {
        title: "Mini-Games",
        description:
          "Engage in various farm-themed mini-games from sheep herding to crop harvesting races.",
      },
      {
        title: "Weather Events",
        description:
          "Adapt to changing weather conditions that affect your farming activities and create new challenges.",
      },
      {
        title: "Achievement System",
        description:
          "Earn badges and rewards for completing tasks and handling farm emergencies as a team.",
      },
    ],
    howToUse: [
      {
        title: "Enter the Farm",
        description:
          "Join your virtual farm and get acquainted with your responsibilities.",
      },
      {
        title: "Form Your Crew",
        description:
          "Team up with colleagues and assign different farming roles and areas.",
      },
      {
        title: "Start Activities",
        description:
          "Choose from various farm activities and mini-games to tackle together.",
      },
      {
        title: "Handle Chaos",
        description:
          "Work together to manage unexpected events and keep your farm running smoothly.",
      },
      {
        title: "Celebrate Achievements",
        description:
          "Track your team's progress and celebrate completing challenging farm tasks.",
      },
    ],
    cta: {
      title: "Ready for farm-tastic team building?",
      description:
        "Join the chaotic fun of managing a virtual farm with your team.",
      buttonText: "Try Free for 2 Months",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="farmyard"
      language="en"
      customContent={customContent}
    />
  );
}

"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function DebateRoomPage() {
  const customContent = {
    title: "No more awkward constant interruptions",
    tagline:
      "Structure your discussions for better outcomes and equal participation",
    features: [
      {
        title: "Speaking Queue",
        description:
          "Fair and organized speaking order that eliminates interruptions and ensures everyone gets heard.",
      },
      {
        title: "Time Management",
        description:
          "Built-in timers for speaking turns and topic discussions to keep debates focused and balanced.",
      },
      {
        title: "Topic Organization",
        description:
          "Clear structure for organizing debate topics, points, and counterpoints.",
      },
      {
        title: "Reaction System",
        description:
          "Non-verbal reaction options to show agreement, disagreement, or request clarification without interrupting.",
      },
      {
        title: "Moderation Tools",
        description:
          "Powerful tools for moderators to manage speakers, time, and maintain productive discussions.",
      },
      {
        title: "Summary Board",
        description:
          "Capture and display key points and decisions made during the debate for easy reference.",
      },
    ],
    howToUse: [
      {
        title: "Set Up Your Debate",
        description:
          "Create your debate room and configure the format and rules for your discussion.",
      },
      {
        title: "Define Topics",
        description:
          "Add your debate topics and organize them in the order you want to discuss them.",
      },
      {
        title: "Assign Roles",
        description:
          "Designate moderators and participants, and set speaking time limits if desired.",
      },
      {
        title: "Facilitate Discussion",
        description:
          "Use the queue system and moderation tools to maintain an orderly and productive debate.",
      },
      {
        title: "Capture Conclusions",
        description:
          "Document key points and decisions on the summary board for future reference.",
      },
    ],
    cta: {
      title: "Ready for more productive discussions?",
      description:
        "Experience structured debates that lead to better understanding and clearer outcomes.",
      buttonText: "Try Free for 2 Months",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="debate-room"
      language="en"
      customContent={customContent}
    />
  );
}

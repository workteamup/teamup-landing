"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function SailboatRetrospectivePage() {
  const customContent = {
    title: "Getting everyone on the same page has never been easier",
    tagline: "Reflect and improve together with a visual retrospective format",
    features: [
      {
        title: "Visual Metaphor",
        description:
          "Use the sailboat metaphor to identify what's pushing you forward and what's holding you back.",
      },
      {
        title: "Collaborative Input",
        description:
          "Everyone can contribute ideas simultaneously, ensuring all voices are heard.",
      },
      {
        title: "Real-time Grouping",
        description:
          "Organize and categorize feedback in real-time as themes emerge from the discussion.",
      },
      {
        title: "Action Items",
        description:
          "Turn insights into actionable tasks with built-in action item tracking.",
      },
      {
        title: "Timer Integration",
        description:
          "Keep your retrospective focused and on track with integrated timers for each phase.",
      },
      {
        title: "Export & Share",
        description:
          "Export your retrospective results and action items for easy follow-up.",
      },
    ],
    howToUse: [
      {
        title: "Set the Stage",
        description:
          "Create your retrospective space and invite your team members to join.",
      },
      {
        title: "Gather Feedback",
        description:
          "Team members add their thoughts about what's working (wind), challenges (anchors), risks (rocks), and goals (destination).",
      },
      {
        title: "Group and Discuss",
        description:
          "Organize similar items together and facilitate a discussion about key themes.",
      },
      {
        title: "Create Action Items",
        description:
          "Turn insights into concrete action items and assign owners for follow-up.",
      },
      {
        title: "Follow Up",
        description:
          "Track progress on action items and review them in your next retrospective.",
      },
    ],
    cta: {
      title: "Ready to improve your team's retrospectives?",
      description:
        "Make your retrospectives more engaging and actionable with our Sailboat format.",
      buttonText: "Try Free for 2 Months",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="sailboat-retrospective"
      language="en"
      customContent={customContent}
    />
  );
}

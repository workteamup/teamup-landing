"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function AuditoriumPage() {
  const customContent = {
    title: "What can compare to having the stage for yourself?",
    tagline: "Present with confidence in a professional virtual auditorium",
    features: [
      {
        title: "Professional Stage",
        description:
          "A well-designed virtual stage that puts presenters in the spotlight and engages the audience.",
      },
      {
        title: "Dynamic Presentations",
        description:
          "Share slides, videos, and interactive content with seamless transitions and high-quality display.",
      },
      {
        title: "Audience Interaction",
        description:
          "Built-in tools for Q&A sessions, polls, and audience feedback to keep everyone engaged.",
      },
      {
        title: "Flexible Seating",
        description:
          "Accommodate audiences of any size with automatically optimized viewing angles for everyone.",
      },
      {
        title: "Presenter Controls",
        description:
          "Easy-to-use controls for managing presentations, spotlighting speakers, and handling audience interactions.",
      },
      {
        title: "Recording & Sharing",
        description:
          "Record presentations for later viewing and easily share them with team members who couldn't attend.",
      },
    ],
    howToUse: [
      {
        title: "Set Up Your Auditorium",
        description:
          "Create your auditorium space and customize it for your presentation needs.",
      },
      {
        title: "Prepare Your Content",
        description:
          "Upload your presentation materials and test them in the virtual environment.",
      },
      {
        title: "Invite Your Audience",
        description:
          "Share the auditorium link with your audience and set viewing permissions.",
      },
      {
        title: "Engage Your Audience",
        description:
          "Use interactive features like polls and Q&A to maintain audience engagement.",
      },
      {
        title: "Follow Up",
        description:
          "Share recordings and gather feedback to improve future presentations.",
      },
    ],
    cta: {
      title: "Ready to elevate your presentations?",
      description:
        "Transform your virtual presentations into engaging experiences that leave a lasting impression.",
      buttonText: "Try Free for 2 Months",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="auditorium"
      language="en"
      customContent={customContent}
    />
  );
}

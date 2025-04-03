"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function CampfirePage() {
  const customContent = {
    title: "The easiest way to create opportunities to connect and bond",
    tagline:
      "Build stronger team relationships in a casual, relaxed environment",
    features: [
      {
        title: "Cozy Atmosphere",
        description:
          "A warm, inviting virtual campfire setting that encourages open conversation and sharing.",
      },
      {
        title: "Ice Breaker Games",
        description:
          "Built-in conversation starters and team building activities to get everyone involved.",
      },
      {
        title: "Story Sharing",
        description:
          "Take turns sharing stories, experiences, and getting to know your teammates better.",
      },
      {
        title: "Virtual S'mores",
        description:
          "Fun interactive elements like virtual marshmallow roasting to add playfulness to your gatherings.",
      },
      {
        title: "Flexible Seating",
        description:
          "Arrange your virtual camp chairs to create intimate conversation circles or larger group discussions.",
      },
      {
        title: "Ambient Sounds",
        description:
          "Optional crackling fire and nature sounds to enhance the camping atmosphere.",
      },
    ],
    howToUse: [
      {
        title: "Set Up Your Campfire",
        description:
          "Create your campfire space and customize the environment to your liking.",
      },
      {
        title: "Invite Your Team",
        description:
          "Send invitations to team members for your virtual campfire gathering.",
      },
      {
        title: "Choose Activities",
        description:
          "Select from various ice breakers and team building activities to include in your session.",
      },
      {
        title: "Start the Conversation",
        description:
          "Use conversation prompts or let discussions flow naturally around the campfire.",
      },
      {
        title: "Share and Connect",
        description:
          "Take turns sharing stories and experiences, building stronger team bonds.",
      },
    ],
    cta: {
      title: "Ready to bring your team together?",
      description:
        "Create meaningful connections in a relaxed, virtual campfire setting.",
      buttonText: "Try Free for 2 Months",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="campfire"
      language="en"
      customContent={customContent}
    />
  );
}

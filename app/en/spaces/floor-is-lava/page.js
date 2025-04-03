"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function FloorIsLavaPage() {
  const customContent = {
    title: "Name says it all, one mistake and you're done",
    tagline: "Turn team building into an exciting virtual adventure",
    features: [
      {
        title: "Dynamic Obstacles",
        description:
          "Challenging virtual obstacles that require quick thinking and coordination to overcome.",
      },
      {
        title: "Team Coordination",
        description:
          "Work together to help teammates navigate through the course and reach safety.",
      },
      {
        title: "Real-time Physics",
        description:
          "Realistic movement and physics that make the game challenging and engaging.",
      },
      {
        title: "Power-ups",
        description:
          "Collect special abilities and bonuses to help your team survive longer.",
      },
      {
        title: "Competitive Modes",
        description:
          "Multiple game modes including team vs team and last player standing competitions.",
      },
      {
        title: "Customizable Difficulty",
        description:
          "Adjust the challenge level to match your team's skill and experience.",
      },
    ],
    howToUse: [
      {
        title: "Create Your Game",
        description:
          "Set up a new Floor is Lava session and choose your game mode.",
      },
      {
        title: "Form Teams",
        description:
          "Divide players into teams or prepare for an every-player-for-themselves challenge.",
      },
      {
        title: "Learn the Controls",
        description:
          "Take a quick tutorial to master the movement and special abilities.",
      },
      {
        title: "Start the Challenge",
        description:
          "Begin the game and work together to survive the rising lava and obstacles.",
      },
      {
        title: "Celebrate Success",
        description:
          "Compare scores, celebrate victories, and challenge each other to beat high scores.",
      },
    ],
    cta: {
      title: "Ready to test your team's agility?",
      description:
        "Jump into an exciting virtual challenge that brings your team together through friendly competition.",
      buttonText: "Try Free for 2 Months",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="floor-is-lava"
      language="en"
      customContent={customContent}
    />
  );
}

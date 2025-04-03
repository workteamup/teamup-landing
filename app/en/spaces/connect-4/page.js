"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function Connect4Page() {
  const customContent = {
    title: "The classic game with a modern twist",
    tagline: "Challenge your teammates in a timeless game of strategy",
    features: [
      {
        title: "3D Game Board",
        description:
          "An immersive 3D game board that brings the classic Connect 4 experience to life.",
      },
      {
        title: "Tournament Mode",
        description:
          "Organize tournaments with multiple players and track rankings over time.",
      },
      {
        title: "Spectator View",
        description:
          "Watch ongoing games and learn from others' strategies while waiting for your turn.",
      },
      {
        title: "Move Timer",
        description:
          "Optional time limits for moves to keep games fast-paced and exciting.",
      },
      {
        title: "Game Analysis",
        description:
          "Review your games and analyze moves to improve your strategy.",
      },
      {
        title: "Chat & Reactions",
        description:
          "Interact with other players through chat and fun reaction emotes.",
      },
    ],
    howToUse: [
      {
        title: "Start a Game",
        description:
          "Create a new game room or join an existing one from the lobby.",
      },
      {
        title: "Choose Game Mode",
        description:
          "Select between casual play, ranked matches, or tournament mode.",
      },
      {
        title: "Make Your Move",
        description:
          "Click on a column to drop your piece and try to connect four in a row.",
      },
      {
        title: "Use Strategy",
        description:
          "Plan your moves ahead and watch out for your opponent's potential winning moves.",
      },
      {
        title: "Challenge Others",
        description:
          "Invite teammates to matches or join the tournament leaderboard.",
      },
    ],
    cta: {
      title: "Ready to show your strategic skills?",
      description:
        "Experience the classic Connect 4 game reimagined for virtual team building.",
      buttonText: "Try Free for 2 Months",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="connect-4"
      language="en"
      customContent={customContent}
    />
  );
}

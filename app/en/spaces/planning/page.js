"use client";

import SpacePageTemplate from "../../../components/new-web/space-page-template";

export default function PlanningSpacePage() {
  const customContent = {
    title: "Dynamic multioption voting sessions that won't bore you",
    tagline: "Empower your team to make decisions together",
    features: [
      {
        title: "Team Task Board",
        description:
          "Organize your team tasks with an intuitive drag-and-drop board for better visibility and tracking.",
      },
      {
        title: "Timeline Visualization",
        description:
          "Map out your project schedule with a visual timeline that everyone can understand at a glance.",
      },
      {
        title: "Resource Allocation",
        description:
          "Easily assign team members to tasks and track resource distribution across your projects.",
      },
      {
        title: "Priority Markers",
        description:
          "Highlight high-priority tasks and deadlines to ensure critical work gets done first.",
      },
      {
        title: "Note Taking",
        description:
          "Capture important decisions and ideas directly within the planning space for future reference.",
      },
      {
        title: "Template Library",
        description:
          "Choose from pre-built planning templates for different project types and methodologies.",
      },
    ],
    howToUse: [
      {
        title: "Create your Planning Space",
        description:
          'Click on "Create Space" and select the Planning template from the available options.',
      },
      {
        title: "Invite Your Team",
        description:
          "Send invitations to all team members who should participate in the planning session.",
      },
      {
        title: "Set Up Your Board",
        description:
          "Organize your board columns according to your workflow (e.g., To Do, In Progress, Done).",
      },
      {
        title: "Add Tasks and Assignments",
        description:
          "Create task cards with descriptions, due dates, and assign them to team members.",
      },
      {
        title: "Conduct Your Planning Session",
        description:
          "Run your planning meeting, discussing each task and moving them into appropriate columns as you go.",
      },
    ],
    cta: {
      title: "Ready to transform your team planning?",
      description:
        "Experience the power of visual planning with your team in our Planning Space.",
      buttonText: "Try Free for 2 Months",
    },
  };

  return (
    <SpacePageTemplate
      spaceId="planning"
      language="en"
      customContent={customContent}
    />
  );
}

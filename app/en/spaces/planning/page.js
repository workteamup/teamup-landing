"use client";

import WebLayout from "../../../components/new-web/layout";
import SpaceTemplate from "../../../components/new-web/space-template";
import Button from "../../../components/new-web/button";

export default function PlanningSpacePage() {
  const features = [
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
  ];

  const howToUse = [
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
  ];

  return (
    <WebLayout>
      <SpaceTemplate
        tagline="Plan and organize your team's work with clarity and purpose"
        imageUrl="/spaces/planning-hero.jpg"
        title="Planning Space"
        features={features}
        howToUse={howToUse}
      >
        {/* Additional content specific to the Planning space */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gray-cloud rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-phantom">
              Ready to transform your team planning?
            </h2>
            <p className="text-center mb-6 text-gray-graphite">
              Experience the power of visual planning with your team in our
              Planning Space.
            </p>
            <div className="flex justify-center">
              <Button href="https://app.teamup.works/signup" size="lg">
                Try Free for 2 Months
              </Button>
            </div>
          </div>
        </section>
      </SpaceTemplate>
    </WebLayout>
  );
}

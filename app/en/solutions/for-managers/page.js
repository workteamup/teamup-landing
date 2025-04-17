"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByRolePage from "../../../components/new-web/solution-by-role-page";

export default function ManagersSolutionPage() {
  // Data extracted from solutions-by-role.md for Managers
  const managersData = {
    title: "Managers & Team Leads",
    hero: {
      headline: "Lead High-Performing Remote Teams with Confidence",
      subheadline: "Team Up! gives managers the tools to build connection, drive collaboration, and maintain team momentum—no matter where your people work.",
      cta: "Elevate Your Team Management"
    },
    benefits: [
      {
        title: "Stronger Team Bonds",
        description: "Build genuine connections between team members that translate to better collaboration and mutual support."
      },
      {
        title: "Increased Engagement",
        description: "Keep your team motivated and engaged with interactive experiences that break the monotony of remote work."
      },
      {
        title: "Better Communication",
        description: "Create an environment where information flows naturally and team members feel comfortable sharing ideas."
      },
      {
        title: "Visible Leadership",
        description: "Maintain presence and accessibility as a leader, even when you can't be physically present with your team."
      }
    ],
    stats: [
      {
        value: "63%",
        description: "of managers report that maintaining team cohesion is their biggest challenge in remote environments.",
        source: "Leadership Development Survey, 2023"
      },
      {
        value: "82%",
        description: "of team members say they feel more connected to colleagues after participating in virtual team activities."
      },
      {
        value: "3.4x",
        description: "higher problem-solving effectiveness in teams with strong social connections versus those without."
      }
    ],
    features: [
      {
        title: "Team Spaces",
        description: "Create dedicated virtual environments for your team to collaborate, socialize, and build relationships."
      },
      {
        title: "Meeting Tools",
        description: "Run more effective meetings with interactive features that boost participation and keep everyone engaged."
      },
      {
        title: "Team Insights",
        description: "Gain visibility into team dynamics and engagement patterns to identify opportunities for improvement."
      }
    ],
    spotlight: [
      {
        title: "Daily Standup Zone",
        description: "Transform routine check-ins into engaging interactions in a space designed for quick updates and team alignment. Visual project boards and interactive elements keep everyone focused and involved."
      },
      {
        title: "Collaboration Hub",
        description: "Enable seamless teamwork in a dedicated space with integrated tools for brainstorming, problem-solving, and project planning. Multiple work areas support different types of collaboration."
      },
      {
        title: "Team Connection Corner",
        description: "Strengthen relationships with a space designed for social interaction and team building. Regular activities and informal gatherings help remote team members develop the personal connections that drive effective collaboration."
      }
    ],
    testimonial: {
      quote: "As a manager of a fully distributed team, Team Up! has been a game-changer. Our team feels more connected than when we were in an office, and our productivity metrics have improved by 28% since implementation.",
      author: "Marcus Johnson",
      position: "Engineering Manager, TechSolutions Inc."
    },
    comparisons: [
      {
        traditional: "Video Conference Meetings",
        advantage: "Create context-rich interactions in 3D environments where team members can move, collaborate, and engage naturally rather than staring at a grid of faces."
      },
      {
        traditional: "Project Management Tools",
        advantage: "Combine task management with immersive collaboration spaces where teams can discuss, visualize, and solve problems together in real-time."
      },
      {
        traditional: "Team Chat Platforms",
        advantage: "Replace text-only communication with rich virtual experiences that capture the nuance and spontaneity of in-person interactions."
      }
    ],
    useCases: [
      "Run engaging daily standups in a dedicated space with visual progress tracking and interactive team updates.",
      "Host effective brainstorming sessions in a virtual room with collaborative whiteboards and voting tools.",
      "Build team cohesion with regular social activities in custom spaces designed for connection and fun."
    ],
    howItWorks: [
      "Set up your team's virtual workspace with customized areas for different types of collaboration.",
      "Establish team routines and meeting templates that make the most of the interactive features.",
      "Gradually introduce team building activities that strengthen relationships and improve collaboration."
    ],
    getStarted: {
      heading: "Ready to take your team leadership to the next level?",
      description: "Join managers who are building high-performing remote teams with Team Up!",
      cta: "Start Your Team Transformation"
    }
  };

  return (
    <WebLayout>
      <SolutionByRolePage roleData={managersData} />
    </WebLayout>
  );
}

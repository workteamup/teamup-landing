"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByTypePage from "../../../components/new-web/solution-by-type-page";

export default function DailyActivityPage() {
  const dailyActivityData = {
    hero: {
      headline: "Make Every Meeting Matter",
      subheadline: "Team Up! transforms routine meetings into interactive, productive experiences in immersive 3D environments.",
      cta: "Elevate Your Daily Meetings"
    },
    importance: [
      {
        title: "Engagement",
        description: "Daily meetings set the tone for your team's culture—keep your team motivated and connected with immersive 3D spaces that encourage participation."
      },
      {
        title: "Productivity",
        description: "Cut meeting fatigue and boost focus with interactive 3D tools that make routine discussions feel fresh and engaging."
      },
      {
        title: "Consistency",
        description: "Build habits of collaboration with purpose-designed 3D spaces that make daily interaction frictionless and meaningful."
      }
    ],
    stats: [
      {
        value: "70%",
        description: "of employees report meeting fatigue with traditional video calls, reducing productivity by up to 30%",
        source: "Microsoft Work Trend Index, 2023"
      },
      {
        value: "25%",
        description: "Teams with engaging daily interactions are 25% more productive and have 40% better information retention."
      },
      {
        value: "$400B",
        description: "Poorly run meetings cost companies $400 billion annually in lost time and diminished engagement."
      }
    ],
    benefits: [
      {
        title: "Persistent Spaces",
        description: "Always-on 3D rooms for quick check-ins—no scheduling needed, just drop in like you would at a physical office."
      },
      {
        title: "Interactive Tools",
        description: "Use spatial audio, 3D polls, whiteboards, and avatars to keep everyone engaged and present in the conversation."
      },
      {
        title: "Custom Agendas",
        description: "Structure discussions with built-in templates for stand-ups or retros with visual tracking of discussion points."
      }
    ],
    comparisons: [
      {
        traditional: "Video conferencing for daily meetings",
        advantage: "Immersive 3D spaces with spatial audio that reduce fatigue, boost participation, and create a sense of shared presence that video calls can't match."
      }
    ],
    useCases: [
      "Host a virtual stand-up in our Planning space where team members move avatars to update progress visually while using spatial audio for natural conversation.",
      "Run a daily mood check-in using our Campfire environment with polls to gauge team morale through avatar placement on different platforms.",
      "Facilitate a sprint planning session in our dedicated Planning room with interactive boards and voting platforms that visualize team consensus."
    ],
    spotlight: [
      {
        title: "Persistent Meeting Points",
        description: "Always-open 3D rooms for spontaneous check-ins that encourage the casual conversations that build team cohesion."
      },
      {
        title: "Interactive Polls",
        description: "Collect real-time feedback during meetings through physical avatar movement rather than abstract buttons."
      },
      {
        title: "Agenda Templates",
        description: "Streamline stand-ups and retros with pre-built 3D formats that visualize progress and discussion points."
      }
    ],
    testimonial: {
      quote: "Team Up! made our daily stand-ups feel like we're in the same room—our team is more connected than ever. The 3D space gives a sense of presence that Zoom never could, and our meeting effectiveness scores have increased by 45%.",
      author: "Jordan Lee",
      position: "Team Lead, TechForward Co."
    },
    futureProof: [
      {
        title: "Adaptive Spaces",
        description: "Team Up!'s daily meeting spaces seamlessly adjust to hybrid or fully remote setups, ensuring connectivity as work models evolve beyond 2025."
      },
      {
        title: "Continuous Updates",
        description: "Access new tools like AI-driven agendas or enhanced polling, keeping your daily interactions modern and efficient as technology advances."
      },
      {
        title: "Scalable Collaboration",
        description: "Support teams of any size, from small squads to global units, with 3D spaces that grow with your organization without losing the human connection."
      }
    ],
    getStarted: {
      heading: "Transform Your Daily Meetings",
      description: "Set up your team's daily 3D space in minutes and transform routine meetings into engaging experiences.",
      cta: "Start Your Free 30-Day Trial"
    }
  };

  return (
    <WebLayout>
      <SolutionByTypePage typeData={dailyActivityData} />
    </WebLayout>
  );
} 
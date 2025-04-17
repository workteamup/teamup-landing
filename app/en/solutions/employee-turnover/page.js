"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByPainPage from "../../../components/new-web/solution-by-pain-page";

export default function EmployeeTurnoverSolutionPage() {
  const turnoverData = {
    title: "Employee Turnover",
    hero: {
      headline: "Stop Employee Turnover in its Tracks",
      subheadline: "Retain your top talent with engaging team-building experiences that foster genuine connection.",
      cta: "Start Reducing Turnover Today"
    },
    reasons: [
      {
        description: "High turnover costs companies 1.5-2x an employee's salary in recruitment, onboarding, and lost productivity.",
        source: "SHRM, 2023"
      },
      {
        description: "Frequent departures hurt team morale, making it harder for remaining employees to stay motivated and committed."
      },
      {
        description: "Losing employees means losing valuable knowledge and institutional memory, delaying projects and innovation."
      }
    ],
    stats: [
      {
        value: "25%",
        description: "Companies with high turnover rates see a 25% decrease in productivity and innovation.",
        source: "Gallup, 2023"
      },
      {
        value: "4.2",
        description: "The average employee tenure is now just 4.2 years, and only 2.8 years for Millennials and Gen Z."
      },
      {
        value: "70%",
        description: "of employees say they'd stay longer if they felt more connected to their team and company culture."
      }
    ],
    benefits: [
      {
        description: "Foster a sense of belonging with persistent virtual spaces for daily interaction that recreate the camaraderie of in-person offices."
      },
      {
        description: "Strengthen team bonds through fun, game-inspired activities that create shared memories and inside jokes."
      },
      {
        description: "Provide opportunities for meaningful connections beyond work tasks, allowing teammates to know each other as people, not just colleagues."
      }
    ],
    comparisons: [
      {
        traditional: "Annual team-building retreats",
        advantage: "Continuous engagement through daily virtual interactions, not just once a year. Our 3D environments create memorable shared experiences at a fraction of the cost."
      }
    ],
    useCases: [
      "Host virtual coffee breaks in our Campfire environment to maintain team cohesion with conversation prompts that spark meaningful discussions.",
      "Organize monthly game nights featuring our Connect 4 and Floor is Lava activities to boost morale and create shared experiences.",
      "Create a virtual mentorship program using our Meeting Point spaces to support new hires and help them form connections from day one."
    ],
    spotlight: [
      {
        title: "Persistent Meeting Points",
        description: "Always-open virtual spaces for spontaneous conversations and community building."
      },
      {
        title: "Customizable 3D Avatars",
        description: "Let employees express their personalities and recognize colleagues instantly in virtual spaces."
      }
    ],
    testimonial: {
      quote: "Team Up! has been a game-changer for our remote team. The dynamic 3D spaces and interactive games have given our team something to bond over. Our turnover rate has never been lower — down 32% in six months.",
      author: "Maria Chen",
      position: "HR Manager, TechWave Inc."
    },
    howItWorks: [
      "Sign up and create your team's virtual space with our intuitive dashboard.",
      "Invite team members to join, customize their 3D avatars, and explore your virtual environment.",
      "Start hosting virtual events and activities designed specifically to strengthen connections and combat isolation."
    ],
    getStarted: {
      heading: "Ready to reduce turnover?",
      description: "Start your free 30-day trial today and see the difference in your team's connection.",
      cta: "Start Reducing Turnover Now"
    }
  };

  return (
    <WebLayout>
      <SolutionByPainPage painData={turnoverData} />
    </WebLayout>
  );
} 
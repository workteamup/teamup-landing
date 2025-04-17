"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByRolePage from "../../../components/new-web/solution-by-role-page";

export default function EmployeesSolutionPage() {
  // Data extracted from solutions-by-role.md for Employees
  const employeesData = {
    title: "Employees",
    hero: {
      headline: "Make Remote Work More Human and Enjoyable",
      subheadline: "Team Up! helps you connect with colleagues, collaborate effectively, and enjoy your workday—no matter where you're located.",
      cta: "See How It Works"
    },
    benefits: [
      {
        title: "Meaningful Connections",
        description: "Build real relationships with colleagues through natural interactions that go beyond video calls and chat messages."
      },
      {
        title: "Work-Life Balance",
        description: "Enjoy the flexibility of remote work while maintaining the social connections that make work fulfilling."
      },
      {
        title: "Effective Collaboration",
        description: "Work together more naturally in virtual spaces designed for different types of teamwork and interaction."
      },
      {
        title: "Professional Growth",
        description: "Develop your skills and visibility within the organization through better connections with teammates and leaders."
      }
    ],
    stats: [
      {
        value: "67%",
        description: "of remote employees report feeling disconnected from their colleagues at least some of the time.",
        source: "Remote Work Report, 2023"
      },
      {
        value: "78%",
        description: "of workers say that feeling connected to colleagues is essential for job satisfaction."
      },
      {
        value: "42%",
        description: "of remote employees miss the spontaneous interactions and relationship-building of in-person work."
      }
    ],
    features: [
      {
        title: "Social Spaces",
        description: "Connect with colleagues in virtual environments designed for casual conversation and relationship building."
      },
      {
        title: "Collaborative Tools",
        description: "Access intuitive tools that make working with teammates as natural as being in the same room."
      },
      {
        title: "Fun Activities",
        description: "Participate in team games and events that bring enjoyment and connection to your remote workday."
      }
    ],
    spotlight: [
      {
        title: "Virtual Break Room",
        description: "Take a break and chat with colleagues in a casual space designed for the spontaneous conversations that build relationships. Drop in anytime to find teammates and enjoy a moment of connection during your day."
      },
      {
        title: "Collaborative Workspace",
        description: "Work alongside teammates in a shared virtual environment that makes collaboration feel natural. Move between different areas for focused work, team discussions, or creative sessions."
      },
      {
        title: "Team Activities Center",
        description: "Participate in fun games and team-building exercises that strengthen relationships while providing a welcome break from routine tasks. Regular activities help you feel like part of the team."
      }
    ],
    testimonial: {
      quote: "As someone who's worked remotely for years, Team Up! has completely changed how connected I feel to my colleagues. I've built friendships I never would have made through video calls alone, and work feels so much more enjoyable.",
      author: "Jamie Rivera",
      position: "Product Designer, Remote First Inc."
    },
    comparisons: [
      {
        traditional: "Email and Chat",
        advantage: "Replace text-only communication with rich, contextual interactions in virtual spaces where you can see and hear colleagues in a natural environment."
      },
      {
        traditional: "Video Meetings",
        advantage: "Move beyond rigid video calls to flexible virtual environments where you can break into small groups, work side by side, or have private conversations."
      },
      {
        traditional: "In-Person Office",
        advantage: "Enjoy the best aspects of office life—spontaneous conversations, team bonding, and collaborative energy—while maintaining the flexibility of remote work."
      }
    ],
    useCases: [
      "Drop into the virtual break room during your coffee break to catch up with colleagues and build relationships.",
      "Collaborate with teammates in a shared space where you can discuss ideas, share screens, and work through problems together.",
      "Participate in weekly team games that provide a fun way to connect with colleagues beyond work tasks."
    ],
    howItWorks: [
      "Create your personalized avatar and set up your profile to represent yourself in the virtual workspace.",
      "Join your team's existing spaces or help create new ones for different types of work and interaction.",
      "Incorporate Team Up! into your daily routine, dropping in for collaboration sessions, team meetings, or casual conversations."
    ],
    getStarted: {
      heading: "Ready for a more connected remote work experience?",
      description: "Join thousands of remote workers who are building meaningful relationships with Team Up!",
      cta: "Start Your Free Trial"
    }
  };

  return (
    <WebLayout>
      <SolutionByRolePage roleData={employeesData} />
    </WebLayout>
  );
}

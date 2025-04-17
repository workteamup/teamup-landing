"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByPainPage from "../../../components/new-web/solution-by-pain-page";

export default function EmployeeDisengagementSolutionPage() {
  const disengagementData = {
    title: "Employee Disengagement",
    hero: {
      headline: "Reignite Your Team's Passion",
      subheadline: "Combat employee disengagement with Team Up!'s interactive 3D experiences that transform work into play.",
      cta: "Boost Team Engagement Now"
    },
    reasons: [
      {
        description: "Disengaged employees cost companies $450-550 billion annually in lost productivity and innovation.",
        source: "Gallup, 2023"
      },
      {
        description: "Lack of engagement leads to higher absenteeism, presenteeism, and eventual turnover."
      },
      {
        description: "Disengaged teams are less innovative, adaptable, and responsive to market changes and customer needs."
      }
    ],
    stats: [
      {
        value: "36%",
        description: "of employees report being actively engaged at work, with remote workers reporting even lower engagement.",
        source: "ADP Research, 2023"
      },
      {
        value: "2.5x",
        description: "Disengaged employees are 2.5 times more likely to leave their jobs within a year."
      },
      {
        value: "21%",
        description: "Companies with highly engaged employees see 21% higher profitability and 41% lower absenteeism."
      }
    ],
    benefits: [
      {
        description: "Spark joy and creativity with game-inspired virtual activities that break the monotony of remote work."
      },
      {
        description: "Provide opportunities for recognition and celebration in immersive virtual settings that feel special and meaningful."
      },
      {
        description: "Foster a sense of purpose by connecting individual work to team goals through interactive visualization and collaborative challenges."
      }
    ],
    comparisons: [
      {
        traditional: "In-person team-building workshops and occasional engagement initiatives",
        advantage: "Ongoing engagement through immersive 3D experiences accessible anytime, anywhere. Our platform creates daily moments of connection, not just occasional events."
      }
    ],
    useCases: [
      "Host virtual brainstorming sessions in our Auditorium where teams can vote on ideas through avatar placement for immediate visual feedback.",
      "Organize virtual team challenges in our Corral environment to boost collaboration and friendly competition.",
      "Create a virtual recognition wall in your custom office space to celebrate achievements and make team members feel valued."
    ],
    spotlight: [
      {
        title: "Interactive Games",
        description: "From virtual escape rooms to trivia nights in 3D environments that transform passive activities into active experiences."
      },
      {
        title: "Customizable Spaces",
        description: "Design your virtual office to reflect your team culture, with interactive elements that encourage engagement."
      }
    ],
    testimonial: {
      quote: "Team Up! has transformed our remote work culture. The 3D environments and game-based activities give our team something to look forward to each day. Our engagement scores have increased by 47% in just three months.",
      author: "Jamie Wong",
      position: "CEO, Startup Innovate Inc."
    },
    howItWorks: [
      "Create your workspace and select from our library of 3D environments designed for different types of engagement.",
      "Customize your virtual spaces with your branding and interactive elements.",
      "Launch engagement activities with pre-built templates or create your own custom experiences."
    ],
    getStarted: {
      heading: "Ready to boost engagement?",
      description: "Book a personalized demo today and see Team Up! in action.",
      cta: "Book a Demo Today"
    }
  };

  return (
    <WebLayout>
      <SolutionByPainPage painData={disengagementData} />
    </WebLayout>
  );
} 
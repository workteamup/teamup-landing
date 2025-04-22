"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByTypePage from "../../../components/new-web/solution-by-type-page";

export default function CustomOfficeSpacePage() {
  const customOfficeData = {
    hero: {
      headline: "Design Your Dream Office—Virtually",
      subheadline: "Team Up! lets you build a custom 3D space that reflects your culture and brand while fostering the connections that drive business success.",
      cta: "Create Your Virtual Headquarters"
    },
    importance: [
      {
        title: "Culture",
        description: "A unique virtual space reinforces your values and identity, creating a sense of belonging even across distributed teams."
      },
      {
        title: "Branding",
        description: "Impress clients and candidates with a branded 3D environment that showcases your company's personality and innovation."
      },
      {
        title: "Engagement",
        description: "A familiar, personalized 3D space boosts daily interaction by providing a consistent 'place' for teams to gather and collaborate."
      }
    ],
    stats: [
      {
        value: "70%",
        description: "of remote workers want a personalized workspace that feels connected to their company culture.",
        source: "Gartner Workplace Survey, 2023"
      },
      {
        value: "20%",
        description: "Companies with strong visual brand presence in their workspaces see 20% higher culture alignment scores from employees."
      },
      {
        value: "33%",
        description: "Organizations with cohesive, well-defined cultures see 33% higher retention and 21% greater profitability."
      }
    ],
    benefits: [
      {
        title: "Full 3D Customization",
        description: "Design virtual rooms, décor, and layouts to match your company style and create a sense of place for distributed teams."
      },
      {
        title: "Branded Elements",
        description: "Add logos, colors, and themed elements to reinforce your identity and create a consistent experience for employees and visitors."
      },
      {
        title: "Interactive Features",
        description: "Include games, whiteboards, and social hubs for daily use that make your virtual space functional as well as beautiful."
      }
    ],
    comparisons: [
      {
        traditional: "Generic virtual office platforms with limited customization",
        advantage: "Fully customizable 3D spaces with interactive elements that feel unique, engaging, and aligned with your specific company culture."
      }
    ],
    useCases: [
      "Create a branded virtual lobby for client meetings and new hire tours that showcases your company values through interactive elements.",
      "Design a virtual break room with games and social areas for casual chats that recreate the spontaneous interactions of physical offices.",
      "Build a custom training room with interactive 3D tools for onboarding sessions that immerse new hires in your culture from day one."
    ],
    spotlight: [
      {
        title: "Custom Décor",
        description: "Choose from hundreds of 3D layouts, furniture options, and environmental themes to create spaces that feel authentic to your brand."
      },
      {
        title: "Branded Integration",
        description: "Seamlessly add your logo, color palette, and brand elements throughout the virtual environment for consistent experience."
      },
      {
        title: "Interactive Objects",
        description: "Include useful tools like whiteboards, game tables, and media displays that make the space functional for daily work."
      }
    ],
    testimonial: {
      quote: "Our custom Team Up! space has become our company's digital headquarters—it feels like home for our globally distributed team. Clients are impressed by the branded experience, and our employees feel a stronger connection to our culture. It's become a competitive advantage in both talent retention and client presentations.",
      author: "Jamie Rodriguez",
      position: "Marketing Director, Future Tech Co."
    },
    futureProof: [
      {
        title: "Dynamic Customization",
        description: "Update your virtual office anytime to reflect new branding, team growth, or cultural shifts without disruption or significant cost."
      },
      {
        title: "Scalable Design",
        description: "Expand your 3D space as your team grows, from small startups to global enterprises, with environments that maintain intimacy at any scale."
      },
      {
        title: "Future-Ready Features",
        description: "Integrate emerging tools like AI meeting assistants or augmented reality compatibility, keeping your virtual office at the cutting edge."
      }
    ],
    getStarted: {
      heading: "Start designing your custom 3D workspace with our easy-to-use tools—no design skills needed.",
      description: "Create a virtual space that truly represents your company.",
      cta: "Book a Custom Space Consultation"
    }
  };

  return (
    <WebLayout>
      <SolutionByTypePage typeData={customOfficeData} />
    </WebLayout>
  );
}

"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByPainPage from "../../../components/new-web/solution-by-pain-page";

export default function RemoteDisconnectionSolutionPage() {
  const disconnectionData = {
    title: "Remote Disconnection",
    hero: {
      headline: "Bridge the Distance, Build Real Connection",
      subheadline: "Combat remote disconnection with Team Up!'s immersive 3D environments that make virtual feel personal.",
      cta: "Connect Your Team Today"
    },
    reasons: [
      {
        description: "Remote workers report feeling 2.5 times more isolated than in-office colleagues, directly impacting their wellbeing and performance.",
        source: "Buffer State of Remote Work, 2023"
      },
      {
        description: "Lack of connection leads to miscommunication, decreased collaboration, and siloed knowledge."
      },
      {
        description: "Disconnected teams struggle with building trust, sharing knowledge, and sustaining innovation over time."
      }
    ],
    stats: [
      {
        value: "70%",
        description: "of remote workers feel disconnected from their team, with 33% reporting it as their biggest challenge.",
        source: "GitLab Remote Work Report, 2023"
      },
      {
        value: "50%",
        description: "Remote teams experience a 50% higher rate of miscommunication and project delays due to lack of spontaneous interaction."
      },
      {
        value: "30%",
        description: "Companies with connected remote teams see 30% higher innovation rates and 25% faster problem-solving."
      }
    ],
    benefits: [
      {
        description: "Create virtual watercoolers in 3D environments like our Campfire space for spontaneous conversations that mimic in-office interactions."
      },
      {
        description: "Host virtual social events in immersive settings that encourage participation and genuine connection beyond work tasks."
      },
      {
        description: "Provide virtual mentorship opportunities in custom spaces that foster growth and knowledge sharing across geographical boundaries."
      }
    ],
    comparisons: [
      {
        traditional: "Standard video conferencing for team meetings with 2D grid views",
        advantage: "Immersive 3D environments with spatial audio that simulate in-person interactions, allowing for natural group dynamics and spontaneous conversations."
      }
    ],
    useCases: [
      "Set up a virtual coffee shop as a permanent Meeting Point where team members can drop in for casual chats throughout the day.",
      "Organize virtual team lunches in our Campfire environment with conversation prompt cards to facilitate meaningful discussions.",
      "Create a virtual book club or hobby group in a custom space to help team members connect over shared interests beyond work."
    ],
    spotlight: [
      {
        title: "Spatial Audio",
        description: "Talk naturally with nearby teammates while moving through 3D spaces, just like in real life."
      },
      {
        title: "Interactive Objects",
        description: "From virtual whiteboards to game tables, our environments include elements that prompt collaboration and conversation."
      }
    ],
    testimonial: {
      quote: "Team Up! has made our global team feel like we're all in the same room. The 3D environments create a sense of place that Zoom never could, and we've seen collaboration increase by 40% between our US and European teams.",
      author: "Alejandro Vega",
      position: "Team Lead, Global Creative Agency"
    },
    howItWorks: [
      "Design your virtual spaces to reflect your team's personality and work style using our intuitive creator tools.",
      "Invite team members to join with a simple link and customize their 3D avatars for instant recognition.",
      "Start interacting in real-time with spatial audio and proximity-based conversations, just like in person."
    ],
    getStarted: {
      heading: "Ready to connect your team?",
      description: "Start your free trial today and experience the difference in just one week.",
      cta: "Start Your Free Trial"
    }
  };

  return (
    <WebLayout>
      <SolutionByPainPage painData={disconnectionData} />
    </WebLayout>
  );
} 
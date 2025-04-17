"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByRolePage from "../../../components/new-web/solution-by-role-page";

export default function HRSolutionPage() {
  // Data extracted from solutions-by-role.md for HR
  const hrData = {
    title: "HR Professionals",
    hero: {
      headline: "Build a Thriving Remote Culture That Attracts and Retains Talent",
      subheadline: "Team Up! helps HR teams create engaging employee experiences that strengthen culture and boost retention in distributed workforces.",
      cta: "See HR Solutions in Action"
    },
    benefits: [
      {
        title: "Stronger Culture",
        description: "Build and maintain a vibrant company culture that transcends physical boundaries and connects remote employees."
      },
      {
        title: "Higher Retention",
        description: "Reduce turnover by creating meaningful connections and engagement opportunities that make employees feel valued."
      },
      {
        title: "Better Onboarding",
        description: "Welcome new hires with immersive experiences that accelerate integration and build relationships from day one."
      },
      {
        title: "Team Cohesion",
        description: "Foster stronger bonds between team members through regular interactive activities and shared virtual experiences."
      }
    ],
    stats: [
      {
        value: "76%",
        description: "of HR leaders say maintaining company culture is their biggest challenge in remote work environments.",
        source: "HR Executive Survey, 2023"
      },
      {
        value: "41%",
        description: "higher retention rates in companies with strong virtual team-building programs for remote employees."
      },
      {
        value: "68%",
        description: "of employees say feeling connected to colleagues is a top factor in their decision to stay with a company."
      }
    ],
    features: [
      {
        title: "Event Planning Tools",
        description: "Easily organize and manage virtual team-building events, celebrations, and company gatherings with intuitive planning tools."
      },
      {
        title: "Engagement Analytics",
        description: "Track participation, interaction patterns, and feedback to measure the effectiveness of your culture initiatives."
      },
      {
        title: "Customizable Spaces",
        description: "Create branded virtual environments that reflect your company values and provide context for different types of interactions."
      }
    ],
    spotlight: [
      {
        title: "Virtual Onboarding Hub",
        description: "Welcome new employees with an immersive onboarding experience in a dedicated space. Include interactive company history, values exploration, and opportunities to meet team members in a structured environment."
      },
      {
        title: "Culture Connection Center",
        description: "Maintain company traditions and celebrations in a virtual space designed for social connection. Host regular events from casual coffee chats to milestone celebrations that strengthen relationships."
      },
      {
        title: "Wellness & Development Zone",
        description: "Support employee wellbeing and growth with dedicated spaces for mindfulness sessions, learning workshops, and skill development activities that show investment in your team."
      }
    ],
    testimonial: {
      quote: "As an HR Director managing a global team, Team Up! has been transformative for our culture. Our onboarding completion rates increased by 32%, and our quarterly engagement scores have shown consistent improvement since implementation.",
      author: "Elena Rodriguez",
      position: "HR Director, Global Tech Solutions"
    },
    comparisons: [
      {
        traditional: "Video Conference Onboarding",
        advantage: "Create interactive, self-guided onboarding experiences in 3D spaces that new hires can explore at their own pace while still connecting with team members."
      },
      {
        traditional: "Annual Team Building Retreats",
        advantage: "Host regular, cost-effective virtual team building activities that maintain connection year-round rather than relying on infrequent in-person events."
      },
      {
        traditional: "Static Employee Handbooks",
        advantage: "Transform company policies and values into interactive experiences in virtual spaces that employees actually engage with and remember."
      }
    ],
    useCases: [
      "Design a comprehensive new hire onboarding journey with interactive stations for company history, team introductions, and role training.",
      "Host a virtual company anniversary celebration with interactive timeline exhibits, recognition ceremonies, and social activities.",
      "Create a recurring virtual wellness program with dedicated spaces for meditation, fitness challenges, and mental health resources."
    ],
    howItWorks: [
      "Work with our team to design custom spaces aligned with your company culture and HR objectives.",
      "Set up your event calendar and engagement activities with support from our customer success team.",
      "Launch your HR initiatives and track engagement metrics to continuously improve your virtual employee experience."
    ],
    getStarted: {
      heading: "Ready to transform your employee experience?",
      description: "Join HR leaders who are building stronger remote cultures with Team Up!",
      cta: "Book an HR-Focused Demo"
    }
  };

  return (
    <WebLayout>
      <SolutionByRolePage roleData={hrData} />
    </WebLayout>
  );
}

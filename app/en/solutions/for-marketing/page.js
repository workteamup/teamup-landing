"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByRolePage from "../../../components/new-web/solution-by-role-page";

export default function MarketingSolutionPage() {
  // Data extracted from solutions-by-role.md for Marketing
  const marketingData = {
    title: "Marketing Teams",
    hero: {
      headline: "Create Authentic Brand Experiences in Virtual Spaces",
      subheadline: "Team Up! helps marketing teams collaborate, create, and showcase brand experiences in immersive 3D environments.",
      cta: "Launch Your Branded Space"
    },
    benefits: [
      {
        title: "Brand Immersion",
        description: "Create virtual spaces that embody your brand identity and values for more authentic internal and external engagement."
      },
      {
        title: "Creative Collaboration",
        description: "Enable marketing teams to ideate and create together in real-time, regardless of physical location."
      },
      {
        title: "Experiential Marketing",
        description: "Transform traditional marketing assets into interactive experiences that resonate with both team members and audiences."
      }
    ],
    stats: [
      {
        value: "68%",
        description: "of marketing teams struggle to maintain brand consistency across distributed workforces.",
        source: "Marketing Week, 2023"
      },
      {
        value: "73%",
        description: "of marketers report that virtual collaboration tools fail to support creative processes effectively.",
        source: "Creative Management Report, 2023"
      },
      {
        value: "4.2x",
        description: "higher engagement rates for interactive brand experiences compared to traditional content formats."
      }
    ],
    features: [
      {
        title: "Branded Environments",
        description: "Create custom 3D spaces that reflect your brand's visual identity, values, and personality."
      },
      {
        title: "Collaborative Tools",
        description: "Access specialized tools for creative brainstorming, content review, and campaign planning."
      },
      {
        title: "Experience Showcase",
        description: "Host virtual events and product launches in immersive spaces that bring your brand to life."
      }
    ],
    spotlight: [
      {
        title: "Brand Immersion Hub",
        description: "Create a central virtual space where team members can experience your brand guidelines, values, and voice in an interactive format. New team members can explore brand elements in 3D rather than reading static documents."
      },
      {
        title: "Campaign War Room",
        description: "Collaborate on marketing campaigns in a dedicated space with visual boards, content review areas, and real-time feedback tools. Keep all campaign assets and discussions in one immersive environment."
      },
      {
        title: "Virtual Product Showcase",
        description: "Present products and services in interactive 3D environments that allow team members to understand features and benefits through experience rather than description."
      }
    ],
    testimonial: {
      quote: "Team Up! transformed how our global marketing team collaborates. Instead of static brand guidelines, we now have an immersive brand space where team members truly experience our values and voice. Our campaign alignment improved dramatically.",
      author: "Sarah Chen",
      position: "CMO, Innovate Brands"
    },
    comparisons: [
      {
        traditional: "Brand Guidelines Documents",
        advantage: "Bring your brand to life with immersive, interactive 3D environments that employees can experience, not just read about."
      },
      {
        traditional: "Social Media Management Tools",
        advantage: "Create authentic, shareable moments from virtual 3D events that generate organic engagement rather than scheduled corporate content."
      },
      {
        traditional: "In-Person Brand Workshops",
        advantage: "Host scalable, virtual brand immersion sessions in customized 3D spaces accessible to all team members regardless of location."
      }
    ],
    useCases: [
      "Create a virtual brand immersion experience in a custom 3D environment for new hires to align them with your vision through interactive elements.",
      "Host a virtual product launch event in our Auditorium to energize and align the marketing team with immersive demonstrations.",
      "Facilitate a collaborative campaign planning session in a branded virtual space with interactive whiteboards and voting platforms."
    ],
    howItWorks: [
      "Work with our design team to create custom 3D environments that showcase your brand identity.",
      "Configure your marketing hub with relevant templates for different types of brand activities.",
      "Launch your branded spaces and start creating shareable experiences for internal and external audiences."
    ],
    getStarted: {
      heading: "Ready to bring your brand to life in virtual spaces?",
      description: "Launch your branded 3D space in minutes and start creating authentic brand experiences that resonate.",
      cta: "Book a Marketing-Focused Demo"
    }
  };

  return (
    <WebLayout>
      <SolutionByRolePage roleData={marketingData} />
    </WebLayout>
  );
} 
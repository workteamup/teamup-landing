"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByRolePage from "../../../components/new-web/solution-by-role-page";

export default function CxoSolutionPage() {
  // Data extracted from solutions-by-role.md for CXOs
  const cxoData = {
    title: "CXOs",
    hero: {
      headline: "Drive Business Success with a Connected Workforce",
      subheadline: "Team Up! boosts productivity, reduces costs, and strengthens retention—all with measurable ROI.",
      cta: "Calculate Your ROI Potential"
    },
    benefits: [
      {
        title: "Cost Savings",
        description: "Replace expensive in-person events with scalable virtual team-building, saving up to 30% on engagement costs while increasing frequency of connection."
      },
      {
        title: "Productivity Gains",
        description: "Increase team output by 20% with 3D environments that enhance collaboration, communication, and cross-team innovation."
      },
      {
        title: "Retention Boost",
        description: "Reduce turnover and recruiting expenses by fostering a loyal, engaged workforce with regular interactive experiences."
      }
    ],
    stats: [
      {
        value: "47%",
        description: "of executives report that misalignment across departments is their biggest challenge in distributed teams.",
        source: "Harvard Business Review, 2023"
      },
      {
        value: "$15,000",
        description: "Companies lose an average of $15,000 per employee annually due to ineffective virtual meetings and collaboration."
      },
      {
        value: "32%",
        description: "Only 32% of leadership teams feel they have adequate visibility into employee engagement across remote and hybrid teams."
      }
    ],
    features: [
      {
        title: "Analytics Dashboard",
        description: "Track engagement metrics, participation rates, and correlation with productivity and retention to measure impact and optimize investment."
      },
      {
        title: "Scalable Events",
        description: "Host company-wide gatherings in immersive 3D spaces without logistical overhead or travel expenses."
      },
      {
        title: "Custom Integration",
        description: "Seamlessly connect with your existing tools for fast adoption and minimal disruption to workflows."
      }
    ],
    spotlight: [
      {
        title: "Executive Dashboard",
        description: "Real-time analytics on team engagement, collaboration patterns, and productivity metrics—all in one accessible view. Measure the ROI of your team-building investments through quantitative data."
      },
      {
        title: "Strategy Visualization Tools",
        description: "Transform abstract strategies into interactive visual models in our dedicated Planning room, where leadership teams can collaboratively refine and align on core business initiatives."
      },
      {
        title: "Leadership Presence",
        description: "Maintain authentic leadership presence in a distributed environment with immersive town halls and 3D office hours that feel personal and impactful, not just another video call."
      }
    ],
    testimonial: {
      quote: "Team Up!'s 3D environments delivered a 15% productivity boost and a 25% drop in turnover in just six months. The ROI has been exceptional—our engagement costs dropped while our results improved dramatically.",
      author: "Wei Zhang",
      position: "CEO, TechInnovate Co."
    },
    comparisons: [
      {
        traditional: "Annual Leadership Retreats",
        advantage: "Host frequent, scalable virtual summits without the high costs or logistical challenges of travel. Connect leaders weekly instead of yearly for better alignment."
      },
      {
        traditional: "Executive Coaching Programs",
        advantage: "Deliver ongoing leadership development through interactive, real-time experiences in 3D environments at a fraction of traditional coaching costs."
      },
      {
        traditional: "Enterprise Social Networks",
        advantage: "Replace static communication with immersive, engaging environments that provide real-time analytics for better decision-making and visible engagement."
      }
    ],
    useCases: [
      "Host a virtual leadership summit in our Auditorium environment to align executives across regions with interactive voting and breakout discussions.",
      "Conduct a company-wide town hall with interactive Q&A in a customized branded space to enhance transparency and connection.",
      "Facilitate a strategic planning session with key stakeholders in a virtual boardroom with collaborative visualization tools."
    ],
    howItWorks: [
      "Sign up for Executive access with priority support and custom implementation.",
      "Our team configures your branded environments and analytics dashboard.",
      "Launch with guided implementation and start seeing measurable results within 30 days."
    ],
    getStarted: {
      heading: "Implement Team Up! in days and see results in weeks",
      description: "No IT overhaul required—just transformative connection.",
      cta: "Calculate Your Potential Savings Now"
    }
  };

  return (
    <WebLayout>
      <SolutionByRolePage roleData={cxoData} />
    </WebLayout>
  );
}

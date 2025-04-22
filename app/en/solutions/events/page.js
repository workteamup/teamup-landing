"use client";

import WebLayout from "../../../components/new-web/layout";
import SolutionByTypePage from "../../../components/new-web/solution-by-type-page";

export default function EventsPage() {
  const eventsData = {
    hero: {
      headline: "Host Events That Bring Everyone Together",
      subheadline: "Team Up! makes large gatherings engaging, scalable, and effortless with immersive 3D environments that feel like shared experiences.",
      cta: "Revolutionize Your Virtual Events"
    },
    importance: [
      {
        title: "Connection",
        description: "Large events unite teams and reinforce culture—make them memorable with immersive 3D spaces that create shared experiences."
      },
      {
        title: "Engagement",
        description: "Keep attendees active, not passive, with interactive 3D features that encourage participation and prevent digital disengagement."
      },
      {
        title: "Scalability",
        description: "Host hundreds without the cost or logistical hassle of physical venues while maintaining the feeling of a significant shared experience."
      }
    ],
    // ... rest of the data remains the same
  };

  return (
    <WebLayout>
      <SolutionByTypePage typeData={eventsData} />
    </WebLayout>
  );
} 
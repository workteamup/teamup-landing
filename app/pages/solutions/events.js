import React from 'react';
import SolutionByTypePage from '../../components/new-web/solution-by-type-page';

const EventsPage = () => {
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
    stats: [
      {
        value: "$1,000+",
        description: "per attendee cost for physical events, with 40% of budget spent on venue and travel",
        source: "Event Marketing Institute, 2023"
      },
      {
        value: "80%",
        description: "of webinar attendees disengage within 10 minutes when passive viewing is the only participation method"
      },
      {
        value: "30%",
        description: "higher retention rates and 25% better cross-team collaboration in companies with regular team events"
      }
    ],
    benefits: [
      {
        title: "Diverse Environments",
        description: "Choose from our Auditorium, Campfire, or custom spaces to create the perfect atmosphere for your specific event."
      },
      {
        title: "Breakout Rooms",
        description: "Create small groups for networking or discussions in connected 3D spaces that maintain the event's cohesive feel."
      },
      {
        title: "Event Templates",
        description: "Launch town halls, conferences, or social gatherings with pre-designed 3D environments requiring minimal setup."
      },
      {
        title: "Comprehensive Analytics",
        description: "Track participation, engagement patterns, and feedback in real-time to optimize your event as it happens."
      }
    ],
    comparisons: [
      {
        traditional: "Webinar platforms for large meetings",
        advantage: "Interactive 3D environments with spatial audio that foster genuine connection and active participation, not just passive viewing of presenters."
      }
    ],
    useCases: [
      "Host a company all-hands in our Auditorium with breakout sessions in themed 3D spaces for Q&A and small group discussions.",
      "Organize a virtual conference with keynote stages, interactive exhibition areas, and networking lounges in a custom 3D campus environment.",
      "Run a holiday party with themed 3D spaces featuring games like Floor is Lava and Connect 4 for cross-team bonding and shared experiences."
    ],
    spotlight: [
      {
        title: "Auditorium Environment",
        description: "Professional setting with interactive voting platforms for audience participation and engagement tracking."
      },
      {
        title: "Mixer Tool",
        description: "Randomly assign attendees to breakout rooms to foster new connections and cross-team networking."
      },
      {
        title: "Event Dashboard",
        description: "Monitor engagement in real-time and adjust activities based on participation analytics."
      }
    ],
    testimonial: {
      quote: "Team Up! made our 500-person global all-hands feel intimate and interactive. The 3D auditorium with breakout spaces created genuine connections across our international teams that we never achieved with traditional webinars. Participation increased by 85%.",
      author: "Aisha Kazmi",
      position: "HR Director, Global Innovations Inc."
    },
    futureProof: [
      {
        title: "Scalable Growth",
        description: "Team Up!'s event tools scale seamlessly from 10 to 10,000 attendees, ensuring your company can host impactful gatherings as it grows."
      },
      {
        title: "Hybrid Ready",
        description: "Blend in-person and virtual attendees in one cohesive 3D environment, adapting to evolving hybrid work models without leaving anyone out."
      },
      {
        title: "Continuous Innovation",
        description: "Access new event features and integrations regularly, keeping your large-scale interactions cutting-edge and engaging for even the most tech-savvy participants."
      }
    ],
    getStarted: {
      heading: "Ready to Transform Your Events?",
      description: "Plan your first immersive event in minutes with our guided tools and templates.",
      cta: "Book an Event Experience Demo"
    }
  };

  return <SolutionByTypePage typeData={eventsData} />;
};

export default EventsPage; 
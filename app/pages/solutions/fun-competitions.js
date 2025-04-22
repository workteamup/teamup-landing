import React from "react";
import SolutionByTypePage from "../../components/new-web/solution-by-type-page";

const FunCompetitionsPage = () => {
  const funCompetitionsData = {
    hero: {
      headline: "Turn Team-Building into Playtime",
      subheadline:
        "Team Up! offers fun, competitive games in immersive 3D environments that strengthen bonds and spark joy while building essential team skills.",
      cta: "Start the Fun Now",
    },
    importance: [
      {
        title: "Morale",
        description:
          "Fun activities reduce burnout and boost happiness by creating positive associations with teammates and work.",
      },
      {
        title: "Teamwork",
        description:
          "Games encourage collaboration in a relaxed 3D setting, building soft skills that transfer directly to work projects.",
      },
      {
        title: "Engagement",
        description:
          "Friendly competition in immersive environments keeps teams motivated and connected across locations and time zones.",
      },
    ],
    stats: [
      {
        value: "60%",
        description:
          "of employees feel disconnected without regular team-building, with remote workers reporting even higher isolation.",
        source: "Harvard Business Review, 2023",
      },
      {
        value: "30%",
        description:
          "higher morale and 25% better problem-solving capabilities in teams that participate in regular fun activities together.",
      },
      {
        value: "87%",
        description:
          "less likely to leave their companies when employees feel engaged, with team bonding activities cited as a top engagement factor.",
      },
    ],
    benefits: [
      {
        title: "Immersive Game Library",
        description:
          "Choose from 3D environments like Floor is Lava, Connect 4, The Corral, and more that transform passive team-building into active, memorable experiences.",
      },
      {
        title: "One-Click Setup",
        description:
          "Launch competitive games with minimal preparation—our 3D environments come pre-configured for immediate fun.",
      },
      {
        title: "Flexible Formats",
        description:
          "Support both individual and group challenges in 3D spaces that adapt to your team size and specific objectives.",
      },
    ],
    comparisons: [
      {
        traditional: "Occasional in-person team-building events",
        advantage:
          "Frequent, low-cost virtual games in immersive 3D environments that fit any schedule and create ongoing connection, not just one-off experiences.",
      },
    ],
    useCases: [
      "Host a virtual trivia night in our Auditorium to test team knowledge and spark friendly competition and laughs.",
      "Run a relay race in our Floor is Lava environment where teams compete to complete challenges while navigating obstacles.",
      "Organize team competitions in our Connect 4 space where players must score in basketball hoops to place their pieces, combining physical skill with strategy.",
    ],
    spotlight: [
      {
        title: "Floor is Lava",
        description:
          "A challenging obstacle course where teammates can cheer each other on and laugh together as they navigate difficulties.",
      },
      {
        title: "The Corral",
        description:
          "Team-based competition where groups must collect eggs while defending their resources, building both strategy and communication skills.",
      },
      {
        title: "Connect 4 with a Twist",
        description:
          "Classic game reimagined in 3D with added physical challenges that level the playing field and add unpredictability.",
      },
    ],
    testimonial: {
      quote:
        "Our team absolutely loves the games in Team Up!—the Floor is Lava competitions have become the highlight of our week! We've seen improved communication during projects and a 38% increase in cross-department collaboration since we started these regular game sessions.",
      author: "Casey Williams",
      position: "Employee Experience Lead, Creative Solutions Agency",
    },
    futureProof: [
      {
        title: "Evolving Game Library",
        description:
          "Team Up! continuously adds new games and challenges based on the latest in game design and team psychology, ensuring your team always has fresh ways to bond.",
      },
      {
        title: "Flexible Formats",
        description:
          "Support remote, hybrid, or in-person teams with games that work across any setup, adapting to future work trends without losing effectiveness.",
      },
      {
        title: "Cultural Resilience",
        description:
          "Foster a fun, collaborative culture that retains talent and boosts morale through workplace transitions, economic changes, and team evolution.",
      },
    ],
    getStarted: {
      heading: "Ready to Add Some Fun to Your Team?",
      description:
        "Pick a game and start playing in minutes—no special equipment or technical knowledge required.",
      cta: "Get Playing with a Free Trial",
    },
  };

  return <SolutionByTypePage typeData={funCompetitionsData} />;
};

export default FunCompetitionsPage;

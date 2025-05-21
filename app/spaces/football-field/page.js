"use client";

import Hero from "../../new-components/hero";
import Section from "../../new-components/section";
import Testimonial from "../../new-components/testimonial";
import CheckmarkItem from "../../new-components/checkmark-item";
import Steps from "../../new-components/steps";
import InfoElement from "../../new-components/info-element";
import InfoPiece from "../../new-components/info-piece";
import Image from "next/image";
import ClosingCTA from "../../new-components/closing-cta";
import { ArrowRight } from "lucide-react";

export default function FootballFieldPage() {
  return (
    <div>
      <Hero
        preTitle="The football field"
        preTitleClassName="text-blue-500"
        title="Score goals, build goals, achieve goals"
        titleClassName="max-w-[1200px] text-blue-900"
        subtitle="Short matches, lasting connections, worldwide language of play."
        subtitleClassName="max-w-[720px] text-blue-700"
        buttons={[
          {
            variant: "primary",
            size: "xl",
            children: "Create a meeting room in the Football field",
            onClick: () =>
              window.open("https://app.teamup.works/demo/field", "_blank"),
          },
          /*{ variant: "tertiary", size: "md", children: "Learn More" },*/
        ]}
        image="/images/football-field-hero.webp"
        bgClassName="bg-blue-50"
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="The 5-minute football breaks have become our team's energy reset button. After just one quick match, our afternoon meetings are noticeably more focused and creative."
        person={{
          image: "/images/campfire.jpg",
          name: "Pablo Yusta",
          jobTitle: "Chief Executive Officer, AiKit",
        }}
        show={false}
        /*containerClassName="bg-purple-50"
        quoteClassName="text-purple-900"
        personNameClassName="text-purple-900"
        personJobTitleClassName="text-purple-700"*/
      />
      <Section
        preTitle="Features"
        title="Everything you need to connect your teams"
        titleClassName="max-w-[960px] mx-auto"
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-16 max-w-[960px] mx-auto">
          <CheckmarkItem text="Free play like in the schoolyard" />
          <CheckmarkItem text="5-minute matches for quick breaks or icebreakers" />
          <CheckmarkItem text="Run with the ball or kick it around" />
          <CheckmarkItem text="No player limit, let the chaos begin" />
        </div>
      </Section>
      <Section
        preTitle="How to use"
        title="Get the best out of the Football field"
        bgClassName="bg-white"
        containerClassName="py-24 max-w-[1440px] mx-auto"
        buttons={[
          {
            variant: "primary",
            children: "Request access",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
          {
            variant: "secondary",
            children: "Create your first Football game",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo/field", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <Steps
          steps={[
            {
              title: "Move everyone to the football field",
              description:
                "Start a break during a meeting and move everyone to the football field.",
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/create-room-footballfield.webm",
            },
            {
              title: "Step into the field and organize the teams",
              description:
                "Get everyone to step into the field and get on one side to select their team.",
              image: "/images/football-field-organize-teams.webp",
            },
            {
              title: "Start the game",
              description:
                "Interact with the ball so that the five minute timer begin. Score as many goals as possible before the timer runs out.",
              image: "/images/football-field-start-game.webp",
            },
            {
              title: "Go again?",
              description:
                "Once the game is over, you'll face a difficult decision: go back to work or your meeting or play one more game?",
              image: "/images/football-field-go-again.webp",
            },
          ]}
        />
      </Section>
      <Section
        preTitle="Benefits"
        title="What the Football field gives you"
        titleClassName="max-w-[1200px]"
        bgClassName="bg-white"
        containerClassName="py-32 max-w-[1600px] mx-auto"
        buttons={[
          {
            variant: "primary",
            children: "Request access",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
          {
            variant: "secondary",
            children: "Create your first meeting",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo/field", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <InfoElement
            title="Mental refresh"
            description="Engage different cognitive pathways through simulated gameplay, returning to work with improved focus and problem-solving capability."
          />
          <InfoElement
            title="Natural team bonding"
            description="Form connections through play that translate to improved workplace collaboration, with 72% of users reporting better team communication after regular sessions."
          />
          <InfoElement
            title="Mood elevation"
            description="Combat the afternoon energy slump with brief endorphin-generating activities that improve overall workplace satisfaction and reduce stress levels."
          />
        </div>
      </Section>
      <Section
        preTitle="Use cases"
        title="Perfect for these occasions"
        titleClassName="max-w-[1200px]"
        bgClassName=""
        containerClassName="py-32 md:px-8 lg:px-12"
        className="mt-16 px-0 overflow-hidden max-w-[1600px] mx-auto"
        buttons={[
          {
            variant: "primary",
            children: "Request access",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
          {
            variant: "secondary",
            children: "Create your first meeting",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo/field", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <InfoPiece
          title="Meeting breaks"
          image={"/images/meeting-break-2.webp"}
          reverse={true}
          description="Schedule 5-minute football matches between segments of longer meetings to combat digital fatigue and reinvigorate the team with a shared activity that creates energy and laughter."
          cta={{
            variant: "text",
            children: "Start having breaks in the Football field",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Daily rituals"
          image={"/images/meeting-break.webp"}
          description="Establish a quick football match as part of your team's daily routine—perhaps before lunch or at day's end—creating a consistent touchpoint that team members look forward to and that strengthens team identity."
          cta={{
            variant: "text",
            children: "Start having a daily ritual",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Pre-brainstorming warmup"
          image={"/images/pre-brainstorming-ritual.webp"}
          description="Prime your team's creative thinking by activating different cognitive patterns through gameplay before transitioning into ideation sessions, resulting in more diverse and innovative ideas."
          reverse={true}
          cta={{
            variant: "text",
            children: "Start having a remote happy hour",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Cross-department tournaments"
          image={"/images/department-battles.webp"}
          description="Organize recurring mini-tournaments between different teams or departments, fostering connections across organizational boundaries through light-hearted competition that reveals personalities beyond work roles."
          cta={{
            variant: "text",
            children: "Start having a remote happy hour",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Remote happy hours"
          image={"/images/happy-hours.webp"}
          description="Transform passive virtual gatherings into interactive experiences by adding structured football matches that give team members something specific to do together rather than just talk."
          reverse={true}
          cta={{
            variant: "text",
            children: "Start having a remote happy hour",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
      </Section>
      <Section
        title="Future proof your team"
        titleClassName="max-w-[960px] font-medium"
        subtitle="Team Up! evolves with your team, ensuring you're always prepared for the future of work with regular updates and new interactive spaces that respond to changing workplace needs."
        subtitleClassName="text-dark-space max-w-[960px]"
        className="overflow-hidden max-w-[1600px] mx-auto"
      />
      <ClosingCTA
        text="Start creating a company culture that works"
        buttonText="Request access"
      />
    </div>
  );
}

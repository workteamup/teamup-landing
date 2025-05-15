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

export default function TheFarmyardPage() {
  return (
    <div>
      <Hero
        preTitle="The farmyard"
        preTitleClassName="text-yellow-500"
        title="Steal, defend, laugh. Let the egg wars begin!"
        titleClassName="max-w-[1200px] text-yellow-900"
        subtitle="Create memorable team moments through competitive chaos."
        subtitleClassName="max-w-[960px] text-yellow-700"
        buttons={[
          {
            variant: "primary",
            size: "xl",
            children: "Create a meeting room in The Farmyard",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          },
          /*{ variant: "tertiary", size: "md", children: "Learn More" },*/
        ]}
        image="/images/farmyard-hero.webp"
        bgClassName="bg-yellow-50"
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="The Farmyard reveals how we work together. Quiet engineers emerge as strategic masterminds and communication patterns improve."
        person={{
          image: "/images/campfire.jpg",
          name: "Pablo Yusta",
          jobTitle: "Chief Executive Officer, AiKit",
        }}
        /*containerClassName="bg-purple-50"
        quoteClassName="text-purple-900"
        personNameClassName="text-purple-900"
        personJobTitleClassName="text-purple-700"*/
      />
      <Section
        preTitle="Features"
        title="Everything you need to connect your teams"
        titleClassName="max-w-[960px] mx-auto"
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-16 max-w-[960px] mx-auto">
          <CheckmarkItem text="Run and collect as many eggs as possible" />
          <CheckmarkItem text="Steal eggs from the other team's baskets" />
          <CheckmarkItem text="Organize in three different teams" />
          <CheckmarkItem text="Quick games of a minute and a half" />
          <CheckmarkItem text="Tackle players to make them drop eggs" />
        </div>
      </Section>
      <Section
        preTitle="How to use"
        title="Get the best out of The Farmyard"
        bgClassName="bg-white"
        containerClassName="max-w-[1440px] mx-auto"
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
              window.open("https://app.teamup.works/demo", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <Steps
          steps={[
            {
              title: "Create a meeting room in The Farmyard",
              description:
                "Create a meeting room in The Farmyard and invite everyone in your team to join.",
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/create-room-farmyard.webm",
            },
            {
              title: "Form the three different teams",
              description:
                "Divide the participants in three different teams and make sure everyone is ready to start the game.",
              image: "/images/farmyard-form-teams.webp",
            },
            {
              title: "Start having fun",
              description:
                "Run towards the center of the map to collect as many eggs as possible. Organize your team to tackle enemies and steal eggs from them.",
              image: "/images/farmyard-have-fun.webp",
            },
            {
              title: "Run cross department battles",
              description:
                "Use The Farmyard to run company-wide competitions between departments or force people from different departments to work together.",
            },
          ]}
        />
      </Section>
      <Section
        preTitle="Benefits"
        title="What The Farmyard gives you"
        titleClassName="max-w-[1200px]"
        bgClassName="bg-white"
        containerClassName="max-w-[1600px] mx-auto"
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
            children: "Create your first Farmyard game",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoElement
            imageSrc="/images/campfire.jpg"
            title="Strategic thinking development"
            description="Strengthen decision-making as teams evaluate resource allocation, risk assessment, and opportunity costs under time pressure."
          />
          <InfoElement
            imageSrc="/images/farm.jpg"
            title="Natural role discovery"
            description="Identify team members' natural strengths in tactical execution, strategic thinking, coordination, and motivation."
          />
          <InfoElement
            imageSrc="/images/auditorium.jpg"
            title="Communication pattern insights"
            description="Gain valuable insights into information sharing, decision clarity, and feedback loops that transfer directly to work."
          />
        </div>
      </Section>
      <Section
        preTitle="Use cases"
        title="Perfect for these occasions"
        titleClassName="max-w-[1200px]"
        bgClassName=""
        className="overflow-hidden max-w-[1600px] mx-auto"
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
            children: "Create your first Farmyard game",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <InfoPiece
          title="Department competitions"
          image={"/images/department-battles.webp"}
          reverse={true}
          description="Quarterly competitions where teams develop and adapt strategies in real-time."
          cta={{
            variant: "text",
            children: "Create a company-wide competition",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Leadership assessment"
          image={"/images/leadership.webp"}
          description="Observe leadership behaviors and team dynamics in an engaging context."
          cta={{
            variant: "text",
            children: "Create a leadership assessment",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Onboarding acceleration"
          image={"/images/team-building-challenge.webp"}
          description="Integrate new team members faster by revealing strengths and communication patterns."
          reverse={true}
          cta={{
            variant: "text",
            children: "Start onboarding in The Farmyard",
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

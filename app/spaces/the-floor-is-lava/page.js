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

export default function TheFloorIsLavaPage() {
  return (
    <div>
      <Hero
        preTitle="The floor is lava"
        preTitleClassName="text-red-500"
        title="Fall, laugh, try again. Together"
        titleClassName="max-w-[1200px] text-red-900"
        subtitle="Every slip becomes a joke, every crossing a shared triumph."
        subtitleClassName="max-w-[720px] text-red-700"
        buttons={[
          {
            variant: "primary",
            size: "xl",
            children: "Create a meeting in The floor is lava",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          },
          /*{ variant: "tertiary", size: "md", children: "Learn More" },*/
        ]}
        image="/images/floor-is-lava-hero.webp"
        bgClassName="bg-red-50"
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="Watching our normally serious CTO slip and dramatically fall into the lava create a moment of shared laughter that broke down hierarchies. These small moments build a culture no amount of formal team building can match."
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-[960px] mx-auto">
          <CheckmarkItem text="Different paths to choose from" />
          <CheckmarkItem text="Different sets of obstacles to avoid" />
          <CheckmarkItem text="Achievements for the winners" />
          <CheckmarkItem text="Plenty of opportunities to laugh at your colleagues" />
        </div>
      </Section>
      <Section
        preTitle="How to use"
        title="Get the best out of the Floor is lava"
        bgClassName="bg-white"
        containerClassName="max-w-[1440px] mx-auto"
        buttons={[
          {
            variant: "primary",
            children: "Request access",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
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
              title: "Create a meeting and invite your team",
              description:
                "Create a meeting room in the Floor is lava and invite everyone in your team to join.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Choose a path and get everyone ready",
              description:
                "Choose which path you want to take and get everyone ready for the challenge.",
              image: "/images/floorislava-choose-path.webp",
            },
            {
              title: "Start trying, falling, laughing and trying again",
              description:
                "Start the challenge and see who can avoid the obstacles and who falls the most.",
              image: "/images/floorislava-fail.webp",
            },
            {
              title: "Get the coin",
              description:
                "There's a coin at the end of the path. The first to get there will be the champion of the session.",
              image: "/images/floorislava-coin.webp",
            },
          ]}
        />
      </Section>
      <Section
        preTitle="Benefits"
        title="What the Floor is lava gives you"
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
            children: "Create your first Floor is lava session",
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
            title="Loads of laughs"
            description="There's nothing funnier than seeing your colleagues get hit and fall down over and over again."
          />
          <InfoElement
            imageSrc="/images/farm.jpg"
            title="Collaboration"
            description="Plenty of chances for teammates to work together and support each other to try and get better."
          />
          <InfoElement
            imageSrc="/images/auditorium.jpg"
            title="Leadership"
            description="See who takes proactive leadership role to teach everyone how to avoid the obstacles."
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
            children: "Create your first meeting",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <InfoPiece
          title="Fun coffee breaks"
          image={"/images/coffee-break.webp"}
          reverse={true}
          description="Take a break from the daily routine and talk about life outside of work while having a good laugh."
          cta={{
            variant: "text",
            children: "Create your first coffee break",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          }}
        />
        <InfoPiece
          title="Team challenges"
          image={"/images/team-building-challenge.webp"}
          description="Get the different teams of your company to complete the tracks in the fasters time."
          cta={{
            variant: "text",
            children: "Create your first team challenge",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          }}
        />
        <InfoPiece
          title="Fun competitions"
          image={"/images/team-building-race.webp"}
          description="Run company-wide individual races to see who's the fastest. The winner gets a reward."
          reverse={true}
          cta={{
            variant: "text",
            children: "Create your first fun competition",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
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

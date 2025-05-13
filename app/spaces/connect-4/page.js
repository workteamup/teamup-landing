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

export default function Connect4Page() {
  return (
    <div>
      <Hero
        preTitle="Connect 4"
        preTitleClassName="text-green-500"
        title="Basketball meets connect 4"
        titleClassName="max-w-[1200px] text-green-900"
        subtitle="Shoot baskets to drop game pieces in this physical twist on a classic"
        subtitleClassName="max-w-[960px] text-green-700"
        buttons={[
          {
            variant: "primary",
            size: "xl",
            children: "Create a meeting in the the Connect 4 space",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
          /*{ variant: "tertiary", size: "md", children: "Learn More" },*/
        ]}
        image="/images/connect4-hero.webp"
        bgClassName="bg-green-50"
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="Connect 4 tournaments reveal who thinks ahead, performs under pressure, and supports teammates after missed shots."
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
          <CheckmarkItem text="Four grids to have multiple games at once" />
          <CheckmarkItem text="Chaos mode or organized play" />
          <CheckmarkItem text="Individual play or couples play" />
          <CheckmarkItem text="Not just strategy, but also ability" />
        </div>
      </Section>
      <Section
        preTitle="How to use"
        title="Get the best out of the Auditorium"
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
            children: "Create your first Connect 4 game",
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
              title: "Create a meeting in the Connect 4 space",
              description:
                "Create a meeting in the Connect 4 space, invite your team to join and let the fun begin.",
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/create-room-connect4.webm",
            },
            {
              title: "Join and organize in pairs or groups of four",
              description:
                "Once everyone is in, organize yourself in pairs for individual play or in groups of four for couples play.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Decide the rules of the game",
              description:
                "Decide if you want to play in chaos mode or organized play. Chaos means everyone can shoot at any time, while organized play means you have to shoot in your turn.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Start having fun",
              description:
                "Start going head to head with your opponents and see which team can get four in a row first.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Switch grids to play with different people",
              description:
                "Once you've finished a game, switch to another grid to play with different people.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Start organizing your own tournaments",
              description:
                "Step up your game and start organizing your own tournaments. You can use your own rules and create cross-department battles.",
              image: "/images/campfire.jpg",
            },
          ]}
        />
      </Section>
      <Section
        preTitle="Benefits"
        title="What the Connect 4 space gives you"
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
            children: "Create your first Connect 4 game",
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
            title="Balanced participation"
            description="Strategic thinkers excel at game planning while others master basket shots, ensuring everyone contributes regardless of role or thinking style."
          />
          <InfoElement
            imageSrc="/images/farm.jpg"
            title="Strategic thinking transfer"
            description="Exercise the same prediction and tactical thinking muscles used in business decision-making through engaging gameplay."
          />
          <InfoElement
            imageSrc="/images/auditorium.jpg"
            title="Natural relationship building"
            description="Share universal experiences of wins, defeats, and collaborative victories that break down communication barriers across teams."
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
            children: "Create your first Connect 4 game",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <InfoPiece
          title="Department battles"
          image={"/images/campfire.jpg"}
          reverse={true}
          description="Monthly tournaments creating cross-functional connections"
          cta={{
            variant: "text",
            children: "Create your first department battle",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="New hire integration"
          image={"/images/campfire.jpg"}
          description="Weekly sessions where gameplay facilitates natural conversation"
          cta={{
            variant: "text",
            children: "Start new hire integration",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Leadership approachability"
          image={"/images/campfire.jpg"}
          description="Break down hierarchical barriers through executive participation"
          reverse={true}
          cta={{
            variant: "text",
            children: "Start having fun with your leaders",
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

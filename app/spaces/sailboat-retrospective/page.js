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

export default function SailboatRetrospectivePage() {
  return (
    <div>
      <Hero
        preTitle="The sailboat retrospective"
        preTitleClassName="text-teal-500"
        title="Retrospectives that move teams forward"
        titleClassName="max-w-[1200px] text-teal-900"
        subtitle="Turn retrospectives into active journeys through 3D collaboration."
        subtitleClassName="max-w-[720px] text-teal-700"
        buttons={[
          {
            variant: "primary",
            size: "xl",
            children: "Create a meeting in the Sailboat retrospective space",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
          /*{ variant: "tertiary", size: "md", children: "Learn More" },*/
        ]}
        bgClassName="bg-teal-50"
        image="/images/sailboat-retrospective-hero.webp"
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="The physical movement aspect of placing notes on different parts of the sailboat created a flow to our retro that was missing in 2D tools. Team members actually look forward to our retrospectives now."
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
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-[960px] mx-auto">
          <CheckmarkItem text="Put post-it notes on the whiteboard" />
          <CheckmarkItem text="Vote each post-it publicly or anonymously" />
          <CheckmarkItem text="Move post-its around the different whiteboards" />
          <CheckmarkItem text="Set timers for each phase of the retrospective" />
          <CheckmarkItem text="Vote in an impact/effort scale" />
          <CheckmarkItem text="Discuss times and propose solutions" />
          <CheckmarkItem text="Set assignees to each final solution" />
        </div>
      </Section>
      <Section
        preTitle="How to use"
        title="Get the best out of the Sailboat retrospective space"
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
              title: "Invite your team to the Sailboat retrospective space",
              description:
                "Set up a meeting in the Sailboat retrospective space and invite all the members of your team.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Explain the purpose, the process and set the first timer",
              description:
                "Get everyone to understand what the goal of the retrospective is and set the first timer to propose items. We suggest starting with the island/sun.",
              image: "/images/sailboat-retrospective-start-vote.webp",
            },
            {
              title: "Run a voting timer and select the hottest topics",
              description:
                "Once everyone has proposed items, run a voting timer and select the most important items to discuss. Once you know what are the most important items, send them to the Selected whiteboard to discuss.",
              image: "/images/sailboat-retrospective-vote.webp",
            },
            {
              title: "Discuss and propose solutions",
              description:
                "Discuss each different item and propose solutions, then run a voting timer to vote each solution on the impact/effort scale to see which ones will be the most useful.",
              image: "/images/sailboat-retrospective-discuss.webp",
            },
            {
              title: "Set assignees to each final solution",
              description:
                "Once you have selected the most useful solutions, set assignees to each solution and export the results to start working on them.",
              image: "/images/sailboat-retrospective-set-assignees.webp",
            },
          ]}
        />
      </Section>
      <Section
        preTitle="Benefits"
        title="What the Sailboat retrospective space gives you"
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
            children: "Create your first meeting",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <InfoElement
            title="No one will avoid them"
            description="Gathering the team to run a retrospective will be a breeze. Everybody will want to participate."
          />
          <InfoElement
            title="Engagement will be higher"
            description="Moving around the 3D space putting post-its on the whiteboards will make the session more engaging than any other retrospective format."
          />
          <InfoElement
            title="Smoother and faster"
            description="The built-in timers and the voting will make the session smoother and faster than any other retrospective you've run before."
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
          title="Sailboat retrospective"
          image={"/images/sailboat-retrospective.webp"}
          reverse={true}
          description="Needless to say, the Sailboat retrospective space is perfect for the sailboat retrospective. *Wink wink*"
          cta={{
            variant: "text",
            children: "Create a meeting in the Sailboat retrospective space",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Brainstorming sessions"
          image={"/images/brainstorming.webp"}
          description="Take advantage of the built-in features in the Sailboat retrospective space to brainstorm ideas and solutions."
          cta={{
            variant: "text",
            children: "Create a brainstorming session",
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

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

export default function ThisOrThatPage() {
  return (
    <div>
      <Hero
        preTitle="This or that"
        preTitleClassName="text-purple-500"
        title="Discover your team through playful choices"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Reveal team dynamics through physical positioning and choice."
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          {
            variant: "primary",
            size: "xl",
            children: "Create a meeting in the This or that space",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
          /*{ variant: "tertiary", size: "md", children: "Learn More" },*/
        ]}
        image="/images/this-or-that-hero.webp"
        bgClassName="bg-purple-50"
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="Team Up!'s 3D environments delivered a 15% productivity boost and a 25% drop in turnover in just six months."
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
          <CheckmarkItem text="Icebreakers to get the conversation started" />
          <CheckmarkItem text="This or that, Agree or disagree and Would your rather" />
          <CheckmarkItem text="Generate random options with the click of a button" />
          <CheckmarkItem text="Set up your own options if you want to play around" />
          <CheckmarkItem text="Move around the space to vote and discuss" />
        </div>
      </Section>
      <Section
        preTitle="How to use"
        title="Get the best out of the This or that space"
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
              title: "Invite your company or team to the This or that space",
              description:
                "Set up a meeting room in the This or that space and invite all the members of your team.",
              image: "/images/campfire.jpg",
            },
            {
              title:
                "Get everyone ready to have a good time in front of the stage",
              description:
                "Gather everyone in front of the stage and explain what the purpose of the space is.",
            },
            {
              title: "Select the dynamic you want to use",
              description:
                "Select between This or that, Agree or disagree and Would your rather.",
              image: "/images/thisorthat-select-dynamic.webp",
            },
            {
              title: "Set up the options or load some random ones",
              description:
                "Use some options of your own or, if you don't have any in mind, load some random ones with a click of a button. Invite people to put their options to have some fun.",
            },
            {
              title: "See where people stand and get the conversation started",
              description:
                "Give some time to people to choose an option and move to the respective side. Once everyone is ready, let the vocal ones speak up and make their case and see what happens.",
              image: "/images/thisorthat-see-stand.webp",
            },
          ]}
        />
      </Section>
      <Section
        preTitle="Benefits"
        title="What the Auditorium gives you"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoElement
            imageSrc="/images/campfire.jpg"
            title="Run entertaining icebreakers"
            description="Run company-wide fun and entertaining icebreakers with just a few clicks."
          />
          <InfoElement
            imageSrc="/images/farm.jpg"
            title="Get to know everyone"
            description="Learn things about your colleagues you never imagined that will help you connect with them."
          />
          <InfoElement
            imageSrc="/images/auditorium.jpg"
            title="Bond over shared interests"
            description="Team up with the colleagues on your side and fight for your the option you like the most."
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
            children: "Create your first icebreaking session",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <InfoPiece
          title="Loosen up before a long meeting"
          image={"/images/campfire.jpg"}
          reverse={true}
          description="A forest setting with conversation-starter cards perfect for
          team bonding and casual discussions."
          cta={{
            variant: "text",
            children: "Start beginning meetings on a fun note",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Get important insights in a fun way"
          image={"/images/campfire.jpg"}
          description="Use a low pressure environment to get important insights of your employees in a more entertaining way."
          cta={{
            variant: "text",
            children: "Start getting important insights",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Connect employees over fun topics"
          image={"/images/campfire.jpg"}
          description="Let employees that don't know each other well connect over different and fun topics in a fun way."
          reverse={true}
          cta={{
            variant: "text",
            children: "Start connecting over fun topics",
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

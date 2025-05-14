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

export default function CampfirePage() {
  return (
    <div>
      <Hero
        preTitle="The Campfire"
        preTitleClassName="text-orange-500"
        title="Never run out of stories around these flames"
        titleClassName="max-w-[1200px] text-orange-900"
        subtitle="Turn awkward silence into authentic connection through guided topics."
        subtitleClassName="max-w-[720px] text-orange-700"
        buttons={[
          {
            variant: "primary",
            size: "lg",
            children: "Create a meeting in the Campfire",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          },
          /*{ variant: "tertiary", size: "md", children: "Learn More" },*/
        ]}
        image="/images/campfire-hero.webp"
        bgClassName="bg-orange-50"
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="The random conversation cards are brilliant! Our team discovered connections we never knew existed. What used to be awkward remote social time has becme something everyone looks forward to."
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
          <CheckmarkItem text="Random topics to spark conversations" />
          <CheckmarkItem text="Different themes to choose from" />
          <CheckmarkItem text="Customizable topics if you want to have a little more control" />
          <CheckmarkItem text="Gather around the fire to feel connected" />
        </div>
      </Section>
      <Section
        preTitle="How to use"
        title="Get the best out of the Campfire"
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
            children: "Create your first Campfire meeting",
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
              title: "Invite your team to the Campfire",
              description:
                "Set up a meeting in the Campfire and invite all the members of your team.",
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/create-room-campfire.webm",
            },
            {
              title: "Gather around the fire",
              description:
                "Bring everyone together around the fire to make sure everyone is ready to spark conversations.",
              image: "/images/campfire-gather.webp",
            },
            {
              title: "Take turns to get topics from the stalls",
              description:
                "Take turns to get a topic from the different stalls and see how conversations unfold.",
              image: "/images/campfire-get-topic.webp",
            },
            {
              title: "Bond over topics you never thought you'd talk about",
              description:
                "See how easy is to bond over topics no one had to pressure to bring up and you've never thought that would come out in a conversation with your colleagues.",
            },
            {
              title: "Optional: set up a list of custom topics",
              description:
                "Control de flow of the campfire by setting fire a topics you want to talk about without forcing them into the conversation.",
            },
          ]}
        />
      </Section>
      <Section
        preTitle="Benefits"
        title="What the Campfire gives you"
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
            children: "Create your first Campfire meeting",
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
            title="Comfortable and casual"
            description="No one has the pressure to bring up topics and you can just relax and enjoy the conversation."
          />
          <InfoElement
            imageSrc="/images/farm.jpg"
            title="Perfect for onboarding"
            description="New hires will never have an easier way to get to know their new colleagues and feel part of the team."
          />
          <InfoElement
            imageSrc="/images/auditorium.jpg"
            title="Easiest way to bond"
            description="Learn things about your colleagues you never knew and make new connections that will last a lifetime."
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
          title="Onboarding new hires"
          image={"/images/campfire.jpg"}
          reverse={true}
          description="Let new hires get to know the team in a comfortable and casual way by bringing the team together around the fire."
          cta={{
            variant: "text",
            children: "Start onboarding new hires",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Team building sessions"
          image={"/images/campfire.jpg"}
          description="Run recurrent team building sessions to keep the company connected and engaged. Let people from different departments get to know each other."
          cta={{
            variant: "text",
            children: "Start making cross-departmental connections",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Solve problems by bringing up difficult topics"
          image={"/images/campfire.jpg"}
          description="Run anonymous polls to get feedback from your employees and use the Campfire to discuss the difficult topics without anyone being forced to bring them up."
          reverse={true}
          cta={{
            variant: "text",
            children: "Start bringing up difficult topics",
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

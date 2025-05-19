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

export default function DebateRoomPage() {
  return (
    <div>
      <Hero
        preTitle="The debate room"
        preTitleClassName="text-red-500"
        title="Debate with impact, sometimes literally"
        titleClassName="max-w-[960px] text-red-900"
        subtitle="Structured debates with spectacularly entertaining consequences."
        subtitleClassName="max-w-[960px] text-red-700"
        buttons={[
          {
            variant: "primary",
            size: "xl",
            children: "Create a meeting in the Debate room",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
          /*{ variant: "tertiary", size: "md", children: "Learn More" },*/
        ]}
        image="/images/debate-hero.webp"
        bgClassName="bg-red-50"
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="The physical component of being 'ejected' when your time is up adds a playful yet effective mechanism to keep our discussions balanced. It's transformed how we brainstorm."
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
          <CheckmarkItem text="Control speaking turns as moderator" />
          <CheckmarkItem text="Keep track of the time each participant has spoken" />
          <CheckmarkItem text="Set conversation topics for each section" />
          <CheckmarkItem text="Have audience muted so they can't interrupt" />
        </div>
      </Section>
      <Section
        preTitle="How to use"
        title="Get the best out of the Debate room"
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
              window.open("https://app.teamup.works/signup", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <Steps
          steps={[
            {
              title: "Invite participants and audience to the Debate room",
              description:
                "Set up a meeting in the Debate room and invite everyone to join.",
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/create-room-debate.webm",
            },
            {
              title: "Set up the different timer options",
              description:
                "You can keep track of the time each participant has spoken through various intervals or set a time for a tiemd speech.",
              image: "/images/debate-configuration.webp",
            },
            {
              title: "Set up a topic and start the debate",
              description:
                "Put on a topic and start the debate. Select who speaks first and control the speaking turns from then on.",
            },
          ]}
        />
      </Section>
      <Section
        preTitle="Benefits"
        title="What the Debate room gives you"
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
            children: "Create your first debate",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <InfoElement
            title="Organize debates easily"
            description="Forget about the hassle of organizing structured conversations. The Debate room makes it easy to run debates with your team."
          />
          <InfoElement
            title="Run mock debates"
            description="Make everyone challenge their assumptions and think differently about a topic."
          />
          <InfoElement
            title="Give your team a voice"
            description="Use the debate room to give everyone a chance to speak and be heard and reach a consensus."
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
              window.open("https://app.teamup.works/signup", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <InfoPiece
          title="Team building"
          image={"/images/fun-debate.webp"}
          reverse={true}
          description="Build listening skills and mutual respect as team members articulate perspectives under time pressure, with the playful consequence of being launched skyward when time expires."
          cta={{
            variant: "text",
            children: "Start team building in the Debate room",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Decision making"
          image={"/images/debate-decision-making.webp"}
          description="Streamline complex decisions by giving each viewpoint equal airtime in a structured format, ensuring all voices are heard before moving forward with a solution."
          cta={{
            variant: "text",
            children: "Start making decisions in the Debate room",
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

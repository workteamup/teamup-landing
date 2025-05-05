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

export default function AuditoriumPage() {
  return (
    <div>
      <Hero
        preTitle="The auditorium"
        preTitleClassName="text-blue-500"
        title="Town halls where movement becomes voice"
        titleClassName="max-w-[1200px] text-blue-900"
        subtitle="Turn passive viewers into active participants through movement"
        subtitleClassName="max-w-[720px] text-blue-700"
        buttons={[
          {
            variant: "primary",
            size: "xl",
            children: "Create a meeting in the Auditorium",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
          /* { variant: "tertiary", size: "md", children: "View pricing" },*/
        ]}
        video={
          "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/create-room-auditorium.webm"
        }
        videoAutoplay={true}
        videoControls={false}
        bgClassName="bg-blue-50"
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
        title="Everything you need for a successful town hall"
        titleClassName="max-w-[960px] mx-auto"
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 lg:gap-y-8 max-w-[960px] mx-auto">
          <CheckmarkItem text="Only the presenter can talk" />
          <CheckmarkItem text="Screen sharing in the big auditorium screen" />
          <CheckmarkItem text="Set up conversation topics and polls" />
          <CheckmarkItem text="Run quick position based voting" />
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
            children: "Create your first town hall",
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
              title: "Invite your employees to the town hall",
              description:
                "Create a meeting in the Auditorium and invite all your employees",
              image: "/images/campfire.jpg",
            },
            {
              title: "Gather them around the stands",
              description:
                "Wait until everyone is in the stands ready to see your presentation.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Step into the stage",
              description:
                "Once you set foot in the stage, the audience will go silent and focus on what you have to say.",
              image: "/images/campfire.jpg",
            },
            {
              title:
                "Share your screen, set up conversation topics or run polls",
              description:
                "Use the different features of the Auditorium to run your town hall.",
              image: "/images/campfire.jpg",
            },
            {
              title:
                "Invite guests to the stage so they can join the conversation",
              description:
                "If someone wants to ask or talk about something, they can join you in the stage.",
              image: "/images/campfire.jpg",
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
            children: "Create your first town hall",
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
            title="Feel like presenting in person"
            description="Replace the cold feeling of presenting in a webcam grid with the feeling of being in front of a real audience."
          />
          <InfoElement
            imageSrc="/images/farm.jpg"
            title="See an engaged audience"
            description="See your audience engaged in the conversation with their reactions and the movement to vote the polls you set up."
          />
          <InfoElement
            imageSrc="/images/auditorium.jpg"
            title="Control the flow of the conversation"
            description="The audience's audio is muted, so no interruptions, no unwanted noise, just the presenter and the audience."
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
          title="Company all hands"
          supportContent={
            <div className="w-full h-[300px] lg:h-[540px] bg-purple-100 rounded-3xl flex items-center justify-center">
              <div className="relative w-[85%] h-[80%]">
                <Image
                  src="/images/campfire.jpg"
                  alt="Employee Engagement"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          }
          reverse={true}
          description="A forest setting with conversation-starter cards perfect for
          team bonding and casual discussions."
          cta={{
            variant: "text",
            children: "Create a company all hands meeting",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Company town hall"
          supportContent={
            <div className="w-full h-[300px] lg:h-[540px] bg-purple-100 rounded-3xl flex items-center justify-center">
              <div className="relative w-[85%] h-[80%]">
                <Image
                  src="/images/campfire.jpg"
                  alt="Employee Engagement"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          }
          description="A forest setting with conversation-starter cards perfect for
          team bonding and casual discussions."
          cta={{
            variant: "text",
            children: "Create a company town hall",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="AMA sessions"
          supportContent={
            <div className="w-full h-[300px] lg:h-[540px] bg-purple-100 rounded-3xl flex items-center justify-center">
              <div className="relative w-[85%] h-[80%]">
                <Image
                  src="/images/campfire.jpg"
                  alt="Employee Engagement"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          }
          description="A forest setting with conversation-starter cards perfect for
          team bonding and casual discussions."
          reverse={true}
          cta={{
            variant: "text",
            children: "Create an AMA session",
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

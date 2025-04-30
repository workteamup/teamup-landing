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
            
          },
          /* { variant: "tertiary", size: "md", children: "View pricing" },*/
        ]}
        extraContent={
          <div className="max-w-[1200px] mx-auto">
            <div
              className=""
              style={{
                position: "relative",
                paddingBottom: "54.13533834586466%",
                height: 0,
                marginTop: "40px",
              }}
            >
              <iframe
                src="https://www.loom.com/embed/98c19c69a60f46778b85332c5b25633f?sid=9b6a175e-fc80-4b7b-8213-fd05ef9c4b1c"
                frameBorder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                className="rounded-[40px]"
              ></iframe>
            </div>
          </div>
        }
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
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-16 max-w-[960px] mx-auto">
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
        containerClassName="py-24 max-w-[1440px] mx-auto"
        buttons={[
          {
            variant: "primary",
            children: "Request access",
            size: "xl",
          },
          {
            variant: "secondary",
            children: "Create your first town hall",
            size: "xl",
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
        containerClassName="py-32 max-w-[1600px] mx-auto"
        buttons={[
          {
            variant: "primary",
            children: "Request access",
            size: "xl",
          },
          {
            variant: "secondary",
            children: "Create your first meeting",
            size: "xl",
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
        containerClassName="py-32 md:px-8 lg:px-12"
        className="mt-16 px-0 overflow-hidden max-w-[1600px] mx-auto"
        buttons={[
          {
            variant: "primary",
            children: "Request access",
            size: "xl",
          },
          {
            variant: "secondary",
            children: "Create your first meeting",
            size: "xl",
          },
        ]}
        buttonsPosition="bottom"
      >
        <InfoPiece
          title="Company all hands"
          supportContent={
            <div className="w-full h-[540px] bg-purple-100 rounded-3xl flex items-center justify-center">
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
            variant: "primary",
            children: "Create a meeting in the Auditorium",
            size: "lg",
          }}
        />
        <InfoPiece
          title="Company town hall"
          supportContent={
            <div className="w-full h-[540px] bg-purple-100 rounded-3xl flex items-center justify-center">
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
            variant: "primary",
            children: "Create a meeting in the Auditorium",
            size: "lg",
          }}
        />
        <InfoPiece
          title="AMA sessions"
          supportContent={
            <div className="w-full h-[540px] bg-purple-100 rounded-3xl flex items-center justify-center">
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
            variant: "primary",
            children: "Create a meeting in the Auditorium",
            size: "lg",
          }}
        />
      </Section>
      <Section
        title="Future proof your team"
        titleClassName="max-w-[960px] font-medium"
        subtitle="Team Up! evolves with your team, ensuring you're always prepared for the future of work with regular updates and new interactive spaces that respond to changing workplace needs."
        subtitleClassName="text-dark-space max-w-[960px]"
        containerClassName="py-32 md:px-8 lg:px-12"
        className="px-0 overflow-hidden max-w-[1600px] mx-auto"
      />
      <ClosingCTA
        text="Start creating a company culture that works"
        buttonText="Request access"
      />
    </div>
  );
}

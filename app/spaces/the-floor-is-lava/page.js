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
        bgClassName="bg-red-50"
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
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
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
        containerClassName="py-24 max-w-[1440px] mx-auto"
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
              image: "/images/campfire.jpg",
            },
            {
              title: "Start trying, falling, laughing and trying again",
              description:
                "Start the challenge and see who can avoid the obstacles and who falls the most.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Get the coin",
              description:
                "There's a coin at the end of the path. The first to get there will be the champion of the session.",
              image: "/images/campfire.jpg",
            },
          ]}
        />
      </Section>
      <Section
        preTitle="Benefits"
        title="What the Floor is lava gives you"
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
        containerClassName="py-32 md:px-8 lg:px-12"
        className="px-0 overflow-hidden max-w-[1600px] mx-auto"
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
          description="Take a break from the daily routine and talk about life outside of work while having a good laugh."
          cta={{
            variant: "text",
            children: "Create your first coffee break",
            size: "lg",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          }}
        />
        <InfoPiece
          title="Team challenges"
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
          description="Get the different teams of your company to complete the tracks in the fasters time."
          cta={{
            variant: "text",
            children: "Create your first team challenge",
            size: "lg",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          }}
        />
        <InfoPiece
          title="Fun competitions"
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
          description="Run company-wide individual races to see who's the fastest. The winner gets a reward."
          reverse={true}
          cta={{
            variant: "text",
            children: "Create your first fun competition",
            size: "lg",
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

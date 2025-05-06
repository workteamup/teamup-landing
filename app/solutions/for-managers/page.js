"use client";

import Hero from "../../new-components/hero";
import Section from "../../new-components/section";
import SimpleStartSection from "../../new-components/simple-start-section";
import NumberElement from "../../new-components/number-element";
import InfoPiece from "../../new-components/info-piece";
import Image from "next/image";
import { X, Check } from "lucide-react";
import Testimonial from "../../new-components/testimonial";
import Steps from "../../new-components/steps";
import InfoElement from "../../new-components/info-element";
import LogoSlider from "../../new-components/logo-slider";
import ClosingCTA from "../../new-components/closing-cta";
import { ArrowRight } from "lucide-react";
import ProsConsList from "../../new-components/pros-cons-list";

export default function ForManagersPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for Managers"
        preTitleClassName="text-purple-500"
        title="Lead stronger teams, effortlessly"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Team Up! equips managers with immersive tools to enhance collaboration, foster connection and keep teams motivated regardless of location"
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          { variant: "primary", size: "xl", children: "Request access" },
          { variant: "secondary", size: "xl", children: "Contact sales" },
        ]}
        bgClassName="bg-purple-50"
      />
      <Section
        title="Join the 100+ managers and team leads taking advantage of using Team Up!"
        titleClassName="max-w-[960px] text-2xl lg:text-5xl font-medium"
        bgClassName=""
        className="overflow-hidden w-full mx-auto"
        buttons={[
          {
            variant: "primary",
            children: "Request access",
            size: "lg",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
        ]}
        buttonsPosition="top"
      >
        <LogoSlider />
      </Section>
      <SimpleStartSection
        title="How Team Up! helps Managers"
        titleClassName="max-w-[480px]"
        features={[
          {
            title: "Increase team cohesion",
            description:
              "Strengthen bonds with virtual stand-ups and interactive activities in 3D environments that make remote teamwork feel personal.",
          },
          {
            title: "Increase your communication",
            description:
              "Facilitate spontaneous chats and structured discussions in one platform that mimics in-person conversation dynamics.",
          },
          {
            title: "Boost your team's productivity",
            description:
              "Cut silos and boost output with real-time collaboration tools that make online meetings more engaging and effective.",
          },
        ]}
        cta={{
          children: "Create your first meeting room",
          onClick: () =>
            window.open("https://app.teamup.works/signup", "_blank"),
        }}
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="Our planning sessions are more productive, decisions happen faster, and I can finally read the room even in remote meetings. Project timelines have shortened by 20% since we started using the platform."
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
        title="Team Up! has you covered"
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
            title="Interactive whiteboards"
            description="Brainstorm and plan visually with your team in dedicated 3D spaces designed for collaboration."
          />
          <InfoElement
            imageSrc="/images/farm.jpg"
            title="Planning spaces"
            description="Run quick, effective stand-ups or strategy sessions in environments like our Planning space with built-in anonymous voting."
          />
          <InfoElement
            imageSrc="/images/auditorium.jpg"
            title="Team events"
            description="Host morale-boosting activities like our Connect 4 and The Farmyard games without extra planning effort."
          />
        </div>
      </Section>
      <Section
        preTitle="The problem in numbers"
        title="Title under construction"
        bgClassName="bg-white"
        containerClassName="max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NumberElement
            number={68}
            suffix="%"
            description="68% of managers report strgguling to keep remote team members engages during virtual meetings."
          />
          <NumberElement
            number={35}
            suffix="%"
            description="Teams with poor virtual collaboration tools experiences 35% longer projection times and 28% more miscommunication incidents."
          />
          <NumberElement
            number={64}
            suffix="%"
            description="64% of team leaders say they lack effective tools to build team culture in distributed work environments."
          />
        </div>
      </Section>
      <Section
        preTitle="Team Up! vs. traditional solutions"
        title="A new way to do things"
        titleClassName="max-w-[1200px]"
        bgClassName=""
        containerClassName="md:px-8 lg:px-12"
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
        <div>
          <InfoPiece
            title="Annual in-person team events"
            titleClassName="font-medium max-w-[360px] text-2xl lg:text-4xl"
            image={"/images/campfire.jpg"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Team cohesion built during events dissipates rapidly once teams return to routine.",
                  "Managers have little control over event design to address specific team needs.",
                  "Budget limitations often mean choosing between broad participation or deep impact.",
                  "The disconnect between fun activities and actual work challenges limits transfer.",
                ]}
              />
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-2xl lg:text-4xl"
            image={"/images/campfire.jpg"}
            description={
              <ProsConsList
                type="pros"
                className="mt-6"
                items={[
                  "Maintain team cohesion through regular engaging interactions throughout the year.",
                  "Customize activities to address your specific team's challenges and dynamics.",
                  "Run frequent high-impact sessions that fit withint existing team budgets.",
                  "Create direct connections between team-building and actual work challenges.",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Video conferencing for team collaboration"
            titleClassName="font-medium max-w-[360px] text-2xl lg:text-4xl"
            image={"/images/campfire.jpg"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Meeting fatigue severely impacts team engagement and contribution.",
                  "Cannot effectively read the room to gauge silent disagreement or confusion.",
                  "Limited tools to facilitate collaborative problem-solving during discussions.",
                  "Unnatural communication patterns where dominant voices overshadow others.",
                ]}
              />
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-2xl lg:text-4xl"
            image={"/images/campfire.jpg"}
            description={
              <ProsConsList
                type="pros"
                className="mt-6"
                items={[
                  "Keep teams energized with dynamic meeting environments that reduce fatigue.",
                  "Observe spatial dynamics that reveal actual team sentiment and concerns.",
                  "Utilize purpose-built spaces for different meeting types (standups, planning, retrospectives).",
                  "Create natural conversation flows with spatial audio and small group interactions.",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Project management tools"
            titleClassName="font-medium max-w-[440px] text-2xl lg:text-4xl"
            image={"/images/campfire.jpg"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Focus solely on task tracking without the human connection that drives performance.",
                  "Create additional work for managers to both track and communicate.",
                  "Difficult to use for facilitating meaningful team interactions around the work.",
                  "Separate systems for planning, execution, and team building create fragmentation.",
                ]}
              />
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-2xl lg:text-4xl"
            image={"/images/campfire.jpg"}
            description={
              <ProsConsList
                type="pros"
                className="mt-6"
                items={[
                  "Combine task visualization with team connection in a single environment.",
                  "Reduce admin work with automated tracking based on team interactions.",
                  "Facilitate engaging, productive discussions around visual project representations.",
                  "Unify planning, execution, and team building in cohesive virtual environments.",
                ]}
              />
            }
            reverse={true}
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
          title="Sprint planning sessions"
          image={"/images/campfire.jpg"}
          reverse={true}
          description="Plan your sprints in an interactive space where voting is more dynamic, anonymous and fun. The sprint planning meetings will flow effortlessly."
          cta={{
            variant: "text",
            children: "Check out our Planning space",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/planning"),
          }}
        />
        <InfoPiece
          title="Weekly retrospectives"
          image={"/images/campfire.jpg"}
          description="Host weekly retrospective in our Sailboat retrospective space, where you can feel as if you were put in post-its in the whiteboard of your office."
          cta={{
            variant: "text",
            children: "Check our Sailboat retrospective",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/planning"),
          }}
        />
      </Section>
      <Section
        preTitle="How it works"
        title="Start improving your team's performance"
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
              title: "Request access to Team Up!",
              description:
                "Apply for access to Team Up! in https://app.teamup.works/signup",
              image: "/images/campfire.jpg",
            },
            {
              title: "Create your company's workspace",
              description:
                "Create a workspace that reflects your company culture and invite your team members to join.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Create your first meeting room",
              description:
                "Create a meeting room, invite your team members and start having engaging and productive meetings.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Reap the benefits",
              description:
                "Happier teams perform better, and Team Up! will help you have a more united team that will work better together.",
              image: "/images/campfire.jpg",
            },
          ]}
        />
      </Section>
      <ClosingCTA
        text="Start creating a company culture that works"
        buttonText="Request access"
      />
    </div>
  );
}

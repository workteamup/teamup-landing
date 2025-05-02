"use client";

import Hero from "../../new-components/hero";
import Section from "../../new-components/section";
import SimpleStartSection from "../../new-components/simple-start-section";
import Testimonial from "../../new-components/testimonial";
import ClosingCTA from "../../new-components/closing-cta";
import LogoSlider from "../../new-components/logo-slider";
import NumberElement from "../../new-components/number-element";
import InfoElement from "../../new-components/info-element";
import InfoPiece from "../../new-components/info-piece";
import Image from "next/image";
import { Check, X } from "lucide-react";
import Steps from "../../new-components/steps";

export default function ForDailyActivityPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for daily activity"
        preTitleClassName="text-purple-500"
        title="Make every meeting matter"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Team Up! transforms routine meetings into interactive, productive experiences in immersive 3D environments"
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          {
            variant: "primary",
            size: "xl",
            children: "Request access",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
          {
            variant: "secondary",
            size: "xl",
            children: "Contact sales",
            onClick: () => (window.location.href = "/contact"),
          },
        ]}
        bgClassName="bg-purple-50"
      />
      <Section
        title="Join the 100+ companies using Team Up! on a daily basis"
        titleClassName="max-w-[960px] text-2xl lg:text-5xl font-medium"
        bgClassName=""
        className="overflow-hidden w-full mx-auto"
        buttons={[
          {
            variant: "primary",
            children: "Request access",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
        ]}
        buttonsPosition="top"
      >
        <LogoSlider />
      </Section>
      <SimpleStartSection
        title="Why you should care"
        titleClassName="max-w-[480px]"
        features={[
          {
            title: "Engagement",
            description:
              "Daily meetings set the tone for your team's culture—keep your team motivated and connected with immersive 3D spaces that encourage participation.",
          },
          {
            title: "Productivity",
            description:
              "Cut meeting fatigue and boost focus with interactive 3D tools that make routine discussions feel fresh and engaging.",
          },
          {
            title: "Consistency",
            description:
              "Build habits of collaboration with purpose-designed 3D spaces that make daily interaction frictionless and meaningful.",
          },
        ]}
        cta={{
          children: "Have better daily meetings",
          onClick: () =>
            window.open("https://app.teamup.works/signup", "_blank"),
        }}
      />
      <Section
        preTitle="The problem in numbers"
        title="Title under construction"
        bgClassName="bg-white"
        containerClassName="max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NumberElement
            number={70}
            suffix="%"
            description="70% of employees report meeting fatigue with traditional video calls, reducing productivity by up to 30%."
          />
          <NumberElement
            number={25}
            suffix="%"
            description="Teams with engaging daily interactions are 25% more productive and have 40% better information retention."
          />
          <NumberElement
            number={400}
            prefix="$"
            suffix="B"
            description="Poorly run meetings cost companies $400 billion annually in lost time and diminished engagement."
          />
        </div>
      </Section>
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
              window.open("https://app.teamup.works/signup", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoElement
            imageSrc="/images/campfire.jpg"
            title="Persistent spaces"
            description="Replace expensive in-person events with scalable virtual team-building, saving up to 30% on engagement costs while increasing frequency of connection."
          />
          <InfoElement
            imageSrc="/images/farm.jpg"
            title="Interactive tools"
            description="Increase team ouput by 20% with 3D environments that enhance collaboration, communication and cross-team innovation."
          />
          <InfoElement
            imageSrc="/images/auditorium.jpg"
            title="Purpose-built spaces"
            description="Jump into spaces with the right structure for your team's needs. Stand-ups, retros, brainstorming sessions, and more."
          />
        </div>
      </Section>
      <Section
        preTitle="Team Up! vs. traditional solutions"
        title="A new way to do things"
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
            children: "Create your first meeting room",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <div>
          <InfoPiece
            title="Morning stand-ups"
            titleClassName="font-medium max-w-[360px] mb-10 text-4xl"
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
            description={
              <ul className="space-y-4 mt-6">
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Video fatigue from staring at faces in a grid.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Difficult to see who's speaking in larger teams.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Passive participation with cameras off.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Text-based status updates lack context.
                  </span>
                </li>
              </ul>
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-4xl mb-10"
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
            description={
              <ul className="space-y-4 mt-6">
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Physical movement in Planning spaces keeps energy high.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Spatial audio makes conversations feel natural.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Visual progress tracking through avatar placement.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Interactive elements encourage full participation.
                  </span>
                </li>
              </ul>
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Video conferencing for team collaboration"
            titleClassName="font-medium max-w-[360px] mb-10 text-4xl"
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
            description={
              <ul className="space-y-4 mt-6">
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Limited analytics on actual engagement levels during
                    critical meetings.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    No effective way to gauge team alignment on strategic
                    initiatives.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Creates communication silos between departments and office
                    locations.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Fails to build the cross-organizational relationships needed
                    for innovation.
                  </span>
                </li>
              </ul>
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] mb-10 text-4xl"
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
            description={
              <ul className="space-y-4 mt-6">
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Gain actionable insights into team participation and
                    engagement metrics.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Visualize alignment through interactive voting and feedback
                    mechanisms.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Break down silos with spaces designed for cross-departmental
                    interaction.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Foster innovation through unexpected connections in shared
                    virtual environments.
                  </span>
                </li>
              </ul>
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Sprint planning"
            titleClassName="font-medium max-w-[440px] mb-10 text-4xl"
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
            description={
              <ul className="space-y-4 mt-6">
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Endless screen sharing of static documents.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Voting through separate polling tools disrupts flow.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Difficult to gauge consensus across team members.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Limited visibility into who agress with what.
                  </span>
                </li>
              </ul>
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] mb-10 text-4xl"
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
            description={
              <ul className="space-y-4 mt-6">
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Boards displayed in 3D space.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Built-in voting platforms for immediate feedback.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Visual representation of team consensus.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Natural conversations through 3D avatars.
                  </span>
                </li>
              </ul>
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
              window.open("https://app.teamup.works/signup", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <InfoPiece
          title="Visual daily stand-ups"
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
          description="Host a virtual stand-up in our Planning space where team members move avatars to update progress visually while using spatial audio for natural conversation."
          cta={{
            variant: "text",
            children: "Start your first stand-up",
            size: "lg",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Team mood check-ins"
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
          description="Run a daily mood check-in using our Campfire environment with polls to gauge team morale through avatar placement on different platforms."
          cta={{
            variant: "text",
            children: "Start your first mood check-in",
            size: "lg",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Interactive sprint planning"
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
          description="Facilitate a sprint planning session in our dedicated Planning room with interactive boards and voting platforms that visualize team consensus."
          reverse={true}
          cta={{
            variant: "text",
            children: "Start your first sprint planning",
            size: "lg",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
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
              window.open("https://app.teamup.works/signup", "_blank"),
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
      <Section
        title="Future proof your team"
        titleClassName="max-w-[960px] font-medium"
        subtitle="Team Up!'s daily meeting spaces seamlessly adjust to hybrid or fully remote setups, ensuring connectivity as work models evolve beyond 2025."
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

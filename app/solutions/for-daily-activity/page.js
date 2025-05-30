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
import ProsConsList from "../../new-components/pros-cons-list";
import { ArrowRight } from "lucide-react";

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
        show={false}
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
        title="See how poorly handled daily meetings affect your company"
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
        quote="Team Up! made our daily stand-ups feel like we're in the same room, our team is more connected than ever. The 3D space gives a sense of presence that Zoom never could, and our meeting effectiveness scores have increased by 45%."
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
            titleClassName="font-medium max-w-[360px] text-2xl lg:text-4xl"
            image={"/images/traditional-daily-standup.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Video fatigue from staring at faces in a grid.",
                  "Difficult to see who's speaking in larger teams.",
                  "Passive participation with cameras off.",
                  "Text-based status updates lack context.",
                ]}
              />
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-2xl lg:text-4xl"
            image={"/images/teamup-daily-standup.webp"}
            description={
              <ProsConsList
                type="pros"
                className="mt-6"
                items={[
                  "Physical movement in Planning spaces keeps energy high.",
                  "Spatial audio makes conversations feel natural.",
                  "Visual progress tracking through avatar placement.",
                  "Interactive elements encourage full participation.",
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
            image={"/images/meeting-fatigue-2.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Limited analytics on actual engagement levels during critical meetings.",
                  "No effective way to gauge team alignment on strategic initiatives.",
                  "Creates communication silos between departments and office locations.",
                  "Fails to build the cross-organizational relationships needed for innovation.",
                ]}
              />
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-2xl lg:text-4xl"
            image={"/images/teamup-daily-standup.webp"}
            description={
              <ProsConsList
                type="pros"
                className="mt-6"
                items={[
                  "Gain actionable insights into team participation and engagement metrics.",
                  "Visualize alignment through interactive voting and feedback mechanisms.",
                  "Break down silos with spaces designed for cross-departmental interaction.",
                  "Foster innovation through unexpected connections in shared virtual environments.",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Sprint planning"
            titleClassName="font-medium max-w-[440px] text-2xl lg:text-4xl"
            image={"/images/planning-poker.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Endless screen sharing of static documents.",
                  "Voting through separate polling tools disrupts flow.",
                  "Difficult to gauge consensus across team members.",
                  "Limited visibility into who agress with what.",
                ]}
              />
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-2xl lg:text-4xl"
            image={"/images/teamup-sprint-planning.webp"}
            description={
              <ProsConsList
                type="pros"
                className="mt-6"
                items={[
                  "Boards displayed in 3D space.",
                  "Built-in voting platforms for immediate feedback.",
                  "Visual representation of team consensus.",
                  "Natural conversations through 3D avatars.",
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
              window.open("https://app.teamup.works/signup", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <InfoPiece
          title="Visual daily stand-ups"
          image={"/images/debate-hero.webp"}
          reverse={true}
          description="Energize routine status updates by physically gathering in themed 3D spaces where progress visualization and team presence create accountability and connection beyond checklist monotony."
          cta={{
            variant: "text",
            children: "Start your first stand-up",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Team mood check-ins"
          image={"/images/immersive-3d-env.webp"}
          description="Gauge team wellbeing through intuitive spatial tools that allow members to express current states naturally, providing leaders visibility into team morale without awkward direct questioning."
          cta={{
            variant: "text",
            children: "Start your first mood check-in",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Interactive sprint planning"
          image={"/images/visual-sprint-planning.webp"}
          description="Transform estimation sessions from passive discussions to active participation using anonymous voting platforms that ensure unbiased input and immediate visual consensus."
          reverse={true}
          cta={{
            variant: "text",
            children: "Start your first sprint planning",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
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
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/request-access.webm",
            },
            {
              title: "Create your company's workspace",
              description:
                "Create a workspace that reflects your company culture and invite your employees to join.",
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/create-workspace.webm",
            },
            {
              title: "Create your first meeting room or event",
              description:
                "Create a meeting room, invite your team members and start having engaging and productive meetings.",
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/create-first-meeting.webm",
            },
            {
              title: "Reap the benefits",
              description:
                "Happier teams perform better, and Team Up! will help you have a more connected workforce that will boost your bottom line.",
              image: "/images/reap-the-benefits.webp",
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

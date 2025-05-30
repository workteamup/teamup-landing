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
import ProsConsList from "../../new-components/pros-cons-list";
import { ArrowRight } from "lucide-react";

export default function ForHRPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for HR"
        preTitleClassName="text-purple-500"
        title="Create a thriving, connected workplace"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Team Up! empowers HR to boost engagement, retain talent, and shape a strong company culture, even across distributed teams"
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
        title="Join the 100+ HR departments taking advantage of using Team Up!"
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
        title="How Team Up! helps HR"
        titleClassName="max-w-[480px]"
        features={[
          {
            title: "Connect your teams",
            description:
              "Keep teams connected with persistent 3D virtual spaces for team-building and casual interaction, with measurable participation metrics.",
          },
          {
            title: "Power up your employee onboardings",
            description:
              "Welcome new hires with interactive virtual hubs to meet peers and mentors, improving first-90-day satisfaction by 40% and reducing time-to-productivity.",
          },
          {
            title: "Create a thriving company culture",
            description:
              "Foster a sense of belonging with scalable activities that reinforce your values and create shared experiences that transcend location.",
          },
        ]}
        cta={{
          children: "Create your first meeting room",
          onClick: () => window.open("https://app.teamup.works/demo", "_blank"),
        }}
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="I've tried every collaboration tool on the market but nothing compares to Team Up! My distributed team now feels truly connected. Our planning sessions are more productive, decisions happen faster, and I can finally read the room even in remote meetings."
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
            children: "Create your first meeting room",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <InfoElement
            title="Virtual culture building"
            description="Use 3D spaces that embody your company values and provide spaces for meaningful connection, from casual coffee chats to structure mentoring sessions."
          />
          <InfoElement
            title="Onboarding journey"
            description="Design interactive onboarding paths, mentor meet-ups, and team integration activities that make new hires feel welcome and connected from day one."
          />
          <InfoElement
            title="Engagement measurement"
            description="Track sentiment, participation, and team cohesion through unobtrusive data collection during virtual interactions. You can feel the engagement in real-time."
          />
        </div>
      </Section>
      <Section
        preTitle="The problem in numbers"
        title="See how poor culture affects your company"
        bgClassName="bg-white"
        containerClassName="max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NumberElement
            number={73}
            suffix="%"
            description="73% of HR professionals report difficulty maintaining company culture in remote and hybrid environments."
          />
          <NumberElement
            number={200}
            suffix="%"
            description="New hire turnover costs exceed 200% of annual salary when employees leave within the first 90 days."
          />
          <NumberElement
            number={29}
            suffix="%"
            description="Only 29% of HR teams have effective tools to measure employee engagement in distributed work models."
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
            title="Annual in-person team events"
            titleClassName="font-medium max-w-[360px] text-2xl lg:text-4xl"
            image={"/images/traditional-team-building.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Massive coordination burden falls on HR teams for minimal sustained impact.",
                  "Impossible to measure actual culture-building effectiveness.",
                  "Creates logistical nightmares for distributed workforce participation.",
                  "Generates resentment when some employees can't attend due to personal obligations.",
                ]}
              />
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-2xl lg:text-4xl"
            image={"/images/teamup-team-building.webp"}
            description={
              <ProsConsList
                type="pros"
                className="mt-6"
                items={[
                  "Shift from event coordination to strategic culture-building with ready-to-use templates.",
                  "Track precise metrics on participation, engagement, and cultural impact.",
                  "Ensure equal access for every employee regardless of location or availability.",
                  "Create ongoing culture touchpoints rather than once-a-year events.",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Employee engagement surveys"
            titleClassName="font-medium max-w-[360px] text-2xl lg:text-4xl"
            image={"/images/satisfaction-survey.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Low completion rates (typically under 60%) create incomplete data sets.",
                  "Results arrive too late to address emerging cultural issues before they escalate.",
                  "No connection between identification of problems and implementation of solutions.",
                  "Survey fatigue leads to increasingly less honest or thoughtful responses.",
                ]}
              />
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-2xl lg:text-4xl"
            image={"/images/agree-or-disagree-full.webp"}
            description={
              <ProsConsList
                type="pros"
                className="mt-6"
                items={[
                  "Collect behavioral data that doesn't require active survey completion.",
                  "Monitor engagement trends in real-time to catch issues as they emerge.",
                  "Directly implement solutions in the same environment where problems are identified.",
                  "Gather authentic feedback through observation of natural interactions.",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Onboarding processes"
            titleClassName="font-medium max-w-[440px] text-2xl lg:text-4xl"
            image={"/images/onboarding-process.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Expensive to deliver consistent onboarding experience across locations.",
                  "New hires struggle to build authentic connections in remote/hybrid setups.",
                  "Cultural values stated in presentations don't translate to lived experiences.",
                  "Difficult to track new hire integration beyond basic checklist completion.",
                ]}
              />
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-2xl lg:text-4xl"
            image={"/images/teamup-onboarding.webp"}
            description={
              <ProsConsList
                type="pros"
                className="mt-6"
                items={[
                  "Deliver consistent, high-quality onboarding experiences regardless of location.",
                  "Facilitate natural relationship building between new hires and team members.",
                  "Embed company values into interactive experiences rather than static presentations.",
                  "comprobar.",
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
            children: "Create your first meeting room",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <InfoPiece
          title="Employee onboarding"
          image={"/images/teamup-onboarding.webp"}
          reverse={true}
          description="Accelerate new hire integration through immersive experiences that build relationships naturally, replacing overwhelming document reviews with meaningful team connections from day one."
          cta={{
            variant: "text",
            children: "Check out our This or that space",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/campfire"),
          }}
        />
        <InfoPiece
          title="Company-wide challenges"
          image={"/images/connect4-hero.webp"}
          description="Unite distributed teams through engaging cross-departmental activities that break silos and foster company culture, providing measurable engagement data for HR initiatives."
          cta={{
            variant: "text",
            children: "See what you can do in Connect 4",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/connect-4"),
          }}
        />
        <InfoPiece
          title="Company AMA sessions"
          image={"/images/ama-hr.webp"}
          description="Create transparent communication channels where leadership connects authentically with employees, building trust through interactive Q&A formats that encourage participation from all levels."
          reverse={true}
          cta={{
            variant: "text",
            children: "Check the auditorium",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/auditorium"),
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
            children: "Create your first meeting room",
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
                "Create a meeting room or event, invite your employees, and start improving your company culture.",
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
      <ClosingCTA
        text="Start creating a company culture that works"
        buttonText="Request access"
      />
    </div>
  );
}

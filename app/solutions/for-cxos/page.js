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

export default function ForCXOsPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for CXOs"
        preTitleClassName="text-purple-500"
        title="Drive business success with a connected workforce"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Team Up! boosts productivity, reduces costs, and strengthens retention, all with measurable ROI"
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
        title="Join the 100+ CXOs taking advantage of using Team Up!"
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
        title="How Team Up! helps CXOs"
        titleClassName="max-w-[480px]"
        features={[
          {
            title: "Save costs on team building",
            description:
              "Replace expensive in-person events with scalable virtual team-building, saving up to 30% on engagement costs while increasing frequency of connection.",
          },
          {
            title: "Increase productivity of your workforce",
            description:
              "Increase team ouput by 20% with 3D environments that enhance collaboration, communication and cross-team innovation.",
          },
          {
            title: "Boost retention at your company",
            description:
              "Reduce turnover and recruiting expenses by fostering a loyal, engaged workforce with regular interactive experiences.",
          },
        ]}
        cta={{
          children: "Create your first meeting room",
          onClick: () => window.open("https://app.teamup.works/demo", "_blank"),
        }}
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="Team Up!'s 3D environments delivered a 15% productivity boost and a 25% drop in turnover in just six months. The ROI has been exceptional: our engagement costs dropped while our results improved dramatically."
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
            title="A change that can be felt"
            description="Don't rely on metrics that don't really show the reality of your company. Jump into the spaces and see your employees in motion."
          />
          <InfoElement
            title="Scalable events"
            description="Host company-wide gatherings in immersive 3D spaces without logistical overhead or travel expenses. Just a few clicks and you're ready to go."
          />
          <InfoElement
            title="Ready to use spaces"
            description="Go from 0 to 100 with our ready to use spaces that (will) cover the full range of scenarios and needs of your company."
          />
        </div>
      </Section>
      <Section
        preTitle="The problem in numbers"
        title="The effect poor engagement has on your company"
        titleClassName="max-w-[1200px]"
        bgClassName="bg-white"
        containerClassName="max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NumberElement
            number={47}
            suffix="%"
            description="47% of executives report that misalignment across departments is their biggest challenge in distributed teams."
          />
          <NumberElement
            number={15}
            prefix="$"
            suffix="K"
            description="Companies lose an average of $15.000 per employee annually due to ineffective virtual meetings and collaboration."
          />
          <NumberElement
            number={32}
            suffix="%"
            description="Only 32% of leadership teams feel they have adequate visibility into employee engagement across remote and hybrid teams."
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
                  "High per-attendee costs (averaging $1.000+) with questionable ROI measurement.",
                  "Significant executive time spent on logistics rather than strategic planning.",
                  "Short-lived engagement boost that fades within 2-3 weeks.",
                  "Excludes part of your workforce, creating unintentional hierarchies.",
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
                  "Reduce team-building costs by 70% while increasing frequency of connection.",
                  "Free executive time from logistics to focus on participation and leadership.",
                  "Maintain consistent engagement through regular, meaningful interactions.",
                  "Create equal access for all team members regardless of location or role.",
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
            image={"/images/remote-first.webp"}
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
            image={"/images/teamup-company-all-hands.webp"}
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
            title="Workplace communication platforms"
            titleClassName="font-medium max-w-[440px] text-2xl lg:text-4xl"
            image={"/images/slack-fatigue.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Text-based messaging lacks the impact needed for meaningful leadership presence.",
                  "Difficult to measure if important communications are actually reaching teams.",
                  "Creates information overload without clear prioritization.",
                  "Executive messages get lost in the noise of day-to-day.",
                ]}
              />
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-2xl lg:text-4xl"
            image={"/images/teamup-sailboat-retrospective.webp"}
            description={
              <ProsConsList
                type="pros"
                className="mt-6"
                items={[
                  "Maintain authentic leadership presence through immersive environments.",
                  "Track engagement with leadership messages through interaction analytics.",
                  "Create tiered communication spaces that signal information importance.",
                  "Deliver high-impact communications that stand out from routine messaging.",
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
          title="Town hall meetings where everyone feels seen"
          image={"/images/auditorium-hero.webp"}
          reverse={true}
          description="Host a company-wide town hall meeting in the auditorium and let your employees ask questions to the CEO or other CXOs in a casual and engaging environment."
          cta={{
            variant: "text",
            children: "Take a look at our Auditorium",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/auditorium"),
          }}
        />
        <InfoPiece
          title="Ice breakers that won't feel awkward"
          image={"/images/campfire-hero.webp"}
          description="Use the Campfire or This or that spaces to break the ice in a fun and not invasive way that will help your employees feel more connected."
          cta={{
            variant: "text",
            children: "Check out our Campfire",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/campfire"),
          }}
        />
        <InfoPiece
          title="Build real teamwork skills through shared challenges and laughter"
          image={"/images/farmyard-hero.webp"}
          description="No more awkward and ineffective online team-building events. Use our built-in activities to organize quick team games that will help you build teamwork and collaboration."
          reverse={true}
          cta={{
            variant: "text",
            children: "See how The Farmyard works",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/the-farmyard"),
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
        text="Start increasing your ROI with fun and strong company culture"
        buttonText="Request access"
      />
    </div>
  );
}

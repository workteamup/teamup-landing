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

export default function PlanningPage() {
  return (
    <div>
      <Hero
        preTitle="The planning space"
        preTitleClassName="text-indigo-500"
        title="Vote secretly, reveal in unity"
        titleClassName="max-w-[1200px] text-indigo-900"
        subtitle="Vote independently until consensus appears in physical form."
        subtitleClassName="max-w-[720px] text-indigo-700"
        buttons={[
          {
            variant: "primary",
            size: "xl",
            children: "Create a meeting in the Planning space",
            onClick: () =>
              window.open("https://app.teamup.works/demo/planning", "_blank"),
          },
          /*{ variant: "tertiary", size: "md", children: "Learn More" },*/
        ]}
        image="/images/planning-hero.webp"
        bgClassName="bg-indigo-50"
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="Planning poker was always clunky in 2D tools. The Team Up! Planning space turned our sprint planning from a chore into an engaging ritual our engineers actually look forward to."
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
        title="Everything you need to reach consensus"
        titleClassName="max-w-[960px] mx-auto"
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-[960px] mx-auto">
          <CheckmarkItem text="Use pre configured voting options" />
          <CheckmarkItem text="Customize the voting options" />
          <CheckmarkItem text="Vote unseen to preserve anonymity" />
          <CheckmarkItem text="Run and step on the platform you want" />
          <CheckmarkItem text="Set different timers for each topic" />
          <CheckmarkItem text="Discuss results and see how results change live" />
        </div>
      </Section>
      <Section
        preTitle="How to use"
        title="Get the best out of the Planning space"
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
            children: "Create your first planning session",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo/planning", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <Steps
          steps={[
            {
              title: "Get your team ready in the Planning space",
              description:
                "Create customized 3D environments that reflect your company culture and facilitate different types of interactions - from casual break rooms to focused meeting spaces.",
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/create-room-planning.webm",
            },
            {
              title: "Step into the moderator platform",
              description:
                "Invite employees to join and customize their avatars. Our guided onboarding ensures everyone feels comfortable navigating the virtual space.",
              image: "/images/planning-step-platform.webp",
            },
            {
              title:
                "Configure the topic to vote, options and timers and run the voting",
              description:
                "Start with pre-built templates for team building, all-hands meetings, or casual social events. Track engagement metrics to measure impact.",
              image: "/images/planning-configure-vote.webp",
            },
            {
              title: "Run and jump to reach the option you want",
              description:
                "Use analytics to identify what works best for your team. Expand usage across departments while maintaining consistent experiences.",
            },
            {
              title: "See the results, discuss them and see how they change",
              description:
                "Use analytics to identify what works best for your team. Expand usage across departments while maintaining consistent experiences.",
              image: "/images/planning-results.webp",
            },
          ]}
        />
      </Section>
      <Section
        preTitle="Benefits"
        title="What the Planning space gives you"
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
            children: "Create your first planning session",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/demo/planning", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <InfoElement
            title="Fun voting sessions"
            description="Voting sessions will never be a boring experience again that feels like a waste of time."
          />
          <InfoElement
            title="More interactive and engaging"
            description="Get the team more engaged by making them move around the space instead of just selecting options."
          />
          <InfoElement
            title="Faster and more efficient"
            description="Get the results faster and more efficiently by making the voting process more interactive."
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
            onClick: () => {
              window.open("https://app.teamup.works/signup", "_blank");
            },
          },
          {
            variant: "secondary",
            children: "Create your first planning session",
            size: "xl",
            onClick: () => {
              window.open("https://app.teamup.works/demo/planning", "_blank");
            },
          },
        ]}
        buttonsPosition="bottom"
      >
        <InfoPiece
          title="Sprint planning"
          image={"/images/planning-poker-2.webp"}
          reverse={true}
          description="Conduct bias-free estimation with the anonymous voting platforms, allowing team members to make independent judgments before revealing collective results on the central display."
          cta={{
            variant: "text",
            children: "Create a Sprint planning meeting",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Strategic planning meetings"
          image={"/images/hybrid-meetings-2.webp"}
          description="Visualize priorities and reach consensus through the private voting system, ensuring decisions reflect honest opinions rather than hierarchical influence."
          cta={{
            variant: "text",
            children: "Create a strategic planning meeting",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Feedback gathering sessions"
          image={"/images/poll.webp"}
          description="Collect candid team input on initiatives or ideas using the anonymous platform voting system, encouraging authentic responses free from peer pressure."
          reverse={true}
          cta={{
            variant: "text",
            children: "Create a feedback gathering meeting",
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

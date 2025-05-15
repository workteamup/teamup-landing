"use client";

import Hero from "./new-components/hero";
import Section from "./new-components/section";
import SimpleStartSection from "./new-components/simple-start-section";
import InfoPiece from "./new-components/info-piece";
import Image from "next/image";
import InfoElement from "./new-components/info-element";
import Steps from "@/app/new-components/steps";
import ClosingCTA from "@/app/new-components/closing-cta";
import ChecklistElement from "@/app/new-components/checklist-element";
import RoleCard from "@/app/new-components/role-card";
import CheckmarkItem from "@/app/new-components/checkmark-item";
import LogoSlider from "@/app/new-components/logo-slider";
import CTA from "@/app/new-components/cta";
import TeamUpMonth from "@/app/new-components/teamup-month";
import ProsConsList from "./new-components/pros-cons-list";
import { DollarSign, Users, BarChart, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero
        preTitle="The #1 solution for a connected workforce"
        preTitleClassName="text-purple-500"
        title="Boost engagement, strengthen culture and reduce turnover"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Transform routine interactions into opportunities for connection that drive business results"
        subtitleClassName="max-w-[720px] text-purple-700"
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
        video="https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/teamup-intro-old.webm"
        videoAutoplay={true}
        videoControls={false}
        bgClassName="bg-purple-50"
      />
      <Section
        title="Join the 100+ companies that are benefitting from Team Up!"
        titleClassName="max-w-[960px] text-2xl lg:text-5xl font-medium"
        bgClassName=""
        containerClassName=""
        className="overflow-hidden w-full mx-auto"
        buttons={[
          {
            variant: "primary",
            children: "Request access",
            size: "xl",
          },
        ]}
        buttonsPosition="top"
        show={false}
      >
        <LogoSlider />
      </Section>
      <Section
        preTitle="How we solve your pains"
        title="Turning workplace challenges into opportunities"
        bgClassName=""
        className="overflow-hidden max-w-[1600px] mx-auto"
      >
        <InfoPiece
          tag="Employee turnover"
          title="Keep your best talent"
          description="Team Up! creates meaningful bonds that make people want to stay, fostering belonging through shared experiences regardless of where they work."
          cta={{
            children: "Employee turnover solutions",
            href: "/solutions/for-employee-turnover",
          }}
          image={"/images/employee-turnover.webp"}
        />

        <InfoPiece
          tag="Employee disengagement"
          title="Reignite team passion"
          description="Transform routine interactions into immersive experiences that capture attention, spark joy and, and build collaborative skills that drive results."
          cta={{
            children: "Employee disengagement solutions",
            href: "/solutions/for-employee-disengagement",
          }}
          image={"/images/employee-engagement.webp"}
          reverse={true}
        />

        <InfoPiece
          tag="Workplace disconnection"
          title="Bridge the human connection gap"
          description="Create a sense of shared presence and spontaneous interaction that transforms relation ships in any work environment."
          cta={{
            children: "Workplace disconnection solutions",
            href: "/solutions/for-remote-disconnection",
          }}
          image={"/images/bridge-gap.webp"}
        />
      </Section>
      <Section
        preTitle="Our spaces"
        title="Purpose-built environments for every team need"
        titleClassName="max-w-[1200px]"
        bgClassName=""
        className="overflow-hidden max-w-[1600px] mx-auto"
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
          tag="Engagement"
          title="Spark conversation and foster connection"
          image={"/images/campfire-thisorthat-debate.webp"}
          reverse={true}
          description={
            <div className="space-y-3">
              <div>
                <h3 className="text-sm lg:text-base font-medium text-purple-600">
                  Campfire
                </h3>
                <p className="text-sm lg:text-base font-normal text-dark-space">
                  A forest setting with conversation-starter cards perfect for
                  team bonding and casual discussions.
                </p>
              </div>
              <div>
                <h3 className="text-sm lg:text-base font-medium text-purple-600">
                  This or that
                </h3>
                <p className="text-sm lg:text-base font-normal text-dark-space">
                  Reveal team dynamics through quick-fire choice games that
                  spark conversation and connection.
                </p>
              </div>
              <div>
                <h3 className="text-sm lg:text-base font-medium text-purple-600">
                  Debate room
                </h3>
                <p className="text-sm lg:text-base font-normal text-dark-space">
                  Moderated discussion environment with timed speaking platforms
                  for structured conversations.
                </p>
              </div>
            </div>
          }
        />

        <InfoPiece
          tag="Work"
          title="Transform routine collaboration into interactive experiences"
          image={"/images/auditorium-retrospective-planning.webp"}
          description={
            <div className="space-y-3">
              <div>
                <h3 className="text-sm lg:text-base font-medium text-purple-600">
                  Planning
                </h3>
                <p className="text-sm lg:text-base font-normal text-dark-space">
                  Visualize progress and build consensus with interactive voting
                  platforms.
                </p>
              </div>
              <div>
                <h3 className="text-sm lg:text-base font-medium text-purple-600">
                  Sailboat retrospective
                </h3>
                <p className="text-sm lg:text-base font-normal text-dark-space">
                  Navigate team improvement with a visual framework that
                  transforms abstract feedback into actionable insights.
                </p>
              </div>
              <div>
                <h3 className="text-sm lg:text-base font-medium text-purple-600">
                  Auditorium
                </h3>
                <p className="text-sm lg:text-base font-normal text-dark-space">
                  Present with impact using interactive voting platforms that
                  visualize real-time feedback.
                </p>
              </div>
            </div>
          }
        />
        <InfoPiece
          tag="Fun"
          title="Build real teamwork skills through shared challenges and laughter"
          image={"/images/connect4-field-lava-farmyard.webp"}
          description={
            <div className="space-y-3">
              <div>
                <h3 className="text-sm lg:text-base font-medium text-purple-600">
                  Floor is lava
                </h3>
                <p className="text-sm lg:text-base font-normal text-dark-space">
                  Bond through shared challenge as teammates cheer each other
                  through an obstacle course of hilarious fails.
                </p>
              </div>
              <div>
                <h3 className="text-sm lg:text-base font-medium text-purple-600">
                  Connect 4
                </h3>
                <p className="text-sm lg:text-base font-normal text-dark-space">
                  Blend strategy with skill in a basketball-powered twist on the
                  classic game.
                </p>
              </div>
              <div>
                <h3 className="text-sm lg:text-base font-medium text-purple-600">
                  The farmyard
                </h3>
                <p className="text-sm lg:text-base font-normal text-dark-space">
                  Steal, defend, and strategize in a team competition that
                  teaches resource management through play.
                </p>
              </div>
              <div>
                <h3 className="text-sm lg:text-base font-medium text-purple-600">
                  Football field
                </h3>
                <p className="text-sm lg:text-base font-normal text-dark-space">
                  Score team goals in a competitive environment that gamifies
                  performance tracking.
                </p>
              </div>
            </div>
          }
          reverse={true}
        />
      </Section>
      <Section
        preTitle="Benefits"
        title="Why you have to start using Team Up!"
        titleClassName="max-w-[820px]"
        buttons={[
          {
            variant: "primary",
            children: "Request access",
            size: "xl",
          },
          {
            variant: "secondary",
            children: "Create your first meeting room now",
            size: "xl",
          },
        ]}
        buttonsPosition="bottom"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1400px] mx-auto gap-x-12 gap-y-12">
          <ChecklistElement
            iconSrc={<DollarSign className="w-12 h-12 text-purple-600" />}
            title="Reduce costs, increase returns"
            titleClassName="min-h-[64px] md:min-h-[64px]"
            items={[
              "Enhance event effectiveness while reducing travel and venue costs.",
              "Cut turnover costs by 30% through improved team connection and engagement.",
              "Reduce the $400 billion lost annually to unproductive meetings with engaging, purpose-built spaces.",
            ]}
          />
          <ChecklistElement
            iconSrc={<Users className="w-12 h-12 text-purple-600" />}
            title="Build a culture that attracts and retains talent"
            titleClassName="min-h-[64px] md:min-h-[64px]"
            items={[
              "Create consistent team experiences that build lasting relationships.",
              "Foster spontaneous interactions that drives innovation and problem-solving.",
              "Develop shared memories and inside jokes that strengthen team identity.",
              "Build soft skills through play that transfer directly to work projects.",
            ]}
          />
          <ChecklistElement
            iconSrc={<BarChart className="w-12 h-12 text-purple-600" />}
            title="Better ways of working together"
            titleClassName="min-h-[64px] md:min-h-[64px]"
            items={[
              "Increase meeting participation by 45% through immersive environments.",
              "Imrpove information retention by 40% compared to traditional meetings.",
              "Enhance cross-team collaboration by 38% through shared experiences.",
              "Maintain culture continuity across any workplace model (in-office, hybrid, remote)",
            ]}
          />
        </div>
      </Section>
      <CTA
        mainClaim="Start creating a culture that attracts and retains talent"
        description="Join hundreds of companies improving their team culture with Team Up!"
        buttons={[
          {
            children: "Request access",
            variant: "primary",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
          {
            children: "Contact sales",
            variant: "tertiary",
            size: "xl",
            onClick: () => (window.location.href = "/contact"),
          },
        ]}
      />
      <Section
        preTitle="Who's it for?"
        title="Team Up! works for companies like yours"
        bgClassName="bg-white"
        containerClassName="max-w-[1600px] mx-auto"
      >
        <InfoPiece
          tag="Startups"
          title="Build culture from day one"
          description="Create a strong foundation for your growing team with spaces that foster collaboration and connection."
          cta={{
            variant: "primary",
            children: "Learn more",
            size: "lg",
          }}
          image={"/images/startups.webp"}
        />
        <InfoPiece
          tag="Enterprise"
          title="Scale connection across locations"
          description="Break down silos and create consistent experiences for distributed teams at scale."
          cta={{
            variant: "primary",
            children: "Learn more",
            size: "lg",
          }}
          image={"/images/enterprises.webp"}
          reverse={true}
        />
        <InfoPiece
          tag="Remote-first"
          title="Create meaningful connections"
          description="Transform virtual interactions into engaging experiences that build trust and camaraderie."
          cta={{
            variant: "primary",
            children: "Learn more",
            size: "lg",
          }}
          image={"/images/remote-first.webp"}
        />
        <InfoPiece
          tag="Hybrid"
          title="Bridge the physical-digital divide"
          description="Create equal experiences for in-office and remote team members with seamless integration."
          cta={{
            variant: "primary",
            children: "Learn more",
            size: "lg",
          }}
          image={"/images/hybrid.webp"}
          reverse={true}
        />
      </Section>

      <Section
        preTitle="Features"
        title="Everything you need to connect your teams"
        titleClassName="max-w-[960px] mx-auto"
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="overflow-hidden"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-4 lg:gap-y-8 max-w-[960px] mx-auto">
          <CheckmarkItem text="3D space" />
          <CheckmarkItem text="Voice chat" />
          <CheckmarkItem text="Text chat" />
          <CheckmarkItem text="Screen sharing" />
          <CheckmarkItem text="Reactions" />
          <CheckmarkItem text="Activities" />
          <CheckmarkItem text="Meeting points" />
          <CheckmarkItem text="Timers" />
          <CheckmarkItem text="Browser-based" />
          <CheckmarkItem text="Plug and play" />
          <CheckmarkItem text="Voting" />
          <CheckmarkItem text="Avatar personalization" />
          <CheckmarkItem text="Google integration" />
          <CheckmarkItem text="Whiteboard" />
        </div>
      </Section>

      <Section
        title="Gaming inspired features that transform work"
        titleClassName="max-w-[960px] lg:text-6xl font-medium"
        bgClassName=""
        className="overflow-hidden max-w-[1600px] mx-auto"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[960px] mx-auto">
          <InfoElement
            imageSrc="/images/immersive-3d-env.webp"
            title="Immersive 3D environments"
            description="Purpose-built interactive spaces with everything you need that create natural conversation impossible in traditional meetings."
          />
          <InfoElement
            imageSrc="/images/interactive-team-games.webp"
            title="Interactive team games"
            description="Turn passive team building into active play that build real-world skills in communication, strategy, and collaboration."
          />
          <InfoElement
            imageSrc="/images/versatile-room-types.webp"
            title="Versatile room types"
            description="Instant collaborations, scheduled meetings, permanent hangouts, or large eventos. The right space for every team need."
          />
          <InfoElement
            imageSrc="/images/custom-branded-spaces.webp"
            title="Custom branded spaces"
            description="Digital environments that showcase your culture and brand, impressing clients and strengthening team identity."
          />
        </div>
      </Section>

      <Section
        preTitle="Roles"
        title="Every role gets something out of Team Up!"
        containerClassName="py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1600px] mx-auto px-8 h-full">
          <RoleCard
            imageSrc="/images/avatar-cxo.webp"
            title="Team Up! for CXOs"
            containerClassName="w-full h-full"
            href="/solutions/for-cxos"
          />
          <RoleCard
            imageSrc="/images/avatar-hr.webp"
            title="Team Up! for HR"
            containerClassName="w-full h-full"
            href="/solutions/for-hr"
          />
          <RoleCard
            imageSrc="/images/avatar-manager.webp"
            title="Team Up! for Managers"
            containerClassName="w-full h-full"
            href="/solutions/for-managers"
          />
          <RoleCard
            imageSrc="/images/avatar-employee.webp"
            title="Team Up! for Employees"
            containerClassName="w-full h-full"
            href="/solutions/for-employees"
          />
        </div>
      </Section>
      <CTA
        mainClaim="Ready to transform your company culture?"
        description="Join hundred of companies improving their company culture with Team Up!"
        buttons={[
          {
            children: "Request access",
            variant: "primary",
            size: "xl",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          },
          {
            children: "Contact sales",
            variant: "tertiary",
            size: "xl",
            onClick: () => (window.location.href = "/contact"),
          },
        ]}
      />
      <Section
        preTitle="Use cases"
        title="Team Up! enhances every online interaction"
        bgClassName="bg-white"
        containerClassName="max-w-[1600px] mx-auto"
      >
        <InfoPiece
          title="Sprint planning"
          description="Transform estimation into an engaging activity where team members physically move to voting platforms in our Planning space, eliminating groupthink while making consensus visible."
          cta={{
            variant: "text",
            children: "See our Planning space",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/planning"),
          }}
          image={"/images/teamup-sprint-planning.webp"}
        />
        <InfoPiece
          title="Team retrospectives"
          description="Navigate improvement discussions in our Sailboat space where teams place feedback on visual boards representing winds (what's helping), anchors (what's holding back), and more."
          cta={{
            variant: "text",
            children: "Check our Sailboat Retrospective space",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              (window.location.href = "/spaces/sailboat-retrospective"),
          }}
          image={"/images/teamup-sailboat-retrospective.webp"}
          reverse={true}
        />
        <InfoPiece
          title="Company All-hands"
          description="Host engaging company meetings in our Auditorium where employees can vote with their avatars, ask questions, and break into themed discussion rooms."
          cta={{
            variant: "text",
            children: "Check our Auditorium",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/auditorium"),
          }}
          image={"/images/teamup-company-all-hands.webp"}
        />
        <InfoPiece
          title="New hire onboarding"
          description="Welcome new team members with interactive tours of your custom branded space, followed by icebreaker games that create natural connections with the team."
          cta={{
            variant: "text",
            children: "Check our Campfire",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/campfire"),
          }}
          image={"/images/teamup-new-hire.webp"}
          reverse={true}
        />
        <InfoPiece
          title="Remote team building"
          description="Schedule regular competitive games in our Floor is Lava or Connect 4 spaces where colleagues build lasting relationships through shared experiences."
          cta={{
            variant: "text",
            children: "Check our Farmyard space",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/campfire"),
          }}
          image={"/images/teamup-remote-team-building.webp"}
        />
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
            title="Annual team building events"
            titleClassName="font-medium max-w-[360px] text-2xl lg:text-4xl"
            image={"/images/traditional-team-building.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "One-off events with little lasting impact.",
                  "High per-attendee costs ($1.000+ for travel and venues)",
                  "Excludes remote team members or creates logistical challenges",
                  "Benefits fade within weeks of the event",
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
                  "Regular, low-cost virtual team building integrated into workflow",
                  "Accessible to all team members regardless of location",
                  "Progressive relationship building through consistent interaction",
                  "Measurable improvement in team metrics throughout the year",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Daily stand-up meetings"
            titleClassName="font-medium max-w-[360px] text-2xl lg:text-4xl"
            image={"/images/traditional-daily-standup.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Video fatigue from grid layouts",
                  "Passive participation with cameras off",
                  "Difficult to visualize progress",
                  "Oftern run overtime with tangents",
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
                  "Engaging 3D environment with avatar movement",
                  "Physical representation of project status",
                  "Spatial audio for natural conversation flow",
                  "Structured format that keeps meetings on track",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Company All-hands meetings"
            titleClassName="font-medium max-w-[440px] text-2xl lg:text-4xl"
            image={"/images/traditional-all-hands.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "One-way information delivery",
                  "Limited audience participation",
                  "Difficult to measure engagement",
                  "Low retention of information presented",
                ]}
              />
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-2xl lg:text-4xl"
            image={"/images/teamup-all-hands.webp"}
            description={
              <ProsConsList
                type="pros"
                className="mt-6"
                items={[
                  "Interactive presentation environment.",
                  "Real-time feedback through voting platforms.",
                  "Engaging breakout discussions in themed spaces.",
                  "Data on participation and engagement.",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Remote onboarding"
            titleClassName="font-medium max-w-[440px] text-2xl lg:text-4xl"
            image={"/images/traditional-onboarding.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Impersonal video calls and slide presentations.",
                  "Overwhelming document dumps.",
                  "Slow integration into team culture.",
                  "Limited relationship building opportunities.",
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
                  "Immersive company culture experience.",
                  "Interactive learning through spatial navigation.",
                  "Natural social interactions in dedicated spaces.",
                  "Accelerated team bonding through structured activities.",
                ]}
              />
            }
            reverse={true}
          />
        </div>
      </Section>
      {/*<Section
        title="What a month with Team Up! looks like"
        titleClassName="max-w-[1200px]"
        subtitle="Click on the meetings to see the space used"
        bgClassName=""
        className="overflow-hidden max-w-[1600px] mx-auto"
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
        <TeamUpMonth />
      </Section>*/}
      <Section
        preTitle="Contact"
        title="Want to know more about Team Up!?"
        subtitle="Let's discuss how Team Up! can solve your specific challenges."
      >
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <script src="https://embed.ycb.me"	async="true"	data-domain="teamup-ignacio"	data-content="all"	data-displaymode="light"></script>
            `,
          }}
        />
      </Section>
      <ClosingCTA
        text="Start creating a company culture that works"
        buttonText="Request access"
      />
    </div>
  );
}

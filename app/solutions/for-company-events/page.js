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

export default function ForCompanyEventsPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for company events"
        preTitleClassName="text-purple-500"
        title="Host events that bring everyone together"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Team Up! makes large gatherings engaging, scalable, and effortless with immersive 3D environments that feel like shared experiences."
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
        title="Join the 100+ companies using Team Up! for online events"
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
            title: "Connection",
            description:
              "Large events unite teams and reinforce culture—make them memorable with immersive 3D spaces that create shared experiences.",
          },
          {
            title: "Engagement",
            description:
              "Keep attendees active, not passive, with interactive 3D features that encourage participation and prevent digital disengagement.",
          },
          {
            title: "Scalability",
            description:
              "Host hundreds without the cost or logistical hassle of physical venues while maintaining the feeling of a significant shared experience.",
          },
        ]}
        cta={{
          children: "Have better online events",
          onClick: () =>
            window.open("https://app.teamup.works/signup", "_blank"),
        }}
      />
      <Section
        preTitle="The problem in numbers"
        title="See how poorly managed events can affect your company"
        bgClassName="bg-white"
        containerClassName="max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NumberElement
            number={1000}
            prefix="$"
            suffix="+"
            description="Physical events cost companies $1,000+ per attendee, with 40% of budget spent on venue and travel. "
          />
          <NumberElement
            number={80}
            suffix="%"
            description="80% of webinar attendees disengage within 10 minutes when passive viewing is the only participation method."
          />
          <NumberElement
            number={30}
            suffix="%"
            description="Companies with regular team events see 30% higher retention rates and 25% better cross-team collaboration."
          />
        </div>
      </Section>
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="Team Up! made our 500-person global all-hands feel intimate and interactive. The 3D auditorium with breakout spaces created genuine connections across our international teams that we never achieved with traditional webinar platforms."
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <InfoElement
            title="Diverse spaces"
            description="Choose from our Auditorium, Campfire, or custom spaces to create the perfect atmosphere for your specific event."
          />
          <InfoElement
            title="Breakout rooms"
            description="Create small groups for networking or discussions in connected 3D spaces that maintain the event's cohesive feel."
          />
          <InfoElement
            title="Multi-topic events"
            description="Have different rooms for different topics so attendees can move between them as they please."
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
            title="Company All-hands"
            titleClassName="font-medium max-w-[360px] text-2xl lg:text-4xl"
            image={"/images/traditional-all-hands.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "One-way communication with limited audience participation.",
                  "Questions submitted via chat get overlooked or ignored.",
                  "Difficult to gauge audience reactions and engagement.",
                  "Breakout rooms feel disconnected from main event.",
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
                  "Interactive auditorium with spatial audio creates presence.",
                  "Physical voting platforms show real-time audience sentiment.",
                  "Visual feedback through avatar and reactions.",
                  "Connected 3D breakout spaces maintain event continuity.",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Video conferences"
            titleClassName="font-medium max-w-[360px] text-2xl lg:text-4xl"
            image={"/images/traditional-daily-standup.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Boring grid of faces or slide presentations.",
                  "Networking limited to awkward chat rooms.",
                  "Speakear has no sense of audience engagement.",
                  "High drop-off reates due to passive experience.",
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
                  "Dynamic 3D venues with real-time audience engagement.",
                  "Natural networking in virtual lounges with spatial audio.",
                  "Speakers can see and interact with audience avatars.",
                  "Interactive elements keep attendes engaged",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Team celebrations"
            titleClassName="font-medium max-w-[440px] text-2xl lg:text-4xl"
            image={"/images/virtual-happy-hour.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Feels forced and artificial on video platforms.",
                  "No sense of shared space or atmosphere.",
                  "Limited activites beyond conversation.",
                  "Early departures due to engagement challenges.",
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
                  "Themed 3D environments create event atmosphere.",
                  "Interactive games and activities for natural bonding.",
                  "Spatial audio enables organic group formation.",
                  "Memorable shared experiences that strengthen culture.",
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
          title="Immersive all-hands meetings"
          image={"/images/auditorium-hero.webp"}
          reverse={true}
          description="Host a company all-hands in our Auditorium with breakout sessions in themed 3D spaces for Q&A and small group discussions that maintain consistent branding and connection."
          cta={{
            variant: "text",
            children: "Start your first all-hands",
            size: "lg",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Interactive virtual conferences"
          image={"/images/virtual-conference.webp"}
          description="Organize a virtual conference with keynote stages, exhibition areas, and networking lounges in a custom 3D campus environment where attendees navigate naturally between spaces."
          cta={{
            variant: "text",
            children: "Start your first virtual conference",
            size: "lg",
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Engaging holiday celebrations"
          image={"/images/connect4-hero.webp"}
          description="Run a holiday party with themed 3D spaces featuring games like Floor is Lava and Connect 4 for cross-team bonding that creates memorable shared experiences despite physical distance."
          reverse={true}
          cta={{
            variant: "text",
            children: "Start your first holiday party",
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
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/request-access.webm",
            },
            {
              title: "Create your company's workspace",
              description:
                "Create a workspace that reflects your company culture and invite your team members to join.",
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/create-workspace.webm",
            },
            {
              title: "Start creating your first event",
              description:
                "Navigate to the event creation page and start by adding your event details.",
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/create-event.webm",
            },
            {
              title: "Configure your event",
              description:
                "Select the type of matching you want (by themed rooms or mixer), spaces for each room,etc. and send the invitations.",
            },
            {
              title: "Enjoy a virtual event that doesn't suck",
              description:
                "When the time comes, enjoy the first virtual event that is really interactive, with a real sense of presence and connection.",
              image: "/images/thisorthat-see-stand.webp",
            },
          ]}
        />
      </Section>
      <Section
        title="Future proof your team"
        titleClassName="max-w-[960px] font-medium"
        subtitle="Blend in-person and virtual attendees in one cohesive 3D environment, adapting to evolving hybrid work models without leaving anyone out."
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

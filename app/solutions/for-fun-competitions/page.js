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

export default function ForFunCompetitionsPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for fun competitions"
        preTitleClassName="text-purple-500"
        title="Turn team building into playtime"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Build team bonds through fun, competitive games in immersive 3D spaces"
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
        title="Join the 100+ companies using Team Up! for fun online competitions"
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
            title: "Morale",
            description:
              "Fun activities reduce burnout and boost happiness by creating positive associations with teammates and work.",
          },
          {
            title: "Teamwork",
            description:
              "Games encourage collaboration in a relaxed 3D setting, building soft skills that transfer directly to work projects.",
          },
          {
            title: "Engagement",
            description:
              "Friendly competition in immersive environments keeps teams motivated and connected across locations and time zones.",
          },
        ]}
        cta={{
          children: "Have fun competitions online",
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
        quote="Team Up! made our 500-person global all-hands feel intimate and interactive. The 3D auditorium with breakout spaces created genuine connections across our international teams that we never achieved with traditional webinars. "
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
            title="Diverse spaces"
            description="Choose from our Auditorium, Campfire, or custom spaces to create the perfect atmosphere for your specific event."
          />
          <InfoElement
            imageSrc="/images/farm.jpg"
            title="Breakout rooms"
            description="Create small groups for networking or discussions in connected 3D spaces that maintain the event's cohesive feel."
          />
          <InfoElement
            imageSrc="/images/auditorium.jpg"
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
                    One-way communication with limited audience participation.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Questions submitted via chat get overlooked or ignored.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Difficult to gauge audience reactions and engagement.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Breakout rooms feel disconnected from main event.
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
                    Interactive auditorium with spatial audio creates presence.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Physical voting platforms show real-time audience sentiment.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Visual feedback through avatar and reactions.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Connected 3D breakout spaces maintain event continuity.
                  </span>
                </li>
              </ul>
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Video conferences"
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
                    Boring grid of faces or slide presentations.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Networking limited to awkward chat rooms.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Speakear has no sense of audience engagement.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    High drop-off reates due to passive experience.
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
                    Dynamic 3D venues with real-time audience engagement.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Natural networking in virtual lounges with spatial audio.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Speakers can see and interact with audience avatars.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Interactive elements keep attendes engaged
                  </span>
                </li>
              </ul>
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Team celebrations"
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
                    Feels forced and artificial on video platforms.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    No sense of shared space or atmosphere.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Limited activites beyond conversation.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Early departures due to engagement challenges.
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
                    Themed 3D environments create event atmosphere.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Interactive games and activities for natural bonding.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Spatial audio enables organic group formation.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Memorable shared experiences that strengthen culture.
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
          title="Immersive all-hands meetings"
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
              image: "/images/campfire.jpg",
            },
            {
              title: "Create your company's workspace",
              description:
                "Create a workspace that reflects your company culture and invite your team members to join.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Start creating your first event",
              description:
                "Navigate to the event creation page and start by adding your event details.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Configure your event",
              description:
                "Select the type of matching you want (by themed rooms or mixer), spaces for each room,etc. and send the invitations.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Enjoy a virtual event that doesn't suck",
              description:
                "When the time comes, enjoy the first virtual event that is really interactive, with a real sense of presence and connection.",
              image: "/images/campfire.jpg",
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

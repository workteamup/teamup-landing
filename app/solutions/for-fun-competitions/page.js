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
        title="What not engaging your employees can cost you"
        titleClassName="max-w-[1200px]"
        bgClassName="bg-white"
        containerClassName="max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NumberElement
            number={60}
            suffix="%"
            description="60% of employees feel disconnected without regular team-building, with remote workers reporting even higher isolation."
          />
          <NumberElement
            number={30}
            suffix="%"
            description="Teams that participate in regular fun activities together show 30% higher morale and 25% better problem-solving capabilities."
          />
          <NumberElement
            number={87}
            suffix="%"
            description="Engaged employees are 87% less likely to leave their companies, with team bonding activities cited as a top engagement factor."
          />
        </div>
      </Section>
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="Our team absolutely loves the games in Team Up! The Farmyard competitions have become the highlight of our week! We've seen improved communication during projects and a 38% increase in cross-department collaboration since we started these regular game sessions."
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
            title="Growing game options"
            description="Floor is lava, Connect 4, Football field, The Farmyard, and more coming."
          />
          <InfoElement
            imageSrc="/images/farm.jpg"
            title="One-click setup"
            description="Launch competitive games with minimal preparation—our 3D environments come pre-configured for immediate fun."
          />
          <InfoElement
            imageSrc="/images/auditorium.jpg"
            title="Flexible formats"
            description="Support both individual and group challenges in 3D spaces that adapt to your team size and specific objectives."
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
            title="Team Trivia Night"
            titleClassName="font-medium max-w-[360px] text-2xl lg:text-4xl"
            image={"/images/trivia-webcam.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Static screen sharing of questions.",
                  "Tedious manual scoring systems.",
                  "Limited interaction between participants",
                  "Technical issues with multiple tools.",
                ]}
              />
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-2xl lg:text-4xl"
            image={"/images/debate-hero.jpg"}
            description={
              <ProsConsList
                type="pros"
                className="mt-6"
                items={[
                  "Interactive auditorium with visual question displays.",
                  "Automated scoring through avatar movement.",
                  "Teams can huddle in spatial audio zones.",
                  "Single platform for all gaming elements.",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Team building games"
            titleClassName="font-medium max-w-[360px] text-2xl lg:text-4xl"
            image={"/images/virtual-team-games.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Expensive facilitators for virtual activites.",
                  "Limited to text-based or video interactions.",
                  "Awkward execution with multiple tools.",
                  "Single-session events with no continuity.",
                ]}
              />
            }
          />
          <InfoPiece
            title="...but with Team Up!"
            titleClassName="font-medium max-w-[400px] text-2xl lg:text-4xl"
            image={"/images/farmyard-hero.webp"}
            description={
              <ProsConsList
                type="pros"
                className="mt-6"
                items={[
                  "Self-guided activities in immersive 3D spaces.",
                  "Physical movement and spatial interaction.",
                  "Integrated platform with all necessary tools.",
                  "Persistent environments for ongoing engagement.",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Virtual happy hour"
            titleClassName="font-medium max-w-[440px] text-2xl lg:text-4xl"
            image={"/images/virtual-happy-hour.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Awkward video call with forced conversation.",
                  "No structure leads to dominant speakers.",
                  "Limited activites beyond talking.",
                  "High dropout rate due to boredom.",
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
                  "Dynamic 3D environments with natural movement.",
                  "Game activities provide structure and focus.",
                  "Spatial audio enables naatural group formation.",
                  "Higher retention through genuine enjoyment.",
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
          title="Knowledge-building trivia"
          image={"/images/auditorium-hero.webp"}
          reverse={true}
          description="Host a virtual trivia night in our Auditorium where teams compete in knowledge challenges, with visual scorekeeping and spatial audio for team huddles that create authentic excitement."
          cta={{
            variant: "text",
            children: "Start your first all-hands",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Team obstacle challenge"
          image={"/images/floor-is-lava-hero.webp"}
          description="Run a relay race in our Floor is Lava environment where teams compete to complete challenges while navigating obstacles, building morale through shared achievements and good-natured laughter."
          cta={{
            variant: "text",
            children: "Start your first virtual conference",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () =>
              window.open("https://app.teamup.works/signup", "_blank"),
          }}
        />
        <InfoPiece
          title="Strategic skill competition"
          image={"/images/connect4-hero.webp"}
          description="Organize team competitions in our Connect 4 space where players must score in basketball hoops to place their pieces, combining physical skill with strategy in a way that levels the playing field for different team members."
          reverse={true}
          cta={{
            variant: "text",
            children: "Start your first holiday party",
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
        subtitle="Team Up! continuously adds new games and challenges based on the latest in game design and team psychology, ensuring your team always has fresh ways to bond."
        subtitleClassName="text-dark-space max-w-[960px]"
        className="overflow-hidden max-w-[1600px] mx-auto"
      />
      <ClosingCTA
        text="Start creating a company culture that works"
        buttonText="Request access"
      />{" "}
    </div>
  );
}

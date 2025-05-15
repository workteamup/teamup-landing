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

export default function ForEmployeesPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for employees"
        preTitleClassName="text-purple-500"
        title="Make work feel like play"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Team Up! brings fun, connection and growth to your workday with 3D virtual games and social spaces that transform remote work"
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
            children: "Create your first meeting room",
            onClick: () =>
              window.open("https://app.teamup.works/demo", "_blank"),
          },
        ]}
        bgClassName="bg-purple-50"
      />
      <Section
        title="Join the 1000+ employees taking advantage of using Team Up!"
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
        show={false}
      >
        <LogoSlider />
      </Section>
      <SimpleStartSection
        title="How Team Up! helps employees"
        titleClassName="max-w-[480px]"
        features={[
          {
            title: "Connect with your team",
            description:
              "Chat with colleagues in virtual 3D cafeterias or play interactive games during breaks to combat isolation and build relationships.",
          },
          {
            title: "Meaningful relationships at work",
            description:
              "Unwind with casual hangouts and team activities in immersive environments that fit your schedule without extending your workday.",
          },
          {
            title: "A better place to grow",
            description:
              "Access mentorship and skill-building opportunities in relaxed 3D settings that make learning feel natural and engaging.",
          },
        ]}
        cta={{
          children: "Create your first meeting room",
          onClick: () => window.open("https://app.teamup.works/demo", "_blank"),
        }}
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="Working remotely was isolating me from my team until we started using Team Up! Now I actually look forward to our Farmyard competitions and coffee break chats. I've made real friendships with colleagues I've never met in person, and work feels fun again. It's the perfect balance of social connection without feeling forced."
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
              window.open("https://app.teamup.works/demo", "_blank"),
          },
        ]}
        buttonsPosition="bottom"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <InfoElement
            title="Virtual games"
            description="Enjoy trivia, escape rooms, obstacle courses lik The Floor is -lava, and more with your team in fully interactive 3D environments."
          />
          <InfoElement
            title="Personal avatars"
            description="Customize your 3D avatar and virtual desk to express your personality and be recognized by teammates."
          />
          <InfoElement
            title="Social hubs"
            description="Drop into casual 3D rooms like our Campfire for coffee breaks or quick chats that feel  like real-world interactions."
          />
        </div>
      </Section>
      <Section
        preTitle="The problem in numbers"
        title="See how disconnection affects your colleagues"
        bgClassName="bg-white"
        containerClassName="max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NumberElement
            number={76}
            suffix="%"
            description="76% of remote workers report feelings of isolation and disconnection from their colleagues."
          />
          <NumberElement
            number={45}
            suffix="%"
            description="Remote employees spend 45% less time on informal social interaction, resulting in weaker team relationships and lower job satisfaction."
          />
          <NumberElement
            number={67}
            suffix="%"
            description="67% of remote workers say they miss the spontaneous interactions and water cooler moments of in office work."
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
            image={"/images/traditional-team-building.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Brief connections made during events rarely develop into ongoing relationships.",
                  "Introverts and new team members often feel excluded from established groups.",
                  "Required travel or after-hours scheduling creates work-life balance conflicts.",
                  "Structured activities often feel forced and inauthentic.",
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
                  "Build meaningful relationships through regular, organic interactions.",
                  "Create inclusive spaces where everyone can participate comfortably at their own pace.",
                  "Join team activities during regular work hours without travel requirements.",
                  "Engage in activities that feel natural and enjoyable rather than mandatory.",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Video conferencing for daily interactions"
            titleClassName="font-medium max-w-[360px] text-2xl lg:text-4xl"
            image={"/images/remote-first.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Creates isolation with limited opportunities for spontaneous conversations.",
                  '"Always-on camera" expectations create anxiety and presentation fatigue.',
                  "No equivalent to casual office interactions that build relationships.",
                  "Difficulty expressing personality or individuality in grid-based interfaces.",
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
                  "Move around virtual spaces and naturally encounter colleagues for spontaneous chats.",
                  "Interact through customized avatars that reduce appearance anxiety while maintaining presence.",
                  "Join virtual break rooms and social areas that recreate and social areas that recreate the casual office experience.",
                  "Express your personality through customizable avatars and personal spaces.",
                ]}
              />
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Communication channels"
            titleClassName="font-medium max-w-[440px] text-2xl lg:text-4xl"
            image={"/images/slack-fatigue.webp"}
            description={
              <ProsConsList
                type="cons"
                className="mt-6"
                items={[
                  "Public channels create performance pressure that discourages authentic sharing.",
                  "Private messages lack the community-building element of group interactions.",
                  "Text-based communication loses nuance and emotional connection.",
                  "Work-focused channels provide no space for the personal sharing that builds trust.",
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
                  "Create zones of interaction with appropriate privacy levels for different conversations.",
                  "Join group activites that build community without putting individuals on the spot.",
                  "Communicate with voice, movement, and visual cues that preserve emotional nuance.",
                  "Access dedicated spaces for personal connection separate from work-focused channels.",
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
          title="Virtual coffee breaks"
          image={"/images/campfire-hero.webp"}
          reverse={true}
          description="Join a virtual coffee chat in our Campfire environment with conversation cards to spark meaningful discussions with colleagues."
          cta={{
            variant: "text",
            children: "See what the Campfire is like",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/campfire"),
          }}
        />
        <InfoPiece
          title="Virtual events"
          image={"/images/auditorium-hero.webp"}
          description="Attend a virtual workshop in our Auditorium to learn new skills in an engaging, relaxed 3D setting with interactive elements."
          cta={{
            variant: "text",
            children: "Check out the Auditorium",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
            onClick: () => (window.location.href = "/spaces/auditorium"),
          }}
        />
        <InfoPiece
          title="Sprint planning sessions"
          image={"/images/planning-hero.webp"}
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
          image={"/images/sailboat-retrospective-hero.webp"}
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
          },
          {
            variant: "secondary",
            children: "Create your first meeting",
            size: "xl",
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
                "Create a meeting room, invite your team and start having engaging and productive meetings.",
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/create-first-meeting.webm",
            },
            {
              title: "Reap the benefits",
              description:
                "Have a healthy work-life balance while staying connected with your colleagues and building relationships that will help you be happier and more productive.",
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

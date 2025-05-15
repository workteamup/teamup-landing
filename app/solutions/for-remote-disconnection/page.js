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

export default function RemoteDisconnectionPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for remote disconnection"
        preTitleClassName="text-purple-500"
        title="Bridge the distance, build real connection"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Combat remote disconnection with Team Up!'s immersive 3D environments that make virtual feel personal"
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          {
            variant: "primary",
            size: "xl",
            children: "Connect your team today",
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
            title: "Remove any feeling of isolation",
            description:
              "Remote workers report feeling 2.5 times more isolated than in-office colleagues, directly impacting their wellbeing and performance.",
          },
          {
            title: "No more miscommunication",
            description:
              "Lack of connection leads to miscommunication, decreased collaboration, and siloed knowledge.",
          },
          {
            title: "Trust that last for ages",
            description:
              "Disconnected teams struggle when building trust, sharing knowledge, and sustaining innovation over time.",
          },
        ]}
        cta={{ children: "Get Started" }}
      />
      <Section
        preTitle="The problem in numbers"
        title="Title under construction"
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
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="Team Up! has made our global team feel like we're all in the same room. The 3D environments create a sense of place that Zoom never could, and we've seen collaboration increase by 40% between our US and European teams."
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
          },
          {
            variant: "secondary",
            children: "Create your first meeting",
            size: "xl",
          },
        ]}
        buttonsPosition="bottom"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoElement
            imageSrc="/images/campfire.jpg"
            title="Save costs on team building"
            description="Replace expensive in-person events with scalable virtual team-building, saving up to 30% on engagement costs while increasing frequency of connection."
          />
          <InfoElement
            imageSrc="/images/farm.jpg"
            title="Increase productivity of your workforce"
            description="Increase team ouput by 20% with 3D environments that enhance collaboration, communication and cross-team innovation."
          />
          <InfoElement
            imageSrc="/images/auditorium.jpg"
            title="Boost retention at your company"
            description="Reduce turnover and recruiting expenses by fostering a loyal, engaged workforce with regular interactive experiences."
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
          },
          {
            variant: "secondary",
            children: "Create your first meeting",
            size: "xl",
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
          title="Spark conversation and foster connection"
          image={"/images/campfire-thisorthat-debate.webp"}
          reverse={true}
          description="A forest setting with conversation-starter cards perfect for
          team bonding and casual discussions."
          cta={{
            variant: "primary",
            children: "Create a meeting in the Auditorium",
            size: "lg",
          }}
        />
        <InfoPiece
          title="Transform routine collaboration into interactive experiences"
          image={"/images/auditorium-retrospective-planning.webp"}
          description="A forest setting with conversation-starter cards perfect for
          team bonding and casual discussions."
          cta={{
            variant: "primary",
            children: "Create a meeting in the Auditorium",
            size: "lg",
          }}
        />
        <InfoPiece
          title="Build real teamwork skills through shared challenges and laughter"
          image={"/images/connect4-field-lava-farmyard.webp"}
          description="A forest setting with conversation-starter cards perfect for
          team bonding and casual discussions."
          reverse={true}
          cta={{
            variant: "primary",
            children: "Create a meeting in the Auditorium",
            size: "lg",
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
              title: "Set up your virtual workspace",
              description:
                "Create customized 3D environments that reflect your company culture and facilitate different types of interactions - from casual break rooms to focused meeting spaces.",
              video:
                "https://teamup-data.s3.eu-west-3.amazonaws.com/landing-content/videos/request-access.webm",
            },
            {
              title: "Onboard your team members",
              description:
                "Invite employees to join and customize their avatars. Our guided onboarding ensures everyone feels comfortable navigating the virtual space.",
            },
            {
              title: "Launch team activities",
              description:
                "Start with pre-built templates for team building, all-hands meetings, or casual social events. Track engagement metrics to measure impact.",
              image: "/images/campfire-get-topic.webp",
            },
            {
              title: "Scale and optimize",
              description:
                "Use analytics to identify what works best for your team. Expand usage across departments while maintaining consistent experiences.",
              image: "/images/agree-or-disagree.webp",
            },
          ]}
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

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

export default function ForManagersPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for Managers"
        preTitleClassName="text-purple-500"
        title="Lead stronger teams, effortlessly"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Team Up! equips managers with immersive tools to enhance collaboration, foster connection and keep teams motivated regardless of location"
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          { variant: "primary", size: "lg", children: "Request access" },
          { variant: "tertiary", size: "lg", children: "Contact sales" },
        ]}
        bgClassName="bg-purple-50"
      />
      <Section
        title="Join the 100+ CXOs taking advantage of using Team Up!"
        titleClassName="max-w-[960px] text-5xl font-medium"
        bgClassName=""
        containerClassName="py-32 md:px-8 lg:px-12"
        className="mt-16 px-0 overflow-hidden w-full mx-auto"
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
        title="How Team Up! helps Managers"
        titleClassName="max-w-[480px]"
        features={[
          {
            title: "Increase team cohesion",
            description:
              "Strengthen bonds with virtual stand-ups and interactive activities in 3D environments that make remote teamwork feel personal.",
          },
          {
            title: "Increase your communication",
            description:
              "Facilitate spontaneous chats and structured discussions in one platform that mimics in-person conversation dynamics.",
          },
          {
            title: "Boost your team's productivity",
            description:
              "Cut silos and boost output with real-time collaboration tools that make online meetings more engaging and effective.",
          },
        ]}
        cta={{ children: "Get Started" }}
      />
      <Testimonial
        logo="/svg/logos/teamup-logo-dark.svg"
        quote="Team Up!'s 3D environments delivered a 15% productivity boost and a 25% drop in turnover in just six months."
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
        containerClassName="py-32 max-w-[1600px] mx-auto"
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
        preTitle="The problem in numbers"
        title="Title under construction"
        bgClassName="bg-white"
        containerClassName="py-24 max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NumberElement
            number={68}
            suffix="%"
            description="68% of managers report strgguling to keep remote team members engages during virtual meetings."
          />
          <NumberElement
            number={35}
            suffix="%"
            description="Teams with poor virtual collaboration tools experiences 35% longer projection times and 28% more miscommunication incidents."
          />
          <NumberElement
            number={64}
            suffix="%"
            description="64% of team leaders say they lack effective tools to build team culture in distributed work environments."
          />
        </div>
      </Section>
      <Section
        preTitle="Team Up! vs. traditional solutions"
        title="A new way to do things"
        titleClassName="max-w-[1200px]"
        bgClassName=""
        containerClassName="py-32 md:px-8 lg:px-12"
        className="mt-16 px-0 overflow-hidden max-w-[1600px] mx-auto"
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
                    Team cohesion built during events dissipates rapidly once
                    teams return to routine.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Managers have little control over event design to address
                    specific team needs.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Budget limitations often mean choosing between broad
                    participation or deep impact.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    The disconnect between fun activities and actual work
                    challenges limits transfer.
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
                    Maintain team cohesion through regular engaging interactions
                    throughout the year.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Customize activities to address your specific team&apos;s
                    challenges and dynamics.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Run frequent high-impact sessions that fit withint existing
                    team budgets.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Create direct connections between team-building and actual
                    work challenges.
                  </span>
                </li>
              </ul>
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Video conferencing for team collaboration"
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
                    Meeting fatigue severely impacts team engagement and
                    contribution.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Cannot effectively read the room to gauge silent
                    disagreement or confusion.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Limited tools to facilitate collaborative problem-solving
                    during discussions.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Unnatural communication patterns where dominant voices
                    overshadow others.
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
                    Keep teams energized with dynamic meeting environments that
                    reduce fatigue.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Observe spatial dynamics that reveal actual team sentiment
                    and concerns.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Utilize purpose-built spaces for different meeting types
                    (standups, planning, retrospectives).
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Create natural conversation flows with spatial audio and
                    small group interactions.
                  </span>
                </li>
              </ul>
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Project management tools"
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
                    Focus solely on task tracking without the human connection
                    that drives performance.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Create additional work for managers to both track and
                    communicate.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Difficult to use for facilitating meaningful team
                    interactions around the work.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Separate systems for planning, execution, and team building
                    create fragmentation.
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
                    Combine task visualization with team connection in a single
                    environment.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Reduce admin work with automated tracking based on team
                    interactions.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Facilitate engaging, productive discussions around visual
                    project representations.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Unify planning, execution, and team building in cohesive
                    virtual environments.
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
        containerClassName="py-32 md:px-8 lg:px-12"
        className="mt-16 px-0 overflow-hidden max-w-[1600px] mx-auto"
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
        containerClassName="py-24 max-w-[1440px] mx-auto"
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
              image: "/images/campfire.jpg",
            },
            {
              title: "Onboard your team members",
              description:
                "Invite employees to join and customize their avatars. Our guided onboarding ensures everyone feels comfortable navigating the virtual space.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Launch team activities",
              description:
                "Start with pre-built templates for team building, all-hands meetings, or casual social events. Track engagement metrics to measure impact.",
              image: "/images/campfire.jpg",
            },
            {
              title: "Scale and optimize",
              description:
                "Use analytics to identify what works best for your team. Expand usage across departments while maintaining consistent experiences.",
              image: "/images/campfire.jpg",
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

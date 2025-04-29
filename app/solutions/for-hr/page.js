import Hero from "../../new-components/hero";
import Section from "../../new-components/section";
import SimpleStartSection from "../../new-components/simple-start-section";
import NumberElement from "../../new-components/number-element";
import InfoPiece from "../../new-components/info-piece";
import { X, Check } from "lucide-react";
import Image from "next/image";

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
          { variant: "primary", size: "lg", children: "Request access" },
          { variant: "tertiary", size: "lg", children: "Contact sales" },
        ]}
        bgClassName="bg-purple-50"
      />
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
        cta={{ children: "Get Started" }}
      />
      <Section
        preTitle="The problem in numbers"
        title="Title under construction"
        bgClassName="bg-white"
        containerClassName="py-24 max-w-[1440px] mx-auto"
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
                    Massive coordination burden falls on HR teams for minimal
                    sustained impact.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Impossible to measure actual culture-building effectiveness.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Creates logistical nightmares for distributed workforce
                    participation.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Generates resentment when some employees can&apos;t attend
                    due to personal obligations.
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
                    Shift from event coordination to strategic culture-building
                    with ready-to-use templates.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Track precise metrics on participation, engagement, and
                    cultural impact.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Ensure equal access for every employee regardless of
                    location or availability.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Create ongoing culture touchpoints rather than once-a-year
                    events.
                  </span>
                </li>
              </ul>
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Employee engagement surveys"
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
                    Low completion rates (typically under 60%) create incomplete
                    data sets.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Results arrive too late to address emerging cultural issues
                    before they escalate.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    No connection between identification of problems and
                    implementation of solutions.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Survey fatigue leads to increasingly less honest or
                    thoughtful responses.
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
                    Collect behavioral data that doesn&apos;t require active
                    survey completion.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Monitor engagement trends in real-time to catch issues as
                    they emerge.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Directly implement solutions in the same environment where
                    problems are identified.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Gather authentic feedback through observation of natural
                    interactions.
                  </span>
                </li>
              </ul>
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Onboarding processes"
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
                    Expensive to deliver consistent onboarding experience across
                    locations.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    New hires struggle to build authentic connections in
                    remote/hybrid setups.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Cultural values stated in presentations don&apos;t translate
                    to lived experiences.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Difficult to track new hire integration beyond basic
                    checklist completion.
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
                    Deliver consistent, high-quality onboarding experiences
                    regardless of location.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Facilitate natural relationship building between new hires
                    and team members.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Embed company values into interactive experiences rather
                    than static presentations.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">comprobar. </span>
                </li>
              </ul>
            }
            reverse={true}
          />
        </div>
      </Section>
    </div>
  );
}

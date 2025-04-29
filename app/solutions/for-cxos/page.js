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
                    High per-attendee costs (averaging $1.000+) with
                    questionable ROI measurement.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Significant executive time spent on logistics rather than
                    strategic planning.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Short-lived engagement boost that fades within 2-3 weeks.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Excludes part of your workforce, creating unintentional
                    hierarchies.
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
                    Reduce team-building costs by 70% while increasing frequency
                    of connection.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Free executive time from logistics to focus on participation
                    and leadership.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Maintain consistent engagement through regular, meaningful
                    interactions.{" "}
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Create equal access for all team members regardless of
                    location or role.
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
                    Limited analytics on actual engagement levels during
                    critical meetings.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    No effective way to gauge team alignment on strategic
                    initiatives.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Creates communication silos between departments and office
                    locations.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Fails to build the cross-organizational relationships needed
                    for innovation.
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
                    Gain actionable insights into team participation and
                    engagement metrics.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Visualize alignment through interactive voting and feedback
                    mechanisms.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Break down silos with spaces designed for cross-departmental
                    interaction.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Foster innovation through unexpected connections in shared
                    virtual environments.
                  </span>
                </li>
              </ul>
            }
            reverse={true}
          />
        </div>
        <div>
          <InfoPiece
            title="Workplace communication platforms"
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
                    Text-based messaging lacks the impact needed for meaningful
                    leadership presence.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Difficult to measure if important communications are
                    actually reaching teams.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Creates information overload without clear prioritization.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-red-100">
                    <X className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Executive messages get lost in the noise of day-to-day.
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
                    Maintain authentic leadership presence through immersive
                    environments.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Track engagement with leadership messages through
                    interaction analytics.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Create tiered communication spaces that signal information
                    importance.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-1 rounded-full bg-green-100">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-dark-space text-xl">
                    Deliver high-impact communications that stand out from
                    routine messaging.
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

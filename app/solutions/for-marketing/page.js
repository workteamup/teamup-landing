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
import ProsConsList from "../../new-components/pros-cons-list";
import { ArrowRight } from "lucide-react";

export default function ForMarketingPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for marketing"
        preTitleClassName="text-purple-500"
        title="Showcase a culture that wins talent and trust"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Team Up! turns your team into authentic brand ambassadors with engaging 3D virtual experiences worth sharing"
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          { variant: "primary", size: "xl", children: "Request access" },
          { variant: "secondary", size: "xl", children: "Contact sales" },
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
        preTitle="The problem in numbers"
        title="Title under construction"
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
            variant: "text",
            children: "Create a meeting in the Auditorium",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
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
            variant: "text",
            children: "Create a meeting in the Auditorium",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
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
            variant: "text",
            children: "Create a meeting in the Auditorium",
            size: "lg",
            iconRight: <ArrowRight className="w-4 h-4" />,
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

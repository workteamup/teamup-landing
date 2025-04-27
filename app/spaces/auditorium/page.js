import Hero from "../../new-components/hero";
import Section from "../../new-components/section";
import Testimonial from "../../new-components/testimonial";
import CheckmarkItem from "../../new-components/checkmark-item";
import Steps from "../../new-components/steps";

export default function AuditoriumPage() {
  return (
    <div>
      <Hero
        preTitle="The auditorium"
        preTitleClassName="text-blue-500"
        title="Town halls where movement becomes voice"
        titleClassName="max-w-[1200px] text-blue-900"
        subtitle="Turn passive viewers into active participants through movement"
        subtitleClassName="max-w-[720px] text-blue-700"
        buttons={[
          {
            variant: "primary",
            size: "lg",
            children: "Create a meeting in the Auditorium",
          },
          /* { variant: "tertiary", size: "md", children: "View pricing" },*/
        ]}
        extraContent={
          <div className="max-w-[1200px] mx-auto">
            <div
              className=""
              style={{
                position: "relative",
                paddingBottom: "54.13533834586466%",
                height: 0,
                marginTop: "40px",
              }}
            >
              <iframe
                src="https://www.loom.com/embed/98c19c69a60f46778b85332c5b25633f?sid=9b6a175e-fc80-4b7b-8213-fd05ef9c4b1c"
                frameBorder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                className="rounded-[40px]"
              ></iframe>
            </div>
          </div>
        }
        bgClassName="bg-blue-50"
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
        preTitle="Features"
        title="Everything you need to connect your teams"
        titleClassName="max-w-[960px] mx-auto"
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="mt-16 px-0  overflow-hidden max-w-[1600px] mx-auto rounded-[50px]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-16 max-w-[960px] mx-auto">
          <CheckmarkItem text="Advanced AV system with high-quality sound and projection" />
          <CheckmarkItem text="Flexible seating configurations for any event type" />
          <CheckmarkItem text="Professional lighting with customizable presets" />
          <CheckmarkItem text="Interactive voting and feedback systems" />
          <CheckmarkItem text="Real-time analytics for audience engagement" />
          <CheckmarkItem text="Seamless integration with presentation tools" />
        </div>
      </Section>
      <Section
        preTitle="How to use"
        title="Get the best out of the Auditorium"
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
    </div>
  );
}

import Hero from "../../new-components/hero";
import Section from "../../new-components/section";
import SimpleStartSection from "../../new-components/simple-start-section";

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
    </div>
  );
}

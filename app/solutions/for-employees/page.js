import Hero from "../../new-components/hero";
import Section from "../../new-components/section";
import SimpleStartSection from "../../new-components/simple-start-section";
import NumberElement from "../../new-components/number-element";

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
          { variant: "primary", size: "lg", children: "Request access" },
          { variant: "tertiary", size: "lg", children: "Contact sales" },
        ]}
        bgClassName="bg-purple-50"
      />
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
      <Section
        preTitle="The problem in numbers"
        title="Title under construction"
        bgClassName="bg-white"
        containerClassName="py-24 max-w-[1440px] mx-auto"
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
    </div>
  );
}

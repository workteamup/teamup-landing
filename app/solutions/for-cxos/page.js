import Hero from "../../new-components/hero";
import Section from "../../new-components/section";
import SimpleStartSection from "../../new-components/simple-start-section";
import NumberElement from "../../new-components/number-element";

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
    </div>
  );
}

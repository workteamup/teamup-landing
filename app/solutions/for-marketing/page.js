import Hero from "../../new-components/hero";
import Section from "../../new-components/section";
import SimpleStartSection from "../../new-components/simple-start-section";
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
          { variant: "primary", size: "lg", children: "Request access" },
          { variant: "tertiary", size: "lg", children: "Contact sales" },
        ]}
        bgClassName="bg-purple-50"
      />
      <SimpleStartSection
        title="How Team Up! helps marketing teams"
        subtitle="This page is under construction"
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
        preTitle="Our Solutions"
        title="For Marketing"
        subtitle="We provide comprehensive solutions to boost your marketing efforts."
        buttons={[
          { children: "Learn More", href: "/services" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Campaign Management
              </h3>
              <p className="mt-4 text-gray-600">
                Comprehensive campaign management solutions
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Analytics & Insights
              </h3>
              <p className="mt-4 text-gray-600">
                Data-driven marketing analytics and insights
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semib极 text-gray-900">
                Content Strategy
              </h3>
              <p className="mt-4 text-gray-600">
                Effective content strategy development
              </p>
            </div>
          </div>
        }
        buttonsPosition="bottom"
        bgClassName="bg-gradient-to-r from-brand-50 to-brand-100"
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="mt-16 px-0 min-h-screen overflow-hidden max-w-[1600px] mx-auto rounded-[50px]"
      />
    </div>
  );
}

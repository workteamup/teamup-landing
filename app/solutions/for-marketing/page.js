import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

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
        className="mt-16 px-0 rounded-xl min-h-screen overflow-hidden max-w-[1600px] mx-auto rounded-[50px]"
      />
    </div>
  );
}

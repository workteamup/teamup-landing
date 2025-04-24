import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

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
        preTitle="Our Solutions"
        title="For CXOs"
        subtitle="We provide strategic solutions tailored to executive leadership needs."
        buttons={[
          { children: "Learn More", href: "/services" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Strategic Planning
              </h3>
              <p className="mt-4 text-gray-600">
                Comprehensive strategic planning solutions
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Leadership Development
              </h3>
              <p className="mt-4 text-gray-600">
                Executive leadership development programs
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Decision Support
              </h3>
              <p className="mt-4 text-gray-600">
                Data-driven decision support systems
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

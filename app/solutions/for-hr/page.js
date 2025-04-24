import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

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
      <Section
        preTitle="Our Solutions"
        title="For HR"
        subtitle="We provide comprehensive solutions to support and enhance your HR operations."
        buttons={[
          { children: "Learn More", href: "/services" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Talent Management
              </h3>
              <p className="mt-4 text-gray-600">
                Comprehensive talent acquisition and management
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Employee Relations
              </h3>
              <p className="mt-4 text-gray-600">
                Effective employee relations strategies
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                HR Analytics
              </h3>
              <p className="mt-4 text-gray-600">
                Data-driven HR analytics and insights
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

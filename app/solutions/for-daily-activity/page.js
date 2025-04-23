import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function ForDailyActivityPage() {
  return (
    <div>
      <Hero
        preTitle="Solutions"
        preTitleClassName="text-purple-500"
        title="For Daily Activity"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Optimize your daily operations with our solutions"
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          { variant: "primary", size: "md", children: "Request access" },
          { variant: "tertiary", size: "md", children: "Contact sales" },
        ]}
        bgClassName="bg-purple-50"
      />
      <Section
        preTitle="Our Solutions"
        title="For Daily Activity"
        subtitle="We provide efficient solutions to streamline your daily operations."
        buttons={[
          { children: "Learn More", href: "/services" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Task Management
              </h3>
              <p className="mt-4 text-gray-600">
                Efficient task management solutions
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Time Tracking
              </h3>
              <p className="mt-4 text-gray-600">
                Comprehensive time tracking tools
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Productivity
              </h3>
              <p className="mt-4 text-gray-600">
                Tools to boost daily productivity
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

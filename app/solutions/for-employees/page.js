import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function ForEmployeesPage() {
  return (
    <div>
      <Hero
        preTitle="How Team Up! helps employees"
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
      <Section
        preTitle="Our Solutions"
        title="For Employees"
        subtitle="We provide comprehensive solutions to support and empower your workforce."
        buttons={[
          { children: "Learn More", href: "/services" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Career Development
              </h3>
              <p className="mt-4 text-gray-600">
                Comprehensive career development programs
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Work-Life Balance
              </h3>
              <p className="mt-4 text-gray-600">
                Solutions for better work-life balance
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Employee Wellbeing
              </h3>
              <p className="mt-4 text-gray-600">
                Programs to support employee wellbeing
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

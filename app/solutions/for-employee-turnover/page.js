import Hero from "../../new-components/hero";
import Section from "../../new-components/section";
import SimpleStartSection from "../../new-components/simple-start-section";
export default function EmployeeTurnoverPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for employee turnover"
        preTitleClassName="text-purple-500"
        title="Stop employee turnover in its tracks"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Retain your top talent with engaging team-building experiences that foster genuine connection"
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          {
            variant: "primary",
            size: "lg",
            children: "Start reducing turnover today",
          },
        ]}
        bgClassName="bg-purple-50"
      />
      <SimpleStartSection
        title="Why you should care"
        titleClassName="max-w-[480px]"
        features={[
          {
            title: "Stop the hemorrhage before it happens",
            description:
              "High turnover costs companies 1.5-2x an employee's salary in recruitment, onboarding and lost productivity.",
          },
          {
            title: "Maintain a high team morale",
            description:
              "Frequent departures hurt team morale, making it harder for remaining employees to stay motivated and committed.",
          },
          {
            title: "Keep valuable knowledge inside your company",
            description:
              "Losing employees means losing valuable knowledge and institutional memory, delaying projects and innovation.",
          },
        ]}
        cta={{ children: "Get Started" }}
      />
      <Section
        preTitle="Our Solutions"
        title="For Employee Rotation"
        subtitle="We provide comprehensive solutions for effective employee rotation programs."
        buttons={[
          { children: "Learn More", href: "/services" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Rotation Planning
              </h3>
              <p className="mt-4 text-gray-600">
                Strategic employee rotation planning
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Skill Development
              </h3>
              <p className="mt-4 text-gray-600">
                Comprehensive skill development through rotation
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Career Growth
              </h3>
              <p className="mt-4 text-gray-600">
                Enhanced career growth opportunities
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

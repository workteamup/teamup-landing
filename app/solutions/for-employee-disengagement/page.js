import Hero from "../../new-components/hero";
import Section from "../../new-components/section";
import SimpleStartSection from "../../new-components/simple-start-section";
export default function EmployeeDisengagementPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for employee disengagement"
        preTitleClassName="text-purple-500"
        title="Reignite your team's passion"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Combat employee disengagement with Team Up! interactive 3D experiences that transform work into play"
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          {
            variant: "primary",
            size: "lg",
            children: "Boost your team's engagement now",
          },
        ]}
        bgClassName="bg-purple-50"
      />
      <SimpleStartSection
        title="How Team Up! helps CXOs"
        titleClassName="max-w-[480px]"
        features={[
          {
            title: "You can save money on productivity",
            description:
              "Disengaged employees cost companies $450-550 billion annually in lost productivity and innovation.",
          },
          {
            title: "Your employees will never miss a day of work",
            description:
              "Lack of engagement leads to higher absenteeism, presenteeism and eventually turnover.",
          },
          {
            title: "Your company will be more resilient",
            description:
              "Disengaged teams are less innovative, adaptable, and responsive to market changes and customer needs.",
          },
        ]}
        cta={{ children: "Get Started" }}
      />
      <Section
        preTitle="Our Solutions"
        title="For Employee Disengagement"
        subtitle="We provide comprehensive solutions to tackle employee disengagement."
        buttons={[
          { children: "Learn More", href: "/services" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Engagement Analysis
              </h3>
              <p className="mt-4 text-gray-600">
                Comprehensive employee engagement analysis
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Motivation Strategies
              </h3>
              <p className="mt-4 text-gray-600">
                Effective motivation and engagement strategies
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Retention Programs
              </h3>
              <p className="mt-4 text-gray-600">
                Proven employee retention programs
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

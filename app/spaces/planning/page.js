import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function PlanningPage() {
  return (
    <div>
      <Hero
        preTitle="Spaces"
        preTitleClassName="text-indigo-500"
        title="Planning Space"
        titleClassName="max-w-[1200px] text-indigo-900"
        subtitle="Streamline your team's planning and organization"
        subtitleClassName="max-w-[720px] text-indigo-700"
        buttons={[
          { variant: "primary", size: "md", children: "Get Started" },
          { variant: "tertiary", size: "md", children: "Learn More" },
        ]}
        bgClassName="bg-indigo-50"
      />
      <Section
        preTitle="Our Features"
        title="Planning Space"
        subtitle="Our planning space is designed to enhance productivity and collaboration for your team."
        buttons={[
          { children: "View Layout", href: "/spaces" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Task Management
              </h3>
              <p className="mt-4 text-gray-600">
                Organize and track tasks efficiently
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Collaboration Tools
              </h3>
              <p className="mt-4 text-gray-600">
                Real-time collaboration features
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Progress Tracking
              </h3>
              <p className="mt-4 text-gray-600">
                Visualize and monitor project progress
              </p>
            </div>
          </div>
        }
        buttonsPosition="bottom"
        bgClassName="bg-gradient-to-r from-indigo-50 to-indigo-100"
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="mt-16 px-0 rounded-xl min-h-screen overflow-hidden max-w-[1600px] mx-auto rounded-[50px]"
      />
    </div>
  );
}

import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function PlanningPage() {
  return (
    <div>
      <Hero
        preTitle="The planning space"
        preTitleClassName="text-indigo-500"
        title="Vote secretly, reveal in unity"
        titleClassName="max-w-[1200px] text-indigo-900"
        subtitle="Vote independently until consensus appears in physical form."
        subtitleClassName="max-w-[720px] text-indigo-700"
        buttons={[
          {
            variant: "primary",
            size: "lg",
            children: "Create a meeting in the Planning space",
          },
          /*{ variant: "tertiary", size: "md", children: "Learn More" },*/
        ]}
        extraContent={
          <div className="max-w-[1200px] mx-auto">
            <div
              className=""
              style={{
                position: "relative",
                paddingBottom: "54.13533834586466%",
                height: 0,
                marginTop: "40px",
              }}
            >
              <iframe
                src="https://www.loom.com/embed/98c19c69a60f46778b85332c5b25633f?sid=9b6a175e-fc80-4b7b-8213-fd05ef9c4b1c"
                frameBorder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                className="rounded-[40px]"
              ></iframe>
            </div>
          </div>
        }
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

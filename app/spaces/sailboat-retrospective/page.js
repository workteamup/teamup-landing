import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function SailboatRetrospectivePage() {
  return (
    <div>
      <Hero
        preTitle="The sailboat retrospective"
        preTitleClassName="text-teal-500"
        title="Retrospectives that move teams forward"
        titleClassName="max-w-[1200px] text-teal-900"
        subtitle="Turn retrospectives into active journeys through 3D collaboration."
        subtitleClassName="max-w-[720px] text-teal-700"
        buttons={[
          {
            variant: "primary",
            size: "lg",
            children: "Create a meeting in the Sailboat retrospective space",
          },
          /*{ variant: "tertiary", size: "md", children: "Learn More" },*/
        ]}
        bgClassName="bg-teal-50"
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
      />
      <Section
        preTitle="Our Features"
        title="Sailboat Retrospective"
        subtitle="Our sailboat retrospective space is designed to help teams reflect and improve effectively."
        buttons={[
          { children: "View Layout", href: "/spaces" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Visual Framework
              </h3>
              <p className="mt-4 text-gray-600">
                Intuitive sailboat metaphor for retrospectives
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Team Reflection
              </h3>
              <p className="mt-4 text-gray-600">
                Structured approach to team improvement
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Action Planning
              </h3>
              <p className="mt-4 text-gray-600">
                Clear path from reflection to action
              </p>
            </div>
          </div>
        }
        buttonsPosition="bottom"
        bgClassName="bg-gradient-to-r from-teal-50 to-teal-100"
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="mt-16 px-0 rounded-xl min-h-screen overflow-hidden max-w-[1600px] mx-auto rounded-[50px]"
      />
    </div>
  );
}

import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function Connect4Page() {
  return (
    <div>
      <Hero
        preTitle="Connect 4"
        preTitleClassName="text-green-500"
        title="Basketball meets connect 4"
        titleClassName="max-w-[1200px] text-green-900"
        subtitle="Shoot baskets to drop game pieces in this physical twist on a classic"
        subtitleClassName="max-w-[720px] text-green-700"
        buttons={[
          {
            variant: "primary",
            size: "lg",
            children: "Create a meeting in the the Connect 4 space",
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
        bgClassName="bg-green-50"
      />
      <Section
        preTitle="Our Features"
        title="Connect 4 Space"
        subtitle="Experience our interactive Connect 4 area designed for strategic thinking and team bonding."
        buttons={[
          { children: "View Layout", href: "/spaces" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Giant Game Board
              </h3>
              <p className="mt-4 text-gray-600">
                Life-sized Connect 4 for team play
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Strategic Thinking
              </h3>
              <p className="mt-4 text-gray-600">
                Develop problem-solving skills
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Team Building
              </h3>
              <p className="mt-4 text-gray-600">
                Foster collaboration and communication
              </p>
            </div>
          </div>
        }
        buttonsPosition="bottom"
        bgClassName="bg-gradient-to-r from-green-50 to-green-100"
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="mt-16 px-0 rounded-xl min-h-screen overflow-hidden max-w-[1600px] mx-auto rounded-[50px]"
      />
    </div>
  );
}

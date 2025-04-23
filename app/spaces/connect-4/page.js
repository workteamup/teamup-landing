import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function Connect4Page() {
  return (
    <div>
      <Hero
        preTitle="Spaces"
        preTitleClassName="text-green-500"
        title="Connect 4"
        titleClassName="max-w-[1200px] text-green-900"
        subtitle="Engage in strategic thinking and team building with our Connect 4 space"
        subtitleClassName="max-w-[720px] text-green-700"
        buttons={[
          { variant: "primary", size: "md", children: "Book now" },
          { variant: "tertiary", size: "md", children: "View pricing" },
        ]}
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

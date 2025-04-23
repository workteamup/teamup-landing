import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function TheFloorIsLavaPage() {
  return (
    <div>
      <Hero
        preTitle="Spaces"
        preTitleClassName="text-red-500"
        title="The Floor is Lava"
        titleClassName="max-w-[1200px] text-red-900"
        subtitle="Engage in exciting team challenges in our Floor is Lava space"
        subtitleClassName="max-w-[720px] text-red-700"
        buttons={[
          { variant: "primary", size: "md", children: "Book now" },
          { variant: "tertiary", size: "md", children: "View pricing" },
        ]}
        bgClassName="bg-red-50"
      />
      <Section
        preTitle="Our Features"
        title="The Floor is Lava"
        subtitle="Our Floor is Lava space is designed to promote teamwork and problem-solving through exciting challenges."
        buttons={[
          { children: "View Layout", href: "/spaces" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Team Challenges
              </h3>
              <p className="mt-4 text-gray-600">
                Exciting and engaging team activities
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Problem Solving
              </h3>
              <p className="mt-4 text-gray-600">
                Develop critical thinking skills
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Teamwork Focus
              </h3>
              <p className="mt-4 text.json-600">
                Strengthen collaboration and communication
              </p>
            </div>
          </div>
        }
        buttonsPosition="bottom"
        bgClassName="bg-gradient-to-r from-red-50 to-red-100"
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="mt-16 px-0 rounded-xl min-h-screen overflow-hidden max-w-[1600px] mx-auto rounded-[50px]"
      />
    </div>
  );
}

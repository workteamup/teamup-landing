import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function TheFarmyardPage() {
  return (
    <div>
      <Hero
        preTitle="Spaces"
        preTitleClassName="text-yellow-500"
        title="The Farmyard"
        titleClassName="max-w-[1200px] text-yellow-900"
        subtitle="Engage in creative team activities in our farmyard space"
        subtitleClassName="max-w-[720px] text-yellow-700"
        buttons={[
          { variant: "primary", size: "md", children: "Book now" },
          { variant: "tertiary", size: "md", children: "View pricing" },
        ]}
        bgClassName="bg-yellow-50"
      />
      <Section
        preTitle="Our Features"
        title="The Farmyard"
        subtitle="Our farmyard space is designed to foster creativity and team bonding through unique activities."
        buttons={[
          { children: "View Layout", href: "/spaces" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Creative Activities
              </h3>
              <p className="mt-4 text-gray-600">
                Unique team-building exercises
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Relaxing Environment
              </h3>
              <p className="mt-4 text-gray-600">
                Calm and inspiring atmosphere
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Team Bonding
              </h3>
              <p className="mt-4 text-gray-600">
                Strengthen team relationships
              </p>
            </div>
          </div>
        }
        buttonsPosition="bottom"
        bgClassName="bg-gradient-to-r from-yellow-50 to-yellow-100"
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="mt-16 px-0 rounded-xl min-h-screen overflow-hidden max-w-[1600px] mx-auto rounded-[50px]"
      />
    </div>
  );
}

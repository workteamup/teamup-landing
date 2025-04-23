import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function CampfirePage() {
  return (
    <div>
      <Hero
        preTitle="Spaces"
        preTitleClassName="text-orange-500"
        title="Campfire"
        titleClassName="max-w-[1200px] text-orange-900"
        subtitle="Create intimate and collaborative sessions in our campfire space"
        subtitleClassName="max-w-[720px] text-orange-700"
        buttons={[
          { variant: "primary", size: "md", children: "Book now" },
          { variant: "tertiary", size: "md", children: "View pricing" },
        ]}
        bgClassName="bg-orange-50"
      />
      <Section
        preTitle="Our Features"
        title="Campfire Space"
        subtitle="Experience our cozy campfire setting designed for meaningful conversations and team bonding."
        buttons={[
          { children: "View Layout", href: "/spaces" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Intimate Setting
              </h3>
              <p className="mt-4 text-gray-600">
                Perfect for small group discussions
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Cozy Atmosphere
              </h3>
              <p className="mt-4 text-gray-600">
                Warm and inviting environment
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Collaborative Tools
              </h3>
              <p className="mt-4 text-gray-600">
                Equipped with brainstorming aids
              </p>
            </div>
          </div>
        }
        buttonsPosition="bottom"
        bgClassName="bg-gradient-to-r from-orange-50 to-orange-100"
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="mt-16 px-0 rounded-xl min-h-screen overflow-hidden max-w-[1600px] mx-auto rounded-[50px]"
      />
    </div>
  );
}

import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function AuditoriumPage() {
  return (
    <div>
      <Hero
        preTitle="Spaces"
        preTitleClassName="text-blue-500"
        title="Auditorium"
        titleClassName="max-w-[1200px] text-blue-900"
        subtitle="Create impactful presentations and events in our auditorium space"
        subtitleClassName="max-w-[720px] text-blue-700"
        buttons={[
          { variant: "primary", size: "md", children: "Book now" },
          { variant: "tertiary", size: "md", children: "View pricing" },
        ]}
        bgClassName="bg-blue-50"
      />
      <Section
        preTitle="Our Features"
        title="Auditorium Space"
        subtitle="Experience our state-of-the-art auditorium with cutting-edge technology and comfortable seating."
        buttons={[
          { children: "View Layout", href: "/spaces" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Advanced AV System
              </h3>
              <p className="mt-4 text-gray-600">
                High-quality sound and projection systems
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Flexible Seating
              </h3>
              <p className="mt-4 text-gray-600">
                Configurable seating for various event types
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Professional Lighting
              </h3>
              <p className="mt-4 text-gray-600">
                Customizable lighting for different moods
              </p>
            </div>
          </div>
        }
        buttonsPosition="bottom"
        bgClassName="bg-gradient-to-r from-blue-50 to-blue-100"
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="mt-16 px-0 rounded-xl min-h-screen overflow-hidden max-w-[1600px] mx-auto rounded-[50px]"
      />
    </div>
  );
}

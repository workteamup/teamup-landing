import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function AuditoriumPage() {
  return (
    <div>
      <Hero
        preTitle="The auditorium"
        preTitleClassName="text-blue-500"
        title="Town halls where movement becomes voice"
        titleClassName="max-w-[1200px] text-blue-900"
        subtitle="Turn passive viewers into active participants through movement"
        subtitleClassName="max-w-[720px] text-blue-700"
        buttons={[
          {
            variant: "primary",
            size: "lg",
            children: "Create a meeting in the Auditorium",
          },
          /* { variant: "tertiary", size: "md", children: "View pricing" },*/
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

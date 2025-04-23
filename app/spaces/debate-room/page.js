import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function DebateRoomPage() {
  return (
    <div>
      <Hero
        preTitle="Spaces"
        preTitleClassName="text-red-500"
        title="Debate Room"
        titleClassName="max-w-[1200px] text-red-900"
        subtitle="Facilitate structured discussions and critical thinking in our debate room"
        subtitleClassName="max-w-[720px] text-red-700"
        buttons={[
          { variant: "primary", size: "md", children: "Book now" },
          { variant: "tertiary", size: "md", children: "View pricing" },
        ]}
        bgClassName="bg-red-50"
      />
      <Section
        preTitle="Our Features"
        title="Debate Room"
        subtitle="Experience our professional debate space designed for structured discussions and critical thinking."
        buttons={[
          { children: "View Layout", href: "/spaces" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Structured Format
              </h3>
              <p className="mt-4 text-gray-600">
                Professional debate setup with timing controls
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Critical Thinking
              </h3>
              <p className="mt-4 text-gray-600">
                Develop analytical and reasoning skills
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Communication Skills
              </h3>
              <p className="mt-4 text-gray-600">
                Enhance public speaking and persuasion
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

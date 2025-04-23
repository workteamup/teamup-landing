import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function ForFunCompetitionsPage() {
  return (
    <div>
      <Hero
        preTitle="Solutions"
        preTitleClassName="text-purple-500"
        title="For Fun Competitions"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Engage your team with exciting and fun competitions"
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          { variant: "primary", size: "md", children: "Request access" },
          { variant: "tertiary", size: "md", children: "Contact sales" },
        ]}
        bgClassName="bg-purple-50"
      />
      <Section
        preTitle="Our Solutions"
        title="For Fun Competitions"
        subtitle="We provide engaging solutions to create fun and competitive experiences."
        buttons={[
          { children: "Learn More", href: "/services" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Team Challenges
              </h3>
              <p className="mt-4 text-gray-600">
                Exciting team-based challenges and competitions
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Gamification
              </h3>
              <p className="mt-4 text-gray-600">
                Gamified experiences to boost engagement
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Rewards System
              </h3>
              <p className="mt-4 text-gray-600">
                Comprehensive rewards and recognition system
              </p>
            </div>
          </div>
        }
        buttonsPosition="bottom"
        bgClassName="bg-gradient-to-r from-brand-50 to-brand-100"
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="mt-16 px-0 rounded-xl min-h-screen overflow-hidden max-w-[1600px] mx-auto rounded-[50px]"
      />
    </div>
  );
}

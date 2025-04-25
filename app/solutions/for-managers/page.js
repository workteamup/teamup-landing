import Hero from "../../new-components/hero";
import Section from "../../new-components/section";
import SimpleStartSection from "../../new-components/simple-start-section";
export default function ForManagersPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for Managers"
        preTitleClassName="text-purple-500"
        title="Lead stronger teams, effortlessly"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Team Up! equips managers with immersive tools to enhance collaboration, foster connection and keep teams motivated regardless of location"
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          { variant: "primary", size: "lg", children: "Request access" },
          { variant: "tertiary", size: "lg", children: "Contact sales" },
        ]}
        bgClassName="bg-purple-50"
      />
      <SimpleStartSection
        title="How Team Up! helps Managers"
        titleClassName="max-w-[480px]"
        features={[
          {
            title: "Increase team cohesion",
            description:
              "Strengthen bonds with virtual stand-ups and interactive activities in 3D environments that make remote teamwork feel personal.",
          },
          {
            title: "Increase your communication",
            description:
              "Facilitate spontaneous chats and structured discussions in one platform that mimics in-person conversation dynamics.",
          },
          {
            title: "Boost your team's productivity",
            description:
              "Cut silos and boost output with real-time collaboration tools that make online meetings more engaging and effective.",
          },
        ]}
        cta={{ children: "Get Started" }}
      />
      <Section
        preTitle="Our Solutions"
        title="For Managers"
        subtitle="We provide comprehensive solutions to support and enhance your management team."
        buttons={[
          { children: "Learn More", href: "/services" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Leadership Development
              </h3>
              <p className="mt-4 text-gray-600">
                Comprehensive leadership development programs
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Team Management
              </h3>
              <p className="mt-4 text-gray-600">
                Effective team management strategies
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Performance Tracking
              </h3>
              <p className="mt-4 text-gray-600">
                Data-driven performance tracking and insights
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

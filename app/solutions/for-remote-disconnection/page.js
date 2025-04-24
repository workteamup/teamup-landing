import Hero from "../../new-components/hero";
import Section from "../../new-components/section";

export default function RemoteDisconnectionPage() {
  return (
    <div>
      <Hero
        preTitle="Team Up! for remote disconnection"
        preTitleClassName="text-purple-500"
        title="Bridge the distance, build real connection"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Combat remote disconnection with Team Up!'s immersive 3D environments that make virtual feel personal"
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          { variant: "primary", size: "lg", children: "Connect your team today" },
        ]}
        bgClassName="bg-purple-50"
      />
      <Section
        preTitle="Our Solutions"
        title="For Remote Disconnection"
        subtitle="We provide comprehensive solutions to tackle remote work challenges."
        buttons={[
          { children: "Learn More", href: "/services" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Team Connectivity
              </h3>
              <p className="mt-4 text-gray-600">
                Solutions to enhance team connectivity
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Engagement Tools
              </h3>
              <p className="mt-4 text-gray-600">
                Tools to boost remote engagement
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Communication Platforms
              </h3>
              <p className="mt-4 text-gray-600">
                Effective communication solutions
              </p>
            </div>
          </div>
        }
        buttonsPosition="bottom"
        bgClassName="bg-gradient-to-r from-brand-50 to-brand-100"
        containerClassName="py-32 md:px-8 lg:px-12 rounded-3xl"
        className="mt-16 px-0 min-h-screen overflow-hidden max-w-[1600px] mx-auto rounded-[50px]"
      />
    </div>
  );
}

import Hero from "../../new-components/hero";
import Section from "../../new-components/section";
import { ArrowRight } from "lucide-react";

export default function ForCustomOfficeSpacePage() {
  return (
    <div>
      <Hero
        preTitle="Solutions"
        preTitleClassName="text-purple-500"
        title="For Custom Office Space"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Create your perfect virtual office space with our solutions"
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          { variant: "primary", size: "md", children: "Request access" },
          { variant: "tertiary", size: "md", children: "Contact sales" },
        ]}
        bgClassName="bg-purple-50"
      />
      <Section
        preTitle="Our Solutions"
        title="For Custom Office Space"
        subtitle="We provide comprehensive solutions tailored to your office space needs."
        buttons={[
          { children: "Learn More", href: "/services" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Office Design
              </h3>
              <p className="mt-4 text-gray-600">
                Customize your virtual office layout
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Team Spaces
              </h3>
              <p className="mt-4 text-gray-600">
                Create dedicated spaces for your teams
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">
                Collaboration Tools
              </h3>
              <p className="mt-4 text-gray-600">
                Integrated tools for seamless collaboration
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

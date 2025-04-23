import Hero from './new-components/hero';
import Section from './new-components/section';

export default function Home() {
  return (
    <div>
      <Hero
        preTitle="Welcome to Team Up!"
        preTitleClassName="text-purple-500"
        title="Revolutionize your team collaboration"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Our platform brings your team together like never before. Experience seamless communication and productivity."
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          {
            variant: "primary",
            children: "Get Started",
            size: "xl",
          },
          {
            variant: "secondary",
            children: "Learn More",
            size: "xl",
          },
        ]}
        extraContent={
          <div className="mt-32 w-[1280px] h-[720px] bg-gray-500 mx-auto rounded-3xl">
            {/* Video placeholder */}
          </div>
        }
        bgClassName="bg-purple-50"
      />
      <Section
        preTitle="Our Services"
        title="What We Offer"
        subtitle="We provide comprehensive solutions tailored to your business needs."
        buttons={[
          { children: "Learn More", href: "/services" },
          { children: "Contact Us", variant: "secondary" },
        ]}
        content={
          <div className="grid grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Service 1</h3>
              <p className="mt-4 text-gray-600">Description of service 1</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Service 2</h3>
              <p className="mt-4 text-gray-600">Description of service 2</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Service 3</h3>
              <p className="mt-4 text-gray-600">Description of service 3</p>
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

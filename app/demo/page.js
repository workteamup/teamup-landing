import Navbar from "../new-components/navbar";
import Hero from "../new-components/hero";

export default function DemoPage() {
  return (
    <div>
      <Navbar />
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
      {/* Rest of your page content */}
    </div>
  );
}

import Navbar from '../new-components/navbar';
import Hero from "../new-components/hero";
import Image from "next/image";

export default function DemoPage() {
  return (
    <div>
      <Navbar />
      <Hero
        preTitle="Welcome to Team Up!"
        title="Revolutionize Your Team Collaboration"
        subtitle="Our platform brings your team together like never before. Experience seamless communication and productivity."
        buttons={[
          {
            variant: "primary",
            children: "Get Started",
            size: "lg",
          },
          {
            variant: "secondary",
            children: "Learn More",
            size: "lg",
          },
        ]}
        extraContent={
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/hero-demo.jpg"
              alt="Team Collaboration"
              fill
              className="object-cover"
            />
          </div>
        }
      />
      {/* Rest of your page content */}
    </div>
  );
} 
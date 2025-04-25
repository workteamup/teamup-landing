import Hero from "./new-components/hero";
import Section from "./new-components/section";
import SimpleStartSection from "./new-components/simple-start-section";
import InfoPiece from "./new-components/info-piece";

export default function Home() {
  return (
    <div>
      <Hero
        preTitle="The #1 solution for a connected workforce"
        preTitleClassName="text-purple-500"
        title="Transform team connections into business success"
        titleClassName="max-w-[1200px] text-purple-900"
        subtitle="Boost engagement, strengthen culture, and reduce turnover wherever your teams work."
        subtitleClassName="max-w-[720px] text-purple-700"
        buttons={[
          {
            variant: "primary",
            children: "Request access",
            size: "xl",
          },
          {
            variant: "secondary",
            children: "Create your first meeting",
            size: "xl",
          },
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
        bgClassName="bg-purple-50"
      />
      <Section
        preTitle="How we solve your pains"
        title="Turning workplace challenges into opportunities"
        bgClassName=""
        containerClassName="py-32 md:px-8 lg:px-12"
        className="mt-16 px-0 overflow-hidden max-w-[1600px] mx-auto"
      >
        <InfoPiece
          tag="Employee turnover"
          title="Keep your best talent"
          /*titleClassName="text-white"*/
          description="Team Up! creates meaningful bonds that make people want to stay, fostering belonging through shared experiences regardless of where they work."
          /*descriptionClassName="text-dark-cloud"*/
          cta={{
            children: "Employee turnover solutions",
            href: "/solutions/for-employee-turnover",
          }}
          supportContent={
            <div className="w-full h-[400px] bg-purple-50 rounded-lg flex items-center justify-center">
              <img
                src="/images/engagement.jpg"
                alt="Employee Engagement"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          }
          /*containerClassName="bg-purple-700 rounded-[48px]"*/
        />

        <InfoPiece
          tag="Employee disengagement"
          title="Reignite team passion"
          description="Transform routine interactions into immersive experiences that capture attention, spark joy and, and build collaborative skills that drive results."
          cta={{
            children: "Employee disengagement solutions",
            href: "/solutions/for-employee-disengagement",
          }}
          supportContent={
            <div className="w-full h-[400px] bg-purple-50 rounded-lg flex items-center justify-center">
              <img
                src="/images/collaboration.jpg"
                alt="Team Collaboration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          }
          reverse={true}
        />

        <InfoPiece
          tag="Workplace disconnection"
          title="Bridge the human connection gap"
          description="Create a sense of shared presence and spontaneous interaction that transforms relation ships in any work environment."
          cta={{
            children: "Remote disconnection solutions",
            href: "/solutions/for-remote-disconnection",
          }}
          supportContent={
            <div className="w-full h-[400px] bg-purple-50 rounded-lg flex items-center justify-center">
              <img
                src="/images/retention.jpg"
                alt="Employee Retention"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          }
        />
      </Section>
    </div>
  );
}

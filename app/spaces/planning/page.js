import Hero from "../../new-components/hero";

export default function PlanningPage() {
  return (
    <>
      <Hero
        preTitle="Spaces"
        title="Planning Space"
        subtitle="Efficient planning for your team"
        buttons={[
          { variant: "primary", size: "md", children: "Get Started" },
          { variant: "tertiary", size: "md", children: "Learn More" },
        ]}
      />
      <div className="container mx-auto px-6 py-12">
        {/* Your page content here */}
        <h2>Planning Space Content</h2>
      </div>
    </>
  );
}

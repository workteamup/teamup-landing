import Hero from "../new-components/hero";

export default function SpacesLayout({ children }) {
  return (
    <>
      <Hero
        preTitle="Spaces"
        title="Your Space Title Here"
        subtitle="Your space description here"
        buttons={[
          { variant: "primary", size: "md", children: "Request access" },
          { variant: "tertiary", size: "md", children: "Contact sales" },
        ]}
      />
      {children}
    </>
  );
}
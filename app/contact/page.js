import Hero from "../new-components/hero";

export default function ContactPage() {
  return (
    <div>
      <Hero
        preTitle="Contact us"
        preTitleClassName="text-purple-100"
        title="Let's see what we can build together"
        titleClassName="max-w-[960px] text-white"
        subtitle="Let us know how we can help you build a more connected and engaged team"
        subtitleClassName="max-w-[720px] text-purple-50"
        /*buttons={[
    {
      variant: "primary",
      size: "lg",
      children: "Start reducing turnover today",
    },
  ]}*/
        bgClassName="bg-purple-900"
        extraContent={
          <div
            dangerouslySetInnerHTML={{
              __html: `
              <script src="https://embed.ycb.me"	async="true"	data-domain="teamup-ignacio"	data-content="all"	data-displaymode="light"></script>
            `,
            }}
          />
        }
      />
    </div>
  );
}

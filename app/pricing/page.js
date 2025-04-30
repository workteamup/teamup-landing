import Hero from "../new-components/hero";
import PricingCard from "../new-components/pricing-card";

export default function PricingPage() {
  return (
    <div>
      <Hero
        preTitle="Our pricing"
        preTitleClassName="text-purple-100"
        title="Bonding online has never been cheaper"
        titleClassName="max-w-[960px] text-white"
        subtitle="Create constant opportunities for your team to bond and connect in a fun and engaging way for a fraction of the cost of traditional team building activities"
        subtitleClassName="max-w-[720px] text-purple-50"
        bgClassName="bg-purple-900"
        extraContent={
          <div className="w-full max-w-[1600px] mx-auto px-12 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              subtitle="Get a taste of what Team Up! can do for your team."
              priceText="Free"
              buttonProps={{
                variant: "tertiary",
                size: "lg",
                children: "Start now",
              }}
              featuresTitle="Key features"
              features={[
                "5 users",
                "Basic spaces",
                "Discount in daily events with guests",
                "1 meeting point",
                "Basic avatar personalization",
              ]}
            />
            <PricingCard
              title="Business"
              subtitle="For companies that already know what Team Up! brings to the table."
              price={8}
              buttonProps={{
                variant: "primary",
                size: "lg",
                children: "Try free",
              }}
              featuresTitle="Everything in Starter, and"
              features={[
                "Up to 50 users",
                "Premium spaces",
                "2 company-wide events per month",
                "3 meeting points",
                "Premium avatar personalization",
              ]}
            />
            <PricingCard
              title="Enterprise"
              subtitle="For large organizations with custom needs"
              priceText="Let's talk"
              buttonProps={{
                variant: "tertiary",
                size: "lg",
                children: "Contact us",
              }}
              featuresTitle="Everything in Business, and"
              features={[
                "Unlimited users",
                "All spaces",
                "Unlimited meeting points",
                "Custom spaces",
                "Priority support",
                "Custom avatar personalization",
              ]}
            />
          </div>
        }
      />
    </div>
  );
}

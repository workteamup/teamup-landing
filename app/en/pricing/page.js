"use client";

import WebLayout from "../../components/new-web/layout";
import { CheckIcon } from "@heroicons/react/24/solid";
import Button from "../../components/new-web/button";

export default function PricingPage() {
  const freeTierFeatures = [
    "Up to 5 team members",
    "Basic virtual spaces",
    "Limited meeting duration (60 minutes)",
    "Standard customization options",
    "Email support",
  ];

  const premiumTierFeatures = [
    "Unlimited team members",
    "All virtual spaces",
    "Unlimited meeting duration",
    "Advanced customization options",
    "Priority support",
    "Meeting recordings and analytics",
    "Custom branding options",
    "API access for integrations",
  ];

  const eventFeatures = [
    "Full access to all spaces for the event duration",
    "Custom event branding",
    "Event support and planning assistance",
    "Pre-event technical check",
    "Post-event analytics and summary",
  ];

  return (
    <WebLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-brand-teal via-brand-blue to-brand-purple bg-clip-text text-transparent">
          Pricing
        </h1>

        {/* Main pricing options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-cloud flex flex-col">
            <div className="bg-gray-cloud px-6 py-8 border-b border-gray-smoke">
              <h2 className="text-2xl font-bold mb-2 text-gray-phantom">
                Free
              </h2>
              <p className="text-gray-graphite mb-6">
                Perfect for small teams and casual use
              </p>
              <p className="text-4xl font-bold text-gray-phantom">
                €0
                <span className="text-gray-graphite text-xl font-normal">
                  /month
                </span>
              </p>
            </div>
            <div className="px-6 py-8 flex-grow">
              <ul className="space-y-4 mb-8">
                {freeTierFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-space">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button
                  href="https://app.teamup.works/signup"
                  variant="secondary"
                  fullWidth
                >
                  Start Now
                </Button>
              </div>
            </div>
          </div>

          {/* Premium Tier */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-brand-purple flex flex-col relative">
            <div className="absolute top-0 right-0 bg-brand-purple text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
              MOST POPULAR
            </div>
            <div className="bg-brand-purple/10 px-6 py-8 border-b border-brand-purple/20">
              <h2 className="text-2xl font-bold mb-2 text-gray-phantom">
                Premium
              </h2>
              <p className="text-gray-graphite mb-6">
                For teams that need the full experience
              </p>
              <div className="flex items-baseline">
                <p className="text-4xl font-bold text-gray-phantom">
                  €7
                  <span className="text-gray-graphite text-xl font-normal">
                    /month
                  </span>
                </p>
                <p className="ml-2 text-gray-graphite line-through">€10</p>
              </div>
              <p className="text-sm text-gray-graphite mt-1">per user</p>
            </div>
            <div className="px-6 py-8 flex-grow">
              <ul className="space-y-4 mb-8">
                {premiumTierFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-space">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button
                  href="https://app.teamup.works/signup?plan=premium"
                  fullWidth
                >
                  Try Free for 2 Months
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* One-time event pricing */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-phantom">
            Want to run a one-time event? We got you covered.
          </h2>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-cloud">
            <div className="bg-gray-cloud px-6 py-8 border-b border-gray-smoke text-center">
              <h3 className="text-xl font-bold mb-2 text-gray-phantom">
                One-time Event
              </h3>
              <p className="text-4xl font-bold text-gray-phantom">
                €2
                <span className="text-gray-graphite text-xl font-normal">
                  /day per person
                </span>
              </p>
            </div>
            <div className="px-6 py-8">
              <ul className="space-y-4 max-w-lg mx-auto">
                {eventFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                    <span className="ml-3 text-gray-space">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Button href="mailto:events@teamup.works" size="lg">
                  Contact Us For Event Planning
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
                Can I switch between plans?
              </h3>
              <p className="text-gray-graphite">
                Yes, you can upgrade or downgrade your plan at any time. When
                upgrading, you&apos;ll get immediate access to premium features.
                When downgrading, changes will apply at the end of your current
                billing cycle.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
                Is there a minimum commitment period?
              </h3>
              <p className="text-gray-graphite">
                No, all our plans are on a month-to-month basis with no
                long-term commitment required. For annual plans, we offer a 20%
                discount.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
                How does the free trial work?
              </h3>
              <p className="text-gray-graphite">
                Our 2-month free trial gives you full access to all premium
                features. No credit card is required to start your trial, and
                you&apos;ll receive a reminder before it ends.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
                Do you offer special pricing for non-profits or educational
                institutions?
              </h3>
              <p className="text-gray-graphite">
                Yes, we offer discounted rates for non-profits, educational
                institutions, and startups. Contact our sales team for more
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
}

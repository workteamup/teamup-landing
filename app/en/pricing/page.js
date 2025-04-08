"use client";

import { useState } from "react";
import WebLayout from "../../components/new-web/layout";
import PageTitle from "../../components/new-web/page-title";
import PricingCard from "../../components/new-web/pricing-card";
import EventPricingCard from "../../components/new-web/event-pricing-card";
import CTASection from "../../components/new-web/cta-section";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

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

  const faqItems = [
    {
      question: "Can I switch between plans?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to premium features. When downgrading, changes will apply at the end of your current billing cycle.",
    },
    {
      question: "Is there a minimum commitment period?",
      answer:
        "No, all our plans are on a month-to-month basis with no long-term commitment required. For annual plans, we offer a 20% discount.",
    },
    {
      question: "How does the free trial work?",
      answer:
        "Our 2-month free trial gives you full access to all premium features. No credit card is required to start your trial, and you'll receive a reminder before it ends.",
    },
    {
      question:
        "Do you offer special pricing for non-profits or educational institutions?",
      answer:
        "Yes, we offer discounted rates for non-profits, educational institutions, and startups. Contact our sales team for more information.",
    },
  ];

  return (
    <WebLayout>
      <PageTitle
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that's right for your team"
        align="center"
        size="large"
        theme="dark"
        gradient={`
          radial-gradient(circle at 15% 15%, rgba(99, 93, 245, 0.6) 0%, transparent 45%),
          radial-gradient(circle at 85% 15%, rgba(63, 137, 246, 0.6) 0%, transparent 45%),
          radial-gradient(circle at 50% 70%, rgba(103, 218, 250, 0.5) 0%, transparent 55%),
          linear-gradient(165deg, #252E4B 0%, #1F2438 100%)
        `}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Main pricing options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <PricingCard
            title="Free"
            description="Perfect for small teams and casual use"
            price="€0"
            pricePeriod="/month"
            features={freeTierFeatures}
            ctaText="Start Now"
            ctaUrl="https://app.teamup.works/signup"
            ctaVariant="secondary"
          />

          {/* Premium Tier */}
          <PricingCard
            title="Premium"
            description="For teams that need the full experience"
            price="€7"
            pricePeriod="/month"
            originalPrice="€10"
            priceSubtext="per user"
            features={premiumTierFeatures}
            ctaText="Try Free for 2 Months"
            ctaUrl="https://app.teamup.works/signup?plan=premium"
            isPopular={true}
          />
        </div>

        {/* One-time event pricing */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent font-poppins">
            Want to run a one-time event? We got you covered.
          </h2>

          <EventPricingCard
            title="One-time Event"
            price="€2"
            pricePeriod="/day per person"
            features={eventFeatures}
            ctaText="Contact Us For Event Planning"
            ctaUrl="mailto:events@teamup.works"
            ctaSize="lg"
          />
        </div>
      </div>

      {/* Custom Solution CTA - Moved outside container for full width */}
      <div className="w-full bg-gray-phantom">
        <CTASection
          title="Want a custom solution?"
          buttonText="Contact Sales"
          buttonUrl="mailto:sales@teamup.works"
          theme="dark"
          align="center"
          background="gray-phantom"
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent font-poppins">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-smoke rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-cloud/30 transition-colors text-left"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-xl font-semibold text-gray-phantom font-poppins">
                    {item.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-brand-purple flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-graphite flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div
                    className="px-6 py-4 bg-gray-cloud/10 border-t border-gray-smoke"
                    id={`faq-answer-${index}`}
                  >
                    <p className="text-gray-graphite">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </WebLayout>
  );
}

"use client";

import { useState } from "react";
import { useTranslations } from "../contexts/TranslationContext";
import Button from "./button";
import SectionHeader from "./section-header";

const PricingToggle = ({ isYearly, setIsYearly }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="relative p-1 rounded-lg bg-white border border-slate-200">
        <div className="relative z-0 flex">
          {/* Sliding background */}
          <div
            className="absolute left-0 top-0 h-full bg-blue-500 rounded-md transition-all duration-200 ease-in-out"
            style={{
              width: isYearly ? "180px" : "110px",
              transform: `translateX(${isYearly ? "110px" : "0px"})`,
            }}
          />

          {/* Buttons */}
          <button
            className={`relative z-10 w-[110px] px-6 py-2 text-sm font-medium transition-colors duration-200 ease-in-out rounded-md ${
              !isYearly ? "text-white" : "text-slate-600"
            }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`relative z-10 w-[180px] px-6 py-2 text-sm font-medium transition-colors duration-200 ease-in-out rounded-md whitespace-nowrap ${
              isYearly ? "text-white" : "text-slate-600"
            }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly (save 30%)
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({
  name,
  price,
  yearlyPrice,
  originalPrice,
  yearlyOriginalPrice,
  description,
  features,
  isYearly,
  label = false,
  labelText,
  labelColor = "bg-slate-900",
  borderColor = "border-slate-900",
  featuresTitle = "Core Features",
}) => {
  const monthlyDiscount = originalPrice
    ? `Save $${originalPrice - price}/month`
    : null;
  const yearlyDiscount = yearlyOriginalPrice
    ? `Save $${yearlyOriginalPrice - yearlyPrice}/month`
    : null;
  const currentPrice = isYearly ? yearlyPrice : price;
  const currentOriginalPrice = isYearly ? yearlyOriginalPrice : originalPrice;
  const currentDiscount = isYearly ? yearlyDiscount : monthlyDiscount;

  return (
    <div
      className="relative"
      style={{
        height: "calc(100% - 40px)",
        marginTop: label ? "40px" : "40px",
      }}
    >
      {label === "popular" && (
        <div className="absolute -top-10 left-0 right-0">
          <div className="text-xs uppercase text-center font-bold p-1 tracking-[1px] h-[40px] flex justify-center items-center text-white bg-blue-500 rounded-t-2xl">
            <span className="self-center">MOST POPULAR</span>
          </div>
        </div>
      )}
      {label === "custom" && labelText && (
        <div className="absolute -top-10 left-0 right-0">
          <div
            className={`text-xs uppercase text-center font-bold p-1 tracking-[1px] h-[40px] flex justify-center items-center text-white rounded-t-2xl ${labelColor}`}
          >
            <span className="self-center">{labelText}</span>
          </div>
        </div>
      )}

      <div
        className={`border h-full flex flex-col ${
          label === "popular"
            ? "rounded-b-3xl border-blue-500 shadow-xl"
            : label === "custom"
            ? `rounded-b-3xl ${borderColor} shadow-xl`
            : "rounded-3xl border-slate-200 bg-white"
        }`}
      >
        <div className="p-8 flex flex-col flex-grow">
          {/* Header Section - Fixed Height */}
          <div style={{ height: "44px" }} className="mb-6">
            <h3 className="text-2xl font-semibold">{name}</h3>
          </div>

          {/* Pricing Section - Fixed Height */}
          <div style={{ height: "96px" }} className="mb-6">
            <div className="flex items-start">
              <span className="text-4xl font-bold">$</span>
              <span className="text-4xl font-bold">{currentPrice}</span>
              <div className="flex flex-col ml-2 mt-1">
                {currentOriginalPrice && (
                  <span className="text-slate-400 line-through text-sm">
                    ${currentOriginalPrice}
                  </span>
                )}
                <span className="text-slate-600 text-sm">/mo</span>
              </div>
            </div>
            <div style={{ height: "24px" }}>
              {currentDiscount && (
                <div className="text-blue-600 text-sm mt-1">
                  {currentDiscount}
                </div>
              )}
            </div>
          </div>

          {/* Description Section - Fixed Height */}
          <div style={{ height: "80px" }} className="mb-8">
            <p className="text-slate-600">{description}</p>
          </div>

          {/* CTA Section - Fixed Height */}
          <div style={{ height: "52px" }} className="mb-8">
            <Button
              variant={label === "popular" ? "primary" : "secondary"}
              size="lg"
              className="w-full"
              onClick={() =>
                window.open("https://app.teamup.works/signup", "_blank")
              }
            >
              Free 14-day trial
            </Button>
          </div>

          {/* Features Section */}
          <div className="flex-grow">
            <div className="font-medium mb-6">{featuresTitle}</div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const t = useTranslations();

  const plans = [
    {
      name: "Basic",
      price: 49,
      yearlyPrice: 41,
      description:
        "For SMB business, SaaS companies wanting a more technical features.",
      featuresTitle: "Core Features",
      features: [
        "Rich member profiles",
        "Searchable member directory",
        "Discussions",
        "Events",
        "Paid memberships",
        "Custom domain",
        "Weekly community digest",
        "Gamification",
      ],
      label: false,
    },
    {
      name: "Professional",
      price: 89,
      yearlyPrice: 75,
      originalPrice: 99,
      yearlyOriginalPrice: 85,
      description: "Get key community building features, all in one place.",
      featuresTitle: "Core Features",
      features: [
        "Everything in Basic plus:",
        "Courses",
        "Live streams",
        "Live rooms",
        "Unlimited members",
        "Custom branding",
        "Reporting & analytics",
        "Custom code snippets",
        "Conversion tracking",
        "Migration services for payments",
      ],
      label: "popular",
    },
    {
      name: "Enterprise",
      price: 360,
      yearlyPrice: 300,
      originalPrice: 399,
      yearlyOriginalPrice: 339,
      description:
        "Run your business with full feature access and the highest limits.",
      featuresTitle: "Enterprise Features",
      features: [
        "Everything in Professional plus:",
        "Unlimited workflows",
        "Custom single sign-on (SSO)",
        "Priority support",
        "Lower transaction fees",
        "Sandbox community",
        "Up to 10 admins & 100 moderators",
        "Concierge onboarding",
        "Quarterly business reviews",
        "Dedicated customer success manager",
      ],
      label: "custom",
      labelText: "PERFECT FOR BRANDS",
      labelColor: "bg-teal-500",
      borderColor: "border-teal-500",
    },
  ];

  return (
    <div id="pricing" className="mb-24 md:mb-[200px]">
      <div className="max-w-[1440px] mx-auto px-4">
        <SectionHeader
          tag="Pricing"
          heading="Simple, transparent pricing"
          subheading="Start with a 14-day free trial. No credit card needed."
          width={800}
          className="mb-12"
        />

        <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} isYearly={isYearly} />
          ))}
        </div>
      </div>
    </div>
  );
}

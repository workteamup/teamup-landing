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

const UserCountSelector = ({ userCount, setUserCount }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="text-center mb-4">
        <div className="font-medium text-sm text-slate-600 mb-1">
          Calculate your pricing
        </div>
        <div className="text-lg text-slate-400">
          How many users will you have?
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setUserCount(Math.max(1, userCount - 1))}
        >
          -
        </Button>
        <input
          type="text"
          value={userCount}
          onChange={(e) => {
            const value = parseInt(e.target.value) || 1;
            setUserCount(Math.max(1, value));
          }}
          className="w-16 text-center border border-slate-200 rounded-md h-9"
          style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
        />
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setUserCount(userCount + 1)}
        >
          +
        </Button>
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
  userCount,
  ctaText = "Start now for free",
  ctaDescription,
  isCustom = false,
}) => {
  const monthlyDiscount = originalPrice
    ? `Save $${(originalPrice - price) * userCount}/month`
    : null;
  const yearlyDiscount = yearlyOriginalPrice
    ? `Save $${(
        (yearlyOriginalPrice - yearlyPrice) *
        12 *
        userCount
      ).toLocaleString()}/year`
    : null;
  const currentPrice = isYearly ? yearlyPrice : price;
  const currentOriginalPrice = isYearly ? yearlyOriginalPrice : originalPrice;
  const currentDiscount = isYearly ? yearlyDiscount : monthlyDiscount;
  const totalPrice = currentPrice * userCount;

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
              {isCustom ? (
                <span className="text-4xl font-bold">Custom</span>
              ) : (
                <>
                  <span className="text-4xl font-bold">$</span>
                  <span className="text-4xl font-bold">{totalPrice}</span>
                  <div className="flex flex-col ml-2 mt-1">
                    {currentOriginalPrice && (
                      <span className="text-slate-400 line-through text-sm">
                        ${currentOriginalPrice * userCount}
                      </span>
                    )}
                    <span className="text-slate-600 text-sm">
                      {userCount === 1 ? "/month per user" : "/month"}
                    </span>
                  </div>
                </>
              )}
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
          <div style={{ height: "80px" }} className="mb-8">
            <Button
              variant={label === "popular" ? "primary" : "secondary"}
              size="lg"
              className="w-full mb-2"
              onClick={() =>
                window.open("https://app.teamup.works/signup", "_blank")
              }
            >
              {ctaText}
            </Button>
            {ctaDescription && (
              <div className="text-sm text-slate-500 text-center">
                {ctaDescription}
              </div>
            )}
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
  const [userCount, setUserCount] = useState(1);
  const t = useTranslations();

  const plans = [
    {
      name: "Free",
      price: 0,
      yearlyPrice: 0,
      description:
        "For SMB business, SaaS companies wanting a more technical features.",
      featuresTitle: "Includes:",
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
      ctaText: "Get started for free",
      ctaDescription: "No credit card required",
    },
    {
      name: "Business",
      price: 10,
      yearlyPrice: 7,
      yearlyOriginalPrice: 10,
      description: "Get key community building features, all in one place.",
      featuresTitle: "Everything in Basic plus:",
      features: [
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
      ctaText: "Start your free trial",
      ctaDescription: "14-day free trial",
    },
    {
      name: "Enterprise",
      description:
        "Run your business with full feature access and the highest limits.",
      featuresTitle: "Everything in Business plus:",
      features: [
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
      ctaText: "Contact Sales",
      ctaDescription: "Custom pricing for your needs",
      isCustom: true,
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
        <UserCountSelector userCount={userCount} setUserCount={setUserCount} />

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              isYearly={isYearly}
              userCount={userCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

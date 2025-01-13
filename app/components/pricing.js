"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "../contexts/TranslationContext";
import Button from "./button";
import SectionHeader from "./section-header";
import KitDigital from "../components/kit-digital";
import SketchyCheckbox from "./sketchy-checkbox";

const PricingToggle = ({ isYearly, setIsYearly }) => {
  const t = useTranslations();
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
            {t("Pricing.toggle.monthly")}
          </button>
          <button
            className={`relative z-10 w-[180px] px-6 py-2 text-sm font-medium transition-colors duration-200 ease-in-out rounded-md whitespace-nowrap ${
              isYearly ? "text-white" : "text-slate-600"
            }`}
            onClick={() => setIsYearly(true)}
          >
            {t("Pricing.toggle.yearly")}
          </button>
        </div>
      </div>
    </div>
  );
};

const UserCountSelector = ({ userCount, setUserCount }) => {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="text-center mb-4">
        <div className="font-medium text-sm text-slate-600 mb-1">
          {t("Pricing.calculator.title")}
        </div>
        <div className="text-lg text-slate-400">
          {t("Pricing.calculator.subtitle")}
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
  const t = useTranslations();
  const locale = useLocale();

  const formatPrice = (amount) => {
    if (locale === "es") {
      return `${amount}€`;
    }
    return `$${amount}`;
  };

  const monthlyDiscount = originalPrice
    ? t("Pricing.monthlyDiscount").replace(
        "${amount}",
        formatPrice(originalPrice - price)
      )
    : null;

  const yearlyDiscount = yearlyOriginalPrice
    ? t("Pricing.yearlyDiscount").replace(
        "${amount}",
        formatPrice((yearlyOriginalPrice - yearlyPrice) * 12 * userCount)
      )
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
            <span className="self-center">{t("Pricing.mostPopular")}</span>
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
            <h3 className="text-2xl font-semibold text-blue-400">{name}</h3>
          </div>

          {/* Pricing Section - Fixed Height */}
          <div style={{ height: "96px" }} className="mb-6">
            <div className="flex items-start">
              {isCustom ? (
                <span className="text-4xl font-bold">
                  {t("Pricing.customPricing")}
                </span>
              ) : (
                <>
                  <span className="text-4xl font-bold">
                    {formatPrice(totalPrice)}
                  </span>
                  <div className="flex flex-col ml-2 mt-1">
                    {currentOriginalPrice && (
                      <span className="text-slate-400 line-through text-sm">
                        {formatPrice(currentOriginalPrice * userCount)}
                      </span>
                    )}
                    <span className="text-slate-600 text-sm">
                      {userCount === 1
                        ? t("Pricing.perMonthPerUser")
                        : t("Pricing.perMonth")}
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
                  <SketchyCheckbox className="w-5 h-5 mt-1 flex-shrink-0 mr-2" />
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
  const locale = useLocale();

  const plans = [
    {
      name: t("Pricing.plans.free.name"),
      price: 0,
      yearlyPrice: 0,
      description: t("Pricing.plans.free.description"),
      featuresTitle: t("Pricing.plans.free.featuresTitle"),
      features: [
        t("Pricing.plans.free.features.0"),
        t("Pricing.plans.free.features.1"),
        t("Pricing.plans.free.features.2"),
        t("Pricing.plans.free.features.3"),
        t("Pricing.plans.free.features.4"),
      ],
      label: false,
      ctaText: t("Pricing.plans.free.ctaText"),
      ctaDescription: t("Pricing.plans.free.ctaDescription"),
    },
    {
      name: t("Pricing.plans.business.name"),
      price: 10,
      yearlyPrice: 7,
      yearlyOriginalPrice: 10,
      description: t("Pricing.plans.business.description"),
      featuresTitle: t("Pricing.plans.business.featuresTitle"),
      features: [
        t("Pricing.plans.business.features.0"),
        t("Pricing.plans.business.features.1"),
        t("Pricing.plans.business.features.2"),
        t("Pricing.plans.business.features.3"),
        t("Pricing.plans.business.features.4"),
        t("Pricing.plans.business.features.5"),
        t("Pricing.plans.business.features.6"),
      ],
      label: "popular",
      ctaText: t("Pricing.plans.business.ctaText"),
      ctaDescription: t("Pricing.plans.business.ctaDescription"),
    },
    {
      name: t("Pricing.plans.custom.name"),
      description: t("Pricing.plans.custom.description"),
      featuresTitle: t("Pricing.plans.custom.featuresTitle"),
      features: [
        t("Pricing.plans.custom.features.0"),
        t("Pricing.plans.custom.features.1"),
        t("Pricing.plans.custom.features.2"),
        t("Pricing.plans.custom.features.3"),
        t("Pricing.plans.custom.features.4"),
        t("Pricing.plans.custom.features.5"),
        t("Pricing.plans.custom.features.6"),
        t("Pricing.plans.custom.features.7"),
      ],
      ctaText: t("Pricing.plans.custom.ctaText"),
      ctaDescription: t("Pricing.plans.custom.ctaDescription"),
      isCustom: true,
    },
  ];

  return (
    <div id="pricing" className="mb-24 md:mb-[200px]">
      <div className="max-w-[1440px] mx-auto px-4">
        <SectionHeader
          tag={t("Pricing.tag")}
          heading={t("Pricing.heading")}
          subheading={t("Pricing.subheading")}
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

        {locale === "es" && <KitDigital className="mt-24" />}
      </div>
    </div>
  );
}

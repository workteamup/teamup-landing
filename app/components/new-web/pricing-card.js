"use client";

import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import Button from "./button";

/**
 * PricingCard Component
 * A reusable card component for displaying pricing plans that follows the Team Up design system
 * with modern styling enhancements
 *
 * @param {Object} props
 * @param {string} props.title - The plan title (e.g., "Free", "Premium")
 * @param {string} props.description - Short description of the plan
 * @param {string|number} props.price - The price amount
 * @param {string} props.pricePeriod - The billing period (e.g., "/month", "/day")
 * @param {string} [props.originalPrice] - Original price if there's a discount
 * @param {string} [props.priceSubtext] - Additional text below price (e.g., "per user")
 * @param {Array} props.features - Array of features included in the plan
 * @param {string} props.ctaText - Call-to-action button text
 * @param {string} props.ctaUrl - Call-to-action button URL
 * @param {string} [props.ctaVariant="primary"] - Button variant (default: "primary")
 * @param {boolean} [props.isPopular=false] - Whether this is the popular/highlighted plan
 * @param {string} [props.popularLabel="MOST POPULAR"] - Label for popular plan
 * @param {string} [props.customClasses] - Additional CSS classes
 */
export default function PricingCard({
  title,
  description,
  price,
  pricePeriod,
  originalPrice,
  priceSubtext,
  features,
  ctaText,
  ctaUrl,
  ctaVariant = "primary",
  isPopular = false,
  popularLabel = "MOST POPULAR",
  customClasses = "",
}) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 
      ${isPopular ? "border-2 border-brand-purple" : "border border-gray-cloud hover:border-gray-smoke"} 
      flex flex-col relative transform hover:-translate-y-1 ${customClasses}`}
    >
      {/* Popular tag */}
      {isPopular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-brand-purple to-brand-blue text-white px-4 py-1 rounded-bl-xl text-sm font-bold">
          {popularLabel}
        </div>
      )}

      {/* Header section */}
      <div
        className={`${
          isPopular 
            ? "bg-gradient-to-br from-brand-purple/10 to-brand-blue/5" 
            : "bg-gradient-to-br from-gray-cloud to-gray-cloud/50"
        } px-8 py-10 border-b ${
          isPopular ? "border-brand-purple/20" : "border-gray-smoke"
        }`}
      >
        <h2 className="text-2xl font-bold mb-3 text-gray-phantom font-poppins">
          {title}
        </h2>
        <p className="text-gray-graphite mb-8">{description}</p>

        {/* Price */}
        <div className="flex items-baseline">
          <p className="text-5xl font-bold text-gray-phantom font-poppins">
            {price}
            <span className="text-gray-graphite text-xl font-normal ml-1">
              {pricePeriod}
            </span>
          </p>
          {originalPrice && (
            <p className="ml-3 text-gray-graphite line-through">
              {originalPrice}
            </p>
          )}
        </div>

        {/* Price subtext - Always include the space even if empty */}
        <p className="text-sm text-gray-graphite mt-2 h-5">
          {priceSubtext || "\u00A0"}
        </p>

        {/* CTA Button directly under price */}
        <div className="mt-8">
          <Button
            href={ctaUrl}
            variant={isPopular ? "primary" : "secondary"}
            fullWidth
            size="lg"
          >
            {ctaText}
          </Button>
        </div>
      </div>

      {/* Features list */}
      <div className="px-8 py-10 flex-grow bg-white">
        <h3 className="text-lg font-semibold mb-6 text-gray-phantom font-poppins">Features include:</h3>
        <ul className="space-y-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start group">
              <CheckIcon className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0 group-hover:text-brand-blue transition-colors" />
              <span className="ml-3 text-gray-space group-hover:text-gray-phantom transition-colors">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
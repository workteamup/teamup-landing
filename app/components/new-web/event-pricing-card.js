"use client";

import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import Button from "./button";

/**
 * EventPricingCard Component
 * A specialized pricing card component for event pricing that follows the Team Up design system
 * with modern styling enhancements
 *
 * @param {Object} props
 * @param {string} props.title - The event plan title
 * @param {string|number} props.price - The price amount
 * @param {string} props.pricePeriod - The billing period (e.g., "/day per person")
 * @param {Array} props.features - Array of features included in the event plan
 * @param {string} props.ctaText - Call-to-action button text
 * @param {string} props.ctaUrl - Call-to-action button URL
 * @param {string} [props.ctaSize="lg"] - Size of the CTA button
 * @param {string} [props.customClasses] - Additional CSS classes
 */
export default function EventPricingCard({
  title,
  price,
  pricePeriod,
  features,
  ctaText,
  ctaUrl,
  ctaSize = "lg",
  customClasses = "",
}) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 
      border border-gray-cloud hover:border-gray-smoke transform hover:-translate-y-1 ${customClasses}`}
    >
      {/* Header section (centered) */}
      <div className="bg-gradient-to-br from-brand-teal/10 to-brand-blue/5 px-8 py-10 border-b border-gray-smoke text-center">
        <h3 className="text-2xl font-semibold mb-3 text-gray-phantom font-poppins">
          {title}
        </h3>
        <p className="text-5xl font-semibold text-gray-phantom font-poppins">
          {price}
          <span className="text-gray-graphite text-xl font-normal ml-1">
            {pricePeriod}
          </span>
        </p>
      </div>

      {/* Features list */}
      <div className="px-8 py-10 bg-white">
        <h3 className="text-lg font-semibold mb-6 text-gray-phantom font-poppins text-center">
          Features include:
        </h3>
        <ul className="space-y-5 max-w-lg mx-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start group">
              <CheckIcon className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0 group-hover:text-brand-blue transition-colors" />
              <span className="ml-3 text-gray-space group-hover:text-gray-phantom transition-colors">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <Button
            href={ctaUrl}
            size={ctaSize}
            variant="primary"
            className="px-10"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
}

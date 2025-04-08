"use client";

import { cn } from "../../lib/utils";
import { brandColors, greyColors } from "../../lib/design-tokens";

/**
 * StepItem Component
 * A component for displaying a step in a step-by-step guide
 *
 * @param {Object} props Component properties
 * @param {number} props.number - The step number
 * @param {string} props.title - The step title
 * @param {string} props.description - The step description
 * @param {string} [props.image] - Optional image URL
 * @param {string} [props.imageAlt] - Optional image alt text
 * @param {string} [props.theme="teal"] - Color theme ("purple", "blue", "teal")
 * @param {string} [props.className] - Additional CSS classes
 */
export default function StepItem({
  number,
  title,
  description,
  image,
  imageAlt,
  theme = "teal",
  className,
}) {
  // Theme-based colors
  const themeClasses = {
    purple: "bg-brand-purple",
    blue: "bg-brand-blue",
    teal: "bg-brand-teal",
  };

  const selectedTheme = themeClasses[theme] || themeClasses.teal;

  return (
    <div
      className={cn(
        "relative flex flex-col md:flex-row items-start gap-8 md:gap-12",
        className
      )}
    >
      {/* Left Column: Number + Content */}
      <div className="flex gap-6 flex-1">
        {/* Number Circle */}
        <div
          className={cn(
            "flex-shrink-0 w-12 h-12 rounded-full",
            "text-white flex items-center justify-center",
            "text-xl font-bold relative z-10",
            selectedTheme
          )}
        >
          {number}
        </div>

        {/* Content Container */}
        <div className="flex-1 pt-1.5">
          <h3 className="text-xl font-semibold mb-2 text-gray-phantom font-poppins">
            {title}
          </h3>
          <p className="text-gray-space">{description}</p>
        </div>
      </div>

      {/* Right Column: Image */}
      {image && (
        <div className="w-full md:w-80 rounded-lg overflow-hidden bg-gray-cloud">
          <img
            src={image}
            alt={imageAlt || `Step ${number} illustration`}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

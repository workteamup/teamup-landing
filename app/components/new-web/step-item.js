"use client";

import { cn } from "../../lib/utils";
import { brandColors } from "../../lib/design-tokens";

/**
 * StepItem Component
 * A component for displaying a step in a step-by-step guide
 *
 * @param {Object} props Component properties
 * @param {number} props.number - The step number
 * @param {string} props.title - The step title
 * @param {string} props.description - The step description
 * @param {string} [props.theme="teal"] - Color theme ("purple", "blue", "teal")
 * @param {string} [props.className] - Additional CSS classes
 */
export default function StepItem({
  number,
  title,
  description,
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
        "flex items-start gap-6 p-6 bg-white rounded-xl",
        "border border-gray-smoke shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:shadow-md hover:border-gray-steel",
        className
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-12 h-12 rounded-full text-white flex items-center justify-center text-xl font-bold",
          selectedTheme
        )}
      >
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-phantom">
          {title}
        </h3>
        <p className="text-gray-space">{description}</p>
      </div>
    </div>
  );
}

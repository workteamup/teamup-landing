"use client";

import { cn } from "../../lib/utils";
import { brandColors, greyColors } from "../../lib/design-tokens";

/**
 * MinimalFeatureCard Component
 * A minimalistic card component for displaying feature text
 *
 * @param {Object} props Component properties
 * @param {string} props.text - The feature text to display
 * @param {string} [props.className] - Additional CSS classes
 */
export default function MinimalFeatureCard({ text, className }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-white",
        "px-6 py-8 rounded-xl min-h-[160px]",
        "border border-gray-smoke shadow-sm",
        "transition-all duration-300 ease-out",
        "hover:scale-[1.05] hover:shadow-md hover:border-gray-steel",
        "cursor-pointer",
        className
      )}
    >
      <div className="text-sm md:text-base font-semibold text-center text-gray-graphite">
        {text}
      </div>
    </div>
  );
}

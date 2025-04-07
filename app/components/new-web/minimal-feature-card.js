"use client";

import { cn } from "../../lib/utils";
import { greyColors } from "../../lib/design-tokens";

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
        "min-h-[160px] p-6",
        "rounded-xl border border-gray-smoke",
        "bg-white shadow-sm",
        "flex items-center justify-center",
        "transition-all duration-300 ease-out",
        "hover:border-gray-steel hover:shadow-md",
        className
      )}
    >
      <p
        className={cn(
          "text-lg font-medium text-gray-graphite text-center",
          "max-w-[25ch]"
        )}
      >
        {text}
      </p>
    </div>
  );
}

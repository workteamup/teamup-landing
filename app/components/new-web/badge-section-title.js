"use client";

import { cn } from "../../lib/utils";
import { brandColors, greyColors } from "../../lib/design-tokens";

/**
 * BadgeSectionTitle Component
 * A badge-style section title with optional subtitle
 *
 * @param {Object} props Component properties
 * @param {string} props.title - The title text to display in the badge
 * @param {string} [props.subtitle] - Optional subtitle text below the badge
 * @param {string} [props.align="center"] - Text alignment ("left", "center", "right")
 * @param {string} [props.theme="purple"] - Color theme ("purple", "blue", "teal")
 * @param {string} [props.className] - Additional CSS classes
 */
export default function BadgeSectionTitle({
  title,
  subtitle,
  align = "center",
  theme = "purple",
  className,
}) {
  // Theme-based colors
  const themeClasses = {
    purple: {
      badge: "bg-brand-purple/10 text-brand-purple",
      subtitle: "text-gray-space",
    },
    blue: {
      badge: "bg-brand-blue/10 text-brand-blue",
      subtitle: "text-gray-space",
    },
    teal: {
      badge: "bg-brand-teal/10 text-brand-teal",
      subtitle: "text-gray-space",
    },
  };

  // Alignment classes
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const selectedTheme = themeClasses[theme] || themeClasses.purple;

  return (
    <div className={cn("w-full mb-12", alignmentClasses[align], className)}>
      {/* Badge Title */}
      <div
        className={cn(
          "inline-block px-4 py-2 rounded-full font-medium text-sm md:text-base tracking-wide",
          selectedTheme.badge,
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </div>

      {/* Optional Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl",
            selectedTheme.subtitle,
            "max-w-[55ch]",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

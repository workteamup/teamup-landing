"use client";

import { cn } from "../../lib/utils";
import { brandColors, greyColors } from "../../lib/design-tokens";

/**
 * IconSectionTitle Component
 * A section title component that combines an icon with text
 *
 * @param {Object} props Component properties
 * @param {React.ReactNode} props.icon - The icon to display
 * @param {string} props.title - The title text
 * @param {string} [props.subtitle] - Optional subtitle text
 * @param {string} [props.align="left"] - Text alignment ("left", "center", "right")
 * @param {string} [props.theme="purple"] - Color theme ("purple", "blue", "teal")
 * @param {string} [props.className] - Additional CSS classes
 */
export default function IconSectionTitle({
  icon,
  title,
  subtitle,
  align = "left",
  theme = "purple",
  className,
}) {
  // Theme-based colors
  const themeClasses = {
    purple: {
      bg: "bg-brand-purple",
      iconBg: "bg-brand-purple/10",
    },
    blue: {
      bg: "bg-brand-blue",
      iconBg: "bg-brand-blue/10",
    },
    teal: {
      bg: "bg-brand-teal",
      iconBg: "bg-brand-teal/10",
    },
  };

  // Alignment classes
  const alignmentClasses = {
    left: "text-left",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const selectedTheme = themeClasses[theme] || themeClasses.purple;

  return (
    <div
      className={cn(
        "w-full mb-12 flex flex-col",
        alignmentClasses[align],
        className
      )}
    >
      {/* Icon + Title */}
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
          align === "right" && "justify-end"
        )}
      >
        {/* Icon container with brand color */}
        <div
          className={cn(
            "w-11 h-11 rounded-lg flex items-center justify-center text-white",
            selectedTheme.bg,
            "shadow-sm",
            // Add subtle inner glow effect
            "ring-[2px] ring-inset ring-white/10"
          )}
        >
          <div className="w-6 h-6">{icon}</div>
        </div>
        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-phantom font-poppins">
          {title}
        </h2>
      </div>

      {/* Optional Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-gray-space",
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

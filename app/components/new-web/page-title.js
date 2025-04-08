"use client";

import { useTranslations } from "../../contexts/TranslationContext";
import { cn } from "../../lib/utils";
import { brandColors, greyColors } from "../../lib/design-tokens";

/**
 * PageTitle Component
 * A reusable component for section and subsection titles with optional subtitle
 * @param {Object} props Component properties
 * @param {string} props.title - The main title text
 * @param {string} [props.subtitle] - Optional subtitle text
 * @param {string} [props.theme="light"] - Color theme ('light' or 'dark')
 * @param {string} [props.align="left"] - Text alignment ('left' or 'center')
 * @param {string} [props.size="default"] - Title size ('small', 'default', 'large')
 * @param {string} [props.background] - Background color from brand colors (e.g., 'brand-purple', 'brand-teal')
 * @param {string} [props.gradient] - Custom gradient background (CSS string)
 * @param {string} [props.className] - Additional CSS classes
 */
export default function PageTitle({
  title,
  subtitle,
  theme = "light",
  align = "left",
  size = "default",
  background,
  gradient,
  className,
}) {
  const t = useTranslations();

  // Theme-based colors
  const titleColor = theme === "light" ? "text-gray-phantom" : "text-white";
  const subtitleColor =
    theme === "light" ? "text-gray-space" : "text-gray-cloud";

  // Default background if none provided
  let bgStyle = {};
  let bgClass = "";

  if (gradient) {
    bgStyle = { background: gradient };
  } else {
    bgClass = background
      ? `bg-${background}`
      : theme === "light"
      ? "bg-white"
      : "bg-brand-dark";
  }

  // Size-based classes
  const titleSizeClasses = {
    small: "text-2xl md:text-3xl",
    default: "text-3xl md:text-4xl lg:text-5xl",
    large: "text-4xl md:text-5xl lg:text-6xl",
  };

  // Alignment classes
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
  };

  // Padding classes based on size - increased for more breathing room
  const paddingClasses = {
    small: "py-16 md:py-20 lg:py-32",
    default: "py-20 md:py-24 lg:py-40",
    large: "py-24 md:py-32 lg:py-48",
  };

  return (
    <section
      className={cn("w-full", bgClass, paddingClasses[size], className)}
      style={bgStyle}
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className={cn(alignmentClasses[align])}>
          <h1
            className={cn(
              "font-semibold font-poppins mb-6",
              titleSizeClasses[size],
              titleColor
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                "text-lg md:text-xl lg:text-2xl",
                subtitleColor,
                "max-w-[55ch]",
                align === "center" && "mx-auto"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import Button from "./button";
import {
  brandColors,
  greyColors,
  semanticColors,
  spacing,
} from "../../lib/design-tokens";

/**
 * CTA Section Component
 * A versatile call-to-action component with customizable alignment, theme, and background
 *
 * @param {Object} props
 * @param {string} props.title - Main headline text
 * @param {string} props.description - Supporting description text
 * @param {string} [props.subtext] - Optional smaller text below the description
 * @param {string} [props.titleSize="lg"] - Size of the title: "sm" (small), "md" (medium), "lg" (large), "xl" (extra large)
 * @param {string} props.buttonText - Text for the primary CTA button
 * @param {string} props.buttonUrl - URL for the primary CTA button
 * @param {string} [props.buttonVariant="primary"] - Button variant (default: "primary")
 * @param {string} [props.buttonSize="lg"] - Button size (default: "lg")
 * @param {string} [props.secondaryButtonText] - Text for the secondary button (optional)
 * @param {string} [props.secondaryButtonUrl] - URL for the secondary button (optional)
 * @param {string} [props.secondaryButtonVariant="tertiary"] - Secondary button variant (default: "tertiary")
 * @param {string} [props.secondaryButtonSize] - Secondary button size (defaults to primary buttonSize)
 * @param {string} [props.align="center"] - Text alignment: "left", "center", or "right" (default: "center")
 * @param {string} [props.theme="light"] - Color theme: "light" or "dark" (default: "light")
 * @param {string} [props.background] - Background style: CSS color, gradient, or class name
 * @param {string} [props.customClasses] - Additional custom classes to add
 * @param {React.ReactNode} [props.icon] - Optional icon to display
 */
export default function CTASection({
  title,
  description,
  subtext,
  titleSize = "lg",
  buttonText,
  buttonUrl,
  buttonVariant = "primary",
  buttonSize = "lg",
  secondaryButtonText,
  secondaryButtonUrl,
  secondaryButtonVariant = "tertiary",
  secondaryButtonSize,
  align = "center",
  theme = "light",
  background,
  customClasses = "",
  icon,
}) {
  // Determine alignment classes
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  // Determine theme-based classes
  const themeClasses = {
    light: {
      text: "text-brand-dark",
      description: "text-gray-graphite",
      subtext: "text-gray-space",
    },
    dark: {
      text: "text-white",
      description: "text-gray-smoke",
      subtext: "text-gray-steel",
    },
  }[theme];

  // Determine the background styling
  const backgroundStyle = background
    ? { background }
    : theme === "dark"
    ? { background: "linear-gradient(to right, #252E4B, #40424E)" }
    : { background: "#FFFFFF" };

  // Determine title size classes
  const titleSizeClasses =
    {
      sm: "text-2xl md:text-3xl",
      md: "text-3xl md:text-4xl",
      lg: "text-3xl md:text-4xl lg:text-5xl",
      xl: "text-4xl md:text-5xl lg:text-6xl",
    }[titleSize] || "text-3xl md:text-4xl lg:text-5xl";

  // Set up secondary button variant based on theme (inverse of theme for better visibility)
  // If user explicitly sets secondaryButtonVariant, use that instead
  const computedSecondaryButtonVariant =
    secondaryButtonVariant || (theme === "light" ? "tertiary" : "outline");

  // Ensure secondary button size defaults to primary button size if not specified
  const secondaryButtonSizeComputed = secondaryButtonSize || buttonSize;

  return (
    <section
      className={`py-16 md:py-24 px-4 ${customClasses}`}
      style={backgroundStyle}
    >
      <div className="container mx-auto">
        <div
          className={`flex flex-col ${alignmentClasses} space-y-6 md:space-y-8 ${
            align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
          } w-full lg:w-3/5`}
        >
          {/* Optional icon */}
          {icon && <div className="mb-2 md:mb-4">{icon}</div>}

          {/* Title */}
          <h2
            className={`${titleSizeClasses} font-bold font-poppins ${themeClasses.text}`}
          >
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className={`text-lg md:text-xl ${themeClasses.description}`}>
              {description}
            </p>
          )}

          {/* Optional subtext */}
          {subtext && (
            <p className={`text-sm md:text-base ${themeClasses.subtext}`}>
              {subtext}
            </p>
          )}

          {/* Button(s) container */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mt-2 ${
              align === "center"
                ? "justify-center"
                : align === "right"
                ? "justify-end"
                : ""
            }`}
          >
            {/* Primary button */}
            <Button
              href={buttonUrl}
              variant={buttonVariant}
              size={buttonSize}
              className={
                theme === "dark" && buttonVariant === "outline"
                  ? "text-white border-white hover:bg-white/10"
                  : ""
              }
            >
              {buttonText}
            </Button>

            {/* Optional secondary button */}
            {secondaryButtonText && secondaryButtonUrl && (
              <Button
                href={secondaryButtonUrl}
                variant={computedSecondaryButtonVariant}
                size={secondaryButtonSizeComputed}
                className={
                  theme === "dark" &&
                  computedSecondaryButtonVariant === "outline"
                    ? "text-white border-white hover:bg-white/10"
                    : theme === "dark" &&
                      computedSecondaryButtonVariant === "tertiary"
                    ? "text-white hover:text-gray-cloud"
                    : ""
                }
                isDarkBackground={theme === "dark"}
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

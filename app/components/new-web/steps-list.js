"use client";

import { cn } from "../../lib/utils";
import StepItem from "./step-item";

/**
 * StepsList Component
 * A component that displays a list of connected steps
 *
 * @param {Object} props Component properties
 * @param {Array} props.steps - Array of step objects with title, description, and optional image
 * @param {string} [props.theme="teal"] - Color theme ("purple", "blue", "teal")
 * @param {string} [props.className] - Additional CSS classes
 */
export default function StepsList({ steps, theme = "teal", className }) {
  // Theme-based colors for the connecting line
  const themeClasses = {
    purple: "border-brand-purple",
    blue: "border-brand-blue",
    teal: "border-brand-teal",
  };

  const selectedTheme = themeClasses[theme] || themeClasses.teal;

  return (
    <div className={cn("relative space-y-16", className)}>
      {/* Steps */}
      {steps.map((step, index) => (
        <div key={index} className="relative">
          {/* Connecting Line (except for last item) */}
          {index < steps.length - 1 && (
            <div
              className={cn(
                "absolute left-[23px] top-[48px]",
                "border-l-2",
                selectedTheme,
                "h-[calc(100%_+_1rem)]",
                "opacity-30"
              )}
            />
          )}
          <StepItem
            number={index + 1}
            title={step.title}
            description={step.description}
            image={step.image}
            imageAlt={step.imageAlt}
            theme={theme}
          />
        </div>
      ))}
    </div>
  );
}

"use client";

import { useTranslations } from "../../contexts/TranslationContext";
import { useState, useRef, useEffect, useMemo } from "react";
import Button from "./button";
import {
  greyColors,
  brandColors,
  semanticColors,
  spacing,
  shadows,
} from "../../lib/design-tokens";
import CTASection from "./cta-section";

/**
 * BookingEmbed Component
 * Renders a YouCanBook.me booking calendar with design system compliant styling
 * @param {Object} props Component properties
 * @param {string} props.domain - The YouCanBook.me domain (default: "teamup-ignacio")
 * @param {string} props.type - Embed type: 'embed', 'modal', 'inline', 'text-link' (default: "embed")
 * @param {string} props.displayMode - Display mode: 'auto', 'desktop', 'mobile' (default: "auto")
 * @param {Object} props.customParams - Additional parameters to pass to the booking widget
 * @param {string} props.theme - Color theme ('light' or 'dark') (default: "light")
 * @param {string} props.customClasses - Additional CSS classes to add to the container
 */
export default function BookingEmbed({
  domain = "teamup-ignacio",
  type = "embed", // Options: 'embed', 'modal', 'inline', 'text-link'
  displayMode = "auto", // Options: 'auto', 'desktop', 'mobile'
  customParams = {}, // Additional parameters
  theme = "light", // 'light' or 'dark'
  customClasses = "",
}) {
  const t = useTranslations();
  const [isLoaded, setIsLoaded] = useState(false);
  const [scriptFailed, setScriptFailed] = useState(false);
  const containerRef = useRef(null);

  // Determine background and text colors based on theme
  const bgColor = theme === "light" ? "bg-white" : "bg-brand-dark";
  const textColor = theme === "light" ? "text-gray-phantom" : "text-white";
  const textSecondaryColor =
    theme === "light" ? "text-gray-space" : "text-gray-cloud";

  // Memoize customParams to avoid unnecessary re-renders
  const memoizedCustomParams = useMemo(
    () => customParams,
    [JSON.stringify(customParams)]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if a script has already been appended; if so, don't add another.
    const existingScript = containerRef.current.querySelector("script");
    if (existingScript) {
      console.log("Script already exists, not appending again");
      return;
    }

    // Create script element
    const script = document.createElement("script");
    script.src = "https://embed.ycb.me";
    script.async = true;
    script.setAttribute("data-domain", domain);
    script.setAttribute("data-type", type);
    script.setAttribute("data-displaymode", displayMode);
    script.setAttribute("data-content", "all");
    script.setAttribute("data-scroll", "no"); // Disable scrolling

    // Add any additional custom parameters
    Object.entries(memoizedCustomParams).forEach(([key, value]) => {
      script.setAttribute(`data-${key}`, value);
    });

    // Set up event handlers
    script.onload = () => {
      console.log("YouCanBook.me script loaded successfully");
      setIsLoaded(true);

      // After loading, find and modify any iframes to remove scrollbars
      setTimeout(() => {
        const iframes = containerRef.current?.querySelectorAll("iframe");
        if (iframes?.length) {
          iframes.forEach((iframe) => {
            iframe.style.overflow = "hidden";
            iframe.scrolling = "no";
          });
        }
      }, 1000); // Give it a moment to fully render
    };

    script.onerror = (error) => {
      console.error("YouCanBook.me script failed to load:", error);
      setScriptFailed(true);
    };

    // Append the script directly to our container
    containerRef.current.appendChild(script);

    // Cleanup function
    return () => {
      // Only try to remove the script if it's still in the DOM and part of our container
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, [domain, type, displayMode, memoizedCustomParams]);

  // Build URL for iframe fallback if needed
  const baseUrl = `https://${domain}.youcanbook.me/`;
  const queryParams = new URLSearchParams();
  Object.entries(memoizedCustomParams).forEach(([key, value]) => {
    queryParams.append(key, value);
  });
  queryParams.set("embed", "true");
  const queryString = queryParams.toString();
  const fullUrl = `${baseUrl}?${queryString}`;

  // If script failed, render contact CTA instead
  if (scriptFailed) {
    return (
      <CTASection
        title={t("ContactSection.title")}
        description={
          t("ContactSection.scriptFailedMessage") ||
          "We're having trouble loading the booking calendar. Please contact us directly instead."
        }
        buttonText={t("ContactSection.contactButtonText") || "Contact Sales"}
        buttonUrl="/contact"
        buttonVariant="primary"
        buttonSize="lg"
        theme={theme}
        align="center"
        customClasses={customClasses}
      />
    );
  }

  return (
    <section className={`py-12 md:py-16 lg:py-24 ${bgColor} ${customClasses}`}>
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl font-semibold text-center mb-6 ${textColor} font-poppins`}
        >
          {t("ContactSection.title")}
        </h2>

        <p
          className={`text-center text-lg mb-8 ${textSecondaryColor} max-w-3xl mx-auto`}
        >
          {t("ContactSection.description") ||
            "Book a call with our CEO if you want to know more about Team Up! and how it can help your company get the best out of remote and hybrid work."}
        </p>

        {/* Container where we append the script directly */}
        <div
          id="ycbm-container"
          ref={containerRef}
          className="booking-embed-container w-full overflow-hidden"
          data-ycbm
        >
          {!isLoaded && (
            <div className="flex justify-center items-center h-[700px] bg-gray-cloud bg-opacity-10">
              <div className={`${textColor} animate-pulse`}>
                {t("ContactSection.loadingText") ||
                  "Loading booking calendar..."}
              </div>
            </div>
          )}
        </div>

        {/* Using standard CTA pattern for the bottom section */}
        <div className="mt-12 text-center">
          <p className={`text-xl font-medium mb-4 ${textColor} font-poppins`}>
            {t("ContactSection.alternativeText") || "...or write us an email"}
          </p>
          <Button
            href="/contact"
            variant={theme === "light" ? "primary" : "tertiary"}
            size="lg"
            isDarkBackground={theme === "dark"}
          >
            {t("ContactSection.contactButtonText") || "Contact sales"}
          </Button>
        </div>
      </div>
    </section>
  );
}

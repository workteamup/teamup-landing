"use client";

import { useTranslations } from "../../contexts/TranslationContext";
import { useState, useRef, useEffect, useMemo } from "react";
import Button from "./button";

/**
 * BookingEmbed Component
 * Directly appends the YouCanBook.me script to the container
 * with improved handling to prevent duplication
 */
export default function BookingEmbed({
  domain = "teamup-ignacio",
  type = "embed", // Options: 'embed', 'modal', 'inline', 'text-link'
  displayMode = "auto", // Options: 'auto', 'desktop', 'mobile'
  customParams = {}, // Additional parameters
}) {
  const t = useTranslations();
  const [isLoaded, setIsLoaded] = useState(false);
  const [scriptFailed, setScriptFailed] = useState(false);
  const containerRef = useRef(null);

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
    script.setAttribute("data-displaymode", "desktop");
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

  return (
    <div className="container mx-auto max-w-7xl pt-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-phantom">
        {t("ContactSection.title")}
      </h2>

      <p className="text-center text-lg mb-8">
        Book a call with our CEO if you want to know more about Team Up! and how
        it can help your company get the best out of remote and hybrid work.
      </p>

      {/* Container where we append the script directly */}
      <div
        id="ycbm-container"
        ref={containerRef}
        className="booking-embed-container w-full overflow-hidden"
        data-ycbm
      >
        {!isLoaded && (
          <div className="flex justify-center items-center h-[700px]">
            <p className="text-gray-500">Loading booking calendar...</p>
          </div>
        )}
      </div>

      {/* Commenting out fallback iframe to prevent duplicate embeds
      {scriptFailed && (
        <div className="booking-embed-container min-h-[700px] w-full relative overflow-hidden">
          <iframe
            src={fullUrl}
            width="100%"
            height="700px"
            frameBorder="0"
            scrolling="no"
            style={{
              backgroundColor: "transparent", 
              border: "none",
              overflow: "hidden",
            }}
            allow="camera; microphone; fullscreen; accelerometer; autoplay; encrypted-media; geolocation; picture-in-picture"
            onLoad={() => setIsLoaded(true)}
          />

          {!isLoaded && (
            <div className="flex justify-center items-center h-[700px] absolute inset-0">
              <p className="text-gray-500">Loading booking calendar...</p>
            </div>
          )}
        </div>
      )}
      */}

      <div className="mt-8 text-center">
        <p className="text-xl font-medium mb-2">...or write us an email</p>
        <Button href="/contact" variant="primary" size="md">
          Contact sales
        </Button>
      </div>
    </div>
  );
}

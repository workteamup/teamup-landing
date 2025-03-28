"use client";

import Image from "next/image";
import {
  brandColors,
  brand2Shades,
  brand3Shades,
  greyColors,
} from "../../lib/design-tokens";

/**
 * LogoCarousel component displays an infinite scrolling carousel of logos
 *
 * @param {Object} props Component properties
 * @param {string} props.variant - 'dark', 'blue', 'purple' or 'gray' (default: 'dark')
 * @param {number} props.logoCount - Number of logo instances to display (default: 10)
 * @param {string} props.className - Additional classes to apply
 */
const LogoCarousel = ({ variant = "dark", logoCount = 10, className = "" }) => {
  // Define styles based on variant
  const variantStyles = {
    dark: {
      container: "bg-brand-dark",
      logo: "/svg/new-logo-white.svg",
      opacity: "opacity-25",
      direction: "slider-0", // left to right
      duration: "70s",
    },
    blue: {
      container: "bg-[#1A3974]", // Darker blue
      logo: "/svg/new-logo-white.svg",
      opacity: "opacity-25",
      direction: "slider-1", // right to left
      duration: "80s",
    },
    purple: {
      container: "bg-[#2A2566]", // Darker purple
      logo: "/svg/new-logo-white.svg",
      opacity: "opacity-25",
      direction: "slider-0", // left to right
      duration: "75s",
    },
    gray: {
      container: "bg-gray-phantom", // Dark gray
      logo: "/svg/new-logo-white.svg",
      opacity: "opacity-25",
      direction: "slider-1", // right to left
      duration: "85s",
    },
  };

  // Use the current variant's styles or default to dark
  const currentStyle = variantStyles[variant] || variantStyles.dark;

  // Create an array with specified number of logos
  const logos = Array(logoCount).fill(null);

  // Duplicate the logos to ensure smooth looping
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]; // Four copies for extra smoothness

  return (
    <div
      className={`${currentStyle.container} h-28 md:h-36 overflow-hidden ${className}`}
    >
      {/* Single carousel row with fixed height */}
      <div
        className="h-full w-full flex items-center justify-center slider-container"
        style={{ padding: 0 }}
      >
        <div
          className={`slider ${currentStyle.direction} flex-nowrap flex items-center`}
          style={{ animationDuration: currentStyle.duration }}
        >
          {duplicatedLogos.map((_, index) => (
            <div
              key={`logo-${index}`}
              className="px-12 flex-shrink-0 flex items-center"
            >
              <div className="relative group cursor-pointer">
                <Image
                  src={currentStyle.logo}
                  alt="Team Up!"
                  width={120}
                  height={30}
                  className={`h-10 w-auto ${currentStyle.opacity} transition-all duration-500 group-hover:opacity-90`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;

"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

/**
 * HeroImageStack Component
 * Displays 3 slightly overlapping and tilted images that fan out when mouse is nearby
 *
 * @param {Object} props Component properties
 * @param {Array} props.images - Array of image objects with src, alt, and width/height
 */
export default function HeroImageStack({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isNearby, setIsNearby] = useState(false);
  const containerRef = useRef(null);

  // Track mouse position and determine if it's near the component
  useEffect(() => {
    const trackMousePosition = (e) => {
      if (containerRef.current) {
        const { left, top, right, bottom, width, height } =
          containerRef.current.getBoundingClientRect();

        // Consider the mouse "nearby" if it's within 150px of the container's boundaries
        const proximityThreshold = 150;
        const isClose =
          e.clientX >= left - proximityThreshold &&
          e.clientX <= right + proximityThreshold &&
          e.clientY >= top - proximityThreshold &&
          e.clientY <= bottom + proximityThreshold;

        setIsNearby(isClose);
      }
    };

    window.addEventListener("mousemove", trackMousePosition);
    return () => {
      window.removeEventListener("mousemove", trackMousePosition);
    };
  }, []);

  // Default images if none provided - using images from spaces submenu
  const defaultImages = [
    {
      src: "/images/team-meeting-1.jpg",
      alt: "Team engaged in a virtual meeting",
      width: 600,
      height: 400,
    },
    {
      src: "/images/team-meeting-2.jpg",
      alt: "Remote team collaboration",
      width: 600,
      height: 400,
    },
    {
      src: "/images/team-meeting-3.jpg",
      alt: "Team building activity",
      width: 600,
      height: 400,
    },
  ];

  // Use provided images or defaults
  const displayImages = images.length ? images : defaultImages;

  // Tilts for each image to make them look more natural
  const tilts = ["rotate-[-3deg]", "rotate-[2deg]", "rotate-[-2deg]"];

  // Generate styles for each image based on its index, active state, and proximity
  const getImageStyles = (index) => {
    // Base styles that are always applied
    let styles = `absolute transition-all duration-300 rounded-lg shadow-lg ${tilts[index]} cursor-pointer`;

    // Staggered positions - with fan-out effect when mouse is nearby
    if (index === 0) {
      styles += isNearby
        ? " top-0 -left-14 w-[85%] h-[85%]" // More spread out when mouse is nearby
        : " top-0 -left-2 w-[85%] h-[85%]"; // Default position
    } else if (index === 1) {
      styles += isNearby
        ? " top-6 left-0 w-[85%] h-[85%]" // More centered when mouse is nearby
        : " top-6 left-6 w-[85%] h-[85%]"; // Default position
    } else if (index === 2) {
      styles += isNearby
        ? " -top-2 left-20 w-[85%] h-[85%]" // More to the right when mouse is nearby
        : " -top-2 left-12 w-[85%] h-[85%]"; // Default position
    }

    // When individually hovered, bring image to the front with stronger effects
    if (activeIndex === index) {
      styles += " z-30 scale-105 shadow-xl";
    }
    // Default z-index based on image position
    else {
      styles += ` z-${20 - index * 5}`;
    }

    return styles;
  };

  return (
    <div className="relative w-full aspect-[16/10] my-4" ref={containerRef}>
      <div className="relative w-full h-full rounded-xl overflow-visible">
        {/* Image stack container with more space for the staggered layout */}
        <div className="absolute inset-0 p-6">
          {displayImages.map((image, index) => (
            <div
              key={index}
              className={getImageStyles(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="rounded-lg shadow-md border-4 border-white object-cover w-full h-full"
                priority={index === 0} // Load first image with priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

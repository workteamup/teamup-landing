"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * HeroImageStack Component
 * Displays 3 slightly overlapping and tilted images that change z-index on hover
 *
 * @param {Object} props Component properties
 * @param {Array} props.images - Array of image objects with src, alt, and width/height
 */
export default function HeroImageStack({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

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

  // Generate styles for each image based on its index and active state
  const getImageStyles = (index) => {
    // Base styles that are always applied
    let styles = `absolute transition-all duration-200 rounded-lg shadow-lg ${tilts[index]}`;

    // Staggered positions - each image is offset in a different direction so all are visible
    if (index === 0) {
      styles += " top-0 -left-4 w-[85%] h-[90%]"; // First image offset to left
    } else if (index === 1) {
      styles += " top-4 left-8 w-[85%] h-[90%]"; // Second image offset to bottom-right
    } else if (index === 2) {
      styles += " -top-4 left-16 w-[85%] h-[90%]"; // Third image offset to top-right
    }

    // When hovered, bring this image to the front with a stronger shadow and slight scale
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
    <div className="relative w-full aspect-video">
      <div className="relative w-full h-full rounded-xl overflow-hidden">
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

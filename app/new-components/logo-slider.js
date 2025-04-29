"use client";

import React, { useRef, useEffect, useState } from "react";

export default function LogoSlider() {
  // Array of logo configurations
  const logos = [
    {
      src: "/svg/logos/teamup-logo-black.svg",
      height: 30, // height in pixels
    },
    {
      src: "/svg/logos/teamup-logo-black.svg",
      height: 40,
    },
    {
      src: "/svg/logos/teamup-logo-black.svg",
      height: 35,
    },
    // Add more logos with their individual configurations
  ];

  const setRef = useRef(null);
  const [setWidth, setSetWidth] = useState(0);
  const [repeatCount, setRepeatCount] = useState(2);

  // Ensure the set is at least as wide as the viewport
  useEffect(() => {
    function updateRepeatCount() {
      if (setRef.current) {
        const viewportWidth = setRef.current.parentElement.offsetWidth;
        const logoSetWidth = setRef.current.scrollWidth;
        // Repeat enough times to fill at least the viewport
        const minRepeats = Math.ceil(viewportWidth / logoSetWidth) + 1;
        setRepeatCount(Math.max(2, minRepeats));
        setSetWidth(logoSetWidth);
      }
    }
    updateRepeatCount();
    window.addEventListener("resize", updateRepeatCount);
    return () => window.removeEventListener("resize", updateRepeatCount);
  }, [logos]);

  // Build the repeated logo set
  const repeatedLogos = [];
  for (let i = 0; i < repeatCount; i++) {
    repeatedLogos.push(...logos);
  }

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="absolute inset-0 bg-white" />
      {/* Left gradient overlay */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      {/* Right gradient overlay */}
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      <div
        className="flex"
        style={{
          width: setWidth ? setWidth * repeatCount : "auto",
          animation: setWidth
            ? `logo-slider ${setWidth / 1}s linear infinite`
            : "none",
        }}
      >
        <div ref={setRef} className="flex">
          {repeatedLogos.map((logo, index) => (
            <LogoItem key={index} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoItem({ logo }) {
  return (
    <div
      className="group mx-8 flex items-center justify-center"
      style={{ minWidth: "120px" }}
    >
      <div className="flex items-center justify-center text-dark-steel transition-colors duration-300 group-hover:text-brand-700">
        <SVGLoader
          src={logo.src}
          style={{ height: `${logo.height}px`, width: "auto" }}
        />
      </div>
    </div>
  );
}

function SVGLoader({ src, style }) {
  const [svgContent, setSvgContent] = React.useState("");

  React.useEffect(() => {
    const fetchSVG = async () => {
      try {
        const response = await fetch(src);
        const text = await response.text();
        setSvgContent(text);
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    fetchSVG();
  }, [src]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      dangerouslySetInnerHTML={{
        __html: svgContent.replace(
          /<svg([^>]*)>/,
          '<svg$1 preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%;">'
        ),
      }}
    />
  );
}

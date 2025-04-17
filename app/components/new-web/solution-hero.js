"use client";

import React from "react";
import Button from "./button";
import { useTranslations } from "../../contexts/TranslationContext";
import {
  brandColors,
  brand1Tints,
  brand2Tints,
  brand3Tints,
  shadows,
  borderRadius,
  spacing
} from "../../lib/design-tokens";

/**
 * SolutionHero Component
 * A flexible hero section for solution pages that accepts custom content
 * 
 * @param {Object} props
 * @param {string} props.headline - The main headline text
 * @param {string} props.subheadline - The supporting subheadline text
 * @param {string} props.ctaText - Call to action button text
 * @param {string} props.ctaHref - Call to action button link
 * @param {string} props.backgroundStyle - Optional custom background style
 * @param {string} props.theme - Optional theme variant (default, blue, purple)
 * @returns {JSX.Element} The SolutionHero component
 */
export default function SolutionHero({
  headline,
  subheadline,
  ctaText,
  ctaHref = "#",
  backgroundStyle,
  theme = "default"
}) {
  const t = useTranslations();

  // Define theme-based gradients using design tokens
  const themeGradients = {
    default: `radial-gradient(circle at 0% 0%, ${brand3Tints.tint70} 0%, transparent 50%),
              radial-gradient(circle at 100% 0%, ${brand2Tints.tint70} 0%, transparent 50%),
              radial-gradient(circle at 50% 100%, ${brand1Tints.tint70} 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, ${brand3Tints.tint80} 0%, transparent 100%),
              linear-gradient(165deg, ${brand3Tints.tint90} 0%, ${brand2Tints.tint90} 100%)`,
    blue: `radial-gradient(circle at 0% 0%, ${brand2Tints.tint70} 0%, transparent 50%),
           radial-gradient(circle at 100% 0%, ${brand1Tints.tint70} 0%, transparent 50%),
           radial-gradient(circle at 50% 100%, ${brand2Tints.tint70} 0%, transparent 50%),
           radial-gradient(circle at 50% 50%, ${brand2Tints.tint80} 0%, transparent 100%),
           linear-gradient(165deg, ${brand2Tints.tint90} 0%, ${brand1Tints.tint90} 100%)`,
    purple: `radial-gradient(circle at 0% 0%, ${brand3Tints.tint70} 0%, transparent 50%),
             radial-gradient(circle at 100% 0%, ${brand2Tints.tint70} 0%, transparent 50%),
             radial-gradient(circle at 50% 100%, ${brand3Tints.tint70} 0%, transparent 50%),
             radial-gradient(circle at 50% 50%, ${brand3Tints.tint80} 0%, transparent 100%),
             linear-gradient(165deg, ${brand3Tints.tint90} 0%, ${brand2Tints.tint90} 100%)`
  };

  // Subtle blurred elements in brand colors with opacity values from design system
  const blobColors = {
    default: {
      primary: `radial-gradient(circle, rgba(99, 93, 245, 0.15) 0%, rgba(99, 93, 245, 0.05) 70%)`,
      secondary: `radial-gradient(circle, rgba(63, 137, 246, 0.15) 0%, rgba(63, 137, 246, 0.05) 60%)`,
      tertiary: `radial-gradient(circle, rgba(103, 218, 250, 0.15) 0%, rgba(103, 218, 250, 0.05) 70%)`
    },
    blue: {
      primary: `radial-gradient(circle, rgba(63, 137, 246, 0.15) 0%, rgba(63, 137, 246, 0.05) 70%)`,
      secondary: `radial-gradient(circle, rgba(103, 218, 250, 0.15) 0%, rgba(103, 218, 250, 0.05) 60%)`,
      tertiary: `radial-gradient(circle, rgba(99, 93, 245, 0.10) 0%, rgba(99, 93, 245, 0.03) 70%)`
    },
    purple: {
      primary: `radial-gradient(circle, rgba(99, 93, 245, 0.15) 0%, rgba(99, 93, 245, 0.05) 70%)`,
      secondary: `radial-gradient(circle, rgba(63, 137, 246, 0.10) 0%, rgba(63, 137, 246, 0.03) 60%)`,
      tertiary: `radial-gradient(circle, rgba(103, 218, 250, 0.10) 0%, rgba(103, 218, 250, 0.03) 70%)`
    }
  };

  // Select the appropriate theme
  const selectedGradient = themeGradients[theme] || themeGradients.default;
  const selectedBlobs = blobColors[theme] || blobColors.default;

  return (
    <section
      className={`py-16 md:py-24 lg:py-32 relative overflow-hidden`}
      style={{
        background: backgroundStyle || selectedGradient,
      }}
      aria-labelledby="solution-hero-heading"
    >
      {/* Subtle blurred elements in brand colors */}
      <div
        className="absolute top-[-15%] right-[-5%] w-[60%] h-[75%] rounded-full opacity-[0.25] blur-[60px]"
        style={{
          background: selectedBlobs.primary,
          boxShadow: shadows.xl,
        }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-[-5%] left-[5%] w-[45%] h-[65%] rounded-full opacity-[0.22] blur-[75px]"
        style={{
          background: selectedBlobs.secondary,
          boxShadow: shadows.lg,
        }}
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-[25%] left-[-10%] w-[40%] h-[55%] rounded-full opacity-[0.20] blur-[65px]"
        style={{
          background: selectedBlobs.tertiary,
          boxShadow: shadows.lg,
        }}
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            id="solution-hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-dark leading-tight font-poppins mb-6"
          >
            {headline}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-brand-dark max-w-3xl mx-auto mb-8 font-medium">
            {subheadline}
          </p>

          {ctaText && (
            <Button 
              href={ctaHref} 
              size="lg" 
              className="mt-4"
              aria-label={`${ctaText}: ${headline}`}
            >
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
} 
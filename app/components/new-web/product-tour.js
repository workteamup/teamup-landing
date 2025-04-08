"use client";

import { useState } from "react";
import Image from "next/image";
import VideoPlayerModal from "./video-player-modal";
import {
  brandColors,
  greyColors,
  semanticColors,
  shadows,
  spacing,
  borderRadius,
} from "../../lib/design-tokens";
import Button from "./button";

/**
 * ProductTour Component
 * Displays a section with a full-width, video-like appearance featuring a background
 * image, title, and a play button that opens a video modal when clicked.
 * Uses a pre-blurred image for the background.
 * Fully responsive across all device sizes.
 */
export default function ProductTour({
  subtitle = "PRODUCT TOUR",
  bgImage = "/images/planning.jpg",
  videoSrc = "/videos/placeholder.mp4",
}) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const openVideo = () => {
    // Check if we're in development and there's no actual video yet
    if (
      process.env.NODE_ENV === "development" &&
      videoSrc === "/videos/placeholder.mp4"
    ) {
      setVideoError(true);
    }
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setVideoError(false);
  };

  return (
    <section className="py-6 sm:py-6 md:py-8">
      {/* Container with same max-width as hero */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Main container */}
        <div className="relative w-full aspect-[16/9] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
          {/* Using pre-blurred image as background */}
          <Image
            src="/images/blurred-image.png"
            alt="Product Tour Background"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            priority
          />

          {/* Make entire container clickable */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4 sm:px-6 md:px-8 cursor-pointer"
            onClick={openVideo}
            role="button"
            aria-label="Open product tour video"
          >
            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base font-medium uppercase tracking-wider sm:tracking-widest mb-2 sm:mb-3 md:mb-4">
              {subtitle}
            </p>

            {/* Main title */}
            <h2 className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight font-poppins">
              <span className="font-light">How </span>
              <span className="font-bold text-white">Team Up!</span>
              <span className="font-light"> works</span>
            </h2>

            {/* Play button with glass effect */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/20 border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all">
              {/* Triangle play icon - scaled for responsive sizes */}
              <div className="w-0 h-0 border-y-[8px] sm:border-y-[10px] md:border-y-[14px] border-y-transparent border-l-[12px] sm:border-l-[16px] md:border-l-[22px] border-l-white ml-1"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {isVideoOpen &&
        (videoError ? (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-2xl">
              <button
                onClick={closeVideo}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 text-gray-graphite hover:text-gray-phantom focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-phantom mb-3 sm:mb-4 font-poppins">
                  Coming Soon!
                </h3>
                <p className="text-sm sm:text-base text-gray-space mb-5 sm:mb-6">
                  Our product tour video is currently being produced. Check back
                  soon to see how Team Up! can transform your team&apos;s
                  collaboration experience.
                </p>
                <Button onClick={closeVideo} variant="primary" size="lg">
                  Close
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <VideoPlayerModal
            isOpen={isVideoOpen}
            onClose={closeVideo}
            videoSrc={videoSrc}
            videoTitle="Team Up! Product Tour"
          />
        ))}
    </section>
  );
}

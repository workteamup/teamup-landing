"use client";

import { useState } from "react";
import Image from "next/image";
import VideoPlayerModal from "./video-player-modal";

/**
 * ProductTour Component
 * Displays a section with a full-width, video-like appearance featuring a background
 * image, title, and a play button that opens a video modal when clicked.
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
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      {/* Video-like container with rounded borders - full width minus padding */}
      <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl aspect-[16/9] shadow-xl w-full">
        {/* Background image - the image itself is expected to have natural blur/bokeh */}
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt="Product Tour Background"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              filter: "brightness(0.5)",
            }}
            priority
          />
        </div>

        {/* Semi-transparent overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4 sm:px-6 md:px-8">
          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base font-normal uppercase tracking-wider sm:tracking-widest mb-2 sm:mb-3 md:mb-4">
            {subtitle}
          </p>

          {/* Main title */}
          <h2 className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight">
            <span className="font-light">How </span>
            <span className="italic font-bold text-white">Team Up!</span>
            <span className="font-light"> works</span>
          </h2>

          {/* Simple play button (gray circle with triangle) - responsive sizes */}
          <button
            onClick={openVideo}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gray-400/50 flex items-center justify-center hover:bg-gray-300/60 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-label="Play product tour video"
          >
            {/* Triangle play icon - scaled for responsive sizes */}
            <div className="w-0 h-0 border-y-[8px] sm:border-y-[10px] md:border-y-[14px] border-y-transparent border-l-[12px] sm:border-l-[16px] md:border-l-[22px] border-l-white ml-1"></div>
          </button>
        </div>
      </div>

      {/* Video modal */}
      {isVideoOpen &&
        (videoError ? (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-2xl">
              <button
                onClick={closeVideo}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 text-gray-500 hover:text-gray-800 focus:outline-none"
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
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  Coming Soon!
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
                  Our product tour video is currently being produced. Check back
                  soon to see how Team Up! can transform your team's
                  collaboration experience.
                </p>
                <button
                  onClick={closeVideo}
                  className="px-4 py-2 sm:px-5 sm:py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Close
                </button>
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

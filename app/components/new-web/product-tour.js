"use client";

import { useState } from "react";
import Image from "next/image";
import VideoPlayerModal from "./video-player-modal";

/**
 * ProductTour Component
 * Displays a section with a full-width, video-like appearance featuring a background
 * image, title, and a play button that opens a video modal when clicked.
 * The reference image already has a natural blur/depth-of-field effect.
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
    <section className="py-16 px-4 sm:px-6 md:px-8">
      {/* Video-like container with rounded borders - full width minus padding */}
      <div className="relative overflow-hidden rounded-2xl aspect-video shadow-xl w-full">
        {/* Background image - the image itself is expected to have natural blur/bokeh */}
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt="Product Tour Background"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              // Only darkening the image, not blurring it
              filter: "brightness(0.5)",
            }}
            priority
          />
        </div>

        {/* Semi-transparent overlay for better text contrast if needed */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
          {/* Subtitle */}
          <p className="text-base font-normal uppercase tracking-widest mb-4">
            {subtitle}
          </p>

          {/* Main title */}
          <h2 className="mb-12 text-4xl md:text-6xl font-normal">
            <span className="font-light">How </span>
            <span className="italic font-bold text-white">Team Up!</span>
            <span className="font-light"> works</span>
          </h2>

          {/* Simple play button (gray circle with triangle) */}
          <button
            onClick={openVideo}
            className="w-20 h-20 rounded-full bg-gray-400/50 flex items-center justify-center hover:bg-gray-300/60 transition-all cursor-pointer"
            aria-label="Play product tour video"
          >
            {/* Triangle play icon */}
            <div className="w-0 h-0 border-y-[14px] border-y-transparent border-l-[22px] border-l-white ml-1"></div>
          </button>
        </div>
      </div>

      {/* Video modal */}
      {isVideoOpen &&
        (videoError ? (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95">
            <div className="relative w-full max-w-2xl mx-4 p-8 lg:mx-auto bg-white rounded-lg shadow-2xl">
              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Coming Soon!
                </h3>
                <p className="text-gray-600 mb-6">
                  Our product tour video is currently being produced. Check back
                  soon to see how Team Up! can transform your team's
                  collaboration experience.
                </p>
                <button
                  onClick={closeVideo}
                  className="px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
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

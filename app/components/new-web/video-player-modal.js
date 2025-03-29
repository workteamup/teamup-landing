"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

/**
 * VideoPlayerModal Component
 * Displays a full-screen modal with a video player
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {function} props.onClose - Function to call when closing the modal
 * @param {string} props.videoSrc - Source URL of the video to play
 * @param {string} props.videoTitle - Title of the video for accessibility
 */
export default function VideoPlayerModal({
  isOpen,
  onClose,
  videoSrc = "/videos/placeholder.mp4",
  videoTitle = "Product Tour Video",
}) {
  const modalRef = useRef(null);
  const videoRef = useRef(null);

  // Handle pressing escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle clicking outside video container to close
  const handleBackdropClick = (e) => {
    if (modalRef.current && e.target === modalRef.current) {
      onClose();
    }
  };

  // Pause video when closing the modal
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-5xl mx-4 lg:mx-auto aspect-video bg-black rounded-lg shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black text-white rounded-full p-2 transition-colors"
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video player */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-contain"
          controls
          autoPlay
          title={videoTitle}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

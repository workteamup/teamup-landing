"use client";
import React from "react";
import Button from "./button";
import Image from "next/image";
import { cn } from "../lib/utils";

const Hero = ({
  preTitle,
  title,
  subtitle,
  buttons = [],
  video,
  image,
  extraContent,
  className = "",
  preTitleClassName,
  titleClassName,
  subtitleClassName,
  buttonsContainerClassName,
  videoContainerClassName,
  imageContainerClassName,
  videoClassName,
  imageClassName,
  imageWidth = 1200,
  imageHeight = 800,
  videoAutoplay = false,
  videoControls = true,
  bgClassName = "bg-purple-900",
}) => {
  return (
    <section className={cn("w-full", bgClassName, className)}>
      <div className="w-full max-w-[1600px] mx-auto px-4 lg:px-12 pt-[calc(96px+88px)]  lg:pt-[calc(144px+88px)] pb-20 lg:pb-36">
        <div className="flex flex-col items-center text-center">
          {preTitle && (
            <p
              className={cn(
                "text-xs lg:text-sm font-semibold text-white opacity-80 uppercase tracking-[0.08em] mb-4",
                preTitleClassName
              )}
            >
              {preTitle}
            </p>
          )}
          {title && (
            <h1
              className={cn(
                "text-3xl lg:text-7xl font-semibold text-white leading-tight",
                titleClassName
              )}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p
              className={cn(
                "text-base lg:text-2xl text-white opacity-80 mt-3 lg:mt-8 lg:leading-10 tracking-wide",
                subtitleClassName
              )}
            >
              {subtitle}
            </p>
          )}

          {buttons.length > 0 && (
            <div
              className={cn(
                "w-full md:w-auto flex flex-col md:flex-row gap-4 mt-12 mx-auto",
                buttonsContainerClassName
              )}
            >
              {buttons.map((buttonProps, index) => (
                <Button key={index} {...buttonProps} />
              ))}
            </div>
          )}
        </div>

        <div className="mt-16">
          {video && (
            <div
              className={cn(
                "w-full max-w-6xl mx-auto rounded-2xl lg:rounded-[40px] overflow-hidden shadow-xl",
                videoContainerClassName
              )}
            >
              <video
                className={cn("w-full h-auto", videoClassName)}
                src={video}
                controls={videoControls}
                autoPlay={videoAutoplay}
                playsInline
                muted={videoAutoplay}
                loop={videoAutoplay}
              />
            </div>
          )}

          {image && !video && (
            <div
              className={cn(
                "w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl",
                imageContainerClassName
              )}
            >
              <Image
                src={image}
                alt={title || "Hero image"}
                width={imageWidth}
                height={imageHeight}
                className={cn("w-full h-auto object-cover", imageClassName)}
              />
            </div>
          )}

          {extraContent && !video && !image && extraContent}
        </div>
      </div>
    </section>
  );
};

export default Hero;

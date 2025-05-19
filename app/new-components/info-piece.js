"use client";
import React from "react";
import Button from "./button";
import { cn } from "../lib/utils";
import Image from "next/image";

const InfoPiece = ({
  icon,
  preTitle,
  tag,
  title,
  description,
  cta,
  supportContent,
  image,
  video,
  className = "",
  containerClassName = "",
  textContentClassName = "",
  supportContentClassName = "",
  mediaContainerClassName = "",
  iconContainerClassName = "",
  iconClassName = "",
  preTitleClassName = "",
  tagClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  ctaClassName = "",
  videoClassName = "",
  imageClassName = "",
  videoAutoplay = true,
  videoControls = false,
  imageWidth = 440,
  imageHeight = 248,
  reverse = false,
}) => {
  return (
    <section className={cn("w-full", className)}>
      <div
        className={cn(
          "w-full max-w-[1440px] mx-auto py-6 lg:py-12 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row",
          containerClassName
        )}
      >
        {/* Text Content */}
        <div className={cn("w-full lg:max-w-[440px]", textContentClassName)}>
          {/* Icon/PreTitle/Tag */}
          {icon && (
            <div
              className={cn(
                "w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-5",
                iconContainerClassName
              )}
            >
              {React.cloneElement(icon, {
                className: cn("w-6 h-6 text-purple-500", iconClassName),
              })}
            </div>
          )}
          {preTitle && (
            <p
              className={cn(
                "text-xs text-center font-semibold text-dark-space uppercase tracking-[0.08em] mb-5",
                preTitleClassName
              )}
            >
              {preTitle}
            </p>
          )}
          {tag && (
            <div
              className={cn(
                "inline-flex items-center bg-purple-50 text-purple-400 text-xs lg:text-base font-medium font-poppins px-4 lg:px-5 py-3 lg:py-3 rounded-full mb-4 lg:mb-5",
                tagClassName
              )}
            >
              {tag}
            </div>
          )}

          {/* Title */}
          {title && (
            <h2
              className={cn(
                "text-2xl lg:text-3xl font-medium text-brand-700 mb-3 lg:mb-5",
                titleClassName
              )}
            >
              {title}
            </h2>
          )}

          {/* Description or Custom Component */}
          {description &&
            (typeof description === "string" ? (
              <p
                className={cn(
                  "text-base lg:text-lg text-dark-space mb-5 ",
                  descriptionClassName
                )}
              >
                {description}
              </p>
            ) : (
              <div className="mb-5 ">{description}</div>
            ))}

          {/* CTA */}
          {cta && (
            <div className={ctaClassName}>
              <Button
                variant={cta.variant || "primary"}
                size={cta.size || "lg"}
                {...cta}
              >
                {cta.children}
              </Button>
            </div>
          )}
        </div>

        {/* Media content (supportContent, video, or image) */}
        <div
          className={cn(
            "w-full lg:w-1/2 max-w-[440px] flex justify-center",
            supportContentClassName
          )}
        >
          {supportContent && supportContent}

          {!supportContent && video && (
            <div
              className={cn(
                "w-full relative rounded-lg overflow-hidden",
                mediaContainerClassName
              )}
            >
              <video
                autoPlay={videoAutoplay}
                loop={videoAutoplay}
                muted={videoAutoplay}
                controls={videoControls}
                playsInline
                className={cn("w-full h-auto rounded-lg", videoClassName)}
                style={{ aspectRatio: "auto" }}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {!supportContent && !video && image && (
            <div className={cn("relative w-full", mediaContainerClassName)}>
              <Image
                src={image}
                alt={title || "Feature image"}
                width={imageWidth}
                height={imageHeight}
                className={cn("object-contain rounded-lg", imageClassName)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfoPiece;

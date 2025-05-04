"use client";
import React from "react";
import Image from "next/image";
import { cn } from "../lib/utils";

const Steps = ({
  steps = [],
  className = "",
  containerClassName = "",
  stepNumberContainerClassName = "",
  stepNumberClassName = "",
  lineClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  mediaContainerClassName = "",
}) => {
  return (
    <div className={cn("w-full max-w-[720px] mx-auto", className)}>
      <div className={cn("relative", containerClassName)}>
        {/* Vertical line */}
        {steps.length > 1 && (
          <div
            className={cn(
              "absolute left-5 lg:left-6 top-5 lg:top-6 w-0.5 bg-purple-200",
              lineClassName
            )}
            style={{
              height: `calc(${(steps.length - 1) * 100}% / ${
                steps.length
              } + 32px)`,
            }}
          />
        )}

        {/* Steps */}
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4 lg:gap-12 pb-16 last:pb-0">
            {/* Step Number */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-purple-600 flex items-center justify-center z-10",
                  stepNumberContainerClassName
                )}
              >
                <span
                  className={cn(
                    "text-lg font-semibold text-white",
                    stepNumberClassName
                  )}
                >
                  {index + 1}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Title */}
              {step.title && (
                <h3
                  className={cn(
                    "text-lg lg:text-xl font-medium text-brand-700 pt-2 lg:pt-2.5",
                    titleClassName
                  )}
                >
                  {step.title}
                </h3>
              )}

              {/* Description */}
              {step.description && (
                <p
                  className={cn(
                    "mt-2 text-sm lg:text-base text-dark-space",
                    descriptionClassName
                  )}
                >
                  {step.description}
                </p>
              )}

              {/* Media */}
              {(step.image || step.video) && (
                <div
                  className={cn(
                    "mt-6 w-full max-w-[800px] h-[400px] relative",
                    mediaContainerClassName
                  )}
                >
                  {step.image && (
                    <Image
                      src={step.image}
                      alt={step.title || `Step ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  )}
                  {step.video && (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain rounded-lg"
                    >
                      <source src={step.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;

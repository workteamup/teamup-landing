"use client";
import React from "react";
import Button from "./button";
import { cn } from "../lib/utils";

const SimpleStartSection = ({
  preTitle,
  title,
  subtitle,
  cta,
  features = [],
  className = "",
  containerClassName = "",
  bgClassName = "bg-white",
  preTitleClassName,
  titleClassName,
  subtitleClassName,
  ctaClassName,
  featuresContainerClassName,
  featureTitleClassName,
  featureDescriptionClassName,
}) => {
  return (
    <section className={cn("w-full", bgClassName, className)}>
      <div
        className={cn(
          "w-full max-w-[1200px] mx-auto px-4 lg:px-6 py-[120px]",
          containerClassName
        )}
      >
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="flex flex-col lg:items-start items-center text-center lg:text-left lg:w-1/2">
            {preTitle && (
              <p
                className={cn(
                  "text-xs font-semibold text-brand-600 uppercase tracking-[0.08em] mb-1",
                  preTitleClassName
                )}
              >
                {preTitle}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "text-2xl lg:text-5xl font-semibold text-brand-700 leading-tight",
                  titleClassName
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "text-base lg:text-xl text-gray-500 mt-5 lg:mt-6 lg:leading-7",
                  subtitleClassName
                )}
              >
                {subtitle}
              </p>
            )}
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              {cta && (
                <div className={cn("mt-10 lg:mt-12", ctaClassName)}>
                  <Button variant="primary" size="lg" {...cta}>
                    {cta.children}
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          {features.length > 0 && (
            <div className="lg:w-1/2">
              <div className={cn("flex flex-col", featuresContainerClassName)}>
                {features.map((feature, index) => (
                  <div className="flex flex-col gap-4" key={index}>
                    <div className="flex flex-col gap-0">
                      {feature.title && (
                        <h3
                          className={cn(
                            "text-lg lg:text-2xl font-medium text-brand-700",
                            featureTitleClassName
                          )}
                        >
                          {feature.title}
                        </h3>
                      )}
                      {feature.description && (
                        <p
                          className={cn(
                            "text-sm lg:text-base text-dark-space leading-6 hyphens-none",
                            featureDescriptionClassName
                          )}
                        >
                          {feature.description}
                        </p>
                      )}
                    </div>
                    {index < features.length - 1 && (
                      <div className="mt-0 mb-0"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mobile CTA */}
          <div className="lg:hidden flex justify-center ">
            {cta && (
              <div className={cn("mt-10 ", ctaClassName)}>
                <Button variant="primary" size="lg" {...cta}>
                  {cta.children}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleStartSection;

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
          "w-full max-w-[1200px] mx-auto px-12 py-[120px]",
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
                  "text-5xl font-semibold text-brand-700 leading-tight",
                  titleClassName
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "text-xl text-gray-500 mt-6 leading-7",
                  subtitleClassName
                )}
              >
                {subtitle}
              </p>
            )}
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              {cta && (
                <div className={cn("mt-[60px]", ctaClassName)}>
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
                  <div key={index}>
                    <div className="flex flex-col gap-0">
                      {feature.title && (
                        <h3
                          className={cn(
                            "text-2xl font-semibold text-brand-700",
                            featureTitleClassName
                          )}
                        >
                          {feature.title}
                        </h3>
                      )}
                      {feature.description && (
                        <p
                          className={cn(
                            "text-base text-gray-500 leading-6 hyphens-none",
                            featureDescriptionClassName
                          )}
                        >
                          {feature.description}
                        </p>
                      )}
                    </div>
                    {index < features.length - 1 && (
                      <div className="h-10 mt-0 mb-0"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mobile CTA */}
          <div className="lg:hidden flex justify-center">
            {cta && (
              <div className={cn("mt-12", ctaClassName)}>
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

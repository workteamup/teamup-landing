"use client";
import React from "react";
import Button from "./button";
import { Check } from "lucide-react";
import { cn } from "../lib/utils";

const PricingCard = ({
  title,
  subtitle,
  price,
  priceText,
  buttonProps,
  features = [],
  featuresTitle = "Features",
  className = "",
  containerClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  priceContainerClassName = "",
  priceTextClassName = "",
  priceNumberClassName = "",
  priceSubtextClassName = "",
  featuresContainerClassName = "",
  featureItemClassName = "",
  featureTextClassName = "",
}) => {
  return (
    <div
      className={cn(
        "w-full max-w-[400px] bg-white border border-purple-300 rounded-2xl lg:rounded-[40px] px-6 py-12 lg:px-12 lg:py-16",
        containerClassName,
        className
      )}
    >
      {/* Title */}
      {title && (
        <h2
          className={cn(
            "text-3xl lg:text-5xl font-semibold text-brand-700",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}

      {/* Subtitle */}
      {subtitle && (
        <div
          className={cn(
            "min-h-[72px] lg:min-h-[96px] mt-4 lg:mt-8",
            subtitleClassName
          )}
        >
          <p className="text-base lg:text-lg text-dark-space">{subtitle}</p>
        </div>
      )}

      {/* Price Section */}
      <div className={cn("mt-8", priceContainerClassName)}>
        {price ? (
          <div className="flex items-center gap-1">
            <h3
              className={cn(
                "text-3xl lg:text-4xl font-medium text-brand-700",
                priceNumberClassName
              )}
            >
              ${price}
            </h3>
            <div className="flex flex-col justify-end">
              <span
                className={cn(
                  "text-xs text-dark-arsenic leading-none",
                  priceTextClassName
                )}
              >
                USD/user/mo
              </span>
              <span
                className={cn(
                  "text-xs text-dark-arsenic",
                  priceSubtextClassName
                )}
              >
                (billed annually)
              </span>
            </div>
          </div>
        ) : (
          <h3
            className={cn(
              "text-3xl lg:text-4xl font-medium text-brand-700",
              priceTextClassName
            )}
          >
            {priceText}
          </h3>
        )}
      </div>

      {/* Button */}
      {buttonProps && (
        <div className="mt-6 lg:mt-8">
          <Button {...buttonProps} />
        </div>
      )}

      {/* Features */}
      {features.length > 0 && (
        <div className={cn("mt-8", featuresContainerClassName)}>
          <h3 className="text-base font-medium text-brand-700 mb-4">
            {featuresTitle}
          </h3>
          <ul className="space-y-2 lg:space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className={cn("flex items-start", featureItemClassName)}
              >
                <Check className="w-4 h-4 lg:w-5 lg:h-5 text-purple-300 flex-shrink-0 mr-3 lg:mr-4 mt-0.5" />
                <span
                  className={cn(
                    "text-sm lg:text-base text-dark-graphite",
                    featureTextClassName
                  )}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PricingCard;

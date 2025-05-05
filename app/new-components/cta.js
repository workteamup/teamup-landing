"use client";
import React from "react";
import Button from "./button";
import { cn } from "../lib/utils";

const CTA = ({
  mainClaim,
  description,
  buttons = [],
  className = "",
  containerClassName = "",
  mainClaimClassName = "",
  descriptionClassName = "",
  buttonsContainerClassName = "",
}) => {
  return (
    <section className={cn("w-full px-4", className)}>
      <div
        className={cn(
          "w-full max-w-[1440px] bg-purple-800 mx-auto px-6 py-12 lg:px-12 lg:py-24 rounded-3xl lg:rounded-[40px]",
          containerClassName
        )}
      >
        {/* Main Claim */}
        {mainClaim && (
          <h2
            className={cn(
              "text-3xl lg:text-5xl font-medium text-white text-center",
              mainClaimClassName
            )}
          >
            {mainClaim}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p
            className={cn(
              "mt-2 lg:mt-4 text-lg lg:text-2xl text-white/80 text-center mx-auto",
              descriptionClassName
            )}
          >
            {description}
          </p>
        )}

        {/* Buttons */}
        {buttons.length > 0 && (
          <div
            className={cn(
              "mt-12 lg:mt-20 flex flex-col md:flex-row gap-4 justify-center",
              buttonsContainerClassName
            )}
          >
            {buttons.map((buttonProps, index) => (
              <Button
                key={index}
                variant="secondary"
                size="lg"
                {...buttonProps}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;

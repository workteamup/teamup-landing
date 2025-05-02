"use client";
import React from "react";
import Image from "next/image";
import { cn } from "../lib/utils";

const Testimonial = ({
  logo,
  quote,
  person = {},
  className = "",
  containerClassName = "",
  logoClassName = "",
  quoteClassName = "",
  personContainerClassName = "",
  personImageClassName = "",
  personNameClassName = "",
  personJobTitleClassName = "",
}) => {
  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "w-full max-w-[1440px] mx-auto px-4 lg:px-12 py-20 lg:py-32",
          containerClassName
        )}
      >
        {/* Logo */}
        {logo && (
          <div className="flex justify-center">
            <div className={cn("h-6 lg:h-8", logoClassName)}>
              <Image
                src={logo}
                alt="Company logo"
                width={0}
                height={32}
                className="h-6 lg:h-8 w-auto"
              />
            </div>
          </div>
        )}

        {/* Quote */}
        {quote && (
          <p
            className={cn(
              "mt-4 lg:mt-8 text-lg lg:text-3xl font-medium text-brand-700 text-center max-w-[960px] mx-auto",
              quoteClassName
            )}
          >
            {quote}
          </p>
        )}

        {/* Person Info */}
        {(person.image || person.name || person.jobTitle) && (
          <div
            className={cn(
              "mt-4 lg:mt-8 flex items-center justify-center gap-2 lg:gap-4",
              personContainerClassName
            )}
          >
            {person.image && (
              <div
                className={cn(
                  "relative h-10 lg:h-16 w-10 lg:w-16",
                  personImageClassName
                )}
              >
                <Image
                  src={person.image}
                  alt={person.name || "Testimonial author"}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col">
              {person.name && (
                <span
                  className={cn(
                    "text-sm lg:text-base font-medium text-brand-700",
                    personNameClassName
                  )}
                >
                  {person.name}
                </span>
              )}
              {person.jobTitle && (
                <span
                  className={cn(
                    "text-xs lg:text-sm text-dark-space",
                    personJobTitleClassName
                  )}
                >
                  {person.jobTitle}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;

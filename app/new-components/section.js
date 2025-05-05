"use client";
import React from "react";
import Button from "./button";
import { cn } from "../lib/utils";

const Section = ({
  preTitle,
  title,
  subtitle,
  buttons = [],
  children,
  className = "",
  preTitleClassName,
  titleClassName,
  subtitleClassName,
  buttonsContainerClassName,
  buttonsPosition = "top", // 'top' or 'bottom'
  containerClassName = "",
  bgClassName = "",
}) => {
  console.log("Section props:", { preTitle, title, subtitle });

  return (
    <section
      className={cn(
        "w-full max-w-[1600px] mx-auto px-4 lg:px-6 py-20 lg:py-32",
        containerClassName,
        bgClassName,
        className
      )}
    >
      {(preTitle || title || subtitle) && (
        <div className="flex flex-col items-center text-center">
          {preTitle && (
            <p
              className={cn(
                "text-xs lg:text-sm font-semibold text-dark-space uppercase tracking-[0.08em] mb-4",
                preTitleClassName
              )}
            >
              {preTitle}
            </p>
          )}
          {title && (
            <h2
              className={cn(
                "text-3xl lg:text-6xl font-semibold text-brand-700 leading-tight",
                titleClassName
              )}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={cn(
                "text-base lg:text-2xl text-dark-graphite mt-5 lg:mt-8 lg:leading-10 tracking-wide",
                subtitleClassName
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      {buttons.length > 0 && buttonsPosition === "top" && (
        <div
          className={cn(
            "flex flex-col md:flex-row gap-4 mt-12 justify-center",
            buttonsContainerClassName
          )}
        >
          {buttons.map(({ children, ...buttonProps }, index) => (
            <Button key={index} {...buttonProps}>
              {children}
            </Button>
          ))}
        </div>
      )}

      {children && <div className="mt-16">{children}</div>}

      {buttons.length > 0 && buttonsPosition === "bottom" && (
        <div className="flex flex-col items-center text-center mt-16 w-full">
          <div
            className={cn(
              "flex flex-col md:flex-row gap-4 w-full md:w-auto mx-auto",
              buttonsContainerClassName
            )}
          >
            {buttons.map(({ children, ...buttonProps }, index) => (
              <Button key={index} {...buttonProps} className="w-full md:w-auto">
                {children}
              </Button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Section;

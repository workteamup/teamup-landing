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
        "w-full max-w-[1600px] mx-auto px-6 py-24",
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
                "text-sm font-semibold text-dark-space uppercase tracking-[0.08em] mb-4",
                preTitleClassName
              )}
            >
              {preTitle}
            </p>
          )}
          {title && (
            <h2
              className={cn(
                "text-7xl font-semibold text-brand-700 leading-tight",
                titleClassName
              )}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={cn(
                "text-2xl text-brand-600 mt-8 leading-10 tracking-wide",
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
            "flex gap-4 mt-12 justify-center",
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
        <div className="flex flex-col items-center text-center mt-16">
          <div className={cn("flex gap-4", buttonsContainerClassName)}>
            {buttons.map(({ children, ...buttonProps }, index) => (
              <Button key={index} {...buttonProps}>
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

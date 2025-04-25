"use client";
import React from "react";
import Button from "./button";
import { cn } from "../lib/utils";

const Hero = ({
  preTitle,
  title,
  subtitle,
  buttons = [],
  extraContent,
  className = "",
  preTitleClassName,
  titleClassName,
  subtitleClassName,
  buttonsContainerClassName,
  bgClassName = "bg-purple-900",
}) => {
  return (
    <section className={cn("w-full", bgClassName, className)}>
      <div className="w-full max-w-[1600px] mx-auto px-12 pt-[calc(144px+88px)] pb-36">
        <div className="flex flex-col items-center text-center">
          {preTitle && (
            <p
              className={cn(
                "text-sm font-semibold text-white opacity-80 uppercase tracking-[0.08em] mb-4",
                preTitleClassName
              )}
            >
              {preTitle}
            </p>
          )}
          {title && (
            <h1
              className={cn(
                "text-7xl font-semibold text-white leading-tight",
                titleClassName
              )}
            >
              {title}
            </h1>
          )}
          {subtitle && (
            <p
              className={cn(
                "text-2xl text-white opacity-80 mt-8 leading-10 tracking-wide",
                subtitleClassName
              )}
            >
              {subtitle}
            </p>
          )}

          {buttons.length > 0 && (
            <div className={cn("flex gap-4 mt-12", buttonsContainerClassName)}>
              {buttons.map((buttonProps, index) => (
                <Button key={index} {...buttonProps} />
              ))}
            </div>
          )}
        </div>

        {extraContent && <div className="mt-16">{extraContent}</div>}
      </div>
    </section>
  );
};

export default Hero;

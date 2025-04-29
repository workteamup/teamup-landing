"use client";
import React from "react";
import Button from "./button";
import Image from "next/image";
import { cn } from "../lib/utils";

const ClosingCTA = ({
  imageSrc = "/images/closing-cta.png",
  text = "Start creating a company culture that works",
  buttonText = "Request access",
  className = "",
  containerClassName = "",
  imageContainerClassName = "",
  textClassName = "",
  buttonClassName = "",
}) => {
  return (
    <section className={cn("w-full", className)}>
      <div
        className={cn(
          "w-full max-w-[1440px] mx-auto px-12 py-24 flex flex-col items-center text-center gap-12",
          containerClassName
        )}
      >
        {/* Image */}
        <div
          className={cn(
            "w-[220px] h-[280px] relative rounded-lg overflow-hidden",
            imageContainerClassName
          )}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt="CTA Image"
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-purple-100" />
          )}
        </div>

        {/* Text */}
        <h2
          className={cn(
            "text-5xl font-medium text-brand-700 max-w-[800px]",
            textClassName
          )}
        >
          {text}
        </h2>

        {/* Button */}
        <div className={cn(buttonClassName)}>
          <Button variant="primary" size="xl">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;

"use client";
import React from "react";
import Button from "./button";
import { cn } from "../lib/utils";
import Image from "next/image";

const InfoPiece = ({
  icon,
  preTitle,
  tag,
  title,
  description,
  cta,
  supportContent,
  className = "",
  containerClassName = "",
  textContentClassName = "",
  supportContentClassName = "",
  iconContainerClassName = "",
  iconClassName = "",
  preTitleClassName = "",
  tagClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  ctaClassName = "",
  reverse = false,
}) => {
  return (
    <section className={cn("w-full", className)}>
      <div
        className={cn(
          "w-full max-w-[1440px] mx-auto px-[80px] py-[80px] flex flex-col lg:flex-row justify-center items-center gap-16",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row",
          containerClassName
        )}
      >
        {/* Text Content */}
        <div className={cn("w-full lg:max-w-[440px]", textContentClassName)}>
          {/* Icon/PreTitle/Tag */}
          {icon && (
            <div
              className={cn(
                "w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-5",
                iconContainerClassName
              )}
            >
              {React.cloneElement(icon, {
                className: cn("w-6 h-6 text-purple-500", iconClassName),
              })}
            </div>
          )}
          {preTitle && (
            <p
              className={cn(
                "text-xs font-semibold text-dark-space uppercase tracking-[0.08em] mb-5",
                preTitleClassName
              )}
            >
              {preTitle}
            </p>
          )}
          {tag && (
            <div
              className={cn(
                "inline-flex items-center bg-purple-50 text-purple-400 text-base font-medium font-poppins px-5 py-3 rounded-full mb-5",
                tagClassName
              )}
            >
              {tag}
            </div>
          )}

          {/* Title */}
          {title && (
            <h2
              className={cn(
                "text-3xl font-medium text-brand-700 mb-5",
                titleClassName
              )}
            >
              {title}
            </h2>
          )}

          {/* Description or Custom Component */}
          {description &&
            (typeof description === "string" ? (
              <p
                className={cn(
                  "text-xl text-dark-space mb-12",
                  descriptionClassName
                )}
              >
                {description}
              </p>
            ) : (
              <div className="mb-12">{description}</div>
            ))}

          {/* CTA */}
          {cta && (
            <div className={ctaClassName}>
              <Button
                variant={cta.variant || "primary"}
                size={cta.size || "lg"}
                {...cta}
              >
                {cta.children}
              </Button>
            </div>
          )}
        </div>

        {/* Support Content */}
        {supportContent && (
          <div
            className={cn(
              "w-full lg:w-1/2 flex justify-center",
              supportContentClassName
            )}
          >
            {supportContent}
          </div>
        )}
      </div>
    </section>
  );
};

export default InfoPiece;

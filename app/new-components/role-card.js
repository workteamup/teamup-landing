"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";

const RoleCard = ({
  imageSrc,
  title,
  href = "#",
  className = "",
  containerClassName = "",
  innerContainerClassName = "",
  imageContainerClassName = "",
  imageClassName = "",
  titleClassName = "",
}) => {
  return (
    <Link href={href} passHref>
      <div
        className={cn(
          "w-full h-full mx-auto bg-purple-50 rounded-[40px] flex flex-col",
          "transform transition-transform duration-300 hover:scale-105",
          "cursor-pointer shadow-lg hover:shadow-xl",
          className
        )}
      >
        {/* Inner Container */}
        <div
          className={cn(
            "mx-8 mt-8 bg-white rounded-[24px] overflow-hidden",
            innerContainerClassName
          )}
        >
          <div
            className={cn(
              "relative w-[165px] h-[270px] mx-auto",
              imageContainerClassName
            )}
          >
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={title || "Role image"}
                width={165}
                height={270}
                className={cn("object-contain", imageClassName)}
              />
            )}
          </div>
        </div>

        {/* Title */}
        {title && (
          <h3
            className={cn(
              "mt-8 mb-8 text-2xl font-medium text-brand-700 text-center px-4 flex-1 flex items-center justify-center",
              titleClassName
            )}
          >
            {title}
          </h3>
        )}
      </div>
    </Link>
  );
};

export default RoleCard;

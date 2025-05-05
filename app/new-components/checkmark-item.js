"use client";
import React from "react";
import { Check } from "lucide-react";
import { cn } from "../lib/utils";

const CheckmarkItem = ({
  text,
  className = "",
  containerClassName = "",
  iconClassName = "",
  textClassName = "",
}) => {
  return (
    <div
      className={cn("flex items-start gap-4", containerClassName, className)}
    >
      <div className="flex-shrink-0 w-5 h-5 lg:w-8 lg:h-8 rounded-full bg-purple-50 flex items-center justify-center">
        <Check
          className={cn("w-3 h-3 lg:w-5 lg:h-5 text-purple-600", iconClassName)}
        />
      </div>
      <span
        className={cn(
          "text-sm lg:text-lg text-dark-space pt-0 lg:pt-0.5",
          textClassName
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default CheckmarkItem;

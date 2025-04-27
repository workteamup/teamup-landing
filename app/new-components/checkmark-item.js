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
      <div className="flex-shrink-0">
        <Check className={cn("w-7 h-7 text-green-500 mt-0.5", iconClassName)} />
      </div>
      <span className={cn("text-lg text-dark-space", textClassName)}>
        {text}
      </span>
    </div>
  );
};

export default CheckmarkItem;

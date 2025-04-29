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
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center">
        <Check className={cn("w-5 h-5 text-purple-800", iconClassName)} />
      </div>
      <span className={cn("text-lg text-dark-space", textClassName)}>
        {text}
      </span>
    </div>
  );
};

export default CheckmarkItem;

import React from "react";
import { cn } from "../lib/utils";
import { Icon } from "lucide-react";

const Button = ({
  size = "md",
  variant = "primary",
  withShadow = true,
  iconLeft,
  iconRight,
  underline = false,
  className,
  children,
  ...props
}) => {
  const baseClasses =
    "rounded-full font-poppins font-medium transition-all duration-200 flex items-center justify-center";

  const sizeClasses = {
    sm: "h-10 px-[18px] py-3 text-xs",
    md: "h-12 px-5 py-[14px] text-sm",
    lg: "h-14 px-6 py-4 text-base",
    xl: "h-[68px] px-8 py-5 text-lg",
    text: "h-auto px-0 py-0",
  };

  const variantClasses = {
    primary: "bg-purple-600 text-white border-transparent",
    secondary: "bg-white text-brand-700 border border-purple-600",
    tertiary: "bg-purple-50 text-purple-600 border-transparent",
    text:
      className?.includes("bg-") && !className?.includes("bg-dark")
        ? "text-brand-700"
        : "text-white",
  };

  const shadowClasses = withShadow
    ? "hover:shadow-lg hover:-translate-y-0.5"
    : "";

  const underlineClass = underline ? "underline" : "";

  const iconSizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-7 w-7",
  };

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        shadowClasses,
        underlineClass,
        className
      )}
      {...props}
    >
      {iconLeft && (
        <span className={cn("mr-2", iconSizeClasses[size])}>
          {React.cloneElement(iconLeft, { className: "w-full h-full" })}
        </span>
      )}
      <span>{children}</span>
      {iconRight && (
        <span className={cn("ml-2", iconSizeClasses[size])}>
          {React.cloneElement(iconRight, { className: "w-full h-full" })}
        </span>
      )}
    </button>
  );
};

export default Button;

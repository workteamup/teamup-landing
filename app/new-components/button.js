"use client";

import React from "react";
import Link from "next/link";
import { cn } from "../lib/utils";
import { Icon } from "lucide-react";

const Button = ({
  size = "md",
  variant = "primary",
  withShadow = true,
  iconLeft,
  iconRight,
  underline = false,
  iconOnly = false,
  className,
  children,
  onClick,
  href,
  ...props
}) => {
  const baseClasses = cn(
    "text-center font-poppins font-medium flex items-center justify-center",
    variant !== "text" && "rounded-full transition-all duration-200"
  );

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-sm lg:text-base",
    xl: "text-base lg:text-lg",
    text: "text-base",
  };

  const variantClasses = {
    primary: "bg-purple-600 text-white border-transparent",
    secondary: "bg-white text-brand-700 border border-purple-600",
    tertiary: "bg-purple-50 text-purple-600 border-transparent",
    text: "text-brand-700 bg-transparent border-transparent p-0 h-auto max-w-full",
  };

  const shadowClasses =
    withShadow && variant !== "text"
      ? "hover:shadow-lg hover:-translate-y-0.5"
      : "";

  const underlineClass = underline ? "underline" : "";

  const iconSizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-7 w-7",
  };

  const renderContent = () => (
    <>
      {iconOnly ? (
        React.cloneElement(children, { className: iconSizeClasses[size] })
      ) : (
        <>
          {iconLeft && (
            <span className={cn("mr-2 flex-shrink-0", iconSizeClasses[size])}>
              {React.cloneElement(iconLeft, { className: "w-full h-full" })}
            </span>
          )}
          <span className="truncate">{children}</span>
          {iconRight && (
            <span className={cn("ml-2 flex-shrink-0", iconSizeClasses[size])}>
              {React.cloneElement(iconRight, { className: "w-full h-full" })}
            </span>
          )}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          baseClasses,
          sizeClasses[size],
          iconOnly
            ? cn(
                "aspect-square",
                {
                  sm: "p-3",
                  md: "p-[14px]",
                  lg: "p-4",
                  xl: "p-5",
                }[size]
              )
            : variant === "text"
            ? "p-0 inline-flex max-w-full"
            : {
                sm: "px-[18px] py-3",
                md: "px-5 py-[14px]",
                lg: "px-6 py-4",
                xl: "px-8 py-5",
              }[size],
          variantClasses[variant],
          shadowClasses,
          underlineClass,
          className
        )}
        {...props}
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        iconOnly
          ? cn(
              "aspect-square",
              {
                sm: "p-3",
                md: "p-[14px]",
                lg: "p-4",
                xl: "p-5",
              }[size]
            )
          : variant === "text"
          ? "p-0 inline-flex max-w-full"
          : {
              sm: "px-[18px] py-3",
              md: "px-5 py-3.5",
              lg: "px-5 py-3.5 lg:px-6 lg:py-4",
              xl: "px-6 py-4 lg:px-8 lg:py-5",
            }[size],
        variantClasses[variant],
        shadowClasses,
        underlineClass,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;

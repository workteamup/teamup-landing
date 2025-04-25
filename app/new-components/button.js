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
  const baseClasses =
    "rounded-full font-poppins font-medium transition-all duration-200 flex items-center justify-center";

  const sizeClasses = {
    sm: "h-10 text-xs",
    md: "h-12 text-sm",
    lg: "h-14 text-base",
    xl: "h-[68px] text-lg",
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

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          baseClasses,
          sizeClasses[size],
          iconOnly
            ? "aspect-square p-0"
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
        {iconOnly ? (
          React.cloneElement(children, { className: iconSizeClasses[size] })
        ) : (
          <>
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
          </>
        )}
      </Link>
    );
  }

  return (
    <button
      className={cn(
        baseClasses,
        sizeClasses[size],
        iconOnly
          ? "aspect-square p-0"
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
      onClick={onClick}
      {...props}
    >
      {iconOnly ? (
        React.cloneElement(children, { className: iconSizeClasses[size] })
      ) : (
        <>
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
        </>
      )}
    </button>
  );
};

export default Button;

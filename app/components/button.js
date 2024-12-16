"use client";

import { cn } from "../lib/utils";

const Button = ({
  iconLeft,
  iconRight,
  type = "button",
  onClick,
  children,
  size = "sm",
  variant = "primary",
  className,
  ...props
}) => {
  const sizeClasses = {
    xs: "h-7 px-3 text-xs space-x-2 rounded-[3px]",
    sm: "h-9 px-4 text-sm space-x-3 rounded",
    md: "h-11 px-6 text-sm space-x-3 rounded-md",
    lg: "h-14 px-8 text-base space-x-4 rounded-lg",
  };

  const variantClasses = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md font-medium",
    secondary:
      "bg-white text-blue-950 border border border-blue-400 hover:border-blue-400  hover:bg-blue-50 hover:shadow-md",
    tertiary: "text-blue-950 hover:text-blue-600 hover:bg-blue-50",
  };

  const iconSizeClasses = {
    xs: "h-4 w-4",
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-6 w-6",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        sizeClasses[size] || sizeClasses.sm,
        variantClasses[variant] || variantClasses.primary,
        "font-medium flex justify-center items-center",
        className
      )}
      {...props}
    >
      {iconLeft && (
        <div
          className={`${iconSizeClasses[size]} flex justify-center items-center`}
        >
          {iconLeft}
        </div>
      )}
      <div>{children}</div>
      {iconRight && (
        <div
          className={`${iconSizeClasses[size]} flex justify-center items-center`}
        >
          {iconRight}
        </div>
      )}
    </button>
  );
};

export default Button;

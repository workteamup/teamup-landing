"use client";

import { forwardRef } from "react";
import Link from "next/link";
import {
  semanticColors,
  brandColors,
  brand3Tints,
  brand2Tints,
} from "../../lib/design-tokens";

/**
 * Button component that supports different variants and sizes.
 * Can render as a button or a link.
 *
 * @param {Object} props Component properties
 * @param {string} props.variant - 'primary', 'secondary', 'outline', 'text', 'gradient', or 'tertiary' (default: 'primary')
 * @param {string} props.size - 'sm', 'md', 'lg', 'xl', or 'extralarge' (default: 'md')
 * @param {string} props.href - If provided, renders as a Link
 * @param {boolean} props.fullWidth - Whether the button should take the full width
 * @param {React.ReactNode} props.leftIcon - Icon to display on the left
 * @param {React.ReactNode} props.rightIcon - Icon to display on the right
 * @param {string} props.className - Additional classes to apply
 * @param {boolean} props.isDarkBackground - Whether the button is on a dark background (for tertiary variant)
 */
const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      href,
      fullWidth = false,
      leftIcon,
      rightIcon,
      isDarkBackground = false,
      ...props
    },
    ref
  ) => {
    // Define variant styles using design tokens
    const variantStyles = {
      primary:
        "bg-brand-purple hover:bg-brand-purple text-white transition-colors duration-300 relative overflow-hidden group",
      secondary:
        "bg-white border border-brand-purple text-brand-purple hover:bg-gray-cloud transition-colors duration-300",
      outline:
        "bg-transparent border border-gray-steel text-gray-graphite hover:border-brand-purple hover:text-brand-purple transition-colors duration-300",
      text: "bg-transparent text-brand-blue hover:text-brand-purple transition-colors duration-300",
      gradient:
        "bg-gradient-to-tr from-brand-teal via-brand-blue to-brand-purple text-white hover:shadow-md transition-shadow duration-300 relative overflow-hidden group",
      tertiary: isDarkBackground
        ? "bg-transparent text-white hover:bg-white hover:bg-opacity-20 transition-all duration-300"
        : "bg-transparent text-brand-dark hover:bg-brand-dark hover:bg-opacity-10 transition-all duration-300",
    };

    // Define size styles with more distinct differences
    const sizeStyles = {
      sm: "py-1.5 px-3 text-sm rounded-md h-8",
      md: "py-2.5 px-5 text-base rounded-lg h-10",
      lg: "py-3.5 px-7 text-lg rounded-xl h-12",
      xl: "py-5 px-10 text-lg rounded-xl h-14 min-w-[200px]",
      extralarge:
        "py-6 px-12 text-xl font-extrabold rounded-2xl shadow-lg hover:shadow-xl",
    };

    const buttonClasses = `
      font-bold inline-flex items-center justify-center
      ${variantStyles[variant] || variantStyles.primary}
      ${sizeStyles[size] || sizeStyles.md}
      ${fullWidth ? "w-full" : ""}
      ${className}
    `;

    // Render as Link if href is provided
    if (href) {
      return (
        <Link href={href} className={buttonClasses} ref={ref} {...props}>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
          {(variant === "primary" || variant === "gradient") && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <span className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-light-sweep"></span>
            </div>
          )}
        </Link>
      );
    }

    // Otherwise render as button
    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
        {(variant === "primary" || variant === "gradient") && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <span className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-light-sweep"></span>
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

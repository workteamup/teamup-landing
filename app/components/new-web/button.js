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
 * @param {string} props.variant - 'primary', 'secondary', 'outline', 'text', or 'gradient' (default: 'primary')
 * @param {string} props.size - 'sm', 'md', or 'lg' (default: 'md')
 * @param {string} props.href - If provided, renders as a Link
 * @param {boolean} props.fullWidth - Whether the button should take the full width
 * @param {React.ReactNode} props.leftIcon - Icon to display on the left
 * @param {React.ReactNode} props.rightIcon - Icon to display on the right
 * @param {string} props.className - Additional classes to apply
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
      ...props
    },
    ref
  ) => {
    // Define variant styles using design tokens
    const variantStyles = {
      primary:
        "bg-brand-purple hover:bg-brand-blue text-white transition-colors duration-300",
      secondary:
        "bg-white border border-brand-purple text-brand-purple hover:bg-gray-cloud transition-colors duration-300",
      outline:
        "bg-transparent border border-gray-steel text-gray-graphite hover:border-brand-purple hover:text-brand-purple transition-colors duration-300",
      text: "bg-transparent text-brand-blue hover:text-brand-purple transition-colors duration-300",
      gradient:
        "bg-gradient-to-tr from-brand-teal via-brand-blue to-brand-purple text-white hover:shadow-md transition-shadow duration-300",
    };

    // Define size styles with more distinct differences
    const sizeStyles = {
      sm: "py-1.5 px-3 text-sm rounded-md h-8",
      md: "py-2.5 px-5 text-base rounded-lg h-10",
      lg: "py-3.5 px-7 text-lg rounded-xl h-12",
      xl: "py-5 px-10 text-lg rounded-xl h-14 min-w-[200px]",
    };

    // Combine all styles
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
        </Link>
      );
    }

    // Otherwise render as button
    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

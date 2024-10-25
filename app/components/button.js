"use client";

const Button = ({
  iconLeft,
  iconRight,
  type = "button",
  onClick,
  children,
  size = "sm",
  variant = "primary",
  ...props
}) => {
  const sizeClasses = {
    xs: "h-7 px-3 text-xs space-x-2 rounded-[3px]",
    sm: "h-9 px-4 text-sm space-x-3 rounded",
    md: "h-11 px-5 text-base space-x-3 rounded-md",
    lg: "h-14 px-6 text-base space-x-4 rounded-lg",
  };

  const variantClasses = {
    primary: "bg-gradient-to-tr from-indigo-500 to-blue-300 text-white hover:from-indigo-600 hover:to-blue-400 shadow-md hover:shadow-lg",
    secondary: "bg-white text-blue-950 border border-blue-200 hover:border-blue-400 hover:text-blue-500 hover:bg-indigo-50 hover:shadow-md",
    tertiary: "text-blue-950 hover:text-blue-700 hover:bg-blue-50 hover:from-indigo-50 hover:to-blue-50",
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
      className={`${sizeClasses[size] || sizeClasses.sm} ${variantClasses[variant] || variantClasses.primary} font-medium flex justify-center items-center`}
      {...props}
    >
      {iconLeft && (
        <div className={`${iconSizeClasses[size]} flex justify-center items-center`}>
          {iconLeft}
        </div>
      )}
      <div>{children}</div>
      {iconRight && (
        <div className={`${iconSizeClasses[size]} flex justify-center items-center`}>
          {iconRight}
        </div>
      )}
    </button>
  );
};

export default Button;

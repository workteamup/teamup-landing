"use client";

const Button = ({
  iconLeft,
  iconRight,
  type,
  onClick,
  children,
  size,
  variant,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      // className="h-11 bg-indigo-600 text-white rounded-md px-4 font-medium hover:bg-indigo-500"
      className={`${
        size === "xs"
          ? "h-7 px-3 text-xs space-x-2"
          : size === "sm"
          ? "h-8 px-4 text-sm space-x-3"
          : size === "md"
          ? "h-11 px-5 text-base space-x-3"
          : size === "lg"
          ? "h-14 px-6 text-base space-x-4"
          : "h-8 px-4 text-sm space-x-2"
      } ${
        variant === "primary"
          ? "bg-indigo-600 text-white hover:bg-indigo-500"
          : variant === "secondary"
          ? "bg-white text-blue-950 border border-indigo-500 hover:border-indigo-600 hover:bg-indigo-50"
          : variant === "tertiary"
          ? "text-blue-950 hover:text-indigo-800 hover:bg-indigo-50"
          : "bg-indigo-600 text-white hover:bg-indigo-400"
      } rounded-md font-medium flex justify-center items-center`}
    >
      {iconLeft && (
        <div
          className={`${
            size === "xs"
              ? "h-4 w-4"
              : size === "sm"
              ? "h-5 w-5"
              : size === "md" || "lg"
              ? "h-6 w-6"
              : "h-4 w-4"
          } flex justify-center items-center`}
        >
          {iconLeft}
        </div>
      )}
      <div>{children}</div>
      {iconRight && (
        <div
          className={`${
            size === "xs"
              ? "h-4 w-4"
              : size === "sm"
              ? "h-5 w-5"
              : size === "md" || "lg"
              ? "h-6 w-6"
              : "h-4 w-4"
          } flex justify-center items-center`}
        >
          {iconRight}
        </div>
      )}
    </button>
  );
};

export default Button;

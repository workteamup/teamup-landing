"use client";

const PrimaryButton = ({
  iconLeft,
  iconRight,
  type,
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="h-11 bg-indigo-600 text-white rounded-md px-4 font-medium hover:bg-indigo-500"
    >
      {iconLeft && iconLeft}
      <div>{children}</div>
      {iconRight && iconRight}
    </button>
  );
};

export default PrimaryButton;

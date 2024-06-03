"use client";

const SecondaryButton = ({
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
      className="h-9 text-blue-950 rounded-md px-4 font-medium hover:bg-indigo-50 hover:text-indigo-600"
    >
      {iconLeft && iconLeft}
      <div>{children}</div>
      {iconRight && iconRight}
    </button>
  );
};

export default SecondaryButton;

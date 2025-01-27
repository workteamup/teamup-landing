"use client";

const Link = ({ iconLeft, iconRight, href, children, className, onClick }) => {
  return (
    <a
      onClick={onClick}
      href={href}
      // className="h-11 bg-indigo-600 text-white rounded-md px-4 font-medium hover:bg-indigo-500"
      className={`text-base space-x-3 rounded-md font-medium hover:text-indigo-400 cursor-pointer flex ${className} items-center`}
    >
      {iconLeft && (
        <div className={`h-4 w-4 flex justify-center items-center`}>
          {iconLeft}
        </div>
      )}
      <div>{children}</div>
      {iconRight && (
        <div className={`h-4 w-4 flex justify-center items-center`}>
          {iconRight}
        </div>
      )}
    </a>
  );
};

export default Link;

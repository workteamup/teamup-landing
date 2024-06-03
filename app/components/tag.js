"use client";

const Tag = ({ children }) => {
  return (
    <div className="inline-flex items-center justify-center box-border text-sm text-center bg-sky-100 text-sky-700 min-h-7 py-1 px-2 rounded font-medium">{`#${children}`}</div>
  );
};

export default Tag;

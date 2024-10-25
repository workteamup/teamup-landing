"use client";

const Tag = ({ children }) => {
  return (
    <div className="inline-flex items-center justify-center box-border text-sm text-center bg-blue-50 text-blue-600 min-h-7 py-1 px-2 rounded font-medium">{`#${children}`}</div>
  );
};

export default Tag;

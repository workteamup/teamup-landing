export default function SketchyCheckbox({
  boxColor = "stroke-blue-200",
  checkColor = "stroke-blue-500",
  className = "h-6 w-6",
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path
        d="M4 4.5c0.5-0.3 11.2 0.1 16-0.2c0.2 0.5 0.3 11.2 0 16c-0.5 0.3-11.2-0.1-16 0.2c-0.2-0.5-0.3-11.2 0-16"
        className={boxColor}
        style={{ strokeDasharray: "none" }}
      />
      <path
        d="M4 12s2 3 5 5c5-7 8-8 13-10"
        className={checkColor}
        style={{ strokeDasharray: "none" }}
      />
    </svg>
  );
}

const UnknownIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  path,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill={color}
      className="align-middle text-center"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Replace 'path' with the actual SVG path data */}
      <path d={path} />
    </svg>
  );
};

export default UnknownIcon;

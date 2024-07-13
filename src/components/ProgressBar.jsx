import React, { useEffect, useState } from "react";

const ProgressBar = ({
  percentage,
  color = "",
  height = "h-4",
  duration = 2000,
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div
      className={`w-full ${height} bg-gray-200 rounded-full overflow-hidden`}
    >
      <div
        className={`bg-${color} h-full rounded-full transition-all duration-${duration} ease-out`}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

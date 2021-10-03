// Code based on https://codepen.io/juhaelee/pen/GxymWP

import { useEffect, useState } from "react";

export default function CircularProgressBar({
  sq_Size,
  strokeWidth,
  percentage,
}) {
  const finalVal = percentage;
  const [count, setCount] = useState(0);
  const firstVal = finalVal - Math.floor(finalVal * 0.4);
  const secondVal = finalVal - Math.floor(finalVal * 0.1);

  // Size of the enclosing square
  const sqSize = sq_Size;
  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sq_Size - strokeWidth) / 2;
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sq_Size} ${sq_Size}`;
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2;
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * count) / 100;

  function animateProgressBar() {
    if (count < firstVal) {
      setTimeout(() => {
        setCount(count + 1);
      }, 400);
    } else if (count < secondVal) {
      setTimeout(() => {
        setCount(count + 1);
      }, 580);
    } else if (count < finalVal) {
      setTimeout(() => {
        setCount(count + 1);
      }, 1500);
    }
  }

  useEffect(() => {
    animateProgressBar();

    // eslint-disable-next-line
  }, [count]);

  return (
    <svg width={`${sqSize}px`} height={`${sqSize}px`} viewBox={viewBox}>
      <circle
        className="circle-background"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="circle-progress"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text
        className="circle-text"
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle">
        {`${count}%`}
      </text>
    </svg>
  );
}

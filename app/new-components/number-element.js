"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

const NumberElement = ({
  number,
  description,
  className,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(0);
  const numberRef = useRef(null);
  const duration = 2000; // Animation duration in milliseconds
  const start = 0;
  const incrementTime = 20;

  useEffect(() => {
    if (!numberRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(numberRef.current);

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    const increment = number / (duration / incrementTime);
    let currentCount = start;

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= number) {
        clearInterval(timer);
        currentCount = number;
      }
      setCount(Math.floor(currentCount));
    }, incrementTime);
  };

  return (
    <div
      ref={numberRef}
      className={cn(
        "flex flex-col items-center gap-6 max-w-[320px] mx-auto",
        className
      )}
    >
      <span className="text-[96px] font-bold text-brand-700">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="text-base font-medium text-gray-500 text-center">
        {description}
      </p>
    </div>
  );
};

export default NumberElement; 
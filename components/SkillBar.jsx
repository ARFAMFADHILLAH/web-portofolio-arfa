"use client";

import { useEffect, useRef, useState } from "react";

export default function SkillBar({ label, width }) {
  const ref = useRef(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-serif text-[15px] text-cream">{label}</span>
        <span className="font-mono text-sm text-muted">{width}%</span>
      </div>
      <div
        ref={ref}
        className="h-[4px] rounded-full bg-border overflow-hidden"
      >
        <div
          className="skill-fill"
          style={{ width: filled ? `${width}%` : "0%" }}
        />
      </div>
    </div>
  );
}
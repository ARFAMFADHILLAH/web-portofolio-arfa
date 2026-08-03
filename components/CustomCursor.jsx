"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(animRing);
    };

    const grow = () => {
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.opacity = "0.5";
    };
    const shrink = () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, .project-card").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    animRing();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.querySelectorAll("a, button, .project-card").forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed z-[9999] w-2.5 h-2.5 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
      <div
        ref={ringRef}
        className="fixed z-[9998] w-9 h-9 rounded-full border border-accent/50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ transition: "width 0.2s, height 0.2s, opacity 0.2s" }}
      />
    </>
  );
}
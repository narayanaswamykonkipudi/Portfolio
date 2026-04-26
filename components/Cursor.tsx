"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isMounted, setIsMounted] = useState(false);

  // Smooth, fluid spring for the ambient background glow
  const smoothX = useSpring(cursorX, { damping: 50, stiffness: 200, mass: 0.5 });
  const smoothY = useSpring(cursorY, { damping: 50, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    setIsMounted(true);

    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", updatePosition);

    // Restore standard cursor for usability since this is an ambient glow
    document.body.style.cursor = 'auto';
    const allElements = document.querySelectorAll('*');
    allElements.forEach((el) => {
      if ((el as HTMLElement).style.cursor === 'none') {
        (el as HTMLElement).style.cursor = 'auto';
      }
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, [cursorX, cursorY]);

  if (!isMounted) return null;

  return (
    <>
      {/* Massive ambient glow following the cursor */}
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-[1] hidden md:block mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(52,211,153,0.15) 0%, rgba(20,184,166,0.05) 35%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Optional: Add a subtle sharp highlight exactly at the cursor tip */}
      <motion.div
        className="fixed top-0 left-0 w-[100px] h-[100px] rounded-full pointer-events-none z-[50] hidden md:block mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(52,211,153,0.4) 0%, rgba(0,0,0,0) 50%)",
        }}
      />
    </>
  );
}

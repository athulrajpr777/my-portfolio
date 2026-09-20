"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Update CSS variables for #cine-glow spotlight
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("interactive"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Cyber Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2.5 h-2.5 bg-cyber-red rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isClicking ? 0.6 : isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 1200, damping: 50, mass: 0.1 }}
      />

      {/* Secondary Target Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] border border-cyber-red/60 rounded-full"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          scale: isClicking ? 0.8 : 1,
          borderColor: isHovered ? "#c40024" : "rgba(196, 0, 36, 0.4)",
          backgroundColor: isHovered ? "rgba(196, 0, 36, 0.08)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {/* Cyber Crosshair corners when hovered */}
        {isHovered && (
          <>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyber-red" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyber-red" />
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-1 h-1 bg-cyber-red" />
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-1 h-1 bg-cyber-red" />
          </>
        )}
      </motion.div>
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function CinematicVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Animation & seeking physics refs
  const targetTimeRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(0);
  const cursorNormalizedRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const scrollProgressRef = useRef<number>(0);
  const parallaxRef = useRef<{ dx: number; dy: number }>({ dx: 0, dy: 0 });

  // Performance Optimization Refs
  const prevTransformRef = useRef<string>("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Pause video so manual frame scrubbing controls rendering
    const initializeVideo = () => {
      try {
        video.pause();
      } catch (e) {
        // Ignore
      }
    };

    initializeVideo();
    video.addEventListener("loadedmetadata", initializeVideo);
    video.addEventListener("canplay", initializeVideo);

    // Mouse movement listener
    const handleMouseMove = (e: MouseEvent) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;

      // Cursor X & Y normalized (0.0 to 1.0 across viewport)
      const cursorX = Math.max(0, Math.min(1, e.clientX / width));
      const cursorY = Math.max(0, Math.min(1, e.clientY / height));

      cursorNormalizedRef.current = { x: cursorX, y: cursorY };

      // Parallax tilt offsets from center (-0.5 to +0.5)
      parallaxRef.current = {
        dx: cursorX - 0.5,
        dy: cursorY - 0.5,
      };
    };

    // Scroll progress listener
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? Math.max(0, Math.min(1, scrollTop / docHeight)) : 0;

      scrollProgressRef.current = progress;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Continuous Frame Seeking & Parallax LERP Loop
    let animationFrameId: number;

    const renderLoop = () => {
      const v = videoRef.current;
      const container = containerRef.current;

      if (v && v.duration && !isNaN(v.duration) && v.duration > 0) {
        const duration = v.duration;

        // Strictly Vertical: Cursor Y (50% weight) + Scroll Progress (50% weight) controls video frame scrubbing.
        // Horizontal (left/right) movement does NOT change video timestamp.
        const normY = cursorNormalizedRef.current.y;
        const normScroll = scrollProgressRef.current;
        const combinedTarget = Math.max(0, Math.min(1, normY * 0.5 + normScroll * 0.5));

        targetTimeRef.current = combinedTarget * (duration - 0.05);

        // Smooth LERP interpolation (0.18 step) for silky smooth vertical scrubbing
        currentTimeRef.current += (targetTimeRef.current - currentTimeRef.current) * 0.18;

        // Direct, non-blocking frame update on every single frame
        try {
          if (Math.abs(v.currentTime - currentTimeRef.current) > 0.005) {
            v.currentTime = currentTimeRef.current;
          }
        } catch (error) {
          // Ignore seeking browser exception
        }
      }

      // 3D Parallax Tilt Transform
      if (container) {
        const { dx, dy } = parallaxRef.current;
        const transformStr = `scale3d(1.06, 1.06, 1) translate3d(${(dx * -15).toFixed(2)}px, ${(dy * -15).toFixed(2)}px, 0px) rotateX(${(dy * -2).toFixed(2)}deg) rotateY(${(dx * 2).toFixed(2)}deg)`;

        if (prevTransformRef.current !== transformStr) {
          container.style.transform = transformStr;
          prevTransformRef.current = transformStr;
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      video.removeEventListener("loadedmetadata", initializeVideo);
      video.removeEventListener("canplay", initializeVideo);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-cyber-bg">
      {/* 3D Parallax Container */}
      <div
        ref={containerRef}
        className="relative w-full h-full transition-transform duration-100 ease-out will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <video
          ref={videoRef}
          src="/video/portfolio-background.mp4"
          playsInline
          muted
          preload="auto"
          className="w-full h-full object-cover opacity-35 filter brightness-90 contrast-125 saturate-125 transition-opacity duration-700"
        />
      </div>

      {/* Cyber Overlay Layers */}
      <div className="cine-vignette" />
      <div id="cine-glow" className="cine-glow" />
      <div className="cine-grain" />
      <div className="cine-scan" />
    </div>
  );
}

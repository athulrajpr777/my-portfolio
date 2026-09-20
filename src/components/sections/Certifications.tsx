"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Play, Pause, ExternalLink, X, ShieldCheck, CheckCircle2, RotateCw } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  code: string;
  skills: string[];
  description: string;
  badge: string;
  verifyUrl: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: "cert-tedx",
    title: "TEDx License Holder & Lead Organizer",
    issuer: "TEDxRSET (TED Conferences)",
    date: "2026 - PRESENT",
    code: "TEDX-RSET-LICENSED-LEAD",
    skills: ["TEDx License Holder", "Lead Organizer", "Executive Leadership", "Communication", "Event Curation"],
    description: "Official TEDx License Holder and Lead Organizer who brought TEDx to Rajagiri School of Engineering and Technology (RSET). Responsible for speaker curation, license compliance, executive leadership, and stage production.",
    badge: "OFFICIAL TEDx LICENSE HOLDER",
    verifyUrl: "/resume.pdf",
  },
  {
    id: "cert-1",
    title: "UI-UX Design Industrial Program",
    issuer: "KSHITI (IIT Kharagpur) & 1stop.ai",
    date: "2026-04",
    code: "IITKGP-UX-2026-8849",
    skills: ["Figma", "User Research", "Design Systems", "E-Commerce Architecture", "Prototyping"],
    description: "Professional industrial training in end-to-end product design, high-fidelity prototyping, user testing, and scalable component architecture.",
    badge: "IIT KHARAGPUR PARTNERSHIP",
    verifyUrl: "/resume.pdf",
  },
  {
    id: "cert-2",
    title: "AI Fluency: Framework & Foundations",
    issuer: "Google / Tech Academy",
    date: "2026-02",
    code: "AIFLU-2026-7741",
    skills: ["AI Workflows", "Prompt Engineering", "LLM Integration", "Product Design"],
    description: "Mastery of modern artificial intelligence frameworks, prompt engineering paradigms, and practical AI workflow integration in design.",
    badge: "FOUNDATIONAL CERTIFICATION",
    verifyUrl: "/resume.pdf",
  },
  {
    id: "cert-3",
    title: "Reelnaissance — 1st Position Award",
    issuer: "Abhiyantriki Technical Fest",
    date: "2025-11",
    code: "ABHI-REEL-01-WINNER",
    skills: ["Visual Storytelling", "Video Editing", "Content Strategy", "UI Motion"],
    description: "Secured 1st Place in the prestigious Reelnaissance event for exceptional visual storytelling, creative cinematography, and digital engagement.",
    badge: "1ST PLACE WINNER",
    verifyUrl: "/resume.pdf",
  },
  {
    id: "cert-4",
    title: "English for Technical Professionals",
    issuer: "Global Professional Skills Institute",
    date: "2025-08",
    code: "ENG-TECH-2025-9921",
    skills: ["Technical Documentation", "Cross-Functional Handoff", "Executive Presentations"],
    description: "Advanced certification in clear technical communication, product design specifications, design handoff documentation, and team leadership.",
    badge: "PROFESSIONAL LEVEL",
    verifyUrl: "/resume.pdf",
  },
  {
    id: "cert-5",
    title: "IEDC Media Leadership Program",
    issuer: "IEDC Media Kochi",
    date: "2026-07",
    code: "IEDC-MEDIA-LEAD-05",
    skills: ["Campaign Management", "Content Analytics", "Team Leadership", "Brand Design"],
    description: "Co-Lead certification for driving digital media strategy, audience growth campaigns, and cross-functional design initiatives.",
    badge: "LEADERSHIP CREDENTIAL",
    verifyUrl: "/resume.pdf",
  },
];

export default function Certifications() {
  const [rotation, setRotation] = useState<number>(0);
  const [autoSpin, setAutoSpin] = useState<boolean>(true);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const rotationRef = useRef<number>(0);
  const cursorRotationRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const lastPointerXRef = useRef<number>(0);
  const lastPointerTimeRef = useRef<number>(0);

  // Cylinder properties
  const N = CERTIFICATES.length;
  const radius = 360; // translateZ radius in pixels

  // Mouse Movement Listener: maps cursor X across viewport to a FULL 360° TURN (one complete rotation)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const width = window.innerWidth || 1;
      const normX = e.clientX / width - 0.5; // -0.5 to +0.5
      // Complete 360 degree rotation span driven by cursor movement
      cursorRotationRef.current = normX * 360;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Unified Pointer Down
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = performance.now();
    velocityRef.current = 0;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {
      // Ignore
    }
  };

  // Unified Pointer Move
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const now = performance.now();
    const dt = now - lastPointerTimeRef.current;
    const dx = e.clientX - lastPointerXRef.current;

    const rotationDelta = dx * 0.5;
    rotationRef.current += rotationDelta;

    if (dt > 0) {
      velocityRef.current = (rotationDelta / dt) * 16.6;
    }

    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = now;
  };

  // Unified Pointer Up / Release
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {
      // Ignore
    }
  };

  // RAF Physics & Cursor Follow loop
  useEffect(() => {
    let animationFrameId: number;
    let smoothCursorOffset = 0;

    const physicsLoop = () => {
      if (!isDraggingRef.current) {
        // Friction damping (0.945 decay)
        velocityRef.current *= 0.945;
        rotationRef.current += velocityRef.current;

        // Auto-spin (0.06°/frame)
        if (autoSpin) {
          rotationRef.current += 0.06;
        }
      }

      // Smooth interpolation towards cursor 360° angle offset
      smoothCursorOffset += (cursorRotationRef.current - smoothCursorOffset) * 0.08;

      setRotation(rotationRef.current + smoothCursorOffset);
      animationFrameId = requestAnimationFrame(physicsLoop);
    };

    animationFrameId = requestAnimationFrame(physicsLoop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [autoSpin]);

  // Click card handler - snaps card to front and opens detail modal
  const handleCardClick = (cert: Certificate, index: number) => {
    const cardAngle = index * (360 / N);
    const targetAngleOffset = (180 - cardAngle) % 360;
    rotationRef.current = targetAngleOffset;
    velocityRef.current = 0;
    setSelectedCert(cert);
  };

  return (
    <section id="certifications" className="py-24 px-6 relative z-10 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-red/10 border border-cyber-red/30 text-cyber-red font-mono text-xs mb-4 tracking-widest uppercase"
        >
          <Award className="w-3.5 h-3.5" />
          <span>CREDENTIALS & HONORS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-oswald text-4xl sm:text-6xl font-bold uppercase text-white tracking-tight"
        >
          3D CERTIFICATION <span className="text-cyber-red glow-text-red">CYLINDER</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-cyber-muted max-w-xl mx-auto font-space text-sm sm:text-base"
        >
          Interactive 3D cylinder rotating a full 360° turn as your cursor moves across the screen. Drag or swipe for continuous inertia spinning.
        </motion.p>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex items-center justify-center gap-4 text-xs font-mono"
        >
          <button
            onClick={() => setAutoSpin((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 rounded bg-cyber-surface border border-cyber-red/30 text-cyber-text hover:border-cyber-red transition-colors"
          >
            {autoSpin ? <Pause className="w-3.5 h-3.5 text-cyber-red" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            <span>AUTO-SPIN: {autoSpin ? "ON" : "PAUSED"}</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-cyber-muted px-3 py-2 border border-white/5 rounded bg-black/40">
            <RotateCw className="w-3.5 h-3.5 text-cyber-red animate-spin-slow" />
            <span>MOVE CURSOR LEFT/RIGHT FOR 360° TURN</span>
          </div>
        </motion.div>
      </div>

      {/* 3D Cylindrical Drag & Cursor Stage */}
      <div className="relative w-full h-[480px] flex items-center justify-center perspective-1000 select-none">
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center preserve-3d touch-none"
        >
          {/* Cylinder Stage */}
          <div
            className="absolute w-full h-full flex items-center justify-center preserve-3d transition-transform ease-out"
            style={{
              transform: `translateZ(-${radius}px) rotateY(${rotation}deg)`,
            }}
          >
            {CERTIFICATES.map((cert, index) => {
              const theta = index * (360 / N);

              return (
                <div
                  key={cert.id}
                  onClick={() => handleCardClick(cert, index)}
                  className="absolute w-[280px] sm:w-[320px] h-[380px] rounded-xl cyber-card p-6 flex flex-col justify-between cursor-pointer preserve-3d transition-all duration-300 hover:border-cyber-red hover:shadow-2xl"
                  style={{
                    transform: `rotateY(${theta}deg) translateZ(${radius}px)`,
                    backfaceVisibility: "visible",
                  }}
                >
                  {/* Top Badge & Header */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider font-semibold bg-cyber-red/20 text-cyber-red border border-cyber-red/40 uppercase">
                        {cert.badge}
                      </span>
                      <ShieldCheck className="w-5 h-5 text-cyber-red" />
                    </div>

                    <h3 className="font-oswald text-xl font-bold text-white uppercase leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-cyber-muted mt-1">{cert.issuer}</p>
                  </div>

                  {/* Skills Pills */}
                  <div className="my-4 flex flex-wrap gap-1.5">
                    {cert.skills.slice(0, 4).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 text-white/80 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-cyber-muted">{cert.date}</span>
                    <span className="text-cyber-red flex items-center gap-1 font-semibold group-hover:underline">
                      DETAILS <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Verification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg cyber-glass p-8 rounded-2xl border border-cyber-red/40 text-cyber-text shadow-2xl"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 text-cyber-muted hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-cyber-red mb-4">
                <CheckCircle2 className="w-7 h-7" />
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyber-red">
                    CREDENTIAL RECORD
                  </span>
                  <p className="text-xs font-mono text-cyber-muted">{selectedCert.code}</p>
                </div>
              </div>

              <h3 className="font-oswald text-2xl font-bold text-white uppercase mb-2">
                {selectedCert.title}
              </h3>
              <p className="text-sm font-mono text-cyber-muted mb-4">
                Issued / Granted by <strong className="text-white">{selectedCert.issuer}</strong> • {selectedCert.date}
              </p>

              <p className="text-sm font-space text-cyber-text/90 leading-relaxed mb-6">
                {selectedCert.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-cyber-muted mb-2">Verified Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono bg-cyber-red/10 border border-cyber-red/30 text-cyber-text rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-cyber-red/20">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> STATUS: AUTHENTICATED
                </span>

                <a
                  href="/resume.pdf"
                  download="Athul_RAJ_P_R_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-btn text-xs py-2 px-4"
                >
                  <span>VIEW RESUME</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Terminal, Sparkles, Download, Send, ShieldCheck, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto z-10 overflow-hidden">
      {/* Top Telemetry & Status Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-cyber-muted border-b border-cyber-red/20 pb-4 z-10"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-red"></span>
          </span>
          <span className="text-cyber-text tracking-widest font-semibold">[ SYSTEM ONLINE ]</span>
          <span className="hidden sm:inline text-cyber-dim">|</span>
          <span className="hidden sm:inline text-cyber-muted">KOCHI, INDIA</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] tracking-wider">
          <div className="flex items-center gap-1.5 text-cyber-red">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>FPS: 60.0</span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-cyber-muted">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>KSHITI IIT KHARAGPUR CERTIFIED</span>
          </div>
        </div>
      </motion.div>

      {/* Editorial Main Headline with Name */}
      <div className="my-auto py-12 z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-red/10 border border-cyber-red/30 text-cyber-red font-mono text-xs mb-6 uppercase tracking-widest"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>UI/UX Designer & Computer Science Engineer</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="space-y-2"
        >
          {/* Prominent Name Header */}
          <div className="font-oswald text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider text-cyber-red glow-text-red flex items-center gap-4">
            <span>ATHUL RAJ P R</span>
            <span className="h-[3px] w-20 bg-cyber-red hidden sm:inline-block shadow-[0_0_12px_#c40024]" />
          </div>

          <h1 className="font-oswald text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight text-white leading-[0.9]">
            BUILDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-red via-red-500 to-rose-400">IDEAS</span>
          </h1>
          <h1 className="font-oswald text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight text-cyber-text leading-[0.9] flex flex-wrap items-center gap-x-4">
            INTO <span className="italic font-syne font-normal text-white/90">EXPERIENCES.</span>
          </h1>
        </motion.div>

        {/* Subtitle / Bio Teaser */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-base sm:text-lg md:text-xl text-cyber-muted max-w-2xl font-space font-light leading-relaxed"
        >
          Shaping user-centered digital products for <span className="text-white font-medium">150,000+ followers</span> across platforms. 
          Merging IIT Kharagpur UI/UX design standards with computer science engineering to build functional, high-conversion interfaces.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="cyber-btn group">
            <span>EXPLORE WORK</span>
            <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>

          <a href="/resume.pdf" download="Athul_RAJ_P_R_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cyber-btn-outline group">
            <Download className="w-4 h-4 text-cyber-red group-hover:scale-110 transition-transform" />
            <span>RESUME PDF</span>
          </a>

          <a href="#contact" className="cyber-btn-outline group">
            <Send className="w-4 h-4 text-cyber-red group-hover:translate-x-1 transition-transform" />
            <span>GET IN TOUCH</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Telemetry Metrics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-cyber-red/20 z-10"
      >
        <div className="space-y-1">
          <div className="font-oswald text-3xl sm:text-4xl font-bold text-white tracking-wider flex items-center">
            150K<span className="text-cyber-red">+</span>
          </div>
          <div className="text-xs font-mono text-cyber-muted tracking-widest uppercase">AUDIENCE REACHED</div>
        </div>

        <div className="space-y-1">
          <div className="font-oswald text-3xl sm:text-4xl font-bold text-white tracking-wider flex items-center">
            2<span className="text-cyber-red"> HACKATHONS</span>
          </div>
          <div className="text-xs font-mono text-cyber-muted tracking-widest uppercase">ISRO & COGNEE PROJECTS</div>
        </div>

        <div className="space-y-1">
          <div className="font-oswald text-3xl sm:text-4xl font-bold text-white tracking-wider flex items-center">
            TEDx<span className="text-cyber-red">RSET</span>
          </div>
          <div className="text-xs font-mono text-cyber-muted tracking-widest uppercase">LEAD ORGANISER 2026</div>
        </div>

        <div className="space-y-1">
          <div className="font-oswald text-3xl sm:text-4xl font-bold text-white tracking-wider flex items-center">
            2029<span className="text-cyber-red"> GRAD</span>
          </div>
          <div className="text-xs font-mono text-cyber-muted tracking-widest uppercase">BTECH COMPUTER SCIENCE</div>
        </div>
      </motion.div>
    </section>
  );
}

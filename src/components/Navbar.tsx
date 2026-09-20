"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "ABOUT", href: "#about" },
  { name: "TIMELINE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "CERTS", href: "#certifications" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [audioMuted, setAudioMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        scrolled
          ? "bg-cyber-bg/80 backdrop-blur-xl border-b border-cyber-red/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-cyber-red/20 border border-cyber-red/60 flex items-center justify-center text-cyber-red group-hover:bg-cyber-red group-hover:text-white transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-oswald text-xl font-bold tracking-wider uppercase text-white group-hover:text-cyber-red transition-colors">
              ATHUL <span className="text-cyber-red">RAJ P R</span>
            </span>
            <span className="text-[9px] font-mono text-cyber-muted tracking-widest -mt-1">
              [ UI/UX & CS ENGINEER ]
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-xs text-cyber-muted hover:text-cyber-red transition-colors tracking-widest uppercase relative py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber-red transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Utility Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setAudioMuted(!audioMuted)}
            className="p-2 rounded bg-cyber-surface border border-cyber-red/30 text-cyber-muted hover:text-white hover:border-cyber-red transition-colors text-xs font-mono flex items-center gap-2"
            title="Toggle Ambient Cyber Audio"
          >
            {audioMuted ? (
              <VolumeX className="w-4 h-4 text-cyber-muted" />
            ) : (
              <Volume2 className="w-4 h-4 text-cyber-red animate-pulse" />
            )}
            <span className="text-[10px] tracking-wider">{audioMuted ? "MUTED" : "AUDIO ON"}</span>
          </button>

          <a href="/resume.pdf" download="Athul_RAJ_P_R_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cyber-btn text-xs py-2 px-4">
            <span>RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded bg-cyber-surface border border-cyber-red/40 text-cyber-text"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyber-red" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cyber-bg/95 backdrop-blur-2xl border-b border-cyber-red/30 mt-4 p-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-oswald text-2xl font-bold text-cyber-text hover:text-cyber-red transition-colors tracking-wider uppercase"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="/resume.pdf"
                  download="Athul_RAJ_P_R_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-btn text-xs w-full justify-center"
                >
                  <span>VIEW RESUME PDF</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import { User, Layers, Sparkles, Brain, Code2, Globe2, Heart, Award, ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Interactive Cyber Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-2xl cyber-glass p-8 border border-cyber-red/30 shadow-2xl overflow-hidden group">
            {/* Cyber Corner Markers */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-red" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-red" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-red" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-red" />

            {/* Profile Avatar / Tech Graphic */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-cyber-red/20 via-black to-cyber-surface border border-white/10 flex flex-col justify-between p-6">
              <div className="flex items-center justify-between text-xs font-mono text-cyber-muted">
                <span>[ ID: ATHUL-RAJ-PR ]</span>
                <span className="text-cyber-red">v2.0.26</span>
              </div>

              <div className="my-auto text-center space-y-3">
                <div className="w-20 h-20 mx-auto rounded-full bg-cyber-red/10 border-2 border-cyber-red flex items-center justify-center text-cyber-red glow-box-red">
                  <Brain className="w-10 h-10 animate-pulse" />
                </div>
                <h3 className="font-oswald text-3xl font-bold uppercase text-white tracking-wide">
                  ATHUL RAJ P R
                </h3>
                <p className="text-xs font-mono text-cyber-muted">
                  B.TECH COMPUTER SCIENCE STUDENT & UI/UX DESIGNER
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyber-muted">
                <span className="flex items-center gap-1">
                  <Globe2 className="w-3.5 h-3.5 text-cyber-red" /> KOCHI, INDIA
                </span>
                <span className="text-emerald-400">AVAILABLE FOR ROLES</span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded bg-white/5 border border-white/5">
                <div className="text-xs font-mono text-cyber-muted">AUDIENCE</div>
                <div className="font-oswald text-2xl font-bold text-white">150,000+</div>
                <div className="text-[10px] font-mono text-cyber-red">YouTube & Instagram</div>
              </div>

              <div className="p-4 rounded bg-white/5 border border-white/5">
                <div className="text-xs font-mono text-cyber-muted">EDUCATION</div>
                <div className="font-oswald text-2xl font-bold text-white">B.Tech CS</div>
                <div className="text-[10px] font-mono text-cyber-red">Rajagiri RSET</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Bio & Philosophy Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-red/10 border border-cyber-red/30 text-cyber-red font-mono text-xs tracking-widest uppercase">
            <User className="w-3.5 h-3.5" />
            <span>BIOGRAPHY & PHILOSOPHY</span>
          </div>

          <h2 className="font-oswald text-4xl sm:text-6xl font-bold uppercase text-white tracking-tight leading-tight">
            BRIDGING <span className="text-cyber-red glow-text-red">ENGINEERING</span> & HUMAN INTERACTION.
          </h2>

          <p className="text-cyber-muted font-space text-base sm:text-lg leading-relaxed">
            I am a UI/UX Designer and Computer Science student shaping user-centered digital products for over <strong className="text-white">150,000+ followers</strong> across platforms. Official <strong className="text-white">TEDx License Holder and Lead Organizer of TEDxRSET</strong>, having brought TEDx to my college campus to champion ideas worth spreading, executive communication, and team leadership.
          </p>

          <p className="text-cyber-muted font-space text-base sm:text-lg leading-relaxed">
            Through professional industrial training with <strong className="text-white">KSHITI, IIT Kharagpur, and DesignMacha</strong>, I’ve built production-grade mobile app prototypes, hackathon platforms for ISRO and Cognee, and responsive web architectures using Figma, HTML, CSS, React, and Next.js.
          </p>

          {/* Core Philosophy Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="cyber-card p-5 rounded-xl border border-white/10">
              <div className="flex items-center gap-3 text-cyber-red mb-2">
                <Layers className="w-5 h-5" />
                <h4 className="font-oswald text-lg font-bold text-white uppercase">DESIGN SYSTEMS</h4>
              </div>
              <p className="text-xs font-space text-cyber-muted leading-normal">
                Crafting scalable token libraries, auto-layout components, and accessible UI specifications.
              </p>
            </div>

            <div className="cyber-card p-5 rounded-xl border border-white/10">
              <div className="flex items-center gap-3 text-cyber-red mb-2">
                <Code2 className="w-5 h-5" />
                <h4 className="font-oswald text-lg font-bold text-white uppercase">CS ENGINEERING</h4>
              </div>
              <p className="text-xs font-space text-cyber-muted leading-normal">
                Grounding designs in real code capabilities, performance optimization, and clean web architecture.
              </p>
            </div>
          </div>

          {/* Languages Section */}
          <div className="pt-6 border-t border-cyber-red/20">
            <h4 className="text-xs font-mono uppercase text-cyber-muted tracking-widest mb-3">Linguistic Capabilities</h4>
            <div className="flex flex-wrap gap-3 font-mono text-xs">
              <span className="px-3 py-1.5 rounded bg-cyber-surface border border-cyber-red/40 text-white">
                ENGLISH <span className="text-cyber-red">(ADVANCED)</span>
              </span>
              <span className="px-3 py-1.5 rounded bg-cyber-surface border border-cyber-red/40 text-white">
                MALAYALAM <span className="text-cyber-red">(BILINGUAL)</span>
              </span>
              <span className="px-3 py-1.5 rounded bg-cyber-surface border border-cyber-red/40 text-white">
                HINDI <span className="text-cyber-red">(ADVANCED C1)</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Palette, Users, Globe2, MessageSquare, Video } from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: { name: string; level: number; note: string }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "tech",
    name: "TECHNICAL SKILLS",
    icon: <Cpu className="w-5 h-5" />,
    skills: [
      { name: "Figma", level: 95, note: "Auto-layout, Components & Design Systems" },
      { name: "Video Editing", level: 92, note: "Creative Video Editing, Motion Design & Storytelling" },
      { name: "Adobe Illustrator", level: 85, note: "Vector Graphics & Brand Identity" },
      { name: "Adobe Photoshop", level: 80, note: "Image Manipulation & Asset Prep" },
      { name: "HTML & CSS", level: 95, note: "Semantic HTML5, CSS Grid & Flexbox" },
      { name: "TypeScript / JavaScript", level: 85, note: "Modern ES6+, Async & Types" },
      { name: "Next.js / React", level: 85, note: "App Router, Server/Client Components" },
      { name: "Tailwind CSS", level: 90, note: "Custom Design Tokens & Utility Styling" },
    ],
  },
  {
    id: "design",
    name: "DESIGN PRACTICE",
    icon: <Palette className="w-5 h-5" />,
    skills: [
      { name: "UI Design", level: 95, note: "High-Fidelity Visual Interfaces" },
      { name: "Communication Skills", level: 95, note: "Public Speaking, Executive Pitching & TEDx Curation" },
      { name: "Interaction Design", level: 90, note: "Micro-interactions & State Transitions" },
      { name: "Information Architecture", level: 85, note: "Sitemaps, User Journeys & Navigation" },
      { name: "Accessibility Design & Audits", level: 88, note: "WCAG Guidelines & Contrast Ratios" },
      { name: "Design Systems", level: 92, note: "Scalable Token Libraries & Components" },
      { name: "Design Handoff Documentation", level: 95, note: "Pixel-perfect Specs for Engineers" },
    ],
  },
  {
    id: "product",
    name: "PRODUCT COLLABORATION",
    icon: <Users className="w-5 h-5" />,
    skills: [
      { name: "TEDx & Team Leadership", level: 95, note: "TEDx License Holder & Lead Organizer of TEDxRSET" },
      { name: "User Flows", level: 92, note: "Mapping Step-by-Step User Actions" },
      { name: "Wireframing", level: 95, note: "Low/Medium Fidelity Structural Sketches" },
      { name: "Design Specifications", level: 90, note: "Detailed Spacing & Token Annotations" },
      { name: "Cross-Functional Collaboration", level: 88, note: "Connecting Design with Engineering" },
      { name: "Handoff Documentation", level: 92, note: "Developer-friendly Guides & Tokens" },
    ],
  },
  {
    id: "languages",
    name: "LANGUAGES",
    icon: <Globe2 className="w-5 h-5" />,
    skills: [
      { name: "English", level: 90, note: "Advanced Technical & Professional" },
      { name: "Malayalam", level: 100, note: "Native / Bilingual Proficient" },
      { name: "Hindi", level: 85, note: "Advanced C1 Level Proficiency" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("tech");

  const currentCategory = SKILL_CATEGORIES.find((cat) => cat.id === activeTab) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-red/10 border border-cyber-red/30 text-cyber-red font-mono text-xs mb-4 tracking-widest uppercase"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>CAPABILITIES & MATRIX</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-oswald text-4xl sm:text-6xl font-bold uppercase text-white tracking-tight"
        >
          SKILLS & <span className="text-cyber-red glow-text-red">EXPERTISE</span>
        </motion.h2>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs tracking-wider transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-cyber-red text-white font-semibold shadow-lg shadow-cyber-red/30 border border-cyber-red"
                  : "bg-cyber-surface border border-white/10 text-cyber-muted hover:border-cyber-red/50 hover:text-white"
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Skills Matrix Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentCategory.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="cyber-card p-6 rounded-xl border border-white/10 hover:border-cyber-red/50 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-oswald text-lg font-bold text-white uppercase tracking-wide">
                {skill.name}
              </span>
              <span className="font-mono text-xs text-cyber-red font-semibold">
                {skill.level}%
              </span>
            </div>

            <p className="text-xs font-mono text-cyber-muted mb-3">{skill.note}</p>

            {/* Cyber Meter Progress Bar */}
            <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden border border-white/10 p-0.5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.08 }}
                className="h-full bg-gradient-to-r from-cyber-red to-red-400 rounded-full shadow-[0_0_10px_#c40024]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

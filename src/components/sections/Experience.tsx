"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, ChevronRight, Cpu } from "lucide-react";

interface TimelineItem {
  id: string;
  type: "Work" | "Education";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  highlightBadge?: string;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "exp-tedx",
    type: "Work",
    title: "TEDx License Holder & Lead Organizer",
    organization: "TEDxRSET (TED Conferences)",
    location: "Kochi, KL, India",
    period: "2026 — PRESENT",
    highlightBadge: "TEDx LICENSE HOLDER",
    description: [
      "Brought TEDx to Rajagiri School of Engineering and Technology (RSET) as official License Holder and Lead Organizer.",
      "Leading executive operations, speaker curation, stage design, media production, and license compliance.",
      "Directing cross-functional teams in sponsorship acquisition, budget management, and brand execution.",
      "Fostering an ecosystem for sharing transformative ideas worth spreading across tech, design, and culture.",
    ],
    skills: ["TEDx License Holder", "Executive Leadership", "Event Curation", "Public Relations", "Team Management"],
  },
  {
    id: "exp-1",
    type: "Work",
    title: "Co-Lead",
    organization: "IEDC MEDIA",
    location: "Kochi, KL, India",
    period: "2026-07 — PRESENT",
    highlightBadge: "MEDIA LEADERSHIP",
    description: [
      "Coordinated project timelines and deliverables, ensuring timely completion of media campaigns across IEDC.",
      "Contributed to development of content strategies that increased audience engagement across multiple digital platforms.",
      "Facilitated day-to-day creative operations, promoting a collaborative work environment among team members.",
      "Researched industry trends to inform creative decisions and optimize content performance.",
    ],
    skills: ["Media Strategy", "Content Analytics", "Team Leadership", "Project Coordination"],
  },
  {
    id: "exp-2",
    type: "Work",
    title: "UI UX Designer",
    organization: "KSHITI (IIT Kharagpur) x DesignMacha",
    location: "Bangalore / Remote",
    period: "2025-12 — 2026-04",
    highlightBadge: "IIT KGP COLLABORATION",
    description: [
      "Undertook professional development in UI/UX design through collaboration between KSHITI, IIT Kharagpur, and DesignMacha.",
      "Navigated the full product lifecycle from conceptualization to execution of real-world deliverables, including ISRO & Cognee hackathon platforms.",
      "Refined proficiency in user research and high-fidelity prototyping under the mentorship of industry veterans.",
      "Merged IIT's standards for excellence with 1stop.ai's industrial training to develop a robust, user-centric design methodology.",
    ],
    skills: ["Figma", "User Research", "High-Fidelity Prototyping", "Design Systems", "E-Commerce Design"],
  },
  {
    id: "exp-3",
    type: "Education",
    title: "Bachelor of Technology: Computer Science",
    organization: "Rajagiri School of Engineering and Technology (RSET)",
    location: "Kakkanad, Kochi, India",
    period: "2025-08 — EXPECTED 2029-01",
    highlightBadge: "B.TECH DEGREE",
    description: [
      "Specializing in Computer Science & Engineering with focus on web technologies, user interfaces, algorithms, and software engineering.",
      "Combining computer science engineering fundamentals with user experience design to craft functional, scalable interfaces.",
      "Lead Organizer of TEDxRSET, bringing prestigious global speaker platforms to the campus.",
    ],
    skills: ["Computer Science", "Web Development", "Algorithms", "UI/UX Engineering", "System Design"],
  },
];

export default function Experience() {
  const [filter, setFilter] = useState<"All" | "Work" | "Education">("All");

  const filteredItems = TIMELINE_DATA.filter(
    (item) => filter === "All" || item.type === filter
  );

  return (
    <section id="experience" className="py-24 px-6 relative z-10 max-w-6xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-red/10 border border-cyber-red/30 text-cyber-red font-mono text-xs mb-4 tracking-widest uppercase"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>CAREER CHRONICLES</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-oswald text-4xl sm:text-6xl font-bold uppercase text-white tracking-tight"
        >
          BILATERAL <span className="text-cyber-red glow-text-red">TIMELINE</span>
        </motion.h2>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          {(["All", "Work", "Education"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider transition-all duration-300 ${
                filter === tab
                  ? "bg-cyber-red text-white font-semibold shadow-lg shadow-cyber-red/30"
                  : "bg-cyber-surface border border-white/10 text-cyber-muted hover:border-cyber-red/50 hover:text-white"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Bilateral Timeline Body */}
      <div className="relative">
        {/* Central Glowing Laser Spine */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gradient-to-b from-cyber-red via-red-600 to-cyber-red shadow-[0_0_15px_#c40024] hidden md:block" />

        <div className="space-y-12 md:space-y-16">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Card */}
                  <div className="w-full md:w-1/2 px-0 md:px-8">
                    <div className="cyber-card p-6 sm:p-8 rounded-xl border border-cyber-red/20 hover:border-cyber-red/60 transition-all">
                      {/* Top Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-cyber-red/20 text-cyber-red border border-cyber-red/40 font-mono text-[10px] font-semibold tracking-wider uppercase">
                          {item.type === "Work" ? (
                            <Briefcase className="w-3 h-3" />
                          ) : (
                            <GraduationCap className="w-3 h-3" />
                          )}
                          {item.highlightBadge || item.type}
                        </span>

                        <span className="font-mono text-xs text-cyber-muted flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-cyber-red" />
                          {item.period}
                        </span>
                      </div>

                      {/* Title & Org */}
                      <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <div className="text-sm font-mono text-cyber-red font-semibold mt-1">
                        {item.organization}
                      </div>
                      <div className="text-xs font-mono text-cyber-muted flex items-center gap-1 mt-1 mb-4">
                        <MapPin className="w-3 h-3 text-cyber-muted" />
                        {item.location}
                      </div>

                      {/* Description Bullet List */}
                      <ul className="space-y-2 mb-6">
                        {item.description.map((desc, dIdx) => (
                          <li key={dIdx} className="text-xs sm:text-sm font-space text-cyber-muted flex items-start gap-2">
                            <ChevronRight className="w-3.5 h-3.5 text-cyber-red shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 text-[11px] font-mono bg-white/5 border border-white/10 text-cyber-text rounded hover:border-cyber-red/50 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Node Indicator */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyber-bg border-2 border-cyber-red flex items-center justify-center shadow-[0_0_20px_#c40024] hidden md:flex z-20">
                    <div className="w-3 h-3 rounded-full bg-cyber-red animate-pulse" />
                  </div>

                  {/* Empty Spacer Column for layout symmetry */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ExternalLink, X, Monitor, Sparkles, Rocket, Compass, ShieldCheck } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  secondaryImage?: string;
  highlights: string[];
  tools: string[];
  liveUrl: string;
  tag: string;
}

const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "HCHO Ops — Next-Gen Surface AQI Monitor",
    category: "ISRO HACKATHON PROJECT",
    subtitle: "Formaldehyde Column Inversion & Surface AQI Gradient Analyzer",
    description: "Real-time formaldehyde (HCHO) column inversion to surface air quality — fusing satellite spectroscopy with geospatial intelligence for mission-grade environmental monitoring. Features 14 regional clusters, active hotspots isolation, Sentinel-5P TROPOMI Level-3 processing, and CPCB ground-truth verification.",
    image: "/projects/hcho-hero.png",
    secondaryImage: "/projects/hcho-map.png",
    highlights: [
      "Built for ISRO Hackathon fusing satellite spectroscopy with surface air quality inversion.",
      "Processes Sentinel-5P TROPOMI Level-3 HCHO column product (7km spatial resolution, 6hr refresh cycle).",
      "Interactive 14 Regional Airshed Heatmap isolating severe surface AQI hotspot clusters across India.",
      "CPCB Ground-Truthing station connection with automated PDF Mission Analysis exporter.",
    ],
    tools: ["Sentinel-5P TROPOMI", "Satellite Spectroscopy", "React", "Geospatial Intelligence", "Tailwind CSS"],
    tag: "ISRO HACKATHON",
    liveUrl: "https://orbital-insights-hub.lovable.app",
  },
  {
    id: "proj-2",
    title: "Director's Cut Studio (Asme) — AI Scriptwriting Suite",
    category: "COGNEE HANGOVER HACKATHON",
    subtitle: "Next-Gen Workspace Designed for Screenwriters & Directors",
    description: "Built for the curious — an interactive cinematic workspace engineered to make scriptwriters' and directors' jobs effortless. Streamlines narrative structure, character arc dynamics, scene layout design, and AI-assisted production workflows.",
    image: "/projects/scriptwriting.png",
    highlights: [
      "Built for Cognee Hangover Hackathon to revolutionize screenwriting & story development.",
      "Simplifies scene layout design, character dynamics tracking, and script breakdown.",
      "Built for the curious — sleek cinematic dark interface with fluid scene editor navigation.",
      "Integrated graph memory engine tracking narrative continuity across script revisions.",
    ],
    tools: ["Cognee AI Graph", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tag: "COGNEE HACKATHON",
    liveUrl: "https://cinematic-workspace-design.vercel.app/",
  },
  {
    id: "proj-3",
    title: "UniGo — Sustainable Student & Multimodal Transit Planner",
    category: "SUSTAINABLE TRANSIT PLATFORM",
    subtitle: "Budget-Friendly Travel & Clean Transit Engine across Indian Metros",
    description: "Multimodal clean transit engine designed to help students and travelers plan budget-friendly, low-emission commutes across Indian cities. Combines Metro & Rail, Smart Cycles, EV Autos (E-Rickshaw Feeders), and Electric Buses (DTC, BMTC, BEST) with real-world carbon, time, and cost savings.",
    image: "/projects/unigo.png",
    highlights: [
      "Helps students & budget-conscious travelers plan eco-friendly, low-cost transit across Indian cities.",
      "Multimodal route engine integrating Metro & Rail, Smart Cycles (PBS Docks), EV Autos, and Electric Buses.",
      "Real-time carbon offset tracking, travel time optimization, and budget cost savings comparison.",
      "Quick-Planner routing across major tech parks, university campuses, and commercial hubs in India.",
    ],
    tools: ["Multimodal Transit API", "React", "TypeScript", "Geospatial Routing", "Tailwind CSS"],
    tag: "BUDGET TRAVEL PLATFORM",
    liveUrl: "https://unigo-sustainable-student-transport-planner.ai.studio/quick-planner",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-red/10 border border-cyber-red/30 text-cyber-red font-mono text-xs mb-4 tracking-widest uppercase"
        >
          <Rocket className="w-3.5 h-3.5" />
          <span>FEATURED INNOVATIONS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-oswald text-4xl sm:text-6xl font-bold uppercase text-white tracking-tight"
        >
          FEATURED <span className="text-cyber-red glow-text-red">PROJECTS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-cyber-muted max-w-xl mx-auto font-space text-sm sm:text-base"
        >
          High-impact applications built for prestigious hackathons and real-world deployment, including ISRO, Cognee, and UniGo sustainable travel.
        </motion.p>
      </div>

      {/* 3-Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="cyber-card rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover:border-cyber-red/60 group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded text-[10px] font-mono tracking-wider font-semibold bg-cyber-red/20 text-cyber-red border border-cyber-red/40 uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  {project.tag}
                </span>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded bg-white/5 text-cyber-red hover:bg-cyber-red hover:text-white transition-colors flex items-center gap-1 text-[11px] font-mono"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>LIVE SITE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Screenshot Preview */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-white/10 bg-black/60 group-hover:border-cyber-red/50 transition-colors">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur border border-white/20 text-[10px] font-mono text-white flex items-center gap-1">
                  <span>INSPECT DETAILS</span>
                </div>
              </div>

              <h3 className="font-oswald text-2xl font-bold text-white uppercase group-hover:text-cyber-red transition-colors mb-1">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-cyber-red font-semibold mb-3">{project.subtitle}</p>

              <p className="text-xs font-space text-cyber-muted leading-relaxed line-clamp-3 mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tool Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tools.slice(0, 3).map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 text-white/90 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-cyber-muted group-hover:text-white transition-colors">
                  MISSION BRIEF
                </span>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-btn text-[11px] py-1.5 px-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>VISIT SITE</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl cyber-glass p-6 sm:p-10 rounded-2xl border border-cyber-red/50 text-cyber-text shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 text-cyber-muted hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-cyber-red text-xs font-mono uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{selectedProject.category}</span>
              </div>

              <h3 className="font-oswald text-3xl sm:text-4xl font-bold text-white uppercase mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono text-cyber-red font-semibold mb-6">{selectedProject.subtitle}</p>

              {/* Modal Screenshot Gallery */}
              <div className="space-y-4 mb-6">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {selectedProject.secondaryImage && (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={selectedProject.secondaryImage}
                      alt={`${selectedProject.title} heatmap`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <p className="text-sm font-space text-cyber-text/90 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-cyber-muted tracking-widest mb-3">
                  Key Technical Features & Architecture
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((item, idx) => (
                    <li key={idx} className="text-xs sm:text-sm font-space text-cyber-muted flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-red shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase text-cyber-muted tracking-widest mb-3">
                  Stack & Data Integration
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono bg-cyber-red/10 border border-cyber-red/30 text-white rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-cyber-red/20">
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  STATUS: LIVE & DEPLOYED
                </span>

                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-btn text-xs"
                >
                  <span>LAUNCH LIVE WEBSITE</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

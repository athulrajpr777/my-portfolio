"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, MapPin, Linkedin, Instagram, CheckCircle2, Terminal, Copy } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-red/10 border border-cyber-red/30 text-cyber-red font-mono text-xs mb-4 tracking-widest uppercase"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>INITIATE DISPATCH</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-oswald text-4xl sm:text-6xl font-bold uppercase text-white tracking-tight"
        >
          GET IN <span className="text-cyber-red glow-text-red">TOUCH</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-cyber-muted max-w-xl mx-auto font-space text-sm sm:text-base"
        >
          Interested in collaborating on UI/UX product design, high-fidelity prototyping, or full-stack web applications? Send a message directly.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Email Card */}
          <div className="cyber-card p-6 rounded-xl border border-white/10 hover:border-cyber-red/50 transition-all flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-cyber-red/10 text-cyber-red border border-cyber-red/30">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-cyber-muted">PRIMARY E-MAIL</div>
                <a href="mailto:athulrajpr777@gmail.com" className="font-mono text-sm text-white hover:text-cyber-red transition-colors font-semibold">
                  athulrajpr777@gmail.com
                </a>
              </div>
            </div>

            <button
              onClick={() => handleCopy("athulrajpr777@gmail.com", "email")}
              className="p-2 text-cyber-muted hover:text-white transition-colors"
              title="Copy Email"
            >
              {copiedField === "email" ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* GitHub Card */}
          <div className="cyber-card p-6 rounded-xl border border-white/10 hover:border-cyber-red/50 transition-all flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-cyber-red/10 text-cyber-red border border-cyber-red/30">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-cyber-muted">GITHUB USERNAME</div>
                <a
                  href="https://github.com/athulrajpr777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-white hover:text-cyber-red transition-colors font-semibold"
                >
                  athulrajpr777
                </a>
              </div>
            </div>

            <button
              onClick={() => handleCopy("https://github.com/athulrajpr777", "github")}
              className="p-2 text-cyber-muted hover:text-white transition-colors"
              title="Copy GitHub Link"
            >
              {copiedField === "github" ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location Card */}
          <div className="cyber-card p-6 rounded-xl border border-white/10 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-cyber-red/10 text-cyber-red border border-cyber-red/30">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyber-muted">LOCATION</div>
              <div className="font-mono text-sm text-white font-semibold">Kochi, KL 682001, India</div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="pt-6 border-t border-white/10">
            <h4 className="text-xs font-mono uppercase text-cyber-muted tracking-widest mb-4">DIRECT CONNECT & SOCIALS</h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://linkedin.com/in/athul-raj-p-r-424035383"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card p-4 rounded-lg flex items-center gap-3 text-xs font-mono text-cyber-text hover:text-cyber-red border border-white/10 hover:border-cyber-red/50 transition-all"
              >
                <Linkedin className="w-4 h-4 text-cyber-red" />
                <span>LINKEDIN</span>
              </a>

              <a
                href="https://instagram.com/_athul.xo_"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card p-4 rounded-lg flex items-center gap-3 text-xs font-mono text-cyber-text hover:text-cyber-red border border-white/10 hover:border-cyber-red/50 transition-all"
              >
                <Instagram className="w-4 h-4 text-cyber-red" />
                <span>INSTAGRAM</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Terminal Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="cyber-glass p-8 sm:p-10 rounded-2xl border border-cyber-red/40 shadow-2xl relative">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs text-cyber-muted">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-cyber-text font-semibold">[ TRANSMIT MESSAGE ]</span>
              </div>
              <span>PORT: 443</span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-oswald text-2xl font-bold uppercase text-white">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-sm font-space text-cyber-muted max-w-md mx-auto">
                  Thank you for reaching out! Your message has been logged into Athul&apos;s direct queue. You will receive a response shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="cyber-btn text-xs mt-4"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cyber-muted uppercase tracking-wider mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-lg bg-cyber-bg border border-white/10 text-white focus:border-cyber-red focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-cyber-muted uppercase tracking-wider mb-2">
                      E-MAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-cyber-bg border border-white/10 text-white focus:border-cyber-red focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cyber-muted uppercase tracking-wider mb-2">
                    SUBJECT / PROJECT TYPE
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="UI/UX Design, High-Fidelity Prototype, Web Development..."
                    className="w-full px-4 py-3 rounded-lg bg-cyber-bg border border-white/10 text-white focus:border-cyber-red focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-cyber-muted uppercase tracking-wider mb-2">
                    MESSAGE CONTENT *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your project goals, timelines, or inquiry..."
                    className="w-full px-4 py-3 rounded-lg bg-cyber-bg border border-white/10 text-white focus:border-cyber-red focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-btn w-full justify-center py-3 text-sm"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      TRANSMITTING...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>SEND DISPATCH</span>
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      {/* Footer Branding */}
      <div className="mt-24 pt-8 border-t border-cyber-red/20 text-center font-mono text-xs text-cyber-muted flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© 2026 ATHUL RAJ P R. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-cyber-red inline-block" />
          <span>CYBERPUNK NEXT.JS 14 ENGINE</span>
        </div>
      </div>
    </section>
  );
}

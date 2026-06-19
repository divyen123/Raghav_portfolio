"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, X, Eye, FileBadge } from "lucide-react";

const educationDetails = [
  {
    type: "Degree",
    title: "Bachelor of Engineering (B.E.) – Robotics and Automation Engineering",
    institution: "Easwari Engineering College, Chennai",
    timeline: "Currently Pursuing – Third Year",
    description:
      "Pursuing a Bachelor of Engineering in Robotics and Automation with a focus on robotics, artificial intelligence, embedded systems, automation technologies, control systems, computer vision, and autonomous platforms. Actively engaged in aerospace innovation, drone technologies, swarm intelligence, AI-powered autonomous systems, and research-driven engineering projects through Ragas Aerospace.",
    icon: GraduationCap,
    color: "neon",
  },
  {
    type: "Competition",
    title: "3rd Place – Drone Competition, FLIGHT'25",
    institution: "Madras Institute of Technology (MIT), Anna University | April 2025",
    timeline: "April 2025",
    description:
      "Awarded 3rd Place in a national-level drone competition organized by the Department of Aerospace Engineering, demonstrating technical proficiency in UAV systems, drone operations, aerospace innovation, and autonomous flight technologies.",
    icon: Award,
    color: "gold",
  },
];

const certificates = [
  { id: 1, title: "Drone System & UAV Operations", img: "WhatsApp Image 2026-06-18 at 9.18.11 PM.jpeg" },
  { id: 2, title: "Robotics and Automation", img: "WhatsApp Image 2026-06-18 at 9.18.26 PM.jpeg" },
  { id: 3, title: "Aerospace Design Certification", img: "WhatsApp Image 2026-06-18 at 9.18.44 PM.jpeg" },
  { id: 4, title: "Autonomous Flight Systems", img: "WhatsApp Image 2026-06-18 at 9.23.37 PM.jpeg" },
  { id: 5, title: "Embedded Systems Development", img: "WhatsApp Image 2026-06-18 at 9.26.41 PM.jpeg" },
  { id: 6, title: "AI and Computer Vision", img: "WhatsApp Image 2026-06-18 at 9.26.46 PM.jpeg" },
  { id: 7, title: "Swarm Intelligence & Control", img: "WhatsApp Image 2026-06-18 at 9.30.55 PM.jpeg" },
  { id: 8, title: "Defense Tech Research", img: "WhatsApp Image 2026-06-18 at 9.31.35 PM.jpeg" },
  { id: 9, title: "Electronic Warfare Systems", img: "WhatsApp Image 2026-06-18 at 9.34.41 PM.jpeg" },
  { id: 10, title: "National Drone Expo Achievement", img: "WhatsApp Image 2026-06-18 at 9.35.44 PM.jpeg" },
  { id: 11, title: "Aerospace Innovation Leader", img: "WhatsApp Image 2026-06-18 at 9.37.25 PM.jpeg" },
];

const colorMap: Record<string, { border: string; icon: string; badge: string; shadow: string }> = {
  neon: {
    border: "border-aerospace-neon/30 hover:border-aerospace-neon/70",
    icon: "text-aerospace-neon",
    badge: "bg-aerospace-neon/10 text-aerospace-neon",
    shadow: "shadow-[0_0_15px_rgba(0,191,255,0.15)]",
  },
  gold: {
    border: "border-yellow-400/30 hover:border-yellow-400/70",
    icon: "text-yellow-400",
    badge: "bg-yellow-400/10 text-yellow-400",
    shadow: "shadow-[0_0_15px_rgba(250,204,21,0.15)]",
  },
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="education" ref={ref} className="relative py-36 px-6 md:px-16 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 animate-grid pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,191,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.02,
        }}
      />
      <div className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full bg-aerospace-neon/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-aerospace-neon font-mono text-xs tracking-[0.45em] uppercase mb-5"
        >
          05 — Education & Credentials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold text-white mb-20"
        >
          Academic & Technical Foundation
        </motion.h2>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left Column: Education and Competitions (Timeline style) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-white tracking-wider flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-aerospace-neon" />
              Education & Achievements
            </h3>

            <div className="relative border-l border-white/10 pl-6 ml-3 space-y-12">
              {educationDetails.map((item, idx) => {
                const Icon = item.icon;
                const colors = colorMap[item.color];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                    className="relative"
                  >
                    {/* Timeline node */}
                    <div
                      className={`absolute w-7 h-7 rounded-lg border border-white/20 bg-[#080808] flex items-center justify-center -left-[38px] top-1 ${colors.icon} ${colors.shadow}`}
                    >
                      <Icon size={14} />
                    </div>

                    <div
                      className={`holo-glass rounded-2xl p-6 border ${colors.border} transition-all duration-300 hover:translate-x-2`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full tracking-widest uppercase ${colors.badge}`}>
                          {item.type}
                        </span>
                        <span className="text-gray-500 font-mono text-xs">{item.timeline}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className={`${colors.icon} font-semibold text-sm mb-4`}>{item.institution}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Certifications Grid */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white tracking-wider flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-aerospace-cyan" />
              Professional Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
              {certificates.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
                  className="group relative holo-glass rounded-xl p-4 border border-white/10 hover:border-aerospace-cyan/50 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between h-[150px]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-aerospace-cyan transition-colors">
                      <FileBadge size={16} />
                    </div>
                    <span className="text-[9px] font-mono text-gray-500">ID: {String(cert.id).padStart(2, "0")}</span>
                  </div>

                  <div className="mt-2">
                    <h4 className="text-xs font-bold text-white line-clamp-2 group-hover:text-aerospace-cyan transition-colors duration-300">
                      {cert.title}
                    </h4>
                  </div>

                  <div className="mt-3 flex justify-end">
                    <button
                      onClick={() => setSelectedCert(cert.img)}
                      className="text-[10px] font-mono font-bold text-gray-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/15 transition-all duration-300"
                    >
                      <Eye size={10} />
                      VIEW
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating full-screen viewer (Modal) */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center">
            {/* Wrong (Close) Icon button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-14 right-2 md:-right-12 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:text-red-500 hover:bg-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] z-10"
              aria-label="Close certificate"
            >
              <X size={20} />
            </button>
            <div className="relative w-full h-[75vh] flex items-center justify-center rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black/50">
              <img
                src={`/certifications/${selectedCert}`}
                alt="Certificate Viewer"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

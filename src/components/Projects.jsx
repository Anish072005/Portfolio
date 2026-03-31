"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ScheduleSync",
    status: "LIVE",
    description: "AI-featured website for managing teacher leave adjustments where the admin can send adjustment requests to free teachers based on their timetable and lecture schedule.",
    tags: ["React.js","Tailwind", "Node.js", "MongoDB", "Groq-AI API"],
    link: "https://schedulesync-beta.vercel.app/",
    github: "https://github.com/Anish072005/ScheduleSync",
    image: "/scheduleSync.png",
  },
  {
    title: "Talent-IQ",
    status: "LIVE",
    description: "A real-time technical interview platform featuring live video calls, instant chat, and an integrated code editor with a curated problem set — built to streamline the hiring process end to end.",
    tags: ["React.js","Tailwind", "Node.js", "MongoDB","Stream.io"],
    link: "https://talent-iq-8bmj.onrender.com/",
    github: "https://github.com/Anish072005/Talent-IQ",
    image: "/Talent-iq.png",
  },
  {
    title: "EsyPG",
    status: "DEV",
    description: "A PG rooms booking website With two user roles i.e owner and tenant build with using mern stack",
    tags: ["React.js","Tailwind", "Node.js", "MongoDB"],
    github: "https://github.com/Anish072005/EsyPG",
    link: "https://github.com/Anish072005/EsyPG",
    image: "/EsyPG.png",
  },
];

const statusColor = {
  LIVE: "bg-green-400",
  DEV: "bg-yellow-400",
};

export default function Projects() {
  return (
    <section style={{ paddingLeft: "16px", paddingRight: "16px" }}>
      {/* Header */}
      <div style={{ marginBottom: "48px" }} className="space-y-3">
        <p className="text-gray-500 dark:text-slate-400 text-sm font-medium italic tracking-[0.2em] uppercase font-sans">
          Projects
        </p>
        <h2 className="text-4xl md:text-6xl font-serif text-foreground tracking-tight leading-[1.05]">
          Things I've Built
        </h2>
      </div>

      {/* Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative flex flex-col rounded-2xl border border-slate-200 dark:border-emerald-500/20 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md overflow-hidden hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500"
            style={{ width: "100%" }}
          >
            {/* Image Container */}
            <div className="relative h-56 md:h-64 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              ) : (
                <div className="w-full h-full bg-emerald-950/30 flex items-center justify-center">
                  <span className="text-emerald-500/30 font-serif italic">Preview Coming Soon</span>
                </div>
              )}
              {/* Refined Image Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-950 via-slate-50/20 dark:via-slate-950/20 to-transparent opacity-80" />
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border border-slate-200 dark:border-emerald-500/20 shadow-2xl">
                <span className={`w-2 h-2 rounded-full ${statusColor[project.status]} animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]`} />
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold tracking-[0.1em] uppercase">{project.status}</span>
              </div>
            </div>

            {/* Premium Content Area */}
            <div className="flex flex-col flex-1 p-8 space-y-6 bg-slate-50/40 dark:bg-slate-950/40">
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-serif font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans line-clamp-3 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                  {project.description}
                </p>
              </div>

              {/* Enhanced Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-3 py-1 rounded-full bg-emerald-500/5 text-emerald-400 border border-emerald-500/10 hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links with Hover Effects */}
              <div className="flex items-center justify-between pt-6 mt-auto border-t border-emerald-500/10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-serif italic font-medium text-lg hover:text-emerald-500 dark:hover:text-emerald-300 transition-all group/link"
                >
                  <ExternalLink className="w-6 h-6 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                </a>
                
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full text-slate-500 hover:text-emerald-400 hover:bg-slate-900 border border-transparent hover:border-emerald-500/20 transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
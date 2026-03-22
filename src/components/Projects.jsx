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
            className="group relative flex flex-col justify-between rounded-2xl border border-emerald-200 dark:border-emerald-800/50 overflow-hidden hover:shadow-xl transition-all duration-300"
style={{ minHeight: "300px", minWidth: "10", width: "100%" }}
          >
            {/* Background image */}
            {project.image ? (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            ) : (
              <div className="absolute inset-0 bg-emerald-50 dark:bg-emerald-950/30" />
            )}

            {/* Overlay */}
<div className="absolute inset-0 bg-white/85 dark:bg-slate-900/85 group-hover:bg-white/75 dark:group-hover:bg-slate-900/75 transition-all duration-300" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-6">
              {/* Top */}
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="space-y-2">
<h3 className="text-xl font-sans font-semibold text-gray-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${statusColor[project.status]}`} />
                      <span className="text-xs font-mono text-muted">{project.status}</span>
                    </div>
                  </div>

                  {/* Icons */}
                  <div className="flex items-center gap-2">
                    
                    <a href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-full border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-emerald-950/50 text-muted hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.link !== "#" && (
                      
                     <a href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-emerald-950/50 text-muted hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
<p className="text-sm text-gray-700 dark:text-slate-300 leading-relaxed mt-4">
                  {project.description}
                </p>
              </div>

              {/* Bottom tags */}
              <div>
                <div className="border-t border-emerald-200 dark:border-emerald-800/50 my-4" />
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted flex items-center gap-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-emerald-600 inline-block" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
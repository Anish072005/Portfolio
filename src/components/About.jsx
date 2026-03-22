"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const mdLines = [
  { n: "01", type: "h1",    content: "# Full Stack Software Engineer" },
  { n: "02", type: "empty", content: "" },
  { n: "03", type: "text",  content: "Building web solutions from data structures to user-facing applications." },
  { n: "04", type: "empty", content: "" },
  { n: "05", type: "h2",   content: "## Focus Areas" },
  { n: "06", type: "list", content: "- Full Stack AI development" },
  { n: "07", type: "list", content: "- Open Source Contribution" },
  { n: "08", type: "list", content: "- Data Structures and Algorithms" },
  { n: "09", type: "empty", content: "" },
  { n: "10", type: "h2",   content: "## Location" },
  { n: "11", type: "text", content: "Chamba, Himachal Pradesh, India" },
  { n: "12", type: "empty", content: "" },
  { n: "13", type: "h2",   content: "## Tech Stack" },
  { n: "14", type: "text", content: "• React • Node.js • Express.js  •Mongodb  • Javascript • Next.js • Github" },
  { n: "15", type: "empty", content: "" },
  { n: "16", type: "h2",   content: "## Interests" },
  { n: "17", type: "text", content: "AI & ML • Data Science • LLMs" },
  { n: "18", type: "empty", content: "" },
  { n: "19", type: "h2",   content: "## Status" },
  { n: "20", type: "text", content: "Open to opportunities" },
];

const terminalLines = [
  { label: "whoami",              value: "Full Stack Software Engineer" },
  { label: "location --current",  value: "Chamba, Himachal Pradesh, India" },
  { label: "stack --list",        value: "• React • Node.js • Express.js  •Mongodb  • Javascript • Next.js • Github" },
  { label: "focus --areas",       value: "Full Stack AI development • Open Source • Data Structures and Algorithms" },
  { label: "interests --verbose", value: "AI & ML • Data Science • LLMs" },
  { label: "status --work",       value: "Open to opportunities" },
];

function lineColor(type) {
  if (type === "h1" || type === "h2") return "text-[#4f6df5] dark:text-indigo-400 font-semibold";
  if (type === "list") return "text-gray-700 dark:text-slate-300";
  if (type === "empty") return "";
  return "text-gray-600 dark:text-slate-400";
}

export default function About() {
  const [view, setView] = useState("md");

  return (
 <section style={{ paddingLeft: "16px", paddingRight: "16px" }}>
      {/* Header */}
      <div style={{ marginBottom: "48px" }} className="space-y-3">
        <p className="text-gray-500 dark:text-slate-400 text-sm font-medium italic tracking-[0.2em] uppercase">About</p>
        <h2 className="text-4xl md:text-6xl font-serif text-foreground tracking-tight leading-[1.05]">
          Who I am
        </h2>
      </div>

      {/* Content row */}
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start lg:px-12">

        {/* Terminal column — 65% width */}
        <div className="w-full lg:w-[65%] space-y-3 order-2 lg:order-1">
          <div className="flex justify-end">
            <button
              onClick={() => setView(v => v === "md" ? "terminal" : "md")}
              className="px-4 py-1.5 border border-gray-300 dark:border-slate-600 rounded-lg text-xs text-gray-500 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors font-medium"
            >
              {view === "md" ? "Terminal view" : "Text view"}
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-2xl bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-700 shadow-lg overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="text-xs text-gray-400 dark:text-slate-400 font-mono tracking-widest">
                {view === "md" ? "about.md" : "about.sh"}
              </span>
              <div className="w-12" />
            </div>

            <div className="p-6 md:p-10" style={{ fontFamily: "'Inter', monospace" }}>
              {view === "md" ? (
                <div className="space-y-1 text-sm md:text-base">
                  {mdLines.map((line) => (
                    <div key={line.n} className="flex gap-4 items-baseline">
                      <span className="text-gray-300 dark:text-slate-600 text-xs w-5 shrink-0 select-none">{line.n}</span>
                      <span className={lineColor(line.type)}>{line.content || "\u00A0"}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-8 text-sm md:text-base">
                  {terminalLines.map((line) => (
                    <div key={line.label} className="space-y-1">
                      <div className="flex items-center flex-wrap gap-1">
                        <span className="text-[#4f6df5] dark:text-indigo-400 font-semibold">Anish@portfolio</span>
                        <span className="text-gray-500 dark:text-slate-400 font-semibold">:~$</span>
                        <span className="text-gray-800 dark:text-slate-200 font-medium ml-2">{line.label}</span>
                      </div>
                      <div className="text-gray-600 dark:text-slate-400 leading-relaxed">{line.value}</div>
                    </div>
                  ))}
                  <div className="flex items-center gap-1">
                    <span className="text-[#4f6df5] dark:text-indigo-400 font-semibold">Anish@portfolio</span>
                    <span className="text-gray-500 dark:text-slate-400 font-semibold">:~$</span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity }}
                      className="w-2 h-4 bg-gray-700 dark:bg-slate-300 ml-2 inline-block rounded-sm"
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Profile image — 35% width */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="shrink-0 flex flex-col items-center gap-5 order-1 lg:order-2 w-full lg:w-[35%] lg:pt-8"
        >
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-border shadow-2xl">
            <img
              src="/Anish.jpeg"
              alt="Anish Kumar"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="text-center space-y-1">
            <p className="font-semibold text-foreground text-base">Anish Kumar</p>
            <p className="text-muted text-sm">Full Stack Software Engineer</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
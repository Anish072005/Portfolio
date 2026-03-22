"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Chitkara University, Himachal Pardesh",
    from: "Jul 2022",
    to: "Jul 2026",
  },
];

export default function Education() {
  return (
    <section style={{ paddingLeft: "16px", paddingRight: "16px" }}>
      {/* Header */}
      <div style={{ marginBottom: "48px" }} className="space-y-3">
        <p className="text-gray-500 dark:text-slate-400 text-sm font-medium italic tracking-[0.2em] uppercase font-sans">
          Education
        </p>
      </div>

      <div className="space-y-4">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center justify-between px-8 py-6 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50 dark:bg-emerald-950/30"
          >
            <div className="space-y-1">
              <h3 className="text-lg font-semibold font-sans text-foreground tracking-tight">
                {edu.degree}
              </h3>
              <p className="text-sm font-sans text-muted">{edu.school}</p>
            </div>
            <div className="text-sm font-mono text-muted shrink-0 ml-8">
              {edu.from} — {edu.to}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
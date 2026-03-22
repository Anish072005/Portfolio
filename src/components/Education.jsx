"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    school: "Chitkara University, Himachal Pardesh",
    from: "Jul 2022",
    to: "Jul 2026",
  },
];

export default function Education() {
  return (
    <section style={{ paddingLeft: "32px", paddingRight: "32px" }}>
      {/* Header */}
      <div style={{ marginBottom: "48px" }} className="space-y-3">
        <p className="text-gray-500 dark:text-slate-400 text-sm font-medium italic tracking-[0.2em] uppercase font-sans">
          Education
        </p>
      </div>

      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ paddingLeft: "56px", paddingRight: "56px" }}
            className="flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 rounded-3xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50 dark:bg-emerald-950/30 gap-6 md:gap-8 text-left shadow-sm hover:shadow-md transition-shadow duration-300 w-full overflow-hidden"
          >
            <div className="space-y-3 max-w-full md:max-w-[75%]">
              <h3 className="text-xl md:text-2xl font-bold font-serif text-foreground tracking-tight leading-tight break-words">
                {edu.degree}
              </h3>
              <p className="text-base md:text-lg font-sans text-muted font-medium">
                {edu.school}
              </p>
            </div>
            <div className="text-sm md:text-base font-mono bg-emerald-100/50 dark:bg-emerald-900/30 px-4 py-2 rounded-full text-emerald-700 dark:text-emerald-400 font-semibold shrink-0 self-start md:self-center">
              {edu.from} — {edu.to}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
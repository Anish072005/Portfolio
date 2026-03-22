"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Atom, 
  FileCode, 
  Wind, 
  Activity, 
  Server, 
  HardDrive, 
  Database, 
  Github, 
  Orbit, 
  Code, 
  Send, 
  MousePointer2, 
  GitBranch 
} from "lucide-react";

const skills = [
  { name: "HTML", icon: <Code2 className="w-6 h-6 text-orange-500" /> },
  { name: "CSS", icon: <Palette className="w-6 h-6 text-blue-500" /> },
  { name: "React", icon: <Atom className="w-6 h-6 text-blue-400" /> },
  { name: "Javascript", icon: <FileCode className="w-6 h-6 text-yellow-400" /> },
  { name: "Next.js", icon: <Activity className="w-6 h-6 text-foreground" /> },
  { name: "Tailwind", icon: <Wind className="w-6 h-6 text-cyan-400" /> },
  { name: "Node.js", icon: <Server className="w-6 h-6 text-green-500" /> },
  { name: "Express", icon: <HardDrive className="w-6 h-6 text-gray-400" /> },
  { name: "MongoDB", icon: <Database className="w-6 h-6 text-green-600" /> },
  { name: "GitHub", icon: <Github className="w-6 h-6 text-foreground" /> },
  { name: "Antigravity", icon: <Orbit className="w-6 h-6 text-indigo-400" /> },
  { name: "VS Code", icon: <Code className="w-6 h-6 text-blue-500" /> },
  { name: "Postman", icon: <Send className="w-6 h-6 text-orange-500" /> },
  { name: "Cursor", icon: <MousePointer2 className="w-6 h-6 text-sky-400" /> },
  { name: "Git", icon: <GitBranch className="w-6 h-6 text-orange-600" /> },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
<section style={{ paddingLeft: "16px", paddingRight: "16px" }}>
      {/* Header */}  
      <div style={{ marginBottom: "48px" }} className="space-y-3">
        <p className="text-gray-500 dark:text-slate-400 text-sm font-medium italic tracking-[0.2em] uppercase font-sans">
          Tools & Technologies
        </p>
        <h2 className="text-4xl md:text-6xl font-serif text-foreground tracking-tight leading-[1.05]">
          Stack I work with
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group p-6 rounded-2xl bg-card border border-border shadow-md dark:shadow-none hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center cursor-default"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary group-hover:scale-110 transition-transform duration-300 shadow-sm border border-border">
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ParticleLayer from "./ParticleLayer";

export function AnimatedBackground() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = resolvedTheme || theme;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      
      <AnimatePresence>
        {currentTheme === "dark" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-[#020617]"
          >
            {/* 🔥 PARTICLES (NEW) */}
            <ParticleLayer />

            {/* Gradient Blobs */}
            <motion.div
              animate={{
                x: [100, 200, 150],
                y: [100, 150, 200],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-slate-500/10 blur-[120px]"
            />

            <motion.div
              animate={{
                x: [-100, -150, -100],
                y: [200, 100, 150],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-slate-400/10 blur-[120px]"
            />

            <motion.div
              animate={{
                x: [200, 100, 150],
                y: [-100, -50, -100],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -bottom-[10%] left-[20%] w-[450px] h-[450px] rounded-full bg-slate-200/10 blur-[120px]"
            />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Light Mode */}
      <AnimatePresence>
        {currentTheme === "light" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-white"
          >
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
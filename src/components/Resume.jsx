"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function Resume() {
    return (
        <div className="flex flex-col items-center justify-center space-y-8 py-20 text-center">
             <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wider">
                Resume
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground max-w-2xl">
                Interested in my professional background?
            </h2>
            <p className="text-lg text-muted max-w-xl">
                Download my resume to see a detailed overview of my skills, 
                experience, and accomplishments.
            </p>
            
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="flex items-center gap-3 px-10 py-4 bg-accent text-accent-foreground rounded-2xl font-bold shadow-xl shadow-accent/20 hover:shadow-accent/30 transition-all border border-accent/20"
            >
                <Download className="w-5 h-5" />
                Download CV
            </motion.a>
        </div>
    );
}

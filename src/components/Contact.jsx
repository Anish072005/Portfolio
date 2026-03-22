"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
    return (
<section className="pt-10 pb-10 px-6 flex flex-col items-center text-center space-y-12">
            {/* Header */}
              <div style={{ marginBottom: "48px" }} className="space-y-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-6 py-2.5 rounded-full border border-emerald-500/20 dark:border-emerald-400/20 bg-emerald-500/5 dark:bg-emerald-400/5 text-xs font-bold uppercase tracking-[0.50em] text-emerald-600 dark:text-blue-400 shadow-sm transition-all duration-300 hover:bg-emerald-500/10 dark:hover:bg-emerald-400/10"
                >
                    Get In Touch
                </motion.div>
            </div>

            {/* Contact Icons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-8"
            >
                {/* LinkedIn */}
                <motion.a
                    href="https://www.linkedin.com/in/anish-kumar-90480b294/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex flex-col items-center gap-2 group"
                >
                    <Linkedin className="w-5 h-5 text-gray-400 dark:text-slate-500 group-hover:text-foreground transition-colors duration-300" />
                    <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400 dark:text-slate-500 group-hover:text-foreground transition-colors duration-300">LinkedIn</span>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                    href="https://wa.me/+917876652540"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex flex-col items-center gap-2 group"
                >
                    <MessageCircle className="w-5 h-5 text-gray-400 dark:text-slate-500 group-hover:text-foreground transition-colors duration-300" />
                    <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400 dark:text-slate-500 group-hover:text-foreground transition-colors duration-300">WhatsApp</span>
                </motion.a>

                {/* Email */}
                <motion.a
                    href="mailto:thakuranish46249@gmail.com"
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex flex-col items-center gap-2 group"
                >
                    <Mail className="w-5 h-5 text-gray-400 dark:text-slate-500 group-hover:text-foreground transition-colors duration-300" />
                    <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400 dark:text-slate-500 group-hover:text-foreground transition-colors duration-300">Email</span>
                </motion.a>
            </motion.div>
        </section>
    );
}
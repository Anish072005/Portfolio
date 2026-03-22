"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Terminal, FileText } from "lucide-react";

export default function Hero() {
    const [loopKey, setLoopKey] = useState(0);
    const welcomeText = "Welcome to my Portfolio";
    const nameText = "I'm Anish Kumar";
    const subText = "A passionate full stack developer focused on building real-world and functional web experiences I'm passionate about new technologies and solving problems, always eager to explore the latest trends in software development.";

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: "https://github.com/Anish072005", label: "GitHub" },
        { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/anish-kumar-90480b294/", label: "LinkedIn" },
        { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/anish_maha53676", label: "Twitter" },
        { icon: <Terminal className="w-5 h-5" />, href: "https://codolio.com/profile/Anish07k", label: "Codolio" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setLoopKey(prev => prev + 1);
        }, 12000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
                delayChildren: 0.2,
            },
        },
    };

    const characterVariants = {
        hidden: { opacity: 0, display: "none" },
        visible: {
            opacity: 1,
            display: "inline",
            transition: { duration: 0.03 },
        },
    };

    const TypingLine = ({ text, className, delay = 0 }) => (
        <motion.span
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={className}
            style={{ transitionDelay: `${delay}s` }}
        >
            {text.split("").map((char, index) => (
                <motion.span key={index} variants={characterVariants}>
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );

    return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center text-center py-20 max-w-7xl mx-auto px-6 w-full overflow-hidden" key={loopKey}>
            <div className="space-y-2">
                <TypingLine
                    text={welcomeText}
                    className="inline-block text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-4"
                />

                <h1 className="text-5xl md:text-8xl font-serif text-foreground leading-[1.1]">
                    <TypingLine text={nameText} />
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="pt-2"
                >
                    <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto font-medium font-sans">
                        <TypingLine text={subText} />
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 4 }}
                className="flex flex-wrap items-center justify-center gap-10 mt-24"
            >
                
                  <a  href="#projects"
                    className="px-8 py-3.5 bg-accent text-accent-foreground rounded-xl font-bold hover:opacity-90 transition-all shadow-xl shadow-accent/20 flex items-center justify-center group min-w-[200px]"
                >
                    <span className="flex items-center justify-center">
                        View My Work
                        <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                </a>

                <div className="flex items-center gap-4">
                    {socialLinks.map((social) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted hover:text-accent hover:bg-accent/5 border border-border transition-all"
                            title={social.label}
                        >
                            {social.icon}
                        </motion.a>
                    ))}

                    {/* Resume Button */}
                    <motion.a
                        href="/Anish.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary border border-border text-muted hover:text-accent hover:bg-accent/5 transition-all text-sm font-medium"
                        title="Resume"
                    >
                        <FileText className="w-4 h-4" />
                        <span>Resume</span>
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
}
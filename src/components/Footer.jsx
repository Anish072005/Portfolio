"use client";

import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full py-8 border-t border-border" style={{ marginTop: "80px" }}>
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm text-muted flex items-center gap-1.5">
                    Made with{" "}
<Heart className="w-4 h-4 fill-transparent stroke-red-500 dark:stroke-red-500" />
                    {" "}by{" "}
                    <span className="text-foreground font-medium hover:text-accent transition-colors duration-300">
                        Anish Kumar
                    </span>
                </p>

                <div className="flex gap-6 text-sm font-medium text-muted">
                    <a href="#about" className="hover:text-accent transition-colors duration-300">About</a>
                    <a href="#skills" className="hover:text-accent transition-colors duration-300">Skills</a>
                    <a href="#projects" className="hover:text-accent transition-colors duration-300">Projects</a>
                    <a href="#contact" className="hover:text-accent transition-colors duration-300">Contact</a>
                </div>

                <p className="text-sm text-muted font-serif italic tracking-wide">
                    My Portfolio
                </p>
            </div>
        </footer>
    );
}
"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm shadow-lg border-b border-border"
          : "py-10 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Aesthetic Animated Logo */}
        <motion.a 
          href="#" 
          className="relative flex items-center group perspective-1000"
          initial="initial"
          whileHover="hover"
        >
          <div className="relative flex items-center">
            {/* The "a" and "k" symbols */}
            <motion.div 
              className="flex items-center leading-none"
              variants={{
                initial: { x: 0 },
                hover: { x: -5 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="text-2xl md:text-5xl font-black tracking-tighter text-foreground selection:bg-accent/30 lowercase">
                a
              </span>
              <span className="text-2xl md:text-5xl font-black tracking-tighter text-accent -ml-1 selection:bg-foreground/30 lowercase">
                k
              </span>
            </motion.div>

            {/* Decorative dots/elements */}
            <motion.div 
              className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-full"
              variants={{
                initial: { scale: 0, opacity: 0 },
                hover: { scale: 1, opacity: 1, x: 5 }
              }}
            />
          </div>

          {/* Animating the full name */}
          <div className="ml-4 overflow-hidden hidden sm:block">
            <motion.div 
              className="flex flex-col items-start leading-none"
              variants={{
                initial: { opacity: 0.6, x: -10 },
                hover: { opacity: 1, x: 0 }
              }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted group-hover:text-accent transition-colors duration-300">
              Anish
              </span>
              <span className="text-sm font-black tracking-tight text-foreground">
                Kumar
              </span>
            </motion.div>
          </div>
          
          {/* Subtle underline animation */}
          <motion.div 
            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent/50 origin-left"
            variants={{
              initial: { scaleX: 0 },
              hover: { scaleX: 1 }
            }}
          />
        </motion.a>

        <div className="hidden md:flex items-center gap-14 ml-auto mr-14">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-medium tracking-wide text-muted hover:text-foreground transition-all relative py-1"
              whileHover={{ y: -2 }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>
      </div>
      
      {/* Theme Button in far right corner */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-10 flex items-center">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
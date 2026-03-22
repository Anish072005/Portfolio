"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-4 w-14 h-14" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-4 rounded-full hover:bg-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-7 h-7 text-yellow-400" />
      ) : (
        <Moon className="w-7 h-7 text-slate-700" />
      )}
    </button>
  );
}

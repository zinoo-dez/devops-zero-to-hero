"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import {
  Menu,
  X,
  BookOpen,
  Map,
  Terminal,
  Layers,
  Sparkles,
  ArrowRight,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { SearchModal } from "@/components/ui/SearchModal";
import { GitHubIcon } from "@/components/icons/TechIcons";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Global Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses", icon: BookOpen },
    { href: "/roadmap", label: "Interactive Roadmap", icon: Map },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white dark:bg-[#09090d] dark:border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0d0d14] rounded-[10px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-foreground flex items-center gap-1.5">
              DevOps <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-400 bg-clip-text text-transparent">Zero to Hero</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2",
                  isActive
                    ? "text-blue-700 dark:text-white bg-blue-500/15 border border-blue-500/30 shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-slate-200 dark:hover:bg-white/5"
                )}
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: CTAs + ThemeToggle + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Search trigger */}
          <button
            id="search-trigger"
            onClick={() => setSearchOpen(true)}
            aria-label="Search courses (Cmd+K)"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm text-muted-foreground bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:text-foreground hover:border-blue-400/40 transition-all cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="text-xs">Search</span>
            <kbd className="hidden lg:flex items-center gap-0.5 text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 border border-white/10">
              ⌘K
            </kbd>
          </button>

          <Link
            href="/courses/linux-command-line/01-why-linux-matters"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Start Learning
          </Link>

          <a
            href="https://github.com/zinoo-dez/devops-zero-to-hero"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            aria-label="GitHub Repository (zinoo-dez/devops-zero-to-hero)"
            title="Star & Contribute on GitHub"
          >
            <GitHubIcon className="w-4 h-4 text-blue-500" />
          </a>

          <ThemeToggle />

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-800 dark:text-white" /> : <Menu className="w-5 h-5 text-slate-800 dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#09090d]/95 backdrop-blur-2xl px-4 pt-4 pb-6 space-y-2.5 shadow-2xl transition-colors"
          >
            {/* Quick Search Button on mobile */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm text-slate-500 dark:text-muted-foreground bg-slate-100 hover:bg-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:text-foreground transition-all mb-3 cursor-pointer"
            >
              <span className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-medium">Search courses & lessons...</span>
              </span>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/10">
                ⌘K
              </kbd>
            </button>

            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all",
                    isActive
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/30 shadow-sm"
                      : "text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                  )}
                >
                  <span className="flex items-center gap-3">
                    {link.icon && (
                      <link.icon
                        className={cn(
                          "w-5 h-5",
                          isActive
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-slate-400 dark:text-slate-400"
                        )}
                      />
                    )}
                    {link.label}
                  </span>
                  <ArrowRight
                    className={cn(
                      "w-4 h-4",
                      isActive
                        ? "text-blue-600 dark:text-blue-400 opacity-80"
                        : "opacity-40"
                    )}
                  />
                </Link>
              );
            })}

            <div className="pt-3">
              <Link
                href="/courses/linux-command-line/01-why-linux-matters"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all"
              >
                <Sparkles className="w-4 h-4" />
                Start Learning for Free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Search Modal */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

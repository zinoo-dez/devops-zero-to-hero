import React from "react";
import Link from "next/link";
import { Terminal, Heart, Sparkles, BookOpen, Map, Zap } from "lucide-react";
import { GitHubIcon } from "@/components/icons/TechIcons";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 dark:bg-[#07070a] dark:border-white/[0.08] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-0.5 shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-[#0d0d14] rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-blue-400" />
                </div>
              </div>
              <span className="font-extrabold text-base tracking-tight text-foreground">
                DevOps <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">Zero to Hero</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From your first Linux terminal command to production Kubernetes clusters. 100% free, beginner-first, visual engineering curriculum.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Learning Tracks
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/courses/linux-command-line"
                  className="text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5 text-blue-400" /> Linux Command Line
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/git-github"
                  className="text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Git & GitHub Basics
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/github-actions"
                  className="text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Zap className="w-3.5 h-3.5 text-blue-400" /> GitHub Actions CI/CD
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/docker-fundamentals"
                  className="text-muted-foreground hover:text-blue-400 transition-colors"
                >
                  Docker & Containers
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground hover:text-blue-400 transition-colors"
                >
                  All 9 Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Map className="w-3.5 h-3.5 text-blue-400" /> Visual Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/cicd-project"
                  className="text-muted-foreground hover:text-blue-400 transition-colors"
                >
                  Capstone CI/CD Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Open Source */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Open Source
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              DevOps Zero to Hero is an open educational project built to empower new engineers everywhere.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-200/50 hover:bg-slate-200 border border-slate-300 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Repository"
              >
                <GitHubIcon className="w-4 h-4 text-blue-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} DevOps Zero to Hero. Built for aspiring cloud & DevOps engineers.
          </div>
          <div className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-blue-500 fill-blue-500 mx-0.5" /> for the community
          </div>
        </div>
      </div>
    </footer>
  );
}

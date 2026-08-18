import React from "react";
import Link from "next/link";
import { Terminal, Heart, Sparkles, BookOpen, Map, Zap } from "lucide-react";
import { GitHubIcon, FacebookIcon } from "@/components/icons/TechIcons";

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
                  href="/courses/terraform-iac"
                  className="text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Terraform IaC
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/monitoring-observability"
                  className="text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Observability & Prometheus
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/gitops-argocd"
                  className="text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Zap className="w-3.5 h-3.5 text-blue-400" /> ArgoCD & GitOps
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
                  All 13 Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Map className="w-3.5 h-3.5 text-blue-400" /> Visual 13-Step Roadmap
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
              Community & Open Source
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  GitHub Repository & Discussions
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Contribute a Lesson / Fix
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  Community Release Notes
                </a>
              </li>
            </ul>
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
              <a
                href="https://www.facebook.com/lu.gyi.416515"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-200/50 hover:bg-slate-200 border border-slate-300 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors"
                aria-label="Zin Oo on Facebook"
              >
                <FacebookIcon className="w-4 h-4 text-blue-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} DevOps Zero to Hero. Built for aspiring cloud & DevOps engineers.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <div className="flex items-center gap-1">
              <span>Designed & Created by</span>
              <a
                href="https://www.facebook.com/lu.gyi.416515"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
              >
                Zin Oo
              </a>
            </div>
            <span className="hidden sm:inline text-muted-foreground/40">•</span>
            <div className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-blue-500 fill-blue-500 mx-0.5" /> for the community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

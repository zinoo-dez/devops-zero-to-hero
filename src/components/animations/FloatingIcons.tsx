"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  DockerIcon,
  KubernetesIcon,
  GitHubIcon,
  GitIcon,
  GitHubActionsIcon,
  LinuxIcon,
} from "@/components/icons/TechIcons";

export function FloatingIcons() {
  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] flex items-center justify-center">
      {/* Central Red Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-amber-600/20 blur-3xl -z-10 animate-pulse-glow" />

      {/* Centerpiece: Hero Tech Badge */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 p-8 rounded-3xl bg-white/[0.04] dark:bg-white/[0.04] border border-white/15 backdrop-blur-2xl shadow-2xl shadow-blue-500/20 flex flex-col items-center justify-center text-center"
      >
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-xl shadow-blue-500/30 mb-4 animate-float">
          <KubernetesIcon className="w-12 h-12" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
          Zero to Hero
        </span>
        <span className="text-lg font-black text-white">DevOps Mastery</span>
        <span className="text-xs text-slate-300 mt-1">Linux • Git • CI/CD • K8s</span>
      </motion.div>

      {/* Floating Card 1: Docker (Top Left) */}
      <motion.div
        animate={{
          y: [0, -14, 0],
          rotate: [0, 4, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 left-4 sm:top-8 sm:left-8 p-3.5 sm:p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xl shadow-lg flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
          <DockerIcon className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground">Docker</div>
          <div className="text-[10px] text-muted-foreground">Containers</div>
        </div>
      </motion.div>

      {/* Floating Card 2: GitHub Actions (Top Right) */}
      <motion.div
        animate={{
          y: [0, 16, 0],
          rotate: [0, -4, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-6 right-4 sm:top-10 sm:right-8 p-3.5 sm:p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xl shadow-lg flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
          <GitHubActionsIcon className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground">GitHub Actions</div>
          <div className="text-[10px] text-muted-foreground">CI/CD Pipeline</div>
        </div>
      </motion.div>

      {/* Floating Card 3: Linux (Bottom Left) */}
      <motion.div
        animate={{
          y: [0, 12, 0],
          rotate: [0, -3, 0],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-8 left-6 sm:bottom-12 sm:left-12 p-3.5 sm:p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xl shadow-lg flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <LinuxIcon className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground">Linux CLI</div>
          <div className="text-[10px] text-muted-foreground">The Foundation</div>
        </div>
      </motion.div>

      {/* Floating Card 4: Git & GitHub (Bottom Right) */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 p-3.5 sm:p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xl shadow-lg flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
          <GitIcon className="w-6 h-6" />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground">Git & GitHub</div>
          <div className="text-[10px] text-muted-foreground">Version Control</div>
        </div>
      </motion.div>
    </div>
  );
}

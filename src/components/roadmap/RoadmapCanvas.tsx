"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Terminal,
  GitBranch,
  Zap,
  Workflow,
  Box,
  Layers,
  Compass,
  Cpu,
  Trophy,
  ArrowRight,
  ChevronRight,
  Clock,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Layers3,
  Network,
  Maximize2,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Info,
} from "lucide-react";
import { getAllCourses } from "@/lib/courses";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldLockIcon } from "@/components/icons/TechIcons";
import {
  ReactFlow,
  Background,
  Controls,
  Node,
  Edge,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

interface Phase {
  id: string;
  phaseNumber: string;
  title: string;
  subtitle: string;
  accentColor: {
    badge: string;
    border: string;
    glow: string;
    bgGradient: string;
    iconBg: string;
    iconColor: string;
  };
  courseSlugs: string[];
}

const PHASES: Phase[] = [
  {
    id: "phase-1",
    phaseNumber: "PHASE 01",
    title: "Core Foundations & Version Control",
    subtitle: "Master the Linux command line environment and team version control workflows.",
    accentColor: {
      badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      border: "border-emerald-500/30",
      glow: "from-emerald-500/20 via-teal-500/10 to-transparent",
      bgGradient: "group-hover:border-emerald-500/40",
      iconBg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30",
      iconColor: "text-emerald-500",
    },
    courseSlugs: ["linux-command-line", "git-github"],
  },
  {
    id: "phase-2",
    phaseNumber: "PHASE 02",
    title: "Containerization & Multi-Container Stacks",
    subtitle: "Package applications into immutable containers and orchestrate local microservices.",
    accentColor: {
      badge: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
      border: "border-sky-500/30",
      glow: "from-sky-500/20 via-cyan-500/10 to-transparent",
      bgGradient: "group-hover:border-sky-500/40",
      iconBg: "bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30",
      iconColor: "text-sky-500",
    },
    courseSlugs: ["docker-fundamentals", "docker-compose"],
  },
  {
    id: "phase-3",
    phaseNumber: "PHASE 03",
    title: "Automation & Continuous Delivery",
    subtitle: "Automate code testing, linting, building, and artifact delivery on every commit.",
    accentColor: {
      badge: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      border: "border-indigo-500/30",
      glow: "from-indigo-500/20 via-blue-500/10 to-transparent",
      bgGradient: "group-hover:border-indigo-500/40",
      iconBg: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30",
      iconColor: "text-indigo-500",
    },
    courseSlugs: ["github-actions", "cicd-concepts"],
  },
  {
    id: "phase-4",
    phaseNumber: "PHASE 04",
    title: "Infrastructure as Code (IaC) & Cloud Provisioning",
    subtitle: "Declare reproducible cloud environments and automate Terraform pipelines.",
    accentColor: {
      badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      border: "border-purple-500/30",
      glow: "from-purple-500/20 via-violet-500/10 to-transparent",
      bgGradient: "group-hover:border-purple-500/40",
      iconBg: "bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30",
      iconColor: "text-purple-500",
    },
    courseSlugs: ["terraform-iac"],
  },
  {
    id: "phase-5",
    phaseNumber: "PHASE 05",
    title: "Kubernetes Cluster Architecture & Orchestration",
    subtitle: "Deploy self-healing containers, pods, services, ingress, and lightweight K3s clusters.",
    accentColor: {
      badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      border: "border-blue-500/30",
      glow: "from-blue-500/20 via-indigo-500/10 to-transparent",
      bgGradient: "group-hover:border-blue-500/40",
      iconBg: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30",
      iconColor: "text-blue-500",
    },
    courseSlugs: ["kubernetes-basics", "k3s"],
  },
  {
    id: "phase-6",
    phaseNumber: "PHASE 06",
    title: "Observability, DevSecOps & Advanced GitOps",
    subtitle: "Full-stack monitoring with Prometheus/Grafana, container security with Trivy, and GitOps with ArgoCD.",
    accentColor: {
      badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      border: "border-amber-500/30",
      glow: "from-amber-500/20 via-rose-500/10 to-transparent",
      bgGradient: "group-hover:border-amber-500/40",
      iconBg: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30",
      iconColor: "text-amber-500",
    },
    courseSlugs: ["monitoring-observability", "devsecops-hardening", "gitops-argocd"],
  },
  {
    id: "phase-7",
    phaseNumber: "PHASE 07",
    title: "Real-World Production Capstone",
    subtitle: "Connect every tool into a complete automated zero-downtime production deployment.",
    accentColor: {
      badge: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
      border: "border-rose-500/30",
      glow: "from-rose-500/20 via-pink-500/10 to-transparent",
      bgGradient: "group-hover:border-rose-500/40",
      iconBg: "bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30",
      iconColor: "text-rose-500",
    },
    courseSlugs: ["cicd-project"],
  },
];

const ICONS_MAP: Record<string, React.ReactNode> = {
  "linux-command-line": <Terminal className="w-5 h-5" />,
  "git-github": <GitBranch className="w-5 h-5" />,
  "docker-fundamentals": <Box className="w-5 h-5" />,
  "docker-compose": <Layers className="w-5 h-5" />,
  "github-actions": <Zap className="w-5 h-5" />,
  "cicd-concepts": <Workflow className="w-5 h-5" />,
  "terraform-iac": <Layers3 className="w-5 h-5" />,
  "kubernetes-basics": <Compass className="w-5 h-5" />,
  "k3s": <Cpu className="w-5 h-5" />,
  "monitoring-observability": <Sparkles className="w-5 h-5" />,
  "devsecops-hardening": <ShieldLockIcon className="w-5 h-5" />,
  "gitops-argocd": <Network className="w-5 h-5" />,
  "cicd-project": <Trophy className="w-5 h-5" />,
};

export function RoadmapCanvas() {
  const [viewMode, setViewMode] = useState<"pathway" | "canvas">("pathway");
  const courses = getAllCourses();

  // Graph Canvas node configurations (safe, no scroll trapping)
  const nodeConfigs = [
    { id: "linux-command-line", position: { x: 40, y: 30 }, number: "01", numberColor: "bg-emerald-500/20 text-emerald-400", levelColor: "text-emerald-400", borderColor: "rgba(16, 185, 129, 0.4)" },
    { id: "git-github", position: { x: 310, y: 30 }, number: "02", numberColor: "bg-orange-500/20 text-orange-400", levelColor: "text-orange-400", borderColor: "rgba(249, 115, 22, 0.4)" },
    { id: "docker-fundamentals", position: { x: 580, y: 30 }, number: "03", numberColor: "bg-sky-500/20 text-sky-400", levelColor: "text-sky-400", borderColor: "rgba(14, 165, 233, 0.4)" },
    { id: "docker-compose", position: { x: 850, y: 30 }, number: "04", numberColor: "bg-teal-500/20 text-teal-400", levelColor: "text-teal-400", borderColor: "rgba(20, 184, 166, 0.4)" },
    { id: "github-actions", position: { x: 850, y: 190 }, number: "05", numberColor: "bg-indigo-500/20 text-indigo-400", levelColor: "text-indigo-400", borderColor: "rgba(99, 102, 241, 0.4)" },
    { id: "cicd-concepts", position: { x: 580, y: 190 }, number: "06", numberColor: "bg-blue-500/20 text-blue-400", levelColor: "text-blue-400", borderColor: "rgba(59, 130, 246, 0.4)" },
    { id: "terraform-iac", position: { x: 310, y: 190 }, number: "07", numberColor: "bg-purple-500/20 text-purple-400", levelColor: "text-purple-400", borderColor: "rgba(168, 85, 247, 0.4)" },
    { id: "kubernetes-basics", position: { x: 40, y: 190 }, number: "08", numberColor: "bg-blue-500/20 text-blue-400", levelColor: "text-blue-400", borderColor: "rgba(59, 130, 246, 0.4)" },
    { id: "k3s", position: { x: 40, y: 350 }, number: "09", numberColor: "bg-amber-500/20 text-amber-400", levelColor: "text-amber-400", borderColor: "rgba(245, 158, 11, 0.4)" },
    { id: "monitoring-observability", position: { x: 310, y: 350 }, number: "10", numberColor: "bg-orange-500/20 text-orange-400", levelColor: "text-orange-400", borderColor: "rgba(249, 115, 22, 0.4)" },
    { id: "devsecops-hardening", position: { x: 580, y: 350 }, number: "11", numberColor: "bg-rose-500/20 text-rose-400", levelColor: "text-rose-400", borderColor: "rgba(244, 63, 94, 0.4)" },
    { id: "gitops-argocd", position: { x: 850, y: 350 }, number: "12", numberColor: "bg-cyan-500/20 text-cyan-400", levelColor: "text-cyan-400", borderColor: "rgba(6, 182, 212, 0.4)" },
    { id: "cicd-project", position: { x: 850, y: 510 }, number: "13", numberColor: "bg-rose-500/20 text-rose-300", levelColor: "text-rose-300", borderColor: "rgba(244, 63, 94, 0.5)" },
  ];

  const nodes: Node[] = nodeConfigs.map((config) => {
    const course = courses.find((c) => c.slug === config.id);
    const title = course ? course.title : "Unknown Course";
    const duration = course ? course.duration : "0 hrs";
    const level = course ? (config.id === "cicd-project" ? "Capstone" : course.level) : "Beginner";

    return {
      id: config.id,
      position: config.position,
      data: {
        label: (
          <Link
            href={`/courses/${config.id}`}
            className="block p-4 text-left group hover:scale-[1.02] transition-transform select-none"
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`w-6 h-6 rounded-lg ${config.numberColor} text-xs font-bold flex items-center justify-center`}>
                {config.number}
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${config.levelColor}`}>
                {level}
              </span>
            </div>
            <div className="font-bold text-sm text-foreground group-hover:text-blue-400 transition-colors line-clamp-1">
              {title}
            </div>
            <div className="text-[11px] text-muted-foreground mt-1 flex items-center justify-between">
              <span>{course?.lessonCount} Lessons • {duration}</span>
              <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ),
      },
      style: {
        background: "rgba(13, 13, 22, 0.92)",
        borderColor: config.borderColor,
        borderWidth: "1.5px",
        borderRadius: "16px",
        width: 230,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
      },
    };
  });

  const edges: Edge[] = [
    { id: "e1-2", source: "linux-command-line", target: "git-github", animated: true, style: { stroke: "#10b981", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e2-3", source: "git-github", target: "docker-fundamentals", animated: true, style: { stroke: "#f97316", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e3-4", source: "docker-fundamentals", target: "docker-compose", animated: true, style: { stroke: "#0ea5e9", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e4-5", source: "docker-compose", target: "github-actions", animated: true, style: { stroke: "#14b8a6", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e5-6", source: "github-actions", target: "cicd-concepts", animated: true, style: { stroke: "#6366f1", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e6-7", source: "cicd-concepts", target: "terraform-iac", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e7-8", source: "terraform-iac", target: "kubernetes-basics", animated: true, style: { stroke: "#a855f7", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e8-9", source: "kubernetes-basics", target: "k3s", animated: true, style: { stroke: "#3b82f6", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e9-10", source: "k3s", target: "monitoring-observability", animated: true, style: { stroke: "#f59e0b", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e10-11", source: "monitoring-observability", target: "devsecops-hardening", animated: true, style: { stroke: "#f97316", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e11-12", source: "devsecops-hardening", target: "gitops-argocd", animated: true, style: { stroke: "#f43f5e", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e12-13", source: "gitops-argocd", target: "cicd-project", animated: true, style: { stroke: "#06b6d4", strokeWidth: 2.5 }, markerEnd: { type: MarkerType.ArrowClosed } },
  ];

  return (
    <div className="space-y-8">
      {/* Top View Selector Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 sm:p-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.03] backdrop-blur-xl">
        <div className="flex items-center gap-2 text-xs text-muted-foreground px-2">
          <Sparkles className="w-4 h-4 text-blue-500" />
          <span className="font-semibold text-foreground">13 Progressive Engineering Milestones</span>
          <span className="hidden sm:inline">• 100% Hands-on Curriculum</span>
        </div>

        {/* View Toggle Tabs */}
        <div className="flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 w-full sm:w-auto">
          <button
            onClick={() => setViewMode("pathway")}
            className={cn(
              "flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all",
              viewMode === "pathway"
                ? "bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-md"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Layers3 className="w-3.5 h-3.5" />
            Milestone Pathway
          </button>
          <button
            onClick={() => setViewMode("canvas")}
            className={cn(
              "flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all",
              viewMode === "canvas"
                ? "bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-md"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Network className="w-3.5 h-3.5" />
            2D Architecture Graph
          </button>
        </div>
      </div>

      {/* VIEW 1: MILESTONE PATHWAY (Mobile & Desktop native smooth scrolling, NO scroll trapping) */}
      {viewMode === "pathway" && (
        <div className="space-y-12">
          {PHASES.map((phase, pIdx) => {
            const phaseCourses = phase.courseSlugs
              .map((slug) => courses.find((c) => c.slug === slug))
              .filter(Boolean);

            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: pIdx * 0.1 }}
                className="relative rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-slate-50/50 dark:bg-white/[0.015] backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden"
              >
                {/* Background ambient glow */}
                <div
                  className={cn(
                    "absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none bg-gradient-to-br",
                    phase.accentColor.glow
                  )}
                />

                {/* Phase Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/[0.08] mb-8">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          "text-xs font-extrabold uppercase px-3 py-1 rounded-full border tracking-wider",
                          phase.accentColor.badge
                        )}
                      >
                        {phase.phaseNumber}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {phaseCourses.length} Learning Modules
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {phase.subtitle}
                    </p>
                  </div>
                </div>

                {/* Phase Course Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {phaseCourses.map((course, cIdx) => {
                    if (!course) return null;
                    const stepNumber = String(course.order + 1).padStart(2, "0");
                    const iconElement = ICONS_MAP[course.slug] || <Terminal className="w-5 h-5" />;

                    return (
                      <div
                        key={course.slug}
                        className="group relative flex flex-col justify-between p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0c0c14] hover:border-blue-500/50 dark:hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                      >
                        {/* Top step badge and icon */}
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div
                                className={cn(
                                  "w-10 h-10 rounded-xl flex items-center justify-center shadow-md",
                                  phase.accentColor.iconBg
                                )}
                              >
                                {iconElement}
                              </div>
                              <div>
                                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block">
                                  Step {stepNumber}
                                </span>
                                <span
                                  className={cn(
                                    "text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md border inline-block mt-0.5",
                                    course.level === "Beginner" &&
                                      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
                                    course.level === "Intermediate" &&
                                      "bg-cyan-500/10 text-amber-600 dark:text-amber-400 border-cyan-500/20",
                                    course.level === "Advanced" &&
                                      "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
                                    course.slug === "cicd-project" &&
                                      "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20"
                                  )}
                                >
                                  {course.slug === "cicd-project" ? "Capstone" : course.level}
                                </span>
                              </div>
                            </div>

                            <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-muted-foreground/70" />
                              {course.duration}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors mb-2 leading-snug">
                            {course.title}
                          </h4>

                          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                            {course.description}
                          </p>

                          {/* Key Skill Chips */}
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {course.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-muted-foreground"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Card Footer Actions */}
                        <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {course.lessonCount} Practical Lessons
                          </span>

                          <Link
                            href={`/courses/${course.slug}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600/10 hover:bg-blue-600 text-blue-600 dark:text-blue-400 hover:text-white transition-all group-hover:bg-blue-600 group-hover:text-white"
                          >
                            Explore
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: 2D ARCHITECTURE GRAPH (With safe scroll controls, NO scroll hijacking) */}
      {viewMode === "canvas" && (
        <div className="space-y-3">
          {/* Helpful Navigation Banner */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-600 dark:text-blue-300">
            <Info className="w-4 h-4 shrink-0" />
            <span>
              <strong>Safe Navigation Mode:</strong> Page scrolling is preserved. Use the on-canvas zoom buttons (+ / -) or drag inside the box to pan across the architecture nodes.
            </span>
          </div>

          <div className="h-[520px] sm:h-[580px] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 shadow-2xl relative">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              fitView
              preventScrolling={false}
              zoomOnScroll={false}
              panOnScroll={false}
              panOnDrag={true}
              attributionPosition="bottom-left"
              proOptions={{ hideAttribution: true }}
            >
              <Background color="#38bdf8" gap={28} size={1} className="opacity-20" />
              <Controls showInteractive={false} />
            </ReactFlow>
          </div>
        </div>
      )}
    </div>
  );
}

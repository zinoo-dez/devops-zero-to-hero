"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ReactFlow,
  Background,
  Controls,
  Node,
  Edge,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { getAllCourses } from "@/lib/courses";
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
  Sparkles,
} from "lucide-react";

export function RoadmapCanvas() {
  const router = useRouter();
  const courses = getAllCourses();

  // Custom styled roadmap nodes in a serpentine workflow (White-Dark-Blue 60-20 system)
  const nodeConfigs = [
    { id: "linux-command-line", position: { x: 50, y: 50 }, number: "01", numberColor: "bg-blue-500/20 text-blue-400", levelColor: "text-emerald-400", style: { background: "rgba(239, 68, 68, 0.06)", borderColor: "#ef4444", borderRadius: "16px", width: 220 } },
    { id: "git-github", position: { x: 340, y: 50 }, number: "02", numberColor: "bg-orange-500/20 text-orange-400", levelColor: "text-orange-400", style: { background: "rgba(249, 115, 22, 0.06)", borderColor: "#f97316", borderRadius: "16px", width: 220 } },
    { id: "github-actions", position: { x: 630, y: 50 }, number: "03", numberColor: "bg-blue-500/20 text-blue-400", levelColor: "text-indigo-400", style: { background: "rgba(244, 63, 94, 0.06)", borderColor: "#f43f5e", borderRadius: "16px", width: 220 } },
    { id: "cicd-concepts", position: { x: 630, y: 220 }, number: "04", numberColor: "bg-blue-500/20 text-blue-400", levelColor: "text-blue-400", style: { background: "rgba(59, 130, 246, 0.06)", borderColor: "#3b82f6", borderRadius: "16px", width: 220 } },
    { id: "docker-fundamentals", position: { x: 340, y: 220 }, number: "05", numberColor: "bg-sky-500/20 text-sky-400", levelColor: "text-sky-400", style: { background: "rgba(14, 165, 233, 0.06)", borderColor: "#0ea5e9", borderRadius: "16px", width: 220 } },
    { id: "docker-compose", position: { x: 50, y: 220 }, number: "06", numberColor: "bg-teal-500/20 text-teal-400", levelColor: "text-teal-400", style: { background: "rgba(20, 184, 166, 0.06)", borderColor: "#14b8a6", borderRadius: "16px", width: 220 } },
    { id: "kubernetes-basics", position: { x: 50, y: 390 }, number: "07", numberColor: "bg-blue-500/20 text-blue-400", levelColor: "text-blue-400", style: { background: "rgba(239, 68, 68, 0.06)", borderColor: "#ef4444", borderRadius: "16px", width: 220 } },
    { id: "k3s", position: { x: 340, y: 390 }, number: "08", numberColor: "bg-cyan-500/20 text-amber-400", levelColor: "text-amber-400", style: { background: "rgba(245, 158, 11, 0.06)", borderColor: "#f59e0b", borderRadius: "16px", width: 220 } },
    { id: "cicd-project", position: { x: 630, y: 390 }, number: "09", numberColor: "bg-blue-600/20 text-blue-300", levelColor: "text-indigo-300", style: { background: "rgba(225, 29, 72, 0.12)", borderColor: "#e11d48", borderRadius: "16px", width: 220 } },
  ];

  const nodes: Node[] = nodeConfigs.map((config) => {
    const course = courses.find((c) => c.slug === config.id);
    const title = course ? course.title : "Unknown Course";
    const lessonCount = course ? course.lessonCount : 0;
    const duration = course ? course.duration : "0 hrs";
    const level = course ? course.level : "Beginner";
    let displayLevel: string = level;

    if (config.id === "cicd-project") displayLevel = "Capstone";
    if (config.id === "github-actions") displayLevel = "Beginner+";

    return {
      id: config.id,
      position: config.position,
      data: {
        label: (
          <Link
            href={`/courses/${config.id}`}
            className="block p-4 text-left group hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`w-6 h-6 rounded-lg ${config.numberColor} text-xs font-bold flex items-center justify-center`}>
                {config.number}
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-wider ${config.levelColor}`}>
                {displayLevel}
              </span>
            </div>
            <div className="font-bold text-sm text-foreground group-hover:text-blue-400 transition-colors">
              {title}
            </div>
            <div className="text-[11px] text-muted-foreground mt-1">
              {lessonCount} Lessons • {duration}
            </div>
          </Link>
        ),
      },
      style: config.style,
    };
  });

  const edges: Edge[] = [
    { id: "e1-2", source: "linux-command-line", target: "git-github", animated: true, style: { stroke: "#ef4444", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e2-3", source: "git-github", target: "github-actions", animated: true, style: { stroke: "#ef4444", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e3-4", source: "github-actions", target: "cicd-concepts", animated: true, style: { stroke: "#ef4444", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e4-5", source: "cicd-concepts", target: "docker-fundamentals", animated: true, style: { stroke: "#ef4444", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e5-6", source: "docker-fundamentals", target: "docker-compose", animated: true, style: { stroke: "#ef4444", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e6-7", source: "docker-compose", target: "kubernetes-basics", animated: true, style: { stroke: "#ef4444", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e7-8", source: "kubernetes-basics", target: "k3s", animated: true, style: { stroke: "#ef4444", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed } },
    { id: "e8-9", source: "k3s", target: "cicd-project", animated: true, style: { stroke: "#dc2626", strokeWidth: 2.5 }, markerEnd: { type: MarkerType.ArrowClosed } },
  ];

  return (
    <div className="h-155 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#09090d] shadow-2xl relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#ef4444" gap={24} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

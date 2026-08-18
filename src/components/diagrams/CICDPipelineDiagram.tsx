"use client";

import React, { useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  Node,
  Edge,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Play, RotateCcw, CheckCircle2, Loader2, GitCommit, Box, Cpu, Rocket } from "lucide-react";

interface PipelineStep {
  id: string;
  name: string;
  type: string;
  status: "idle" | "running" | "success";
}

export function CICDPipelineDiagram() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps: PipelineStep[] = [
    { id: "1", name: "1. Git Push", type: "Developer commits code to GitHub", status: currentStep >= 1 ? "success" : currentStep === 0 && isRunning ? "running" : "idle" },
    { id: "2", name: "2. GitHub Actions Trigger", type: "Workflow triggered on push/PR", status: currentStep >= 2 ? "success" : currentStep === 1 && isRunning ? "running" : "idle" },
    { id: "3", name: "3. Lint & Automated Tests", type: "npm test & security checks", status: currentStep >= 3 ? "success" : currentStep === 2 && isRunning ? "running" : "idle" },
    { id: "4", name: "4. Docker Build & Optimize", type: "Multi-stage production build", status: currentStep >= 4 ? "success" : currentStep === 3 && isRunning ? "running" : "idle" },
    { id: "5", name: "5. Push to Registry (GHCR)", type: "Tag & push to ghcr.io", status: currentStep >= 5 ? "success" : currentStep === 4 && isRunning ? "running" : "idle" },
    { id: "6", name: "6. Zero-Downtime K3s Deploy", type: "Rolling update on Kubernetes", status: currentStep >= 6 ? "success" : currentStep === 5 && isRunning ? "running" : "idle" },
  ];

  const handleRunPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCurrentStep(step);
      if (step >= 6) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 800);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStep(0);
  };

  const nodes: Node[] = [
    {
      id: "1",
      position: { x: 50, y: 80 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <GitCommit className="w-3.5 h-3.5 text-blue-400" />
              1. Git Push
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              git push origin main
            </div>
          </div>
        ),
      },
      style: {
        background: currentStep >= 1 ? "rgba(239, 68, 68, 0.15)" : "rgba(255, 255, 255, 0.04)",
        borderColor: currentStep >= 1 ? "#ef4444" : "rgba(255, 255, 255, 0.12)",
        borderRadius: "14px",
        width: 170,
      },
    },
    {
      id: "2",
      position: { x: 270, y: 80 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              2. GHA Runner
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              Trigger .github/workflows
            </div>
          </div>
        ),
      },
      style: {
        background: currentStep >= 2 ? "rgba(239, 68, 68, 0.15)" : "rgba(255, 255, 255, 0.04)",
        borderColor: currentStep >= 2 ? "#ef4444" : "rgba(255, 255, 255, 0.12)",
        borderRadius: "14px",
        width: 170,
      },
    },
    {
      id: "3",
      position: { x: 490, y: 80 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              3. Test & Lint
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              npm run test & lint
            </div>
          </div>
        ),
      },
      style: {
        background: currentStep >= 3 ? "rgba(34, 197, 94, 0.15)" : "rgba(255, 255, 255, 0.04)",
        borderColor: currentStep >= 3 ? "#22c55e" : "rgba(255, 255, 255, 0.12)",
        borderRadius: "14px",
        width: 170,
      },
    },
    {
      id: "4",
      position: { x: 50, y: 220 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <Box className="w-3.5 h-3.5 text-sky-400" />
              4. Docker Build
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              docker build -t app:v1
            </div>
          </div>
        ),
      },
      style: {
        background: currentStep >= 4 ? "rgba(239, 68, 68, 0.15)" : "rgba(255, 255, 255, 0.04)",
        borderColor: currentStep >= 4 ? "#ef4444" : "rgba(255, 255, 255, 0.12)",
        borderRadius: "14px",
        width: 170,
      },
    },
    {
      id: "5",
      position: { x: 270, y: 220 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <Box className="w-3.5 h-3.5 text-indigo-400" />
              5. Push to GHCR
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              ghcr.io/org/app:v1
            </div>
          </div>
        ),
      },
      style: {
        background: currentStep >= 5 ? "rgba(239, 68, 68, 0.15)" : "rgba(255, 255, 255, 0.04)",
        borderColor: currentStep >= 5 ? "#ef4444" : "rgba(255, 255, 255, 0.12)",
        borderRadius: "14px",
        width: 170,
      },
    },
    {
      id: "6",
      position: { x: 490, y: 220 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <Rocket className="w-3.5 h-3.5 text-amber-400" />
              6. Deploy to K3s
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              kubectl rollout restart
            </div>
          </div>
        ),
      },
      style: {
        background: currentStep >= 6 ? "rgba(34, 197, 94, 0.15)" : "rgba(255, 255, 255, 0.04)",
        borderColor: currentStep >= 6 ? "#22c55e" : "rgba(255, 255, 255, 0.12)",
        borderRadius: "14px",
        width: 170,
      },
    },
  ];

  const edges: Edge[] = [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      animated: currentStep === 1,
      style: { stroke: currentStep >= 1 ? "#ef4444" : "rgba(255,255,255,0.2)", strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      animated: currentStep === 2,
      style: { stroke: currentStep >= 2 ? "#ef4444" : "rgba(255,255,255,0.2)", strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      animated: currentStep === 3,
      style: { stroke: currentStep >= 3 ? "#ef4444" : "rgba(255,255,255,0.2)", strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: "e4-5",
      source: "4",
      target: "5",
      animated: currentStep === 4,
      style: { stroke: currentStep >= 4 ? "#ef4444" : "rgba(255,255,255,0.2)", strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: "e5-6",
      source: "5",
      target: "6",
      animated: currentStep === 5,
      style: { stroke: currentStep >= 5 ? "#22c55e" : "rgba(255,255,255,0.2)", strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
  ];

  return (
    <div className="my-8 rounded-2xl border border-white/[0.1] bg-[#09090d] p-5 shadow-2xl backdrop-blur-xl">
      {/* Diagram Header with Controls */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
        <div>
          <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
            Interactive Architecture Flow
          </span>
          <h4 className="text-base font-bold text-foreground">
            End-to-End CI/CD Pipeline Lifecycle
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRunPipeline}
            disabled={isRunning}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-50"
          >
            {isRunning ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Running Step {currentStep}/6...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Simulate Pipeline</span>
              </>
            )}
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground border border-white/10 transition-colors cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* React Flow Canvas */}
      <div className="h-[340px] w-full rounded-xl overflow-hidden bg-black/40 border border-white/5">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          attributionPosition="bottom-left"
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#ef4444" gap={16} size={1} />
          <Controls />
        </ReactFlow>
      </div>

      {/* Pipeline Status Feed */}
      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Current State:{" "}
          <strong className="text-foreground font-semibold">
            {currentStep === 0 && !isRunning && "Idle (Ready to simulate)"}
            {isRunning && `Executing step ${currentStep} of 6`}
            {currentStep >= 6 && "✅ Pipeline succeeded! Deployed to K3s cluster"}
          </strong>
        </span>
        <span className="text-[11px]">Powered by React Flow</span>
      </div>
    </div>
  );
}

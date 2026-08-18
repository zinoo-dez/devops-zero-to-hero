"use client";

import React from "react";
import {
  ReactFlow,
  Background,
  Controls,
  Node,
  Edge,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { FileCode, Layers, Box, Globe, HardDrive } from "lucide-react";

export function DockerArchitectureDiagram() {
  const nodes: Node[] = [
    {
      id: "dockerfile",
      position: { x: 40, y: 100 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <FileCode className="w-4 h-4 text-blue-400" />
              1. Dockerfile
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              Instructions: FROM, COPY, RUN, CMD
            </div>
          </div>
        ),
      },
      style: {
        background: "rgba(239, 68, 68, 0.08)",
        borderColor: "#ef4444",
        borderRadius: "14px",
        width: 180,
      },
    },
    {
      id: "image",
      position: { x: 280, y: 100 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <Layers className="w-4 h-4 text-indigo-400" />
              2. Docker Image
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              Immutable stacked read-only layers
            </div>
          </div>
        ),
      },
      style: {
        background: "rgba(244, 63, 94, 0.08)",
        borderColor: "#f43f5e",
        borderRadius: "14px",
        width: 180,
      },
    },
    {
      id: "container",
      position: { x: 520, y: 100 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <Box className="w-4 h-4 text-emerald-400" />
              3. Running Container
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              Live isolated process with read-write layer
            </div>
          </div>
        ),
      },
      style: {
        background: "rgba(34, 197, 94, 0.08)",
        borderColor: "#22c55e",
        borderRadius: "14px",
        width: 180,
      },
    },
    {
      id: "registry",
      position: { x: 280, y: 240 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <Globe className="w-4 h-4 text-blue-400" />
              Docker Hub / GHCR
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              Remote image distribution registry
            </div>
          </div>
        ),
      },
      style: {
        background: "rgba(239, 68, 68, 0.08)",
        borderColor: "#ef4444",
        borderRadius: "14px",
        width: 180,
      },
    },
    {
      id: "volume",
      position: { x: 520, y: 240 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <HardDrive className="w-4 h-4 text-amber-400" />
              Volume / Storage
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">
              Persistent data stored outside container
            </div>
          </div>
        ),
      },
      style: {
        background: "rgba(245, 158, 11, 0.08)",
        borderColor: "#f59e0b",
        borderRadius: "14px",
        width: 180,
      },
    },
  ];

  const edges: Edge[] = [
    {
      id: "e-df-img",
      source: "dockerfile",
      target: "image",
      label: "docker build",
      animated: true,
      style: { stroke: "#ef4444", strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: "e-img-cnt",
      source: "image",
      target: "container",
      label: "docker run",
      animated: true,
      style: { stroke: "#f43f5e", strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: "e-img-reg",
      source: "image",
      target: "registry",
      label: "docker push / pull",
      style: { stroke: "#ef4444", strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: "e-cnt-vol",
      source: "container",
      target: "volume",
      label: "-v mount",
      style: { stroke: "#f59e0b", strokeWidth: 2, strokeDasharray: "4" },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
  ];

  return (
    <div className="my-8 rounded-2xl border border-white/[0.1] bg-[#09090d] p-5 shadow-2xl backdrop-blur-xl">
      <div className="pb-4 border-b border-white/[0.08] mb-4">
        <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
          Visual Architecture
        </span>
        <h4 className="text-base font-bold text-foreground">
          Docker Lifecycle: Dockerfile → Image → Container
        </h4>
      </div>

      <div className="h-[360px] w-full rounded-xl overflow-hidden bg-black/40 border border-white/5">
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
    </div>
  );
}

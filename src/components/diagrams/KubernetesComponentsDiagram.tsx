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
import { Server, Compass, Shield, Activity, Layers, Box, Globe } from "lucide-react";

export function KubernetesComponentsDiagram() {
  const nodes: Node[] = [
    {
      id: "ingress",
      position: { x: 300, y: 30 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <Globe className="w-4 h-4 text-emerald-400" />
              Ingress Controller
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5">
              Routes HTTP/HTTPS external traffic
            </div>
          </div>
        ),
      },
      style: {
        background: "rgba(34, 197, 94, 0.12)",
        borderColor: "#22c55e",
        borderRadius: "14px",
        width: 190,
      },
    },
    {
      id: "service",
      position: { x: 300, y: 150 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <Activity className="w-4 h-4 text-blue-400" />
              Service (ClusterIP)
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5">
              Stable internal IP + Load Balancer
            </div>
          </div>
        ),
      },
      style: {
        background: "rgba(239, 68, 68, 0.12)",
        borderColor: "#ef4444",
        borderRadius: "14px",
        width: 190,
      },
    },
    {
      id: "deployment",
      position: { x: 300, y: 270 },
      data: {
        label: (
          <div className="p-3 text-left">
            <div className="flex items-center gap-2 font-bold text-xs text-foreground">
              <Layers className="w-4 h-4 text-indigo-400" />
              Deployment
            </div>
            <div className="text-[10px] text-muted-foreground mt-0.5">
              Manages ReplicaSets & rolling updates
            </div>
          </div>
        ),
      },
      style: {
        background: "rgba(244, 63, 94, 0.12)",
        borderColor: "#f43f5e",
        borderRadius: "14px",
        width: 190,
      },
    },
    {
      id: "pod1",
      position: { x: 120, y: 390 },
      data: {
        label: (
          <div className="p-2.5 text-left">
            <div className="flex items-center gap-1.5 font-bold text-xs text-foreground">
              <Box className="w-3.5 h-3.5 text-blue-400" />
              Pod Replica #1
            </div>
            <div className="text-[9px] text-muted-foreground mt-0.5">
              Container + IP
            </div>
          </div>
        ),
      },
      style: {
        background: "rgba(239, 68, 68, 0.08)",
        borderColor: "#ef4444",
        borderRadius: "12px",
        width: 150,
      },
    },
    {
      id: "pod2",
      position: { x: 320, y: 390 },
      data: {
        label: (
          <div className="p-2.5 text-left">
            <div className="flex items-center gap-1.5 font-bold text-xs text-foreground">
              <Box className="w-3.5 h-3.5 text-blue-400" />
              Pod Replica #2
            </div>
            <div className="text-[9px] text-muted-foreground mt-0.5">
              Container + IP
            </div>
          </div>
        ),
      },
      style: {
        background: "rgba(239, 68, 68, 0.08)",
        borderColor: "#ef4444",
        borderRadius: "12px",
        width: 150,
      },
    },
    {
      id: "pod3",
      position: { x: 520, y: 390 },
      data: {
        label: (
          <div className="p-2.5 text-left">
            <div className="flex items-center gap-1.5 font-bold text-xs text-foreground">
              <Box className="w-3.5 h-3.5 text-blue-400" />
              Pod Replica #3
            </div>
            <div className="text-[9px] text-muted-foreground mt-0.5">
              Container + IP
            </div>
          </div>
        ),
      },
      style: {
        background: "rgba(239, 68, 68, 0.08)",
        borderColor: "#ef4444",
        borderRadius: "12px",
        width: 150,
      },
    },
  ];

  const edges: Edge[] = [
    {
      id: "e-ing-svc",
      source: "ingress",
      target: "service",
      animated: true,
      style: { stroke: "#22c55e", strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: "e-svc-dep",
      source: "service",
      target: "deployment",
      style: { stroke: "#ef4444", strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: "e-dep-p1",
      source: "deployment",
      target: "pod1",
      style: { stroke: "#f43f5e", strokeWidth: 1.5 },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: "e-dep-p2",
      source: "deployment",
      target: "pod2",
      style: { stroke: "#f43f5e", strokeWidth: 1.5 },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
    {
      id: "e-dep-p3",
      source: "deployment",
      target: "pod3",
      style: { stroke: "#f43f5e", strokeWidth: 1.5 },
      markerEnd: { type: MarkerType.ArrowClosed },
    },
  ];

  return (
    <div className="my-8 rounded-2xl border border-white/[0.1] bg-[#09090d] p-5 shadow-2xl backdrop-blur-xl">
      <div className="pb-4 border-b border-white/[0.08] mb-4">
        <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
          Kubernetes Workload Topology
        </span>
        <h4 className="text-base font-bold text-foreground">
          Ingress → Service → Deployment → Pod Replicas
        </h4>
      </div>

      <div className="h-[420px] w-full rounded-xl overflow-hidden bg-black/40 border border-white/5">
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

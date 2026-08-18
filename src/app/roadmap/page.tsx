import React from "react";
import type { Metadata } from "next";
import { RoadmapCanvas } from "@/components/roadmap/RoadmapCanvas";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Map, Compass, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interactive DevOps Roadmap | DevOps Zero to Hero",
  description:
    "Explore the visual 13-step interactive roadmap from Linux Command Line to Terraform, Prometheus, DevSecOps, and ArgoCD GitOps.",
  openGraph: {
    title: "Interactive DevOps Roadmap | DevOps Zero to Hero",
    description:
      "Explore the visual 13-step interactive roadmap from Linux Command Line to Terraform, Prometheus, DevSecOps, and ArgoCD GitOps.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 675,
        alt: "Interactive DevOps Roadmap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive DevOps Roadmap | DevOps Zero to Hero",
    description:
      "Explore the visual 13-step interactive roadmap from Linux Command Line to Terraform, Prometheus, DevSecOps, and ArgoCD GitOps.",
    images: ["/og-image.png"],
  },
};

export default function RoadmapPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Learning Architecture"
          title="Interactive DevOps"
          highlight="Mastery Track"
          subtitle="A structured 13-step progression from your first Linux command to Terraform IaC, Observability, and GitOps delivery. Follow each milestone or switch to the 2D graph view."
        />

        <RoadmapCanvas />

        {/* Roadmap Guide Cards below canvas */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] backdrop-blur-xl">
            <span className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400 font-bold flex items-center justify-center text-xs mb-3">
              01
            </span>
            <h4 className="text-sm font-bold text-foreground mb-1.5">
              Foundations & Containers
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Linux CLI, Git, GitHub, Docker & Compose. Build confidence with terminal workflows and local multi-service stacks.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] backdrop-blur-xl">
            <span className="w-7 h-7 rounded-xl bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400 font-bold flex items-center justify-center text-xs mb-3">
              02
            </span>
            <h4 className="text-sm font-bold text-foreground mb-1.5">
              CI/CD & Cloud IaC
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              GitHub Actions, CI/CD Pipeline Concepts & Terraform. Automate test pipelines and declare cloud infrastructure as code.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] backdrop-blur-xl">
            <span className="w-7 h-7 rounded-xl bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-400 font-bold flex items-center justify-center text-xs mb-3">
              03
            </span>
            <h4 className="text-sm font-bold text-foreground mb-1.5">
              Kubernetes & Observability
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              K8s, K3s, Prometheus & Grafana. Deploy self-healing container clusters and build real-time monitoring dashboards.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] backdrop-blur-xl">
            <span className="w-7 h-7 rounded-xl bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400 font-bold flex items-center justify-center text-xs mb-3">
              04
            </span>
            <h4 className="text-sm font-bold text-foreground mb-1.5">
              DevSecOps & GitOps
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Trivy vulnerability scanning, ArgoCD GitOps, Canary progressive rollouts, and the full end-to-end Capstone project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

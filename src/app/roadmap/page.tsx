import React from "react";
import type { Metadata } from "next";
import { RoadmapCanvas } from "@/components/roadmap/RoadmapCanvas";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Map, Compass, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interactive DevOps Roadmap | DevOps Zero to Hero",
  description:
    "Explore the visual 9-step interactive roadmap from Linux Command Line to production Kubernetes CI/CD pipelines.",
  openGraph: {
    title: "Interactive DevOps Roadmap | DevOps Zero to Hero",
    description:
      "Explore the visual 9-step interactive roadmap from Linux Command Line to production Kubernetes CI/CD pipelines.",
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
      "Explore the visual 9-step interactive roadmap from Linux Command Line to production Kubernetes CI/CD pipelines.",
    images: ["/og-image.png"],
  },
};

export default function RoadmapPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Visual Architecture"
          title="Interactive DevOps"
          highlight="Learning Track"
          subtitle="Click on any node to jump directly into the curriculum. Pan, zoom, and explore how modern DevOps concepts connect seamlessly."
        />

        <RoadmapCanvas />

        {/* Roadmap Guide Cards below canvas */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] backdrop-blur-xl">
            <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400 font-bold flex items-center justify-center text-xs mb-4">
              01
            </span>
            <h4 className="text-base font-bold text-foreground mb-2">
              Phase 1: Fundamentals
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Linux CLI and Git & GitHub. Build absolute confidence with the shell and version control workflows.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] backdrop-blur-xl">
            <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400 font-bold flex items-center justify-center text-xs mb-4">
              02
            </span>
            <h4 className="text-base font-bold text-foreground mb-2">
              Phase 2: Automation & Containers
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              GitHub Actions CI/CD and Docker. Package applications into immutable containers and automate tests on push.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] backdrop-blur-xl">
            <span className="w-8 h-8 rounded-xl bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-500/10 dark:border-violet-500/20 dark:text-violet-400 font-bold flex items-center justify-center text-xs mb-4">
              03
            </span>
            <h4 className="text-base font-bold text-foreground mb-2">
              Phase 3: Kubernetes & Capstone
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              K8s, K3s, and Real-World Production CI/CD Capstone. Deploy automated self-healing cloud clusters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import {
  Compass,
  Cpu,
  Layers,
  Terminal,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Terminal,
      title: "From Absolute Zero to Fluency",
      description:
        "Every concept is taught in plain English with relatable analogies (like video game checkpoints and factory lines). No gatekeeping.",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Layers,
      title: "Interactive Flow Diagrams",
      description:
        "Understand Docker architectures, Kubernetes component relationships, and GitHub Actions pipelines visually with React Flow & Mermaid.",
      gradient: "from-indigo-500 to-violet-600",
    },
    {
      icon: Cpu,
      title: "Real Terminal Commands with Context",
      description:
        "Don't just memorize commands. Learn when, why, and how to use every command when debugging real staging and production servers.",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: ShieldCheck,
      title: "Common Mistakes & Pitfalls Included",
      description:
        "Every lesson has dedicated 'Common Pitfalls' callouts so you don't spend hours debugging cryptic error messages or permission denied traps.",
      gradient: "from-cyan-500 to-orange-600",
    },
    {
      icon: Compass,
      title: "End-to-End Capstone Deployment",
      description:
        "Complete a real GitOps deployment pipeline: Git Push → GitHub Actions → Docker Build → GHCR → K3s Kubernetes cluster rollout.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Sparkles,
      title: "100% Free & Open For Everyone",
      description:
        "No paywalls, pay-per-module tricks, or subscription models. Complete high-quality DevOps education accessible to all developers.",
      gradient: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why DevOps Zero to Hero"
          title="Engineered specifically for"
          highlight="Beginner Confidence"
          subtitle="Stop drowning in confusing cloud documentation. Learn by building mental models that actually stick."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <FeatureCard
              key={idx}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              iconGradient={benefit.gradient}
              delay={idx * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

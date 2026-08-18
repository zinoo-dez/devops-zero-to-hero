"use client";

import React from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Users,
  MessageSquare,
  GitPullRequest,
  Star,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Heart,
  Quote,
} from "lucide-react";
import { GitHubIcon } from "@/components/icons/TechIcons";
import { motion } from "framer-motion";

export function CommunitySection() {
  const testimonials = [
    {
      name: "Alex M.",
      role: "Junior Cloud Engineer",
      company: "Transitioned from Helpdesk",
      text: "The step-by-step transition from raw bash commands to writing Dockerfiles and ArgoCD GitOps pipelines made DevOps click for the first time without drowning in cloud buzzwords.",
      avatar: "👨‍💻",
    },
    {
      name: "Priya S.",
      role: "Fullstack Developer",
      company: "FinTech Startup",
      text: "Having interactive flowcharts side-by-side with copyable YAML and real troubleshooting callouts saved our team hours configuring K3s and Prometheus metrics.",
      avatar: "👩‍💻",
    },
    {
      name: "Marcus K.",
      role: "SysAdmin to DevOps Lead",
      company: "Enterprise IT",
      text: "100% free with production-grade depth. The Terraform module structure and Capstone CI/CD project are genuinely what modern SRE teams run in production.",
      avatar: "🚀",
    },
  ];

  const communityFeatures = [
    {
      icon: GitPullRequest,
      title: "Open Source & Community Driven",
      desc: "Every lesson is open source. Submit PRs, propose architectural diagrams, or fix typos directly on GitHub.",
      action: "Contribute on GitHub",
      href: "https://github.com/zinoo-dez/devops-zero-to-hero",
    },
    {
      icon: MessageSquare,
      title: "Discussion & Troubleshooting",
      desc: "Stuck on a tricky permission error or K8s ingress issue? Join discussions and get help from fellow engineers.",
      action: "Join Discussions",
      href: "https://github.com/zinoo-dez/devops-zero-to-hero/discussions",
    },
    {
      icon: ShieldCheck,
      title: "Continuously Maintained",
      desc: "Updated with current CLI versions (Docker 26+, K8s 1.30+, Terraform 1.9+, ArgoCD 2.11+) and best practices.",
      action: "View Changelog",
      href: "/courses",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-slate-100/50 dark:bg-white/[0.01] border-t border-slate-200 dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Community & Social Proof"
          title="Engineered by Engineers,"
          highlight="Trusted by Learners"
          subtitle="Join thousands of developers, sysadmins, and students leveling up their cloud engineering skills with open curricula."
        />

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] backdrop-blur-xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-blue-500/20 mb-3" />
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-lg">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityFeatures.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {f.desc}
                  </p>
                </div>

                <a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
                >
                  <span>{f.action}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

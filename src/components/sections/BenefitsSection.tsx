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
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function BenefitsSection() {
  const { t } = useLanguage();
  const benefits = [
    {
      icon: Terminal,
      title: t.benefits.items[0].title,
      description: t.benefits.items[0].description,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Layers,
      title: t.benefits.items[1].title,
      description: t.benefits.items[1].description,
      gradient: "from-indigo-500 to-violet-600",
    },
    {
      icon: Cpu,
      title: t.benefits.items[2].title,
      description: t.benefits.items[2].description,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: ShieldCheck,
      title: t.benefits.items[3].title,
      description: t.benefits.items[3].description,
      gradient: "from-cyan-500 to-orange-600",
    },
    {
      icon: Compass,
      title: t.benefits.items[4].title,
      description: t.benefits.items[4].description,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Sparkles,
      title: t.benefits.items[5].title,
      description: t.benefits.items[5].description,
      gradient: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.benefits.badge}
          title={t.benefits.titlePart1}
          highlight={t.benefits.titlePart2}
          subtitle={t.benefits.subtitle}
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

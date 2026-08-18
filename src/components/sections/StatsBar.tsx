import React from "react";
import { StatCard } from "@/components/ui/StatCard";

export function StatsBar() {
  const stats = [
    { number: "13", label: "Mastery Courses", sublabel: "Linux to GitOps & IaC" },
    { number: "110+", label: "Hands-on Lessons", sublabel: "Zero fluff, high impact" },
    { number: "100%", label: "Free & Open Source", sublabel: "No paywalls or subscriptions" },
    { number: "1", label: "Production Capstone", sublabel: "Real-world end-to-end pipeline" },
  ];

  return (
    <section className="border-y border-white/[0.08] bg-white/[0.01] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              number={stat.number}
              label={stat.label}
              sublabel={stat.sublabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

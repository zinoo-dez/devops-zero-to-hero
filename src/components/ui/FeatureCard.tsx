"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconGradient?: string;
  className?: string;
  delay?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconGradient = "from-blue-600 to-indigo-600",
  className,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] dark:bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300",
        "hover:border-blue-500/40 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-blue-500/10",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300",
          iconGradient
        )}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

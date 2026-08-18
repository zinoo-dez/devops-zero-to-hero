"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { GradientText } from "./GradientText";

interface StatCardProps {
  number: string;
  label: string;
  sublabel?: string;
  className?: string;
}

export function StatCard({ number, label, sublabel, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm",
        className
      )}
    >
      <div className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2">
        <GradientText gradient="from-white via-blue-200 to-blue-500">
          {number}
        </GradientText>
      </div>
      <div className="text-sm sm:text-base font-semibold text-foreground tracking-wide">
        {label}
      </div>
      {sublabel && (
        <div className="text-xs text-muted-foreground mt-0.5">
          {sublabel}
        </div>
      )}
    </motion.div>
  );
}

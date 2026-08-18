"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  hoverEffect = false,
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "relative rounded-2xl backdrop-blur-xl p-6 transition-all duration-300 shadow-sm border border-slate-200 bg-white/80",
        "dark:bg-white/[0.02] dark:border-white/[0.08] dark:shadow-xl",
        hoverEffect &&
          "hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:border-blue-500/40",
        glow && "shadow-lg shadow-blue-500/10 border-blue-500/30",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

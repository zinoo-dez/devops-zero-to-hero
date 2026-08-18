import React from "react";
import { cn } from "@/lib/utils";

interface LevelBadgeProps {
  level: "Beginner" | "Intermediate" | "Advanced";
  className?: string;
}

export function LevelBadge({ level, className }: LevelBadgeProps) {
  const styles = {
    Beginner:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30",
    Intermediate:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30",
    Advanced:
      "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border tracking-wide uppercase",
        styles[level],
        className
      )}
    >
      {level}
    </span>
  );
}

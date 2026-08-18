import React from "react";
import { cn } from "@/lib/utils";

interface StepsProps {
  children: React.ReactNode;
  className?: string;
}

export function Steps({ children, className }: StepsProps) {
  return (
    <div
      className={cn(
        "my-8 space-y-6 border-l-2 border-blue-500/30 pl-6 ml-3",
        className
      )}
    >
      {children}
    </div>
  );
}

interface StepProps {
  title: string;
  number?: number;
  children: React.ReactNode;
  className?: string;
}

export function Step({ title, number, children, className }: StepProps) {
  return (
    <div className={cn("relative space-y-2 group", className)}>
      {/* Circle Marker (Red/Rose Gradient) */}
      <div className="absolute -left-[35px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white text-[11px] font-bold shadow-md shadow-blue-500/30">
        {number || "•"}
      </div>

      <h4 className="text-base font-bold text-foreground group-hover:text-blue-400 transition-colors">
        {title}
      </h4>

      <div className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
}

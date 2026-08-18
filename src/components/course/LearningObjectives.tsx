import React from "react";
import { CheckCircle2 } from "lucide-react";

interface LearningObjectivesProps {
  objectives: string[];
}

export function LearningObjectives({ objectives }: LearningObjectivesProps) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl">
      <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-indigo-400" />
        What You Will Master in this Course
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {objectives.map((obj, idx) => (
          <div key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
              ✓
            </span>
            <span className="leading-relaxed">{obj}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { SearchX } from "lucide-react";

interface EmptyStateProps {
  onClear: () => void;
}

export function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl">
      <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
        <SearchX className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">No courses match your query</h3>
      <p className="text-sm text-muted-foreground max-w-md mb-6">
        Try searching for terms like &quot;Linux&quot;, &quot;Docker&quot;, &quot;Kubernetes&quot;, or &quot;Git&quot;, or reset your filter.
      </p>
      <button
        onClick={onClear}
        className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/15 text-foreground border border-white/15 transition-all cursor-pointer"
      >
        Clear Filters
      </button>
    </div>
  );
}

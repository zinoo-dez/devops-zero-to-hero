import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function CourseSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 shadow-xl",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <Skeleton className="w-12 h-12 rounded-xl" />
          <div className="flex gap-2">
            <Skeleton className="w-16 h-5 rounded-full" />
            <Skeleton className="w-20 h-5 rounded-full" />
          </div>
        </div>
        <Skeleton className="h-6 w-3/4 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-6" />
      </div>
      <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] mt-auto">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-10 w-full rounded-xl" />
      </div>
    </div>
  );
}

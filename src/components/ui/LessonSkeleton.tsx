import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function LessonSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-in fade-in duration-700", className)}>
      <Skeleton className="h-10 w-3/4 mb-6" />
      <Skeleton className="h-6 w-full mb-4" />
      <Skeleton className="h-6 w-5/6 mb-8" />

      <Skeleton className="h-40 w-full mb-8 rounded-xl" />

      <Skeleton className="h-8 w-1/2 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-4/5 mb-8" />
      
      <div className="flex gap-4">
        <Skeleton className="h-12 w-32 rounded-lg" />
        <Skeleton className="h-12 w-32 rounded-lg" />
      </div>
    </div>
  );
}

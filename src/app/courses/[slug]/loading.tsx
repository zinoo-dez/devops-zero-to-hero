import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { LessonSkeleton } from "@/components/ui/LessonSkeleton";

export default function CourseLoading() {
  return (
    <div className="min-h-screen pb-20 animate-in fade-in duration-700">
      {/* Course Header Skeleton */}
      <div className="w-full h-[40vh] min-h-[350px] bg-slate-900 flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <Skeleton className="h-4 w-32 mb-6 bg-white/20" />
          <Skeleton className="h-12 md:h-16 w-3/4 max-w-2xl mb-4 bg-white/20" />
          <Skeleton className="h-6 w-5/6 max-w-3xl mb-8 bg-white/20" />
          <div className="flex gap-4">
            <Skeleton className="h-6 w-24 bg-white/20" />
            <Skeleton className="h-6 w-24 bg-white/20" />
            <Skeleton className="h-6 w-24 bg-white/20" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            <LessonSkeleton />
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] p-6 shadow-xl space-y-6">
              <div>
                <Skeleton className="h-3 w-24 mb-2" />
                <Skeleton className="h-6 w-48 mb-4" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full" />
              </div>
              <Skeleton className="h-12 w-full rounded-xl" />
              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

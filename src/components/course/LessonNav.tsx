import React from "react";
import Link from "next/link";
import { LessonMeta } from "@/lib/courses";
import { ChevronLeft, ChevronRight, CheckCircle, Sparkles } from "lucide-react";

interface LessonNavProps {
  courseSlug: string;
  courseTitle?: string;
  prevLesson?: LessonMeta;
  nextLesson?: LessonMeta;
}

export function LessonNav({
  courseSlug,
  prevLesson,
  nextLesson,
}: LessonNavProps) {
  return (
    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Prev Button */}
      {prevLesson ? (
        <Link
          href={`/courses/${courseSlug}/${prevLesson.slug}`}
          className="w-full sm:w-auto group flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-slate-300 dark:hover:border-white/20 transition-all text-left"
        >
          <ChevronLeft className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:-translate-x-1 transition-transform shrink-0" />
          <div>
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">
              Previous Lesson
            </span>
            <div className="text-sm font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
              {prevLesson.title}
            </div>
          </div>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {/* Next Button */}
      {nextLesson ? (
        <Link
          href={`/courses/${courseSlug}/${nextLesson.slug}`}
          className="w-full sm:w-auto group flex items-center justify-between gap-3 p-4 rounded-xl border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-950/20 hover:bg-blue-100 dark:hover:bg-blue-950/40 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all text-right sm:ml-auto"
        >
          <div>
            <span className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 tracking-wider flex items-center justify-end gap-1">
              Next Lesson <Sparkles className="w-3 h-3" />
            </span>
            <div className="text-sm font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors line-clamp-1">
              {nextLesson.title}
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform shrink-0" />
        </Link>
      ) : (
        <Link
          href="/courses"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:from-blue-500 hover:to-indigo-500 transition-all"
        >
          <CheckCircle className="w-4 h-4" />
          <span>Complete Course & Explore Next</span>
        </Link>
      )}
    </div>
  );
}

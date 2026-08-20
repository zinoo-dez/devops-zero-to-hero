"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Course } from "@/lib/courses";
import { CheckCircle2, Clock, ChevronLeft, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgress } from "@/hooks/useProgress";

interface LessonSidebarProps {
  course: Course;
  currentLessonSlug: string;
  lang: string;
}

export function LessonSidebar({
  course,
  currentLessonSlug,
  lang,
}: LessonSidebarProps) {
  const { markComplete, isComplete, getCompletedCount, resetProgress } =
    useProgress();

  // Auto-mark the current lesson as complete when the user opens it
  useEffect(() => {
    markComplete(course.slug, currentLessonSlug);
  }, [course.slug, currentLessonSlug, markComplete]);

  const completedCount = getCompletedCount(course.slug);
  const progressPercent = Math.round(
    (completedCount / course.lessons.length) * 100
  );

  return (
    <aside className="w-full lg:w-80 shrink-0 border-r border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-[#09090d] flex flex-col h-[calc(100vh-4rem)] sticky top-16 overflow-hidden">
      {/* Course Top Title & Back link */}
      <div className="p-5 border-b border-slate-200 dark:border-white/8 space-y-3">
        <Link
          href={`/${lang}/courses/${course.slug}`}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Course Outline</span>
        </Link>

        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
            Course {String(course.order + 1).padStart(2, "0")}
          </span>
          <h2 className="text-base font-bold text-foreground line-clamp-1 mt-0.5">
            {course.title}
          </h2>
        </div>

        {/* Progress Tracker */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span className="font-semibold text-foreground">
              {completedCount} / {course.lessons.length} ({progressPercent}%)
            </span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-linear-to-r from-blue-500 to-indigo-600 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Reset Progress */}
        {completedCount > 0 && (
          <button
            onClick={() => resetProgress(course.slug)}
            className="inline-flex items-center gap-1.5 text-[10px] text-muted-foreground hover:text-red-400 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            Reset progress
          </button>
        )}
      </div>

      {/* Lesson List Scroll */}
      <div className="flex-1 overflow-y-auto p-4 space-y-1.5 sidebar-scroll">
        {course.lessons.map((lesson, idx) => {
          const isActive = lesson.slug === currentLessonSlug;
          const completed = isComplete(course.slug, lesson.slug);

          return (
            <Link
              key={lesson.slug}
              href={`/${lang}/courses/${course.slug}/${lesson.slug}`}
              className={cn(
                "flex items-start gap-3 p-3 rounded-xl text-xs transition-all group",
                isActive
                  ? "bg-blue-50 dark:bg-blue-600/15 border border-blue-500/40 text-blue-700 dark:text-white font-semibold shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/4 border border-transparent"
              )}
            >
              <div
                className={cn(
                  "w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5",
                  isActive
                    ? "bg-blue-500 text-white shadow-md shadow-blue-500/30"
                    : completed
                    ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                    : "bg-slate-200 dark:bg-white/5 text-muted-foreground group-hover:text-foreground"
                )}
              >
                {completed && !isActive ? (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                ) : (
                  idx + 1
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className={cn("truncate", isActive && "text-blue-700 dark:text-blue-200")}>
                  {lesson.title}
                </div>
                <div className="text-[10px] text-muted-foreground/70 flex items-center gap-1 mt-0.5">
                  <Clock className="w-2.5 h-2.5" />
                  {lesson.duration}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}



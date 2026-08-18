import React from "react";
import Link from "next/link";
import { Course } from "@/lib/courses";
import { PlayCircle, Lock, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseOutlineProps {
  course: Course;
}

export function CourseOutline({ course }: CourseOutlineProps) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-foreground">Course Curriculum</h3>
          <p className="text-xs text-muted-foreground mt-1">
            {course.lessons.length} comprehensive lessons • {course.duration} total time
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {course.lessons.map((lesson, idx) => {
          const isAccessible = course.hasFullContent;
          const href = `/courses/${course.slug}/${lesson.slug}`;

          return (
            <div
              key={lesson.slug}
              className={cn(
                "group relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-white/[0.06] transition-all",
                isAccessible
                  ? "bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/30"
                  : "bg-white/[0.01] opacity-75"
              )}
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 text-muted-foreground group-hover:text-blue-400 group-hover:border-blue-500/30 text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>

                <div>
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-blue-400 transition-colors">
                    {lesson.title}
                  </h4>
                  {lesson.description && (
                    <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                      {lesson.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 pl-10 sm:pl-0">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3 text-blue-400" />
                  {lesson.duration}
                </span>

                {isAccessible ? (
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/30 transition-colors"
                  >
                    <PlayCircle className="w-3.5 h-3.5" />
                    <span>Start</span>
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-white/5 text-muted-foreground border border-white/10">
                    <Lock className="w-3 h-3" />
                    Coming soon
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

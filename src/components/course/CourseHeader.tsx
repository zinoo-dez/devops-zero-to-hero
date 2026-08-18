import React from "react";
import Link from "next/link";
import { Course } from "@/lib/courses";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { ChevronRight, Clock, BookOpen, CheckCircle2 } from "lucide-react";

interface CourseHeaderProps {
  course: Course;
}

export function CourseHeader({ course }: CourseHeaderProps) {
  return (
    <div className="relative border-b border-white/[0.08] bg-white/[0.02] py-12 lg:py-16 overflow-hidden">
      {/* Subtle Red Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/courses" className="hover:text-foreground transition-colors">
            Courses
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold truncate">
            {course.title}
          </span>
        </nav>

        <div className="max-w-3xl space-y-4">
          <div className="flex items-center flex-wrap gap-3 mb-6">
            <LevelBadge level={course.level} />
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30">
              Course 0{course.order + 1}
            </span>
            {course.hasFullContent && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30">
                Interactive MDX Content Ready
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
            {course.title}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {course.longDescription}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-2 font-medium">
              <Clock className="w-4 h-4 text-blue-400" />
              Duration: {course.duration}
            </span>
            <span className="flex items-center gap-2 font-medium">
              <BookOpen className="w-4 h-4 text-blue-400" />
              {course.lessonCount} Structured Lessons
            </span>
            <span className="flex items-center gap-2 font-medium text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              100% Free
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

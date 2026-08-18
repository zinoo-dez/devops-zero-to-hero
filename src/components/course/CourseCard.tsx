"use client";

import React from "react";
import Link from "next/link";
import { Course } from "@/lib/courses";
import { LevelBadge } from "@/components/ui/LevelBadge";
import { Clock, BookOpen, ArrowRight, Terminal, GitBranch, Zap, Box, Layers, Compass, Cpu, Trophy, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  GitBranch,
  Zap,
  Workflow,
  Box,
  Layers,
  Compass,
  Cpu,
  Trophy,
};

interface CourseCardProps {
  course: Course;
  className?: string;
}

export function CourseCard({ course, className }: CourseCardProps) {
  const IconComponent = iconMap[course.icon] || BookOpen;

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={cn(
        "group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-6 backdrop-blur-xl transition-all duration-300 shadow-xl",
        "hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-blue-500/10",
        className
      )}
    >
      {/* Top bar: Icon & Level */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div
            className={cn(
              "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform",
              course.color
            )}
          >
            <IconComponent className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2">
            {course.hasFullContent && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30 tracking-wider uppercase">
                Ready
              </span>
            )}
            <LevelBadge level={course.level} />
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
          {course.description}
        </p>
      </div>

      {/* Bottom Metadata & Link */}
      <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] mt-auto">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            {course.lessonCount} lessons
          </span>
        </div>

        {/* Action Link */}
        <Link
          href={`/courses/${course.slug}`}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-foreground hover:text-white border border-slate-200 dark:border-white/10 hover:border-transparent transition-all group/btn"
        >
          <span>View Curriculum</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

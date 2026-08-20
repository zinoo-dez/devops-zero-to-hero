"use client";

import React from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CourseCard } from "@/components/course/CourseCard";
import { getFeaturedCourses } from "@/lib/courses";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function FeaturedCourses() {
  const { t, language } = useLanguage();
  const featured = getFeaturedCourses(language);

  return (
    <section className="py-20 lg:py-28 relative bg-slate-50/50 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3 tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              {t.courses.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              {t.courses.title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-xl">
              {t.courses.subtitle}
            </p>
          </div>

          <Link
            href={`/${language}/courses`}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <span>{t.courses.explore}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.slice(0, 6).map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

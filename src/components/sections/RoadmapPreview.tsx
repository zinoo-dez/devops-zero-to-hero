"use client";

import React from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllCourses } from "@/lib/courses";
import { ArrowRight, Map, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function RoadmapPreview() {
  const courses = getAllCourses();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Learning Path"
          title="Your 9-Step Roadmap to"
          highlight="DevOps Mastery"
          subtitle="A structured, zero-confusion journey designed so every concept naturally unlocks the next one."
        />

        {/* Interactive Roadmap Track */}
        <div className="relative mt-12">
          {/* Horizontal line for desktop (Red/Rose Gradient) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/40 to-blue-500/20 -translate-y-1/2 -z-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {courses.map((course, idx) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  href={`/courses/${course.slug}`}
                  className="group relative flex flex-col justify-between p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 shadow-lg h-full"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-bold flex items-center justify-center">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Step {idx + 1}
                      </span>
                    </div>

                    <span
                      className={cn(
                        "text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border",
                        course.level === "Beginner" &&
                          "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                        course.level === "Intermediate" &&
                          "bg-cyan-500/10 text-amber-400 border-cyan-500/20",
                        course.level === "Advanced" &&
                          "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                      )}
                    >
                      {course.level}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground text-base group-hover:text-blue-400 transition-colors line-clamp-1 mb-1">
                      {course.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-white/[0.06] mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{course.duration}</span>
                    <span className="flex items-center gap-1 text-blue-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                      Explore <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to full roadmap */}
        <div className="mt-12 text-center">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-foreground border border-slate-200 dark:border-white/10 hover:border-blue-500/40 transition-all shadow-md"
          >
            <Map className="w-4 h-4 text-blue-400" />
            Launch Full Interactive Architecture Roadmap
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}

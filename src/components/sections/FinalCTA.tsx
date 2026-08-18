"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Map, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-blue-500/30 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-blue-950/50 dark:via-[#140a0e]/90 dark:to-[#0c0c16]/95 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl shadow-slate-200 dark:shadow-blue-500/10"
        >
          {/* Background Decorative Circles */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/40">
              <Sparkles className="w-3.5 h-3.5" />
              Free Access Forever
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
              Ready to Become a Confident <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-600 dark:from-white dark:via-blue-200 dark:to-indigo-400 bg-clip-text text-transparent">
                DevOps Hero?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Start with Lesson 1 of Linux Command Line right now. No setup required, no credit card, no sign-in friction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/courses/linux-command-line/01-why-linux-matters"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Terminal className="w-4 h-4" />
                Start Course 01: Linux CLI
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold tracking-wide bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/15 text-foreground dark:text-white border border-slate-300 dark:border-white/15 hover:border-blue-500/30 dark:hover:border-white/25 transition-all"
              >
                Browse All 13 Courses
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

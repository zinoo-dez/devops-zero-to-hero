"use client";

import React from "react";
import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { ArrowRight, Sparkles, Map, Terminal, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function HeroSection() {
  const { t, language } = useLanguage();
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 bg-mesh bg-dot-grid">
      {/* Glow gradient backdrops (60-20 White-Dark-Blue) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action Buttons (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/25 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-blue-400" />
              {t.hero.pill}
            </div>

            {/* Headline with 60% White dominant & Red Highlight */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black tracking-tight text-foreground leading-[1.08]">
              {t.hero.titlePart1} <br />
              <GradientText gradient="from-slate-900 via-blue-700 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-500">
                {t.hero.titlePart2}
              </GradientText>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href={`/${language}/courses/linux-command-line/01-why-linux-matters`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Terminal className="w-4 h-4" />
                {t.hero.ctaStart}
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={`/${language}/roadmap`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-sm font-bold tracking-wide bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-foreground border border-slate-300 dark:border-white/10 hover:border-blue-500/30 transition-all"
              >
                <Map className="w-4 h-4 text-blue-400" />
                {t.hero.ctaRoadmap}
              </Link>
            </div>

            {/* Feature bullets */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200 dark:border-white/[0.08] text-xs font-medium text-muted-foreground">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.hero.feature1}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t.hero.feature2}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{t.hero.feature3}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating Interactive Visual Cluster (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <FloatingIcons />
          </div>
        </div>
      </div>
    </section>
  );
}

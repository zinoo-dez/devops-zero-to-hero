import React from "react";
import type { Metadata } from "next";
import { RoadmapCanvas } from "@/components/roadmap/RoadmapCanvas";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { translations } from "@/lib/i18n/translations";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "my" }];
}
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations]?.roadmapPage || translations.en.roadmapPage;

  return {
    title: t.metaTitle,
    description: t.metaDesc,
    openGraph: {
      title: t.metaTitle,
      description: t.metaDesc,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 675,
          alt: "Interactive DevOps Roadmap",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.metaDesc,
      images: ["/og-image.png"],
    },
  };
}

export default async function RoadmapPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations]?.roadmapPage || translations.en.roadmapPage;

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.badge}
          title={t.title}
          highlight={t.highlight}
          subtitle={t.subtitle}
        />

        <RoadmapCanvas />

        {/* Roadmap Guide Cards below canvas */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] backdrop-blur-xl">
            <span className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400 font-bold flex items-center justify-center text-xs mb-3">
              01
            </span>
            <h4 className="text-sm font-bold text-foreground mb-1.5">
              {t.step1Title}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t.step1Desc}
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] backdrop-blur-xl">
            <span className="w-7 h-7 rounded-xl bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/20 dark:text-indigo-400 font-bold flex items-center justify-center text-xs mb-3">
              02
            </span>
            <h4 className="text-sm font-bold text-foreground mb-1.5">
              {t.step2Title}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t.step2Desc}
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] backdrop-blur-xl">
            <span className="w-7 h-7 rounded-xl bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-400 font-bold flex items-center justify-center text-xs mb-3">
              03
            </span>
            <h4 className="text-sm font-bold text-foreground mb-1.5">
              {t.step3Title}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t.step3Desc}
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02] backdrop-blur-xl">
            <span className="w-7 h-7 rounded-xl bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400 font-bold flex items-center justify-center text-xs mb-3">
              04
            </span>
            <h4 className="text-sm font-bold text-foreground mb-1.5">
              {t.step4Title}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t.step4Desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

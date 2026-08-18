import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllCourses, getCourseBySlug } from "@/lib/courses";
import { CourseHeader } from "@/components/course/CourseHeader";
import { LearningObjectives } from "@/components/course/LearningObjectives";
import { CourseOutline } from "@/components/course/CourseOutline";
import { PlayCircle, ShieldCheck, Zap, Sparkles, Terminal } from "lucide-react";

export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | DevOps Zero to Hero",
    };
  }

  return {
    title: `${course.title} | DevOps Zero to Hero`,
    description: course.description,
    openGraph: {
      title: `${course.title} | DevOps Zero to Hero`,
      description: course.description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 675,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | DevOps Zero to Hero`,
      description: course.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const firstLesson = course.lessons[0];
  const startHref = firstLesson
    ? `/courses/${course.slug}/${firstLesson.slug}`
    : "#";

  return (
    <div className="min-h-screen pb-20">
      <CourseHeader course={course} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <LearningObjectives objectives={course.learningObjectives} />
            <CourseOutline course={course} />
          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Action Card */}
            <div className="rounded-2xl border border-slate-200 dark:border-indigo-500/30 bg-gradient-to-b from-slate-50 to-white dark:from-indigo-950/40 dark:to-[#0c0c16] p-6 backdrop-blur-xl shadow-xl space-y-6 sticky top-24">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Ready to start?
                </span>
                <h3 className="text-xl font-bold text-foreground mt-1">
                  Begin Course 0{course.order + 1}
                </h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Start with the first lesson. No prior setup required. Complete step-by-step guidance.
                </p>
              </div>

              {course.hasFullContent ? (
                <Link
                  href={startHref}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <PlayCircle className="w-4 h-4" />
                  Start First Lesson
                </Link>
              ) : (
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Draft Module</span>
                  <p className="mt-1">Full interactive MDX coming soon.</p>
                </div>
              )}

              {/* Course Meta Info */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] space-y-3 text-xs text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Level:</span>
                  <span className="font-semibold text-foreground">{course.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Estimated Duration:</span>
                  <span className="font-semibold text-foreground">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Total Lessons:</span>
                  <span className="font-semibold text-foreground">{course.lessonCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Access:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">100% Free Forever</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getLessonBySlug, getAllCourses } from "@/lib/courses";
import { getLessonContent, getAllLessonParams } from "@/lib/mdx";
import { LessonSidebar } from "@/components/course/LessonSidebar";
import { LessonNav } from "@/components/course/LessonNav";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import { ChevronRight, Clock, BookOpen, Share2 } from "lucide-react";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  return getAllLessonParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>;
}): Promise<Metadata> {
  const { slug, lesson: lessonSlug } = await params;
  const result = getLessonBySlug(slug, lessonSlug);

  if (!result) {
    return {
      title: "Lesson Not Found | DevOps Zero to Hero",
    };
  }

  return {
    title: `${result.lesson.title} - ${result.course.title} | DevOps Zero to Hero`,
    description: `Lesson ${result.index + 1}: ${result.lesson.title}. Master modern DevOps fundamentals with hands-on examples and diagrams.`,
    openGraph: {
      title: `${result.lesson.title} - ${result.course.title} | DevOps Zero to Hero`,
      description: `Lesson ${result.index + 1}: ${result.lesson.title}. Master modern DevOps fundamentals with hands-on examples and diagrams.`,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 675,
          alt: `${result.lesson.title} - ${result.course.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${result.lesson.title} - ${result.course.title} | DevOps Zero to Hero`,
      description: `Lesson ${result.index + 1}: ${result.lesson.title}. Master modern DevOps fundamentals with hands-on examples and diagrams.`,
      images: ["/og-image.png"],
    },
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string; lesson: string }>;
}) {
  const { lang, slug, lesson: lessonSlug } = await params;
  const result = getLessonBySlug(slug, lessonSlug, lang);

  if (!result) {
    notFound();
  }

  const rawMdx = getLessonContent(slug, lessonSlug, lang);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sticky Left Sidebar */}
      <LessonSidebar
        course={result.course}
        currentLessonSlug={result.lesson.slug}
        lang={lang}
      />

      {/* Main Reading Area */}
      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-14 w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
          <Link href={`/${lang}/courses`} className="hover:text-foreground transition-colors">
            Courses
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href={`/${lang}/courses/${result.course.slug}`}
            className="hover:text-foreground transition-colors truncate max-w-[150px] sm:max-w-none"
          >
            {result.course.title}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">
            Lesson {result.index + 1}
          </span>
        </nav>

        {/* Lesson Header Meta */}
        <div className="pb-6 border-b border-slate-200 dark:border-white/[0.08] mb-8">
          <div className="flex items-center gap-3 text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider mb-2">
            <span>
              Lesson {result.index + 1} of {result.course.lessons.length}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
              {result.lesson.duration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
            {result.lesson.title}
          </h1>
        </div>

        {/* MDX Article Body */}
        <article className="prose-devops w-full">
          {rawMdx ? (
            <MDXRemote
              source={rawMdx}
              components={MDXComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          ) : (
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] text-center space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                Lesson Content in Preparation
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                This lesson is currently being drafted with interactive exercises and diagrams.
              </p>
            </div>
          )}
        </article>

        {/* Bottom Navigation */}
        <LessonNav
          courseSlug={result.course.slug}
          prevLesson={result.prevLesson}
          nextLesson={result.nextLesson}
          courseTitle={result.course.title}
          lang={lang}
        />
      </div>
    </div>
  );
}

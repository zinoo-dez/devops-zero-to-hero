import React from "react";
import type { Metadata } from "next";
import { getAllCourses } from "@/lib/courses";
import { CourseGrid } from "@/components/course/CourseGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { translations } from "@/lib/i18n/translations";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations]?.coursesPage || translations.en.coursesPage;

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
          alt: t.metaTitle,
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

export default async function CoursesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const courses = getAllCourses(lang);
  const t = translations[lang as keyof typeof translations]?.coursesPage || translations.en.coursesPage;

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t.badge}
          title={t.title}
          highlight={t.highlight}
          subtitle={t.subtitle}
        />

        <CourseGrid courses={courses} />
      </div>
    </div>
  );
}

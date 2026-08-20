import { getAllLessonParams } from "@/lib/mdx";
import { CourseLessonRedirectClient } from "./CourseLessonRedirectClient";

export function generateStaticParams() {
  return getAllLessonParams();
}

export default async function CourseLessonRedirect({
  params,
}: {
  params: Promise<{ slug: string; lesson: string }>;
}) {
  const { slug, lesson } = await params;
  return <CourseLessonRedirectClient slug={slug} lesson={lesson} />;
}

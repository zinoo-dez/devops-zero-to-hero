import { getAllCourses } from "@/lib/courses";
import { CourseRedirectClient } from "./CourseRedirectClient";

export function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CourseRedirectClient slug={slug} />;
}

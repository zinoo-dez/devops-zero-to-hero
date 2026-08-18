import { MetadataRoute } from "next";
import { getAllCourses } from "@/lib/courses";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devops-zero-to-hero.dev";
  const courses = getAllCourses();

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roadmap`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  const courseRoutes = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const lessonRoutes: MetadataRoute.Sitemap = [];
  for (const course of courses) {
    if (!course.hasFullContent) continue;
    for (const lesson of course.lessons) {
      lessonRoutes.push({
        url: `${baseUrl}/courses/${course.slug}/${lesson.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  return [...staticRoutes, ...courseRoutes, ...lessonRoutes];
}

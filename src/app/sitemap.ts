import { MetadataRoute } from "next";
import { getAllCourses } from "@/lib/courses";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devops-zero-to-hero.dev";
  const courses = getAllCourses();
  const langs = ["en", "my"];

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roadmap`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  for (const lang of langs) {
    routes.push(
      {
        url: `${baseUrl}/${lang}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1.0,
      },
      {
        url: `${baseUrl}/${lang}/courses`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/${lang}/roadmap`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      }
    );

    for (const course of courses) {
      routes.push({
        url: `${baseUrl}/${lang}/courses/${course.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });

      if (course.hasFullContent) {
        for (const lesson of course.lessons) {
          routes.push({
            url: `${baseUrl}/${lang}/courses/${course.slug}/${lesson.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
          });
        }
      }
    }
  }

  return routes;
}

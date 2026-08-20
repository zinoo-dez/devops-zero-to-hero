import fs from "fs";
import path from "path";
import { COURSES } from "./courses";

const CONTENT_PATH = path.join(process.cwd(), "content", "courses");
const MY_CONTENT_PATH = path.join(process.cwd(), "content", "my", "courses");

export interface LessonContent {
  slug: string;
  courseSlug: string;
  title: string;
  duration: string;
  content: string;
}

/**
 * Get the raw MDX content for a given course and lesson slug with frontmatter stripped.
 */
export function getLessonContent(
  courseSlug: string,
  lessonSlug: string,
  lang?: string
): string | null {
  try {
    let filePath = path.join(CONTENT_PATH, courseSlug, `${lessonSlug}.mdx`);
    
    if (lang === "my") {
      const myFilePath = path.join(MY_CONTENT_PATH, courseSlug, `${lessonSlug}.mdx`);
      if (fs.existsSync(myFilePath)) {
        filePath = myFilePath;
      }
    }

    if (!fs.existsSync(filePath)) {
      return null;
    }
    const raw = fs.readFileSync(filePath, "utf-8");
    
    // Strip YAML frontmatter (--- ... ---) from the start of the MDX file
    return raw.replace(/^---[\r\n]+([\s\S]*?)[\r\n]+---[\r\n]*/, "").trim();
  } catch (error) {
    console.error(`Error reading lesson ${courseSlug}/${lessonSlug}:`, error);
    return null;
  }
}

/**
 * Returns all static parameters for lesson paths (used in generateStaticParams)
 */
export function getAllLessonParams(): { slug: string; lesson: string }[] {
  const params: { slug: string; lesson: string }[] = [];

  for (const course of COURSES) {
    if (!course.hasFullContent) continue;
    for (const lesson of course.lessons) {
      params.push({
        slug: course.slug,
        lesson: lesson.slug,
      });
    }
  }

  return params;
}

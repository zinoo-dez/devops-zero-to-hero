"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function CourseRedirectClient({ slug }: { slug: string }) {
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("app-language") || "en";
    const lang = saved === "my" ? "my" : "en";
    router.replace(`/${lang}/courses/${slug}`);
  }, [router, slug]);

  return (
    <div className="flex h-[70vh] w-full items-center justify-center bg-background text-foreground">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
        <p className="text-sm text-muted-foreground font-medium tracking-wide">Loading course...</p>
      </div>
    </div>
  );
}

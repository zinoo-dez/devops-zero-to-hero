"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "devops-progress";

type ProgressMap = Record<string, string[]>; // { [courseSlug]: [lessonSlug, ...] }

function readProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    return {};
  }
}

function writeProgress(progress: ProgressMap): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Silently ignore storage errors (private browsing, quota exceeded)
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>({});

  // Hydrate from localStorage on mount
  useEffect(() => {
    setProgress(readProgress());
  }, []);

  /** Mark a lesson as completed */
  const markComplete = useCallback(
    (courseSlug: string, lessonSlug: string) => {
      setProgress((prev) => {
        const existing = prev[courseSlug] ?? [];
        if (existing.includes(lessonSlug)) return prev; // already done

        const updated: ProgressMap = {
          ...prev,
          [courseSlug]: [...existing, lessonSlug],
        };
        writeProgress(updated);
        return updated;
      });
    },
    []
  );

  /** Check if a specific lesson is completed */
  const isComplete = useCallback(
    (courseSlug: string, lessonSlug: string): boolean => {
      return progress[courseSlug]?.includes(lessonSlug) ?? false;
    },
    [progress]
  );

  /** Get number of completed lessons for a course */
  const getCompletedCount = useCallback(
    (courseSlug: string): number => {
      return progress[courseSlug]?.length ?? 0;
    },
    [progress]
  );

  /** Get all completed lesson slugs for a course */
  const getCompletedLessons = useCallback(
    (courseSlug: string): string[] => {
      return progress[courseSlug] ?? [];
    },
    [progress]
  );

  /** Reset all progress (for a single course or all) */
  const resetProgress = useCallback((courseSlug?: string) => {
    setProgress((prev) => {
      let updated: ProgressMap;
      if (courseSlug) {
        updated = { ...prev };
        delete updated[courseSlug];
      } else {
        updated = {};
      }
      writeProgress(updated);
      return updated;
    });
  }, []);

  return {
    markComplete,
    isComplete,
    getCompletedCount,
    getCompletedLessons,
    resetProgress,
    progress,
  };
}

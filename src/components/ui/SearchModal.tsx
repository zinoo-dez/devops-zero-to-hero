"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, BookOpen, Layers, Sparkles, Clock, Hash } from "lucide-react";
import { COURSES, getAllCourses } from "@/lib/courses";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

// ─── Search Result Interface ────────────────────────────────────────────────
interface SearchResult {
  id: string;
  type: "course" | "lesson";
  courseSlug: string;
  courseTitle: string;
  courseBadge: string;
  lessonSlug?: string;
  lessonTitle?: string;
  lessonNumber?: number;
  duration?: string;
  description: string;
  href: string;
  score?: number;
}

// ─── Build Search Index across all courses and lessons for the current language ───
function buildIndex(language: string = "en"): SearchResult[] {
  const index: SearchResult[] = [];
  const courses = getAllCourses(language);

  for (const course of courses) {
    if (!course.hasFullContent) continue;

    // 1. Course-level entry
    index.push({
      id: `course-${course.slug}`,
      type: "course",
      courseSlug: course.slug,
      courseTitle: course.title,
      courseBadge: course.level,
      description: `${course.description} ${course.tags.join(" ")}`,
      duration: course.duration,
      href: `/${language}/courses/${course.slug}`,
    });

    // 2. Lesson-level entries
    course.lessons.forEach((lesson, lIdx) => {
      index.push({
        id: `lesson-${course.slug}-${lesson.slug}`,
        type: "lesson",
        courseSlug: course.slug,
        courseTitle: course.title,
        courseBadge: course.level,
        lessonSlug: lesson.slug,
        lessonTitle: lesson.title,
        lessonNumber: lIdx + 1,
        duration: lesson.duration,
        description: lesson.description || `${course.title} - Lesson ${lIdx + 1}`,
        href: `/${language}/courses/${course.slug}/${lesson.slug}`,
      });
    });
  }

  return index;
}

const POPULAR_SEARCHES = [
  "Docker Compose",
  "Kubernetes Pods",
  "GitHub Actions",
  "Linux Permissions",
  "SSH Keys",
  "Git Rebase",
  "CI/CD Pipeline",
  "K3s Traefik",
];

// ─── High-Accuracy Weighted Search Function ─────────────────────────────────
function searchItems(query: string, searchIndex: SearchResult[]): SearchResult[] {
  const rawQ = query.trim().toLowerCase();
  if (!rawQ) return [];

  const terms = rawQ.split(/\s+/).filter(Boolean);

  const scoredResults: SearchResult[] = [];

  for (const item of searchIndex) {
    const lTitle = item.lessonTitle ? item.lessonTitle.toLowerCase() : "";
    const cTitle = item.courseTitle.toLowerCase();
    const desc = item.description.toLowerCase();

    let score = 0;

    // Check if all search terms match somewhere in the item
    const allTermsMatch = terms.every(
      (term) => lTitle.includes(term) || cTitle.includes(term) || desc.includes(term)
    );

    if (!allTermsMatch) continue;

    // Scoring heuristics:
    if (lTitle === rawQ) score += 120;
    else if (lTitle.startsWith(rawQ)) score += 90;
    else if (lTitle.includes(rawQ)) score += 60;

    if (cTitle === rawQ) score += 80;
    else if (cTitle.includes(rawQ)) score += 40;

    for (const term of terms) {
      if (lTitle.includes(term)) score += 20;
      if (cTitle.includes(term)) score += 10;
      if (desc.includes(term)) score += 5;
    }

    if (item.type === "lesson" && terms.length > 1) {
      score += 15;
    }

    scoredResults.push({ ...item, score });
  }

  scoredResults.sort((a, b) => (b.score || 0) - (a.score || 0));

  return scoredResults.slice(0, 12);
}

// ─── Modal Component ────────────────────────────────────────────────────────
interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(0);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  const searchIndex = useMemo(() => buildIndex(language), [language]);
  const results = useMemo(() => searchItems(query, searchIndex), [query, searchIndex]);
  const quickCourses = useMemo(() => getAllCourses(language).slice(0, 4), [language]);

  // Reset when opening
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Reset active index when query results change
  useEffect(() => {
    setActiveIdx(0);
  }, [results]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const navigate = useCallback(
    (href: string) => {
      const targetHref = href.startsWith(`/${language}`)
        ? href
        : href.startsWith("/")
        ? `/${language}${href}`
        : `/${language}/${href}`;
      router.push(targetHref);
      onClose();
    },
    [router, onClose, language]
  );

  // Keyboard navigation inside list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
      return;
    }

    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[activeIdx]) {
        navigate(results[activeIdx].href);
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${activeIdx}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIdx]);

  if (!open || !mounted) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-99999 flex items-start justify-center pt-[8vh] sm:pt-[10vh] px-4 sm:px-6 animate-in fade-in duration-150"
      onPointerDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      aria-modal="true"
      role="dialog"
    >
      {/* Clean Dim Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/45 dark:bg-black/75 transition-opacity cursor-pointer"
      />

      {/* Main Search Panel */}
      <div
        className={cn(
          "relative z-10 w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden transition-all duration-200 animate-in zoom-in-95",
          isDark
            ? "border-white/10 bg-[#0c0d16] text-white shadow-black/90"
            : "border-slate-200/90 bg-white text-slate-900 shadow-2xl shadow-slate-400/30"
        )}
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar (Spacious padding & zero harsh blue outline) */}
        <div
          className={cn(
            "flex items-center gap-4 px-6 sm:px-8 py-5 border-b transition-colors",
            isDark
              ? "border-white/10 bg-white/2"
              : "border-slate-200/80 bg-slate-50/40"
          )}
        >
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search all DevOps courses, topics, and lessons..."
            className="flex-1 bg-transparent text-foreground placeholder:text-slate-400 dark:placeholder:text-slate-500 text-base sm:text-lg font-normal border-0 outline-none ring-0 shadow-none focus:outline-none focus:border-0 focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
            style={{ outline: "none", boxShadow: "none" }}
            aria-label="Search courses and lessons"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono text-muted-foreground hover:text-foreground bg-slate-200/70 dark:bg-white/10 border border-slate-300/80 dark:border-white/10 cursor-pointer select-none"
            >
              ESC
            </button>
          )}
        </div>

        {/* Dynamic Results Area */}
        <div className="max-h-[62vh] overflow-y-auto">
          {query.trim() === "" ? (
            /* Empty State: Quick Suggestions & Course Jump with increased padding */
            <div className="p-6 sm:p-8 space-y-7">
              {/* Popular Searches */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  Popular Topics
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {POPULAR_SEARCHES.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setQuery(topic)}
                      className={cn(
                        "px-3.5 py-2 rounded-xl text-xs font-medium border transition-all hover:scale-105 flex items-center gap-1.5 cursor-pointer",
                        isDark
                          ? "bg-white/5 border-white/10 text-slate-300 hover:bg-indigo-500/20 hover:border-indigo-400/50 hover:text-white"
                          : "bg-slate-100/90 border-slate-200 text-slate-700 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-700"
                      )}
                    >
                      <Hash className="w-3.5 h-3.5 text-indigo-500 opacity-60" />
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Course Links */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3.5">
                  <Layers className="w-3.5 h-3.5 text-blue-500" />
                  Explore Core Tracks
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quickCourses.map((c) => (
                    <button
                      key={c.slug}
                      onClick={() => navigate(`/${language}/courses/${c.slug}`)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-2xl border text-left transition-all group cursor-pointer",
                        isDark
                          ? "bg-white/3 border-white/5 hover:border-indigo-500/40 hover:bg-indigo-950/20"
                          : "bg-slate-50/80 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40"
                      )}
                    >
                      <div className="min-w-0 pr-3">
                        <div className="text-[13px] sm:text-sm font-bold text-foreground truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                          {c.title}
                        </div>
                        <div className="text-xs text-muted-foreground truncate mt-1">
                          {c.lessons.length} Lessons • {c.duration}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : results.length > 0 ? (
            /* Search Results List */
            <div ref={listRef} className="py-2.5 divide-y divide-slate-100 dark:divide-white/[0.04]">
              {results.map((result, idx) => {
                const isSelected = idx === activeIdx;

                return (
                  <button
                    key={result.id}
                    data-idx={idx}
                    onClick={() => navigate(result.href)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={cn(
                      "w-full flex items-center gap-4 px-6 sm:px-8 py-3.5 text-left transition-all group cursor-pointer",
                      isSelected
                        ? isDark
                          ? "bg-indigo-950/40 border-l-4 border-indigo-400 pl-5 sm:pl-7"
                          : "bg-indigo-50/80 border-l-4 border-indigo-600 pl-5 sm:pl-7"
                        : "hover:bg-slate-50 dark:hover:bg-white/[0.03]"
                    )}
                  >
                    {/* Icon Column */}
                    <div
                      className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                        result.type === "course"
                          ? "bg-blue-500/15 text-blue-600 dark:text-blue-400"
                          : isSelected
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 dark:bg-white/10 text-muted-foreground"
                      )}
                    >
                      {result.type === "course" ? (
                        <Layers className="w-4.5 h-4.5" />
                      ) : (
                        <BookOpen className="w-4.5 h-4.5" />
                      )}
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={cn(
                            "text-[14px] sm:text-[15px] font-semibold truncate",
                            isSelected
                              ? "text-indigo-700 dark:text-indigo-300"
                              : "text-foreground"
                          )}
                        >
                          {result.lessonTitle ?? result.courseTitle}
                        </span>
                        {result.type === "lesson" && result.lessonNumber && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-white/10 text-muted-foreground shrink-0">
                            #{result.lessonNumber}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground truncate">
                        <span>{result.courseTitle}</span>
                        {result.duration && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-indigo-400" />
                              {result.duration}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Right Arrow Indicator */}
                    <ArrowRight
                      className={cn(
                        "w-4 h-4 shrink-0 transition-all",
                        isSelected
                          ? "opacity-100 text-indigo-600 dark:text-indigo-400 translate-x-0"
                          : "opacity-0 -translate-x-1"
                      )}
                    />
                  </button>
                );
              })}
            </div>
          ) : (
            /* No Results Found */
            <div className="py-16 text-center px-6 space-y-2.5">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mx-auto text-muted-foreground mb-3">
                <Search className="w-6 h-6 opacity-40" />
              </div>
              <div className="text-base font-semibold text-foreground">
                No matching lessons or courses
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                We couldn&apos;t find any results for &ldquo;
                <span className="text-foreground font-semibold">{query}</span>
                &rdquo;. Try searching for Docker, Kubernetes, Linux, or Git.
              </p>
            </div>
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div
          className={cn(
            "flex items-center justify-between px-6 sm:px-8 py-3.5 border-t text-xs text-muted-foreground",
            isDark ? "border-white/10 bg-white/[0.02]" : "border-slate-200/80 bg-slate-50/70"
          )}
        >
          <div className="flex items-center gap-3.5">
            <span className="inline-flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-white/10 border border-slate-300/80 dark:border-white/10 font-mono text-[10px]">
                ↑↓
              </kbd>
              to navigate
            </span>
            <span className="inline-flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200/80 dark:bg-white/10 border border-slate-300/80 dark:border-white/10 font-mono text-[10px]">
                ↵
              </kbd>
              to select
            </span>
          </div>

          <div className="font-medium text-[11px] sm:text-xs">
            {results.length > 0
              ? `${results.length} result${results.length > 1 ? "s" : ""}`
              : "DevOps Search Engine"}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}

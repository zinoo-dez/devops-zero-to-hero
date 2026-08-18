"use client";

import React, { useState, useMemo } from "react";
import { Course } from "@/lib/courses";
import { CourseCard } from "./CourseCard";
import { EmptyState } from "./EmptyState";
import { Search, Filter, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CourseGridProps {
  courses: Course[];
}

type LevelFilter = "ALL" | "Beginner" | "Intermediate" | "Advanced";

export function CourseGrid({ courses }: CourseGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<LevelFilter>("ALL");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesLevel =
        selectedLevel === "ALL" || course.level === selectedLevel;

      const matchesSearch =
        searchTerm.trim() === "" ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tags.some((t) =>
          t.toLowerCase().includes(searchTerm.toLowerCase())
        );

      return matchesLevel && matchesSearch;
    });
  }, [courses, selectedLevel, searchTerm]);

  const levelTabs: { id: LevelFilter; label: string }[] = [
    { id: "ALL", label: "All Levels" },
    { id: "Beginner", label: "Beginner" },
    { id: "Intermediate", label: "Intermediate" },
    { id: "Advanced", label: "Advanced" },
  ];

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-lg">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by topic, keyword, or tool..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
            >
              Clear
            </button>
          )}
        </div>

        {/* Level Tabs */}
        <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {levelTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedLevel(tab.id)}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer",
                selectedLevel === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Course Count Display */}
      <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
        <span>
          Showing <strong className="text-foreground">{filteredCourses.length}</strong> of{" "}
          {courses.length} courses
        </span>
        {selectedLevel !== "ALL" && (
          <span className="text-blue-400 font-medium">
            Filtered by: {selectedLevel}
          </span>
        )}
      </div>

      {/* Grid of Courses */}
      {filteredCourses.length === 0 ? (
        <EmptyState
          onClear={() => {
            setSearchTerm("");
            setSelectedLevel("ALL");
          }}
        />
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                key={course.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
